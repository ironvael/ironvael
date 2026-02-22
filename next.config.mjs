/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  // Disable static optimization to avoid prerender issues during migration
};

export default nextConfig;
