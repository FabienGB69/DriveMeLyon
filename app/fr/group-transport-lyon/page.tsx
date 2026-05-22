import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Transport de Groupe Lyon | Minivan & Mercedes avec Chauffeur",
  description:
    "Transport de groupe à Lyon pour mariages, événements d'entreprise et sorties privées. Mercedes V-Class Viano, jusqu'à 8 passagers. Chauffeur professionnel.",
  path: "/fr/group-transport-lyon",
  alternatesLang: hreflangMap["/fr/group-transport-lyon"],
});

const useCases = [
  {
    icon: "💒",
    title: "Mariages",
    desc: "Transport élégant pour les cortèges nuptiaux. Mariés, famille, invités — arrivées et départs coordonnés avec un chauffeur en tenue.",
  },
  {
    icon: "🏢",
    title: "Groupes d'entreprise",
    desc: "Accueil de délégations à l'aéroport, navettes entre sites, roadshows clients dans tout Lyon et la région.",
  },
  {
    icon: "🍷",
    title: "Wine Tours en groupe",
    desc: "Le Mercedes V-Class accueille 7 passagers pour un wine tour partagé en Beaujolais ou dans la Vallée du Rhône.",
  },
  {
    icon: "🎉",
    title: "Événements privés",
    desc: "Concerts, anniversaires, dîners de gala — arrivez ensemble en style sans vous soucier du parking ni des conducteurs désignés.",
  },
  {
    icon: "✈",
    title: "Groupes à l'aéroport",
    desc: "Transferts partagés pour grandes familles, groupes de voyageurs ou équipes d'entreprise. Un véhicule, un prix fixe, tout le monde ensemble.",
  },
  {
    icon: "🏞",
    title: "Excursions à la journée",
    desc: "Location à la journée pour du tourisme, une exploration régionale ou des événements sportifs. Votre groupe, votre véhicule, votre programme.",
  },
];

export default function GroupTransportLyonFR() {
  const schemas = [
    serviceSchema({
      name: "Transport de Groupe Lyon",
      description:
        "Transport de groupe en minivan avec chauffeur à Lyon pour mariages, événements d'entreprise, wine tours et sorties privées.",
      url: "/fr/group-transport-lyon",
      serviceType: "Group Transport",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Transport de Groupe Lyon" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Transport de Groupe Lyon"
          subtitle="Voyagez ensemble dans le confort. Mercedes V-Class Viano pour des groupes jusqu'à 7 passagers, avec un chauffeur professionnel. Mariages, événements d'entreprise, wine tours, transferts aéroport — tout est couvert."
          ctaPrimary={{ label: "Demander un devis groupe", href: "/fr/contact" }}
          ctaSecondary={{ label: "Nous contacter sur WhatsApp", href: "https://wa.me/33658593922" }}
        />

        {/* Use cases */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Adapté à toutes les occasions
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Transport de groupe pour toutes les occasions
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((u, i) => (
                <FadeIn key={u.title} delay={i * 0.07}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <span className="text-2xl mb-4 block">{u.icon}</span>
                    <h3 className="font-serif text-xl text-[#080808] mb-2">{u.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{u.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle info */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Notre véhicule de groupe
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Mercedes V-Class Viano
                </h2>
              </div>
            </FadeIn>
            <div className="max-w-2xl mx-auto">
              <FadeIn>
                <div className="border border-white/10 rounded-sm p-8 hover:border-[#C6A15B]/40 transition-colors">
                  <p className="text-[#C6A15B] text-sm font-semibold mb-1">Jusqu'à 7 passagers</p>
                  <p className="text-white/50 text-xs mb-6">Grande capacité bagages</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Sièges capitaines",
                      "Climatisation individuelle",
                      "Cloison arrière disponible",
                      "Chargement USB",
                      "Vitres teintées",
                      "Cuir haut de gamme",
                    ].map((f) => (
                      <div key={f} className="flex gap-2 text-sm text-white/70">
                        <span className="text-[#C6A15B]">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <ReviewsCarousel lang="fr" />
        <BookingCTA
          lang="fr"
          title="Réservez votre transport de groupe à Lyon"
          subtitle="Jusqu'à 7 passagers. Prix fixes. Contactez-nous pour un devis personnalisé."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
