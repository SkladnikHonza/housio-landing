import { getTranslations } from 'next-intl/server'
import Bezpecnost from '@/components/Bezpecnost'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'security' })
  const prefix = locale === 'cs' ? '' : `/${locale}`
  const url = `https://housio.app${prefix}/bezpecnost`
  return {
    title: `${t('badge')} · Housio`,
    description: t('subtitle'),
    alternates: { canonical: url },
    openGraph: { url, title: `${t('badge')} · Housio`, description: t('subtitle') },
  }
}

export default function BezpecnostPage() {
  return (
    <main>
      <Bezpecnost />
      <Footer />
    </main>
  )
}
