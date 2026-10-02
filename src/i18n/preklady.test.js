import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { routing } from './routing'

// Překlady hlídáme testem, protože chybějící klíč se na webu neprojeví chybou —
// jen se někomu ukáže čeština uprostřed německé stránky. A to se nám už stalo.

const SLOVNIKY = Object.fromEntries(
  routing.locales.map((l) => [
    l,
    JSON.parse(fs.readFileSync(path.join(process.cwd(), 'messages', `${l}.json`), 'utf8')),
  ]),
)

function klice(o, prefix = '') {
  return Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === 'object' ? klice(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  )
}

function hodnota(o, klic) {
  return klic.split('.').reduce((x, k) => (x ? x[k] : undefined), o)
}

const ZAKLAD = klice(SLOVNIKY.cs)

describe('překlady', () => {
  it('existuje slovník pro každý podporovaný jazyk', () => {
    expect(Object.keys(SLOVNIKY).sort()).toEqual([...routing.locales].sort())
  })

  it.each(routing.locales)('%s má stejné klíče jako čeština', (lng) => {
    const moje = new Set(klice(SLOVNIKY[lng]))
    const chybi = ZAKLAD.filter((k) => !moje.has(k))
    const navic = [...moje].filter((k) => !ZAKLAD.includes(k))
    expect({ chybi, navic }).toEqual({ chybi: [], navic: [] })
  })

  it.each(routing.locales)('%s nemá prázdné texty', (lng) => {
    const prazdne = ZAKLAD.filter((k) => {
      const v = hodnota(SLOVNIKY[lng], k)
      return typeof v === 'string' && v.trim() === ''
    })
    expect(prazdne).toEqual([])
  })

  it.each(routing.locales)('%s má stejné zástupné hodnoty jako čeština', (lng) => {
    // {{jmeno}} ve zdroji a chybějící v překladu znamená, že se na stránce
    // ukáže prázdné místo místo doplněné hodnoty.
    const rozdily = ZAKLAD.filter((k) => {
      const cz = hodnota(SLOVNIKY.cs, k)
      const moje = hodnota(SLOVNIKY[lng], k)
      if (typeof cz !== 'string' || typeof moje !== 'string') return false
      const vzor = /\{\{?\s*([a-zA-Z0-9_]+)\s*\}?\}/g
      const a = [...cz.matchAll(vzor)].map((m) => m[1]).sort().join(',')
      const b = [...moje.matchAll(vzor)].map((m) => m[1]).sort().join(',')
      return a !== b
    })
    expect(rozdily).toEqual([])
  })
})
