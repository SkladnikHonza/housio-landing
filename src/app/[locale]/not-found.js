import { getTranslations } from 'next-intl/server'
import { ArrowLeft, Mail } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import Footer from '@/components/Footer'

// Vlastni 404. Vykresluje se uvnitr [locale]/layout.js, takze ma navigaci,
// fonty i lastu se souhlasem jako zbytek webu. Spousti ji bud notFound()
// ze stranky, nebo zachytna cesta [...rest] u adresy, kterou neznáme.
export default async function Nenalezeno() {
  const t = await getTranslations('nenalezeno')

  return (
    <main>
      <section className="px-6 pt-28 pb-20" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="text-7xl md:text-8xl font-medium mb-6"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.04em', opacity: 0.35 }}
          >
            404
          </div>

          <h1
            className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {t('title')}
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--olive-dark)' }}>
            {t('lead')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 text-base font-medium text-white px-8 py-4 rounded-xl hover:opacity-90 transition cursor-pointer"
              style={{ background: 'var(--teal-900)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              {t('zpetDomu')}
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 text-base font-medium px-8 py-4 rounded-xl bg-white hover:bg-white/70 transition cursor-pointer"
              style={{ color: 'var(--teal-900)', border: '1px solid var(--border-cool)' }}
            >
              <Mail className="w-4 h-4" />
              {t('kontakt')}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
