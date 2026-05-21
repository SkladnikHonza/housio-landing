'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname, Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { ArrowRight, Check, Home, Menu, X, Globe } from 'lucide-react'

const localeNames = {
  cs: { flag: '🇨🇿', label: 'Čeština' },
  en: { flag: '🇬🇧', label: 'English' },
  de: { flag: '🇩🇪', label: 'Deutsch' },
  it: { flag: '🇮🇹', label: 'Italiano' },
  es: { flag: '🇪🇸', label: 'Español' },
  uk: { flag: '🇺🇦', label: 'Українська' },
  ru: { flag: '🇷🇺', label: 'Русский' },
  fr: { flag: '🇫🇷', label: 'Français' },
}

function LanguageSwitcher({ mobile = false }) {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [open, setOpen] = useState(false)

  const switchLocale = (newLocale) => {
    // Cookie zaznamen ručního výběru → middleware IP detekci přeskočí
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; samesite=lax`
    router.replace(pathname, { locale: newLocale })
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-white/50 transition cursor-pointer"
        style={{ color: 'var(--teal-900)' }}
        aria-label="Change language"
      >
        <span className="text-base leading-none">{localeNames[locale].flag}</span>
        <span className="text-xs font-medium uppercase tracking-wider">{locale}</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            className={`absolute ${mobile ? 'bottom-full mb-2 left-0' : 'top-full mt-2 right-0'} z-50 bg-white rounded-xl py-2 min-w-[180px]`}
            style={{ boxShadow: '0 10px 30px rgba(31, 78, 95, 0.15)', border: '1px solid rgba(31, 78, 95, 0.08)' }}
          >
            {routing.locales.map((lng) => (
              <button
                key={lng}
                onClick={() => switchLocale(lng)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition text-left ${locale === lng ? 'font-semibold' : ''}`}
                style={{ color: 'var(--teal-900)' }}
              >
                <span className="text-base">{localeNames[lng].flag}</span>
                <span className="text-sm">{localeNames[lng].label}</span>
                {locale === lng && <Check className="w-4 h-4 ml-auto" style={{ color: 'var(--orange)' }} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Nav() {
  const tNav = useTranslations('nav')
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  const anchorClick = (id) => (e) => {
    if (!isHome) return
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sectionLinks = [
    { id: 'funkce', label: tNav('features') },
    { id: 'ceny', label: tNav('pricing') },
    { id: 'faq', label: tNav('faq') },
  ]

  return (
    <header
      className="sticky top-0 z-40 nav-blur"
      style={{
        background: 'rgba(250, 246, 238, 0.85)',
        borderBottom: '1px solid rgba(31, 78, 95, 0.08)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--teal-900)' }}>
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Housio
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {sectionLinks.map((l) =>
            isHome ? (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={anchorClick(l.id)}
                className="nav-link text-sm font-medium cursor-pointer"
                style={{ color: 'var(--teal-900)' }}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.id}
                href={`/#${l.id}`}
                className="nav-link text-sm font-medium cursor-pointer"
                style={{ color: 'var(--teal-900)' }}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            href="/kontakt"
            className="nav-link text-sm font-medium cursor-pointer"
            style={{ color: 'var(--teal-900)' }}
          >
            {tNav('contact')}
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="https://www.housio.online"
            className="text-sm font-medium hover:opacity-70 transition cursor-pointer"
            style={{ color: 'var(--teal-900)' }}
          >
            {tNav('login')}
          </a>
          <a
            href="https://www.housio.online"
            className="nav-cta inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg text-white cursor-pointer"
            style={{ background: 'var(--teal-900)' }}
          >
            {tNav('tryFree')}
            <ArrowRight className="nav-cta-arrow w-3.5 h-3.5" />
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/50 transition"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" style={{ color: 'var(--teal-900)' }} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden flex flex-col p-6"
          style={{ background: 'var(--bg-warm)' }}
        >
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--teal-900)' }}>
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
                Housio
              </span>
            </div>
            <button
              className="p-2 rounded-lg hover:bg-white/50 transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" style={{ color: 'var(--teal-900)' }} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 mb-8">
            {sectionLinks.map((l) =>
              isHome ? (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={anchorClick(l.id)}
                  className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer"
                  style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.id}
                  href={`/#${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer"
                  style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
            >
              {tNav('contact')}
            </Link>
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <LanguageSwitcher mobile />
            <a
              href="https://www.housio.online"
              className="text-base font-medium px-6 py-4 rounded-xl text-center hover:bg-white/60 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', border: '1px solid rgba(31, 78, 95, 0.2)' }}
            >
              {tNav('login')}
            </a>
            <a
              href="https://www.housio.online"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold px-6 py-4 rounded-xl text-white cursor-pointer"
              style={{ background: 'var(--teal-900)' }}
            >
              {tNav('tryFree')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      <style jsx global>{`
        .nav-blur {
          -webkit-backdrop-filter: saturate(180%) blur(16px);
          backdrop-filter: saturate(180%) blur(16px);
        }
        .nav-link {
          position: relative;
          transition: opacity 0.15s;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          left: 50%;
          right: 50%;
          bottom: -6px;
          height: 2px;
          background: var(--teal-900);
          transition: left 0.25s ease, right 0.25s ease;
          border-radius: 2px;
        }
        .nav-link:hover::before {
          left: 0;
          right: 0;
        }
        .nav-cta {
          transition: transform 0.15s ease, box-shadow 0.2s ease;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(31, 78, 95, 0.25);
        }
        .nav-cta-arrow {
          transition: transform 0.2s ease;
        }
        .nav-cta:hover .nav-cta-arrow {
          transform: translateX(3px);
        }
      `}</style>
    </header>
  )
}
