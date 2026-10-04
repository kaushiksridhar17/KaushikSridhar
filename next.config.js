/** @type {import('next').NextConfig} */

// The site is served from https://kaushiksridhar17.github.io/KaushikSridhar/
// If you rename the repo, change this to "/<new-repo-name>".
// If you rename it to kaushiksridhar17.github.io, set it to "".
const basePath = "/KaushikSridhar";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  optimizeFonts: false,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
