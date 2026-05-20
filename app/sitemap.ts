import type { MetadataRoute } from "next";

const BASE_URL = "https://drivemelyon.com";

const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/en", priority: 1.0, changeFrequency: "weekly" },
  { url: "/fr", priority: 1.0, changeFrequency: "weekly" },
  { url: "/en/wine-tours", priority: 0.9, changeFrequency: "monthly" },
  { url: "/en/beaujolais-wine-tour-from-lyon", priority: 0.9, changeFrequency: "monthly" },
  { url: "/en/northern-rhone-valley-wine-tour-from-lyon", priority: 0.9, changeFrequency: "monthly" },
  { url: "/en/lyon-airport-transfer", priority: 0.85, changeFrequency: "monthly" },
  { url: "/en/private-chauffeur-lyon", priority: 0.85, changeFrequency: "monthly" },
  { url: "/en/contact", priority: 0.7, changeFrequency: "yearly" },
  { url: "/fr/wine-tours", priority: 0.9, changeFrequency: "monthly" },
  { url: "/fr/beaujolais-wine-tour", priority: 0.9, changeFrequency: "monthly" },
  { url: "/fr/vallee-du-rhone-wine-tour", priority: 0.9, changeFrequency: "monthly" },
  { url: "/fr/transferts-aeroport-lyon", priority: 0.85, changeFrequency: "monthly" },
  { url: "/fr/chauffeur-prive-lyon", priority: 0.85, changeFrequency: "monthly" },
  { url: "/fr/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
