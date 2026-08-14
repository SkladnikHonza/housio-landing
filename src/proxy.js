import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import { routing } from './i18n/routing'

// Standardni next-intl (locale routing + cookie NEXT_LOCALE).
const intlProxy = createIntlMiddleware(routing)

// Mapa zeme (ISO kod z Vercel geo hlavicky x-vercel-ip-country) -> nas jazyk.
// Slouzi jen jako zaloha, kdyz prohlizec neposle jazyk, ktery umime.
const COUNTRY_TO_LOCALE = {
  CZ: 'cs', SK: 'cs',
  GB: 'en', IE: 'en', US: 'en', CA: 'en', AU: 'en', NZ: 'en',
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',
  IT: 'it', SM: 'it', VA: 'it',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es',
  UA: 'uk',
  RU: 'ru', BY: 'ru', KZ: 'ru',
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr',
}

// Vyber jazyka pro NOVEHO navstevnika (bez ulozene volby):
//   1) jazyk prohlizece / telefonu (Accept-Language) — nejpresnejsi signal
//      (Ital s italskym telefonem -> italsky, i kdyz je zrovna v cizine)
//   2) zeme podle IP (Vercel geo) — kdyz prohlizec posle jazyk, ktery neumime
//   3) cizinec, kde nic nesedi -> anglicky (radeji nez cesky)
//   4) uplny fallback -> vychozi jazyk (cs)
function vyberJazyk(request) {
  const podporovane = routing.locales

  const acceptLanguage = (request.headers.get('accept-language') || '').toLowerCase()
  for (const cast of acceptLanguage.split(',')) {
    const zaklad = cast.split(';')[0].trim().split('-')[0] // "it-it;q=0.9" -> "it"
    if (zaklad && podporovane.includes(zaklad)) return zaklad
  }

  const zeme = (request.headers.get('x-vercel-ip-country') || '').toUpperCase()
  if (zeme) {
    if (COUNTRY_TO_LOCALE[zeme]) return COUNTRY_TO_LOCALE[zeme]
    if (zeme === 'CZ' || zeme === 'SK') return 'cs'
    return 'en' // cizi zeme, jazyk prohlizece neumime -> anglicky
  }

  return routing.defaultLocale // cs
}

export function proxy(request) {
  const { pathname } = request.nextUrl
  const maUlozenouVolbu = request.cookies.has('NEXT_LOCALE')

  // Jen uvodni stranka bez ulozene volby: jazyk rozhodneme sami (prohlizec -> IP).
  // Kdyz vyjde jiny nez vychozi (cs), presmerujeme na /<jazyk> a zapamatujeme si to.
  // (Cesta uz s prefixem sem znovu nespadne -> zadna smycka.)
  if (pathname === '/' && !maUlozenouVolbu) {
    const jazyk = vyberJazyk(request)
    if (jazyk !== routing.defaultLocale) {
      const url = request.nextUrl.clone()
      url.pathname = `/${jazyk}`
      const res = NextResponse.redirect(url)
      res.cookies.set('NEXT_LOCALE', jazyk, { path: '/', maxAge: 60 * 60 * 24 * 365 })
      return res
    }
  }

  // Vse ostatni (vc. /it, /en, /kontakt ...) obslouzi standardni next-intl.
  return intlProxy(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
