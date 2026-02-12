import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/templates";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flower-message.vercel.app";

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/generate`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...categoryPages,
  ];
}
