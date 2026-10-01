import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { adresa, BASE, NAHLED } from '@/lib/seo'
import { CLANKY, SLUGY, clanekPodleSlug } from '@/clanky'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return SLUGY.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const clanek = clanekPodleSlug(slug)
  if (!clanek) return {}

  const titulek = `${clanek.nadpis} · Housio`
  const url = `${BASE}/blog/${clanek.slug}`
  return {
    title: titulek,
    description: clanek.perex,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      siteName: 'Housio',
      locale: 'cs_CZ',
      url,
      title: titulek,
      description: clanek.perex,
      publishedTime: clanek.datum,
      images: [{ ...NAHLED, alt: clanek.nadpis }],
    },
    twitter: { card: 'summary_large_image', title: titulek, description: clanek.perex, images: [NAHLED.url] },
  }
}

export default async function ClanekPage({ params }) {
  const { locale, slug } = await params
  if (locale !== 'cs') notFound()
  const clanek = clanekPodleSlug(slug)
  if (!clanek) notFound()
  setRequestLocale(locale)

  const { Obsah } = clanek
  const url = `${BASE}/blog/${clanek.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: clanek.nadpis,
        description: clanek.perex,
        datePublished: clanek.datum,
        dateModified: clanek.datum,
        inLanguage: 'cs',
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: { '@type': 'Organization', name: 'Housio', url: adresa('cs') },
        publisher: {
          '@type': 'Organization',
          name: 'Housio',
          legalName: 'US Europe Group s.r.o.',
          url: adresa('cs'),
          logo: { '@type': 'ImageObject', url: `${BASE}/icon.png` },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Housio', item: adresa('cs') },
          { '@type': 'ListItem', position: 2, name: 'Průvodce pronájmem', item: `${BASE}/blog` },
          { '@type': 'ListItem', position: 3, name: clanek.nadpis, item: url },
        ],
      },
    ],
  }

  // Dalsi cteni — dva nasledujici clanky v porradi, at ctenar neskonci ve slepe ulicce.
  const dalsi = CLANKY.filter((c) => c.slug !== clanek.slug).slice(0, 2)

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="px-6 pt-16 pb-16" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-block text-sm mb-6 hover:underline" style={{ color: 'var(--teal-900)' }}>
            ← Průvodce pronájmem
          </Link>

          <h1
            className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-3"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}
          >
            {clanek.nadpis}
          </h1>
          <p className="text-sm mb-10" style={{ color: 'var(--text-light)' }}>
            {clanek.minut} min čtení
          </p>

          <Obsah />
        </div>
      </article>

      <section className="px-6 py-14" style={{ background: 'var(--bg-clean)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold tracking-wider uppercase mb-5" style={{ color: 'var(--text-light)' }}>
            Další návody
          </h2>
          <div className="flex flex-col gap-3">
            {dalsi.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/${c.slug}`}
                className="block rounded-2xl px-5 py-5 transition hover:shadow-md"
                style={{ border: '1px solid var(--border-cool)', background: 'var(--bg-warm)' }}
              >
                <div className="font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{c.nadpis}</div>
                <div className="text-sm leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{c.perex}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
