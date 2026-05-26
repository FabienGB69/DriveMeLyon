import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { tourSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { FAQSection } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { faqs } from "@/data/faqs";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Wine Tour Vallée du Rhône depuis Lyon | Excursion Privée",
  description:
    "Excursion privée dans la Vallée du Rhône Nord depuis Lyon. Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage — avec chauffeur bilingue et véhicule Mercedes.",
  path: "/fr/wine-tours-lyon/rhone-valley-wine-tour",
  alternatesLang: hreflangMap["/fr/wine-tours-lyon/rhone-valley-wine-tour"],
});

const appellations = [
  {
    name: "Côte-Rôtie",
    type: "Rouge",
    note: "Syrah élégante et parfumée sur des terrasses de granit abruptes. L'un des rouges les plus prestigieux de France.",
  },
  {
    name: "Condrieu",
    type: "Blanc",
    note: "Blancs luxuriants et aromatiques à base de Viognier, avec des notes d'abricot et de jasmin. Rare et unique.",
  },
  {
    name: "Saint-Joseph",
    type: "Rouge & Blanc",
    note: "Rouges accessibles et blancs minéraux issus de 26 communes sur les deux rives du Rhône.",
  },
  {
    name: "Hermitage",
    type: "Rouge & Blanc",
    note: "Le sommet du Rhône Nord — vins puissants, complexes et de grande garde. Parmi les plus collectionnés au monde.",
  },
];

const includes = [
  ["Prise en charge à Lyon", "Collecte depuis votre hébergement à Lyon"],
  ["Chauffeur bilingue", "Guide expert avec une connaissance approfondie de la région"],
  ["Mercedes haut de gamme", "Confort climatisé tout au long du voyage"],
  ["2–3 domaines visités", "Propriétés sélectionnées avec caves et dégustations"],
  ["Itinéraire flexible", "Journée complète ou demi-journée selon vos souhaits"],
  ["Droits de dégustation exclus", "Payables directement à chaque domaine"],
];

export default function RhoneValleyWineTourFR() {
  const tourFaqs = faqs.filter((f) => f.pages.includes("rhone") || f.pages.includes("general"));

  const schemas = [
    tourSchema({
      name: "Wine Tour Vallée du Rhône depuis Lyon",
      description:
        "Excursion privée dans la Vallée du Rhône Nord depuis Lyon — Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage.",
      url: "/fr/wine-tours-lyon/rhone-valley-wine-tour",
      destination: "Vallée du Rhône Nord, France",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Wine Tours Lyon", href: "/fr/wine-tours-lyon" },
      { name: "Vallée du Rhône" },
    ]),
    faqSchema(tourFaqs, "fr"),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Wine Tour Vallée du Rhône depuis Lyon"
          subtitle="Partez vers le sud depuis Lyon à la découverte d'un des plus grands vignobles de France. Terrasses de granit, Syrah d'exception et Viognier rare — une journée privée hors du commun."
          ctaPrimary={{ label: "Réserver ce tour", href: "/fr/contact" }}
          ctaSecondary={{ label: "Voir tous les wine tours", href: "/fr/wine-tours-lyon" }}
        
          imageSrc="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Rhône Valley vineyard wine tasting"
        />

        {/* Appellations */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Le Rhône Nord
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Quatre appellations légendaires
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {appellations.map((a, i) => (
                <FadeIn key={a.name} delay={i * 0.08}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-serif text-2xl text-[#080808]">{a.name}</h3>
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-2 py-0.5 rounded-full">
                        {a.type}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{a.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Inclus */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Ce qui est inclus
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Inclus dans votre tour Vallée du Rhône
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {includes.map(([title, desc], i) => (
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
        <FAQSection lang="fr" items={tourFaqs} />
        <BookingCTA
          lang="fr"
          title="Réservez votre wine tour Vallée du Rhône depuis Lyon"
          subtitle="Privé, personnalisé, inoubliable. Dès 420 € par véhicule."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
