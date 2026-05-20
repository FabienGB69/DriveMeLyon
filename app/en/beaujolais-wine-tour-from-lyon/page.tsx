import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { seoData } from "@/data/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { FAQSection } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  ...seoData.en.beaujolais,
  path: "/en/beaujolais-wine-tour-from-lyon",
});

export default function BeaujolaisWineTourEN() {
  const pageFaqs = faqs.filter((f) => f.pages.includes("beaujolais"));

  return (
    <>
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Beaujolais Wine Tour from Lyon"
          subtitle="Enjoy a private wine experience through the Beaujolais vineyards with hotel pickup, English-speaking chauffeur and a flexible itinerary."
          ctaPrimary={{ label: "Book your Beaujolais Wine Tour", href: "/en/contact" }}
          ctaSecondary={{ label: "Request availability", href: "/en/contact" }}
        />

        {/* Experience details */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">Unforgettable Journey</span>
                <h2 className="font-serif text-4xl text-[#080808] mb-6">A private, tailormade wine adventure</h2>
                <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                  <p>Escape the hustle of Lyon for an unforgettable journey into the heart of the Beaujolais wine region. Renowned for its stunning rolling hills, golden-stone medieval villages, and highly expressive Gamay wines, Beaujolais offers a rich, scenic, and authentic wine tasting experience.</p>
                  <p>Your professional, English-speaking private chauffeur will pick you up directly from your hotel in Lyon in an immaculate Mercedes sedan or van. You will enjoy a fully flexible, bespoke itinerary combining historic châteaux, boutique family-owned estates, and breath-taking panoramic viewpoints over the Saône Valley.</p>
                  <p>The tour is available as either a <strong className="text-[#080808]">half-day (4-hour)</strong> or <strong className="text-[#080808]">full-day (8-hour)</strong> experience.</p>
                </div>
              </div>
              <div className="bg-white rounded-sm border border-[#C6A15B]/20 shadow-md p-8">
                <h3 className="font-sans font-semibold text-[#C6A15B] mb-5">Tour Highlights</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  {[
                    ["Departure", "Lyon (Complimentary hotel/residence pickup)"],
                    ["Duration", "Half-day (4h) or Full-day (8h)"],
                    ["Capacity", "1 to 7 guests (larger groups on request)"],
                    ["Estates Visited", "2 to 3 handpicked family estates"],
                  ].map(([label, value]) => (
                    <li key={label} className="flex gap-3">
                      <span className="text-[#C6A15B] mt-0.5">→</span>
                      <div><strong className="text-[#080808]">{label}:</strong> {value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <GoogleReviews lang="en" />
        <FAQSection lang="en" items={pageFaqs} />
        <BookingCTA
          lang="en"
          title="Ready to discover Beaujolais from Lyon?"
          subtitle="Contact us today to design your bespoke private wine tour through the beautiful hills of Beaujolais."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
