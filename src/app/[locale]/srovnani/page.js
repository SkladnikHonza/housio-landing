import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { adresa, BASE, openGraphStranky, twitterStranky } from '@/lib/seo'
import { SROVNANI } from '@/srovnani'
import Footer from '@/components/Footer'

const TITULEK = 'Aplikace na správu nájmů: jak vybrat a s čím srovnávat · Housio'
const POPIS =
  'Excel, účetní program, realitní kancelář, nebo aplikace? Na co se při výběru dívat, kde je hranice jednotlivých řešení a kdy se žádná aplikace nevyplatí.'

// Kriteria vyberu. Zamerne obecna — plati pro jakoukoli aplikaci, ne jen pro
// nasi. Stranka, ktera na dotaz „nejlepsi aplikace na spravu najmu" odpovi
// jen „my", neni odpoved a nikdo ji neciteuje.
const KRITERIA = [
  {
    nadpis: 'Hlídá termíny, nebo jen ukládá čísla?',
    text: 'Tohle je ten rozdíl, kvůli kterému se evidence vůbec mění. Zapsat platbu umí každá tabulka. Zajímavé je, jestli vám nástroj sám ozve, že za čtrnáct dní končí smlouva, že třetí měsíc nedorazil nájem nebo že propadla revize plynu — a jestli to pošle e-mailem, ne jen červeným puntíkem uvnitř aplikace, do které se týden nepodíváte.',
  },
  {
    nadpis: 'Dostanete data zase ven?',
    text: 'Export do Excelu nebo CSV je pojistka, že neskončíte zamčení. Ptejte se na něj dřív, než začnete zadávat, ne až budete chtít odejít. Stejně tak na to, co se s daty stane po zrušení účtu a jak dlouho se dají stáhnout.',
  },
  {
    nadpis: 'Kdo službu provozuje?',
    text: 'V evidenci nájmu jsou osobní údaje vašich nájemníků, takže nejde o detail. Hledejte IČO, adresu, obchodní podmínky a informaci o tom, kde data leží a kdo je zpracovává. Projekt bez dohledatelného provozovatele je u téhle kategorie software riziko, které nemá smysl podstupovat.',
  },
  {
    nadpis: 'Platí se za to, co doopravdy využijete?',
    text: 'Ceníky se obvykle stupňují podle počtu nemovitostí. Spočítejte si, kolik stojí váš skutečný počet bytů, ne ten plánovaný. A ověřte, co je v nejlevnějším placeném plánu — často právě tam leží hranice mezi „eviduje" a „hlídá".',
  },
  {
    nadpis: 'Jde to z mobilu?',
    text: 'Většina práce kolem pronájmu se neděje u počítače. Odečet měřiče zapisujete ve sklepě, fotku závady děláte v bytě, platbu kontrolujete v tramvaji. Webová aplikace na telefonu stačí jen někdy; vlastní aplikace pro iOS a Android se pozná hned.',
  },
  {
    nadpis: 'Nenahrazuje to účetní?',
    text: 'Aplikace na správu nájmu není účetní program. Nemá dělat daňové přiznání ani DPH — má dodat podklady, se kterými si účetní poradí. Když vám někdo slibuje obojí, čtěte pozorně, co z toho opravdu umí.',
  },
]

export async function generateMetadata() {
  const url = `${BASE}/srovnani`
  return {
    title: TITULEK,
    description: POPIS,
    alternates: { canonical: url },
    openGraph: openGraphStranky({ locale: 'cs', cesta: '/srovnani', title: TITULEK, description: POPIS }),
    twitter: twitterStranky({ title: TITULEK, description: POPIS }),
  }
}

export default async function SrovnaniPage({ params }) {
  const { locale } = await params
  if (locale !== 'cs') notFound()
  setRequestLocale(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Srovnání způsobů správy nájmu',
        itemListElement: SROVNANI.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.nadpis,
          url: `${BASE}/srovnani/${s.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Housio', item: adresa('cs') },
          { '@type': 'ListItem', position: 2, name: 'Srovnání', item: `${BASE}/srovnani` },
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
            Aplikace na správu nájmů: jak vybrat a s čím srovnávat
          </h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--olive-dark)' }}>
            Většina pronajímatelů nehledá software, ale odpověď na otázku, jestli ho vůbec potřebuje. Tahle
            stránka bere vážně obě odpovědi — i tu, že vám stačí tabulka.
          </p>
          <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>
            Konkrétní konkurenční produkty tu nejmenujeme. Jejich ceny a funkce se mění rychleji, než bychom
            stránku stíhali opravovat, a psát o cizím produktu něco, co si nemůžeme ověřit, nemá cenu.
            Srovnáváme proto způsoby práce — ty se za rok nezmění.
          </p>
        </div>
      </section>

      <section className="px-6 pb-14" style={{ background: 'var(--bg-warm)' }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {SROVNANI.map((s) => (
            <Link
              key={s.slug}
              href={`/srovnani/${s.slug}`}
              className="block rounded-2xl px-5 py-5 transition hover:shadow-md"
              style={{ border: '1px solid var(--border-cool)', background: '#fff' }}
            >
              <div className="text-[11px] font-semibold tracking-wider uppercase mb-2" style={{ color: 'var(--text-light)' }}>
                Housio vs {s.protistrana}
              </div>
              <div className="font-medium mb-1" style={{ color: 'var(--teal-900)' }}>{s.nadpis}</div>
              <div className="text-sm leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{s.perex}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-14" style={{ background: 'var(--bg-clean)' }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl font-medium mb-3"
            style={{ color: 'var(--teal-900)', fontFamily: 'var(--font-inter-tight)' }}
          >
            Šest otázek, které rozhodnou
          </h2>
          <p className="leading-relaxed mb-8" style={{ color: 'var(--olive-dark)' }}>
            Platí pro jakoukoli aplikaci, nejen pro tuhle. Když si je projdete dřív, než začnete zkoušet,
            ušetříte si zadávání dat do něčeho, co nakonec stejně opustíte.
          </p>
          <div className="flex flex-col gap-7">
            {KRITERIA.map((k, i) => (
              <div key={k.nadpis}>
                <h3 className="font-medium mb-2" style={{ color: 'var(--teal-900)' }}>
                  {i + 1}. {k.nadpis}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--olive-dark)' }}>{k.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl px-6 py-6 mt-10 text-center" style={{ background: 'var(--teal-900)' }}>
            <p className="mb-4 leading-relaxed" style={{ color: '#E9F3F0' }}>
              Housio si můžete projít podle stejných šesti otázek — jedna nemovitost je zdarma napořád
              a při registraci se nezadává platební karta.
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

      <Footer />
    </main>
  )
}
