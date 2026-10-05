import { describe, it, expect } from 'vitest'
import { FUNKCE, SKUPINY, SLUGY, funkcePodleSlug, PLANY } from './index'
import { clanekPodleSlug } from '@/clanky'
import { kalkulackaPodleSlug } from '@/kalkulacky'

describe('stránky funkcí', () => {
  it('každá funkce má úplná data', () => {
    for (const f of FUNKCE) {
      expect(f.slug, 'slug').toMatch(/^[a-z0-9-]+$/)
      expect(f.nadpis.length, f.slug).toBeGreaterThan(5)
      expect(f.perex.length, `${f.slug} perex`).toBeLessThanOrEqual(170)
      expect(f.uvod.length, `${f.slug} úvod`).toBeGreaterThan(60)
      expect(f.sekce.length, `${f.slug} sekce`).toBeGreaterThanOrEqual(2)
      expect(f.faq.length, `${f.slug} faq`).toBeGreaterThanOrEqual(1)
      expect(PLANY[f.plan], `${f.slug} plán`).toBeDefined()
    }
  })

  it('slugy jsou jedinečné', () => {
    expect(new Set(SLUGY).size).toBe(SLUGY.length)
  })

  // Stránka, která vypadne z rozcestníku a zůstane jen v sitemapě, je
  // nejhorší možný stav — Google ji najde, člověk ne.
  it('každá funkce je právě v jedné skupině', () => {
    const vSkupinach = SKUPINY.flatMap((s) => s.slugy)
    expect(vSkupinach.sort()).toEqual([...SLUGY].sort())
    expect(new Set(vSkupinach).size).toBe(vSkupinach.length)
  })

  it('odkazy mezi funkcemi vedou na existující stránky', () => {
    for (const f of FUNKCE) {
      for (const s of f.souvisi) {
        expect(funkcePodleSlug(s), `${f.slug} → ${s}`).not.toBeNull()
      }
      expect(f.souvisi, `${f.slug} neodkazuje sám na sebe`).not.toContain(f.slug)
    }
  })

  it('odkazy na články a kalkulačky vedou na existující obsah', () => {
    for (const f of FUNKCE) {
      if (f.clanek) expect(clanekPodleSlug(f.clanek), `${f.slug} → článek ${f.clanek}`).toBeTruthy()
      if (f.kalkulacka) expect(kalkulackaPodleSlug(f.kalkulacka), `${f.slug} → kalkulačka ${f.kalkulacka}`).toBeTruthy()
    }
  })

  // Stránka, která má málo textu, nemá šanci se na nic umístit a zároveň
  // návštěvníkovi nic neřekne. Hlídáme spodní hranici, ne horní.
  it('žádná stránka není prázdná skořápka', () => {
    for (const f of FUNKCE) {
      const znaku = f.uvod.length
        + f.sekce.reduce((a, s) => a + s.nadpis.length + s.text.length, 0)
        + f.faq.reduce((a, q) => a + q.otazka.length + q.odpoved.length, 0)
      expect(znaku, `${f.slug} má jen ${znaku} znaků`).toBeGreaterThan(800)
    }
  })

  it('nic neslibuje funkce, které nemáme', () => {
    const zakazane = [/\bpárování plateb\b/i, /napojení na banku/i, /\bPSD2\b/i, /elektronick(ý|é) podpis/i]
    for (const f of FUNKCE) {
      const text = [f.uvod, ...f.sekce.map((s) => s.text), ...f.faq.map((q) => q.odpoved)].join(' ')
      for (const vzor of zakazane) {
        const shoda = text.match(vzor)
        // Zmínit to smíme jen v popření („párování plateb neumíme“).
        if (shoda) {
          const okoli = text.slice(Math.max(0, shoda.index - 120), shoda.index + 160)
          expect(okoli, `${f.slug}: „${shoda[0]}" bez popření`).toMatch(/\bne\b|nemáme|neumí|nenabízí|nedělá|zatím/i)
        }
      }
    }
  })
})
