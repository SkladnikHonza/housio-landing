'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { souhlasDan, UDALOST_SOUHLASU } from '@/lib/cookieConsent'

// Krok 18a: anonymni visit tracking pro housio.app -> Supabase Edge Function.
//
// SUPABASE_URL + SUPABASE_ANON_JWT jsou public-grade konstanty. Anon JWT je
// urcen k expozici v klientskem kodu — Supabase gateway si overuje signature,
// my pak validujeme domenu/path uvnitr Edge Function. (Tentyz JWT je v
// housio repo: handle_new_user_welcome trigger + src/lib/supabase.js.)
const SUPABASE_URL = 'https://gdhgzefzpueoihjbwtmg.supabase.co'
const SUPABASE_ANON_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkaGd6ZWZ6cHVlb2loamJ3dG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MTE4MDMsImV4cCI6MjA5NDA4NzgwM30.WLI8Cj4ODXoWcS-EQDGVqv3UYXD8B5tetewvK0_yeFM'
const TRACK_URL = `${SUPABASE_URL}/functions/v1/track-visit`
const DOMENA = 'housio.app'

// Module-level state (per page-load, ne per-user).
let initialTime = null
let routeChangeTracked = false

// Souhlas.
//   Zasady ochrany osobnich udaju slibuji, ze vlastni mereni navstevnosti bezi
//   "bez cookies a az po vasem souhlasu". Driv se tu merilo i bez rozhodnuti
//   (chybejici klic = merime), protoze housio.app zadnou listu nemel. Ted uz
//   listu ma (CookieConsentBanner) a merime vylucne po vyslovnem souhlasu.
function consentAllows() {
  try {
    if (typeof window === 'undefined') return false
    return souhlasDan()
  } catch {
    return false
  }
}

function parseUtm() {
  try {
    const p = new URLSearchParams(window.location.search)
    const out = {}
    const s = p.get('utm_source'); if (s) out.utm_source = s
    const m = p.get('utm_medium'); if (m) out.utm_medium = m
    const c = p.get('utm_campaign'); if (c) out.utm_campaign = c
    return out
  } catch {
    return {}
  }
}

async function trackVisit() {
  if (!consentAllows()) return
  try {
    await fetch(TRACK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPABASE_ANON_JWT}`,
      },
      body: JSON.stringify({
        domena: DOMENA,
        path: window.location.pathname,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        ...parseUtm(),
      }),
      keepalive: true,
    })
  } catch {
    // fail-silent: tracking nikdy neblokuje UX
  }
}

// Rate-limit (per page-load, modulo-level):
//   1) Initial mount  -> track ihned
//   2) Route change   -> track jeste 1x, ale jen pokud uplynulo aspon 30s
//                        od initial, a jen jednou (treti+ ignorujeme).
export default function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!consentAllows()) return
    if (initialTime === null) {
      initialTime = Date.now()
      trackVisit()
    } else if (!routeChangeTracked && Date.now() - initialTime >= 30_000) {
      routeChangeTracked = true
      trackVisit()
    }
  }, [pathname])

  // Kdyz clovek souhlas teprve klikne, dopocitame prvni navstevu bez obnoveni stranky.
  useEffect(() => {
    function poSouhlasu() {
      if (initialTime === null && consentAllows()) {
        initialTime = Date.now()
        trackVisit()
      }
    }
    window.addEventListener(UDALOST_SOUHLASU, poSouhlasu)
    return () => window.removeEventListener(UDALOST_SOUHLASU, poSouhlasu)
  }, [])

  return null
}
