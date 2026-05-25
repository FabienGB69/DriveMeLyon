import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { FAQSection } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Wine Tours from Lyon | Beaujolais, Rhône Valley & Burgundy Day Trips",
  description:
    "Book a private wine tour from Lyon — Beaujolais, Northern Rhône Valley or Burgundy. English-speaking chauffeur, Mercedes, hotel pickup, winery reservations assistance.",
  path: "/en/wine-tours-from-lyon",
  alternatesLang: hreflangMap["/en/wine-tours-from-lyon"],
});

const includes = [
  {
    title: "Hotel pickup",
    desc: "Door-to-door from any Lyon hotel, Airbnb or residence",
  },
  {
    title: "English-speaking chauffeur",
    desc: "Bilingual driver and knowledgeable local guide",
  },
  {
    title: "Winery reservations",
    desc: "We book the best estates on your behalf",
  },
  {
    title: "Flexible schedule",
    desc: "Full day, half day, or custom duration",
  },
  {
    title: "Mercedes vehicle",
    desc: "Premium air-conditioned comfort for 1–7 passengers",
  },
  {
    title: "Group-friendly",
    desc: "Private van for groups up to 7 (Mercedes V-Class)",
  },
];

const tourCards = [
  {
    region: "Beaujolais",
    tag: "45 min from Lyon",
    grapes: "Gamay Noir",
    appellations: "Morgon, Moulin-à-Vent, Fleurie, Brouilly",
    mood: "Charming villages, golden stone châteaux, approachable fruit-forward wines",
    bestFor: "First-time wine visitors, couples, half-day tours",
    from: "From €350",
    href: "/en/beaujolais-wine-tour-from-lyon",
  },
  {
    region: "Rhône Valley",
    tag: "1h from Lyon",
    grapes: "Syrah & Viognier",
    appellations: "Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage",
    mood: "Prestigious, powerful, world-class",
    bestFor: "Wine connoisseurs, collectors",
    from: "From €420",
    href: "/en/rhone-valley-wine-tour-from-lyon",
  },
  {
    region: "Burgundy",
    tag: "1h45 from Lyon",
    grapes: "Pinot Noir & Chardonnay",
    appellations: "Beaune, Nuits-Saint-Georges, Gevrey-Chambertin, Meursault",
    mood: "Legendary, complex, the world's most prestigious wines",
    bestFor: "Collectors, special occasions",
    from: "From €520",
    href: "/en/burgundy-wine-tour-from-lyon",
  },
];

const logisticsPoints = [
  "Direct pickup from any Lyon hotel — Grand Hôtel-Dieu, Fourvière Hôtel, Collège Hôtel, and all others",
  "Morning departure set around your schedule, typically 9:00–9:30 AM",
  "All winery reservations handled before your tour, at no extra cost",
  "Full-day tours include a lunch stop recommendation",
  "Evening drop-off at your hotel or any Lyon address",
];

const stats = [
  { value: "100+", label: "International groups per year" },
  { value: "5.0★", label: "Google rating" },
  { value: "3", label: "Wine regions" },
  { value: "< 2h", label: "Response time" },
];

export default function WineToursFromLyonEN() {
  const wineFaqs = faqs.filter(
    (f) =>
      f.pages.includes("beaujolais") ||
      f.pages.includes("rhone") ||
      f.pages.includes("general"),
  );

  const schemas = [
    serviceSchema({
      name: "Private Wine Tours from Lyon",
      description:
        "Book a private wine tour from Lyon — Beaujolais, Northern Rhône Valley or Burgundy. English-speaking chauffeur, Mercedes, hotel pickup, winery reservations assistance.",
      url: "/en/wine-tours-from-lyon",
      serviceType: "Wine Tour",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Wine Tours from Lyon" },
    ]),
    faqSchema(wineFaqs, "en"),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        {/* Section 1: Hero */}
        <Hero
          lang="en"
          title="Private Wine Tours from Lyon with English-Speaking Chauffeur"
          subtitle="Beaujolais, Northern Rhône Valley and Burgundy — bespoke private day trips from Lyon. Hotel pickup, winery reservations assistance, Mercedes vehicle."
          ctaPrimary={{ label: "Book a wine tour", href: "/en/contact" }}
          ctaSecondary={{ label: "Discover Beaujolais", href: "/en/beaujolais-wine-tour-from-lyon" }}
        />

        {/* Section 2: What's included */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Every tour includes
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Everything included in your private wine tour
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  No hidden costs. All services below are included in your quote.
                </p>
              </div>
            </FadeIn>
            <FadeInStagger>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {includes.map((item) => (
                  <FadeInItem key={item.title}>
                    <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#C6A15B] text-lg font-serif">✓</span>
                        <span className="font-semibold text-[#080808] text-sm">{item.title}</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </FadeInStagger>
          </div>
        </section>

        {/* Section 3: Tour destination cards */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Wine regions
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Choose your wine region
                </h2>
                <p className="text-white/50 text-base max-w-lg mx-auto">
                  Three completely different wine experiences — all within 2 hours of Lyon
                </p>
              </div>
            </FadeIn>
            <FadeInStagger>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {tourCards.map((card) => (
                  <FadeInItem key={card.region}>
                    <div className="border-t-2 border-[#C6A15B] bg-[#171717] rounded-sm p-8 flex flex-col h-full">
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-3 py-1 rounded-full self-start mb-4">
                        {card.tag}
                      </span>
                      <h3 className="font-serif text-3xl text-white mb-2">{card.region}</h3>
                      <p className="text-[#C6A15B] text-xs font-semibold uppercase tracking-wider mb-5">
                        {card.grapes}
                      </p>
                      <ul className="space-y-3 text-sm text-white/70 mb-6 flex-1">
                        <li className="flex gap-2">
                          <span className="text-[#C6A15B] flex-shrink-0">→</span>
                          <span>
                            <strong className="text-white">Key appellations:</strong>{" "}
                            {card.appellations}
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#C6A15B] flex-shrink-0">→</span>
                          <span>
                            <strong className="text-white">Character:</strong> {card.mood}
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#C6A15B] flex-shrink-0">→</span>
                          <span>
                            <strong className="text-white">Best for:</strong> {card.bestFor}
                          </span>
                        </li>
                      </ul>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                        <span className="text-[#C6A15B] font-semibold text-sm">{card.from}</span>
                        <a
                          href={card.href}
                          className="text-xs font-bold uppercase tracking-widest text-[#C6A15B] hover:text-white transition-colors"
                        >
                          Explore →
                        </a>
                      </div>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </FadeInStagger>
          </div>
        </section>

        {/* Section 4: Custom itinerary */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-16 h-px bg-[#C6A15B] mx-auto mb-8" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Fully bespoke
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-8">
                  Every tour is private and fully customized
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-5">
                  No shared groups. No fixed schedules. Your tour is built around your interests, your
                  pace, and your preferred wineries. Whether you want to focus on a single appellation,
                  combine two regions, add a Michelin-starred restaurant lunch, or extend your day with a
                  scenic drive — we make it happen.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-10">
                  Simply tell us what you're looking for when you contact us. We'll propose an itinerary,
                  handle the winery reservations, and prepare your vehicle.
                </p>
                <a
                  href="/en/contact"
                  className="text-[#C6A15B] font-semibold text-sm tracking-wide hover:text-[#080808] transition-colors"
                >
                  Build your custom itinerary →
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 5: Hotel pickup & logistics */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Door-to-door service
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Seamless logistics, from your hotel door
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeIn direction="left">
                <ul className="space-y-5">
                  {logisticsPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="text-[#C6A15B] flex-shrink-0 font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn direction="right">
                <div className="bg-[#F7F3EA] border border-[#C6A15B]/20 p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat) => (
                      <div key={stat.value} className="text-center">
                        <p className="font-serif text-4xl text-[#C6A15B] mb-1">{stat.value}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section 6: Reviews */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Client testimonials
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  What our international wine tour guests say
                </h2>
              </div>
            </FadeIn>
          </div>
          <ReviewsCarousel lang="en" />
        </section>

        {/* Section 7: Private van for groups */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Group wine tours
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Private tours for groups — up to 7 passengers
                </h2>
              </div>
            </FadeIn>
            <FadeInStagger>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: "Mercedes V-Class",
                    desc: "Spacious 7-seat van for comfortable group travel with room for wine purchases.",
                  },
                  {
                    title: "Family & friends",
                    desc: "Birthday wine tours, anniversaries, corporate team outings.",
                  },
                  {
                    title: "Group pricing",
                    desc: "Custom quotes for groups of 4–7. Better value per person.",
                  },
                ].map((feat) => (
                  <FadeInItem key={feat.title}>
                    <div className="text-center p-6">
                      <h3 className="font-serif text-2xl text-[#C6A15B] mb-3">{feat.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </FadeInStagger>
            <div className="text-center">
              <a
                href="/en/contact"
                className="inline-block bg-[#C6A15B] text-[#080808] font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-[#d4b06a] transition-colors"
              >
                Request a group quote
              </a>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <FAQSection lang="en" items={wineFaqs} />

        {/* Section 9: BookingCTA */}
        <BookingCTA lang="en" title="Plan your private wine tour from Lyon" />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
