import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import { routing } from './i18n/routing'

// Standardni next-intl (locale routing + cookie NEXT_LOCALE).
const intlProxy = createIntlMiddleware(routing)

// Odhad jazyka podle země (Vercel geo) tady BYL a je pryč spolu
// s automatickým přesměrováním. Nabídku jiného jazyka dělá teď pruh nahoře,
// který se rozhoduje v prohlížeči podle Accept-Language — a to je přesnější
// signál než IP: Ital s italským telefonem chce italsky, i když je zrovna
// na dovolené v Chorvatsku.

export function proxy(request) {
  const { pathname } = request.nextUrl

  // ŽÁDNÉ AUTOMATICKÉ PŘESMĚROVÁNÍ PODLE JAZYKA PROHLÍŽEČE.
  //
  // Dřív jsme nového návštěvníka s cizím prohlížečem poslali na /<jazyk>.
  // Mělo to dvě vady:
  //   1) Google u přesměrované adresy neindexuje původní, ale cíl — česká
  //      úvodní stránka se tak Googlu jevila jako přesměrování na /en
  //      a do výsledků se dostávala anglická verze. Google sám automatické
  //      přesměrování podle Accept-Language nedoporučuje.
  //   2) Čech s anglickým telefonem skončil na anglické verzi a musel se
  //      ručně vracet.
  // Nabídku jiného jazyka dělá místo toho nenápadný pruh nahoře
  // (components/NabidkaJazyka.jsx) — rozhoduje se v prohlížeči, takže
  // stránka zůstane statická a pro všechny stejná.
  //
  // Jediná výjimka je VLASTNÍ volba člověka uložená v cookie. Tu respektujeme,
  // protože si ji vybral sám. Googlebot cookie nemá, takže ho to nepotká.
  if (pathname === '/') {
    const ulozeny = request.cookies.get('NEXT_LOCALE')?.value
    if (ulozeny && routing.locales.includes(ulozeny) && ulozeny !== routing.defaultLocale) {
      const url = request.nextUrl.clone()
      url.pathname = `/${ulozeny}`
      return NextResponse.redirect(url)
    }
  }

  // Vše ostatní (vč. /it, /en, /kontakt …) obslouží standardní next-intl.
  return intlProxy(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
