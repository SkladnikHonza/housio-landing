import { describe, it, expect } from 'vitest'
import { urokZKauce, zakonnaSazba, vyuctovaniSluzeb, lhutyVyuctovani, odpisyNemovitosti, danZPronajmu, PAUSAL , vynosZPronajmu, prumernaNeobsazenost } from './vypocty'

describe('úrok z jistoty', () => {
  it('spočítá úrok za celý rok', () => {
    const v = urokZKauce({ jistota: 50000, od: '2025-01-01', do: '2026-01-01', sazba: 11.5 })
    expect(v.dny).toBe(365)
    expect(v.urok).toBe(5750)     // 50 000 × 11,5 %
    expect(v.celkem).toBe(55750)
  })

  it('počítá po dnech, ne po letech', () => {
    const v = urokZKauce({ jistota: 50000, od: '2025-01-01', do: '2025-07-01', sazba: 11.5 })
    expect(v.dny).toBe(181)
    expect(v.urok).toBe(2851)     // 50 000 × 0,115 × 181/365
  })

  it('pozná obrácené datum a nevrátí záporný úrok', () => {
    const v = urokZKauce({ jistota: 50000, od: '2026-01-01', do: '2025-01-01', sazba: 11.5 })
    expect(v.chybaPoradi).toBe(true)
    expect(v.urok).toBe(0)
  })

  it('bez částky nebo s nesmyslným datem nevrací nic', () => {
    expect(urokZKauce({ jistota: 0, od: '2025-01-01', do: '2026-01-01', sazba: 11.5 })).toBeNull()
    expect(urokZKauce({ jistota: 50000, od: 'nesmysl', do: '2026-01-01', sazba: 11.5 })).toBeNull()
  })

  it('zákonná sazba je repo plus osm procentních bodů', () => {
    expect(zakonnaSazba(3.5)).toBe(11.5)
    expect(zakonnaSazba(0)).toBe(8)
  })
})

describe('vyúčtování služeb', () => {
  const polozky = [
    { nazev: 'Teplo', castka: 31000 },
    { nazev: 'Studená voda', castka: 9800 },
    { nazev: 'Teplá voda', castka: 8300 },
    { nazev: 'Společné prostory', castka: 6500 },
  ]

  it('spočítá nedoplatek z příkladu v článku', () => {
    const v = vyuctovaniSluzeb({ zalohaMesicne: 4000, mesicu: 12, polozky })
    expect(v.zaplaceno).toBe(48000)
    expect(v.naklady).toBe(55600)
    expect(v.nedoplatek).toBe(7600)
    expect(v.preplatek).toBe(0)
  })

  it('pozná přeplatek', () => {
    const v = vyuctovaniSluzeb({ zalohaMesicne: 5000, mesicu: 12, polozky })
    expect(v.preplatek).toBe(4400)
    expect(v.nedoplatek).toBe(0)
  })

  it('doporučí zálohu zaokrouhlenou nahoru na padesátikoruny', () => {
    const v = vyuctovaniSluzeb({ zalohaMesicne: 4000, mesicu: 12, polozky })
    expect(v.doporucenaZaloha).toBe(4650)   // 55 600 / 12 = 4 633,3
    expect(v.zmenaZalohy).toBe(650)
  })

  it('lhůty počítá od konce zúčtovacího období', () => {
    const l = lhutyVyuctovani('2026-06-30')
    expect(l.doruceni.toISOString().slice(0, 10)).toBe('2026-10-30')
    expect(l.vyporadani.toISOString().slice(0, 10)).toBe('2027-02-28')
  })

  it('u konce roku nepřeteče do dalšího měsíce', () => {
    // 31. 12. + 4 měsíce je 30. 4., ne 1. 5. — JavaScript by to jinak přetočil.
    const l = lhutyVyuctovani('2026-12-31')
    expect(l.doruceni.toISOString().slice(0, 10)).toBe('2027-04-30')
    expect(l.vyporadani.toISOString().slice(0, 10)).toBe('2027-08-31')
  })
})

describe('odpisy nemovitosti', () => {
  it('rovnoměrné odpisování trvá 30 let a odepíše přesně celou cenu', () => {
    const r = odpisyNemovitosti({ vstupniCena: 2400000, zpusob: 'rovnomerne' })
    expect(r).toHaveLength(30)
    expect(r[0].odpis).toBe(33600)            // 1,4 %
    expect(r[1].odpis).toBe(81600)            // 3,4 %
    expect(r[29].zustatkova).toBe(0)
    expect(r[29].opravky).toBe(2400000)
  })

  it('zrychlené dá v prvním roce méně, ale pak rychle dožene', () => {
    const r = odpisyNemovitosti({ vstupniCena: 2400000, zpusob: 'zrychlene' })
    expect(r[0].odpis).toBe(80000)            // 2 400 000 / 30
    expect(r[1].odpis).toBeGreaterThan(r[0].odpis)
    expect(r[r.length - 1].zustatkova).toBe(0)
    const soucet = r.reduce((a, x) => a + x.odpis, 0)
    expect(soucet).toBe(2400000)
  })

  it('bez ceny vrátí prázdno místo výjimky', () => {
    expect(odpisyNemovitosti({ vstupniCena: 0 })).toEqual([])
  })
})

describe('daň z pronájmu', () => {
  it('spočítá obě varianty z příkladu v článku', () => {
    const v = danZPronajmu({
      prijmy: 240000,
      vydaje: { odpis: 80000, uroky: 48000, opravy: 25000, pojisteni: 4000, danNemovitost: 1500 },
    })
    expect(v.pausalniVydaje).toBe(72000)
    expect(v.danPausal).toBe(25200)
    expect(v.skutecneVydaje).toBe(158500)
    expect(v.danSkutecne).toBe(12225)
    expect(v.vyhodnejsi).toBe('skutecne')
    expect(v.rozdil).toBe(12975)
  })

  it('u vysokých příjmů narazí paušál na strop 600 000 Kč', () => {
    const v = danZPronajmu({ prijmy: 3000000, vydaje: {} })
    expect(v.pausalniVydaje).toBe(PAUSAL.strop)
    expect(v.stropVyuzit).toBe(true)
    expect(v.zakladPausal).toBe(2400000)
  })

  it('bez výdajů vyhrává paušál', () => {
    const v = danZPronajmu({ prijmy: 240000, vydaje: {} })
    expect(v.vyhodnejsi).toBe('pausal')
  })

  it('pozná ztrátu a nedělá ze základu zápornou hodnotu', () => {
    const v = danZPronajmu({ prijmy: 100000, vydaje: { opravy: 150000 } })
    expect(v.zakladSkutecne).toBe(0)
    expect(v.danSkutecne).toBe(0)
    expect(v.ztrata).toBe(50000)
  })
})

describe('výnos z pronájmu', () => {
  // Příklad z článku o výnosu — kdyby se čísla rozešla, článek lže.
  const ZAKLAD = {
    cena: 4500000, vedlejsiNaklady: 0, najemneMesicne: 18000,
    rocniNaklady: 38000, neobsazenostMesicu: 0,
  }

  it('hrubý výnos je roční nájemné dělené pořizovací cenou', () => {
    expect(vynosZPronajmu(ZAKLAD).hruby).toBe(4.8)
  })

  it('vedlejší náklady koupě snižují výnos', () => {
    const bez = vynosZPronajmu(ZAKLAD).hruby
    const s = vynosZPronajmu({ ...ZAKLAD, vedlejsiNaklady: 280000 }).hruby
    expect(s).toBeLessThan(bez)
    expect(vynosZPronajmu({ ...ZAKLAD, vedlejsiNaklady: 280000 }).porizovaci).toBe(4780000)
  })

  it('čistý výnos odečte náklady i daň', () => {
    const v = vynosZPronajmu(ZAKLAD)
    expect(v.vybrano).toBe(216000)
    expect(v.dan).toBe(26700) // 15 % z (216 000 − 38 000)
    expect(v.cistyPrijem).toBe(151300)
    expect(v.cisty).toBe(3.4)
  })

  it('neobsazenost ubere z vybraného nájemného', () => {
    const v = vynosZPronajmu({ ...ZAKLAD, neobsazenostMesicu: 1 })
    expect(v.vybrano).toBe(198000)
    expect(v.ztrataNeobsazenosti).toBe(18000)
    expect(v.cisty).toBeLessThan(vynosZPronajmu(ZAKLAD).cisty)
  })

  // Bez hypotéky se vlastní kapitál rovná pořizovací ceně, takže obě
  // procenta musí vyjít stejně. Kdyby ne, je chyba ve vzorci.
  it('bez hypotéky se čistý výnos rovná výnosu z vlastního kapitálu', () => {
    const v = vynosZPronajmu(ZAKLAD)
    expect(v.naKapital).toBe(v.cisty)
  })

  it('páka: úrok nižší než výnos zvedne výnos z vlastních peněz', () => {
    const v = vynosZPronajmu({ ...ZAKLAD, vlastniKapital: 1500000, urokRocne: 45000 })
    expect(v.poUrocich).toBe(106300)
    expect(v.naKapital).toBeGreaterThan(v.cisty)
  })

  it('páka: úrok vyšší než čistý příjem znamená, že byt prodělává', () => {
    const v = vynosZPronajmu({ ...ZAKLAD, vlastniKapital: 1500000, urokRocne: 200000 })
    expect(v.prodelava).toBe(true)
    expect(v.naKapital).toBeLessThan(0)
  })

  it('náklady vyšší než nájemné nevyrobí zápornou daň', () => {
    const v = vynosZPronajmu({ ...ZAKLAD, rocniNaklady: 300000 })
    expect(v.dan).toBe(0)
    expect(v.cistyPrijem).toBeLessThan(0)
  })

  it('celoroční neobsazenost znamená nulový příjem, ne zápornou', () => {
    const v = vynosZPronajmu({ ...ZAKLAD, neobsazenostMesicu: 12 })
    expect(v.vybrano).toBe(0)
    expect(v.dan).toBe(0)
  })

  it('neobsazenost mimo rozsah se ořízne', () => {
    expect(vynosZPronajmu({ ...ZAKLAD, neobsazenostMesicu: 30 }).vybrano).toBe(0)
    expect(vynosZPronajmu({ ...ZAKLAD, neobsazenostMesicu: -5 }).vybrano).toBe(216000)
  })

  it('bez ceny nebo bez nájemného vrací null místo nesmyslu', () => {
    expect(vynosZPronajmu({ ...ZAKLAD, cena: 0 })).toBeNull()
    expect(vynosZPronajmu({ ...ZAKLAD, najemneMesicne: 0 })).toBeNull()
  })
})

describe('průměrná neobsazenost', () => {
  it('výměna za tři roky trvající měsíc je zhruba třetina měsíce ročně', () => {
    expect(prumernaNeobsazenost({ let: 3, mesicuVymena: 1 })).toBe(0.33)
  })

  it('každoroční výměna na dva měsíce je dva měsíce ročně', () => {
    expect(prumernaNeobsazenost({ let: 1, mesicuVymena: 2 })).toBe(2)
  })

  it('nesmyslný vstup vrací null', () => {
    expect(prumernaNeobsazenost({ let: 0, mesicuVymena: 1 })).toBeNull()
  })
})
