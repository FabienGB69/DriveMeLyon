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
  ...seoData.en.rhone,
  path: "/en/northern-rhone-valley-wine-tour-from-lyon",
});

export default function RhoneWineTourEN() {
  const pageFaqs = faqs.filter((f) => f.pages.includes("rhone"));

  return (
    <>
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Northern Rhône Valley Wine Tour from Lyon"
          subtitle="Discover some of France's most iconic wine appellations with a private chauffeur from Lyon: Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage and Crozes-Hermitage."
          ctaPrimary={{ label: "Request a private Rhône Valley wine tour", href: "/en/contact" }}
          ctaSecondary={{ label: "Request availability", href: "/en/contact" }}
        />

        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">Why choose the Northern Rhône Valley</span>
                <h2 className="font-serif text-4xl text-[#080808] mb-6">A private, world-renowned wine adventure</h2>
                <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                  <p>Just a short drive south of Lyon, the Northern Rhône Valley is the legendary birthplace of Syrah and Viognier. Characterized by spectacular steep terraced vineyards plunging toward the river, this region offers an exclusive, intimate, and world-renowned wine experience.</p>
                  <p>Your English-speaking chauffeur will guide you through prestigious Crus including Côte-Rôtie, Condrieu, Saint-Joseph, and Hermitage, with visits to top-rated family estates and stunning panoramic stops.</p>
                </div>
              </div>
              <div className="bg-white rounded-sm border border-[#C6A15B]/20 shadow-md p-8">
                <h3 className="font-sans font-semibold text-[#C6A15B] mb-5">Tour Highlights</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  {[
                    ["Departure", "Lyon (Complimentary hotel pickup)"],
                    ["Drive time", "~40 min to Ampuis (Côte-Rôtie)"],
                    ["Appellations", "Côte-Rôtie, Condrieu, Hermitage"],
                    ["Grapes", "Syrah & Viognier"],
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
          title="Ready to discover the Rhône Valley from Lyon?"
          subtitle="Contact us to design your bespoke private wine tour through the iconic Northern Rhône Valley appellations."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
