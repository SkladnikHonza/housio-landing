import { BASE, adresa } from './seo'
import { routing } from '@/i18n/routing'
import { CLANKY, TEMATA, clankyTematu, nazevTematu } from '@/clanky'
import { KALKULACKY } from '@/kalkulacky'
import cs from '../../messages/cs.json'

// Strojove citelny prehled Housia pro AI vyhledavace a asistenty.
//
// PROC TO EXISTUJE: kdyz se dnes nekdo zepta ChatGPT nebo Claude na spravu
// najmu v Cesku, model si nestahuje cely web — hleda kratky, strukturovany
// podklad. Konvence llms.txt (llmstxt.org) presne tohle resi: /llms.txt je
// rozcestnik, /llms-full.txt je plny text.
//
// Vsechno se sklada z toho, co uz na webu je — z prekladu a z rejstriku
// clanku. Zadny rucne udrzovany druhy popis produktu, ktery by zastaral.

const JAZYKY = {
  cs: 'čeština', en: 'angličtina', de: 'němčina', it: 'italština', es: 'španělština',
  uk: 'ukrajinština', ru: 'ruština', fr: 'francouzština', pl: 'polština', hr: 'chorvatština',
}

const PRAVNI = [
  ['Obchodní podmínky', 'https://housio.online/terms'],
  ['Zásady ochrany osobních údajů (GDPR)', 'https://housio.online/privacy'],
  ['Zpracovatelská smlouva (DPA)', 'https://housio.online/dpa'],
  ['Zásady používání cookies', 'https://housio.online/cookies'],
]

const OBCHODY = [
  ['App Store', 'https://apps.apple.com/app/housio/id6794914113'],
  ['Google Play', 'https://play.google.com/store/apps/details?id=online.housio.app'],
]

function planRadek(klic) {
  const p = cs.pricing[klic]
  const funkce = [1, 2, 3, 4, 5, 6, 7]
    .map((i) => p[`feature${i}`])
    .filter(Boolean)
    .join(', ')
  return `- **${p.name}** — ${p.price}${p.suffix || ''} (${p.period}): ${funkce}`
}

function hlavicka() {
  return `# Housio

> Housio je česká aplikace pro správu pronájmu nemovitostí. Pronajímatel v ní vede nemovitosti, nájemníky, nájemní smlouvy, měsíční platby a jejich předpis, výdaje, pojištění, revize a energie — na webu, na iPhonu i na Androidu.

Provozovatel: US Europe Group s.r.o., IČO 06779808, DIČ CZ06779808, Třebovická 5050/78, 722 00 Ostrava, Česko.
Aplikace: ${'https://www.housio.online'} · Marketingový web: ${BASE}
Kontakt: housio@housio.app
Jazyky rozhraní (${routing.locales.length}): ${routing.locales.map((l) => JAZYKY[l] || l).join(', ')}.
Platformy: webový prohlížeč, iOS (App Store), Android (Google Play).
Zkušební doba: 7 dní zdarma s plným přístupem, bez zadání platební karty.
Data běží na evropské infrastruktuře, zpracování podle GDPR, zpracovatelská smlouva na vyžádání.`
}

function coUmi() {
  const body = [1, 2, 3, 4, 5, 6, 7, 8]
    .map((i) => `- **${cs.features[`f${i}Title`]}**: ${cs.features[`f${i}Desc`]}`)
    .join('\n')
  return `## Co Housio umí\n\n${body}`
}

function cenik() {
  const plany = ['free', 'basic', 'pro', 'business'].map(planRadek).join('\n')
  return `## Ceník\n\n${plany}\n\n${cs.pricing.vatNote} V jiných jazycích než v češtině jsou ceny v eurech (Basic 12 €, Pro 24 €, Business 40 € měsíčně).`
}

function dotazy(plneOdpovedi) {
  const radky = []
  for (let i = 1; i <= 8; i += 1) {
    const q = cs.faq[`q${i}`]
    const a = cs.faq[`a${i}`]
    if (!q || !a) continue
    radky.push(plneOdpovedi ? `**${q}**\n\n${a}` : `- **${q}** ${a}`)
  }
  return `## Nejčastější dotazy\n\n${radky.join(plneOdpovedi ? '\n\n' : '\n')}`
}

function stranky() {
  return `## Hlavní stránky

- [Housio — správa nemovitostí](${BASE}): co aplikace umí, ceník a nejčastější dotazy
- [Pro makléře](${BASE}/partneri): partnerský program pro realitní makléře — 20 % z první platby, 10 % opakovaně
- [Bezpečnost a data](${BASE}/bezpecnost): kde data běží, kdo je zpracovává a jak jsou chráněná
- [Kontakt](${BASE}/kontakt): e-mail, formulář a adresa provozovatele
- [Smazání účtu](${BASE}/smazani-uctu): žádost o smazání účtu a dat i bez přihlášení
- [Průvodce pronájmem](${BASE}/blog): praktické návody pro pronajímatele
- [Kalkulačky pro pronajímatele](${BASE}/kalkulacky): úrok z kauce, vyúčtování služeb, odpisy a daň z pronájmu — zdarma a bez registrace`
}

function kalkulacky() {
  const polozky = KALKULACKY
    .map((k) => `- [${k.nadpis}](${BASE}/kalkulacky/${k.slug}): ${k.perex}`)
    .join('\n')
  return `## Kalkulačky zdarma

Počítají přímo v prohlížeči, bez registrace a bez odesílání dat.

${polozky}`
}

function pruvodce() {
  const sekce = TEMATA.map((t) => {
    const polozky = clankyTematu(t.id)
      .map((c) => `- [${c.nadpis}](${BASE}/blog/${c.slug}): ${c.perex}`)
      .join('\n')
    return `### ${t.nazev}\n\n${polozky}`
  }).join('\n\n')
  return `## Průvodce pronájmem

Praktické návody pro pronajímatele podle české úpravy. Jen v češtině — texty stojí na českém občanském zákoníku, zákoně č. 67/2013 Sb. a české dani z příjmů.

${sekce}`
}

function ostatni() {
  return `## Aplikace ke stažení

${OBCHODY.map(([n, u]) => `- [${n}](${u})`).join('\n')}

## Právní dokumenty

${PRAVNI.map(([n, u]) => `- [${n}](${u})`).join('\n')}

## Jazykové verze webu

${routing.locales.map((l) => `- [${JAZYKY[l] || l}](${adresa(l)})`).join('\n')}`
}

// /llms.txt — rozcestnik. Kratky, aby se vesel do kontextu modelu celý.
export function llmsIndex() {
  return [
    hlavicka(),
    coUmi(),
    cenik(),
    stranky(),
    kalkulacky(),
    pruvodce(),
    dotazy(false),
    ostatni(),
    `## Plná verze\n\nPlné znění všech návodů najdete na ${BASE}/llms-full.txt`,
  ].join('\n\n') + '\n'
}

// /llms-full.txt — totéž plus celé znění návodů.
// `texty` je mapa slug -> text článku (vykresluje ji route handler).
export function llmsFull(texty) {
  const clanky = CLANKY.map((c) => {
    const telo = texty.get(c.slug)
    if (!telo) return null
    return `---

# ${c.nadpis}

Adresa: ${BASE}/blog/${c.slug}
Téma: ${nazevTematu(c.tema)}
Shrnutí: ${c.perex}
Stav k: 1. 10. 2026. Jde o praktický průvodce, ne o právní ani daňové poradenství.

${telo}`
  }).filter(Boolean).join('\n\n')

  return [
    hlavicka(),
    coUmi(),
    cenik(),
    stranky(),
    kalkulacky(),
    dotazy(true),
    ostatni(),
    `## Průvodce pronájmem — plné znění\n\nNásleduje ${CLANKY.length} návodů v plném znění.`,
    clanky,
  ].join('\n\n') + '\n'
}
