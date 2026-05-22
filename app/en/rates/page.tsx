import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Rates & Pricing | Drive Me Lyon Chauffeur & Wine Tours",
  description:
    "Transparent pricing for Drive Me Lyon services. Airport transfers from €95, wine tours from €350, city tours from €120. Fixed prices, no hidden fees, VAT included.",
  path: "/en/rates",
  alternatesLang: hreflangMap["/en/rates"],
});

const pricingCategories = [
  {
    category: "Airport Transfers",
    description: "Fixed-price transfers to/from Lyon Saint-Exupéry Airport (LYS) and other regional airports.",
    items: [
      { name: "Lyon city centre ↔ Lyon Saint-Exupéry (LYS)", price: "From €95", note: "Up to 4 passengers" },
      { name: "Lyon ↔ Geneva Airport (GVA)", price: "From €280", note: "Up to 4 passengers" },
      { name: "Lyon ↔ Grenoble", price: "From €160", note: "Up to 4 passengers" },
      { name: "Lyon ↔ Chambéry Airport", price: "From €185", note: "Up to 4 passengers" },
      { name: "V-Class supplement (up to 7 pax)", price: "+€30", note: "Added to base price" },
    ],
  },
  {
    category: "Wine Tours",
    description: "Private full-day and half-day wine tours from Lyon. All prices per vehicle.",
    items: [
      { name: "Beaujolais — Half day (~5h)", price: "From €350", note: "Up to 4 passengers" },
      { name: "Beaujolais — Full day (~8h)", price: "From €480", note: "Up to 4 passengers" },
      { name: "Rhône Valley — Full day (~10h)", price: "From €420", note: "Up to 4 passengers" },
      { name: "Burgundy — Full day (~10h)", price: "From €520", note: "Up to 4 passengers" },
      { name: "V-Class supplement for wine tours", price: "+€50", note: "Groups of 5–7 passengers" },
    ],
  },
  {
    category: "City Tours — Lyon",
    description: "Private guided tours of Lyon with an English-speaking chauffeur.",
    items: [
      { name: "2-hour highlights tour", price: "From €120", note: "Up to 4 passengers" },
      { name: "4-hour deep dive tour", price: "From €220", note: "Up to 4 passengers" },
      { name: "Full-day Lyon discovery", price: "From €380", note: "Up to 4 passengers" },
    ],
  },
  {
    category: "Day Hire (Driver + Vehicle)",
    description: "Book your driver and Mercedes for a full or half day. Ideal for corporate use, roadshows, or personal errands.",
    items: [
      { name: "Half-day hire (up to 4h)", price: "From €290", note: "E-Class, up to 4 passengers" },
      { name: "Full-day hire (up to 10h)", price: "From €490", note: "E-Class, up to 4 passengers" },
      { name: "V-Class half-day hire", price: "From €380", note: "Up to 7 passengers" },
      { name: "V-Class full-day hire", price: "From €620", note: "Up to 7 passengers" },
    ],
  },
];

export default function RatesEN() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Rates & Pricing" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Rates & Pricing"
          subtitle="Transparent, fixed prices with no hidden fees. All prices include VAT. For custom itineraries, multi-day bookings, or group requests, contact us for a tailored quote."
          ctaPrimary={{ label: "Request a custom quote", href: "/en/contact" }}
          ctaSecondary={{ label: "WhatsApp for quick quote", href: "https://wa.me/33658593922" }}
        />

        {/* Pricing tables */}
        <section className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Transparent pricing
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  All rates — Drive Me Lyon
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  All prices include VAT and are per vehicle, not per person. Tasting fees on wine tours are paid directly to wineries.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-10">
              {pricingCategories.map((cat, ci) => (
                <FadeIn key={cat.category} delay={ci * 0.08}>
                  <div className="border border-black/[0.06] rounded-sm overflow-hidden">
                    <div className="bg-[#080808] px-7 py-5">
                      <h3 className="font-serif text-2xl text-white">{cat.category}</h3>
                      <p className="text-white/50 text-xs mt-1">{cat.description}</p>
                    </div>
                    <div className="divide-y divide-black/[0.06]">
                      {cat.items.map((item, ii) => (
                        <div key={ii} className="flex items-center justify-between px-7 py-4 bg-[#F7F3EA] hover:bg-white transition-colors">
                          <div>
                            <p className="text-[#080808] text-sm font-medium">{item.name}</p>
                            <p className="text-gray-400 text-xs mt-0.5">{item.note}</p>
                          </div>
                          <span className="text-[#C6A15B] font-serif text-lg font-semibold flex-shrink-0 ml-4">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.6}>
              <div className="mt-12 bg-[#F7F3EA] border border-[#C6A15B]/20 rounded-sm p-7 text-center">
                <p className="font-serif text-xl text-[#080808] mb-2">All prices include VAT</p>
                <p className="text-gray-500 text-sm max-w-lg mx-auto">
                  Prices listed are starting prices per vehicle. Final quote depends on exact pickup/dropoff addresses, timing, and vehicle selected. Contact us for a precise quote — we respond within the hour.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <a href="/en/contact" className="inline-flex items-center justify-center gap-2 bg-[#080808] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#C6A15B] transition-colors">
                    Request a quote
                  </a>
                  <a href="https://wa.me/33658593922" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-[#C6A15B] text-[#C6A15B] text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#C6A15B] hover:text-white transition-colors">
                    WhatsApp us
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <BookingCTA
          lang="en"
          title="Ready to book?"
          subtitle="Fixed prices, no surprises. Contact us for a custom quote for your journey."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
