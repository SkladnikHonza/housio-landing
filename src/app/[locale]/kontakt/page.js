import { getTranslations } from 'next-intl/server'
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
    alternates: { canonical: url },
    // og:url musí ukazovat na /kontakt, ne na homepage (jinak náhled sdílení odkazuje jinam).
    openGraph: { url, title: `${t('title')} · Kontakt` },
  }
}

export default function KontaktPage() {
  return (
    <main>
      <Kontakt />
      <Footer />
    </main>
  )
}
