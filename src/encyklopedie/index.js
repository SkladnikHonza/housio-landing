import { HESLA_SMLOUVA } from './hesla-smlouva'
import { HESLA_PENIZE } from './hesla-penize'
import { HESLA_SLUZBY } from './hesla-sluzby'
import { HESLA_DANE } from './hesla-dane'
import { HESLA_INVESTICE } from './hesla-investice'

// Encyklopedie pojmů kolem pronájmu.
//
// PROC EXISTUJE: pronajímatel nehledá „software pro správu nemovitostí", hledá
// „co je evidenční list" nebo „zúčtovací období". Krátká hesla chytají přesně
// tyhle dotazy a odvedou člověka dál — na návod, na kalkulačku, do aplikace.
//
// PROC JEN CESKY: stejně jako průvodce a kalkulačky stojí na české úpravě.
//
// Tvar hesla:
//   pojem      — název, jak ho člověk hledá
//   definice   — JEDNA věta. Tohle si bere vyhledávač do výsledku, tak ať dává
//                smysl i vytržená z kontextu.
//   vysvetleni — dva až tři odstavce
//   pozor      — jedna past, na kterou se nejčastěji naráží (nepovinné)
//   zdroj      — paragraf nebo zákon, ze kterého to plyne (nepovinné)
//   souvisejici— slugy dalších hesel
//   clanek     — slug článku v průvodci, který téma rozebírá (nepovinné)
//   kalkulacka — slug kalkulačky (nepovinné)

export const OBLASTI = [
  { id: 'smlouva', nazev: 'Smlouva a nájem', popis: 'Co se podepisuje, na jak dlouho a jak to skončí.' },
  { id: 'penize', nazev: 'Peníze a platby', popis: 'Nájemné, zálohy, jistota a co se s nimi smí dělat.' },
  { id: 'sluzby', nazev: 'Služby, energie a dům', popis: 'Vyúčtování, měřidla, odběrná místa a společenství vlastníků.' },
  { id: 'dane', nazev: 'Daně a účetnictví', popis: 'Co stát chce z příjmu z nájmu a co si smíš odečíst.' },
  { id: 'investice', nazev: 'Koupě, hypotéka a prodej', popis: 'Co řeší pronajímatel před koupí bytu a při jeho prodeji.' },
]

export const HESLA = [...HESLA_SMLOUVA, ...HESLA_PENIZE, ...HESLA_SLUZBY, ...HESLA_DANE, ...HESLA_INVESTICE]

export const SLUGY = HESLA.map((h) => h.slug)

export function hesloPodleSlug(slug) {
  return HESLA.find((h) => h.slug === slug) || null
}

export function heslaOblasti(oblast) {
  return HESLA.filter((h) => h.oblast === oblast)
}

export function nazevOblasti(oblast) {
  return OBLASTI.find((o) => o.id === oblast)?.nazev || ''
}

// Abecedně pro rozcestník — čeština řadí jinak než ASCII.
export function heslaAbecedne() {
  return [...HESLA].sort((a, b) => a.pojem.localeCompare(b.pojem, 'cs'))
}
