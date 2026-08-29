import { setRequestLocale, getTranslations } from 'next-intl/server'
import { faqJsonLd } from '@/lib/seo'
import Hero from '@/components/Hero'
import NovinkaGooglePlay from '@/components/NovinkaGooglePlay'
import EuropeMap from '@/components/EuropeMap'
import Pricing from '@/components/Pricing'
import Features from '@/components/Features'
import Personae from '@/components/Personae'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default async function Home({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  // Nejčastější dotazy dostane Google i strukturovaně, nejen jako text na stránce.
  const t = await getTranslations({ locale, namespace: 'faq' })
  const faq = faqJsonLd(t)

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Hero />
      <NovinkaGooglePlay />
      <EuropeMap />
      <Pricing />
      <Features />
      <Personae />
      <FAQ />
      <Footer />
    </main>
  )
}
