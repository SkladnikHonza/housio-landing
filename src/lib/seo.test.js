import { describe, it, expect } from 'vitest'
import { routing } from '@/i18n/routing'
import { BASE, adresa, hreflangMapa, alternatesProStranku, openGraphStranky, twitterStranky, drobeckyJsonLd, faqJsonLd, NAHLED } from './seo'

describe('adresy', () => {
  it('čeština běží bez prefixu, ostatní jazyky s ním', () => {
    expect(adresa('cs')).toBe(BASE)
    expect(adresa('en')).toBe(`${BASE}/en`)
    expect(adresa('cs', '/kontakt')).toBe(`${BASE}/kontakt`)
    expect(adresa('de', '/kontakt')).toBe(`${BASE}/de/kontakt`)
  })

  it('adresy jsou absolutní a bez dvojitého lomítka', () => {
    for (const l of routing.locales) {
      const u = adresa(l, '/partneri')
      expect(u.startsWith('https://')).toBe(true)
      expect(u.slice('https://'.length)).not.toContain('//')
    }
  })
})

describe('jazykové varianty', () => {
  it('hreflang pokrývá všechny podporované jazyky', () => {
    const m = hreflangMapa('/bezpecnost')
    expect(Object.keys(m).sort()).toEqual([...routing.locales, 'x-default'].sort())
  })

  it('x-default ukazuje na angličtinu, ať si vyhledávač nevybírá sám', () => {
    expect(hreflangMapa()['x-default']).toBe(`${BASE}/en`)
    expect(hreflangMapa('/partneri')['x-default']).toBe(`${BASE}/en/partneri`)
  })

  it('canonical ukazuje na vlastní jazyk stránky', () => {
    const a = alternatesProStranku('de', '/partneri')
    expect(a.canonical).toBe(`${BASE}/de/partneri`)
    expect(a.languages.cs).toBe(`${BASE}/partneri`)
  })
})

describe('náhled při sdílení', () => {
  // Tohle je přesně chyba, která se už jednou stala: vlastní openGraph stránky
  // přebil celý objekt z rozvržení a podstránky přišly o obrázek.
  it('openGraph vždy nese obrázek se správnými rozměry', () => {
    const og = openGraphStranky({ locale: 'cs', cesta: '/kontakt', title: 'Kontakt' })
    expect(og.images).toHaveLength(1)
    expect(og.images[0].url).toBe(NAHLED.url)
    expect(og.images[0].width).toBe(1200)
    expect(og.images[0].height).toBe(630)
  })

  it('openGraph má správný jazyk a adresu', () => {
    expect(openGraphStranky({ locale: 'pl', cesta: '/partneri', title: 'x' }).locale).toBe('pl_PL')
    expect(openGraphStranky({ locale: 'pl', cesta: '/partneri', title: 'x' }).url).toBe(`${BASE}/pl/partneri`)
  })

  it('neznámý jazyk spadne na angličtinu, ne na prázdno', () => {
    expect(openGraphStranky({ locale: 'xx', title: 'x' }).locale).toBe('en_US')
  })

  it('popis se vynechá, když žádný není — ať nevzniká prázdný meta tag', () => {
    expect(openGraphStranky({ locale: 'cs', title: 'x' })).not.toHaveProperty('description')
    expect(openGraphStranky({ locale: 'cs', title: 'x', description: 'y' }).description).toBe('y')
  })

  it('karta na X má velký náhled', () => {
    const tw = twitterStranky({ title: 'x', description: 'y' })
    expect(tw.card).toBe('summary_large_image')
    expect(tw.images).toEqual([NAHLED.url])
  })
})

describe('strukturovaná data', () => {
  it('drobečky mají dva kroky se správnými adresami', () => {
    const d = drobeckyJsonLd('cs', '/partneri', 'Pro makléře')
    expect(d['@type']).toBe('BreadcrumbList')
    expect(d.itemListElement).toHaveLength(2)
    expect(d.itemListElement[1].item).toBe(`${BASE}/partneri`)
    expect(d.itemListElement[1].position).toBe(2)
  })

  it('FAQ vezme otázky i odpovědi z překladů', () => {
    const t = (k) => `text-${k}`
    const f = faqJsonLd(t, 3)
    expect(f['@type']).toBe('FAQPage')
    expect(f.mainEntity).toHaveLength(3)
    expect(f.mainEntity[0].name).toBe('text-q1')
    expect(f.mainEntity[2].acceptedAnswer.text).toBe('text-a3')
  })
})
