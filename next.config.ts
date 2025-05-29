import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  experimental: {
      serverComponentsHmrCache: false,
      serverActions: {
        bodySizeLimit: '50mb',
      },
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.ru1.storage.beget.cloud',
          port: '',
          pathname: '/**',
          search: '',
        },
      ],
    },
};

export default nextConfig;
