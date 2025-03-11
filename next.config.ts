import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  basePath: "/suzette", // Replace with your GitHub repo name
  assetPrefix: "/suzette", // Ensures assets load correctly
  images: {
    unoptimized: true, // Disables image optimization (not supported in static exports)
  },
};

export default nextConfig;
