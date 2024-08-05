/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mediacdn1.bibomart.net',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'media.bibomart.net',
        port: '',
        pathname: '/file/uploads/**',
      },
    ],
  },
};

export default nextConfig;
