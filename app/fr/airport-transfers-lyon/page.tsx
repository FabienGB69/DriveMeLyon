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
  title: "Transferts Aéroport Lyon | Chauffeur Privé Saint-Exupéry",
  description:
    "Transferts privés à prix fixe vers et depuis l'aéroport de Lyon Saint-Exupéry (LYS). Suivi des vols, accueil personnalisé, Mercedes haut de gamme. Disponible 24h/24.",
  path: "/fr/airport-transfers-lyon",
  alternatesLang: hreflangMap["/fr/airport-transfers-lyon"],
});

const features = [
  {
    icon: "✈",
    title: "Suivi des vols",
    desc: "Votre chauffeur suit votre vol en temps réel. En cas de retard, il s'adapte — sans frais supplémentaires.",
  },
  {
    icon: "🪧",
    title: "Accueil personnalisé",
    desc: "Votre chauffeur vous attend à la sortie des arrivées avec un panneau à votre nom. Aucune confusion possible.",
  },
  {
    icon: "💰",
    title: "Prix fixe",
    desc: "Prix convenu avant le départ. Pas de compteur, pas de surcharge. Ce que nous devisez, vous payez.",
  },
  {
    icon: "🕐",
    title: "Disponible 24h/24",
    desc: "Vols matinaux, arrivées tardives, départs de nuit — nous opérons 24h/24, 7j/7, 365 jours par an.",
  },
  {
    icon: "🧳",
    title: "Aide aux bagages",
    desc: "Votre chauffeur charge et décharge vos bagages. Parfait après un long vol ou avec des valises lourdes.",
  },
  {
    icon: "🚘",
    title: "Flotte Mercedes",
    desc: "E-Class, S-Class ou V-Class impeccables. Climatisés, spacieux et nettoyés avant chaque transfert.",
  },
];

const routes = [
  { from: "Centre de Lyon", to: "Lyon Saint-Exupéry (LYS)", time: "30–45 min", from_price: "95 €" },
  { from: "Centre de Lyon", to: "Aéroport de Genève (GVA)", time: "~1h45", from_price: "280 €" },
  { from: "Lyon Saint-Exupéry", to: "Grenoble", time: "~1h", from_price: "160 €" },
  { from: "Centre de Lyon", to: "Aéroport de Chambéry", time: "~1h15", from_price: "185 €" },
];

export default function AirportTransfersLyonFR() {
  const schemas = [
    serviceSchema({
      name: "Transferts Aéroport Lyon",
      description:
        "Transferts privés à prix fixe vers et depuis l'aéroport de Lyon Saint-Exupéry avec véhicules Mercedes et chauffeur bilingue.",
      url: "/fr/airport-transfers-lyon",
      serviceType: "Airport Transfer",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Transferts Aéroport Lyon" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Transferts Aéroport Lyon"
          subtitle="Arrivez et repartez en toute sérénité. Transferts privés à prix fixe vers l'aéroport de Lyon Saint-Exupéry, avec suivi des vols, accueil personnalisé et Mercedes haut de gamme. Disponible 24h/24."
          ctaPrimary={{ label: "Réserver un transfert", href: "/fr/contact" }}
          ctaSecondary={{ label: "Devis rapide sur WhatsApp", href: "https://wa.me/33658593922" }}
        
          imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Lyon Saint-Exupéry airport transfer"
        />

        {/* Features */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Pourquoi choisir Drive Me Lyon
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Transferts aéroport sans stress, à chaque fois
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.07}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <span className="text-2xl mb-4 block">{f.icon}</span>
                    <h3 className="font-serif text-xl text-[#080808] mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Routes */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Trajets fréquents
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Exemples de transferts aéroport
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {routes.map((r, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="border border-white/10 rounded-sm p-6 flex items-center justify-between hover:border-[#C6A15B]/40 transition-colors">
                    <div>
                      <p className="text-white font-semibold text-sm">{r.from} → {r.to}</p>
                      <p className="text-white/50 text-xs mt-1">{r.time}</p>
                    </div>
                    <span className="text-[#C6A15B] font-serif text-lg font-semibold">Dès {r.from_price}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ReviewsCarousel lang="fr" />
        <BookingCTA
          lang="fr"
          title="Réservez votre transfert aéroport Lyon"
          subtitle="Prix fixe, ponctualité garantie, disponible 24h/24."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
