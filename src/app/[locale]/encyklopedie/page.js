import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { BASE, NAHLED } from '@/lib/seo'
import { HESLA, OBLASTI, heslaOblasti, heslaAbecedne } from '@/encyklopedie'
import Footer from '@/components/Footer'

const NAZEV = 'Encyklopedie pronájmu'
const POPIS = 'Krátká vysvětlení pojmů, na které pronajímatel narazí — jistota, evidenční list, zúčtovací období, technické zhodnocení a další. Vždy s paragrafem, ze kterého to plyne.'

export async function generateMetadata() {
  return {
    title: `${NAZEV} · Housio`,
    description: POPIS,
    alternates: { canonical: `${BASE}/encyklopedie` },
    openGraph: {
      type: 'website', siteName: 'Housio', locale: 'cs_CZ',
      url: `${BASE}/encyklopedie`, title: `${NAZEV} · Housio`, description: POPIS,
      images: [{ ...NAHLED, alt: NAZEV }],
    },
    twitter: { card: 'summary_large_image', title: `${NAZEV} · Housio`, description: POPIS, images: [NAHLED.url] },
  }
}

export default async function EncyklopediePage({ params }) {
  const { locale } = await params
  if (locale !== 'cs') notFound()
  setRequestLocale(locale)

  // DefinedTermSet je přesně to, co encyklopedie je — vyhledávač pak ví,
  // že jednotlivé stránky jsou hesla jednoho slovníku, ne náhodné články.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: NAZEV,
    description: POPIS,
    url: `${BASE}/encyklopedie`,
    inLanguage: 'cs',
    hasDefinedTerm: HESLA.map((h) => ({
      '@type': 'DefinedTerm',
      name: h.pojem,
      description: h.definice,
      url: `${BASE}/encyklopedie/${h.slug}`,
    })),
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-6 pt-20 pb-10" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {NAZEV}
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--olive-dark)' }}>{POPIS}</p>

          {/* Abecední rejstřík — kdo zná jméno pojmu, nechce procházet témata. */}
          <div className="flex flex-wrap gap-2">
            {heslaAbecedne().map((h) => (
              <Link
                key={h.slug}
                href={`/encyklopedie/${h.slug}`}
                className="rounded-full px-3.5 py-1.5 text-sm transition hover:opacity-80"
                style={{ background: 'var(--bg-clean)', border: '1px solid var(--border-cool)', color: 'var(--teal-900)' }}
              >
                {h.pojem}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {OBLASTI.map((o, i) => {
        const hesla = heslaOblasti(o.id)
        if (!hesla.length) return null
        return (
          <section
            key={o.id}
            id={o.id}
            className="px-6 py-12 scroll-mt-20"
            style={{ background: i % 2 === 0 ? 'var(--bg-clean)' : 'var(--bg-warm)' }}
          >
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-medium leading-tight tracking-tight mb-2"
                style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
              >
                {o.nazev}
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--olive-dark)' }}>{o.popis}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hesla.map((h) => (
                  <Link
                    key={h.slug}
                    href={`/encyklopedie/${h.slug}`}
                    className="block rounded-2xl px-5 py-5 transition hover:shadow-md"
                    style={{
                      background: i % 2 === 0 ? 'var(--bg-warm)' : 'var(--bg-clean)',
                      border: '1px solid var(--border-cool)',
                    }}
                  >
                    <div className="font-medium mb-1.5" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
                      {h.pojem}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{h.definice}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <Footer />
    </main>
  )
}
