/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxyy/:path*',
        destination: 'http://49.50.77.87:8000/:path*',
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '49.50.77.87',
        port: '8000',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
