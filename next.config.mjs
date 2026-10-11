import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js')

// Bezpečnostní hlavičky. Vědomě tu NENÍ Content-Security-Policy: stránky mají
// styly psané přímo v atributu style, takže by je striktní CSP rozbila. Tohle je
// sada, která nic nerozbíjí a přitom uzavře klikací pasti, čmuchání typu obsahu
// a odesílání plné adresy do cizích webů.
const bezpecnostniHlavicky = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Kořen projektu natvrdo. Na ploše leží starý package-lock.json z jiného
  // pokusu a Turbopack kvůli němu nevěděl, odkud má rozlišovat balíčky —
  // build padal na „Cannot find module '@tailwindcss/postcss'", přestože
  // balíček nainstalovaný byl. Next na to sám upozorňoval ve varování.
  turbopack: { root: import.meta.dirname },
  // Stránka o jazycích se přejmenovala z „deset-jazyku" na „jazykove-verze",
  // protože původní adresa zastarala ve chvíli, kdy přibyla slovenština.
  // Stará adresa je v sitemapě od 5. 10. a Google ji zná, proto trvalé
  // přesměrování místo 404.
  async redirects() {
    return [
      { source: '/funkce/deset-jazyku', destination: '/funkce/jazykove-verze', permanent: true },
    ]
  },

  async headers() {
    return [{ source: '/(.*)', headers: bezpecnostniHlavicky }]
  },
}

export default withNextIntl(nextConfig)
