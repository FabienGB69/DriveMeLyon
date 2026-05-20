import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { SignatureExperiences } from "@/components/sections/SignatureExperiences";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = buildMetadata({
  title: "Wine Tours from Lyon | Private Beaujolais & Rhône Valley Tours",
  description: "Discover our private wine tours from Lyon. Beaujolais and Northern Rhône Valley excursions with an English-speaking chauffeur and premium Mercedes vehicle.",
  path: "/en/wine-tours",
});

export default function WineToursEN() {
  return (
    <>
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Private wine tours from Lyon"
          subtitle="Discover the Beaujolais and Northern Rhône Valley with a bespoke private wine tour from Lyon. English-speaking chauffeur, Mercedes vehicle, flexible itinerary."
          ctaPrimary={{ label: "Book a wine tour", href: "/en/contact" }}
          ctaSecondary={{ label: "Learn about Beaujolais", href: "/en/beaujolais-wine-tour-from-lyon" }}
        />
        <SignatureExperiences lang="en" />
        <BookingCTA lang="en" />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
