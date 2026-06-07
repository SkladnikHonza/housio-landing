'use server'

import { Resend } from 'resend'

const FROM = 'Housio kontakt <kontakt@housio.online>'
const TO = 'housio@housio.app'

const MAX_NAME = 100
const MAX_EMAIL = 200
const MAX_MESSAGE = 5000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendContact(_prevState, formData) {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const honeypot = String(formData.get('website') ?? '')

  if (honeypot) return { ok: true }

  if (!name || name.length > MAX_NAME) return { ok: false, error: 'name' }
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) return { ok: false, error: 'email' }
  if (!message || message.length > MAX_MESSAGE) return { ok: false, error: 'message' }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[sendContact] RESEND_API_KEY missing')
    return { ok: false, error: 'server' }
  }

  const resend = new Resend(apiKey)

  const subject = `Housio.app kontakt — ${name}`
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
      to: TO,
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
