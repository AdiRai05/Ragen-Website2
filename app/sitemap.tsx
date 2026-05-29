
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ragen.org",
      priority: 1,
    },
    {
      url: "https://ragen.org/about",
      priority: 0.8,
    },
    {
      url: "https://ragen.org/services",
      priority: 0.8,
    },
    {
      url: "https://ragen.org/contact",
      priority: 0.8,
    },
  ];
}
