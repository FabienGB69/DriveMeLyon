import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { seoData } from "@/data/seo";
import { localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { SignatureExperiences } from "@/components/sections/SignatureExperiences";
import { WineRegions } from "@/components/sections/WineRegions";
import { InternationalClients } from "@/components/sections/InternationalClients";
import { Fleet } from "@/components/sections/Fleet";
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
          title="Chauffeur privé & Wine Tours premium depuis Lyon"
          subtitle="Transferts aéroport premium, déplacements professionnels et excursions privées dans le Beaujolais et la Vallée du Rhône avec chauffeur anglophone et véhicule Mercedes."
          ctaPrimary={{ label: "Réserver un Wine Tour", href: "/fr/wine-tours" }}
          ctaSecondary={{ label: "Demander un transfert", href: "/fr/contact" }}
        />
        <GoogleReviews lang="fr" />
        <TrustedBy lang="fr" />
        <SignatureExperiences lang="fr" />
        <WineRegions lang="fr" />
        <InternationalClients lang="fr" />
        <Fleet lang="fr" />
        <BookingCTA lang="fr" />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
