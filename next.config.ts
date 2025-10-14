import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        source: "/nukitashi-1",
        destination: "/videos/nukitashi-1",
        permanent: true,
      },
      {
        source: "/nukitashi-2",
        destination: "/videos/nukitashi-2",
        permanent: true,
      },
      {
        source: "/nukitashi-3",
        destination: "/videos/nukitashi-3",
        permanent: true,
      },
      {
        source: "/nukitashi-4",
        destination: "/videos/nukitashi-4",
        permanent: true,
      },
      {
        source: "/nukitashi-5",
        destination: "/videos/nukitashi-5",
        permanent: true,
      },
      {
        source: "/nukitashi-6",
        destination: "/videos/nukitashi-6",
        permanent: true,
      },
      {
        source: "/nukitashi-7",
        destination: "/videos/nukitashi-7",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
