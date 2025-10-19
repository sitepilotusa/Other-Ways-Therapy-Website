import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/areas-we-serve/golden",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
