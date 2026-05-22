import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { seoData } from "@/data/seo";
import { localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { ProofBlock } from "@/components/sections/ProofBlock";
import { WineToursHub } from "@/components/sections/WineToursHub";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { QuickContact } from "@/components/sections/QuickContact";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = buildMetadata({
  ...seoData.en.home,
  path: "/en",
  alternatesLang: hreflangMap["/en"],
});

export default function ENHomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Premium Chauffeur & Wine Tours from Lyon"
          subtitle="Beaujolais, Rhône Valley, Burgundy, airport transfers and private events — with an English-speaking chauffeur and Mercedes vehicle."
          ctaPrimary={{ label: "Book a chauffeur", href: "/en/contact" }}
          ctaSecondary={{ label: "Discover wine tours", href: "/en/wine-tours-from-lyon" }}
        />
        <ProofBlock lang="en" />
        <WineToursHub lang="en" />
        <ServicesGrid lang="en" />
        <TrustedBy lang="en" />
        <GoogleReviews lang="en" />
        <QuickContact lang="en" />
        <BookingCTA lang="en" />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
