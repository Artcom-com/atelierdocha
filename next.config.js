/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.atelierdocha.com/',
      },
    ];
  },
};

module.exports = nextConfig;
