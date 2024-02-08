import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin-studio"]
    },
    sitemap: `${process.env.NEXT_PUBLIC_PROD_API_URL}/sitemap.xml`,
    host: process.env.NEXT_PUBLIC_PROD_API_URL
  };
}
