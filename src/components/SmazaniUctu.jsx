'use client'

import { useActionState, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { CheckCircle2, AlertCircle, Smartphone, Trash2, Clock, FileText, CreditCard } from 'lucide-react'
import { sendSmazaniUctu } from '@/app/actions/sendSmazaniUctu'

// Verejna stranka pro zadost o smazani uctu. Google Play ji vyzaduje ve formulari
// „Zabezpeceni udaju" — musi byt dostupna bez instalace aplikace a bez prihlaseni.
export default function SmazaniUctu() {
  const t = useTranslations('smazaniUctu')
  const [state, formAction, isPending] = useActionState(sendSmazaniUctu, null)
  // Casova past proti robotum — viz Kontakt.jsx a sendSmazaniUctu.js
  const [zobrazeno, setZobrazeno] = useState(0)
  useEffect(() => { setZobrazeno(Date.now()) }, [])

  const errorText = (code) => {
    switch (code) {
      case 'name': return t('errName')
      case 'email': return t('errEmail')
      case 'limit': return t('errLimit')
      default: return t('errGeneric')
    }
  }

  const karty = [
    { Ikona: Smartphone, titul: t('vAppTitle'), text: t('vAppBody') },
    { Ikona: Trash2, titul: t('coSeSmazeTitle'), text: t('coSeSmazeBody') },
    { Ikona: Clock, titul: t('lhutaTitle'), text: t('lhutaBody') },
    { Ikona: FileText, titul: t('zustavaTitle'), text: t('zustavaBody') },
    { Ikona: CreditCard, titul: t('predplatneTitle'), text: t('predplatneBody') },
  ]

  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition disabled:opacity-60'
  const inputStyle = { background: 'var(--bg-warm)', color: 'var(--teal-900)', border: '1px solid transparent' }
  const focus = {
    onFocus: (e) => { e.target.style.borderColor = 'var(--orange)' },
    onBlur: (e) => { e.target.style.borderColor = 'transparent' },
  }

  return (
    <section className="px-6 pt-20 pb-16" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-3xl mx-auto">

        <h1
          className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4"
          style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
        >
          {t('title')}
        </h1>
        <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--olive-dark)' }}>
          {t('lead')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {karty.map(({ Ikona, titul, text }) => (
            <div
              key={titul}
              className="bg-white rounded-2xl p-6 flex gap-4"
              style={{ border: '1px solid var(--border-cool)', boxShadow: '0 1px 3px rgba(31,78,95,0.06)' }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(31, 78, 95, 0.08)' }}
              >
                <Ikona className="w-5 h-5" style={{ color: 'var(--teal-900)' }} />
              </div>
              <div>
                <p className="font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{titul}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* === FORMULÁŘ === */}
        <div id="zadost" className="bg-white rounded-2xl p-8 md:p-10" style={{ boxShadow: '0 1px 3px rgba(31, 78, 95, 0.06)' }}>
          <h2
            className="text-2xl md:text-3xl font-medium text-center mb-2 tracking-tight"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {t('formTitle')}
          </h2>
          <p className="text-center text-sm mb-8" style={{ color: 'var(--olive-dark)' }}>
            {t('formSubtitle')}
          </p>

          {state?.ok ? (
            <div className="flex flex-col items-center text-center py-10" role="status" aria-live="polite">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(45, 139, 95, 0.12)' }}>
                <CheckCircle2 className="w-7 h-7" style={{ color: 'var(--teal-500, #2D8B5F)' }} />
              </div>
              <p className="text-lg font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{t('formSuccessTitle')}</p>
              <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>{t('formSuccessBody')}</p>
            </div>
          ) : (
            <form className="space-y-4" action={formAction}>
              <input type="hidden" name="ts" value={zobrazeno} />
              {/* honeypot — bots fill it, humans don't see it */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="smaz-name" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--olive-dark)' }}>
                    {t('labelName')}
                  </label>
                  <input
                    id="smaz-name" type="text" name="name" required maxLength={100}
                    placeholder={t('placeholderName')} disabled={isPending}
                    className={inputClass} style={inputStyle} {...focus}
                  />
                </div>
                <div>
                  <label htmlFor="smaz-email" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--olive-dark)' }}>
                    {t('labelEmail')}
                  </label>
                  <input
                    id="smaz-email" type="email" name="email" required maxLength={200}
                    placeholder={t('placeholderEmail')} disabled={isPending}
                    className={inputClass} style={inputStyle} {...focus}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="smaz-duvod" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--olive-dark)' }}>
                  {t('labelDuvod')}
                </label>
                <textarea
                  id="smaz-duvod" name="duvod" rows="4" maxLength={2000}
                  placeholder={t('placeholderDuvod')} disabled={isPending}
                  className={inputClass + ' resize-none'} style={inputStyle} {...focus}
                ></textarea>
              </div>

              {state?.error && (
                <div
                  className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(216, 95, 95, 0.10)', color: 'var(--orange-dark, #B6612F)' }}
                  role="alert"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorText(state.error)}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full inline-flex items-center justify-center gap-2 text-base font-medium text-white py-4 rounded-xl hover:opacity-90 transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: 'var(--teal-900)' }}
              >
                {isPending ? t('formSending') : t('submitButton')}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
