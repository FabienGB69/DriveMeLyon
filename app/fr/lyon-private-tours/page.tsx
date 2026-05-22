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
  title: "Visites Privées de Lyon | Chauffeur Guide Bilingue",
  description:
    "Visites privées de Lyon avec un chauffeur guide bilingue. Vieux-Lyon, Presqu'île, Fourvière, Croix-Rousse — à votre rythme. Demi-journée et journée complète disponibles.",
  path: "/fr/lyon-private-tours",
  alternatesLang: hreflangMap["/fr/lyon-private-tours"],
});

const quartiers = [
  {
    name: "Vieux-Lyon",
    subtitle: "Patrimoine UNESCO",
    desc: "Le plus beau quartier Renaissance hors d'Italie. Traboules labyrinthiques, églises médiévales et bouchons lyonnais dans des ruelles pavées.",
  },
  {
    name: "Presqu'île",
    subtitle: "Le cœur de Lyon",
    desc: "L'élégante péninsule entre Saône et Rhône, avec la place Bellecour, l'opéra, les grands boulevards haussmanniens et les meilleures boutiques de Lyon.",
  },
  {
    name: "Fourvière",
    subtitle: "La colline qui prie",
    desc: "La basilique en surplomb offre une vue panoramique imprenable sur Lyon. Amphithéâtres romains, musées gallo-romains et cœur spirituel de la ville.",
  },
  {
    name: "Croix-Rousse",
    subtitle: "La colline qui travaille",
    desc: "Ancienne cité des canuts, bohème et vivante. Rues pentues, fresques murales, marchés matinaux et la meilleure culture café de Lyon.",
  },
];

const options = [
  {
    duration: "2 heures",
    title: "Tour Découverte",
    from: "Dès 120 €",
    desc: "Une introduction rapide aux incontournables de Lyon. Idéal lors d'une courte escale ou pour un premier aperçu.",
    stops: ["Vieux-Lyon et traboules", "Point de vue panoramique Fourvière", "Place Bellecour"],
  },
  {
    duration: "4 heures",
    title: "Tour Approfondi",
    from: "Dès 220 €",
    desc: "Une exploration complète des quatre grands quartiers à un rythme agréable.",
    stops: ["Les 4 quartiers principaux", "Amphithéâtres romains de Fourvière", "Marché de la Croix-Rousse (matin)", "Pause déjeuner en bouchon"],
  },
];

export default function LyonPrivateToursFR() {
  const schemas = [
    serviceSchema({
      name: "Visites Privées de Lyon",
      description:
        "Visites privées guidées de Lyon avec un chauffeur bilingue — Vieux-Lyon, Presqu'île, Fourvière, Croix-Rousse.",
      url: "/fr/lyon-private-tours",
      serviceType: "City Tour",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Visites Privées de Lyon" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Visites Privées de Lyon"
          subtitle="Lyon se révèle à ceux qui prennent le temps de l'explorer. Découvrez le Vieux-Lyon classé UNESCO, la basilique de Fourvière, la Croix-Rousse bohème et la majestueuse Presqu'île — à votre rythme avec votre chauffeur bilingue."
          ctaPrimary={{ label: "Réserver une visite", href: "/fr/contact" }}
          ctaSecondary={{ label: "Discuter sur WhatsApp", href: "https://wa.me/33658593922" }}
        />

        {/* Quartiers */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Les quartiers emblématiques
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Quatre quartiers, quatre univers
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {quartiers.map((q, i) => (
                <FadeIn key={q.name} delay={i * 0.08}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-2 py-0.5 rounded-full">
                      {q.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-[#080808] mt-3 mb-2">{q.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{q.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Formules */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Nos formules
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Choisissez votre visite de Lyon
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {options.map((o, i) => (
                <FadeIn key={o.title} delay={i * 0.1}>
                  <div className="border border-white/10 rounded-sm p-8 hover:border-[#C6A15B]/40 transition-colors">
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-3 py-1 rounded-full">
                      {o.duration}
                    </span>
                    <h3 className="font-serif text-2xl text-white mt-4 mb-2">{o.title}</h3>
                    <p className="text-[#C6A15B] font-semibold text-sm mb-3">{o.from} par véhicule</p>
                    <p className="text-white/60 text-sm mb-5">{o.desc}</p>
                    <ul className="space-y-2">
                      {o.stops.map((s) => (
                        <li key={s} className="flex gap-2 text-sm text-white/70">
                          <span className="text-[#C6A15B] flex-shrink-0">→</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ReviewsCarousel lang="fr" />
        <BookingCTA
          lang="fr"
          title="Réservez votre visite privée de Lyon"
          subtitle="Dès 120 € pour 2 heures. Itinéraires personnalisés disponibles."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
