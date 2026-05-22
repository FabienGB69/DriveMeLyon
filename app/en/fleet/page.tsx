import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Fleet } from "@/components/sections/Fleet";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Our Fleet | Mercedes Premium Vehicles — Drive Me Lyon",
  description:
    "Discover our fleet of premium Mercedes vehicles — E-Class, S-Class, V-Class, and Premium Van. Immaculate, air-conditioned, and prepared for every occasion.",
  path: "/en/fleet",
  alternatesLang: hreflangMap["/en/fleet"],
});

const standards = [
  ["Cleaned before every booking", "Interior and exterior detailing before each journey"],
  ["Fresh water & refreshments", "Mineral water provided as standard on all journeys"],
  ["Leather upholstery", "Premium leather seating in all vehicles"],
  ["Climate control", "Individual temperature zones for driver and passengers"],
  ["USB & wireless charging", "Stay connected throughout your journey"],
  ["Child seats available", "On request — mention at booking time"],
];

export default function FleetEN() {
  const schemas = [
    serviceSchema({
      name: "Premium Mercedes Fleet — Drive Me Lyon",
      description:
        "Fleet of premium Mercedes vehicles including E-Class, S-Class, V-Class, and Premium Van for private chauffeur and wine tour services.",
      url: "/en/fleet",
      serviceType: "Chauffeur Service",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Our Fleet" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Our Premium Fleet"
          subtitle="Every vehicle in our fleet is a Mercedes — selected for comfort, reliability, and elegance. Whether you're travelling solo, with family, or as a group, we have the perfect vehicle for your journey."
          ctaPrimary={{ label: "Book a vehicle", href: "/en/contact" }}
          ctaSecondary={{ label: "View rates", href: "/en/rates" }}
        />

        <Fleet lang="en" />

        {/* Fleet standards */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Our standards
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Every journey, every vehicle
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  We maintain a single standard across our entire fleet — the highest. Every vehicle is prepared before each booking, without exception.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {standards.map(([title, desc], i) => (
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

        <BookingCTA
          lang="en"
          title="Book your preferred vehicle"
          subtitle="All vehicles available for single transfers, day hire, wine tours, and events."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
