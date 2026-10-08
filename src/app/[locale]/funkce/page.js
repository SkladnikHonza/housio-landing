import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { adresa, BASE, openGraphStranky, twitterStranky } from '@/lib/seo'
import { SKUPINY, FUNKCE, funkcePodleSlug, PLANY } from '@/funkce'
import Footer from '@/components/Footer'

const TITULEK = 'Co Housio umí · Housio'
const POPIS = 'Evidence nemovitostí a nájemníků, smlouvy, platby, výdaje, vyúčtování služeb, potvrzení o kauci, export do Excelu — všech 26 funkcí Housia popsaných jednotlivě.'

export async function generateMetadata() {
  const url = `${BASE}/funkce`
  return {
    title: TITULEK,
    description: POPIS,
    alternates: { canonical: url },
    openGraph: openGraphStranky({ locale: 'cs', cesta: '/funkce', title: TITULEK, description: POPIS }),
    twitter: twitterStranky({ title: TITULEK, description: POPIS }),
  }
}

export default async function FunkcePage({ params }) {
  const { locale } = await params
  if (locale !== 'cs') notFound()
  setRequestLocale(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Funkce Housia',
        itemListElement: FUNKCE.map((f, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: f.nadpis,
          url: `${BASE}/funkce/${f.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Housio', item: adresa('cs') },
          { '@type': 'ListItem', position: 2, name: 'Funkce', item: `${BASE}/funkce` },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-6 pt-14 pb-12" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            Co Housio umí
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
            {FUNKCE.length} funkcí, každá popsaná zvlášť — k čemu je, jak funguje a kde jsou její hranice.
            Píšeme sem jen to, co aplikace opravdu umí; co se teprve chystá, tu nenajdete.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {SKUPINY.map((s) => (
            <div key={s.klic}>
              <h2
                className="text-xl font-medium mb-1"
                style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
              >
                {s.nazev}
              </h2>
              <p className="text-sm mb-5" style={{ color: 'var(--text-light)' }}>{s.popis}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                {s.slugy.map(funkcePodleSlug).map((f) => (
                  <Link
                    key={f.slug}
                    href={`/funkce/${f.slug}`}
                    className="block rounded-2xl px-5 py-5 transition hover:shadow-md"
                    style={{ border: '1px solid var(--border-cool)', background: '#fff' }}
                  >
                    <div className="font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{f.nadpis}</div>
                    <div className="text-sm leading-relaxed mb-3" style={{ color: 'var(--olive-dark)' }}>{f.perex}</div>
                    <div className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: 'var(--text-light)' }}>
                      {PLANY[f.plan]}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14" style={{ background: 'var(--bg-clean)' }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl font-medium mb-2"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
          >
            Ještě se rozhodujete?
          </h2>
          <p className="leading-relaxed mb-5" style={{ color: 'var(--olive-dark)' }}>
            Seznam funkcí odpovídá na otázku „co to umí“. Na tu druhou — jestli to vůbec potřebujete —
            je lepší srovnání s Excelem, účetním programem a správou přes realitní kancelář. Včetně toho,
            kdy se aplikace nevyplatí.
          </p>
          <Link
            href="/srovnani"
            className="inline-block rounded-xl px-5 py-3 font-medium"
            style={{ background: 'var(--teal-900)', color: '#fff' }}
          >
            Srovnání a výběr
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
