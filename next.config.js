/**
 * @format
 * @type {import('next').NextConfig}
 */
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const nextConfig = {
  images: {
    domains: [BASE_URL, "127.0.0.1"],
  },
};

module.exports = nextConfig;
