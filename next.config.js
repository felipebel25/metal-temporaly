/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "sam-green.com",
      "127.0.0.1:8000",
      "127.0.0.1",
      "localhost:3006",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
