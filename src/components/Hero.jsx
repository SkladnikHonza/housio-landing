'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Play, Check, Home, Star, Menu, X, Lock } from 'lucide-react'

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Smooth scroll handler
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative px-6 py-8 md:py-12 lg:py-20 overflow-hidden" style={{ background: 'var(--bg-warm)' }}>
      
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--orange) 0%, transparent 70%)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--teal-500) 0%, transparent 70%)' }} />
      
      {/* === NAVIGATION === */}
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between mb-12 md:mb-16 lg:mb-24">
        {/* LOGO */}
        <a href="#" onClick={scrollTo('top')} className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--teal-900)' }}>
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Housio
          </span>
        </a>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#funkce" onClick={scrollTo('funkce')} className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Funkce</a>
          <a href="#ceny" onClick={scrollTo('ceny')} className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Ceny</a>
          <a href="mailto:info@useuropegroup.cz" className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Kontakt</a>
        </div>
        
        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://housio.vercel.app/login" className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/60 transition cursor-pointer" style={{ color: 'var(--teal-900)' }}>
            Přihlásit
          </a>
          <a href="https://housio.vercel.app/login" className="text-sm font-medium px-4 py-2 rounded-lg text-white hover:opacity-90 transition cursor-pointer" style={{ background: 'var(--orange)' }}>
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

          <nav className="flex flex-col gap-2 mb-8">
            <a 
              href="#funkce"
              onClick={scrollTo('funkce')}
              className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
            >
              Funkce
            </a>
            <a 
              href="#ceny"
              onClick={scrollTo('ceny')}
              className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
            >
              Ceny
            </a>
            <a 
              href="mailto:info@useuropegroup.cz"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium py-3 hover:opacity-70 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
            >
              Kontakt
            </a>
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <a 
              href="https://housio.vercel.app/login"
              className="text-base font-medium px-6 py-4 rounded-xl text-center hover:bg-white/60 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', border: '1px solid rgba(31, 78, 95, 0.2)' }}
            >
              Přihlásit
            </a>
            <a 
              href="https://housio.vercel.app/login"
              className="text-base font-medium px-6 py-4 rounded-xl text-white text-center hover:opacity-90 transition cursor-pointer"
              style={{ background: 'var(--orange)' }}
            >
              Vyzkoušet zdarma
            </a>
          </div>
        </div>
      )}

      {/* === HERO CONTENT === */}
      <div id="top" className="relative max-w-5xl mx-auto text-center">
        
        {/* Novinka badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 md:mb-8" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--orange)' }}></span>
          <span className="text-xs font-medium" style={{ color: 'var(--orange-dark)' }}>Novinka — Notifikace končících smluv</span>
        </div>

        {/* Hlavní nadpis */}
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
          <a href="https://housio.vercel.app/login" className="inline-flex items-center justify-center gap-2 text-base font-medium text-white px-7 py-4 rounded-xl hover:opacity-90 transition cursor-pointer" style={{ background: 'var(--teal-900)', boxShadow: '0 10px 25px rgba(31, 78, 95, 0.2)' }}>
            Vyzkoušet zdarma
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#funkce" onClick={scrollTo('funkce')} className="inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-4 rounded-xl bg-white/70 hover:bg-white transition cursor-pointer" style={{ color: 'var(--teal-900)' }}>
            <Play className="w-4 h-4" />
            Prohlédnout funkce
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

        {/* === MACBOOK MOCKUP === */}
        <div className="mt-12 md:mt-16 relative">
          {/* Floating badges (jen desktop) */}
          <div className="hidden lg:block absolute -left-12 top-32 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 animate-float" style={{ boxShadow: '0 20px 40px rgba(31, 78, 95, 0.15)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                <Check className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
              <div className="text-left">
                <p className="text-xs" style={{ color: 'var(--olive-dark)' }}>Nájemné zaplaceno</p>
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
                <p className="text-xs" style={{ color: 'var(--olive-dark)' }}>Smlouva končí za</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--teal-900)' }}>23 dní</p>
              </div>
            </div>
          </div>

          {/* Glow effects */}
          <div className="absolute inset-0 blur-3xl opacity-40 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, var(--orange) 0%, transparent 60%)', transform: 'translateY(20%)' }} />
          
          {/* MacBook frame */}
          <div className="relative mx-auto max-w-5xl" style={{ perspective: '1500px' }}>
            <div className="rounded-2xl p-3 lg:p-4" style={{ 
              background: 'linear-gradient(180deg, #2C2C2E 0%, #1C1C1E 100%)', 
              boxShadow: '0 40px 100px rgba(31, 78, 95, 0.25), 0 0 0 1px rgba(255,255,255,0.05) inset',
              transform: 'rotateX(2deg)',
            }}>
              {/* Notch */}
              <div className="flex justify-center mb-2">
                <div className="w-16 h-1 rounded-b-md" style={{ background: '#0A0A0A' }} />
              </div>
              
              {/* Screen with browser chrome */}
              <div className="bg-white rounded-lg overflow-hidden">
                {/* Browser chrome */}
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
                
                {/* Dashboard screenshot */}
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
            
            {/* MacBook hinge/base */}
            <div className="mx-auto h-2 rounded-b-2xl" style={{ 
              width: '110%', 
              marginLeft: '-5%',
              background: 'linear-gradient(180deg, #2C2C2E 0%, #0A0A0A 100%)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }} />
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  )
}
