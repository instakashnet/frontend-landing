/** @type {import('next').NextConfig} */
// const BLOG_URL = "http://instakash-landing.s3-website.us-east-2.amazonaws.com";

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Causes next.js to add trailing slashes to end of URLs.
  // trailingSlash: true,
};
