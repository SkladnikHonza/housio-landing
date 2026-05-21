import { Inter, Inter_Tight } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Nav from '@/components/Nav'
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
      locale: locale === 'cs' ? 'cs_CZ' : locale === 'en' ? 'en_US' : locale === 'de' ? 'de_DE' : locale === 'it' ? 'it_IT' : 'es_ES',
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

  return (
    <html lang={locale} className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <NextIntlClientProvider>
          <Nav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
