// Předání zdroje návštěvy do aplikace.
//
// PROČ: z kampaně přijde člověk na housio.app/?utm_source=email-rijen, klikne
// na „Vyzkoušet zdarma" a odejde na housio.online — a tam už nikdo neví, odkud
// přišel. Ztratí se tím i partnerský kód ?ref=, podle kterého se počítá provize.
//
// Tohle nic neukládá do prohlížeče ani nikam neposílá: jen přenese parametry,
// které už jsou v adrese, na další adresu. Nepotřebuje tedy souhlas s měřením
// a funguje i tomu, kdo lištu odmítl.

const PARAMETRY = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref']

// Vrátí cílovou adresu doplněnou o parametry zdroje. Když cíl takový parametr
// už má (třeba ?plan=pro&ref=XY), nepřepisuje se — vyhrává to, co je v odkazu.
export function pridejZdroj(cilovaAdresa, dotazZeStranky) {
  try {
    const cil = new URL(cilovaAdresa)
    const zdroj = new URLSearchParams(dotazZeStranky || '')
    for (const klic of PARAMETRY) {
      const hodnota = zdroj.get(klic)
      if (hodnota && !cil.searchParams.has(klic)) cil.searchParams.set(klic, hodnota)
    }
    return cil.toString()
  } catch {
    // Relativní odkaz nebo nesmyslná adresa — raději nechat být.
    return cilovaAdresa
  }
}

// Má smysl vůbec něco dělat?
export function maZdroj(dotazZeStranky) {
  try {
    const zdroj = new URLSearchParams(dotazZeStranky || '')
    return PARAMETRY.some((k) => zdroj.get(k))
  } catch {
    return false
  }
}
