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
  title: "Lyon Airport Transfers | Private Chauffeur to Saint-Exupéry",
  description:
    "Fixed-price private transfers to and from Lyon Saint-Exupéry Airport (LYS). Flight tracking, meet & greet, premium Mercedes vehicles. Available 24/7.",
  path: "/en/lyon-airport-transfers",
  alternatesLang: hreflangMap["/en/lyon-airport-transfers"],
});

const features = [
  {
    icon: "✈",
    title: "Flight Tracking",
    desc: "We monitor your flight in real time. If your flight is delayed, your driver adjusts — no extra charge.",
  },
  {
    icon: "🪧",
    title: "Meet & Greet",
    desc: "Your driver waits in the arrivals hall with a name sign. No hunting for your car, no confusion.",
  },
  {
    icon: "💰",
    title: "Fixed Price",
    desc: "Price agreed before departure. No meter, no surge pricing, no airport surcharges. What we quote, you pay.",
  },
  {
    icon: "🕐",
    title: "24/7 Availability",
    desc: "Early morning flights, late-night arrivals, red-eye departures — we operate round the clock, every day.",
  },
  {
    icon: "🧳",
    title: "Luggage Assistance",
    desc: "Your driver helps load and unload bags. Perfect after long-haul flights or with heavy luggage.",
  },
  {
    icon: "🚘",
    title: "Premium Mercedes Fleet",
    desc: "Immaculate E-Class, S-Class, or V-Class. Air-conditioned, spacious, and always cleaned before your ride.",
  },
];

const routes = [
  { from: "Lyon city centre", to: "Lyon Saint-Exupéry (LYS)", time: "30–45 min", from_price: "€95" },
  { from: "Lyon city centre", to: "Geneva Airport (GVA)", time: "~1h45", from_price: "€280" },
  { from: "Lyon Saint-Exupéry", to: "Grenoble", time: "~1h", from_price: "€160" },
  { from: "Lyon city centre", to: "Chambéry Airport", time: "~1h15", from_price: "€185" },
];

export default function LyonAirportTransfersEN() {
  const schemas = [
    serviceSchema({
      name: "Lyon Airport Transfers",
      description:
        "Fixed-price private transfers to and from Lyon Saint-Exupéry Airport with premium Mercedes vehicles and English-speaking chauffeur.",
      url: "/en/lyon-airport-transfers",
      serviceType: "Airport Transfer",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Lyon Airport Transfers" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Lyon Airport Transfers"
          subtitle="Arrive and depart in comfort. Fixed-price private transfers to Lyon Saint-Exupéry Airport with flight tracking, meet & greet, and premium Mercedes vehicles. Available 24 hours a day."
          ctaPrimary={{ label: "Book a transfer", href: "/en/contact" }}
          ctaSecondary={{ label: "Get a quote on WhatsApp", href: "https://wa.me/33658593922" }}
        
          imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Lyon Saint-Exupéry airport transfer"
        />

        {/* Features */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Why book with Drive Me Lyon
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Stress-free airport transfers, every time
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  No taxi queues, no ride-share uncertainty. A dedicated driver for you, from door to departure gate.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.07}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <span className="text-2xl mb-4 block">{f.icon}</span>
                    <h3 className="font-serif text-xl text-[#080808] mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Sample routes */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Common routes
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Popular airport transfer routes
                </h2>
                <p className="text-white/50 text-base max-w-lg mx-auto">
                  These are example routes with indicative pricing. Contact us for your exact itinerary — we serve all airports across the Auvergne-Rhône-Alpes region.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {routes.map((r, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="border border-white/10 rounded-sm p-6 flex items-center justify-between hover:border-[#C6A15B]/40 transition-colors">
                    <div>
                      <p className="text-white font-semibold text-sm">{r.from} → {r.to}</p>
                      <p className="text-white/50 text-xs mt-1">{r.time}</p>
                    </div>
                    <span className="text-[#C6A15B] font-serif text-lg font-semibold">{r.from_price}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.4}>
              <p className="text-center text-white/30 text-xs mt-8">
                All prices are per vehicle (up to 4 passengers). V-Class available for larger groups. Contact us for exact quote.
              </p>
            </FadeIn>
          </div>
        </section>

        <ReviewsCarousel lang="en" />
        <BookingCTA
          lang="en"
          title="Book your Lyon airport transfer"
          subtitle="Fixed price, on time, every time. Available 24/7."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
