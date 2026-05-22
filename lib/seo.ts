import type { Metadata } from "next";

export const BASE_URL = "https://drivemelyon.com";

type LangPair = { en: string; fr: string };

export function buildMetadata({
  title,
  description,
  path,
  image = "/og/default.jpg",
  alternatesLang,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  alternatesLang?: LangPair;
  noIndex?: boolean;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  const languages: Record<string, string> = {};
  if (alternatesLang) {
    languages["en"] = `${BASE_URL}${alternatesLang.en}`;
    languages["fr"] = `${BASE_URL}${alternatesLang.fr}`;
    languages["x-default"] = `${BASE_URL}${alternatesLang.en}`;
  }

  return {
    title,
    description,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: url,
      ...(alternatesLang ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Drive Me Lyon",
      images: [
        {
          url: `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${image}`],
    },
  };
}

export const hreflangMap: Record<string, LangPair> = {
  "/en": { en: "/en", fr: "/fr" },
  "/fr": { en: "/en", fr: "/fr" },
  "/en/wine-tours": { en: "/en/wine-tours", fr: "/fr/wine-tours" },
  "/fr/wine-tours": { en: "/en/wine-tours", fr: "/fr/wine-tours" },
  "/en/beaujolais-wine-tour-from-lyon": {
    en: "/en/beaujolais-wine-tour-from-lyon",
    fr: "/fr/beaujolais-wine-tour",
  },
  "/fr/beaujolais-wine-tour": {
    en: "/en/beaujolais-wine-tour-from-lyon",
    fr: "/fr/beaujolais-wine-tour",
  },
  "/en/northern-rhone-valley-wine-tour-from-lyon": {
    en: "/en/northern-rhone-valley-wine-tour-from-lyon",
    fr: "/fr/vallee-du-rhone-wine-tour",
  },
  "/fr/vallee-du-rhone-wine-tour": {
    en: "/en/northern-rhone-valley-wine-tour-from-lyon",
    fr: "/fr/vallee-du-rhone-wine-tour",
  },
  "/en/lyon-airport-transfer": {
    en: "/en/lyon-airport-transfer",
    fr: "/fr/transferts-aeroport-lyon",
  },
  "/fr/transferts-aeroport-lyon": {
    en: "/en/lyon-airport-transfer",
    fr: "/fr/transferts-aeroport-lyon",
  },
  "/en/private-chauffeur-lyon": {
    en: "/en/private-chauffeur-lyon",
    fr: "/fr/chauffeur-prive-lyon",
  },
  "/fr/chauffeur-prive-lyon": {
    en: "/en/private-chauffeur-lyon",
    fr: "/fr/chauffeur-prive-lyon",
  },
  "/en/contact": { en: "/en/contact", fr: "/fr/contact" },
  "/fr/contact": { en: "/en/contact", fr: "/fr/contact" },
  "/en/private-driver-lyon": { en: "/en/private-driver-lyon", fr: "/fr/chauffeur-prive-lyon" },
  "/en/wine-tours-from-lyon": { en: "/en/wine-tours-from-lyon", fr: "/fr/wine-tours-lyon" },
  "/fr/wine-tours-lyon": { en: "/en/wine-tours-from-lyon", fr: "/fr/wine-tours-lyon" },
  "/en/rhone-valley-wine-tour-from-lyon": { en: "/en/rhone-valley-wine-tour-from-lyon", fr: "/fr/wine-tours-lyon/rhone-valley-wine-tour" },
  "/en/burgundy-wine-tour-from-lyon": { en: "/en/burgundy-wine-tour-from-lyon", fr: "/fr/wine-tours-lyon/burgundy-wine-tour-from-lyon" },
  "/fr/wine-tours-lyon/beaujolais-wine-tour": { en: "/en/beaujolais-wine-tour-from-lyon", fr: "/fr/wine-tours-lyon/beaujolais-wine-tour" },
  "/fr/wine-tours-lyon/rhone-valley-wine-tour": { en: "/en/rhone-valley-wine-tour-from-lyon", fr: "/fr/wine-tours-lyon/rhone-valley-wine-tour" },
  "/fr/wine-tours-lyon/burgundy-wine-tour-from-lyon": { en: "/en/burgundy-wine-tour-from-lyon", fr: "/fr/wine-tours-lyon/burgundy-wine-tour-from-lyon" },
  "/en/lyon-airport-transfers": { en: "/en/lyon-airport-transfers", fr: "/fr/airport-transfers-lyon" },
  "/fr/airport-transfers-lyon": { en: "/en/lyon-airport-transfers", fr: "/fr/airport-transfers-lyon" },
  "/en/private-lyon-city-tour": { en: "/en/private-lyon-city-tour", fr: "/fr/lyon-private-tours" },
  "/fr/lyon-private-tours": { en: "/en/private-lyon-city-tour", fr: "/fr/lyon-private-tours" },
  "/en/group-transport-lyon": { en: "/en/group-transport-lyon", fr: "/fr/group-transport-lyon" },
  "/fr/group-transport-lyon": { en: "/en/group-transport-lyon", fr: "/fr/group-transport-lyon" },
  "/en/wedding-event-chauffeur-lyon": { en: "/en/wedding-event-chauffeur-lyon", fr: "/fr/wedding-event-chauffeur-lyon" },
  "/fr/wedding-event-chauffeur-lyon": { en: "/en/wedding-event-chauffeur-lyon", fr: "/fr/wedding-event-chauffeur-lyon" },
  "/en/fleet": { en: "/en/fleet", fr: "/fr/fleet" },
  "/fr/fleet": { en: "/en/fleet", fr: "/fr/fleet" },
  "/en/reviews": { en: "/en/reviews", fr: "/fr/reviews" },
  "/fr/reviews": { en: "/en/reviews", fr: "/fr/reviews" },
  "/en/rates": { en: "/en/rates", fr: "/fr/prices" },
  "/fr/prices": { en: "/en/rates", fr: "/fr/prices" },
};
