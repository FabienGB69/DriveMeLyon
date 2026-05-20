import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { SignatureExperiences } from "@/components/sections/SignatureExperiences";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { FAQSection } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { faqs } from "@/data/faqs";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Wine Tours from Lyon | Private Beaujolais & Rhône Valley Tours",
  description: "Discover our private wine tours from Lyon. Beaujolais and Northern Rhône Valley excursions with an English-speaking chauffeur and premium Mercedes vehicle.",
  path: "/en/wine-tours",
  alternatesLang: hreflangMap["/en/wine-tours"],
});

const includes = [
  ["Hotel pickup", "Complimentary door-to-door collection in Lyon"],
  ["English-speaking chauffeur", "Bilingual driver & local guide throughout"],
  ["Flexible schedule", "Full day or half day, pace set by you"],
  ["Mercedes vehicle", "Air-conditioned premium comfort"],
  ["Winery visits", "Curated family estates, 2–3 stops per tour"],
  ["Wine tastings", "On-site tastings (fees payable to estates)"],
];

export default function WineToursEN() {
  const generalFaqs = faqs.filter((f) => f.pages.includes("beaujolais") || f.pages.includes("general"));

  const schemas = [
    serviceSchema({
      name: "Private Wine Tours from Lyon",
      description: "Private wine tours from Lyon to Beaujolais and Northern Rhône Valley with English-speaking chauffeur.",
      url: "/en/wine-tours",
      serviceType: "Wine Tour",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Wine Tours" },
    ]),
    faqSchema(generalFaqs, "en"),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Private wine tours from Lyon"
          subtitle="Discover the Beaujolais and Northern Rhône Valley with a bespoke private wine tour from Lyon. English-speaking chauffeur, Mercedes vehicle, flexible itinerary."
          ctaPrimary={{ label: "Book a wine tour", href: "/en/contact" }}
          ctaSecondary={{ label: "Learn about Beaujolais", href: "/en/beaujolais-wine-tour-from-lyon" }}
        />

        {/* What's included */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">Every tour includes</span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">What's included in your private wine tour</h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">No hidden costs. Everything listed below is part of the service.</p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {includes.map(([title, desc], i) => (
                <FadeIn key={title} delay={i * 0.07}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-6">
                    <span className="text-[#C6A15B] text-lg font-serif mr-2">✓</span>
                    <span className="font-semibold text-[#080808] text-sm">{title}</span>
                    <p className="text-gray-500 text-xs leading-relaxed mt-2">{desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Beaujolais vs Rhône comparison */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">Choose your region</span>
                <h2 className="font-serif text-4xl text-white mb-4">Beaujolais or Rhône Valley?</h2>
                <p className="text-white/50 text-base max-w-lg mx-auto">Two completely different wine experiences, both within an hour of Lyon.</p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  region: "Beaujolais",
                  tag: "40 min from Lyon",
                  mood: "Charming & approachable",
                  grapes: "Gamay Noir",
                  appellations: "Morgon, Moulin-à-Vent, Fleurie, Brouilly",
                  style: "Light-to-medium reds, fruit-forward, excellent value",
                  best: "First-time wine travelers, casual groups, half-day tours",
                  href: "/en/beaujolais-wine-tour-from-lyon",
                },
                {
                  region: "Northern Rhône Valley",
                  tag: "1h from Lyon",
                  mood: "Prestigious & powerful",
                  grapes: "Syrah & Viognier",
                  appellations: "Côte-Rôtie, Condrieu, Hermitage, Saint-Joseph",
                  style: "World-class reds & whites, collectible, age-worthy",
                  best: "Serious wine lovers, connoisseurs, full-day experiences",
                  href: "/en/northern-rhone-valley-wine-tour-from-lyon",
                },
              ].map((r, i) => (
                <FadeIn key={r.region} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
                  <div className="border border-white/10 rounded-sm p-8 hover:border-[#C6A15B]/40 transition-colors">
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-3 py-1 rounded-full">
                      {r.tag}
                    </span>
                    <h3 className="font-serif text-3xl text-white mt-4 mb-2">{r.region}</h3>
                    <p className="text-[#C6A15B] text-xs font-semibold uppercase tracking-wider mb-5">{r.mood}</p>
                    <ul className="space-y-3 text-sm text-white/70 mb-7">
                      {[
                        ["Grapes", r.grapes],
                        ["Key appellations", r.appellations],
                        ["Wine style", r.style],
                        ["Best for", r.best],
                      ].map(([label, value]) => (
                        <li key={label} className="flex gap-2">
                          <span className="text-[#C6A15B] flex-shrink-0">→</span>
                          <span><strong className="text-white">{label}:</strong> {value}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={r.href} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C6A15B] hover:gap-4 transition-all">
                      Explore this tour →
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <SignatureExperiences lang="en" />
        <ReviewsCarousel lang="en" />
        <FAQSection lang="en" items={generalFaqs} />
        <BookingCTA lang="en" title="Plan your private wine tour from Lyon" />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
