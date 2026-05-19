'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Play, Check, Home, Star, Menu, X, TrendingUp, Bell, Zap } from 'lucide-react'

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="relative px-4 sm:px-6 py-8 md:py-12 lg:py-20 overflow-hidden" style={{ background: 'var(--bg-warm)' }}>
      
      {/* === BACKGROUND DECORATIVE BLOBS === */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 -z-10" style={{ background: 'var(--orange)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 -z-10" style={{ background: 'var(--teal-500)' }} />

      {/* === NAVIGATION === */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between mb-12 md:mb-16 lg:mb-20 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--teal-900)' }}>
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Housio
          </span>
        </div>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Funkce</a>
          <a className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Ceny</a>
          <a className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Blog</a>
          <a className="text-sm hover:opacity-70 transition cursor-pointer" style={{ color: 'var(--olive-dark)' }}>Kontakt</a>
        </div>
        
        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/60 transition cursor-pointer" style={{ color: 'var(--teal-900)' }}>
            Přihlásit
          </a>
          <a className="text-sm font-medium px-4 py-2 rounded-lg text-white hover:opacity-90 transition cursor-pointer" style={{ background: 'var(--orange)' }}>
            Vyzkoušet zdarma
          </a>
        </div>

        {/* Mobile burger */}
        <button 
          onClick={() => setMenuOpen(true)}
          className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/60 transition"
          aria-label="Otevřít menu"
        >
          <Menu className="w-6 h-6" style={{ color: 'var(--teal-900)' }} />
        </button>
      </nav>

      {/* === MOBILE MENU OVERLAY === */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col px-6 py-8" style={{ background: 'var(--bg-warm)' }}>
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
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/60 transition"
              aria-label="Zavřít menu"
            >
              <X className="w-6 h-6" style={{ color: 'var(--teal-900)' }} />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-2xl font-medium">
            <a onClick={() => setMenuOpen(false)} className="cursor-pointer hover:opacity-70 transition" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>Funkce</a>
            <a onClick={() => setMenuOpen(false)} className="cursor-pointer hover:opacity-70 transition" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>Ceny</a>
            <a onClick={() => setMenuOpen(false)} className="cursor-pointer hover:opacity-70 transition" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>Blog</a>
            <a onClick={() => setMenuOpen(false)} className="cursor-pointer hover:opacity-70 transition" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>Kontakt</a>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <a className="text-base font-medium text-center px-6 py-4 rounded-xl border-2 cursor-pointer" style={{ color: 'var(--teal-900)', borderColor: 'var(--teal-900)' }}>
              Přihlásit
            </a>
            <a className="text-base font-medium text-center text-white px-6 py-4 rounded-xl cursor-pointer" style={{ background: 'var(--orange)' }}>
              Vyzkoušet zdarma
            </a>
          </div>
        </div>
      )}

      {/* === HERO CONTENT === */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Novinka badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 md:mb-8 backdrop-blur-sm" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
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
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10 px-2" style={{ color: 'var(--olive-dark)' }}>
          Sleduj nájemníky, platby, smlouvy a cash flow z jednoho místa.<br className="hidden md:block" />
          Bez Excelu, bez chaosu. V češtině.
        </p>

        {/* CTA tlačítka */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 px-4 sm:px-0">
          <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-medium text-white px-7 py-4 rounded-xl hover:opacity-90 transition cursor-pointer" style={{ background: 'var(--teal-900)', boxShadow: '0 8px 24px rgba(31, 78, 95, 0.25)' }}>
            Vyzkoušet zdarma
            <ArrowRight className="w-4 h-4" />
          </a>
          <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-4 rounded-xl bg-white/70 hover:bg-white transition cursor-pointer backdrop-blur-sm" style={{ color: 'var(--teal-900)' }}>
            <Play className="w-4 h-4" />
            Demo (60 sec)
          </a>
        </div>

        {/* Trust indikátory */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-16 md:mb-24" style={{ color: 'var(--olive)' }}>
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

      </div>

      {/* === PREMIUM 3D MACBOOK MOCKUP === */}
      <div className="relative max-w-6xl mx-auto perspective-distant">
        
        {/* Multi-layer glow effect */}
        <div className="absolute inset-x-0 top-1/4 mx-auto w-3/4 h-2/3 blur-3xl opacity-50 -z-10" 
             style={{ background: 'radial-gradient(ellipse at center, var(--orange) 0%, transparent 70%)' }} />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-1/2 h-1/2 blur-3xl opacity-30 -z-10" 
             style={{ background: 'radial-gradient(ellipse at center, var(--teal-500) 0%, transparent 70%)' }} />

        {/* Floating decorative badges - LEFT */}
        <div className="hidden lg:block absolute -left-4 top-1/4 z-20 animate-float-slow">
          <div className="bg-white px-4 py-3 rounded-2xl flex items-center gap-3" style={{ boxShadow: '0 20px 40px rgba(31, 78, 95, 0.15)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(40, 201, 64, 0.12)' }}>
              <Check className="w-5 h-5" style={{ color: '#28C940' }} />
            </div>
            <div className="text-left">
              <p className="text-xs font-medium" style={{ color: 'var(--olive)' }}>Nájemné zaplaceno</p>
              <p className="text-sm font-semibold" style={{ color: 'var(--teal-900)' }}>+15 900 Kč</p>
            </div>
          </div>
        </div>

        {/* Floating decorative badges - RIGHT */}
        <div className="hidden lg:block absolute -right-4 top-1/2 z-20 animate-float-slow-delayed">
          <div className="bg-white px-4 py-3 rounded-2xl flex items-center gap-3" style={{ boxShadow: '0 20px 40px rgba(31, 78, 95, 0.15)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
              <Bell className="w-5 h-5" style={{ color: 'var(--orange)' }} />
            </div>
            <div className="text-left">
              <p className="text-xs font-medium" style={{ color: 'var(--olive)' }}>Smlouva končí za</p>
              <p className="text-sm font-semibold" style={{ color: 'var(--teal-900)' }}>23 dní</p>
            </div>
          </div>
        </div>

        {/* Floating decorative badge - BOTTOM LEFT */}
        <div className="hidden xl:block absolute -left-8 -bottom-4 z-20 animate-float">
          <div className="bg-white px-4 py-3 rounded-2xl flex items-center gap-3" style={{ boxShadow: '0 20px 40px rgba(31, 78, 95, 0.15)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(31, 78, 95, 0.08)' }}>
              <TrendingUp className="w-5 h-5" style={{ color: 'var(--teal-900)' }} />
            </div>
            <div className="text-left">
              <p className="text-xs font-medium" style={{ color: 'var(--olive)' }}>Cash flow</p>
              <p className="text-sm font-semibold" style={{ color: '#28C940' }}>+12.4%</p>
            </div>
          </div>
        </div>

        {/* MACBOOK FRAME with tilt */}
        <div className="relative mx-auto max-w-5xl tilt-frame">
          
          {/* Screen bezel */}
          <div 
            className="relative rounded-t-2xl pt-3 pb-2 px-3"
            style={{ 
              background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
              boxShadow: '0 40px 80px rgba(31, 78, 95, 0.35), 0 20px 40px rgba(31, 78, 95, 0.2)'
            }}
          >
            {/* Camera notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ background: '#444' }}></div>
            
            {/* Screen */}
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Browser top bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ background: '#F5F5F4', borderColor: 'rgba(0,0,0,0.06)' }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }}></div>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }}></div>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C940' }}></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 py-0.5 rounded-md text-xs font-mono inline-flex items-center gap-1.5" style={{ background: 'white', color: 'var(--olive)' }}>
                    <span className="text-xs" style={{ color: '#28C940' }}>🔒</span>
                    housio.app/dashboard
                  </div>
                </div>
              </div>
              
              {/* Dashboard screenshot */}
              <Image 
                src="/dashboard.png" 
                alt="Housio Dashboard — přehled portfolia nemovitostí, cash flow, nájemníci" 
                width={2400} 
                height={1500}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>

          {/* MacBook bottom (keyboard hinge) */}
          <div 
            className="mx-auto h-3 rounded-b-2xl"
            style={{ 
              background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
              width: '102%',
              marginLeft: '-1%',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
            }}
          >
            {/* Hinge slot */}
            <div className="mx-auto w-24 h-1 rounded-b-lg" style={{ background: '#333', marginTop: '0px' }}></div>
          </div>
        </div>
      </div>

      {/* === TRUST BADGE BELOW === */}
      <div className="max-w-5xl mx-auto text-center mt-16 md:mt-24 pt-8 border-t" style={{ borderColor: 'rgba(31, 78, 95, 0.1)' }}>
        <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--olive)' }}>Důvěřuje nám 500+ pronajímatelů z celé EU</p>
        <div className="flex justify-center items-center gap-1">
          {[1,2,3,4,5].map(i => (
            <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--orange)' }} />
          ))}
          <span className="text-sm font-medium ml-2" style={{ color: 'var(--olive-dark)' }}>4.9/5 z 234 hodnocení</span>
        </div>
      </div>

      {/* === CSS PRO ANIMACE === */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-slow-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-slow-delayed {
          animation: float-slow-delayed 6s ease-in-out infinite 1s;
        }
        .perspective-distant {
          perspective: 2000px;
        }
        .tilt-frame {
          transform: rotateX(2deg);
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }
        @media (min-width: 1024px) {
          .tilt-frame:hover {
            transform: rotateX(0deg);
          }
        }
        @media (max-width: 768px) {
          .tilt-frame {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
