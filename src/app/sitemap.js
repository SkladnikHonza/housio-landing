import { routing } from '@/i18n/routing'
import { adresa, hreflangMapa } from '@/lib/seo'

// Sitemapa se generuje z routing.locales a seznamu níž, ne ručně.
// Dřív byla staticky v public/sitemap.xml a zastarala — chyběla v ní
// polština, chorvatština i stránky /partneri a /bezpecnost.

const STRANKY = [
  { cesta: '', changeFrequency: 'weekly', priority: 1 },
  { cesta: '/partneri', changeFrequency: 'monthly', priority: 0.8 },
  { cesta: '/kontakt', changeFrequency: 'monthly', priority: 0.6 },
  { cesta: '/bezpecnost', changeFrequency: 'monthly', priority: 0.5 },
]

export default function sitemap() {
  const dnes = new Date()

  return STRANKY.flatMap(({ cesta, changeFrequency, priority }) =>
    routing.locales.map((locale) => ({
      url: adresa(locale, cesta),
      lastModified: dnes,
      changeFrequency,
      // Výchozí jazyk má u každé stránky mírně vyšší prioritu než mutace.
      priority: locale === routing.defaultLocale ? priority : priority - 0.1,
      alternates: { languages: hreflangMapa(cesta) },
    })),
  )
}
