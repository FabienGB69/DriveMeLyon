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
  ...seoData.fr.home,
  path: "/fr",
  alternatesLang: hreflangMap["/fr"],
});

export default function FRHomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Chauffeur privé premium & Wine Tours depuis Lyon"
          subtitle="Beaujolais, Vallée du Rhône, Bourgogne, transferts aéroport et événements privés — avec chauffeur anglophone et véhicule Mercedes."
          ctaPrimary={{ label: "Réserver un chauffeur", href: "/fr/contact" }}
          ctaSecondary={{ label: "Découvrir les Wine Tours", href: "/fr/wine-tours-lyon" }}
        />
        <ProofBlock lang="fr" />
        <WineToursHub lang="fr" />
        <ServicesGrid lang="fr" />
        <TrustedBy lang="fr" />
        <GoogleReviews lang="fr" />
        <QuickContact lang="fr" />
        <BookingCTA lang="fr" />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
