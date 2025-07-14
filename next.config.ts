import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local.benrogo.net"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
