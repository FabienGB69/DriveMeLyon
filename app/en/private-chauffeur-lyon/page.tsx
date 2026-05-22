import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Private Chauffeur Lyon | English-Speaking Driver for Business & Events",
  description:
    "Professional English-speaking private driver in Lyon. Business meetings, luxury hotel transfers, airport runs, restaurant evenings and private events. Mercedes fleet, fixed rates.",
  path: "/en/private-chauffeur-lyon",
  alternatesLang: hreflangMap["/en/private-chauffeur-lyon"],
});

const useCases = [
  {
    emoji: "💼",
    title: "Business meetings",
    description:
      "Boardroom-ready presentation. Door-to-door from your hotel or office, on time, every time.",
  },
  {
    emoji: "🏨",
    title: "Luxury hotel arrivals",
    description:
      "Welcomed at Lyon's finest hotels: Grand Hôtel-Dieu, Fourvière Hôtel, Collège Hôtel.",
  },
  {
    emoji: "✈️",
    title: "Airport transfers",
    description:
      "Flight tracking, meet & greet, fixed rates. Lyon Saint-Exupéry 24/7.",
  },
  {
    emoji: "🍽️",
    title: "Restaurant evenings",
    description:
      "Arrive and depart in style. Your evening, uninterrupted.",
  },
  {
    emoji: "🥂",
    title: "Private events",
    description:
      "Weddings, galas, VIP evenings. Impeccable presentation guaranteed.",
  },
  {
    emoji: "🗓️",
    title: "Day hire",
    description:
      "Full or half-day exclusive hire for multiple stops, site visits or shopping.",
  },
];

const trustPillars = [
  {
    title: "Punctuality",
    description:
      "We track your flight, monitor traffic, and arrive 10 minutes early. Always.",
  },
  {
    title: "Discretion",
    description:
      "Confidential conversations stay confidential. No phone calls during your transfer.",
  },
  {
    title: "English-speaking",
    description:
      "Native-level English communication. No language barrier, ever.",
  },
];

const stats = [
  { value: "100+", label: "5-star reviews" },
  { value: "24/7", label: "availability" },
  { value: "Mercedes", label: "E / S / V Class" },
];

const included = [
  "Hotel, office or residence pickup",
  "Complimentary waiting time (15 min airport, 10 min city)",
  "Meet & greet at airport arrivals",
  "Flight tracking included",
  "Bottled water and phone charger on board",
  "Fixed prices — no surge pricing",
  "Invoice provided for business travel",
  "Bilingual FR/EN communication",
];

const chauffeurFaqs = faqs.filter((f) =>
  f.pages.some((p) => p === "chauffeur" || p === "general" || p === "airport")
);

export default function PrivateChauffeurLyonEN() {
  const schemas = [
    serviceSchema({
      name: "Private Chauffeur Lyon",
      description:
        "Professional English-speaking private driver in Lyon. Business meetings, luxury hotel transfers, airport runs, restaurant evenings and private events. Mercedes fleet, fixed rates.",
      url: "/en/private-chauffeur-lyon",
      serviceType: "Chauffeur Service",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Private Chauffeur Lyon" },
    ]),
    faqSchema(chauffeurFaqs, "en"),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        {/* Hero */}
        <Hero
          lang="en"
          title="English-Speaking Private Chauffeur in Lyon"
          subtitle="Business meetings, luxury hotel arrivals, airport runs, evening events — discreet, punctual, premium Mercedes fleet."
          ctaPrimary={{ label: "Request a chauffeur", href: "/en/contact" }}
          ctaSecondary={{ label: "View rates", href: "/en/rates" }}
        />

        {/* Section 1: Use cases */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Services
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#080808]">
                  Your chauffeur for every occasion
                </h2>
              </div>
            </FadeIn>
            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <FadeInItem key={uc.title}>
                  <div className="bg-white border-l-2 border-[#C6A15B] pl-5 pr-6 py-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-3">{uc.emoji}</div>
                    <h3 className="font-serif text-xl text-[#080808] mb-2">{uc.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{uc.description}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        {/* Section 2: Trust proofs */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Why clients trust us
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-white">
                  Why international clients choose Drive Me Lyon
                </h2>
              </div>
            </FadeIn>
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {trustPillars.map((pillar) => (
                <FadeInItem key={pillar.title}>
                  <div className="border border-[#C6A15B]/30 p-8 text-center">
                    <h3 className="font-serif text-2xl text-[#C6A15B] mb-4">{pillar.title}</h3>
                    <p className="text-gray-400 leading-relaxed">&ldquo;{pillar.description}&rdquo;</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <FadeInItem key={stat.label}>
                  <div className="text-center py-8 border border-white/10">
                    <div className="font-serif text-4xl text-[#C6A15B] mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        {/* Section 3: What's included */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Included
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#080808]">
                  What&rsquo;s included in your chauffeur service
                </h2>
              </div>
            </FadeIn>
            <FadeIn>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#C6A15B] font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-[#171717] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Section 4: WhatsApp CTA strip */}
        <section className="bg-[#5A1F2B] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                Need a chauffeur today?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Message us on WhatsApp — we typically respond in under 10 minutes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/33658593922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C6A15B] text-[#080808] font-semibold px-7 py-3 hover:bg-[#d4b06a] transition-colors"
                >
                  Message on WhatsApp
                </a>
                <a
                  href="tel:+33658593922"
                  className="inline-flex items-center gap-2 border border-white text-white font-semibold px-7 py-3 hover:bg-white/10 transition-colors"
                >
                  Call now
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <FAQSection lang="en" items={chauffeurFaqs} />

        {/* Section 6: BookingCTA */}
        <BookingCTA lang="en" />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
