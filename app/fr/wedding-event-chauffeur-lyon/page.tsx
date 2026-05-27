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
  title: "Chauffeur Mariage Lyon | Transport Événementiel Premium",
  description:
    "Chauffeur pour mariage et événements à Lyon. Service blanc gant, véhicules décorés sur demande, navettes invités, soirées de gala. Mercedes impeccables.",
  path: "/fr/wedding-event-chauffeur-lyon",
  alternatesLang: hreflangMap["/fr/wedding-event-chauffeur-lyon"],
});

const services = [
  {
    title: "Transport du cortège nuptial",
    desc: "Les mariés et leur cortège arrivent dans une Mercedes impeccable — rubans, fleurs et tapis rouge sur demande.",
  },
  {
    title: "Navettes invités",
    desc: "Coordination des arrivées et départs des invités entre le lieu de réception, l'hébergement et la cérémonie.",
  },
  {
    title: "Cérémonie vers réception",
    desc: "Transfert fluide entre la salle de cérémonie et le lieu de réception, avec du temps prévu pour les photos.",
  },
  {
    title: "Soirées de gala et événements d'entreprise",
    desc: "Transport premium pour dîners de gala, lancements de produits, remises de prix et soirées clients dans la région lyonnaise.",
  },
  {
    title: "Anniversaires et célébrations",
    desc: "Offrez une soirée chauffeured à un proche — dîner étoilé, concert ou soirée sur mesure à Lyon.",
  },
  {
    title: "Reconnaissance du site",
    desc: "Visite préalable pour cartographier le trajet, chronométrer le parcours et rencontrer l'équipe du lieu. Inclus dans toutes les réservations mariage.",
  },
];

const whyChoose = [
  ["Ponctualité garantie", "Nous cartographions chaque trajet à l'avance en tenant compte du trafic"],
  ["Présentation impeccable", "Véhicules nettoyés et polis avant chaque réservation mariage"],
  ["Discret et professionnel", "Votre chauffeur s'intègre avec élégance dans votre journée"],
  ["Décoration du véhicule", "Rubans, fleurs et décoration sur mesure disponibles sur demande"],
  ["Véhicule de réserve", "Un second véhicule est toujours disponible pour nos clients mariages"],
  ["Itinéraire flexible", "Votre programme change — nous nous adaptons. Sans frais pour les ajustements mineurs"],
];

export default function WeddingEventChauffeurLyonFR() {
  const schemas = [
    serviceSchema({
      name: "Chauffeur Mariage Lyon",
      description:
        "Chauffeur premium pour mariages et événements à Lyon avec véhicules Mercedes, service blanc gant et présentation professionnelle.",
      url: "/fr/wedding-event-chauffeur-lyon",
      serviceType: "Wedding Chauffeur",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Chauffeur Mariage Lyon" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Chauffeur Mariage Lyon"
          subtitle="Votre plus beau jour mérite un transport irréprochable. Véhicules Mercedes soigneusement présentés, chauffeur professionnel et service blanc gant de la cérémonie à la réception."
          ctaPrimary={{ label: "Demander un devis mariage", href: "/fr/contact" }}
          ctaSecondary={{ label: "Discuter sur WhatsApp", href: "https://wa.me/33658593922" }}
        
          imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Wedding chauffeur luxury vehicle Lyon"
        />

        {/* Services */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Nos services mariage
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Chaque détail, parfaitement géré
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.07}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <h3 className="font-serif text-xl text-[#080808] mb-3">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Le standard Drive Me Lyon
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Pourquoi les mariés nous choisissent
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChoose.map(([title, desc], i) => (
                <FadeIn key={title} delay={i * 0.07}>
                  <div className="border border-white/10 rounded-sm p-6 hover:border-[#C6A15B]/40 transition-colors">
                    <span className="text-[#C6A15B] text-lg font-serif mr-2">✓</span>
                    <span className="font-semibold text-white text-sm">{title}</span>
                    <p className="text-white/50 text-xs leading-relaxed mt-2">{desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ReviewsCarousel lang="fr" />
        <BookingCTA
          lang="fr"
          title="Demandez un devis pour votre mariage à Lyon"
          subtitle="Nous acceptons un nombre limité de mariages par saison. Contactez-nous tôt pour sécuriser votre date."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
