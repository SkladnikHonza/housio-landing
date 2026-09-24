import { alternatesProStranku, drobeckyJsonLd } from '@/lib/seo'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import SmazaniUctu from '@/components/SmazaniUctu'
import Footer from '@/components/Footer'

// Google Play vyzaduje verejne dostupnou adresu, kde uzivatel muze pozadat
// o smazani uctu a dat, bez instalace aplikace (formular „Zabezpeceni udaju").
export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  const ts = await getTranslations({ locale, namespace: 'smazaniUctu' })
  const prefix = locale === 'cs' ? '' : `/${locale}`
  const url = `https://www.housio.app${prefix}/smazani-uctu`
  const titulek = `${t('title')} · ${ts('navLink')}`
  return {
    title: titulek,
    description: ts('metaDescription'),
    alternates: alternatesProStranku(locale, '/smazani-uctu'),
    openGraph: { url, title: titulek, description: ts('metaDescription') },
  }
}

export default async function SmazaniUctuPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'smazaniUctu' })
  const drobecky = drobeckyJsonLd(locale, '/smazani-uctu', t('navLink'))

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(drobecky) }} />
      <SmazaniUctu />
      <Footer />
    </main>
  )
}
