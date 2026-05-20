export interface Service {
  id: string;
  slug: { en: string; fr: string };
  badge: { en: string; fr: string };
  title: string;
  description: { en: string; fr: string };
  imageUrl: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: "beaujolais",
    slug: {
      en: "/en/beaujolais-wine-tour-from-lyon",
      fr: "/fr/beaujolais-wine-tour",
    },
    badge: { en: "Best Seller", fr: "Best Seller" },
    title: "Beaujolais Wine Tour",
    description: {
      en: "Private wine experience from Lyon through charming villages, family-owned wineries and scenic golden-stone vineyards. Exclusive tastings of grand crus.",
      fr: "Une immersion viticole privée à la découverte des collines dorées, des villages en pierres dorées et de domaines familiaux d'exception. Dégustations de grands crus.",
    },
    imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Beaujolais vineyards",
  },
  {
    id: "rhone",
    slug: {
      en: "/en/northern-rhone-valley-wine-tour-from-lyon",
      fr: "/fr/vallee-du-rhone-wine-tour",
    },
    badge: { en: "Prestige", fr: "Prestige" },
    title: "Northern Rhône Valley Wine Tour",
    description: {
      en: "Discover Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage and Crozes-Hermitage. Taste legendary Syrah and Viognier wines in prestigious estates.",
      fr: "Découvrez la Côte-Rôtie, Condrieu, Saint-Joseph, l'Hermitage. Dégustez Syrah et Viognier dans des domaines prestigieux.",
    },
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Northern Rhône Valley vines",
  },
  {
    id: "chauffeur",
    slug: {
      en: "/en/private-chauffeur-lyon",
      fr: "/fr/chauffeur-prive-lyon",
    },
    badge: { en: "Bespoke", fr: "Sur Mesure" },
    title: "Private Chauffeur Transfers",
    description: {
      en: "Airport, train station, hotel, business and long-distance transfers with premium Mercedes vehicles. Hourly availability for business travel and events.",
      fr: "Transferts vers les aéroports et gares (Lyon LYS, Genève GVA), déplacements professionnels et mise à disposition horaire.",
    },
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Luxury Mercedes sedan",
  },
];
