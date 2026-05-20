import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { seoData } from "@/data/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { SignatureExperiences } from "@/components/sections/SignatureExperiences";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Fleet } from "@/components/sections/Fleet";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = buildMetadata({
  ...seoData.en.home,
  path: "/en",
});

export default function ENHomePage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Private chauffeur & wine tours from Lyon"
          subtitle="Premium airport transfers, business travel and private wine tours in Beaujolais and the Rhône Valley with an English-speaking chauffeur."
          ctaPrimary={{ label: "Book a wine tour", href: "/en/wine-tours" }}
          ctaSecondary={{ label: "Request a transfer", href: "/en/contact" }}
        />
        <SignatureExperiences lang="en" />
        <GoogleReviews lang="en" />
        <Fleet lang="en" />
        <BookingCTA lang="en" />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
