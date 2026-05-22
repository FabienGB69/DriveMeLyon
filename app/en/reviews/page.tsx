import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { reviews } from "@/data/reviews";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Customer Reviews | Drive Me Lyon — 5-Star Rated Chauffeur",
  description:
    "Read reviews from Drive Me Lyon clients. 5-star rated private chauffeur and wine tour service in Lyon — verified Google reviews from real customers.",
  path: "/en/reviews",
  alternatesLang: hreflangMap["/en/reviews"],
});

export default function ReviewsEN() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Reviews" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="What our clients say"
          subtitle="Every review here is from a real Drive Me Lyon client. We're proud of our 5-star reputation — and we work every day to keep it. Verified reviews from Google."
          ctaPrimary={{ label: "Book your experience", href: "/en/contact" }}
          ctaSecondary={{ label: "Leave a review on Google", href: "https://search.google.com/local/reviews?placeid=ChIJ6cu2eq3t9EcRgv3ak_zahtI" }}
        />

        <ReviewsCarousel lang="en" />

        {/* All reviews grid */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  All reviews
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Every review, every story
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  From wine tours and airport transfers to corporate travel and weddings — here's what our clients experience with Drive Me Lyon.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <FadeIn key={r.id} delay={i * 0.05}>
                  <div className="border border-black/[0.06] bg-[#F7F3EA] rounded-sm p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={r.avatarUrl}
                        alt={r.name}
                        width={40}
                        height={40}
                        className="rounded-full w-10 h-10 object-cover"
                      />
                      <div>
                        <p className="font-semibold text-[#080808] text-sm">{r.name}</p>
                        <p className="text-gray-400 text-xs">{r.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <span key={j} className="text-[#C6A15B] text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{r.text}</p>
                    <div className="mt-4 pt-4 border-t border-[#C6A15B]/20">
                      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[#C6A15B]">{r.type}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="text-center mt-12">
                <a
                  href="https://search.google.com/local/reviews?placeid=ChIJ6cu2eq3t9EcRgv3ak_zahtI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#C6A15B] hover:text-[#080808] transition-colors"
                >
                  Read all reviews on Google →
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <BookingCTA
          lang="en"
          title="Join our happy clients"
          subtitle="Experience the Drive Me Lyon difference for yourself."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
