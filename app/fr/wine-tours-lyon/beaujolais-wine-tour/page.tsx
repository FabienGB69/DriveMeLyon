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
  title: "Wine Tour Beaujolais depuis Lyon | Excursion Privée",
  description:
    "Excursion privée en Beaujolais depuis Lyon. Visitez Morgon, Moulin-à-Vent, Fleurie avec un chauffeur bilingue et un véhicule Mercedes. Demi-journée ou journée complète.",
  path: "/fr/wine-tours-lyon/beaujolais-wine-tour",
  alternatesLang: hreflangMap["/fr/wine-tours-lyon/beaujolais-wine-tour"],
});

const appellations = [
  { name: "Morgon", note: "Le plus puissant et le plus structuré des crus du Beaujolais. Vieillissement remarquable." },
  { name: "Moulin-à-Vent", note: "Le roi du Beaujolais — corps généreux, tanins présents, grande complexité." },
  { name: "Fleurie", note: "Élégant et floral, souple et accessible. L'appellation la plus romantique du Beaujolais." },
  { name: "Brouilly", note: "Le plus grand cru en superficie — fruité, léger et gourmand. Idéal en découverte." },
];

const includes = [
  ["Prise en charge à Lyon", "Collecte depuis votre hôtel ou adresse à Lyon"],
  ["Chauffeur bilingue", "Guide expert de la région en français et en anglais"],
  ["Mercedes haut de gamme", "Confort climatisé tout au long de la journée"],
  ["2–3 domaines visités", "Propriétés familiales sélectionnées avec soin"],
  ["Dégustations sur place", "Droits de dégustation payables directement aux vignerons"],
  ["Itinéraire personnalisé", "Adapté à vos préférences et à votre rythme"],
];

export default function BeaujolaisWineTourFR() {
  const tourFaqs = faqs.filter((f) => f.pages.includes("beaujolais") || f.pages.includes("general"));

  const schemas = [
    tourSchema({
      name: "Wine Tour Beaujolais depuis Lyon",
      description:
        "Excursion privée en Beaujolais depuis Lyon — Morgon, Moulin-à-Vent, Fleurie, Brouilly avec chauffeur bilingue.",
      url: "/fr/wine-tours-lyon/beaujolais-wine-tour",
      destination: "Beaujolais, France",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Wine Tours Lyon", href: "/fr/wine-tours-lyon" },
      { name: "Beaujolais" },
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
          title="Wine Tour Beaujolais depuis Lyon"
          subtitle="À seulement 40 minutes de Lyon, les collines dorées du Beaujolais vous attendent. Villages pittoresques, domaines familiaux et vins de crus — une journée inoubliable avec votre chauffeur privé."
          ctaPrimary={{ label: "Réserver ce tour", href: "/fr/contact" }}
          ctaSecondary={{ label: "Voir tous les wine tours", href: "/fr/wine-tours-lyon" }}
        
          imageSrc="https://images.unsplash.com/photo-1559666082-998df2b4e28b?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Beaujolais vineyard hills at golden hour"
        />

        {/* Appellations */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Les crus du Beaujolais
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Les appellations que nous découvrons
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  Le Beaujolais compte 10 crus aux personnalités très différentes. Nous sélectionnons les domaines avec soin pour vous offrir la meilleure expérience.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {appellations.map((a, i) => (
                <FadeIn key={a.name} delay={i * 0.08}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-6">
                    <h3 className="font-serif text-xl text-[#080808] mb-2">{a.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{a.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Ce qui est inclus
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Inclus dans votre tour Beaujolais
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
          title="Réservez votre wine tour Beaujolais depuis Lyon"
          subtitle="Privé, personnalisé, inoubliable. Dès 350 € par véhicule."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
