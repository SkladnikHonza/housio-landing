import { Inter, Inter_Tight } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Nav from '@/components/Nav'
import AnalyticsTracker from '@/components/AnalyticsTracker'
import '../globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter-tight',
  display: 'swap',
})

// Generuje statické stránky pro každý jazyk při buildu
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// Dynamicky generované metadata pro každý jazyk
export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  
  return {
    metadataBase: new URL('https://housio.app'),
    title: t('title'),
    description: t('description'),
    openGraph: {
      type: 'website',
      locale: ({ cs: 'cs_CZ', en: 'en_US', de: 'de_DE', it: 'it_IT', es: 'es_ES', uk: 'uk_UA', ru: 'ru_RU', fr: 'fr_FR' })[locale] || 'en_US',
      url: `https://housio.app${locale === 'cs' ? '' : '/' + locale}`,
      title: t('title'),
      description: t('description'),
      siteName: 'Housio',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: t('title') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.png'],
    },
    icons: {
      icon: [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png', sizes: '32x32' }],
      apple: '/apple-icon.png',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
      canonical: `https://housio.app${locale === 'cs' ? '' : '/' + locale}`,
      languages: {
        'cs': 'https://housio.app',
        'en': 'https://housio.app/en',
        'de': 'https://housio.app/de',
        'it': 'https://housio.app/it',
        'es': 'https://housio.app/es',
        'uk': 'https://housio.app/uk',
        'ru': 'https://housio.app/ru',
        'fr': 'https://housio.app/fr'
      },
    },
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  
  setRequestLocale(locale)

  // Strukturovaná data pro Google (JSON-LD): firma + aplikace + ceny.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Housio',
        url: 'https://housio.app',
        logo: 'https://housio.app/icon.png',
        sameAs: ['https://instagram.com/housio.app', 'https://facebook.com/housioapp'],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Housio',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://housio.app',
        offers: [
          { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'CZK' },
          { '@type': 'Offer', name: 'Basic', price: '299', priceCurrency: 'CZK' },
          { '@type': 'Offer', name: 'Pro', price: '599', priceCurrency: 'CZK' },
          { '@type': 'Offer', name: 'Business', price: '999', priceCurrency: 'CZK' },
        ],
      },
    ],
  }

  return (
    <html lang={locale} className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <NextIntlClientProvider>
          <AnalyticsTracker />
          <Nav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
