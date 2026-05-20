export interface FAQ {
  id: string;
  question: { en: string; fr: string };
  answer: { en: string; fr: string };
  pages: ("beaujolais" | "rhone" | "airport" | "chauffeur" | "general")[];
}

export const faqs: FAQ[] = [
  {
    id: "english-service",
    question: {
      en: "Can the private wine tour be conducted in English?",
      fr: "Le circuit peut-il se faire entièrement en anglais ?",
    },
    answer: {
      en: "Yes, absolutely. Your dedicated private chauffeur is fully bilingual and speaks fluent English. They will handle all translations and conversations with the winery hosts.",
      fr: "Oui, absolument. Votre chauffeur privé bilingue parle couramment l'anglais et facilitera toutes les interactions avec les viticulteurs locaux.",
    },
    pages: ["beaujolais", "rhone", "general"],
  },
  {
    id: "last-minute",
    question: {
      en: "Can we book a tour last-minute for tomorrow?",
      fr: "Pouvons-nous réserver une excursion pour demain ?",
    },
    answer: {
      en: "We strongly advise booking at least a few days in advance to secure reservations at top-tier wineries. For urgent requests, please text us on WhatsApp (+33 6 58 59 39 22).",
      fr: "Nous conseillons de réserver quelques jours à l'avance. Pour les demandes urgentes, envoyez-nous un message sur WhatsApp (+33 6 58 59 39 22).",
    },
    pages: ["beaujolais", "rhone", "general"],
  },
  {
    id: "tasting-fees",
    question: {
      en: "Are the winery wine tasting fees included in the price?",
      fr: "Les frais de dégustation sont-ils inclus ?",
    },
    answer: {
      en: "No, tasting fees (usually €10–€25/person) are payable directly to the wineries and are frequently waived if you purchase wine bottles.",
      fr: "Non, les frais de dégustation (10–25€/pers) sont à régler directement aux domaines et souvent offerts en cas d'achat.",
    },
    pages: ["beaujolais", "rhone"],
  },
  {
    id: "custom-itinerary",
    question: {
      en: "Can our itinerary be fully customized?",
      fr: "L'itinéraire peut-il être personnalisé ?",
    },
    answer: {
      en: "Absolutely! If you have specific estates in mind or want to focus on particular Crus, we will gladly customize the route and appointments to your preferences.",
      fr: "Tout à fait ! Si vous avez des domaines spécifiques ou des Crus préférés, nous adaptons le parcours et les rendez-vous selon vos désirs.",
    },
    pages: ["beaujolais", "rhone", "chauffeur"],
  },
  {
    id: "hotel-pickup",
    question: {
      en: "Do you pick up passengers directly from hotels?",
      fr: "Proposez-vous la prise en charge directement à mon hôtel ?",
    },
    answer: {
      en: "Yes, complimentary pickup and drop-off are included from any hotel, Airbnb, or private residence in Lyon. We can also coordinate airport pickups.",
      fr: "Oui, la prise en charge à l'hôtel, Airbnb ou résidence à Lyon est incluse. Nous coordonnons aussi les prises en charge à l'aéroport.",
    },
    pages: ["beaujolais", "rhone", "airport", "chauffeur", "general"],
  },
];
