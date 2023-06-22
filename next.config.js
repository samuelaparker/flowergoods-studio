/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,

  experimental: {
    concurrentFeatures: true,
  },
};

module.exports = nextConfig;
