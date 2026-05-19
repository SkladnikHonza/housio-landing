import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tady mohou být budoucí konfigurace
}

export default withNextIntl(nextConfig)
