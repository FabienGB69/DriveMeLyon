export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Drive Me Lyon",
    description:
      "Premium private chauffeur service and wine tours from Lyon. Beaujolais and Northern Rhône Valley excursions, airport transfers, business travel.",
    url: "https://drivemelyon.com",
    telephone: "+33658593922",
    email: "drivemelyon@yahoo.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lyon",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.7640,
      longitude: 4.8357,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "7",
      bestRating: "5",
    },
    priceRange: "€€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function tourSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "Drive Me Lyon",
      telephone: "+33658593922",
    },
  };
}
