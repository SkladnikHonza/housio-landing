import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const COUNTRY_TO_LOCALE = {
  CZ: 'cs', SK: 'cs',
  DE: 'de', AT: 'de', CH: 'de',
  IT: 'it',
  ES: 'es', MX: 'es', AR: 'es',
  FR: 'fr', BE: 'fr',
  UA: 'uk',
  RU: 'ru', BY: 'ru',
  GB: 'en', US: 'en', IE: 'en', AU: 'en', CA: 'en',
}

const intlProxy = createIntlMiddleware(routing)

export function proxy(request) {
  const { pathname } = request.nextUrl
  const hasLocaleCookie = request.cookies.has('NEXT_LOCALE')
  const hasLocalePrefix = routing.locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  )

  if (pathname === '/' && !hasLocaleCookie && !hasLocalePrefix) {
    const country = request.headers.get('x-vercel-ip-country')?.toUpperCase()
    const detected = country ? COUNTRY_TO_LOCALE[country] : null

    if (detected && detected !== routing.defaultLocale) {
      const url = request.nextUrl.clone()
      url.pathname = `/${detected}`
      return NextResponse.redirect(url)
    }
  }

  return intlProxy(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
