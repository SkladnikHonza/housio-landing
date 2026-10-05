import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { llmsIndex } from './llms'
import { CLANKY, TEMATA } from '@/clanky'
import { routing } from '@/i18n/routing'
import { BASE } from './seo'

// llms.txt a llms-full.txt jsou podklad pro AI vyhledávače a asistenty.
// Testy hlídají dvě věci: že v nich nic nechybí, a hlavně že soubory v public/
// nezůstaly pozadu za webem — generují se před buildem, ale do gitu je ukládáme,
// aby fungovaly i ve vývoji a v náhledech.

const INDEX = llmsIndex()
const ULOZENY_INDEX = fs.readFileSync(path.join(process.cwd(), 'public', 'llms.txt'), 'utf8')
const ULOZENY_PLNY = fs.readFileSync(path.join(process.cwd(), 'public', 'llms-full.txt'), 'utf8')

describe('llms.txt', () => {
  it('začíná názvem a jednovětým shrnutím podle konvence', () => {
    expect(INDEX.startsWith('# Housio\n')).toBe(true)
    expect(INDEX).toMatch(/\n> Housio je česká aplikace/)
  })

  it('uvádí provozovatele, kontakt a obě adresy', () => {
    expect(INDEX).toContain('US Europe Group s.r.o.')
    expect(INDEX).toContain('IČO 06779808')
    expect(INDEX).toContain('housio@housio.app')
    expect(INDEX).toContain('https://www.housio.online')
    expect(INDEX).toContain(BASE)
  })

  it('vyjmenuje všechny plány s cenou', () => {
    for (const [nazev, cena] of [['Free', '0 Kč'], ['Basic', '299 Kč'], ['Pro', '599 Kč'], ['Business', '999 Kč']]) {
      expect(INDEX).toContain(`**${nazev}** — ${cena}`)
    }
  })

  it('odkazuje na každý článek průvodce i na každé téma', () => {
    for (const c of CLANKY) {
      expect(INDEX).toContain(`${BASE}/blog/${c.slug}`)
      expect(INDEX).toContain(c.nadpis)
    }
    for (const t of TEMATA) expect(INDEX).toContain(`### ${t.nazev}`)
  })

  it('vyjmenuje všechny jazykové verze webu', () => {
    expect(INDEX).toContain(`Jazyky rozhraní (${routing.locales.length})`)
    for (const l of routing.locales) expect(INDEX).toContain(`](${l === 'cs' ? BASE : `${BASE}/${l}`})`)
  })

  it('odkazuje na plnou verzi i na obchody s aplikací', () => {
    expect(INDEX).toContain(`${BASE}/llms-full.txt`)
    expect(INDEX).toContain('apps.apple.com')
    expect(INDEX).toContain('play.google.com')
  })

  it('soubor v public/ je aktuální', () => {
    // Když tenhle test spadne, stačí spustit `npm run llms`.
    expect(ULOZENY_INDEX).toBe(INDEX)
  })
})

describe('llms-full.txt', () => {
  it('obsahuje plné znění každého článku, ne jen perex', () => {
    for (const c of CLANKY) {
      expect(ULOZENY_PLNY).toContain(`# ${c.nadpis}`)
      // z každého článku musí být vidět i jeho sekce, ne jen hlavička
      expect(ULOZENY_PLNY).toContain(`## ${c.sekce[0].nadpis}`)
    }
  })

  it('u každého článku uvádí adresu i to, k jakému datu platí', () => {
    for (const c of CLANKY) expect(ULOZENY_PLNY).toContain(`${BASE}/blog/${c.slug}`)
    const upozorneni = ULOZENY_PLNY.match(/Jde o praktický průvodce, ne o právní ani daňové poradenství\./g) || []
    expect(upozorneni.length).toBe(CLANKY.length)
  })

  it('nese i časté dotazy v plném znění', () => {
    expect(ULOZENY_PLNY).toContain('## Nejčastější dotazy')
    expect(ULOZENY_PLNY).toContain('Jak funguje 7denní zkušební doba zdarma?')
  })

  it('nezůstala v něm jediná HTML značka', () => {
    expect(ULOZENY_PLNY).not.toMatch(/<\/?(p|div|span|h2|h3|ul|li|table|section|nav)\b/i)
  })

  it('je podstatně delší než rozcestník', () => {
    expect(ULOZENY_PLNY.length).toBeGreaterThan(ULOZENY_INDEX.length * 4)
  })
})
