const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)", // Set the source to match all routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Set the appropriate allowed origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS, PUT, DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
