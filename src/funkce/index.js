import { FUNKCE_EVIDENCE } from './funkce-evidence'
import { FUNKCE_DOKLADY } from './funkce-doklady'
import { FUNKCE_PROVOZ } from './funkce-provoz'

// Stránky jednotlivých funkcí Housia.
//
// PROC EXISTUJI: lidi nehledaji produkt, hledaji svuj problem. Skoro nikdo
// nenapise „software na spravu nemovitosti" — napise „jak vyuctovat sluzby
// najemnikovi" nebo „potvrzeni o zaplaceni kauce vzor". Jedna obecna stranka
// s odrazkami na takovy dotaz nema co nabidnout; stranka, ktera je presne
// o tom, ano.
//
// PROC JEN CESKY: stejne jako pruvodce, kalkulacky a encyklopedie. Stoji to
// na ceskych zakonech, lhutach a sazbach. V ostatnich jazycich vraci 404.
//
// PRAVIDLO: popisujeme jen to, co aplikace OPRAVDU umi. Zadna stranka
// o funkci, ktera se chysta. Navstevnik, ktery se po registraci nedopatra
// slibeneho, se uz nevrati.

const VSE = [...FUNKCE_EVIDENCE, ...FUNKCE_DOKLADY, ...FUNKCE_PROVOZ]

// Skupiny urcuji poradi na rozcestniku. Nesedi na soubory zamerne —
// soubory delime podle toho, jak se pise, skupiny podle toho, jak se cte.
export const SKUPINY = [
  {
    klic: 'evidence',
    nazev: 'Evidence',
    popis: 'Co Housio drží a kde to najdete.',
    slugy: [
      'evidence-nemovitosti',
      'evidence-najemniku',
      'najemni-smlouvy',
      'mesicni-platby',
      'evidence-vydaju',
      'dokumenty-k-nemovitosti',
      'vyhledavani',
    ],
  },
  {
    klic: 'doklady',
    nazev: 'Doklady a exporty',
    popis: 'Papír, který pošlete nájemníkovi, účetní nebo na úřad.',
    slugy: [
      'vyuctovani-sluzeb-doklad',
      'potvrzeni-o-zaplaceni-najmu',
      'potvrzeni-o-kauci',
      'vraceni-kauce',
      'faktury-a-doklady',
      'export-do-excelu',
      'vlastni-logo-na-dokladech',
    ],
  },
  {
    klic: 'povinnosti',
    nazev: 'Hlídání a povinnosti',
    popis: 'Lhůty a doklady, na kterých se dá prodělat.',
    slugy: [
      'povinne-revize-evidence',
      'pojisteni-nemovitosti',
      'odpisy-a-dane',
      'provereni-najemnika-evidence',
    ],
  },
  {
    klic: 'sdileni',
    nazev: 'Přehled a sdílení',
    popis: 'Jak se na portfolio dívat a koho k němu pustit.',
    slugy: ['nastenka-portfolia', 'pristup-pro-vlastniky', 'sprava-tymu'],
  },
  {
    klic: 'kratkodoby',
    nazev: 'Krátkodobý pronájem',
    popis: 'Airbnb a Booking — evidence, ne rezervační systém.',
    slugy: ['kratkodoby-pronajem', 'kalendar-obsazenosti'],
  },
  {
    klic: 'kazdy-den',
    nazev: 'Každodenní práce',
    popis: 'Drobnosti, které rozhodují, jestli se aplikace používá.',
    slugy: ['poznamky-a-ukoly', 'mobilni-aplikace', 'deset-jazyku'],
  },
]

// Kontrola pri startu: kazda funkce patri prave do jedne skupiny a kazdy
// slug ve skupine existuje. Bez toho by se stranka tise ztratila z rozcestniku
// a zustala jen v sitemape — nejhorsi mozny stav.
const vSkupinach = SKUPINY.flatMap((s) => s.slugy)
const zname = new Set(VSE.map((f) => f.slug))

for (const slug of vSkupinach) {
  if (!zname.has(slug)) throw new Error(`Skupina odkazuje na neexistující funkci: ${slug}`)
}
for (const f of VSE) {
  if (!vSkupinach.includes(f.slug)) throw new Error(`Funkce není v žádné skupině: ${f.slug}`)
}
if (vSkupinach.length !== new Set(vSkupinach).size) {
  throw new Error('Některá funkce je ve dvou skupinách')
}
if (zname.size !== VSE.length) {
  throw new Error('Dva záznamy mají stejný slug')
}

// Poradi podle skupin, ne podle souboru.
export const FUNKCE = vSkupinach.map((slug) => VSE.find((f) => f.slug === slug))

export const SLUGY = FUNKCE.map((f) => f.slug)

export function funkcePodleSlug(slug) {
  return FUNKCE.find((f) => f.slug === slug) || null
}

export function funkceSkupiny(klic) {
  const s = SKUPINY.find((x) => x.klic === klic)
  return s ? s.slugy.map(funkcePodleSlug) : []
}

// Nazvy planu pro stitek u funkce. Musi sedet s PLAN_FEATURES v aplikaci.
export const PLANY = {
  free: 'Zdarma',
  basic: 'Od plánu Basic',
  pro: 'Od plánu Pro',
  business: 'Plán Business',
}
