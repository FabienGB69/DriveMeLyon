import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { seoData } from "@/data/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Fleet } from "@/components/sections/Fleet";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = buildMetadata({
  ...seoData.en.airport,
  path: "/en/lyon-airport-transfer",
  alternatesLang: hreflangMap["/en/lyon-airport-transfer"],
});

export default function LyonAirportTransferEN() {
  const schemas = [
    serviceSchema({
      name: "Lyon Airport Transfer — Private Chauffeur",
      description: seoData.en.airport.description,
      url: "/en/lyon-airport-transfer",
      serviceType: "Airport Transfer",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Lyon Airport Transfer" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Lyon Airport Transfer — Private Driver"
          subtitle="Premium private airport transfer to and from Lyon Saint-Exupéry Airport (LYS). Mercedes vehicles, English-speaking chauffeur, real-time flight tracking, meet & greet included."
          ctaPrimary={{ label: "Book airport transfer", href: "/en/contact" }}
          ctaSecondary={{ label: "Chat on WhatsApp", href: "https://wa.me/33658593922" }}
        />
        <Fleet lang="en" />
        <BookingCTA lang="en" title="Book your Lyon airport transfer" subtitle="Fast response, competitive rates, and premium Mercedes comfort guaranteed." />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
