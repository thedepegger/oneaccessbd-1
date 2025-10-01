import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER],
      },
    },
  },
};

// Avoid overriding Vercel's trace root; it caused duplicated work paths during deploy.
if (!process.env.VERCEL) {
  nextConfig.outputFileTracingRoot = path.resolve(__dirname, "../../");
}

export default nextConfig;
// Orchids restart: 1758911537899
