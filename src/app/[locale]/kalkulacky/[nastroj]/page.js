import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { adresa, BASE, NAHLED } from '@/lib/seo'
import { KALKULACKY, SLUGY, kalkulackaPodleSlug } from '@/kalkulacky'
import { clanekPodleSlug } from '@/clanky'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return SLUGY.map((nastroj) => ({ nastroj }))
}

export async function generateMetadata({ params }) {
  const { nastroj } = await params
  const k = kalkulackaPodleSlug(nastroj)
  if (!k) return {}
  const titulek = `${k.nadpis} · Housio`
  const url = `${BASE}/kalkulacky/${k.slug}`
  return {
    title: titulek,
    description: k.perex,
    alternates: { canonical: url },
    openGraph: {
      type: 'website', siteName: 'Housio', locale: 'cs_CZ',
      url, title: titulek, description: k.perex, images: [{ ...NAHLED, alt: k.nadpis }],
    },
    twitter: { card: 'summary_large_image', title: titulek, description: k.perex, images: [NAHLED.url] },
  }
}

export default async function KalkulackaPage({ params }) {
  const { locale, nastroj } = await params
  if (locale !== 'cs') notFound()
  const k = kalkulackaPodleSlug(nastroj)
  if (!k) notFound()
  setRequestLocale(locale)

  const { Komponenta } = k
  const url = `${BASE}/kalkulacky/${k.slug}`
  const clanek = clanekPodleSlug(k.clanek)
  const dalsi = KALKULACKY.filter((x) => x.slug !== k.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: k.nadpis,
        description: k.perex,
        url,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        inLanguage: 'cs',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'CZK' },
        publisher: { '@type': 'Organization', name: 'Housio', url: adresa('cs') },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Housio', item: adresa('cs') },
          { '@type': 'ListItem', position: 2, name: 'Kalkulačky', item: `${BASE}/kalkulacky` },
          { '@type': 'ListItem', position: 3, name: k.nadpis, item: url },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-6 pt-14 pb-16" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-2xl mx-auto">
          <Link href="/kalkulacky" className="inline-block text-sm mb-6 hover:underline" style={{ color: 'var(--teal-900)' }}>
            ← Kalkulačky
          </Link>

          <h1
            className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {k.nadpis}
          </h1>
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--olive-dark)' }}>{k.uvod}</p>

          <div className="rounded-2xl bg-white p-6 md:p-8 mb-12" style={{ border: '1px solid var(--border-cool)', boxShadow: '0 1px 3px rgba(31,78,95,0.06)' }}>
            <Komponenta />
          </div>

          {k.vysvetleni.map((v) => (
            <div key={v.nadpis} className="mb-7">
              <h2 className="text-xl font-medium mb-2" style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}>
                {v.nadpis}
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{v.text}</p>
            </div>
          ))}

          {clanek && (
            <div className="rounded-2xl px-5 py-5 my-8" style={{ background: '#E9F3F0', border: '1px solid #CFE3DC' }}>
              <div className="text-[11px] font-semibold tracking-wider uppercase mb-2" style={{ color: 'var(--teal-900)', opacity: 0.75 }}>
                Souvislosti
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
                Celý postup i to, co s výsledkem dál, rozebírá článek{' '}
                <Link href={`/blog/${clanek.slug}`} className="underline underline-offset-2" style={{ color: 'var(--teal-900)' }}>
                  {clanek.nadpis}
                </Link>.
              </p>
            </div>
          )}

          <p className="text-sm leading-relaxed mt-10 pt-5" style={{ color: 'var(--text-light)', borderTop: '1px solid var(--border-warm)' }}>
            <strong>Opřeno o:</strong> {k.zdroje.join(' · ')}. Výpočet běží přímo v prohlížeči, nic se nikam neodesílá.
            Jde o praktickou pomůcku, ne o právní ani daňové poradenství — u konkrétního případu se poraď s advokátem či daňovým poradcem.
          </p>
        </div>
      </section>

      <section className="px-6 py-14" style={{ background: 'var(--bg-clean)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold tracking-wider uppercase mb-5" style={{ color: 'var(--text-light)' }}>Další kalkulačky</h2>
          <div className="flex flex-col gap-3">
            {dalsi.map((x) => (
              <Link
                key={x.slug}
                href={`/kalkulacky/${x.slug}`}
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

      <Footer />
    </main>
  )
}
