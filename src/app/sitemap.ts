import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/templates";
import { getAllFlowerSlugs } from "@/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://flower-message.vercel.app";

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const slugs = await getAllFlowerSlugs();
  const flowerPages = slugs.map((slug) => ({
    url: `${baseUrl}/flower/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/generate`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...categoryPages,
    ...flowerPages,
  ];
}
