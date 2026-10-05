import { routing } from '@/i18n/routing'
import { adresa, hreflangMapa, BASE } from '@/lib/seo'
import { CLANKY } from '@/clanky'
import { KALKULACKY } from '@/kalkulacky'
import { HESLA } from '@/encyklopedie'

// Sitemapa se generuje z routing.locales a seznamu níž, ne ručně.
// Dřív byla staticky v public/sitemap.xml a zastarala — chyběla v ní
// polština, chorvatština i stránky /partneri a /bezpecnost.

const STRANKY = [
  { cesta: '', changeFrequency: 'weekly', priority: 1 },
  { cesta: '/partneri', changeFrequency: 'monthly', priority: 0.8 },
  { cesta: '/kontakt', changeFrequency: 'monthly', priority: 0.6 },
  { cesta: '/bezpecnost', changeFrequency: 'monthly', priority: 0.5 },
  { cesta: '/smazani-uctu', changeFrequency: 'yearly', priority: 0.4 },
]

export default function sitemap() {
  const dnes = new Date()

  // Blog bezi jen v cestine (ceske zakony), takze bez jazykovych variant.
  const kalkulacky = [
    { url: `${BASE}/kalkulacky`, lastModified: dnes, changeFrequency: 'monthly', priority: 0.7 },
    ...KALKULACKY.map((k) => ({
      url: `${BASE}/kalkulacky/${k.slug}`,
      lastModified: dnes,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ]

  const encyklopedie = [
    { url: `${BASE}/encyklopedie`, lastModified: dnes, changeFrequency: 'monthly', priority: 0.6 },
    ...HESLA.map((h) => ({
      url: `${BASE}/encyklopedie/${h.slug}`,
      lastModified: dnes,
      changeFrequency: 'yearly',
      priority: 0.5,
    })),
  ]

  const clanky = [
    { url: `${BASE}/blog`, lastModified: dnes, changeFrequency: 'weekly', priority: 0.7 },
    ...CLANKY.map((c) => ({
      url: `${BASE}/blog/${c.slug}`,
      lastModified: new Date(c.datum),
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
  ]

  const stranky = STRANKY.flatMap(({ cesta, changeFrequency, priority }) =>
    routing.locales.map((locale) => ({
      url: adresa(locale, cesta),
      lastModified: dnes,
      changeFrequency,
      // Výchozí jazyk má u každé stránky mírně vyšší prioritu než mutace.
      priority: locale === routing.defaultLocale ? priority : priority - 0.1,
      alternates: { languages: hreflangMapa(cesta) },
    })),
  )

  return [...stranky, ...kalkulacky, ...clanky, ...encyklopedie]
}
