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
  title: "Group Transport Lyon | Minivan & Coach Hire with Chauffeur",
  description:
    "Group transport in Lyon for weddings, corporate events, and private outings. Mercedes V-Class Viano, up to 8 passengers. Professional chauffeur service.",
  path: "/en/group-transport-lyon",
  alternatesLang: hreflangMap["/en/group-transport-lyon"],
});

const useCases = [
  {
    icon: "💒",
    title: "Weddings",
    desc: "Elegant group transport for wedding parties. The bridal party, family, guests — coordinated arrivals and departures with a smartly dressed chauffeur.",
  },
  {
    icon: "🏢",
    title: "Corporate Groups",
    desc: "Airport pickups for delegations, team shuttles between venues, client roadshows across Lyon and the surrounding region.",
  },
  {
    icon: "🍷",
    title: "Wine Tour Groups",
    desc: "The Mercedes V-Class fits 7 passengers comfortably for a shared wine tour in Beaujolais or the Rhône Valley. Perfect for groups of friends.",
  },
  {
    icon: "🎉",
    title: "Private Events",
    desc: "Concert nights, birthday outings, gala dinners — arrive together in style without worrying about parking or designated drivers.",
  },
  {
    icon: "✈",
    title: "Airport Groups",
    desc: "Shared airport transfers for large families, travel groups, or corporate teams. One vehicle, one fixed price, everyone together.",
  },
  {
    icon: "🏞",
    title: "Day Excursions",
    desc: "Full-day hire for sightseeing, regional exploration, or sporting events. Your group, your vehicle, your schedule.",
  },
];

const fleet = [
  {
    model: "Mercedes V-Class Viano",
    capacity: "Up to 7 passengers",
    luggage: "Large luggage capacity",
    features: ["Captain chairs", "Climate control", "Rear partition available", "USB charging"],
  },
  {
    model: "Mercedes E-Class",
    capacity: "Up to 4 passengers",
    luggage: "3 full-size cases",
    features: ["Executive saloon", "Premium leather", "Climate control", "Privacy glass"],
  },
];

export default function GroupTransportLyonEN() {
  const schemas = [
    serviceSchema({
      name: "Group Transport Lyon",
      description:
        "Minivan and chauffeur-driven group transport in Lyon for weddings, corporate events, wine tours, and private outings.",
      url: "/en/group-transport-lyon",
      serviceType: "Group Transport",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Group Transport Lyon" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Group Transport Lyon"
          subtitle="Travel together in comfort. Mercedes V-Class minivan for groups of up to 7 passengers, with a professional chauffeur. Weddings, corporate events, wine tours, airport transfers — all covered."
          ctaPrimary={{ label: "Request a group quote", href: "/en/contact" }}
          ctaSecondary={{ label: "WhatsApp us", href: "https://wa.me/33658593922" }}
        />

        {/* Use cases */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Perfect for
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Group transport for every occasion
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  One premium vehicle, one professional driver, your whole group together.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((u, i) => (
                <FadeIn key={u.title} delay={i * 0.07}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <span className="text-2xl mb-4 block">{u.icon}</span>
                    <h3 className="font-serif text-xl text-[#080808] mb-2">{u.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{u.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Our vehicles
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Premium group vehicles
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fleet.map((v, i) => (
                <FadeIn key={v.model} delay={i * 0.1}>
                  <div className="border border-white/10 rounded-sm p-8 hover:border-[#C6A15B]/40 transition-colors">
                    <h3 className="font-serif text-2xl text-white mb-2">{v.model}</h3>
                    <p className="text-[#C6A15B] text-sm font-semibold mb-1">{v.capacity}</p>
                    <p className="text-white/50 text-xs mb-5">{v.luggage}</p>
                    <ul className="space-y-2">
                      {v.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-white/70">
                          <span className="text-[#C6A15B]">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ReviewsCarousel lang="en" />
        <BookingCTA
          lang="en"
          title="Book group transport in Lyon"
          subtitle="Up to 7 passengers. Fixed prices. Contact us for a custom group quote."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
