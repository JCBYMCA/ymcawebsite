/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'http://priyanshuverma.tech/:path*',
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig
