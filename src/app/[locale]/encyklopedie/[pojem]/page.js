import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { adresa, BASE, NAHLED } from '@/lib/seo'
import { SLUGY, hesloPodleSlug, nazevOblasti } from '@/encyklopedie'
import { clanekPodleSlug } from '@/clanky'
import { kalkulackaPodleSlug } from '@/kalkulacky'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return SLUGY.map((pojem) => ({ pojem }))
}

export async function generateMetadata({ params }) {
  const { pojem } = await params
  const h = hesloPodleSlug(pojem)
  if (!h) return {}
  const titulek = `${h.pojem} — co to je · Housio`
  const url = `${BASE}/encyklopedie/${h.slug}`
  return {
    title: titulek,
    description: h.definice,
    alternates: { canonical: url },
    openGraph: {
      type: 'article', siteName: 'Housio', locale: 'cs_CZ',
      url, title: titulek, description: h.definice, images: [{ ...NAHLED, alt: h.pojem }],
    },
    twitter: { card: 'summary_large_image', title: titulek, description: h.definice, images: [NAHLED.url] },
  }
}

export default async function HesloPage({ params }) {
  const { locale, pojem } = await params
  if (locale !== 'cs') notFound()
  const h = hesloPodleSlug(pojem)
  if (!h) notFound()
  setRequestLocale(locale)

  const url = `${BASE}/encyklopedie/${h.slug}`
  const oblast = nazevOblasti(h.oblast)
  const clanek = h.clanek ? clanekPodleSlug(h.clanek) : null
  const kalkulacka = h.kalkulacka ? kalkulackaPodleSlug(h.kalkulacka) : null
  const souvisejici = (h.souvisejici || []).map(hesloPodleSlug).filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'DefinedTerm',
        name: h.pojem,
        description: h.definice,
        url,
        inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Encyklopedie pronájmu', url: `${BASE}/encyklopedie` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Housio', item: adresa('cs') },
          { '@type': 'ListItem', position: 2, name: 'Encyklopedie', item: `${BASE}/encyklopedie` },
          { '@type': 'ListItem', position: 3, name: h.pojem, item: url },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="px-6 pt-14 pb-16" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-2xl mx-auto">
          <nav className="flex flex-wrap items-center gap-2 text-sm mb-6" style={{ color: 'var(--text-light)' }}>
            <Link
              href="/encyklopedie"
              className="inline-flex items-center gap-1.5 font-medium hover:underline"
              style={{ color: 'var(--teal-900)' }}
            >
              <span aria-hidden="true">←</span> Encyklopedie pronájmu
            </Link>
            <span>·</span>
            <Link href={`/encyklopedie#${h.oblast}`} className="hover:underline" style={{ color: 'var(--teal-900)' }}>{oblast}</Link>
          </nav>

          <h1
            className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {h.pojem}
          </h1>

          {/* Definice stojí samostatně a nahoře — přesně tu si bere vyhledávač. */}
          <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'var(--olive-dark)' }}>
            {h.definice}
          </p>

          {h.vysvetleni.map((odstavec) => (
            <p key={odstavec.slice(0, 40)} className="leading-relaxed mb-4" style={{ color: 'var(--olive-dark)' }}>
              {odstavec}
            </p>
          ))}

          {h.pozor && (
            <div className="rounded-2xl px-5 py-5 my-7" style={{ background: '#FBF0E6', border: '1px solid #EBD6BF' }}>
              <div className="text-[11px] font-semibold tracking-wider uppercase mb-2" style={{ color: '#A4512B', opacity: 0.8 }}>
                Na tohle pozor
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{h.pozor}</p>
            </div>
          )}

          {(clanek || kalkulacka) && (
            <div className="rounded-2xl px-5 py-5 my-7" style={{ background: '#E9F3F0', border: '1px solid #CFE3DC' }}>
              <div className="text-[11px] font-semibold tracking-wider uppercase mb-2" style={{ color: 'var(--teal-900)', opacity: 0.75 }}>
                Kam dál
              </div>
              <ul className="flex flex-col gap-2 pl-5 list-disc leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
                {clanek && (
                  <li>
                    Celý postup rozebírá návod{' '}
                    <Link href={`/blog/${clanek.slug}`} className="underline underline-offset-2" style={{ color: 'var(--teal-900)' }}>
                      {clanek.nadpis}
                    </Link>.
                  </li>
                )}
                {kalkulacka && (
                  <li>
                    Spočítat si to můžeš v{' '}
                    <Link href={`/kalkulacky/${kalkulacka.slug}`} className="underline underline-offset-2" style={{ color: 'var(--teal-900)' }}>
                      {kalkulacka.nadpis.toLowerCase()}
                    </Link>.
                  </li>
                )}
              </ul>
            </div>
          )}

          {souvisejici.length > 0 && (
            <div className="mt-10">
              <h2 className="text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--text-light)' }}>
                Související pojmy
              </h2>
              <div className="flex flex-wrap gap-2">
                {souvisejici.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/encyklopedie/${s.slug}`}
                    className="rounded-full px-3.5 py-1.5 text-sm transition hover:opacity-80"
                    style={{ background: 'var(--bg-clean)', border: '1px solid var(--border-cool)', color: 'var(--teal-900)' }}
                  >
                    {s.pojem}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <p className="text-sm leading-relaxed mt-10 pt-5" style={{ color: 'var(--text-light)', borderTop: '1px solid var(--border-warm)' }}>
            {h.zdroj && <><strong>Opřeno o:</strong> {h.zdroj}. </>}
            Stav k 5. 10. 2026. Jde o stručné vysvětlení pojmu, ne o právní ani daňové poradenství.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
