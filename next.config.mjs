// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static export
  images: {
    unoptimized: true, // This allows using images with static export
  },
};

export default nextConfig;