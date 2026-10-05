// Vygeneruje public/llms.txt a public/llms-full.txt.
//
// PROC SKRIPTEM A NE ROUTOU: plne zneni clanku se musi ziskat tak, ze se React
// komponenty vykresli. Next v App Routeru import `react-dom/server` zakazuje
// („You're importing a component that imports react-dom/server"), takze se to
// udela pred buildem v obycejnem Nodu a vysledek se polozi do public/ jako
// staticky soubor. Zadny vypocet za behu, nejrychlejsi mozna odpoved.
//
// Spousti se samo pred `npm run build` (skript `prebuild` v package.json).

import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import * as esbuild from 'esbuild'
import fs from 'node:fs/promises'
import path from 'node:path'
import { createRequire } from 'node:module'

const KOREN = process.cwd()
const DOCASNY = path.join(KOREN, 'node_modules', '.cache', 'llms-bundle.cjs')

// Clanky sahaji pres prvky na navigaci next-intl, ktera v cistem Nodu nejde
// nacist. Nic nevykreslujeme do stranky, takze staci prazdna nahrada.
const NAHRADA_NAVIGACE = `
export function usePathname() { return '/' }
export function useRouter() { return { push() {}, replace() {}, refresh() {}, prefetch() {}, back() {}, forward() {} } }
export function useSearchParams() { return new URLSearchParams() }
export function useParams() { return {} }
export function redirect() {}
export function permanentRedirect() {}
export function notFound() {}
export function useSelectedLayoutSegment() { return null }
export function useSelectedLayoutSegments() { return [] }
export const ReadonlyURLSearchParams = URLSearchParams
`

// esbuild od pluginu ceka hotovou cestu k souboru, takze pripony a index
// v adresari si musime dohledat sami.
async function najdiSoubor(zaklad) {
  const moznosti = [zaklad, `${zaklad}.js`, `${zaklad}.jsx`,
    path.join(zaklad, 'index.js'), path.join(zaklad, 'index.jsx')]
  for (const m of moznosti) {
    try {
      const stav = await fs.stat(m)
      if (stav.isFile()) return m
    } catch { /* zkus dalsi */ }
  }
  throw new Error('nenalezeno: ' + zaklad)
}

const aliasy = {
  name: 'aliasy',
  setup(build) {
    build.onResolve({ filter: /^@\// }, async (args) => ({
      path: await najdiSoubor(path.join(KOREN, 'src', args.path.slice(2))),
    }))
    build.onResolve({ filter: /^next\/navigation$/ }, () => ({
      path: 'next-navigation-nahrada', namespace: 'nahrada',
    }))
    build.onLoad({ filter: /.*/, namespace: 'nahrada' }, () => ({
      contents: NAHRADA_NAVIGACE, loader: 'js',
    }))
  },
}

await fs.mkdir(path.dirname(DOCASNY), { recursive: true })
await esbuild.build({
  entryPoints: [path.join(KOREN, 'scripts', 'llms-vstup.js')],
  outfile: DOCASNY,
  bundle: true,
  // CJS zamerne: next/link uvnitr next-intl pouziva dynamicky require,
  // ktery by v ESM balicku skoncil vyjimkou.
  format: 'cjs',
  platform: 'node',
  jsx: 'automatic',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  plugins: [aliasy],
  logLevel: 'warning',
})

const { CLANKY, llmsIndex, llmsFull, clanekNaText, NextIntlClientProvider } =
  createRequire(import.meta.url)(DOCASNY)

const texty = new Map()
for (const clanek of CLANKY) {
  const html = renderToStaticMarkup(
    createElement(
      NextIntlClientProvider,
      { locale: 'cs', messages: {} },
      createElement(clanek.Obsah),
    ),
  )
  texty.set(clanek.slug, clanekNaText(html))
}

const index = llmsIndex()
const plny = llmsFull(texty)

await fs.writeFile(path.join(KOREN, 'public', 'llms.txt'), index)
await fs.writeFile(path.join(KOREN, 'public', 'llms-full.txt'), plny)

const kb = (s) => Math.round(Buffer.byteLength(s) / 1024)
console.log(`llms.txt: ${kb(index)} kB · llms-full.txt: ${kb(plny)} kB · ${texty.size} článků`)
