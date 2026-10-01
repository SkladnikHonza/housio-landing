import ZvyseniNajmu from './zvyseni-najmu'
import NajemniSmlouva from './najemni-smlouva'
import DaneZPronajmu from './dane-z-pronajmu'
import VyuctovaniSluzeb from './vyuctovani-sluzeb'
import EvidencniList from './evidencni-list'

// Seznam clanku — jediny zdroj pravdy pro rozcestnik, sitemapu i detail.
//
// PROC JEN CESKY: tyhle texty stoji na ceskem obcanskem zakoniku, zakone
// o sluzbach a ceske dani z prijmu. Prelozit je do chorvatstiny by znamenalo
// tvrdit Chorvatovi neco, co pro nej neplati. Blog proto bezi jen v cestine
// a v ostatnich jazycich vraci 404 (viz app/[locale]/blog).
export const CLANKY = [
  {
    slug: 'zvyseni-najmu',
    nadpis: 'Jak zvýšit nájemné: inflační doložka i postup podle zákona',
    perex: 'Kdy stačí oznámení, kdy potřebuješ návrh a souhlas nájemníka a proč existuje strop dvaceti procent za tři roky.',
    datum: '2026-10-01',
    minut: 6,
    Obsah: ZvyseniNajmu,
  },
  {
    slug: 'najemni-smlouva',
    nadpis: 'Co musí být v nájemní smlouvě na byt (a co do ní nepatří)',
    perex: 'Povinné náležitosti, strop na jistotu a smluvní pokutu, ujednání, na která zákon nehledí, a konec nájmu bez překvapení.',
    datum: '2026-10-01',
    minut: 7,
    Obsah: NajemniSmlouva,
  },
  {
    slug: 'dane-z-pronajmu',
    nadpis: 'Daň z pronájmu: paušál 30 %, nebo skutečné výdaje?',
    perex: 'Spočítané na konkrétním bytě — kde se paušál vyplatí, kdy vyhrají odpisy a úroky a co si schovávat celý rok.',
    datum: '2026-10-01',
    minut: 7,
    Obsah: DaneZPronajmu,
  },
  {
    slug: 'vyuctovani-sluzeb',
    nadpis: 'Vyúčtování služeb: lhůty, podklady a pokuta za každý den',
    perex: 'Do kdy musí být vyúčtování doručeno, co v něm musí stát a kolik stojí, když se zpozdíš.',
    datum: '2026-10-01',
    minut: 6,
    Obsah: VyuctovaniSluzeb,
  },
  {
    slug: 'evidencni-list',
    nadpis: 'Evidenční list nájemného: k čemu je dobrý a co v něm má být',
    perex: 'Jediná příloha smlouvy, kterou změníš bez dodatku — pokud na ni smlouva správně odkazuje.',
    datum: '2026-10-01',
    minut: 4,
    Obsah: EvidencniList,
  },
]

export const SLUGY = CLANKY.map((c) => c.slug)

export function clanekPodleSlug(slug) {
  return CLANKY.find((c) => c.slug === slug) || null
}
