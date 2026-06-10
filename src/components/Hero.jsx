'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight, Play, Check, Star, Lock } from 'lucide-react'

export default function Hero() {
  const t = useTranslations('hero')

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative px-6 py-12 md:py-16 lg:py-24 overflow-hidden" style={{ background: 'var(--bg-warm)' }}>

      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--orange) 0%, transparent 70%)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--teal-500) 0%, transparent 70%)' }} />

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
                <p className="text-sm font-semibold" style={{ color: 'var(--teal-900)' }}>+20 000 Kč</p>
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

                {/* Živý dashboard (nahrazuje statický screenshot) — fiktivní demo data */}
                <div className="bg-white text-left" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  <div className="flex" style={{ minHeight: '440px' }}>

                    {/* Sidebar */}
                    <aside className="hidden sm:flex flex-col px-3 py-4 border-r shrink-0" style={{ width: 152, background: '#FCFAF5', borderColor: '#EFEAE0' }}>
                      <div className="flex items-center gap-2 px-1 mb-3">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: 'var(--teal-900)' }}>H</div>
                        <span className="text-sm font-semibold" style={{ color: 'var(--teal-900)' }}>Housio</span>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {['Kč', '€', 'zł'].map((c, i) => (
                          <span key={c} className="text-[9px] px-2 py-1 rounded-md" style={{ background: i === 0 ? 'var(--teal-100)' : '#F3EFE6', color: i === 0 ? 'var(--teal-900)' : '#9ca3af', fontWeight: i === 0 ? 700 : 500 }}>{c}</span>
                        ))}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {[['Nástěnka', true], ['Nemovitosti', false], ['Nájemníci', false], ['Smlouvy', false], ['Měsíční platby', false], ['Výdaje', false], ['Pojištění', false], ['Nastavení', false]].map(([label, active]) => (
                          <div key={label} className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px]" style={{ background: active ? 'var(--teal-100)' : 'transparent', color: active ? 'var(--teal-900)' : '#7b8a86', fontWeight: active ? 600 : 500 }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: active ? 'var(--teal-900)' : '#cbd5cf' }} />
                            {label}
                          </div>
                        ))}
                      </div>
                    </aside>

                    {/* Main */}
                    <div className="flex-1 p-4 lg:p-5" style={{ background: '#FBF9F3' }}>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="text-base lg:text-lg font-bold" style={{ color: 'var(--teal-900)' }}>Nástěnka</h3>
                          <p className="text-[10px]" style={{ color: '#9ca3af' }}>Přehled vašeho portfolia · 2026</p>
                        </div>
                        <div className="text-[10px] px-2.5 py-1 rounded-md font-semibold" style={{ background: 'var(--teal-900)', color: 'white' }}>2026</div>
                      </div>

                      {/* KPI karty */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-2.5">
                        {[
                          ['🏠', 'Nemovitosti', '3', 'apartmán · dům · garáž'],
                          ['💰', 'Hodnota portfolia', '12 400 000 Kč', 'průměr 4 133 000 Kč'],
                          ['📈', 'Měsíční příjem', '38 500 Kč', 'ročně 462 000 Kč'],
                          ['🎯', 'Obsazenost', '3 / 3', '100 % obsazeno'],
                        ].map(([icon, label, val, sub]) => (
                          <div key={label} className="bg-white rounded-xl p-2.5 border" style={{ borderColor: '#EFEAE0' }}>
                            <div className="text-[9px] font-semibold uppercase tracking-wide flex items-center gap-1" style={{ color: '#9ca3af' }}><span>{icon}</span>{label}</div>
                            <div className="text-sm lg:text-base font-extrabold mt-1 whitespace-nowrap" style={{ color: 'var(--teal-900)' }}>{val}</div>
                            <div className="text-[9px] mt-0.5" style={{ color: '#9ca3af' }}>{sub}</div>
                          </div>
                        ))}
                      </div>

                      {/* Karta Zhodnocení portfolia (růst) */}
                      <div className="bg-white rounded-xl p-3 border mb-2.5" style={{ borderColor: '#EFEAE0' }}>
                        <div className="flex items-center gap-1.5 mb-2">
                          <span className="text-sm">📈</span>
                          <h4 className="text-xs font-bold" style={{ color: 'var(--teal-900)' }}>Zhodnocení portfolia 2026</h4>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-2">
                          <div>
                            <div className="text-[8.5px] font-semibold uppercase tracking-wide" style={{ color: '#9ca3af' }}>Vloženo</div>
                            <div className="text-xs font-bold whitespace-nowrap" style={{ color: 'var(--teal-900)' }}>8 900 000 Kč</div>
                          </div>
                          <div>
                            <div className="text-[8.5px] font-semibold uppercase tracking-wide" style={{ color: '#9ca3af' }}>Aktuální hodnota</div>
                            <div className="text-xs font-bold whitespace-nowrap" style={{ color: 'var(--teal-900)' }}>12 400 000 Kč</div>
                          </div>
                          <div>
                            <div className="text-[8.5px] font-semibold uppercase tracking-wide" style={{ color: '#9ca3af' }}>Zhodnocení</div>
                            <div className="text-xs font-extrabold whitespace-nowrap" style={{ color: '#16A34A' }}>+3 500 000 <span className="font-bold">(+39 %)</span></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                          <span className="text-[10px] font-semibold" style={{ color: '#15803D' }}>Odhad růstu 7 %/rok</span>
                          <span className="text-xs font-extrabold" style={{ color: '#15803D' }}>+868 000 Kč</span>
                        </div>
                      </div>

                      {/* Rozpis po nemovitostech */}
                      <div className="bg-white rounded-xl p-3 border" style={{ borderColor: '#EFEAE0' }}>
                        <h4 className="text-[11px] font-bold mb-2" style={{ color: 'var(--teal-900)' }}>🏠 Rozpis po nemovitostech</h4>
                        <div className="flex flex-col">
                          {[
                            ['Apartmán', '2+kk · Praha', '5 200 000 Kč', '16 000 Kč'],
                            ['Rodinný dům', '5+1 · Brno', '6 800 000 Kč', '20 000 Kč'],
                            ['Garáž', 'Ostrava', '400 000 Kč', '2 500 Kč'],
                          ].map(([nazev, typ, hodnota, najem], i) => (
                            <div key={nazev} className="flex items-center justify-between text-[10px] py-1.5" style={{ borderTop: i === 0 ? 'none' : '1px solid #F1ECE0' }}>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold" style={{ color: 'var(--teal-900)' }}>{nazev}</div>
                                <div className="text-[9px]" style={{ color: '#9ca3af' }}>{typ}</div>
                              </div>
                              <div className="w-24 text-right font-semibold whitespace-nowrap hidden sm:block" style={{ color: 'var(--teal-900)' }}>{hodnota}</div>
                              <div className="w-20 text-right font-semibold whitespace-nowrap" style={{ color: 'var(--teal-900)' }}>{najem}</div>
                              <div className="w-[72px] text-right">
                                <span className="text-[8.5px] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap" style={{ background: '#F0FDF4', color: '#15803D' }}>✓ Zaplaceno</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
