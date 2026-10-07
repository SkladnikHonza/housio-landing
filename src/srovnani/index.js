import { SROVNANI } from './srovnani'

// Rozcestnik srovnavacich stranek.
//
// PROC JEN CESKY: stejne jako pruvodce, kalkulacky, encyklopedie a funkce.
// Ceny v korunach, ceske zvyklosti u realitnich kancelari, § 9 zakona
// o danich z prijmu. V ostatnich jazycich vraci 404.

export { SROVNANI }

export const SLUGY = SROVNANI.map((s) => s.slug)

export function srovnaniPodleSlug(slug) {
  return SROVNANI.find((s) => s.slug === slug) || null
}

// Kontrola pri startu. Rozbita vazba radsi shodi build, nez aby se tise
// projevila az jako prazdny odkaz na zive strance.
if (new Set(SLUGY).size !== SLUGY.length) {
  throw new Error('Dvě srovnání mají stejný slug')
}
for (const s of SROVNANI) {
  for (const odkaz of s.souvisi) {
    if (odkaz === s.slug) throw new Error(`Srovnání odkazuje samo na sebe: ${s.slug}`)
    if (!SLUGY.includes(odkaz)) throw new Error(`Srovnání ${s.slug} odkazuje na neexistující ${odkaz}`)
  }
  const sirka = s.tabulka.sloupce.length
  for (const r of s.tabulka.radky) {
    if (r.hodnoty.length !== sirka) {
      throw new Error(`${s.slug}: řádek „${r.kriterium}" má jiný počet sloupců`)
    }
  }
}
