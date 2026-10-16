import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.isaiahhub\\.com" }],
        destination: "https://isaiahhub.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
