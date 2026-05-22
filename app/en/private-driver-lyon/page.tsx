import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Fleet } from "@/components/sections/Fleet";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Private Driver Lyon | Premium Chauffeur Service",
  description:
    "Professional private driver service in Lyon. Corporate transfers, day hire, airport runs, and event transport with Mercedes vehicles and an English-speaking driver.",
  path: "/en/private-driver-lyon",
  alternatesLang: hreflangMap["/en/private-driver-lyon"],
});

const services = [
  {
    icon: "✈",
    title: "Airport Transfers",
    desc: "Fixed-price, on-time transfers to/from Lyon Saint-Exupéry (LYS) and Geneva (GVA). Flight tracking included.",
  },
  {
    icon: "💼",
    title: "Corporate Transport",
    desc: "Reliable door-to-door service for business meetings, roadshows, and executive travel across Lyon and beyond.",
  },
  {
    icon: "📅",
    title: "Day Hire",
    desc: "Book your driver for a full or half day. Perfect for client tours, multi-stop errands, or leisure days out.",
  },
  {
    icon: "🍷",
    title: "Wine Region Excursions",
    desc: "Combine private driver hire with a curated winery visit in Beaujolais or the Rhône Valley.",
  },
  {
    icon: "🎉",
    title: "Events & Special Occasions",
    desc: "Weddings, galas, concerts — arrive in style with a smartly dressed driver and immaculate Mercedes vehicle.",
  },
  {
    icon: "🌙",
    title: "Night & Long Distance",
    desc: "Available 24/7 including late-night pickups. Long-distance journeys to Paris, Geneva, or anywhere in France.",
  },
];

const whyChoose = [
  ["Fully licensed & insured", "VTC-certified driver operating under French transport law"],
  ["Bilingual English/French", "Seamless communication for international clients"],
  ["Premium Mercedes fleet", "E-Class, S-Class, and V-Class vehicles — always immaculate"],
  ["Fixed transparent pricing", "No meter, no surcharges — price agreed before departure"],
  ["24/7 availability", "Round-the-clock service, 365 days a year"],
  ["Local expertise", "Born-and-raised Lyon knowledge for the best routes and hidden gems"],
];

export default function PrivateDriverLyonEN() {
  const schemas = [
    serviceSchema({
      name: "Private Driver Lyon",
      description:
        "Professional private driver service in Lyon for corporate transfers, day hire, airport runs, and events.",
      url: "/en/private-driver-lyon",
      serviceType: "Private Driver",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Private Driver Lyon" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Private Driver Lyon"
          subtitle="Professional, discreet, and always on time. Whether you need an airport run, a corporate chauffeur, or a full-day driver across Lyon, we have you covered with premium Mercedes vehicles."
          ctaPrimary={{ label: "Request a driver", href: "/en/contact" }}
          ctaSecondary={{ label: "View our fleet", href: "/en/fleet" }}
        />

        {/* Services grid */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  All occasions covered
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Private driver services in Lyon
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  From a single airport transfer to a week-long corporate roadshow — your dedicated driver adapts to your schedule.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.07}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7 h-full">
                    <span className="text-2xl mb-4 block">{s.icon}</span>
                    <h3 className="font-serif text-xl text-[#080808] mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  The Drive Me Lyon difference
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Why choose Drive Me Lyon?
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChoose.map(([title, desc], i) => (
                <FadeIn key={title} delay={i * 0.07}>
                  <div className="border border-white/10 rounded-sm p-6 hover:border-[#C6A15B]/40 transition-colors">
                    <span className="text-[#C6A15B] font-serif text-lg mr-2">✓</span>
                    <span className="font-semibold text-white text-sm">{title}</span>
                    <p className="text-white/50 text-xs leading-relaxed mt-2">{desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Fleet lang="en" />
        <ReviewsCarousel lang="en" />
        <BookingCTA
          lang="en"
          title="Book your private driver in Lyon"
          subtitle="Available 24/7. Fixed prices. No surprises."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
