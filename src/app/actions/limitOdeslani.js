'use server'

import { headers } from 'next/headers'

// Omezeni poctu odeslani formularu.
//
// Skryta past (honeypot) v obou formularich zastavi hloupe roboty — ty, co
// vyplni kazde pole, ktere najdou. Nezastavi ale robota, ktery poslal formular
// jednou rucne, kouknul se, co projde, a pak to pousti ve smycce. Proti tomu
// pomaha jen strop na pocet odeslani.
//
// PROC NE CAPTCHA: reCAPTCHA od Googlu je sledovaci nastroj z USA — musel by
// se dopsat mezi zpracovatele do zasad a resit souhlas s cookies. Za formular,
// ktery ma dnes navstevnost v radu jednotek, se to nevyplati. Az bude spam
// opravdu chodit, prijde na radu Cloudflare Turnstile (EU, bez cookies).
//
// PAMET JE JEN V RAMCI JEDNE INSTANCE. Na Vercelu bezi vice instanci vedle
// sebe, takze utocnik rozlozeny pres ne projde vic nez limit rika. I tak to
// utne bezny pripad — jeden skript busici z jedne adresy. Kdyby to nestacilo,
// chce to sdilene uloziste (Upstash / Supabase), ne vetsi cisla tady.

const OKNO_MS = 10 * 60 * 1000   // 10 minut
const NA_ADRESU = 3              // clovek posle jednu zpravu, tri je uz velkoryse
const CELKEM = 40                // zachytka pro utok z mnoha adres

const podleAdresy = new Map()
let celkem = []

function ocisti(seznam, ted) {
  return seznam.filter(t => ted - t < OKNO_MS)
}

// Vraci true, kdyz se ma odeslani POVOLIT.
export async function smiOdeslat() {
  const ted = Date.now()

  const h = await headers()
  // Na Vercelu je prvni adresa v x-forwarded-for ta navstevnikova.
  const adresa = (h.get('x-forwarded-for') || '').split(',')[0].trim()
    || h.get('x-real-ip')
    || 'neznama'

  celkem = ocisti(celkem, ted)
  if (celkem.length >= CELKEM) return false

  const moje = ocisti(podleAdresy.get(adresa) || [], ted)
  if (moje.length >= NA_ADRESU) {
    podleAdresy.set(adresa, moje)
    return false
  }

  moje.push(ted)
  celkem.push(ted)
  podleAdresy.set(adresa, moje)

  // Aby mapa nerostla donekonecna, obcas vyhodime, co uz vyprselo.
  if (podleAdresy.size > 500) {
    for (const [k, v] of podleAdresy) {
      const zbyva = ocisti(v, ted)
      if (zbyva.length === 0) podleAdresy.delete(k)
      else podleAdresy.set(k, zbyva)
    }
  }

  return true
}
