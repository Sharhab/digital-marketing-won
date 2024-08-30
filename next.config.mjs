/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; frame-src https://www.youtube.com; child-src https://www.youtube.com; script-src 'self' https://www.youtube.com; object-src 'none';",
          },
        ],
      },
    ];
  },
};
