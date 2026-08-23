'use client'

import { useActionState, useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  ArrowRight, Check, Gift, BarChart3, Repeat, Rocket,
  CheckCircle2, AlertCircle,
} from 'lucide-react'
import { sendPartnerZadost } from '@/app/actions/sendPartnerZadost'

const PLANY = [
  { key: 'Basic', price: 299 },
  { key: 'Pro', price: 599 },
  { key: 'Business', price: 999 },
]
const nf = new Intl.NumberFormat('cs-CZ')
const kc = (n) => nf.format(Math.round(n)) + ' Kč'
const DISPLAY = { fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }

export default function Partneri() {
  const t = useTranslations('partneri')
  const [state, formAction, isPending] = useActionState(sendPartnerZadost, null)
  const [clients, setClients] = useState(10)
  const [price, setPrice] = useState(599)

  const first = clients * price * 0.20
  const month = clients * price * 0.10
  const year = first + month * 11

  const errorText = (code) => {
    switch (code) {
      case 'name': return t('errName')
      case 'email': return t('errEmail')
      default: return t('errGeneric')
    }
  }

  const focusOrange = {
    onFocus: (e) => (e.target.style.borderColor = 'var(--orange)'),
    onBlur: (e) => (e.target.style.borderColor = 'transparent'),
  }
  const inputStyle = { background: 'var(--bg-warm)', color: 'var(--teal-900)', border: '1px solid transparent' }
  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition disabled:opacity-60'

  return (
    <>
      <style>{`
        .partner-range{-webkit-appearance:none;appearance:none;width:100%;height:8px;border-radius:999px;background:rgba(255,255,255,.2);outline:none}
        .partner-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:26px;height:26px;border-radius:50%;background:var(--orange);cursor:pointer;border:4px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,.25)}
        .partner-range::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:var(--orange);cursor:pointer;border:4px solid #fff}
        .partner-faq summary::-webkit-details-marker{display:none}
      `}</style>

      {/* HERO */}
      <section className="px-6 pt-20 pb-10 relative overflow-hidden" style={{ background: 'var(--bg-warm)' }}>
        <div className="absolute rounded-full pointer-events-none" style={{ right: '-140px', top: '-120px', width: 480, height: 480, background: 'radial-gradient(circle, rgba(143,161,116,0.18), transparent 66%)' }} />
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--orange)' }} />
            <span className="text-xs font-medium" style={{ color: 'var(--orange-dark)' }}>🤝 {t('heroBadge')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.05] mb-5" style={{ color: 'var(--teal-900)', ...DISPLAY }}>
            {t('heroTitle1')}<br /><span style={{ color: 'var(--orange-dark)' }}>{t('heroTitleHl')}</span> {t('heroTitle2')}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'var(--olive-dark)' }}>{t('heroSub')}</p>
          <div className="flex flex-wrap gap-3.5 mt-8">
            <a href="#prihlaska" className="inline-flex items-center gap-2 text-base font-medium text-white px-7 py-4 rounded-full hover:opacity-90 transition" style={{ background: 'var(--orange)' }}>{t('ctaApply')} <ArrowRight className="w-4 h-4" /></a>
            <a href="#kalkulacka" className="inline-flex items-center gap-2 text-base font-medium px-7 py-4 rounded-full transition" style={{ color: 'var(--teal-900)', border: '1.5px solid var(--border-warm)' }}>{t('ctaCalc')}</a>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            {[['chip1num', 'chip1txt'], ['chip2num', 'chip2txt'], ['chip3num', 'chip3txt']].map(([n, txt]) => (
              <div key={n} className="inline-flex items-baseline gap-2 bg-white rounded-xl px-4 py-3" style={{ boxShadow: '0 1px 3px rgba(31,78,95,0.07)', border: '1px solid var(--border-cool)' }}>
                <b className="text-xl font-semibold" style={{ color: 'var(--orange-dark)', ...DISPLAY }}>{t(n)}</b>
                <span className="text-sm font-medium" style={{ color: 'var(--olive-dark)' }}>{t(txt)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KALKULAČKA */}
      <section id="kalkulacka" className="px-6 py-14" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-5xl mx-auto rounded-3xl p-7 md:p-12 relative overflow-hidden" style={{ background: 'var(--teal-900)', boxShadow: '0 14px 40px rgba(22,59,72,0.14)' }}>
          <div className="absolute rounded-full pointer-events-none" style={{ right: '-80px', bottom: '-120px', width: 380, height: 380, background: 'radial-gradient(circle, rgba(216,155,95,0.20), transparent 68%)' }} />
          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            <div>
              <h2 className="text-2xl md:text-4xl font-medium text-white" style={DISPLAY}>{t('calcTitle')}</h2>
              <p className="mt-3 text-base" style={{ color: 'rgba(255,255,255,0.78)' }}>{t('calcLead')}</p>

              <div className="flex justify-between items-baseline mt-7 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.72)' }}>{t('calcClients')}</span>
                <span className="text-xl font-semibold" style={{ color: 'var(--orange)', ...DISPLAY }}>{clients}</span>
              </div>
              <input type="range" min="1" max="50" value={clients} onChange={(e) => setClients(+e.target.value)} className="partner-range" aria-label={t('calcClients')} />

              <div className="text-xs font-semibold uppercase tracking-wider mt-6 mb-3" style={{ color: 'rgba(255,255,255,0.72)' }}>{t('calcPlan')}</div>
              <div className="flex gap-2">
                {PLANY.map((p) => {
                  const on = p.price === price
                  return (
                    <button key={p.key} onClick={() => setPrice(p.price)} className="flex-1 rounded-xl py-2.5 px-2 font-semibold text-sm transition" style={{ background: on ? '#fff' : 'rgba(255,255,255,0.10)', color: on ? 'var(--teal-900)' : 'rgba(255,255,255,0.8)' }}>
                      {p.key}<span className="block text-[11px] font-medium mt-0.5" style={{ color: on ? 'var(--olive-dark)' : 'rgba(255,255,255,0.55)' }}>{p.price} Kč/měs</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.16)' }}>
              <div className="text-center mb-1.5">
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.65)' }}>{t('calcYearCap')}</div>
                <div className="font-semibold leading-none my-1" style={{ color: 'var(--orange)', fontSize: 'clamp(40px,7vw,58px)', ...DISPLAY }}>{kc(year)}</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('calcYearPer')}</div>
              </div>
              <div className="flex justify-between items-baseline py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 14 }}>
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.78)' }}>{t('calcFirst')}</span>
                <span className="text-xl font-semibold text-white tabular-nums" style={DISPLAY}>{kc(first)}</span>
              </div>
              <div className="flex justify-between items-baseline py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.78)' }}>{t('calcMonth')}</span>
                <span className="text-xl font-semibold text-white tabular-nums" style={DISPLAY}>{kc(month)}</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-4 relative" style={{ color: 'rgba(255,255,255,0.55)' }}>{t('calcNote')}</p>
        </div>
      </section>

      {/* JAK TO FUNGUJE */}
      <section className="px-6 py-16" style={{ background: 'var(--bg-clean)' }}>
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--orange-dark)' }}>{t('stepsBadge')}</span>
          <h2 className="text-3xl md:text-4xl font-medium mt-3 mb-3" style={{ color: 'var(--teal-900)', ...DISPLAY }}>{t('stepsTitle')}</h2>
          <p className="text-lg max-w-xl" style={{ color: 'var(--olive-dark)' }}>{t('stepsSub')}</p>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl p-7" style={{ background: 'var(--bg-warm)', border: '1px solid var(--border-warm)' }}>
                <div className="w-9 h-9 rounded-xl grid place-items-center text-white font-semibold mb-4" style={{ background: 'var(--olive)', ...DISPLAY }}>{i}</div>
                <h3 className="text-xl font-medium" style={{ color: 'var(--teal-900)', ...DISPLAY }}>{t(`step${i}Title`)}</h3>
                <p className="mt-2 text-[15px]" style={{ color: 'var(--olive-dark)' }}>{t(`step${i}Body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVIZE */}
      <section className="px-6 pb-16" style={{ background: 'var(--bg-clean)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-warm)' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 text-center" style={{ borderLeft: i > 1 ? '1px solid var(--border-warm)' : 'none' }}>
              <div className="font-semibold leading-none" style={{ color: 'var(--orange-dark)', fontSize: 'clamp(34px,5vw,46px)', ...DISPLAY }}>{t(`term${i}Big`)}</div>
              <h3 className="text-lg font-medium mt-3" style={{ color: 'var(--teal-900)', ...DISPLAY }}>{t(`term${i}Title`)}</h3>
              <p className="text-sm mt-1.5" style={{ color: 'var(--olive-dark)' }}>{t(`term${i}Body`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VÝHODY */}
      <section className="px-6 py-16" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--orange-dark)' }}>{t('benBadge')}</span>
          <h2 className="text-3xl md:text-4xl font-medium mt-3 mb-8" style={{ color: 'var(--teal-900)', ...DISPLAY }}>{t('benTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[[Gift, 1], [BarChart3, 2], [Repeat, 3], [Rocket, 4]].map(([Icon, i]) => (
              <div key={i} className="flex gap-4 bg-white rounded-2xl p-6" style={{ boxShadow: '0 1px 3px rgba(31,78,95,0.06)', border: '1px solid var(--border-cool)' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl grid place-items-center" style={{ background: 'rgba(143,161,116,0.16)' }}><Icon className="w-6 h-6" style={{ color: 'var(--olive-dark)' }} /></div>
                <div>
                  <h3 className="text-lg font-medium" style={{ color: 'var(--teal-900)', ...DISPLAY }}>{t(`ben${i}Title`)}</h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--olive-dark)' }}>{t(`ben${i}Body`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PŘIHLÁŠKA */}
      <section id="prihlaska" className="px-6 py-16" style={{ background: 'var(--bg-clean)' }}>
        <div className="max-w-5xl mx-auto rounded-3xl p-7 md:p-14" style={{ background: 'linear-gradient(155deg, var(--teal-900), #163B48)', boxShadow: '0 14px 40px rgba(22,59,72,0.14)' }}>
          <div className="grid md:grid-cols-2 gap-11 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4" style={{ background: 'rgba(255,255,255,0.14)' }}>
                <span className="text-xs font-medium text-white">{t('applyBadge')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white" style={DISPLAY}>{t('applyTitle')}</h2>
              <p className="mt-3.5 text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>{t('applyLead')}</p>
              <ul className="mt-6 space-y-2.5">
                {['applyLi1', 'applyLi2', 'applyLi3'].map((k) => (
                  <li key={k} className="flex gap-2.5 items-center text-[15px]" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--orange)' }} />{t(k)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-7">
              {state?.ok ? (
                <div className="flex flex-col items-center text-center py-10" role="status" aria-live="polite">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(143,161,116,0.16)' }}><CheckCircle2 className="w-7 h-7" style={{ color: 'var(--olive-dark)' }} /></div>
                  <p className="text-lg font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{t('successTitle')}</p>
                  <p className="text-sm" style={{ color: 'var(--olive-dark)' }}>{t('successBody')}</p>
                </div>
              ) : (
                <form className="space-y-3.5" action={formAction}>
                  <h3 className="text-xl font-medium" style={{ color: 'var(--teal-900)', ...DISPLAY }}>{t('formTitle')}</h3>
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 }} />
                  <div>
                    <label htmlFor="p-name" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--olive-dark)' }}>{t('labelName')}</label>
                    <input id="p-name" type="text" name="name" required maxLength={100} placeholder={t('phName')} disabled={isPending} className={inputClass} style={inputStyle} {...focusOrange} />
                  </div>
                  <div>
                    <label htmlFor="p-email" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--olive-dark)' }}>{t('labelEmail')}</label>
                    <input id="p-email" type="email" name="email" required maxLength={200} placeholder={t('phEmail')} disabled={isPending} className={inputClass} style={inputStyle} {...focusOrange} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="p-phone" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--olive-dark)' }}>{t('labelPhone')}</label>
                      <input id="p-phone" type="tel" name="phone" maxLength={160} placeholder={t('phPhone')} disabled={isPending} className={inputClass} style={inputStyle} {...focusOrange} />
                    </div>
                    <div>
                      <label htmlFor="p-agency" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--olive-dark)' }}>{t('labelAgency')}</label>
                      <input id="p-agency" type="text" name="agency" maxLength={160} placeholder={t('phAgency')} disabled={isPending} className={inputClass} style={inputStyle} {...focusOrange} />
                    </div>
                  </div>
                  {state?.error && (
                    <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl" style={{ background: 'rgba(216, 95, 95, 0.10)', color: '#B6612F' }} role="alert">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" /><span>{errorText(state.error)}</span>
                    </div>
                  )}
                  <button type="submit" disabled={isPending} className="w-full inline-flex items-center justify-center gap-2 text-base font-medium text-white py-4 rounded-xl hover:opacity-90 transition cursor-pointer disabled:opacity-70" style={{ background: 'var(--orange)' }}>
                    {isPending ? t('sending') : t('submit')}{!isPending && <ArrowRight className="w-4 h-4" />}
                  </button>
                  <p className="text-center text-xs" style={{ color: 'var(--olive-dark)', opacity: 0.8 }}>{t('formNote')}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 partner-faq" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-8" style={{ color: 'var(--teal-900)', ...DISPLAY }}>{t('faqTitle')}</h2>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <details key={i} className="bg-white rounded-2xl px-6" style={{ border: '1px solid var(--border-cool)' }} open={i === 1}>
                <summary className="cursor-pointer list-none py-5 font-medium flex justify-between items-center gap-4" style={{ color: 'var(--teal-900)' }}>
                  {t(`faq${i}Q`)}<span style={{ color: 'var(--orange)', fontSize: 22 }}>+</span>
                </summary>
                <p className="pb-5 -mt-1 text-[15px]" style={{ color: 'var(--olive-dark)' }}>{t(`faq${i}A`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
