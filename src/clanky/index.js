import * as zvyseniNajmu from './zvyseni-najmu'
import * as evidencniList from './evidencni-list'
import * as najemniSmlouva from './najemni-smlouva'
import * as jistotaKauce from './jistota-kauce'
import * as predavaciProtokol from './predavaci-protokol'
import * as vypovedZNajmu from './vypoved-z-najmu'
import * as neplaticiNajemnik from './neplatici-najemnik'
import * as daneZPronajmu from './dane-z-pronajmu'
import * as vyuctovaniSluzeb from './vyuctovani-sluzeb'
import * as kratkodobyPronajem from './kratkodoby-pronajem'

// Prurvodce pronajmem — jediny zdroj pravdy pro rozcestnik, detail i sitemapu.
//
// PROC JEN CESKY: texty stoji na ceskem obcanskem zakoniku, zakone c. 67/2013
// a ceske dani z prijmu. Prelozit je do chorvatstiny by znamenalo tvrdit
// Chorvatovi neco, co pro nej neplati. Blog proto bezi jen v cestine
// a v ostatnich jazycich vraci 404 (viz app/[locale]/blog).
//
// Kazdy clanek je modul, ktery vedle komponenty exportuje i META (nadpis,
// perex, tema, sekce pro obsah a caste dotazy). Diky tomu se z jednoho mista
// skladaji strukturovana data, obsah clanku i prolinkovani.

// Poradi tematu urcuje poradi na rozcestniku.
export const TEMATA = [
  {
    id: 'najemne',
    nazev: 'Nájemné a jeho změny',
    popis: 'Kolik si říct, jak a kdy nájemné zvýšit a čím to podložit.',
  },
  {
    id: 'smlouva',
    nazev: 'Smlouva a předání bytu',
    popis: 'Co musí být na papíře, než nájemník převezme klíče.',
  },
  {
    id: 'problemy',
    nazev: 'Když se to zvrtne',
    popis: 'Neplacení, výpověď a vystěhování — krok za krokem a bez chyb, které stojí měsíce.',
  },
  {
    id: 'dane',
    nazev: 'Daně a vyúčtování',
    popis: 'Co stát chce, do kdy a co si k tomu schovávat.',
  },
]

const MODULY = [
  zvyseniNajmu,
  evidencniList,
  najemniSmlouva,
  jistotaKauce,
  predavaciProtokol,
  vypovedZNajmu,
  neplaticiNajemnik,
  daneZPronajmu,
  vyuctovaniSluzeb,
  kratkodobyPronajem,
]

export const CLANKY = MODULY.map((m) => ({ ...m.META, Obsah: m.default }))

export const SLUGY = CLANKY.map((c) => c.slug)

export function clanekPodleSlug(slug) {
  return CLANKY.find((c) => c.slug === slug) || null
}

export function clankyTematu(tema) {
  return CLANKY.filter((c) => c.tema === tema)
}

export function nazevTematu(tema) {
  return TEMATA.find((t) => t.id === tema)?.nazev || ''
}
