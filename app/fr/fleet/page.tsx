import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Fleet } from "@/components/sections/Fleet";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Notre Flotte | Véhicules Mercedes Premium — Drive Me Lyon",
  description:
    "Découvrez notre flotte de véhicules Mercedes premium — Classe E, Classe S, Classe V et Van Premium. Impeccables, climatisés et préparés pour chaque occasion.",
  path: "/fr/fleet",
  alternatesLang: hreflangMap["/fr/fleet"],
});

const standards = [
  ["Nettoyé avant chaque réservation", "Détail intérieur et extérieur avant chaque trajet"],
  ["Eau et rafraîchissements", "Eau minérale fournie en standard sur tous les trajets"],
  ["Sellerie cuir", "Sièges en cuir haut de gamme dans tous les véhicules"],
  ["Climatisation", "Zones de température individuelles pour le chauffeur et les passagers"],
  ["Chargement USB & sans fil", "Restez connecté tout au long de votre trajet"],
  ["Sièges enfant disponibles", "Sur demande — précisez lors de la réservation"],
];

export default function FleetFR() {
  const schemas = [
    serviceSchema({
      name: "Flotte Mercedes Premium — Drive Me Lyon",
      description:
        "Flotte de véhicules Mercedes premium incluant Classe E, Classe S, Classe V et Van Premium pour services de chauffeur privé et wine tours.",
      url: "/fr/fleet",
      serviceType: "Chauffeur Service",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Notre Flotte" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Notre Flotte Premium"
          subtitle="Chaque véhicule de notre flotte est une Mercedes — sélectionnée pour son confort, sa fiabilité et son élégance. Que vous voyagiez seul, en famille ou en groupe, nous avons le véhicule idéal pour votre trajet."
          ctaPrimary={{ label: "Réserver un véhicule", href: "/fr/contact" }}
          ctaSecondary={{ label: "Voir nos tarifs", href: "/fr/prices" }}
        
          imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Mercedes premium fleet"
        />

        <Fleet lang="fr" />

        {/* Standards */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Nos standards
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Chaque trajet, chaque véhicule
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  Nous maintenons un seul standard pour toute notre flotte — le plus élevé. Chaque véhicule est préparé avant chaque réservation, sans exception.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {standards.map(([title, desc], i) => (
                <FadeIn key={title} delay={i * 0.07}>
                  <div className="border border-[#C6A15B]/20 bg-white rounded-sm p-6">
                    <span className="text-[#C6A15B] text-lg font-serif mr-2">✓</span>
                    <span className="font-semibold text-[#080808] text-sm">{title}</span>
                    <p className="text-gray-500 text-xs leading-relaxed mt-2">{desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <BookingCTA
          lang="fr"
          title="Réservez votre véhicule"
          subtitle="Tous les véhicules disponibles pour transferts, location à la journée, wine tours et événements."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
