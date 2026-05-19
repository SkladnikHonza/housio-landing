'use client'

import { useState } from 'react'
import { ArrowRight, Play, Check, Sparkles, Home, Star, Menu, X } from 'lucide-react'

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="relative px-6 py-8 md:py-12 lg:py-20" style={{ background: 'var(--bg-warm)' }}>
      
      {/* === NAVIGATION === */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between mb-12 md:mb-16 lg:mb-24">
        {/* LOGO */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--teal-900)' }}>
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Housio
          </span>
        </div>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Funkce</a>
          <a className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Ceny</a>
          <a className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Blog</a>
          <a className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Kontakt</a>
        </div>
        
        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/60 transition cursor-pointer" style={{ color: 'var(--teal-900)' }}>
            Přihlásit
          </a>
          <a className="text-sm font-medium px-4 py-2 rounded-lg text-white hover:opacity-90 transition cursor-pointer" style={{ background: 'var(--orange)' }}>
            Vyzkoušet zdarma
          </a>
        </div>

        {/* MOBILE BURGER */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/40 transition"
          onClick={() => setMenuOpen(true)}
          aria-label="Otevřít menu"
        >
          <Menu className="w-6 h-6" style={{ color: 'var(--teal-900)' }} />
        </button>
      </nav>

      {/* === MOBILE FULL-SCREEN MENU === */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden flex flex-col p-6"
          style={{ background: 'var(--bg-warm)' }}
        >
          {/* HEADER s logem a X */}
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
              aria-label="Zavřít menu"
            >
              <X className="w-6 h-6" style={{ color: 'var(--teal-900)' }} />
            </button>
          </div>

          {/* NAV LINKS */}
          <nav className="flex flex-col gap-2 mb-8">
            <a 
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
            >
              Funkce
            </a>
            <a 
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
            >
              Ceny
            </a>
            <a 
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
            >
              Blog
            </a>
            <a 
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
            >
              Kontakt
            </a>
          </nav>

          {/* CTA TLAČÍTKA DOLE */}
          <div className="mt-auto flex flex-col gap-3">
            <a 
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium px-6 py-4 rounded-xl text-center hover:bg-white/60 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', border: '1px solid rgba(31, 78, 95, 0.2)' }}
            >
              Přihlásit
            </a>
            <a 
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium px-6 py-4 rounded-xl text-white text-center hover:opacity-90 transition cursor-pointer"
              style={{ background: 'var(--orange)' }}
            >
              Vyzkoušet zdarma
            </a>
          </div>
        </div>
      )}

      {/* === HERO CONTENT === */}
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Novinka badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 md:mb-8" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--orange)' }}></span>
          <span className="text-xs font-medium" style={{ color: 'var(--orange-dark)' }}>Novinka — Notifikace končících smluv</span>
        </div>

        {/* Hlavní nadpis — MENŠÍ FONT NA MOBILE */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] tracking-tight mb-5 md:mb-6"
          style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.035em' }}
        >
          Správa nemovitostí.<br />
          <span style={{ background: 'linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Jednoduše.
          </span>
        </h1>

        {/* Podtitul */}
        <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10" style={{ color: 'var(--olive-dark)' }}>
          Sleduj nájemníky, platby, smlouvy a cash flow z jednoho místa.<br className="hidden md:block" />
          Bez Excelu, bez chaosu. V češtině.
        </p>

        {/* CTA tlačítka */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-8 max-w-md sm:max-w-none mx-auto">
          <a className="inline-flex items-center justify-center gap-2 text-base font-medium text-white px-7 py-4 rounded-xl hover:opacity-90 transition cursor-pointer" style={{ background: 'var(--teal-900)' }}>
            Vyzkoušet zdarma
            <ArrowRight className="w-4 h-4" />
          </a>
          <a className="inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-4 rounded-xl bg-white/70 hover:bg-white transition cursor-pointer" style={{ color: 'var(--teal-900)' }}>
            <Play className="w-4 h-4" />
            Demo (60 sec)
          </a>
        </div>

        {/* Trust indikátory */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" style={{ color: 'var(--olive)' }}>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4" style={{ color: 'var(--teal-500)' }} />
            Bez instalace
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4" style={{ color: 'var(--teal-500)' }} />
            14 dní trial
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4" style={{ color: 'var(--teal-500)' }} />
            Zruš kdykoli
          </span>
        </div>

        {/* === SCREENSHOT MOCKUP === */}
        <div className="mt-12 md:mt-16 relative">
          <div className="bg-white rounded-2xl p-4 md:p-6 mx-auto max-w-4xl" style={{ boxShadow: '0 30px 80px rgba(31, 78, 95, 0.15)' }}>
            <div className="rounded-xl p-8 md:p-12 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--bg-warm) 0%, var(--bg-clean) 100%)', minHeight: '240px' }}>
              <div className="text-center">
                <Sparkles className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3" style={{ color: 'var(--teal-900)' }} />
                <p className="font-medium text-base md:text-lg" style={{ color: 'var(--teal-900)' }}>Tady přijde screenshot Dashboardu</p>
                <p className="text-xs md:text-sm mt-1" style={{ color: 'var(--text-light)' }}>3D tilt + floating effect</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badge dole */}
        <div className="mt-12 md:mt-16 pt-8 border-t" style={{ borderColor: 'rgba(31, 78, 95, 0.1)' }}>
          <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--olive)' }}>Důvěřuje nám 500+ pronajímatelů z celé EU</p>
          <div className="flex flex-wrap justify-center items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--orange)' }} />
            ))}
            <span className="text-sm font-medium ml-2" style={{ color: 'var(--olive-dark)' }}>4.9/5 z 234 hodnocení</span>
          </div>
        </div>

      </div>
    </section>
  )
}
