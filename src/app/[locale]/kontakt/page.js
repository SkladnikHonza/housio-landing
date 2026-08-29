import { alternatesProStranku, drobeckyJsonLd } from '@/lib/seo'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Kontakt from '@/components/Kontakt'
import Footer from '@/components/Footer'

// Vlastní metadata kontaktní stránky (dřív dědila homepage -> Google ji bral jako duplikát).
export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  const prefix = locale === 'cs' ? '' : `/${locale}`
  const url = `https://housio.app${prefix}/kontakt`
  return {
    title: `${t('title')} · Kontakt`,
    alternates: alternatesProStranku(locale, '/kontakt'),
    // og:url musí ukazovat na /kontakt, ne na homepage (jinak náhled sdílení odkazuje jinam).
    openGraph: { url, title: `${t('title')} · Kontakt` },
  }
}

export default async function KontaktPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  // Drobečky pro Google: ve výsledku hledání se ukáže cesta místo holé adresy.
  const t = await getTranslations({ locale, namespace: 'nav' })
  const drobecky = drobeckyJsonLd(locale, '/kontakt', t('contact'))

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(drobecky) }} />
      <Kontakt />
      <Footer />
    </main>
  )
}
