import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_PROD_API_URL ?? "",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${process.env.NEXT_PUBLIC_PROD_API_URL}/nosotros`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${process.env.NEXT_PUBLIC_PROD_API_URL}/beneficios`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_PROD_API_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${process.env.NEXT_PUBLIC_PROD_API_URL}/niveles`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${process.env.NEXT_PUBLIC_PROD_API_URL}/politicas-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3
    },
    {
      url: `${process.env.NEXT_PUBLIC_PROD_API_URL}/terminos-y-condiciones`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3
    }
  ];
}
