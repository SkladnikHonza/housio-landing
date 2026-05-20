'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname, Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { ArrowRight, Play, Check, Home, Star, Menu, X, Lock, Globe } from 'lucide-react'

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
    router.replace(pathname, { locale: newLocale })
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/40 transition cursor-pointer"
        style={{ color: 'var(--teal-900)' }}
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{localeNames[locale].flag}</span>
      </button>
      
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div 
            className={`absolute ${mobile ? 'bottom-full mb-2 left-0' : 'top-full mt-2 right-0'} z-50 bg-white rounded-xl py-2 min-w-[160px]`}
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

export default function Hero() {
  const t = useTranslations('hero')
  const tNav = useTranslations('nav')
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative px-6 py-8 md:py-12 lg:py-20 overflow-hidden" style={{ background: 'var(--bg-warm)' }}>
      
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--orange) 0%, transparent 70%)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--teal-500) 0%, transparent 70%)' }} />
      
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between mb-12 md:mb-16 lg:mb-24">
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--teal-900)' }}>
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Housio
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#funkce" onClick={scrollTo('funkce')} className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>{tNav('features')}</a>
          <a href="#ceny" onClick={scrollTo('ceny')} className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>{tNav('pricing')}</a>
          <a href="#faq" onClick={scrollTo('faq')} className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>{tNav('faq')}</a>
          <a href="/kontakt" className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>{tNav('contact')}</a>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <a href="https://www.housio.online" className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/60 transition cursor-pointer" style={{ color: 'var(--teal-900)' }}>
            {tNav('login')}
          </a>
          <a href="https://www.housio.online" className="text-sm font-medium px-4 py-2 rounded-lg text-white hover:opacity-90 transition cursor-pointer" style={{ background: 'var(--orange)' }}>
            {tNav('tryFree')}
          </a>
        </div>

        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/40 transition"
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
              className="p-2 rounded-lg hover:bg-white/40 transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" style={{ color: 'var(--teal-900)' }} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 mb-8">
            <a href="#funkce" onClick={scrollTo('funkce')} className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              {tNav('features')}
            </a>
            <a href="#ceny" onClick={scrollTo('ceny')} className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              {tNav('pricing')}
            </a>
            <a href="#faq" onClick={scrollTo('faq')} className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              {tNav('faq')}
            </a>
            <a href="/kontakt" onClick={() => setMenuOpen(false)} className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              {tNav('contact')}
            </a>
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <LanguageSwitcher mobile />
            <a href="https://www.housio.online" className="text-base font-medium px-6 py-4 rounded-xl text-center hover:bg-white/60 transition cursor-pointer" style={{ color: 'var(--teal-900)', border: '1px solid rgba(31, 78, 95, 0.2)' }}>
              {tNav('login')}
            </a>
            <a href="https://www.housio.online" className="text-base font-medium px-6 py-4 rounded-xl text-white text-center hover:opacity-90 transition cursor-pointer" style={{ background: 'var(--orange)' }}>
              {tNav('tryFree')}
            </a>
          </div>
        </div>
      )}

      <div id="top" className="relative max-w-5xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 md:mb-8" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--orange)' }}></span>
          <span className="text-xs font-medium" style={{ color: 'var(--orange-dark)' }}>{t('badge')}</span>
        </div>

        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] tracking-tight mb-5 md:mb-6"
          style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.035em' }}
        >
          {t('title1')}<br />
          <span style={{ background: 'linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {t('title2')}
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10" style={{ color: 'var(--olive-dark)' }}>
          {t('subtitle')}<br className="hidden md:block" />
          {t('subtitle2')}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-8 max-w-md sm:max-w-none mx-auto">
          <a href="https://www.housio.online" className="inline-flex items-center justify-center gap-2 text-base font-medium text-white px-7 py-4 rounded-xl hover:opacity-90 transition cursor-pointer" style={{ background: 'var(--teal-900)', boxShadow: '0 10px 25px rgba(31, 78, 95, 0.2)' }}>
            {t('ctaPrimary')}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#funkce" onClick={scrollTo('funkce')} className="inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-4 rounded-xl bg-white/70 hover:bg-white transition cursor-pointer" style={{ color: 'var(--teal-900)' }}>
            <Play className="w-4 h-4" />
            {t('ctaSecondary')}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" style={{ color: 'var(--olive)' }}>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4" style={{ color: 'var(--teal-500)' }} />
            {t('trustNoInstall')}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4" style={{ color: 'var(--teal-500)' }} />
            {t('trustTrial')}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4" style={{ color: 'var(--teal-500)' }} />
            {t('trustCancel')}
          </span>
        </div>

        <div className="mt-12 md:mt-16 relative">
          <div className="hidden lg:block absolute -left-12 top-32 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 animate-float" style={{ boxShadow: '0 20px 40px rgba(31, 78, 95, 0.15)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                <Check className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
              <div className="text-left">
                <p className="text-xs" style={{ color: 'var(--olive-dark)' }}>{t('badgePayment')}</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--teal-900)' }}>+15 900 Kč</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-8 top-48 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 animate-float-delayed" style={{ boxShadow: '0 20px 40px rgba(31, 78, 95, 0.15)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(216, 155, 95, 0.15)' }}>
                <Star className="w-5 h-5 fill-current" style={{ color: 'var(--orange)' }} />
              </div>
              <div className="text-left">
                <p className="text-xs" style={{ color: 'var(--olive-dark)' }}>{t('badgeContract')}</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--teal-900)' }}>{t('badgeDays')}</p>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 blur-3xl opacity-40 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, var(--orange) 0%, transparent 60%)', transform: 'translateY(20%)' }} />
          
          <div className="relative mx-auto max-w-5xl" style={{ perspective: '1500px' }}>
            <div className="rounded-2xl p-3 lg:p-4" style={{ 
              background: 'linear-gradient(180deg, #2C2C2E 0%, #1C1C1E 100%)', 
              boxShadow: '0 40px 100px rgba(31, 78, 95, 0.25), 0 0 0 1px rgba(255,255,255,0.05) inset',
              transform: 'rotateX(2deg)',
            }}>
              <div className="flex justify-center mb-2">
                <div className="w-16 h-1 rounded-b-md" style={{ background: '#0A0A0A' }} />
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: '#F5F5F7', borderColor: '#E5E5E5' }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs" style={{ background: 'white', color: '#666' }}>
                      <Lock className="w-3 h-3" />
                      housio.app/dashboard
                    </div>
                  </div>
                </div>
                
                <Image 
                  src="/dashboard.png" 
                  alt="Housio Dashboard"
                  width={2400}
                  height={1500}
                  priority
                  className="w-full h-auto block"
                />
              </div>
            </div>
            
            <div className="mx-auto h-2 rounded-b-2xl" style={{ 
              width: '110%', 
              marginLeft: '-5%',
              background: 'linear-gradient(180deg, #2C2C2E 0%, #0A0A0A 100%)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }} />
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t" style={{ borderColor: 'rgba(31, 78, 95, 0.1)' }}>
          <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--olive)' }}>{t('trustBadge')}</p>
          <div className="flex flex-wrap justify-center items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--orange)' }} />
            ))}
            <span className="text-sm font-medium ml-2" style={{ color: 'var(--olive-dark)' }}>{t('rating')}</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes float-delayed { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite 1s; }
      `}</style>
    </section>
  )
}
