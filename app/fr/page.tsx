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
  ...seoData.fr.home,
  path: "/fr",
});

export default function FRHomePage() {
  return (
    <>
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Chauffeur privé & Wine Tours premium depuis Lyon"
          subtitle="Transferts aéroport, déplacements professionnels et excursions privées dans le Beaujolais et la Vallée du Rhône avec chauffeur anglophone et véhicule Mercedes."
          ctaPrimary={{ label: "Réserver un Wine Tour", href: "/fr/wine-tours" }}
          ctaSecondary={{ label: "Demander un transfert", href: "/fr/contact" }}
        />
        <SignatureExperiences lang="fr" />
        <GoogleReviews lang="fr" />
        <Fleet lang="fr" />
        <BookingCTA lang="fr" />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
