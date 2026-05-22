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
  title: "Burgundy Wine Tour from Lyon | Private Day Trip to Côte d'Or",
  description:
    "Private Burgundy wine tour from Lyon. Explore Beaune, Nuits-Saint-Georges, Gevrey-Chambertin and Meursault with an English-speaking chauffeur. ~2h from Lyon.",
  path: "/en/burgundy-wine-tour-from-lyon",
  alternatesLang: hreflangMap["/en/burgundy-wine-tour-from-lyon"],
});

const highlights = [
  {
    name: "Beaune",
    desc: "The wine capital of Burgundy — home to négociants, the iconic Hôtel-Dieu, and hundreds of cellars to explore.",
    type: "Red & White",
  },
  {
    name: "Nuits-Saint-Georges",
    desc: "Powerful, structured Pinot Noir from this celebrated village, home to some of Burgundy's finest Premier Crus.",
    type: "Red",
  },
  {
    name: "Gevrey-Chambertin",
    desc: "Napoleon's favourite wine and Burgundy's most celebrated village, with 9 Grand Cru vineyards.",
    type: "Red",
  },
  {
    name: "Meursault",
    desc: "The white wine jewel of the Côte de Beaune — rich, buttery Chardonnay of extraordinary depth.",
    type: "White",
  },
];

const includes = [
  ["Hotel pickup in Lyon", "Door-to-door collection from your accommodation"],
  ["English-speaking chauffeur", "Expert guide with detailed Burgundy knowledge"],
  ["Premium Mercedes vehicle", "Comfort for the ~2h journey each way"],
  ["2–3 winery visits", "Curated domaines and négociants on the Côte d'Or"],
  ["Village walk in Beaune", "Time to explore the medieval centre at your pace"],
  ["Tasting fees excluded", "Paid directly to each estate — no markup"],
];

export default function BurgundyWineTourEN() {
  const tourFaqs = faqs.filter((f) => f.pages.includes("general"));

  const schemas = [
    tourSchema({
      name: "Burgundy Wine Tour from Lyon",
      description:
        "Private day trip from Lyon to Burgundy's Côte d'Or — Beaune, Nuits-Saint-Georges, Gevrey-Chambertin, and Meursault.",
      url: "/en/burgundy-wine-tour-from-lyon",
      destination: "Côte d'Or, Burgundy, France",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Wine Tours", href: "/en/wine-tours-from-lyon" },
      { name: "Burgundy Wine Tour" },
    ]),
    faqSchema(tourFaqs, "en"),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Burgundy Wine Tour from Lyon"
          subtitle="Two hours north of Lyon lies the Côte d'Or — arguably the world's greatest wine landscape. Pinot Noir and Chardonnay from legendary villages, ancient cellars, and Michelin-starred villages await."
          ctaPrimary={{ label: "Book this tour", href: "/en/contact" }}
          ctaSecondary={{ label: "See all wine tours", href: "/en/wine-tours-from-lyon" }}
        />

        {/* Highlights */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  The Côte d'Or
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Villages and appellations we explore
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  The Côte d'Or — "golden slope" — runs 50km through Burgundy, concentrating the world's most coveted Pinot Noir and Chardonnay into a narrow ribbon of limestone and clay.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((h, i) => (
                <FadeIn key={h.name} delay={i * 0.08}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-serif text-2xl text-[#080808]">{h.name}</h3>
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-2 py-0.5 rounded-full">
                        {h.type}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
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
                  Included in your tour
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Everything covered for your Burgundy day trip
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

        {/* Practical info */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Practical details
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Planning your Burgundy day trip from Lyon
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { label: "Distance from Lyon", value: "~2 hours north", note: "Via A6 autoroute, straight to Beaune" },
                { label: "Recommended duration", value: "Full day", note: "10 hours gives ample time for 3 estates + Beaune" },
                { label: "Starting from", value: "€520", note: "Per vehicle. Up to 4 guests in E-Class, 7 in V-Class." },
              ].map((item) => (
                <FadeIn key={item.label}>
                  <div className="bg-white border border-black/[0.06] rounded-sm p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-2">{item.label}</p>
                    <p className="font-serif text-2xl text-[#080808] mb-2">{item.value}</p>
                    <p className="text-gray-500 text-xs">{item.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ReviewsCarousel lang="en" />
        <FAQSection lang="en" items={tourFaqs} />
        <BookingCTA
          lang="en"
          title="Book your Burgundy wine tour from Lyon"
          subtitle="Private, tailored, unforgettable. From €520 per vehicle."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
