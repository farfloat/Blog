/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    domains: [process.env.NEXT_PUBLIC_DELIVERY_URL],
  },
};

module.exports = nextConfig;
