import { describe, it, expect } from 'vitest'
import { NextRequest } from 'next/server'
import { proxy } from './proxy'

// Sestavi pozadavek tak, jak prijde z prohlizece nebo od Googlebota.
function pozadavek(cesta, { jazyk, zeme, cookie } = {}) {
  const hlavicky = new Headers()
  if (jazyk) hlavicky.set('accept-language', jazyk)
  if (zeme) hlavicky.set('x-vercel-ip-country', zeme)
  if (cookie) hlavicky.set('cookie', `NEXT_LOCALE=${cookie}`)
  return new NextRequest(new URL(`https://www.housio.app${cesta}`), { headers: hlavicky })
}

const presmerovanoNa = (res) => (res.status >= 300 && res.status < 400 ? res.headers.get('location') : null)

describe('volba jazyka', () => {
  // JADRO VECI: tohle je chyba, kterou 7. 10. 2026 nahlasila Search Console.
  // next-intl prekladal KAZDOU adresu bez prefixu podle Accept-Language,
  // takze cesky clanek skoncil na /en/blog/... a tam 404. Cely cesky obsah
  // — pruvodce, encyklopedie, kalkulacky, stranky funkci — byl pro ctenare
  // s anglickym prohlizecem i pro Googlebota nedostupny.
  it.each([
    '/blog/jistota-kauce',
    '/encyklopedie/jistota',
    '/kalkulacky/urok-z-kauce',
    '/funkce/vraceni-kauce',
    '/kontakt',
  ])('%s nepresmerovava ani pri anglickem prohlizeci', (cesta) => {
    const res = proxy(pozadavek(cesta, { jazyk: 'en-US,en;q=0.9', zeme: 'US' }))
    expect(presmerovanoNa(res)).toBeNull()
  })

  it('podstranka se nehne ani pri ulozene nemcine', () => {
    const res = proxy(pozadavek('/blog/jistota-kauce', { cookie: 'de', jazyk: 'de-DE' }))
    expect(presmerovanoNa(res)).toBeNull()
  })

  it('novy navstevnik s anglickym prohlizecem dostane na uvodni strance anglictinu', () => {
    const res = proxy(pozadavek('/', { jazyk: 'en-US,en;q=0.9' }))
    expect(presmerovanoNa(res)).toBe('https://www.housio.app/en')
  })

  it('cech zustane na uvodni strance v cestine', () => {
    const res = proxy(pozadavek('/', { jazyk: 'cs-CZ,cs;q=0.9', zeme: 'CZ' }))
    expect(presmerovanoNa(res)).toBeNull()
  })

  it('zeme podle IP rozhodne, kdyz jazyk prohlizece neumime', () => {
    const res = proxy(pozadavek('/', { jazyk: 'ja-JP,ja;q=0.9', zeme: 'PL' }))
    expect(presmerovanoNa(res)).toBe('https://www.housio.app/pl')
  })

  it('vracejici se navstevnik dostane svuj ulozeny jazyk i proti prohlizeci', () => {
    const res = proxy(pozadavek('/', { cookie: 'de', jazyk: 'en-US,en;q=0.9' }))
    expect(presmerovanoNa(res)).toBe('https://www.housio.app/de')
  })

  it('kdo si zvolil cestinu, uz se nikam neposila', () => {
    const res = proxy(pozadavek('/', { cookie: 'cs', jazyk: 'en-US,en;q=0.9' }))
    expect(presmerovanoNa(res)).toBeNull()
  })

  it('nesmyslna cookie se ignoruje a rozhodne prohlizec', () => {
    const res = proxy(pozadavek('/', { cookie: 'klingon', jazyk: 'de-DE,de;q=0.9' }))
    expect(presmerovanoNa(res)).toBe('https://www.housio.app/de')
  })
})
