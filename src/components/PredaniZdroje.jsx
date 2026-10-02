'use client'

import { useEffect } from 'react'
import { pridejZdroj, maZdroj } from '@/lib/zdrojNavstevy'

// Doplní zdroj kampaně do odkazů vedoucích do aplikace, a to až ve chvíli
// kliknutí. Řeší se to odchytem na dokumentu, ne úpravou jednotlivých odkazů:
// funguje to i pro odkazy, které se objeví později (mobilní menu, ceník),
// a v HTML zůstane čistá adresa, takže vyhledávače vidí jednu cílovou stránku.
export default function PredaniZdroje() {
  useEffect(() => {
    if (!maZdroj(window.location.search)) return

    function naKlik(e) {
      const odkaz = e.target?.closest?.('a[href*="housio.online"]')
      if (!odkaz) return
      odkaz.href = pridejZdroj(odkaz.href, window.location.search)
    }

    // Zachytávací fáze — musíme stihnout upravit adresu dřív, než prohlížeč
    // začne navigovat. auxclick je pro otevření prostředním tlačítkem.
    document.addEventListener('click', naKlik, true)
    document.addEventListener('auxclick', naKlik, true)
    return () => {
      document.removeEventListener('click', naKlik, true)
      document.removeEventListener('auxclick', naKlik, true)
    }
  }, [])

  return null
}
