import { describe, it, expect } from 'vitest'
import { KALKULACKY, SLUGY, kalkulackaPodleSlug } from './index'
import { clanekPodleSlug } from '@/clanky'
import sitemap from '@/app/sitemap'
import { llmsIndex } from '@/lib/llms'
import { BASE } from '@/lib/seo'

describe('kalkulačky', () => {
  it('každý slug je jedinečný a použitelný v adrese', () => {
    expect(new Set(SLUGY).size).toBe(SLUGY.length)
    for (const s of SLUGY) expect(s).toMatch(/^[a-z0-9-]+$/)
  })

  it.each(KALKULACKY.map((k) => [k.slug, k]))('%s má popis, komponentu i zdroje', (_s, k) => {
    expect(k.nadpis.length).toBeGreaterThan(10)
    expect(k.perex.length).toBeGreaterThan(60)
    expect(k.uvod.length).toBeGreaterThan(80)
    expect(typeof k.Komponenta).toBe('function')
    expect(k.zdroje.length).toBeGreaterThan(0)
  })

  it.each(KALKULACKY.map((k) => [k.slug, k]))('%s vysvětluje, jak se to počítá', (_s, k) => {
    expect(k.vysvetleni.length).toBeGreaterThanOrEqual(3)
    expect(k.vysvetleni.some((v) => v.nadpis.toLowerCase().includes('počítá'))).toBe(true)
    for (const v of k.vysvetleni) expect(v.text.length).toBeGreaterThan(80)
  })

  it('každá kalkulačka odkazuje na existující článek', () => {
    for (const k of KALKULACKY) {
      expect(clanekPodleSlug(k.clanek), `${k.slug} → ${k.clanek}`).not.toBeNull()
    }
  })

  it('neznámý slug vrátí null, ne výjimku', () => {
    expect(kalkulackaPodleSlug('neexistuje')).toBeNull()
  })

  it('jsou v sitemapě i v llms.txt', () => {
    const adresy = sitemap().map((z) => z.url)
    const index = llmsIndex()
    expect(adresy).toContain(`${BASE}/kalkulacky`)
    expect(index).toContain('## Kalkulačky zdarma')
    for (const k of KALKULACKY) {
      expect(adresy).toContain(`${BASE}/kalkulacky/${k.slug}`)
      expect(index).toContain(`${BASE}/kalkulacky/${k.slug}`)
    }
  })
})
