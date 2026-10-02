import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { precistSouhlas, souhlasDan, ulozitSouhlas, zapamatujJazyk, UDALOST_SOUHLASU } from './cookieConsent'

// Souhlas s měřením je slib ze zásad ochrany osobních údajů: měří se až po
// výslovném souhlasu. Test hlídá, že se z „nerozhodnuto" nikdy nestane „měř".

function falesnyProhlizec({ selhavaUloziste = false } = {}) {
  const data = new Map()
  const posluchaci = new Map()
  globalThis.window = {
    localStorage: {
      getItem: (k) => { if (selhavaUloziste) throw new Error('zakázané úložiště'); return data.has(k) ? data.get(k) : null },
      setItem: (k, v) => { if (selhavaUloziste) throw new Error('zakázané úložiště'); data.set(k, v) },
    },
    dispatchEvent: (e) => { (posluchaci.get(e.type) || []).forEach((f) => f(e)) },
    addEventListener: (t, f) => { posluchaci.set(t, [...(posluchaci.get(t) || []), f]) },
  }
  globalThis.CustomEvent = class { constructor(type, init) { this.type = type; this.detail = init?.detail } }
  globalThis.document = { cookie: '' }
  return { data, posluchaci }
}

beforeEach(() => { falesnyProhlizec() })
afterEach(() => { delete globalThis.window; delete globalThis.document; delete globalThis.CustomEvent })

describe('souhlas s měřením', () => {
  it('bez rozhodnutí se neměří', () => {
    expect(precistSouhlas()).toBeNull()
    expect(souhlasDan()).toBe(false)
  })

  it('odmítnutí se pamatuje a neměří se', () => {
    ulozitSouhlas('rejected')
    expect(precistSouhlas().status).toBe('rejected')
    expect(souhlasDan()).toBe(false)
  })

  it('souhlas se pamatuje i s časem', () => {
    ulozitSouhlas('accepted')
    const ulozeno = precistSouhlas()
    expect(ulozeno.status).toBe('accepted')
    expect(Date.parse(ulozeno.timestamp)).not.toBeNaN()
    expect(souhlasDan()).toBe(true)
  })

  it('poškozený záznam v úložišti neshodí stránku a bere se jako nerozhodnuto', () => {
    window.localStorage.setItem('housio_cookie_consent', '{tohle není JSON')
    expect(precistSouhlas()).toBeNull()
    expect(souhlasDan()).toBe(false)
  })

  it('zakázané úložiště znamená neměřit, ne spadnout', () => {
    falesnyProhlizec({ selhavaUloziste: true })
    expect(() => ulozitSouhlas('accepted')).not.toThrow()
    expect(souhlasDan()).toBe(false)
  })

  it('rozhodnutí oznámí událost, aby se první návštěva započítala bez obnovení', () => {
    const slysel = vi.fn()
    window.addEventListener(UDALOST_SOUHLASU, slysel)
    ulozitSouhlas('accepted')
    expect(slysel).toHaveBeenCalledOnce()
    expect(slysel.mock.calls[0][0].detail.status).toBe('accepted')
  })
})

describe('zapamatování jazyka', () => {
  it('zapíše cookie, kterou čte proxy', () => {
    zapamatujJazyk('de')
    expect(document.cookie).toContain('NEXT_LOCALE=de')
    expect(document.cookie).toContain('path=/')
    expect(document.cookie).toContain('samesite=lax')
  })

  it('zakázané cookies stránku neshodí', () => {
    Object.defineProperty(globalThis.document, 'cookie', {
      set() { throw new Error('zakázané cookies') },
      get() { return '' },
    })
    expect(() => zapamatujJazyk('fr')).not.toThrow()
  })
})
