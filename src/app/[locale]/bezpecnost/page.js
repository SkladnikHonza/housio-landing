import { alternatesProStranku, drobeckyJsonLd } from '@/lib/seo'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Bezpecnost from '@/components/Bezpecnost'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'security' })
  const prefix = locale === 'cs' ? '' : `/${locale}`
  const url = `https://www.housio.app${prefix}/bezpecnost`
  return {
    title: `${t('badge')} · Housio`,
    description: t('subtitle'),
    alternates: alternatesProStranku(locale, '/bezpecnost'),
    openGraph: { url, title: `${t('badge')} · Housio`, description: t('subtitle') },
  }
}

export default async function BezpecnostPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  // Drobečky pro Google: ve výsledku hledání se ukáže cesta místo holé adresy.
  const t = await getTranslations({ locale, namespace: 'footer' })
  const drobecky = drobeckyJsonLd(locale, '/bezpecnost', t('legalSecurity'))

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(drobecky) }} />
      <Bezpecnost />
      <Footer />
    </main>
  )
}
