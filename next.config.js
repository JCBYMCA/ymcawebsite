/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'http://49.50.77.87:8888/:path*',
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
