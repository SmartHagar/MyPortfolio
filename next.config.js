/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "export",
  images: {
    domains: ["127.0.0.1", "back.smarttamalonggehe.my.id"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
