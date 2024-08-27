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
        hostname: 'mediacdn1.bibomart.net',
        port: '',
        pathname: '/getfile/UploadFileTK/**',
      },
      {
        protocol: 'https',
        hostname: 'media.bibomart.net',
        port: '',
        pathname: '/file/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.concung.com',
        port: '',
        pathname: '/img/adds/2024/08/**',
      },
    ],
  },
};

export default nextConfig;
