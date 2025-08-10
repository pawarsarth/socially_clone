import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Ignore Windows protected folders
    config.watchOptions = {
      ignored: [
        "**/node_modules/**",
        "C:/Users/JAY MALHAR/Application Data/**",
      ],
    };
    return config;
  },
};

export default nextConfig;
