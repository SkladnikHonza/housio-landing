'use server'

import { Resend } from 'resend'

import { smiOdeslat } from './limitOdeslani'

const FROM = 'Housio <kontakt@housio.online>'
const TO = 'housio@housio.app'

// Kopie na druhou adresu — stejne jako u kontaktniho formulare, viz sendContact.js
// (adresa se zadava v prostredi Vercelu jako KOPIE_POPTAVEK).
function adresati() {
  const kopie = (process.env.KOPIE_POPTAVEK || '').trim()
  return kopie ? [TO, kopie] : TO
}

const MAX_NAME = 100
const MAX_EMAIL = 200
const MAX_DUVOD = 2000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendSmazaniUctu(_prevState, formData) {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const duvod = String(formData.get('duvod') ?? '').trim()
  const honeypot = String(formData.get('website') ?? '')
  const zobrazeno = Number(formData.get('ts') ?? 0)

  if (honeypot) return { ok: true }
  // Casova past — viz sendContact.js
  if (zobrazeno > 0 && Date.now() - zobrazeno < 3000) return { ok: true }

  if (!name || name.length > MAX_NAME) return { ok: false, error: 'name' }
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) return { ok: false, error: 'email' }
  if (duvod.length > MAX_DUVOD) return { ok: false, error: 'generic' }

  if (!await smiOdeslat()) return { ok: false, error: 'limit' }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[sendSmazaniUctu] RESEND_API_KEY missing')
    return { ok: false, error: 'server' }
  }

  const resend = new Resend(apiKey)

  const poznamka = duvod
    ? `<p style="margin: 0 0 8px;"><strong>Poznámka:</strong></p>
       <p style="white-space: pre-wrap; margin: 0 0 16px;">${escapeHtml(duvod)}</p>`
    : ''

  const html = `
    <h2 style="margin: 0 0 16px; color: #1F4E5F;">Žádost o smazání účtu</h2>
    <p style="margin: 0 0 8px;"><strong>Jméno:</strong> ${escapeHtml(name)}</p>
    <p style="margin: 0 0 16px;"><strong>E-mail účtu:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    ${poznamka}
    <p style="margin: 0; color: #6B7280; font-size: 13px;">
      Odesláno z housio.app/smazani-uctu. Podle GDPR je třeba vyřídit do 30 dnů.
    </p>
  `

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: adresati(),
      replyTo: email,
      subject: `Housio — žádost o smazání účtu — ${name}`,
      html,
    })

    if (error) {
      console.error('[sendSmazaniUctu] resend error:', error)
      return { ok: false, error: 'server' }
    }
    return { ok: true }
  } catch (e) {
    console.error('[sendSmazaniUctu] exception:', e)
    return { ok: false, error: 'server' }
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
