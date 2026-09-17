'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { precistSouhlas, ulozitSouhlas } from '@/lib/cookieConsent'

// Lišta se souhlasem s měřením návštěvnosti. Ukáže se jen tomu, kdo ještě
// nerozhodl; rozhodnutí si drží prohlížeč, takže se podruhé neptáme.
// Vzhled je opsaný z lišty v aplikaci, jen v barvách webu.
export default function CookieConsentBanner() {
  const t = useTranslations('cookies')
  const [skryto, setSkryto] = useState(true) // do rozhodnutí po načtení nic neblikáme
  const [zaviram, setZaviram] = useState(false)

  useEffect(() => {
    if (precistSouhlas()) return
    setSkryto(false)
  }, [])

  function rozhodnout(status) {
    ulozitSouhlas(status)
    setZaviram(true)
    setTimeout(() => setSkryto(true), 200)
  }

  if (skryto) return null

  return (
    <div
      role="dialog"
      aria-label={t('title')}
      className="fixed bottom-4 left-4 right-4 z-[1100] mx-auto max-w-3xl rounded-xl p-5 flex flex-wrap items-center gap-4"
      style={{
        background: '#FFFFFF',
        borderTop: '3px solid var(--teal-900)',
        border: '1px solid var(--border-cool)',
        boxShadow: '0 8px 32px rgba(31, 78, 95, 0.18)',
        opacity: zaviram ? 0 : 1,
        transform: zaviram ? 'translateY(20px)' : 'translateY(0)',
        transition: 'opacity 200ms ease, transform 200ms ease',
      }}
    >
      <div className="flex-1 min-w-60 text-sm leading-relaxed">
        <div className="font-semibold mb-1" style={{ color: 'var(--teal-900)' }}>
          {t('title')}
        </div>
        <div style={{ color: 'var(--olive-dark)' }}>
          {t('text')}{' '}
          <a
            href="https://www.housio.online/cookies"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
            style={{ color: 'var(--teal-900)' }}
          >
            {t('policy')}
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 shrink-0">
        <button
          onClick={() => rozhodnout('rejected')}
          className="px-4 py-2.5 rounded-lg text-sm font-medium cursor-pointer whitespace-nowrap transition hover:opacity-80"
          style={{ background: 'transparent', color: 'var(--teal-900)', border: '1.5px solid var(--teal-900)' }}
        >
          {t('reject')}
        </button>
        <button
          onClick={() => rozhodnout('accepted')}
          className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white cursor-pointer whitespace-nowrap transition hover:opacity-90"
          style={{ background: 'var(--teal-900)', boxShadow: '0 2px 8px rgba(31, 78, 95, 0.25)' }}
        >
          {t('accept')}
        </button>
      </div>
    </div>
  )
}
