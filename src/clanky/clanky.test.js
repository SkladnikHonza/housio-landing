import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { CLANKY, TEMATA, SLUGY, clanekPodleSlug, clankyTematu, nazevTematu } from './index'

// Průvodce pronájmem je dnes největší část webu a jediná, která cílí na
// vyhledávače. Tenhle test hlídá, že žádný článek nepřijde o to, co ho dělá
// dohledatelným — perex, téma, obsah s funkčními kotvami a časté dotazy,
// ze kterých se skládají strukturovaná data.

const ZDROJE = Object.fromEntries(
  CLANKY.map((c) => [c.slug, fs.readFileSync(path.join(process.cwd(), 'src', 'clanky', `${c.slug}.jsx`), 'utf8')]),
)

describe('průvodce pronájmem', () => {
  it('má aspoň deset článků', () => {
    expect(CLANKY.length).toBeGreaterThanOrEqual(10)
  })

  it('každý slug je jedinečný a v adrese použitelný', () => {
    expect(new Set(SLUGY).size).toBe(SLUGY.length)
    for (const s of SLUGY) expect(s).toMatch(/^[a-z0-9-]+$/)
  })

  it('každé téma má aspoň jeden článek a každý článek známé téma', () => {
    for (const t of TEMATA) expect(clankyTematu(t.id).length).toBeGreaterThan(0)
    for (const c of CLANKY) expect(nazevTematu(c.tema)).not.toBe('')
  })

  it.each(CLANKY.map((c) => [c.slug, c]))('%s má kompletní popisná data', (_slug, c) => {
    expect(c.nadpis.length).toBeGreaterThan(20)
    expect(c.perex.length).toBeGreaterThan(80)
    expect(c.minut).toBeGreaterThan(0)
    expect(c.datum).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(typeof c.Obsah).toBe('function')
  })

  it.each(CLANKY.map((c) => [c.slug, c]))('%s má obsah, jehož kotvy vedou na existující nadpisy', (slug, c) => {
    expect(c.sekce.length).toBeGreaterThanOrEqual(4)
    const kotvy = [...ZDROJE[slug].matchAll(/<H2 id="([a-z-]+)"/g)].map((m) => m[1])
    for (const s of c.sekce) expect(kotvy).toContain(s.id)
  })

  it.each(CLANKY.map((c) => [c.slug, c]))('%s má časté dotazy pro strukturovaná data', (_slug, c) => {
    expect(c.faq.length).toBeGreaterThanOrEqual(4)
    for (const d of c.faq) {
      expect(d.otazka.endsWith('?')).toBe(true)
      expect(d.odpoved.length).toBeGreaterThan(60)
    }
  })

  it.each(CLANKY.map((c) => [c.slug, c]))('%s říká, k jakému datu platí', (slug) => {
    expect(ZDROJE[slug]).toContain('<Upozorneni aktualizovano=')
  })

  it('odkazy mezi články vedou na existující články', () => {
    for (const [slug, zdroj] of Object.entries(ZDROJE)) {
      const cile = [...zdroj.matchAll(/<OdkazClanek slug="([a-z0-9-]+)"/g)].map((m) => m[1])
      for (const cil of cile) {
        expect(clanekPodleSlug(cil), `${slug} odkazuje na neexistující ${cil}`).not.toBeNull()
        expect(cil).not.toBe(slug)
      }
    }
  })

  it('neznámý slug vrátí null, ne výjimku', () => {
    expect(clanekPodleSlug('neexistuje')).toBeNull()
  })
})
