/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dnyvrvurgen90.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'thriveholistic.in',
      },
    ],
  },
  reactStrictMode: true,
  basePath: isProduction ? '/thrive-holistic' : '',
  output: 'export',
  trailingSlash: true,
  assetPrefix: isProduction ? 'https://thriveholistic.in/thrive-holistic/' : '',
};

export default nextConfig;