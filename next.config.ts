import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore Windows protected folders
    config.watchOptions = {
      ignored: [
        "**/node_modules/**",
        "C:/Users/JAY MALHAR/Application Data/**",
      ],
    };
    
    // Add Prisma client to externals
    if (isServer) {
      config.externals = [...(config.externals || []), '@prisma/client'];
    }
    
    return config;
  },
};

export default nextConfig;