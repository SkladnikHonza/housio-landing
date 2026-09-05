'use server'

import { Resend } from 'resend'

import { smiOdeslat } from './limitOdeslani'

const FROM = 'Housio partnerství <kontakt@housio.online>'
const TO = 'housio@housio.app'

const MAX_NAME = 100
const MAX_EMAIL = 200
const MAX_SHORT = 160
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendPartnerZadost(_prevState, formData) {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const agency = String(formData.get('agency') ?? '').trim()
  const honeypot = String(formData.get('website') ?? '')

  if (honeypot) return { ok: true }

  if (!name || name.length > MAX_NAME) return { ok: false, error: 'name' }
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) return { ok: false, error: 'email' }
  if (phone.length > MAX_SHORT || agency.length > MAX_SHORT) return { ok: false, error: 'generic' }

  // Strop na pocet odeslani. Az ZA validaci — kdo se preklepne v e-mailu,
  // nema si tim vycerpat pokusy.
  if (!await smiOdeslat()) return { ok: false, error: 'limit' }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[sendPartnerZadost] RESEND_API_KEY missing')
    return { ok: false, error: 'server' }
  }

  const resend = new Resend(apiKey)

  const subject = `Nová přihláška partnera — ${name}`
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #1F4E5F; margin: 0 0 16px;">🤝 Nová přihláška do partnerského programu</h2>
      <p style="margin: 0 0 8px;"><strong>Jméno:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p style="margin: 0 0 8px;"><strong>Telefon:</strong> ${escapeHtml(phone) || '—'}</p>
      <p style="margin: 0 0 16px;"><strong>Realitní kancelář:</strong> ${escapeHtml(agency) || '—'}</p>
      <div style="background: #FAF6EE; padding: 14px 16px; border-radius: 8px; color: #4A6B5E; font-size: 14px;">
        Schval makléře v administraci Housia (Partneři → Přidat makléře) a založ mu účet.
      </div>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      html,
      text: `Nova prihlaska partnera\n\nJmeno: ${name}\nEmail: ${email}\nTelefon: ${phone || '-'}\nRealitka: ${agency || '-'}`,
    })
    if (error) {
      console.error('[sendPartnerZadost] resend error:', error)
      return { ok: false, error: 'server' }
    }
    return { ok: true }
  } catch (e) {
    console.error('[sendPartnerZadost] throw:', e)
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
