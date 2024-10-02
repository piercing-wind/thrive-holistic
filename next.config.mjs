/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/thrive-holistic',
    images:{
      loader : 'default',
      path: 'https://piercing-wind.github.io/thrive-holistic/',
      unoptimized: true, 
    },
    output: 'export',
    trailingSlash: true, 
    exportTrailingSlash: true,
    assetPrefix: './',
};

export default nextConfig;
