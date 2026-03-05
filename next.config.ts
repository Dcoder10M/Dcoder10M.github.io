import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // skip strict mode
  reactStrictMode: false,
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  env: {
    googleAnalyticsId: process.env.NODE_ENV === "production" ? process.env.GA_MEASUREMENT_ID : "",
  }
};

export default nextConfig;
