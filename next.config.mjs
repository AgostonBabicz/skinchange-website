/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/skinchange-website',
  assetPrefix: '/skinchange-website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;