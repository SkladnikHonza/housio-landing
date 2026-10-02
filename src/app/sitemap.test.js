import { describe, it, expect } from 'vitest'
import sitemap from './sitemap'
import { routing } from '@/i18n/routing'
import { CLANKY } from '@/clanky'
import { BASE } from '@/lib/seo'

// Sitemapa se generuje z kódu. Test hlídá, že se při přidání stránky nebo
// jazyka nezapomene — dřív byla staticky v public/ a zastarala.

const MAPA = sitemap()
const ADRESY = MAPA.map((z) => z.url)

describe('sitemapa', () => {
  it('obsahuje každou stránku ve všech jazycích', () => {
    for (const cesta of ['', '/partneri', '/kontakt', '/bezpecnost', '/smazani-uctu']) {
      for (const l of routing.locales) {
        const prefix = l === routing.defaultLocale ? '' : `/${l}`
        expect(ADRESY).toContain(`${BASE}${prefix}${cesta}`)
      }
    }
  })

  it('obsahuje rozcestník průvodce i každý článek', () => {
    expect(ADRESY).toContain(`${BASE}/blog`)
    for (const c of CLANKY) expect(ADRESY).toContain(`${BASE}/blog/${c.slug}`)
  })

  it('články jsou jen česky, bez jazykových variant', () => {
    for (const l of routing.locales.filter((x) => x !== routing.defaultLocale)) {
      expect(ADRESY).not.toContain(`${BASE}/${l}/blog`)
    }
    const clanek = MAPA.find((z) => z.url === `${BASE}/blog/${CLANKY[0].slug}`)
    expect(clanek.alternates).toBeUndefined()
  })

  it('žádná adresa není dvakrát', () => {
    expect(new Set(ADRESY).size).toBe(ADRESY.length)
  })

  it('každý záznam má absolutní adresu, datum a prioritu v rozsahu', () => {
    for (const z of MAPA) {
      expect(z.url.startsWith(`${BASE}/`) || z.url === BASE).toBe(true)
      expect(z.lastModified instanceof Date).toBe(true)
      expect(z.priority).toBeGreaterThan(0)
      expect(z.priority).toBeLessThanOrEqual(1)
    }
  })

  it('čeština má u každé stránky vyšší prioritu než mutace', () => {
    const cs = MAPA.find((z) => z.url === BASE)
    const en = MAPA.find((z) => z.url === `${BASE}/en`)
    expect(cs.priority).toBeGreaterThan(en.priority)
  })
})
