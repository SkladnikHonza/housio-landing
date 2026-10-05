import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { adresa, BASE, openGraphStranky, twitterStranky } from '@/lib/seo'
import { SLUGY, funkcePodleSlug, PLANY } from '@/funkce'
import { clanekPodleSlug } from '@/clanky'
import { kalkulackaPodleSlug } from '@/kalkulacky'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return SLUGY.map((funkce) => ({ funkce }))
}

export async function generateMetadata({ params }) {
  const { funkce } = await params
  const f = funkcePodleSlug(funkce)
  if (!f) return {}
  const titulek = `${f.nadpis} · Housio`
  const cesta = `/funkce/${f.slug}`
  return {
    title: titulek,
    description: f.perex,
    alternates: { canonical: `${BASE}${cesta}` },
    openGraph: openGraphStranky({ locale: 'cs', cesta, title: titulek, description: f.perex }),
    twitter: twitterStranky({ title: titulek, description: f.perex }),
  }
}

export default async function FunkceDetail({ params }) {
  const { locale, funkce } = await params
  if (locale !== 'cs') notFound()
  const f = funkcePodleSlug(funkce)
  if (!f) notFound()
  setRequestLocale(locale)

  const url = `${BASE}/funkce/${f.slug}`
  const clanek = f.clanek ? clanekPodleSlug(f.clanek) : null
  const kalkulacka = f.kalkulacka ? kalkulackaPodleSlug(f.kalkulacka) : null
  const souvisi = (f.souvisi || []).map(funkcePodleSlug).filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: f.nadpis,
        description: f.perex,
        url,
        inLanguage: 'cs',
        isPartOf: { '@type': 'WebSite', name: 'Housio', url: adresa('cs') },
        about: {
          '@type': 'SoftwareApplication',
          name: 'Housio',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'CZK' },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: f.faq.map((q) => ({
          '@type': 'Question',
          name: q.otazka,
          acceptedAnswer: { '@type': 'Answer', text: q.odpoved },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Housio', item: adresa('cs') },
          { '@type': 'ListItem', position: 2, name: 'Funkce', item: `${BASE}/funkce` },
          { '@type': 'ListItem', position: 3, name: f.nadpis, item: url },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-6 pt-14 pb-16" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-2xl mx-auto">
          <Link href="/funkce" className="inline-block text-sm mb-6 hover:underline" style={{ color: 'var(--teal-900)' }}>
            ← Co Housio umí
          </Link>

          <div className="text-[11px] font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--text-light)' }}>
            {PLANY[f.plan]}
          </div>

          <h1
            className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {f.nadpis}
          </h1>
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--olive-dark)' }}>{f.uvod}</p>

          {f.sekce.map((s) => (
            <div key={s.nadpis} className="mb-7">
              <h2 className="text-xl font-medium mb-2" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
                {s.nadpis}
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{s.text}</p>
            </div>
          ))}

          <div className="rounded-2xl px-5 py-5 my-8" style={{ background: '#E9F3F0', border: '1px solid #CFE3DC' }}>
            <div className="text-[11px] font-semibold tracking-wider uppercase mb-2" style={{ color: 'var(--teal-900)', opacity: 0.75 }}>
              Pro koho to je
            </div>
            <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{f.proKoho}</p>
          </div>

          <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Časté dotazy
          </h2>
          <div className="flex flex-col gap-5">
            {f.faq.map((q) => (
              <div key={q.otazka}>
                <h3 className="font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{q.otazka}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{q.odpoved}</p>
              </div>
            ))}
          </div>

          {(clanek || kalkulacka) && (
            <div className="rounded-2xl px-5 py-5 mt-10" style={{ border: '1px solid var(--border-cool)', background: '#fff' }}>
              <div className="text-[11px] font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--text-light)' }}>
                Souvislosti
              </div>
              <div className="flex flex-col gap-2">
                {clanek && (
                  <Link href={`/blog/${clanek.slug}`} className="underline underline-offset-2" style={{ color: 'var(--teal-900)' }}>
                    Článek: {clanek.nadpis}
                  </Link>
                )}
                {kalkulacka && (
                  <Link href={`/kalkulacky/${kalkulacka.slug}`} className="underline underline-offset-2" style={{ color: 'var(--teal-900)' }}>
                    Kalkulačka: {kalkulacka.nadpis}
                  </Link>
                )}
              </div>
            </div>
          )}

          <div className="rounded-2xl px-6 py-6 mt-8 text-center" style={{ background: 'var(--teal-900)' }}>
            <p className="mb-4 leading-relaxed" style={{ color: '#E9F3F0' }}>
              Housio si můžete vyzkoušet zdarma — jedna nemovitost bez časového omezení a bez karty.
            </p>
            <a
              href="https://www.housio.online"
              className="inline-block rounded-xl px-6 py-3 font-medium"
              style={{ background: '#fff', color: 'var(--teal-900)' }}
            >
              Vyzkoušet Housio
            </a>
          </div>
        </div>
      </section>

      {souvisi.length > 0 && (
        <section className="px-6 py-14" style={{ background: 'var(--bg-clean)' }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-sm font-semibold tracking-wider uppercase mb-5" style={{ color: 'var(--text-light)' }}>
              Souvisí s tím
            </h2>
            <div className="flex flex-col gap-3">
              {souvisi.map((x) => (
                <Link
                  key={x.slug}
                  href={`/funkce/${x.slug}`}
                  className="block rounded-2xl px-5 py-5 transition hover:shadow-md"
                  style={{ border: '1px solid var(--border-cool)', background: 'var(--bg-warm)' }}
                >
                  <div className="font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{x.nadpis}</div>
                  <div className="text-sm leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{x.perex}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
