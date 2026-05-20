import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
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
      <Stats />
      <Pricing />
      <Features />
      <Personae />
      <FAQ />
      <Footer />
    </main>
  )
}
