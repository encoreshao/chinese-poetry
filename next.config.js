/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.githubusercontent.com',
        },
      ],
    },
  },
}

module.exports = nextConfig
