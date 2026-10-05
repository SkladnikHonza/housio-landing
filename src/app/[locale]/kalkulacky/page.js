import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { BASE, NAHLED } from '@/lib/seo'
import { KALKULACKY } from '@/kalkulacky'
import Footer from '@/components/Footer'

const NAZEV = 'Kalkulačky pro pronajímatele'
const POPIS = 'Úrok z kauce podle § 2254, vyúčtování služeb se zákonnými lhůtami, odpisy bytu na 30 let a srovnání paušálu se skutečnými výdaji. Zdarma a bez registrace.'

export async function generateMetadata() {
  return {
    title: `${NAZEV} · Housio`,
    description: POPIS,
    alternates: { canonical: `${BASE}/kalkulacky` },
    openGraph: {
      type: 'website', siteName: 'Housio', locale: 'cs_CZ',
      url: `${BASE}/kalkulacky`, title: `${NAZEV} · Housio`, description: POPIS,
      images: [{ ...NAHLED, alt: NAZEV }],
    },
    twitter: { card: 'summary_large_image', title: `${NAZEV} · Housio`, description: POPIS, images: [NAHLED.url] },
  }
}

export default async function KalkulackyPage({ params }) {
  const { locale } = await params
  if (locale !== 'cs') notFound()
  setRequestLocale(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: NAZEV,
    description: POPIS,
    url: `${BASE}/kalkulacky`,
    itemListElement: KALKULACKY.map((k, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: k.nadpis,
      url: `${BASE}/kalkulacky/${k.slug}`,
    })),
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-6 pt-20 pb-20" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {NAZEV}
          </h1>
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--olive-dark)' }}>{POPIS}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {KALKULACKY.map((k) => (
              <Link
                key={k.slug}
                href={`/kalkulacky/${k.slug}`}
                className="block rounded-2xl bg-white px-6 py-6 transition hover:shadow-md"
                style={{ border: '1px solid var(--border-cool)' }}
              >
                <h2
                  className="text-xl font-medium leading-snug mb-2"
                  style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
                >
                  {k.nadpis}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{k.perex}</p>
              </Link>
            ))}
          </div>

          <p className="text-sm leading-relaxed mt-10" style={{ color: 'var(--text-light)' }}>
            Všechny kalkulačky počítají přímo v prohlížeči — nic se nikam neodesílá a nic se neukládá.
            Podrobnosti k výpočtům najdeš v <Link href="/blog" className="underline" style={{ color: 'var(--teal-900)' }}>průvodci pronájmem</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
