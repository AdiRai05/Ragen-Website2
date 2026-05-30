import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ragen.org";

  const routes = [
    { url: baseUrl, priority: 1, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/software-engineering`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/artificial-intelligence`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/cloud-devops`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/data-engineering`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/cybersecurity`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/blockchain-solutions`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/enterprise-integration`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services/mobile-development`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/work`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/industries`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/insights`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
