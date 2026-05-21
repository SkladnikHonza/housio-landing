import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/Hero'
import EuropeMap from '@/components/EuropeMap'
import Pricing from '@/components/Pricing'
import Features from '@/components/Features'
import Personae from '@/components/Personae'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default async function Home({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <Hero />
      <EuropeMap />
      <Pricing />
      <Features />
      <Personae />
      <FAQ />
      <Footer />
    </main>
  )
}
