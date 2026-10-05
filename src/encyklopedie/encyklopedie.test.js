import { describe, it, expect } from 'vitest'
import { HESLA, OBLASTI, SLUGY, hesloPodleSlug, heslaOblasti, heslaAbecedne, nazevOblasti } from './index'
import { clanekPodleSlug } from '@/clanky'
import { kalkulackaPodleSlug } from '@/kalkulacky'
import sitemap from '@/app/sitemap'
import { llmsIndex } from '@/lib/llms'
import { BASE } from '@/lib/seo'

// Encyklopedie je nejvíc provázaná část webu — každé heslo ukazuje na další
// hesla, na návod a často i na kalkulačku. Testy hlídají, že žádný z těch
// odkazů nevede do prázdna, protože rozbitý odkaz se na 40 heslech snadno přehlédne.

describe('encyklopedie', () => {
  it('má aspoň 30 hesel a každé v nějaké oblasti', () => {
    expect(HESLA.length).toBeGreaterThanOrEqual(30)
    for (const h of HESLA) expect(nazevOblasti(h.oblast)).not.toBe('')
  })

  it('každá oblast má aspoň tři hesla', () => {
    for (const o of OBLASTI) expect(heslaOblasti(o.id).length).toBeGreaterThanOrEqual(3)
  })

  it('každý slug je jedinečný a použitelný v adrese', () => {
    expect(new Set(SLUGY).size).toBe(SLUGY.length)
    for (const s of SLUGY) expect(s).toMatch(/^[a-z0-9-]+$/)
  })

  it.each(HESLA.map((h) => [h.slug, h]))('%s má definici jednou větou a vysvětlení', (_s, h) => {
    expect(h.pojem.length).toBeGreaterThan(2)
    expect(h.definice.length).toBeGreaterThan(60)
    expect(h.definice.length).toBeLessThan(260)       // ať se vejde do výsledku hledání
    expect(h.definice.trim().endsWith('.')).toBe(true)
    expect(h.vysvetleni.length).toBeGreaterThanOrEqual(2)
    for (const o of h.vysvetleni) expect(o.length).toBeGreaterThan(80)
  })

  it('odkazy mezi hesly vedou na existující hesla a ne samy na sebe', () => {
    for (const h of HESLA) {
      for (const cil of h.souvisejici || []) {
        expect(hesloPodleSlug(cil), `${h.slug} → ${cil}`).not.toBeNull()
        expect(cil).not.toBe(h.slug)
      }
    }
  })

  it('odkazy na návody a kalkulačky vedou na existující stránky', () => {
    for (const h of HESLA) {
      if (h.clanek) expect(clanekPodleSlug(h.clanek), `${h.slug} → článek ${h.clanek}`).not.toBeNull()
      if (h.kalkulacka) expect(kalkulackaPodleSlug(h.kalkulacka), `${h.slug} → kalkulačka ${h.kalkulacka}`).not.toBeNull()
    }
  })

  it('většina hesel je opřená o konkrétní předpis', () => {
    const sezdrojem = HESLA.filter((h) => h.zdroj).length
    expect(sezdrojem / HESLA.length).toBeGreaterThan(0.6)
  })

  it('abecední rejstřík řadí česky', () => {
    const serazeno = heslaAbecedne().map((h) => h.pojem)
    expect(serazeno).toEqual([...serazeno].sort((a, b) => a.localeCompare(b, 'cs')))
    expect(serazeno).toHaveLength(HESLA.length)
  })

  it('neznámý slug vrátí null, ne výjimku', () => {
    expect(hesloPodleSlug('neexistuje')).toBeNull()
  })

  it('je v sitemapě i v llms.txt', () => {
    const adresy = sitemap().map((z) => z.url)
    const index = llmsIndex()
    expect(adresy).toContain(`${BASE}/encyklopedie`)
    expect(index).toContain('## Encyklopedie pronájmu')
    for (const h of HESLA) {
      expect(adresy).toContain(`${BASE}/encyklopedie/${h.slug}`)
      expect(index).toContain(`${BASE}/encyklopedie/${h.slug}`)
    }
  })
})
