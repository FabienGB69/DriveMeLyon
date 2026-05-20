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
  ...seoData.fr.airport,
  path: "/fr/transferts-aeroport-lyon",
});

export default function TransfertsAeroportLyonFR() {
  return (
    <>
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Transfert Aéroport Lyon — Chauffeur Privé"
          subtitle="Transfert privé premium vers et depuis l'aéroport de Lyon Saint-Exupéry (LYS). Véhicules Mercedes, chauffeur anglophone, suivi des vols en temps réel, accueil personnalisé."
          ctaPrimary={{ label: "Réserver un transfert aéroport", href: "/fr/contact" }}
          ctaSecondary={{ label: "Contacter par WhatsApp", href: "https://wa.me/33658593922" }}
        />
        <Fleet lang="fr" />
        <BookingCTA lang="fr" title="Réservez votre transfert aéroport Lyon" subtitle="Réponse rapide, tarifs compétitifs et confort Mercedes garanti." />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
