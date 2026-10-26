import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy routes → new pillar pages
      { source: "/cleaning", destination: "/residential", permanent: true },
      { source: "/services", destination: "/residential", permanent: true },
      { source: "/partners", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
