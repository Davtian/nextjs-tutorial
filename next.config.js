/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|svg)$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apizinhub.analysed.ai', // Change to your new image domain
      },
    ],
    domains: ["images.pexels.com"],
  },

  reactStrictMode: true, // Disable React Strict Mode
  env: {
    REACT_APP_BASE_URL: 'https://apizinhub.analysed.ai/', // Change to your new API base URL
    port: 3003, // Change the port number
  },
};
module.exports = nextConfig;
