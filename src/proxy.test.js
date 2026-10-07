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

  // Drive sem proxy cizince presmerovala. Google u presmerovane adresy
  // indexuje cil, takze se ceska uvodni stranka do vysledku nedostavala.
  // Ted se nikdo nikam neposila a jiny jazyk nabidne pruh nahore
  // (components/NabidkaJazyka.jsx, logika v lib/nabidkaJazyka.js).
  it('novy navstevnik s anglickym prohlizecem se NIKAM nepresmeruje', () => {
    const res = proxy(pozadavek('/', { jazyk: 'en-US,en;q=0.9' }))
    expect(presmerovanoNa(res)).toBeNull()
  })

  it('ani zeme podle IP uz nic nepresmeruje', () => {
    const res = proxy(pozadavek('/', { jazyk: 'ja-JP,ja;q=0.9', zeme: 'PL' }))
    expect(presmerovanoNa(res)).toBeNull()
  })

  it('cech zustane na uvodni strance v cestine', () => {
    const res = proxy(pozadavek('/', { jazyk: 'cs-CZ,cs;q=0.9', zeme: 'CZ' }))
    expect(presmerovanoNa(res)).toBeNull()
  })

  it('vracejici se navstevnik dostane svuj ulozeny jazyk i proti prohlizeci', () => {
    const res = proxy(pozadavek('/', { cookie: 'de', jazyk: 'en-US,en;q=0.9' }))
    expect(presmerovanoNa(res)).toBe('https://www.housio.app/de')
  })

  it('kdo si zvolil cestinu, uz se nikam neposila', () => {
    const res = proxy(pozadavek('/', { cookie: 'cs', jazyk: 'en-US,en;q=0.9' }))
    expect(presmerovanoNa(res)).toBeNull()
  })

  it('nesmyslna cookie nic nerozbije', () => {
    const res = proxy(pozadavek('/', { cookie: 'klingon', jazyk: 'de-DE,de;q=0.9' }))
    expect(presmerovanoNa(res)).toBeNull()
  })

  // Googlebot nema cookie ani Accept-Language, ktery by ho nekam poslal —
  // uvodni stranku tedy vidi jako 200 a muze ji zaindexovat.
  it('uvodni stranka je pro Googlebota bez presmerovani', () => {
    expect(presmerovanoNa(proxy(pozadavek('/')))).toBeNull()
    expect(presmerovanoNa(proxy(pozadavek('/', { jazyk: 'en-US,en;q=0.9', zeme: 'US' })))).toBeNull()
  })
})
