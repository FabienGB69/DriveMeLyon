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
  title: "Private Lyon City Tour | Guided Exploration with a Chauffeur",
  description:
    "Private guided city tour of Lyon with an English-speaking chauffeur. Explore Vieux-Lyon, Presqu'île, Fourvière, and Croix-Rousse. Half-day and full-day options.",
  path: "/en/private-lyon-city-tour",
  alternatesLang: hreflangMap["/en/private-lyon-city-tour"],
});

const neighborhoods = [
  {
    name: "Vieux-Lyon",
    subtitle: "UNESCO World Heritage",
    desc: "The finest Renaissance quarter outside Italy. Explore labyrinthine traboules, medieval churches, and vibrant bouchon restaurants tucked into cobblestone streets.",
  },
  {
    name: "Presqu'île",
    subtitle: "The Heart of Lyon",
    desc: "The elegant peninsula between the Saône and Rhône rivers, home to Place Bellecour, the opera house, grand Haussmann-style boulevards, and Lyon's finest shops.",
  },
  {
    name: "Fourvière",
    subtitle: "The Praying Hill",
    desc: "The hilltop basilica offers breathtaking panoramic views over Lyon. Home to Roman amphitheatres, Gallo-Roman museums, and the city's spiritual heart.",
  },
  {
    name: "Croix-Rousse",
    subtitle: "The Working Hill",
    desc: "Once the city of silk workers (canuts), now a bohemian village within the city. Steep streets, murals, morning markets, and the best café culture in Lyon.",
  },
];

const options = [
  {
    duration: "2 hours",
    title: "Highlights Tour",
    from: "From €120",
    desc: "A swift introduction to Lyon's must-sees. Ideal on a short layover or as your first taste of the city.",
    stops: ["Vieux-Lyon & traboules", "Fourvière panoramic viewpoint", "Place Bellecour"],
  },
  {
    duration: "4 hours",
    title: "Deep Dive Tour",
    from: "From €220",
    desc: "A thorough exploration of all four major neighbourhoods at a relaxed pace.",
    stops: ["All 4 neighbourhoods", "Roman amphitheatres at Fourvière", "Croix-Rousse market (am)", "Bouchon lunch stop"],
  },
];

export default function PrivateLyonCityTourEN() {
  const schemas = [
    serviceSchema({
      name: "Private Lyon City Tour",
      description:
        "Private guided city tour of Lyon with an English-speaking chauffeur covering Vieux-Lyon, Presqu'île, Fourvière, and Croix-Rousse.",
      url: "/en/private-lyon-city-tour",
      serviceType: "City Tour",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Private Lyon City Tour" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Private Lyon City Tour"
          subtitle="Lyon is a city that rewards exploration. Discover UNESCO-listed Vieux-Lyon, the hilltop basilica at Fourvière, the bohemian Croix-Rousse, and the grand Presqu'île — at your own pace with a knowledgeable English-speaking driver."
          ctaPrimary={{ label: "Book a city tour", href: "/en/contact" }}
          ctaSecondary={{ label: "Chat on WhatsApp", href: "https://wa.me/33658593922" }}
        
          imageSrc="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Lyon city private tour"
        />

        {/* Neighbourhoods */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Lyon's finest districts
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Four neighbourhoods, four worlds
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  Each district of Lyon has its own distinct character. Our tour connects them all into a seamless, unhurried experience.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {neighborhoods.map((n, i) => (
                <FadeIn key={n.name} delay={i * 0.08}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-2 py-0.5 rounded-full">
                      {n.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-[#080808] mt-3 mb-2">{n.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{n.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Tour options */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Tour options
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Choose your Lyon city tour
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
                    <p className="text-[#C6A15B] font-semibold text-sm mb-3">{o.from} per vehicle</p>
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

        {/* Why choose */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Why Drive Me Lyon
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  The private tour difference
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                ["No fixed schedule", "Start when you want, stop when you want, linger as long as you like."],
                ["Insider knowledge", "Your driver knows the best traboules, hidden viewpoints, and local café secrets."],
                ["Fully private", "Just your group — no strangers, no tour bus, no rushing."],
              ].map(([title, desc], i) => (
                <FadeIn key={title} delay={i * 0.07}>
                  <div className="bg-white border border-black/[0.06] rounded-sm p-6 text-center">
                    <h3 className="font-serif text-xl text-[#080808] mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ReviewsCarousel lang="en" />
        <BookingCTA
          lang="en"
          title="Book your private Lyon city tour"
          subtitle="From €120 for 2 hours. Custom itineraries available."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
