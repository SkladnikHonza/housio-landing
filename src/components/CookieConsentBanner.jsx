'use client'

import { useState, useSyncExternalStore } from 'react'
import { useTranslations } from 'next-intl'
import { precistSouhlas, ulozitSouhlas, UDALOST_SOUHLASU } from '@/lib/cookieConsent'

// Lišta se souhlasem s měřením návštěvnosti. Ukáže se jen tomu, kdo ještě
// nerozhodl; rozhodnutí si drží prohlížeč, takže se podruhé neptáme.
// Vzhled je opsaný z lišty v aplikaci, jen v barvách webu.

// Rozhodnutí žije v úložišti prohlížeče, tedy mimo React. Čteme ho proto
// přes useSyncExternalStore místo efektu, který po načtení přepíná stav —
// ten React 19 označuje za zbytečné překreslení a je to i rychlejší.
function prihlasitOdber(zmena) {
  window.addEventListener(UDALOST_SOUHLASU, zmena)
  window.addEventListener('storage', zmena)
  return () => {
    window.removeEventListener(UDALOST_SOUHLASU, zmena)
    window.removeEventListener('storage', zmena)
  }
}

// Vrací řetězec, ne objekt — porovnává se identitou a nová instance objektu
// by vedla k nekonečnému překreslování.
function stavVProhlizeci() {
  return precistSouhlas() ? 'rozhodnuto' : 'nerozhodnuto'
}

// Na serveru nic nevíme, takže lištu nevykreslíme a nic po načtení nebliká.
function stavNaServeru() {
  return 'rozhodnuto'
}

export default function CookieConsentBanner() {
  const t = useTranslations('cookies')
  const rozhodnuto = useSyncExternalStore(prihlasitOdber, stavVProhlizeci, stavNaServeru) === 'rozhodnuto'
  const [zaviram, setZaviram] = useState(false)

  function rozhodnout(status) {
    setZaviram(true)      // spustí odjezd lišty dolů
    ulozitSouhlas(status) // uloží rozhodnutí hned, ať se neztratí při odchodu ze stránky
    setTimeout(() => setZaviram(false), 220) // po animaci se lišta odmountuje
  }

  if (rozhodnuto && !zaviram) return null

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
