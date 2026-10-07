import { describe, it, expect } from 'vitest'
import { SROVNANI, SLUGY, srovnaniPodleSlug } from './index'
import { funkcePodleSlug } from '@/funkce'
import { clanekPodleSlug } from '@/clanky'

describe('srovnávací stránky', () => {
  it('každé srovnání má úplná data', () => {
    for (const s of SROVNANI) {
      expect(s.slug, 'slug').toMatch(/^[a-z0-9-]+$/)
      expect(s.nadpis.length, s.slug).toBeGreaterThan(10)
      expect(s.perex.length, `${s.slug} perex`).toBeLessThanOrEqual(170)
      expect(s.protistrana.length, `${s.slug} protistrana`).toBeGreaterThan(3)
      expect(s.uvod.length, `${s.slug} úvod`).toBeGreaterThan(100)
      expect(s.sekce.length, `${s.slug} sekce`).toBeGreaterThanOrEqual(3)
      expect(s.faq.length, `${s.slug} faq`).toBeGreaterThanOrEqual(3)
    }
  })

  // Kvuli tomuhle ty stranky existuji: jazykovy model si bere prvni odstavec,
  // ktery na otazku primo odpovida. Kdyz je moc kratky, neni co citovat.
  it('každé srovnání začíná odpovědí, ne rozcvičkou', () => {
    for (const s of SROVNANI) {
      expect(s.kratkaOdpoved.length, `${s.slug} krátká odpověď`).toBeGreaterThan(200)
      expect(s.kratkaOdpoved.length, `${s.slug} krátká odpověď je dlouhá`).toBeLessThan(700)
    }
  })

  // Srovnani bez poctive sekce „kdy vyhrava ta druha strana" je letak.
  it('každé srovnání přizná, kdy vyhrává druhá strana', () => {
    for (const s of SROVNANI) {
      expect(s.kdyNe.nadpis, `${s.slug}`).toBeTruthy()
      expect(s.kdyNe.text.length, `${s.slug} kdyNe`).toBeGreaterThan(150)
    }
  })

  it('tabulka má v každém řádku tolik hodnot, kolik je sloupců', () => {
    for (const s of SROVNANI) {
      expect(s.tabulka.radky.length, `${s.slug} řádků`).toBeGreaterThanOrEqual(6)
      for (const r of s.tabulka.radky) {
        expect(r.hodnoty.length, `${s.slug} / ${r.kriterium}`).toBe(s.tabulka.sloupce.length)
      }
    }
  })

  it('slugy jsou jedinečné a odkazy vedou někam', () => {
    expect(new Set(SLUGY).size).toBe(SLUGY.length)
    for (const s of SROVNANI) {
      for (const x of s.souvisi) expect(srovnaniPodleSlug(x), `${s.slug} → ${x}`).not.toBeNull()
      for (const f of s.funkce) expect(funkcePodleSlug(f), `${s.slug} → funkce ${f}`).not.toBeNull()
      for (const c of s.clanky) expect(clanekPodleSlug(c), `${s.slug} → článek ${c}`).toBeTruthy()
    }
  })

  it('nic neslibuje funkce, které nemáme', () => {
    const zakazane = [/\bpárování plateb\b/i, /napojení na banku/i, /\bPSD2\b/i, /elektronick(ý|é) podpis/i, /hromadný import/i]
    for (const s of SROVNANI) {
      const text = [s.kratkaOdpoved, s.uvod, ...s.sekce.map((x) => x.text), s.kdyNe.text, ...s.faq.map((q) => q.odpoved)].join(' ')
      for (const vzor of zakazane) {
        const shoda = text.match(vzor)
        if (shoda) {
          const okoli = text.slice(Math.max(0, shoda.index - 120), shoda.index + 160)
          expect(okoli, `${s.slug}: „${shoda[0]}" bez popření`).toMatch(/\bne\b|nemáme|neumí|nenabízí|nedělá|zatím|nemá/i)
        }
      }
    }
  })

  // Konkurenci nejmenujeme: jejich ceny a funkce se meni a overit je neumime.
  it('nejmenuje konkrétní konkurenty', () => {
    const jmena = /\b(rentila|landlordy|domia|realpad|nemoapp|propertyware|buildium|appfolio)\b/i
    for (const s of SROVNANI) {
      const text = JSON.stringify(s)
      expect(text, `${s.slug}`).not.toMatch(jmena)
    }
  })
})
