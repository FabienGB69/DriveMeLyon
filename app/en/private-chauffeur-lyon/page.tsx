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
  ...seoData.en.chauffeur,
  path: "/en/private-chauffeur-lyon",
  alternatesLang: hreflangMap["/en/private-chauffeur-lyon"],
});

export default function PrivateChauffeurLyonEN() {
  const schemas = [
    serviceSchema({
      name: "Private Chauffeur Lyon",
      description: seoData.en.chauffeur.description,
      url: "/en/private-chauffeur-lyon",
      serviceType: "Private Chauffeur",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Private Chauffeur Lyon" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Private Chauffeur Lyon"
          subtitle="Hire a private chauffeur in Lyon for business travel, events, hotel transfers, and long-distance journeys. Bilingual, professional, available 24/7 with premium Mercedes vehicles."
          ctaPrimary={{ label: "Request a transfer", href: "/en/contact" }}
          ctaSecondary={{ label: "Chat on WhatsApp", href: "https://wa.me/33658593922" }}
        />
        <Fleet lang="en" />
        <BookingCTA lang="en" title="Book your private chauffeur in Lyon" subtitle="Available 24/7 for any transfer — airport, hotel, business, or long distance." />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
