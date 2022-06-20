/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.imgur.com",
      "youtube.com",
      "s3.us-east-2.amazonaws.com",
      "encrypted-tbn0.gstatic.com",
      "i.pinimg.com",
      "compote.slate.com",
    ],
  },
};

module.exports = nextConfig;
