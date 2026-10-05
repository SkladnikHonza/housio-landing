// Výpočty pro kalkulačky.
//
// Schválně oddělené od komponent: čísla jsou to jediné, co na kalkulačce
// doopravdy záleží, a takhle je hlídají testy bez prohlížeče.
//
// Zaokrouhlování: daňové odpisy se podle zákona zaokrouhlují na celé koruny
// nahoru, ostatní výsledky na celé koruny matematicky.

export const ODPISY = {
  // 5. odpisová skupina (byty a budovy): rovnoměrně 30 let.
  // § 31 odst. 1 písm. a) zákona o daních z příjmů.
  rovnomerne: { prvniRok: 1.4, dalsiRoky: 3.4, let: 30 },
  // § 32: koeficient 30 v prvním roce, 31 v dalších.
  zrychlene: { prvni: 30, dalsi: 31, let: 30 },
}

export const PAUSAL = { procento: 30, strop: 600000 }
export const SAZBA_DANE = 15

const naKoruny = (x) => Math.round(x)
const nahoru = (x) => Math.ceil(x)

// ───────────────────────── úrok z jistoty (kauce) ─────────────────────────
// § 2254 odst. 2 občanského zákoníku: nájemce má právo na úroky z jistoty
// od jejího poskytnutí, nejméně ve výši zákonné sazby.
export function urokZKauce({ jistota, od, do: doData, sazba }) {
  const zacatek = new Date(od)
  const konec = new Date(doData)
  if (!jistota || Number.isNaN(zacatek.getTime()) || Number.isNaN(konec.getTime())) return null

  const dny = Math.round((konec - zacatek) / 86400000)
  if (dny < 0) return { dny: 0, urok: 0, celkem: naKoruny(jistota), chybaPoradi: true }

  const urok = (Number(jistota) * (Number(sazba) / 100) * dny) / 365
  return {
    dny,
    let: Math.round((dny / 365) * 10) / 10,
    urok: naKoruny(urok),
    celkem: naKoruny(Number(jistota) + urok),
    chybaPoradi: false,
  }
}

// Zákonná sazba úroků z prodlení = repo sazba ČNB platná pro první den
// kalendářního pololetí + 8 procentních bodů (nařízení vlády č. 351/2013 Sb.).
export function zakonnaSazba(repoSazba) {
  return Math.round((Number(repoSazba) + 8) * 100) / 100
}

// ───────────────────────── vyúčtování služeb ─────────────────────────
// Zákon č. 67/2013 Sb.: vyúčtování doručit do 4 měsíců od konce zúčtovacího
// období, vypořádat do 4 měsíců od doručení.
export function vyuctovaniSluzeb({ zalohaMesicne, mesicu = 12, polozky = [] }) {
  const zaplaceno = naKoruny(Number(zalohaMesicne || 0) * Number(mesicu || 0))
  const naklady = naKoruny(polozky.reduce((a, p) => a + Number(p.castka || 0), 0))
  const rozdil = zaplaceno - naklady

  // Doporučená záloha na další období: skutečné náklady rozpočítané na měsíc,
  // zaokrouhlené nahoru na padesátikoruny, ať nevzniká nedoplatek znovu.
  const doporucenaZaloha = mesicu > 0 ? Math.ceil(naklady / mesicu / 50) * 50 : 0

  return {
    zaplaceno,
    naklady,
    rozdil,                      // kladné = přeplatek nájemníkovi, záporné = nedoplatek
    preplatek: Math.max(rozdil, 0),
    nedoplatek: Math.max(-rozdil, 0),
    doporucenaZaloha,
    zmenaZalohy: doporucenaZaloha - naKoruny(Number(zalohaMesicne || 0)),
  }
}

// Lhůty ze zákona č. 67/2013 Sb. odvozené od konce zúčtovacího období.
export function lhutyVyuctovani(konecObdobi) {
  const konec = new Date(konecObdobi)
  if (Number.isNaN(konec.getTime())) return null
  // DVE PASTI NAJEDNOU:
  // 1) `setMonth` u 31. 12. a posunu o 4 mesice vyrobi 31. 4., coz neexistuje,
  //    a JavaScript to pretoci na 1. 5. Lhuta ze zakona ale konci 30. 4.,
  //    takze se den orizne na posledni den ciloveho mesice.
  // 2) Vsechno pocitame v UTC. Datum z formulare prijde jako 2026-12-31, coz
  //    je pulnoc UTC; kdybychom skladali vysledek v mistnim case, uzivateli
  //    za poledníkem by lhuta vysla o den driv.
  const posun = (mesicu) => {
    const cilovyMesic = konec.getUTCMonth() + mesicu
    const posledniDen = new Date(Date.UTC(konec.getUTCFullYear(), cilovyMesic + 1, 0)).getUTCDate()
    return new Date(Date.UTC(konec.getUTCFullYear(), cilovyMesic, Math.min(konec.getUTCDate(), posledniDen)))
  }
  return {
    doruceni: posun(4),          // § 7: doručit vyúčtování
    vyporadani: posun(8),        // § 7: vypořádat do 4 měsíců od doručení
  }
}

// ───────────────────────── odpisy nemovitosti ─────────────────────────
export function odpisyNemovitosti({ vstupniCena, zpusob = 'rovnomerne' }) {
  const cena = Number(vstupniCena || 0)
  if (cena <= 0) return []

  const radky = []
  let opravky = 0

  if (zpusob === 'zrychlene') {
    const { prvni, dalsi, let: roku } = ODPISY.zrychlene
    for (let rok = 1; rok <= roku; rok += 1) {
      const zustatkova = cena - opravky
      const odpis = rok === 1
        ? nahoru(cena / prvni)
        : nahoru((2 * zustatkova) / (dalsi - (rok - 1)))
      const skutecny = Math.min(odpis, cena - opravky)
      opravky += skutecny
      radky.push({ rok, odpis: skutecny, opravky, zustatkova: cena - opravky })
      if (opravky >= cena) break
    }
    return radky
  }

  const { prvniRok, dalsiRoky, let: roku } = ODPISY.rovnomerne
  for (let rok = 1; rok <= roku; rok += 1) {
    const sazba = rok === 1 ? prvniRok : dalsiRoky
    const odpis = Math.min(nahoru((cena * sazba) / 100), cena - opravky)
    opravky += odpis
    radky.push({ rok, odpis, opravky, zustatkova: cena - opravky })
    if (opravky >= cena) break
  }
  return radky
}

// ───────────────────────── daň z pronájmu (§ 9) ─────────────────────────
export function danZPronajmu({ prijmy, vydaje = {} }) {
  const p = Number(prijmy || 0)
  const skutecneVydaje = Object.values(vydaje).reduce((a, v) => a + Number(v || 0), 0)

  const pausalniVydaje = Math.min(naKoruny((p * PAUSAL.procento) / 100), PAUSAL.strop)
  const zakladPausal = Math.max(p - pausalniVydaje, 0)
  const zakladSkutecne = Math.max(p - skutecneVydaje, 0)

  const dan = (zaklad) => naKoruny((zaklad * SAZBA_DANE) / 100)
  const danPausal = dan(zakladPausal)
  const danSkutecne = dan(zakladSkutecne)

  return {
    prijmy: naKoruny(p),
    pausalniVydaje,
    skutecneVydaje: naKoruny(skutecneVydaje),
    zakladPausal,
    zakladSkutecne,
    danPausal,
    danSkutecne,
    vyhodnejsi: danSkutecne < danPausal ? 'skutecne' : 'pausal',
    rozdil: Math.abs(danPausal - danSkutecne),
    stropVyuzit: pausalniVydaje >= PAUSAL.strop,
    ztrata: p - skutecneVydaje < 0 ? naKoruny(skutecneVydaje - p) : 0,
  }
}
