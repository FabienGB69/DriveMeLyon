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
  title: "Wine Tours from Lyon | Beaujolais, Rhône Valley & Burgundy",
  description:
    "Private wine tours from Lyon to Beaujolais, Rhône Valley, and Burgundy. English-speaking chauffeur, Mercedes vehicle, flexible itinerary. Book your exclusive wine experience.",
  path: "/en/wine-tours-from-lyon",
  alternatesLang: hreflangMap["/en/wine-tours-from-lyon"],
});

const tours = [
  {
    region: "Beaujolais",
    tag: "40 min from Lyon",
    duration: "Half-day or Full-day",
    from: "From €350",
    grapes: "Gamay Noir",
    appellations: "Morgon, Moulin-à-Vent, Fleurie, Brouilly",
    style: "Fruit-forward reds, charming villages, châteaux, golden stone hills",
    best: "First-time wine visitors, casual groups, shorter itineraries",
    href: "/en/beaujolais-wine-tour-from-lyon",
    cta: "Explore Beaujolais tour",
  },
  {
    region: "Rhône Valley",
    tag: "1h from Lyon",
    duration: "Full-day recommended",
    from: "From €420",
    grapes: "Syrah & Viognier",
    appellations: "Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage",
    style: "World-class reds & aromatic whites, terraced vineyards on granite slopes",
    best: "Serious wine lovers, collectors, full-day experiences",
    href: "/en/rhone-valley-wine-tour-from-lyon",
    cta: "Explore Rhône Valley tour",
  },
  {
    region: "Burgundy",
    tag: "~2h from Lyon",
    duration: "Full-day",
    from: "From €520",
    grapes: "Pinot Noir & Chardonnay",
    appellations: "Beaune, Nuits-Saint-Georges, Gevrey-Chambertin, Meursault",
    style: "Legendary terroir, Grand Cru cellars, historic Hôtel-Dieu, world's greatest wines",
    best: "Bucket-list wine lovers, connoisseurs, special celebrations",
    href: "/en/burgundy-wine-tour-from-lyon",
    cta: "Explore Burgundy tour",
  },
];

const includes = [
  ["Hotel pickup & drop-off", "Complimentary door-to-door service in Lyon"],
  ["English-speaking driver", "Bilingual chauffeur & knowledgeable wine guide"],
  ["Premium Mercedes vehicle", "Air-conditioned, comfortable, immaculate"],
  ["Flexible itinerary", "Your pace, your preferences, your tour"],
  ["Winery visits", "2–3 handpicked estates per tour"],
  ["Tastings arranged", "On-site tastings (fees payable to estates)"],
];

export default function WineToursFromLyonEN() {
  const schemas = [
    serviceSchema({
      name: "Wine Tours from Lyon",
      description:
        "Private wine tours from Lyon to Beaujolais, Rhône Valley, and Burgundy with English-speaking chauffeur.",
      url: "/en/wine-tours-from-lyon",
      serviceType: "Wine Tour",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Wine Tours from Lyon" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Wine Tours from Lyon"
          subtitle="Three legendary wine regions within reach of Lyon — Beaujolais, Rhône Valley, and Burgundy. Private tours with an English-speaking chauffeur, tailored to your taste."
          ctaPrimary={{ label: "Book a wine tour", href: "/en/contact" }}
          ctaSecondary={{ label: "Chat on WhatsApp", href: "https://wa.me/33658593922" }}
        />

        {/* Tour cards */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Choose your wine region
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Three world-class wine regions from Lyon
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  Each region offers a completely different character. Browse all three tours below — or contact us and we'll help you choose.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {tours.map((t, i) => (
                <FadeIn key={t.region} delay={i * 0.1}>
                  <div className="border border-black/[0.06] rounded-sm overflow-hidden flex flex-col h-full">
                    <div className="bg-[#080808] p-6">
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-3 py-1 rounded-full">
                        {t.tag}
                      </span>
                      <h3 className="font-serif text-3xl text-white mt-4 mb-1">{t.region}</h3>
                      <p className="text-[#C6A15B] text-xs font-semibold uppercase tracking-wider">{t.duration}</p>
                    </div>
                    <div className="bg-[#F7F3EA] p-6 flex flex-col flex-1">
                      <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-1">
                        {[
                          ["Grapes", t.grapes],
                          ["Appellations", t.appellations],
                          ["Style", t.style],
                          ["Best for", t.best],
                        ].map(([label, value]) => (
                          <li key={label} className="flex gap-2">
                            <span className="text-[#C6A15B] flex-shrink-0 mt-0.5">→</span>
                            <span>
                              <strong className="text-[#080808]">{label}:</strong> {value}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#C6A15B]/20">
                        <span className="text-[#C6A15B] font-semibold text-sm">{t.from}</span>
                        <a
                          href={t.href}
                          className="text-xs font-bold uppercase tracking-widest text-[#080808] hover:text-[#C6A15B] transition-colors"
                        >
                          {t.cta} →
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Included in every tour
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  What's included in your private wine tour
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  No hidden fees. No surprises. Everything you need for a perfect day in the vineyards.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {includes.map(([title, desc], i) => (
                <FadeIn key={title} delay={i * 0.07}>
                  <div className="border border-[#C6A15B]/20 bg-white rounded-sm p-6">
                    <span className="text-[#C6A15B] text-lg font-serif mr-2">✓</span>
                    <span className="font-semibold text-[#080808] text-sm">{title}</span>
                    <p className="text-gray-500 text-xs leading-relaxed mt-2">{desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ReviewsCarousel lang="en" />
        <BookingCTA
          lang="en"
          title="Ready to explore the vineyards around Lyon?"
          subtitle="Contact us to design your perfect private wine tour. Available for 1 to 8 guests."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
