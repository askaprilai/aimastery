/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/legacy/:path*',
        destination: '/legacy/:path*',
      },
    ]
  },
}

module.exports = nextConfig
