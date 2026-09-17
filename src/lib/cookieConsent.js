// Souhlas s měřením návštěvnosti na housio.app.
//
// Zásady ochrany osobních údajů ve všech jazycích slibují, že vlastní měření
// návštěvnosti běží "bez cookies a až po vašem souhlasu". Na housio.app se ale
// dosud měřilo hned — souhlas nebylo kde dát. Tohle je ta chybějící část.
//
// Stejný klíč i tvar dat jako v aplikaci (housio.online), ať se lidem chová web
// i aplikace stejně. Úložiště prohlížeče je ale oddělené podle domény, takže
// rozhodnutí z housio.online se sem nepřenese a naopak.
//   klíč 'housio_cookie_consent' = { status: 'accepted' | 'rejected', timestamp }

const KLIC = 'housio_cookie_consent'

// Událost, kterou lišta oznámí rozhodnutí — sledování návštěv pak může první
// návštěvu dopočítat bez nutnosti obnovovat stránku.
export const UDALOST_SOUHLASU = 'housio-consent'

// Vrátí uložené rozhodnutí, nebo null když člověk ještě nerozhodl.
export function precistSouhlas() {
  try {
    const raw = window.localStorage.getItem(KLIC)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function souhlasDan() {
  return precistSouhlas()?.status === 'accepted'
}

// status = 'accepted' | 'rejected'
export function ulozitSouhlas(status) {
  try {
    window.localStorage.setItem(KLIC, JSON.stringify({ status, timestamp: new Date().toISOString() }))
  } catch {
    // Anonymní okno nebo zakázané úložiště — lišta se ukáže při každé návštěvě,
    // což je přijatelnější než měřit bez souhlasu.
  }
  try {
    window.dispatchEvent(new CustomEvent(UDALOST_SOUHLASU, { detail: { status } }))
  } catch {
    // Starý prohlížeč bez CustomEvent — první návštěva se prostě nezapočítá.
  }
}
