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
  title: "Wine Tour Bourgogne depuis Lyon | Côte d'Or en Privé",
  description:
    "Excursion privée en Bourgogne depuis Lyon. Beaune, Nuits-Saint-Georges, Gevrey-Chambertin, Meursault — avec chauffeur bilingue. À ~2h de Lyon.",
  path: "/fr/wine-tours-lyon/burgundy-wine-tour-from-lyon",
  alternatesLang: hreflangMap["/fr/wine-tours-lyon/burgundy-wine-tour-from-lyon"],
});

const villages = [
  {
    name: "Beaune",
    note: "La capitale viticole de Bourgogne — négociants, l'Hôtel-Dieu emblématique et des centaines de caves à explorer.",
  },
  {
    name: "Nuits-Saint-Georges",
    note: "Pinot Noir puissant et structuré, avec de nombreux Premiers Crus parmi les plus admirés de Bourgogne.",
  },
  {
    name: "Gevrey-Chambertin",
    note: "Le vin préféré de Napoléon et le village le plus célèbre de Bourgogne, avec 9 Grands Crus.",
  },
  {
    name: "Meursault",
    note: "Le joyau des blancs de la Côte de Beaune — Chardonnay riche et beurré d'une extraordinaire profondeur.",
  },
];

const includes = [
  ["Prise en charge à Lyon", "Collecte depuis votre hébergement à Lyon"],
  ["Chauffeur bilingue", "Guide expert avec une connaissance détaillée de la Bourgogne"],
  ["Mercedes haut de gamme", "Confort pour les ~2h de trajet aller-retour"],
  ["2–3 domaines visités", "Propriétés et négociants sélectionnés sur la Côte d'Or"],
  ["Visite de Beaune", "Temps libre pour explorer le centre médiéval à votre rythme"],
  ["Droits de dégustation exclus", "Payables directement à chaque domaine"],
];

export default function BurgundyWineTourFR() {
  const tourFaqs = faqs.filter((f) => f.pages.includes("general"));

  const schemas = [
    tourSchema({
      name: "Wine Tour Bourgogne depuis Lyon",
      description:
        "Excursion privée en Bourgogne depuis Lyon — Côte d'Or, Beaune, Nuits-Saint-Georges, Gevrey-Chambertin, Meursault.",
      url: "/fr/wine-tours-lyon/burgundy-wine-tour-from-lyon",
      destination: "Côte d'Or, Bourgogne, France",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Wine Tours Lyon", href: "/fr/wine-tours-lyon" },
      { name: "Bourgogne" },
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
          title="Wine Tour Bourgogne depuis Lyon"
          subtitle="À deux heures au nord de Lyon se trouve la Côte d'Or — sans doute le plus grand vignoble du monde. Pinot Noir et Chardonnay de légende, caves ancestrales et villages classés vous attendent."
          ctaPrimary={{ label: "Réserver ce tour", href: "/fr/contact" }}
          ctaSecondary={{ label: "Voir tous les wine tours", href: "/fr/wine-tours-lyon" }}
        />

        {/* Villages */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  La Côte d'Or
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Les villages et appellations que nous explorons
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {villages.map((v, i) => (
                <FadeIn key={v.name} delay={i * 0.08}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <h3 className="font-serif text-2xl text-[#080808] mb-2">{v.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.note}</p>
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
                  Tout prévu pour votre journée en Bourgogne
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
          title="Réservez votre wine tour Bourgogne depuis Lyon"
          subtitle="Privé, personnalisé, inoubliable. Dès 520 € par véhicule."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
