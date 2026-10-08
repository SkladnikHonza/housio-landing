import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { adresa, BASE, NAHLED } from '@/lib/seo'
import { CLANKY, SLUGY, clanekPodleSlug, nazevTematu } from '@/clanky'
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
      section: nazevTematu(clanek.tema),
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
  const tema = nazevTematu(clanek.tema)

  // Dalsi cteni: nejdriv ze stejneho tematu, pak cokoli dalsiho — at ctenar
  // neskonci ve slepe ulicce a vyhledavac vidi, ktere stranky spolu souvisi.
  const dalsi = [
    ...CLANKY.filter((c) => c.slug !== clanek.slug && c.tema === clanek.tema),
    ...CLANKY.filter((c) => c.slug !== clanek.slug && c.tema !== clanek.tema),
  ].slice(0, 3)

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
        articleSection: tema,
        timeRequired: `PT${clanek.minut}M`,
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
      // Caste dotazy ze zavera clanku. Google je umi zobrazit primo ve vysledku
      // hledani jako rozbalovaci otazky — proto je ma kazdy clanek.
      ...(clanek.faq?.length
        ? [{
          '@type': 'FAQPage',
          mainEntity: clanek.faq.map((d) => ({
            '@type': 'Question',
            name: d.otazka,
            acceptedAnswer: { '@type': 'Answer', text: d.odpoved },
          })),
        }]
        : []),
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article id="zacatek" className="px-6 pt-14 pb-16 scroll-mt-20" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-2xl mx-auto">
          {/* Drobecky slouzily jen jako popisek cesty — sedy text, ktery nikdo
              necte jako odkaz. Sipka z prvniho clanku dela zjevne tlacitko
              zpet; druhy odkaz vede rovnou na to tema v rozcestniku. */}
          <nav className="flex flex-wrap items-center gap-2 text-sm mb-6" style={{ color: 'var(--text-light)' }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-medium hover:underline"
              style={{ color: 'var(--teal-900)' }}
            >
              <span aria-hidden="true">←</span> Průvodce pronájmem
            </Link>
            <span>·</span>
            <Link href={`/blog#${clanek.tema}`} className="hover:underline" style={{ color: 'var(--teal-900)' }}>{tema}</Link>
          </nav>

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

          {/* Po sedmi minutach cteni je rozcestnik dve obrazovky nahore.
              Odkaz zpet patri i sem, at se ctenar nemusi vracet scrollovanim. */}
          <div className="mt-10 pt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ borderTop: '1px solid var(--border-warm)' }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-medium hover:underline"
              style={{ color: 'var(--teal-900)' }}
            >
              <span aria-hidden="true">←</span> Zpět na průvodce
            </Link>
            <Link href={`/blog#${clanek.tema}`} className="hover:underline" style={{ color: 'var(--teal-900)' }}>
              Další z tématu {tema}
            </Link>
            <a href="#zacatek" className="hover:underline" style={{ color: 'var(--teal-900)' }}>
              <span aria-hidden="true">↑</span> Zpět na obsah
            </a>
          </div>
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
                <div className="text-xs mb-1" style={{ color: 'var(--text-light)' }}>{nazevTematu(c.tema)}</div>
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
