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
  // New EN pages
  { url: "/en/private-driver-lyon", priority: 0.85, changeFrequency: "monthly" },
  { url: "/en/wine-tours-from-lyon", priority: 0.9, changeFrequency: "monthly" },
  { url: "/en/rhone-valley-wine-tour-from-lyon", priority: 0.85, changeFrequency: "monthly" },
  { url: "/en/burgundy-wine-tour-from-lyon", priority: 0.85, changeFrequency: "monthly" },
  { url: "/en/lyon-airport-transfers", priority: 0.85, changeFrequency: "monthly" },
  { url: "/en/private-lyon-city-tour", priority: 0.8, changeFrequency: "monthly" },
  { url: "/en/group-transport-lyon", priority: 0.7, changeFrequency: "monthly" },
  { url: "/en/wedding-event-chauffeur-lyon", priority: 0.7, changeFrequency: "monthly" },
  { url: "/en/fleet", priority: 0.7, changeFrequency: "monthly" },
  { url: "/en/reviews", priority: 0.65, changeFrequency: "monthly" },
  { url: "/en/rates", priority: 0.75, changeFrequency: "monthly" },
  // New FR pages
  { url: "/fr/wine-tours-lyon", priority: 0.9, changeFrequency: "monthly" },
  { url: "/fr/wine-tours-lyon/beaujolais-wine-tour", priority: 0.85, changeFrequency: "monthly" },
  { url: "/fr/wine-tours-lyon/rhone-valley-wine-tour", priority: 0.85, changeFrequency: "monthly" },
  { url: "/fr/wine-tours-lyon/burgundy-wine-tour-from-lyon", priority: 0.85, changeFrequency: "monthly" },
  { url: "/fr/airport-transfers-lyon", priority: 0.85, changeFrequency: "monthly" },
  { url: "/fr/lyon-private-tours", priority: 0.8, changeFrequency: "monthly" },
  { url: "/fr/group-transport-lyon", priority: 0.7, changeFrequency: "monthly" },
  { url: "/fr/wedding-event-chauffeur-lyon", priority: 0.7, changeFrequency: "monthly" },
  { url: "/fr/fleet", priority: 0.7, changeFrequency: "monthly" },
  { url: "/fr/reviews", priority: 0.65, changeFrequency: "monthly" },
  { url: "/fr/prices", priority: 0.75, changeFrequency: "monthly" },
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
