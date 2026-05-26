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
  title: "Rhône Valley Wine Tour from Lyon | Private Day Trip",
  description:
    "Private Rhône Valley wine tour from Lyon. Explore Côte-Rôtie, Condrieu, Saint-Joseph and Hermitage with an English-speaking chauffeur. Full-day or half-day available.",
  path: "/en/rhone-valley-wine-tour-from-lyon",
  alternatesLang: hreflangMap["/en/rhone-valley-wine-tour-from-lyon"],
});

const appellations = [
  {
    name: "Côte-Rôtie",
    type: "Red",
    grapes: "Syrah (+ up to 20% Viognier)",
    notes: "Elegant, perfumed Syrah from steep granite terraces. One of France's most prestigious reds.",
  },
  {
    name: "Condrieu",
    type: "White",
    grapes: "Viognier",
    notes: "Lush, aromatic whites with notes of apricot and jasmine. Rare and utterly distinctive.",
  },
  {
    name: "Saint-Joseph",
    type: "Red & White",
    grapes: "Syrah / Marsanne & Roussanne",
    notes: "Approachable, food-friendly reds and mineral whites across 26 villages.",
  },
  {
    name: "Hermitage",
    type: "Red & White",
    grapes: "Syrah / Marsanne",
    notes: "The apex of the Northern Rhône — age-worthy, powerful, deeply complex and collectible.",
  },
];

const includes = [
  ["Hotel pickup in Lyon", "Door-to-door collection from your accommodation"],
  ["English-speaking chauffeur", "Expert guide with deep knowledge of the region"],
  ["Premium Mercedes vehicle", "Air-conditioned comfort throughout the journey"],
  ["2–3 winery visits", "Handpicked estates with cellar tours and tastings"],
  ["Flexible itinerary", "Full day or half day, tailored to your preferences"],
  ["Tasting fees excluded", "Paid directly to each estate — no markup"],
];

export default function RhoneValleyWineTourEN() {
  const tourFaqs = faqs.filter((f) => f.pages.includes("rhone") || f.pages.includes("general"));

  const schemas = [
    tourSchema({
      name: "Rhône Valley Wine Tour from Lyon",
      description:
        "Private Rhône Valley wine tour from Lyon exploring Côte-Rôtie, Condrieu, Saint-Joseph, and Hermitage.",
      url: "/en/rhone-valley-wine-tour-from-lyon",
      destination: "Northern Rhône Valley, France",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Wine Tours", href: "/en/wine-tours-from-lyon" },
      { name: "Rhône Valley Wine Tour" },
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
          title="Rhône Valley Wine Tour from Lyon"
          subtitle="Venture south from Lyon to one of France's most revered wine landscapes. Steep granite terraces, world-class Syrah, and rare Viognier — a full-day private experience unlike any other."
          ctaPrimary={{ label: "Book this tour", href: "/en/contact" }}
          ctaSecondary={{ label: "See all wine tours", href: "/en/wine-tours-from-lyon" }}
        
          imageSrc="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Rhône Valley vineyard wine tasting"
        />

        {/* Appellations */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  The Northern Rhône
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Four legendary appellations
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  The Northern Rhône Valley stretches along granite hillsides south of Lyon, producing some of the world's most collectable wines from just two grapes — Syrah and Viognier.
                </p>
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
                    <p className="text-xs font-semibold text-[#5A1F2B] uppercase tracking-wider mb-2">{a.grapes}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{a.notes}</p>
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
                  Every tour includes
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  What's included in your Rhône Valley tour
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
                  Planning your Rhône Valley day trip
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { label: "Distance from Lyon", value: "~1 hour south", note: "Via the A7 motorway along the river" },
                { label: "Recommended duration", value: "Full day", note: "8–10 hours to cover 2–3 appellations properly" },
                { label: "Group size", value: "1–8 guests", note: "Mercedes E-Class (4 pax) or V-Class (7 pax)" },
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
          title="Book your Rhône Valley wine tour from Lyon"
          subtitle="Private, tailored, and unforgettable. From €420 per vehicle."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
