import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a minimal, self-contained server build for Docker production images.
  output: "standalone",
};

export default nextConfig;
