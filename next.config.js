const BLOG_URL = "http://instakash-landing.s3-website.us-east-2.amazonaws.com";

module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog/:slug*/",
        destination: `${BLOG_URL}/:slug*/`,
      },
      {
        source: "/blog/:slug*",
        destination: `${BLOG_URL}/:slug*`,
      },
    ];
  },
  // Causes next.js to add trailing slashes to end of URLs.
  trailingSlash: true,
};