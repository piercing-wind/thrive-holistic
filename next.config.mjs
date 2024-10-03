/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    basePath: isProduction ? '/thrive-holistic' : '',
    output: 'export',
    trailingSlash: true, 
    assetPrefix: isProduction ? 'https://piercing-wind.github.io/thrive-holistic/' : '',
};



export default nextConfig;
