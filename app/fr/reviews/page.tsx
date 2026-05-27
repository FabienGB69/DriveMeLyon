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
  title: "Avis Clients | Drive Me Lyon — Chauffeur 5 Étoiles",
  description:
    "Découvrez les avis de nos clients Drive Me Lyon. Service de chauffeur privé et wine tours noté 5 étoiles à Lyon — avis Google vérifiés de vrais clients.",
  path: "/fr/reviews",
  alternatesLang: hreflangMap["/fr/reviews"],
});

export default function ReviewsFR() {
  const schemas = [
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Avis Clients" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Ce que disent nos clients"
          subtitle="Chaque avis ici provient d'un vrai client Drive Me Lyon. Nous sommes fiers de notre réputation 5 étoiles — et nous travaillons chaque jour pour la maintenir. Avis vérifiés via Google."
          ctaPrimary={{ label: "Réserver votre expérience", href: "/fr/contact" }}
          ctaSecondary={{ label: "Laisser un avis sur Google", href: "https://search.google.com/local/reviews?placeid=ChIJ6cu2eq3t9EcRgv3ak_zahtI" }}
        
          imageSrc="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Happy wine tour guests"
        />

        <ReviewsCarousel lang="fr" />

        {/* All reviews grid */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Tous les avis
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Chaque avis, chaque histoire
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  Wine tours, transferts aéroport, voyages d'affaires et mariages — voilà ce que vivent nos clients avec Drive Me Lyon.
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
                  Voir tous les avis sur Google →
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <BookingCTA
          lang="fr"
          title="Rejoignez nos clients satisfaits"
          subtitle="Vivez l'expérience Drive Me Lyon par vous-même."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
