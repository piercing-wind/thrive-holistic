/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
   //  basePath: isProduction ? '/thrive-holistic' : '',
    output: 'export',
    trailingSlash: true, 
    assetPrefix: isProduction ? 'https://thriveholistic.in' : '',
};



export default nextConfig;
