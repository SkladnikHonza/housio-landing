import { alternatesProStranku, drobeckyJsonLd } from '@/lib/seo'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Partneri from '@/components/Partneri'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  const prefix = locale === 'cs' ? '' : `/${locale}`
  const url = `https://housio.app${prefix}/partneri`
  return {
    title: `${t('title')} · Partnerský program`,
    description: 'Doporučujte Housio realitním klientům a vydělávejte 20 % z první platby a 10 % opakovaně. Basic zdarma na rok, vlastní přehled výdělků.',
    alternates: alternatesProStranku(locale, '/partneri'),
    openGraph: { url, title: `${t('title')} · Partnerský program` },
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
