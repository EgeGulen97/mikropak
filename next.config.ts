import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
    localPatterns: [
      {
        pathname: "/images/hero/**",
        search: "",
      },
      {
        pathname: "/images/**",
        search: "",
      },
      {
        pathname: "/images/machines/ureticiler.png",
        search: "",
      },
      {
        pathname: "/images/machines/ureticiler.png",
        search: "?v=3",
      },
      {
        pathname: "/images/machines/ureticiler.png",
        search: "v=3",
      },
    ],
  },
};

export default nextConfig;
