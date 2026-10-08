import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { adresa, BASE, NAHLED } from '@/lib/seo'
import { CLANKY, TEMATA, clankyTematu } from '@/clanky'
import Footer from '@/components/Footer'

const NAZEV = 'Průvodce pronájmem'
const POPIS = 'Praktické návody pro pronajímatele bytů — nájemné, smlouvy, kauce, výpověď, daně a vyúčtování služeb. Podle české úpravy, se spočítanými příklady a bez právnické hantýrky.'

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
      articleSection: c.tema,
      url: `${BASE}/blog/${c.slug}`,
    })),
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-6 pt-20 pb-12" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {NAZEV}
          </h1>
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--olive-dark)' }}>
            {POPIS}
          </p>

          {/* Rozcestnik po tematech.
              DRIV to byly „bublinky" ruzne sirky zalamovane do dvou radku —
              vypadalo to jako shluk stitku, ne jako obsah knihy. Mrizka
              stejne sirokych karet drzi radky i sloupce zarovnane a vejde se
              do ni i popis, takze ctenar pozna, co pod tematem najde,
              jeste nez klikne. */}
          <nav aria-label="Témata průvodce" className="grid gap-3 sm:grid-cols-2">
            {TEMATA.map((t) => {
              const pocet = clankyTematu(t.id).length
              if (!pocet) return null
              return (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="group flex flex-col rounded-2xl px-5 py-4 transition hover:shadow-md"
                  style={{ background: '#fff', border: '1px solid var(--border-cool)' }}
                >
                  <span className="flex items-baseline justify-between gap-3 mb-1">
                    <span className="font-medium leading-snug" style={{ color: 'var(--teal-900)' }}>
                      {t.nazev}
                    </span>
                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums"
                      style={{ background: 'var(--bg-warm)', color: 'var(--text-light)' }}
                    >
                      {pocet}
                    </span>
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
                    {t.popis}
                  </span>
                </a>
              )
            })}
          </nav>
        </div>
      </section>

      {TEMATA.map((tema, i) => {
        const clanky = clankyTematu(tema.id)
        if (!clanky.length) return null
        return (
          <section
            key={tema.id}
            id={tema.id}
            className="px-6 py-14 scroll-mt-20"
            style={{ background: i % 2 === 0 ? 'var(--bg-clean)' : 'var(--bg-warm)' }}
          >
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-medium leading-tight tracking-tight mb-2"
                style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
              >
                {tema.nazev}
              </h2>
              <p className="leading-relaxed mb-7" style={{ color: 'var(--olive-dark)' }}>{tema.popis}</p>

              <div className="flex flex-col gap-3">
                {clanky.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/blog/${c.slug}`}
                    className="block rounded-2xl px-6 py-6 transition hover:shadow-md"
                    style={{
                      background: i % 2 === 0 ? 'var(--bg-warm)' : 'var(--bg-clean)',
                      border: '1px solid var(--border-cool)',
                    }}
                  >
                    <h3
                      className="text-xl font-medium leading-snug mb-2"
                      style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.01em' }}
                    >
                      {c.nadpis}
                    </h3>
                    <p className="leading-relaxed mb-3" style={{ color: 'var(--olive-dark)' }}>{c.perex}</p>
                    <span className="text-sm" style={{ color: 'var(--text-light)' }}>{c.minut} min čtení</span>
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
