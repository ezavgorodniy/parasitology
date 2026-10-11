import type { NextConfig } from "next";

// GitHub Pages serves the site from a sub-path (/parasitology), so the base path
// is injected at build time. Locally and on a plain server it stays at the root.
const basePath: string = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export: `next build` produces plain HTML/CSS/JS in ./out
  output: "export",
  basePath,
  // Emit /parasites/foo/index.html so static hosts resolve URLs without rewrites
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
