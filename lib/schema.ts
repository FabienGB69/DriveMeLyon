import { reviews } from "@/data/reviews";
import type { FAQ } from "@/data/faqs";

const BASE_URL = "https://drivemelyon.com";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#business`,
    name: "Drive Me Lyon",
    description:
      "Premium private chauffeur service and wine tours from Lyon. Beaujolais and Northern Rhône Valley excursions, airport transfers, business travel.",
    url: BASE_URL,
    telephone: "+33658593922",
    email: "drivemelyon@yahoo.com",
    image: `${BASE_URL}/images/hero_wine_tour.jpg`,
    logo: `${BASE_URL}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lyon",
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.764,
      longitude: 4.8357,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.text,
    })),
    priceRange: "€€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "Place", name: "Beaujolais" },
      { "@type": "Place", name: "Northern Rhône Valley" },
      { "@type": "Airport", name: "Lyon Saint-Exupéry Airport", iataCode: "LYS" },
    ],
    sameAs: [
      "https://search.google.com/local/reviews?placeid=ChIJ6cu2eq3t9EcRgv3ak_zahtI",
    ],
  };
}

export function serviceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    serviceType: serviceType ?? "Chauffeur Service",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Drive Me Lyon",
      telephone: "+33658593922",
    },
    areaServed: { "@type": "City", name: "Lyon" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BASE_URL}/en/contact`,
      servicePhone: "+33658593922",
    },
  };
}

export function tourSchema({
  name,
  description,
  url,
  destination,
}: {
  name: string;
  description: string;
  url: string;
  destination?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    url: `${BASE_URL}${url}`,
    touristType: "Wine enthusiast",
    itinerary: destination
      ? { "@type": "Place", name: destination }
      : undefined,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Drive Me Lyon",
      telephone: "+33658593922",
    },
  };
}

export function faqSchema(items: FAQ[], lang: "en" | "fr" = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question[lang],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer[lang],
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; href?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };
}
