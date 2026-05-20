import type { MetadataRoute } from "next";

const BASE_URL = "https://drivemelyon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1 },
    { url: "/en/wine-tours", priority: 0.9 },
    { url: "/en/beaujolais-wine-tour-from-lyon", priority: 0.9 },
    { url: "/en/northern-rhone-valley-wine-tour-from-lyon", priority: 0.9 },
    { url: "/en/lyon-airport-transfer", priority: 0.8 },
    { url: "/en/private-chauffeur-lyon", priority: 0.8 },
    { url: "/en/contact", priority: 0.7 },
    { url: "/fr/wine-tours", priority: 0.9 },
    { url: "/fr/beaujolais-wine-tour", priority: 0.9 },
    { url: "/fr/vallee-du-rhone-wine-tour", priority: 0.9 },
    { url: "/fr/transferts-aeroport-lyon", priority: 0.8 },
    { url: "/fr/chauffeur-prive-lyon", priority: 0.8 },
    { url: "/fr/contact", priority: 0.7 },
  ];

  return routes.map(({ url, priority }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
