/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This enables static export
  basePath: '/profile', // Always use this path (no conditional needed)
  assetPrefix: '/profile/', // Always use this prefix
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    unoptimized: true // Still needed for static export
  },
  // Add if deploying to project site (username.github.io/repo-name)
  // basePath: '/repo-name',
  trailingSlash: true,  // Recommended for GitHub Pages
}

export default nextConfig
