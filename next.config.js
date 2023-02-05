/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
};

module.exports = nextConfig;
