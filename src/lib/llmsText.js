// Prevod vykresleneho clanku na cisty text pro llms-full.txt.
//
// PROC PRES HTML: clanky jsou React komponenty, takze jediny spolehlivy zpusob,
// jak z nich dostat text, je nechat je vykreslit a vysledek prevest. Rozebirat
// zdrojovy JSX regulárním výrazem by se rozbilo pri prvni zmene prvku.
//
// Vystup je Markdown, protoze presne tak to AI asistenti ocekavaji: nadpisy
// jako ##, odrazky jako -, tabulky jako tabulky.

const ENTITY = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'",
  '&#x27;': "'", '&nbsp;': ' ', '&middot;': '·', '&hellip;': '…',
}

function dekoduj(s) {
  return s
    .replace(/&(?:amp|lt|gt|quot|#39|#x27|nbsp|middot|hellip);/g, (m) => ENTITY[m] ?? m)
    // Ciselne entity (&#8212; a &#x2014;) — React je sice nevyrabi, ale muzou
    // prijit z textu v prekladech.
    .replace(/&#(\d+);/g, (_, c) => String.fromCodePoint(Number(c)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, c) => String.fromCodePoint(parseInt(c, 16)))
}

function bezZnacek(s) {
  return dekoduj(s.replace(/<[^>]*>/g, '')).replace(/[ \t]+/g, ' ').trim()
}

// Tabulku prevedeme na markdownovou, at si AI udrzi vztah radku a sloupcu.
function tabulkaNaMarkdown(html) {
  const hlavicka = [...html.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map((m) => bezZnacek(m[1]))
  const radky = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)]
    .map((r) => [...r[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => bezZnacek(m[1])))
    .filter((r) => r.length > 0)
  if (!hlavicka.length && !radky.length) return ''
  const sloupcu = Math.max(hlavicka.length, ...radky.map((r) => r.length), 1)
  const dorovnej = (r) => Array.from({ length: sloupcu }, (_, i) => (r[i] ?? '').replace(/\|/g, '\\|'))
  const out = []
  out.push('| ' + dorovnej(hlavicka).join(' | ') + ' |')
  out.push('|' + ' --- |'.repeat(sloupcu))
  for (const r of radky) out.push('| ' + dorovnej(r).join(' | ') + ' |')
  return out.join('\n')
}

// Vykreslene HTML clanku -> Markdown.
export function clanekNaText(html) {
  let s = html

  // Obsah clanku je navigace, ne text — do strojoveho prehledu nepatri.
  s = s.replace(/<nav[\s\S]*?<\/nav>/g, '')

  // Tabulky zpracujeme drive, nez se rozbije jejich struktura.
  s = s.replace(/<table[\s\S]*?<\/table>/g, (t) => '\n\n' + tabulkaNaMarkdown(t) + '\n\n')

  // Caste dotazy: otazka tucne, odpoved pod ni.
  s = s.replace(/<summary[^>]*>([\s\S]*?)<\/summary>/g, (_, q) => `\n\n**${bezZnacek(q)}**\n\n`)

  // Nadpisy.
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, (_, t) => `\n\n## ${bezZnacek(t)}\n\n`)
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, (_, t) => `\n\n### ${bezZnacek(t)}\n\n`)

  // Odrazky.
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (_, t) => `\n- ${bezZnacek(t)}`)

  // Odstavce a bloky.
  s = s.replace(/<\/(p|div|section|ul|ol|details|figure|blockquote)>/g, '\n\n')
  s = s.replace(/<br\s*\/?>/g, '\n')

  s = bezZnacek(s)
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+\n/g, '\n')

  // Mezera, kterou po sobe nechaly odstraněné znacky uprostred vety.
  return s.replace(/ {2,}/g, ' ').trim()
}
