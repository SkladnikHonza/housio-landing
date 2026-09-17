import { alternatesProStranku, drobeckyJsonLd } from '@/lib/seo'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Partneri from '@/components/Partneri'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  const tp = await getTranslations({ locale, namespace: 'partneri' })
  const prefix = locale === 'cs' ? '' : `/${locale}`
  const url = `https://www.housio.app${prefix}/partneri`
  // Titulek i popisek v jazyce stránky — dřív se i cizincům ukazovala čeština.
  const titulek = `${t('title')} · ${tp('navLink')}`
  return {
    title: titulek,
    description: tp('metaDescription'),
    alternates: alternatesProStranku(locale, '/partneri'),
    openGraph: { url, title: titulek, description: tp('metaDescription') },
  }
}

export default async function PartneriPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  // Drobečky pro Google: ve výsledku hledání se ukáže cesta místo holé adresy.
  const t = await getTranslations({ locale, namespace: 'partneri' })
  const drobecky = drobeckyJsonLd(locale, '/partneri', t('navLink'))

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(drobecky) }} />
      <Partneri />
      <Footer />
    </main>
  )
}
