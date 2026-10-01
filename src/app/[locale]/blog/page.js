import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { adresa, BASE, NAHLED } from '@/lib/seo'
import { CLANKY } from '@/clanky'
import Footer from '@/components/Footer'

const NAZEV = 'Průvodce pronájmem'
const POPIS = 'Praktické návody pro pronajímatele — nájemné, smlouvy, daně a vyúčtování služeb. Psané podle české úpravy, bez právnické hantýrky.'

// Blog je jen cesky (viz src/clanky/index.js), takze zadne jazykove varianty
// v alternates — jen kanonicka adresa na sebe.
export async function generateMetadata() {
  return {
    title: `${NAZEV} · Housio`,
    description: POPIS,
    alternates: { canonical: `${BASE}/blog` },
    openGraph: {
      type: 'website',
      siteName: 'Housio',
      locale: 'cs_CZ',
      url: `${BASE}/blog`,
      title: `${NAZEV} · Housio`,
      description: POPIS,
      images: [{ ...NAHLED, alt: NAZEV }],
    },
    twitter: { card: 'summary_large_image', title: `${NAZEV} · Housio`, description: POPIS, images: [NAHLED.url] },
  }
}

export default async function BlogPage({ params }) {
  const { locale } = await params
  if (locale !== 'cs') notFound()
  setRequestLocale(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: NAZEV,
    description: POPIS,
    url: `${BASE}/blog`,
    inLanguage: 'cs',
    publisher: { '@type': 'Organization', name: 'Housio', url: adresa('cs') },
    blogPost: CLANKY.map((c) => ({
      '@type': 'BlogPosting',
      headline: c.nadpis,
      description: c.perex,
      datePublished: c.datum,
      url: `${BASE}/blog/${c.slug}`,
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
          <p className="text-lg leading-relaxed mb-12" style={{ color: 'var(--olive-dark)' }}>
            {POPIS}
          </p>

          <div className="flex flex-col gap-3">
            {CLANKY.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/${c.slug}`}
                className="block rounded-2xl bg-white px-6 py-6 transition hover:shadow-md"
                style={{ border: '1px solid var(--border-cool)', boxShadow: '0 1px 3px rgba(31,78,95,0.06)' }}
              >
                <h2
                  className="text-xl md:text-2xl font-medium leading-snug mb-2"
                  style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.01em' }}
                >
                  {c.nadpis}
                </h2>
                <p className="leading-relaxed mb-3" style={{ color: 'var(--olive-dark)' }}>{c.perex}</p>
                <span className="text-sm" style={{ color: 'var(--text-light)' }}>{c.minut} min čtení</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
