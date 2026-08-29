import { routing } from '@/i18n/routing'

// Sdílené SEO pomůcky. Jeden zdroj pravdy pro adresy, hreflang a drobečky —
// jazyky se berou z routing.locales, takže po přidání dalšího jazyka není
// potřeba sahat do sitemapy ani do metadat jednotlivých stránek.

export const BASE = 'https://housio.app'

// Čeština je výchozí a běží bez prefixu (localePrefix: 'as-needed' v routing.js).
export function adresa(locale, cesta = '') {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`
  return `${BASE}${prefix}${cesta}`
}

// Mapa pro hreflang: { cs: '…', en: '…/en', … } pro danou podstránku.
export function hreflangMapa(cesta = '') {
  return Object.fromEntries(routing.locales.map((l) => [l, adresa(l, cesta)]))
}

// Metadata.alternates pro podstránku — canonical + všechny jazykové varianty.
// Bez hreflangu bere Google jazykové mutace jako duplicity a vybere si jednu sám.
export function alternatesProStranku(locale, cesta = '') {
  return {
    canonical: adresa(locale, cesta),
    languages: hreflangMapa(cesta),
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
