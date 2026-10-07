'use client'

import { useCallback, useState, useSyncExternalStore } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { zapamatujJazyk } from '@/lib/cookieConsent'
import { NABIDKA, nabidnoutJazyk } from '@/lib/nabidkaJazyka'
import { X } from 'lucide-react'

const KLIC_ODMITNUTI = 'housio-nabidka-jazyka-odmitnuta'

// Nenápadná nabídka jiného jazyka.
//
// PROČ TOHLE A NE PŘESMĚROVÁNÍ: dřív proxy poslala cizince rovnou na jeho
// jazykovou verzi. Google u přesměrované adresy indexuje cíl, ne původní
// adresu, takže se česká úvodní stránka do výsledků nedostávala — a Čech
// s anglickým telefonem se musel ručně vracet. Pruh obojí řeší: nikdo se
// nikam neposílá a cizinec má jeden klik.
//
// PROČ V PROHLÍŽEČI A NE NA SERVERU: kdyby o tom rozhodoval server, musela
// by se každá stránka vykreslovat zvlášť pro každého návštěvníka a přišli
// bychom o statické generování. Takhle je stránka pro všechny stejná a pruh
// se jen dokreslí.
export default function NabidkaJazyka() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [skryto, setSkryto] = useState(false)

  // PROC useSyncExternalStore A NE useEffect: hodnota je jen v prohlizeci
  // (navigator.languages), na serveru neexistuje. Tohle je pro ten pripad
  // urcene API — vraci se serverovy snimek `null`, takze vykresleny HTML
  // a prvni vykresleni v prohlizeci sedi a hydratace se nerozejde.
  // useEffect + setState by delal totez, ale React 19 ho spravne hlasi
  // jako kaskadovy render.
  const zjisti = useCallback(() => {
    if (typeof document === 'undefined') return null
    // Kdo si jazyk uz zvolil nebo nabidku odmitl, ma pokoj.
    if (document.cookie.includes('NEXT_LOCALE=')) return null
    try {
      if (localStorage.getItem(KLIC_ODMITNUTI)) return null
    } catch {
      // Zakazane uloziste — pruh se proste ukaze znovu. Lepsi nez spadnout.
    }
    return nabidnoutJazyk(navigator.languages || [navigator.language], locale, routing.locales)
  }, [locale])

  const navrh = useSyncExternalStore(() => () => {}, zjisti, () => null)
  const jazyk = skryto ? null : navrh

  if (!jazyk) return null
  const text = NABIDKA[jazyk]

  function prepnout() {
    zapamatujJazyk(jazyk)
    setSkryto(true)
    router.replace(pathname, { locale: jazyk })
  }

  function odmitnout() {
    try {
      localStorage.setItem(KLIC_ODMITNUTI, '1')
    } catch {
      // Bez úložiště se pruh příště ukáže znovu; zavřít ho stejně jde.
    }
    setSkryto(true)
  }

  return (
    <div
      lang={jazyk}
      className="px-6 py-2.5"
      style={{ background: 'var(--teal-900)', color: '#E9F3F0' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-x-4 gap-y-2 flex-wrap text-sm">
        <span>{text.veta}</span>
        <button
          onClick={prepnout}
          className="font-semibold underline underline-offset-2 hover:opacity-80 transition cursor-pointer"
        >
          {text.tlacitko} →
        </button>
        <button
          onClick={odmitnout}
          aria-label={text.zavrit}
          title={text.zavrit}
          className="p-1 rounded hover:bg-white/10 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
