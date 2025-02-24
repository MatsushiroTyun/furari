import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ];
  },
  transpilePackages: ['@aws-amplify/ui-react'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
