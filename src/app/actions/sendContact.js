'use server'

import { Resend } from 'resend'

import { smiOdeslat } from './limitOdeslani'

const FROM = 'Housio kontakt <kontakt@housio.online>'
const TO = 'housio@housio.app'

// Kopie poptávek na druhou adresu. Poptávky chodily jen na housio@housio.app
// a ta se 15. 9. odrazila — zpráva od zákaznice se ztratila a nikde to nebylo
// vidět, protože odraz přijde až po odeslání a kód se o něm nedozví.
// Adresa se zadává v prostředí (Vercel → Settings → Environment Variables →
// KOPIE_POPTAVEK), aby osobní adresa nebyla natvrdo v repozitáři. Když
// proměnná chybí, posílá se jako dřív jen na jednu adresu.
function adresati() {
  const kopie = (process.env.KOPIE_POPTAVEK || '').trim()
  return kopie ? [TO, kopie] : TO
}

const MAX_NAME = 100
const MAX_EMAIL = 200
const MAX_MESSAGE = 5000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendContact(_prevState, formData) {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const honeypot = String(formData.get('website') ?? '')
  const zobrazeno = Number(formData.get('ts') ?? 0)

  if (honeypot) return { ok: true }

  // Casova past: kdyz prohlizec formular zobrazil a odeslani prislo do 3 sekund,
  // je to robot — clovek jmeno, e-mail a zpravu za tri sekundy nenapise. Zahazujeme
  // ticho (stejne jako honeypot), aby robot nepoznal, ze ho prokoukli. Nulu
  // neodmitame: to by mohl byt i clovek bez JavaScriptu, ten se jen oznací nize.
  if (zobrazeno > 0 && Date.now() - zobrazeno < 3000) return { ok: true }

  if (!name || name.length > MAX_NAME) return { ok: false, error: 'name' }
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) return { ok: false, error: 'email' }
  if (!message || message.length > MAX_MESSAGE) return { ok: false, error: 'message' }

  // Strop na pocet odeslani. Az ZA validaci — kdo se preklepne v e-mailu,
  // nema si tim vycerpat pokusy.
  if (!await smiOdeslat()) return { ok: false, error: 'limit' }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[sendContact] RESEND_API_KEY missing')
    return { ok: false, error: 'server' }
  }

  const resend = new Resend(apiKey)

  // Znackovani, ne mazani: zprava se posle vzdycky, jen dostane do predmetu
  // varovani, aby se dala v posté odfiltrovat. Duvody: tri a vic odkazu v textu
  // (bezna poptavka odkazy nema), nebo cas 0 = formular odeslal skript.
  const odkazu = (message.match(/https?:\/\//gi) || []).length
  const podezrele = odkazu >= 3 || zobrazeno === 0
  const subject = `${podezrele ? '[pravděpodobně spam] ' : ''}Housio.app kontakt — ${name}`
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #1F4E5F; margin: 0 0 16px;">Nová zpráva z housio.app</h2>
      <p style="margin: 0 0 8px;"><strong>Jméno:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 16px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <div style="background: #FAF6EE; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: adresati(),
      replyTo: email,
      subject,
      html,
      text: `Jmeno: ${name}\nEmail: ${email}\n\n${message}`,
    })
    if (error) {
      console.error('[sendContact] resend error:', error)
      return { ok: false, error: 'server' }
    }
    return { ok: true }
  } catch (e) {
    console.error('[sendContact] throw:', e)
    return { ok: false, error: 'server' }
  }
}

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
