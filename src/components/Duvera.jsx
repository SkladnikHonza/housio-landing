import { useTranslations } from 'next-intl'
import { Building2, ShieldCheck, FileSignature, CreditCard, Trash2, Smartphone } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { REFERENCE } from '@/data/reference'

// Důvěra před cenou. Sekce stojí výhradně na ověřitelných faktech — obchodní
// rejstřík, stránka o bezpečnosti, obchody s aplikacemi, právní dokumenty.
// Žádné vymyšlené reference ani čísla; ta se objeví, až budou skutečná
// (viz src/data/reference.js).
const BODY = [
  { klic: 'provozovatel', Ikona: Building2 },
  { klic: 'data', Ikona: ShieldCheck },
  { klic: 'dpa', Ikona: FileSignature },
  { klic: 'karta', Ikona: CreditCard },
  { klic: 'smazani', Ikona: Trash2 },
  { klic: 'obchody', Ikona: Smartphone },
]

export default function Duvera() {
  const t = useTranslations('duvera')

  return (
    <section className="px-6 py-16 lg:py-24" style={{ background: 'var(--bg-clean)' }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {t('title')}
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--olive-dark)' }}>
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {BODY.map(({ klic, Ikona }) => (
            <div
              key={klic}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: 'var(--bg-warm)', border: '1px solid var(--border-warm)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(31, 78, 95, 0.08)' }}
              >
                <Ikona className="w-5 h-5" style={{ color: 'var(--teal-900)' }} />
              </div>
              <div className="font-semibold" style={{ color: 'var(--teal-900)' }}>{t(`${klic}Titul`)}</div>
              <div className="text-sm leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{t(`${klic}Text`)}</div>
            </div>
          ))}
        </div>

        {REFERENCE.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {REFERENCE.map((r) => (
              <figure
                key={r.jmeno}
                className="rounded-2xl p-6 m-0"
                style={{ background: 'var(--bg-warm)', border: '1px solid var(--border-warm)' }}
              >
                <blockquote className="leading-relaxed mb-3" style={{ color: 'var(--olive-dark)' }}>„{r.text}“</blockquote>
                <figcaption className="text-sm" style={{ color: 'var(--text-light)' }}>
                  <span className="font-semibold" style={{ color: 'var(--teal-900)' }}>{r.jmeno}</span>
                  {r.role ? ` · ${r.role}` : ''}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/bezpecnost"
            className="inline-flex items-center gap-2 text-base font-medium px-7 py-3.5 rounded-xl transition hover:opacity-80"
            style={{ background: 'var(--bg-warm)', color: 'var(--teal-900)', border: '1px solid var(--border-warm)' }}
          >
            {t('cta')} →
          </Link>
        </div>

      </div>
    </section>
  )
}
