import { useTranslations } from 'next-intl'
import {
  ShieldCheck, Server, Database, CreditCard, Mail, Activity,
  Lock, FileCheck, ArrowRight, Check,
} from 'lucide-react'

// Zpracovatelé (sub-processors) — názvy jsou vlastní jména (stejná ve všech jazycích),
// překládá se jen účel (proc*).
const PROCESSORS = [
  { name: 'Supabase', icon: Database, key: 'procSupabase' },
  { name: 'Vercel', icon: Server, key: 'procVercel' },
  { name: 'Stripe', icon: CreditCard, key: 'procStripe' },
  { name: 'Resend', icon: Mail, key: 'procResend' },
  { name: 'Sentry', icon: Activity, key: 'procSentry' },
]

const cardShadow = { boxShadow: '0 1px 3px rgba(31, 78, 95, 0.06)' }

export default function Bezpecnost() {
  const t = useTranslations('security')
  const infra = ['infra1', 'infra2', 'infra3', 'infra4']

  return (
    <section className="px-6 py-16 lg:py-24" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-4xl mx-auto">

        {/* === HEADER === */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6" style={{ background: 'rgba(216, 155, 95, 0.12)' }}>
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: 'var(--orange)' }} />
            <span className="text-xs font-medium" style={{ color: 'var(--orange-dark)' }}>{t('badge')}</span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.03em' }}
          >
            {t('title')}
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--olive-dark)' }}>
            {t('subtitle')}
          </p>
        </div>

        {/* === KDE BĚŽÍ DATA === */}
        <div className="bg-white rounded-2xl p-8 md:p-10 mb-6" style={cardShadow}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--teal-900)' }}>
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              {t('infraTitle')}
            </h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'var(--olive-dark)' }}>
            {t('infraBody')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {infra.map((k) => (
              <div key={k} className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(45, 139, 95, 0.14)' }}>
                  <Check className="w-3 h-3" style={{ color: 'var(--teal-500, #2D8B5F)' }} />
                </span>
                <span className="text-sm" style={{ color: 'var(--teal-900)' }}>{t(k)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* === ZPRACOVATELÉ === */}
        <div className="bg-white rounded-2xl p-8 md:p-10 mb-6" style={cardShadow}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--olive)' }}>
              <Server className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              {t('procTitle')}
            </h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'var(--olive-dark)' }}>
            {t('procSubtitle')}
          </p>
          <ul className="divide-y" style={{ borderColor: 'rgba(31, 78, 95, 0.08)' }}>
            {PROCESSORS.map(({ name, icon: Icon, key }) => (
              <li key={name} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                <span className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--bg-warm)' }}>
                  <Icon className="w-4 h-4" style={{ color: 'var(--teal-900)' }} />
                </span>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--teal-900)' }}>{name}</p>
                  <p className="text-xs" style={{ color: 'var(--olive-dark)' }}>{t(key)}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-xs leading-relaxed mt-5 pt-5" style={{ color: 'var(--olive-dark)', opacity: 0.85, borderTop: '1px solid rgba(31, 78, 95, 0.08)' }}>
            {t('procNote')}
          </p>
        </div>

        {/* === NESDÍLÍME === */}
        <div className="rounded-2xl p-8 md:p-10 mb-6" style={{ background: 'rgba(31, 78, 95, 0.04)', border: '1px solid rgba(31, 78, 95, 0.08)' }}>
          <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-3" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            {t('sharingTitle')}
          </h2>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
            {t('sharingBody')}
          </p>
        </div>

        {/* === DPA + NAHLÁSIT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-8 flex flex-col" style={cardShadow}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'var(--orange)' }}>
              <FileCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              {t('dpaTitle')}
            </h3>
            <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: 'var(--olive-dark)' }}>
              {t('dpaBody')}
            </p>
            <a
              href="mailto:housio@housio.app?subject=DPA"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl text-white hover:opacity-90 transition cursor-pointer self-start"
              style={{ background: 'var(--teal-900)' }}
            >
              {t('dpaCta')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 flex flex-col" style={cardShadow}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'var(--olive)' }}>
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              {t('reportTitle')}
            </h3>
            <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: 'var(--olive-dark)' }}>
              {t('reportBody')}
            </p>
            <a
              href="mailto:housio@housio.app?subject=Security"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl hover:bg-white/60 transition cursor-pointer self-start"
              style={{ color: 'var(--teal-900)', border: '1px solid var(--teal-900)' }}
            >
              {t('reportCta')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* === PROVOZOVATEL === */}
        <p className="text-center text-xs mt-10 leading-relaxed" style={{ color: 'var(--olive-dark)', opacity: 0.75 }}>
          US Europe Group s.r.o. · Třebovická 5050/78, 722 00 Ostrava · IČO 06779808 · DIČ CZ06779808 · <a href="mailto:housio@housio.app" style={{ color: 'inherit', textDecoration: 'underline' }}>housio@housio.app</a>
        </p>

      </div>
    </section>
  )
}
