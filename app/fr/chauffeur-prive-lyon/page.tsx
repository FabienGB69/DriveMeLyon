import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { seoData } from "@/data/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Fleet } from "@/components/sections/Fleet";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = buildMetadata({
  ...seoData.fr.chauffeur,
  path: "/fr/chauffeur-prive-lyon",
});

export default function ChauffeurPriveLyonFR() {
  return (
    <>
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Chauffeur Privé Lyon"
          subtitle="Réservez un chauffeur privé à Lyon pour vos déplacements professionnels, événements, transferts hôtel et trajets longue distance. Bilingue, professionnel, disponible 24h/24 avec véhicules Mercedes premium."
          ctaPrimary={{ label: "Demander un transfert", href: "/fr/contact" }}
          ctaSecondary={{ label: "Contacter par WhatsApp", href: "https://wa.me/33658593922" }}
        />
        <Fleet lang="fr" />
        <BookingCTA lang="fr" title="Réservez votre chauffeur privé à Lyon" subtitle="Disponible 24h/24 pour tout transfert — aéroport, hôtel, professionnel ou longue distance." />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
