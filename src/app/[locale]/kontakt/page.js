import { alternatesProStranku, drobeckyJsonLd } from '@/lib/seo'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Kontakt from '@/components/Kontakt'
import Footer from '@/components/Footer'

// Vlastní metadata kontaktní stránky (dřív dědila homepage -> Google ji bral jako duplikát).
export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  const tn = await getTranslations({ locale, namespace: 'nav' })
  const prefix = locale === 'cs' ? '' : `/${locale}`
  const url = `https://www.housio.app${prefix}/kontakt`
  // Slovo "Kontakt" bylo v titulku česky i pro cizí jazyky — bereme ho z překladu nabídky.
  const titulek = `${t('title')} · ${tn('contact')}`
  return {
    title: titulek,
    alternates: alternatesProStranku(locale, '/kontakt'),
    // og:url musí ukazovat na /kontakt, ne na homepage (jinak náhled sdílení odkazuje jinam).
    openGraph: { url, title: titulek },
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
