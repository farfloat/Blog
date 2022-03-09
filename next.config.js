/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: [process.env.IMAGE_DOMAIN],
  },
};

module.exports = nextConfig;
