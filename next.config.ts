import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    qualities: [70, 75, 80, 85, 90],
  },

  eslint: {
    ignoreDuringBuilds: true, // 👈 prevents build failures due to lint
  },
};

export default nextConfig;