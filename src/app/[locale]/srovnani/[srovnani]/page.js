import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { adresa, BASE, openGraphStranky, twitterStranky } from '@/lib/seo'
import { SLUGY, srovnaniPodleSlug } from '@/srovnani'
import { funkcePodleSlug } from '@/funkce'
import { clanekPodleSlug } from '@/clanky'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return SLUGY.map((srovnani) => ({ srovnani }))
}

export async function generateMetadata({ params }) {
  const { srovnani } = await params
  const s = srovnaniPodleSlug(srovnani)
  if (!s) return {}
  const titulek = `${s.nadpis} · Housio`
  const cesta = `/srovnani/${s.slug}`
  return {
    title: titulek,
    description: s.perex,
    alternates: { canonical: `${BASE}${cesta}` },
    openGraph: openGraphStranky({ locale: 'cs', cesta, title: titulek, description: s.perex }),
    twitter: twitterStranky({ title: titulek, description: s.perex }),
  }
}

export default async function SrovnaniDetail({ params }) {
  const { locale, srovnani } = await params
  if (locale !== 'cs') notFound()
  const s = srovnaniPodleSlug(srovnani)
  if (!s) notFound()
  setRequestLocale(locale)

  const url = `${BASE}/srovnani/${s.slug}`
  const funkce = s.funkce.map(funkcePodleSlug).filter(Boolean)
  const clanky = s.clanky.map(clanekPodleSlug).filter(Boolean)
  const souvisi = s.souvisi.map(srovnaniPodleSlug).filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: s.nadpis,
        description: s.perex,
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
        mainEntity: s.faq.map((q) => ({
          '@type': 'Question',
          name: q.otazka,
          acceptedAnswer: { '@type': 'Answer', text: q.odpoved },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Housio', item: adresa('cs') },
          { '@type': 'ListItem', position: 2, name: 'Srovnání', item: `${BASE}/srovnani` },
          { '@type': 'ListItem', position: 3, name: s.nadpis, item: url },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-6 pt-14 pb-16" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-2xl mx-auto">
          <Link href="/srovnani" className="inline-block text-sm mb-6 hover:underline" style={{ color: 'var(--teal-900)' }}>
            ← Srovnání
          </Link>

          <div className="text-[11px] font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--text-light)' }}>
            Housio vs {s.protistrana}
          </div>

          <h1
            className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-5"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {s.nadpis}
          </h1>

          {/* Odpoved hned, pred rozcvickou. Kdo si otevrel stranku z vyhledavace,
              nechce cist uvod — a jazykovy model si bere prave tenhle odstavec. */}
          <div className="rounded-2xl px-5 py-5 mb-9" style={{ background: '#E9F3F0', border: '1px solid #CFE3DC' }}>
            <div className="text-[11px] font-semibold tracking-wider uppercase mb-2" style={{ color: 'var(--teal-900)', opacity: 0.75 }}>
              Krátká odpověď
            </div>
            <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{s.kratkaOdpoved}</p>
          </div>

          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--olive-dark)' }}>{s.uvod}</p>

          <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Srovnání bod po bodu
          </h2>
          {/* Tabulka je na mobilu uzsi nez obrazovka, proto vlastni posuv. */}
          <div className="overflow-x-auto -mx-6 px-6 mb-10">
            <table className="w-full text-sm border-collapse" style={{ minWidth: '34rem' }}>
              <thead>
                <tr>
                  <th className="text-left font-semibold align-bottom pb-3 pr-4" style={{ color: 'var(--text-light)' }}></th>
                  {s.tabulka.sloupce.map((c) => (
                    <th key={c} className="text-left font-semibold align-bottom pb-3 pr-4" style={{ color: 'var(--teal-900)' }}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.tabulka.radky.map((r) => (
                  <tr key={r.kriterium} style={{ borderTop: '1px solid var(--border-cool)' }}>
                    <th scope="row" className="text-left font-medium align-top py-3 pr-4" style={{ color: 'var(--teal-900)' }}>
                      {r.kriterium}
                    </th>
                    {r.hodnoty.map((h, i) => (
                      <td key={i} className="align-top py-3 pr-4 leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
                        {h}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {s.sekce.map((x) => (
            <div key={x.nadpis} className="mb-7">
              <h2 className="text-xl font-medium mb-2" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
                {x.nadpis}
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{x.text}</p>
            </div>
          ))}

          <div className="rounded-2xl px-5 py-5 my-9" style={{ background: '#FBF1E6', border: '1px solid #EBD9C3' }}>
            <h2 className="font-medium mb-2" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
              {s.kdyNe.nadpis}
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{s.kdyNe.text}</p>
          </div>

          <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
            Časté dotazy
          </h2>
          <div className="flex flex-col gap-5">
            {s.faq.map((q) => (
              <div key={q.otazka}>
                <h3 className="font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{q.otazka}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{q.odpoved}</p>
              </div>
            ))}
          </div>

          {(funkce.length > 0 || clanky.length > 0) && (
            <div className="rounded-2xl px-5 py-5 mt-10" style={{ border: '1px solid var(--border-cool)', background: '#fff' }}>
              <div className="text-[11px] font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--text-light)' }}>
                Souvislosti
              </div>
              <div className="flex flex-col gap-2">
                {funkce.map((f) => (
                  <Link key={f.slug} href={`/funkce/${f.slug}`} className="underline underline-offset-2" style={{ color: 'var(--teal-900)' }}>
                    Funkce: {f.nadpis}
                  </Link>
                ))}
                {clanky.map((c) => (
                  <Link key={c.slug} href={`/blog/${c.slug}`} className="underline underline-offset-2" style={{ color: 'var(--teal-900)' }}>
                    Článek: {c.nadpis}
                  </Link>
                ))}
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
              Další srovnání
            </h2>
            <div className="flex flex-col gap-3">
              {souvisi.map((x) => (
                <Link
                  key={x.slug}
                  href={`/srovnani/${x.slug}`}
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
