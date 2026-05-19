import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'

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

export const metadata = {
  metadataBase: new URL('https://housio.app'),
  title: 'Housio — Správa nemovitostí. Jednoduše.',
  description: 'SaaS pro pronajímatele v Česku a EU. Sleduj nájemníky, platby, smlouvy a cash flow z jednoho místa. Bez Excelu, bez chaosu. V češtině. 14 dní zdarma.',
  keywords: [
    'správa nemovitostí',
    'pronájem bytu',
    'pronajímatel',
    'nájemníci software',
    'správa pronájmů',
    'cash flow nemovitosti',
    'evidence nájemníků',
    'realitní software',
    'property management',
    'housio',
  ],
  authors: [{ name: 'Housio' }],
  creator: 'Housio',
  publisher: 'Housio',
  
  // Open Graph - Facebook, LinkedIn, WhatsApp, atd.
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://housio.app',
    title: 'Housio — Správa nemovitostí. Jednoduše.',
    description: 'SaaS pro pronajímatele v Česku a EU. Sleduj nájemníky, platby, smlouvy a cash flow z jednoho místa. 14 dní zdarma.',
    siteName: 'Housio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Housio — Správa nemovitostí. Jednoduše.',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Housio — Správa nemovitostí. Jednoduše.',
    description: 'SaaS pro pronajímatele v Česku a EU. Bez Excelu, bez chaosu.',
    images: ['/og-image.png'],
  },
  
  // Favicon a icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verifikace (přidáš později pokud potřeba)
  // verification: {
  //   google: 'google-site-verification-code',
  // },
  
  // Canonical URL
  alternates: {
    canonical: 'https://housio.app',
    languages: {
      'cs-CZ': 'https://housio.app',
      // 'en-US': 'https://housio.app/en',  // až bude multi-lang
      // 'de-DE': 'https://housio.app/de',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={`${inter.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  )
}
