import { routing } from '@/i18n/routing'

// Sdílené SEO pomůcky. Jeden zdroj pravdy pro adresy, hreflang a drobečky —
// jazyky se berou z routing.locales, takže po přidání dalšího jazyka není
// potřeba sahat do sitemapy ani do metadat jednotlivých stránek.

export const BASE = 'https://www.housio.app'

// Čeština je výchozí a běží bez prefixu (localePrefix: 'as-needed' v routing.js).
export function adresa(locale, cesta = '') {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`
  return `${BASE}${prefix}${cesta}`
}

// Mapa pro hreflang: { cs: '…', en: '…/en', …, 'x-default': … } pro podstránku.
//
// x-default říká vyhledávači, kterou verzi ukázat člověku, jehož jazyk neumíme.
// Bez něj si vybere sám — Slovák nebo Ir pak může dostat náhodnou z deseti.
// Ukazujeme na angličtinu, protože je ze všech našich jazyků nejsrozumitelnější
// tomu, kdo na žádný z nich nemá nárok.
export function hreflangMapa(cesta = '') {
  return {
    ...Object.fromEntries(routing.locales.map((l) => [l, adresa(l, cesta)])),
    'x-default': adresa('en', cesta),
  }
}

// Metadata.alternates pro podstránku — canonical + všechny jazykové varianty.
// Bez hreflangu bere Google jazykové mutace jako duplicity a vybere si jednu sám.
export function alternatesProStranku(locale, cesta = '') {
  return {
    canonical: adresa(locale, cesta),
    languages: hreflangMapa(cesta),
  }
}

// Jazyk pro Open Graph (og:locale). Stejná mapa, jakou používá rozvržení.
const OG_LOCALE = {
  cs: 'cs_CZ', en: 'en_US', de: 'de_DE', it: 'it_IT', es: 'es_ES',
  uk: 'uk_UA', ru: 'ru_RU', fr: 'fr_FR', pl: 'pl_PL', hr: 'hr_HR',
}

// Náhled při sdílení odkazu. Rozměry musí sedět se skutečným souborem,
// jinak si ho Facebook ani LinkedIn nenačtou.
export const NAHLED = { url: `${BASE}/og-image.png`, width: 1200, height: 630 }

// Open Graph pro podstránku.
//
// PROČ TO JE TADY: metadata se v Nextu dědí po polích, ne po klíčích — jakmile
// si stránka nastaví vlastní `openGraph`, zahodí CELÝ objekt z rozvržení včetně
// obrázku. Podstránky se tím daly sdílet jen jako holý text bez náhledu.
// Tahle funkce drží celý objekt pohromadě, takže na obrázek nejde zapomenout.
export function openGraphStranky({ locale, cesta = '', title, description }) {
  return {
    type: 'website',
    siteName: 'Housio',
    locale: OG_LOCALE[locale] || 'en_US',
    url: adresa(locale, cesta),
    title,
    ...(description ? { description } : {}),
    images: [{ ...NAHLED, alt: title }],
  }
}

// Totéž pro kartu na X/Twitteru — i tu stránka přebíjí celou.
export function twitterStranky({ title, description }) {
  return {
    card: 'summary_large_image',
    title,
    ...(description ? { description } : {}),
    images: [NAHLED.url],
  }
}

// Drobečková navigace pro Google. Díky ní se ve výsledku hledání místo holé
// adresy ukáže cesta "housio.app › Pro makléře".
export function drobeckyJsonLd(locale, cesta, nazevStranky) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Housio', item: adresa(locale) },
      { '@type': 'ListItem', position: 2, name: nazevStranky, item: adresa(locale, cesta) },
    ],
  }
}

// Nejčastější dotazy jako strukturovaná data. Google je umí zobrazit přímo
// ve výsledku jako rozbalovací otázky — texty bere z běžných překladů.
export function faqJsonLd(t, pocet = 8) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Array.from({ length: pocet }, (_, i) => ({
      '@type': 'Question',
      name: t(`q${i + 1}`),
      acceptedAnswer: { '@type': 'Answer', text: t(`a${i + 1}`) },
    })),
  }
}
