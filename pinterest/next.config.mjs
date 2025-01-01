/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8282",
        pathname: "/upload/**",
      },
      {
        protocol: "https",
        hostname: "pinterest.dsongc.com",
        pathname: "/upload/**",
      },
    ],
  },
};

export default nextConfig;
