import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { SignatureExperiences } from "@/components/sections/SignatureExperiences";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = buildMetadata({
  title: "Wine Tour Lyon | Excursions Privées Beaujolais & Vallée du Rhône",
  description: "Découvrez nos Wine Tours privés depuis Lyon. Excursions dans le Beaujolais et la Vallée du Rhône Nord avec chauffeur anglophone et véhicule Mercedes premium.",
  path: "/fr/wine-tours",
});

export default function WineToursFR() {
  return (
    <>
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Wine Tours privés depuis Lyon"
          subtitle="Découvrez le Beaujolais et la Vallée du Rhône Nord lors d'une excursion privée sur-mesure depuis Lyon. Chauffeur anglophone, véhicule Mercedes, itinéraire flexible."
          ctaPrimary={{ label: "Réserver un Wine Tour", href: "/fr/contact" }}
          ctaSecondary={{ label: "Découvrir le Beaujolais", href: "/fr/beaujolais-wine-tour" }}
        />
        <SignatureExperiences lang="fr" />
        <BookingCTA lang="fr" />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
