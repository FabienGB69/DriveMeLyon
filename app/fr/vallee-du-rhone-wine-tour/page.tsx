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
  ...seoData.fr.rhone,
  path: "/fr/vallee-du-rhone-wine-tour",
});

export default function RhoneWineTourFR() {
  const pageFaqs = faqs.filter((f) => f.pages.includes("rhone"));

  return (
    <>
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Wine Tour Vallée du Rhône depuis Lyon"
          subtitle="Découvrez les appellations emblématiques de la Vallée du Rhône Nord lors d'une excursion privée depuis Lyon : Côte-Rôtie, Condrieu, Saint-Joseph et Hermitage."
          ctaPrimary={{ label: "Réserver ce Wine Tour", href: "/fr/contact" }}
          ctaSecondary={{ label: "Consulter les disponibilités", href: "/fr/contact" }}
        
          imageSrc="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Rhône Valley vineyard wine tasting"
        />

        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">Pourquoi choisir la Vallée du Rhône</span>
                <h2 className="font-serif text-4xl text-[#080808] mb-6">Une aventure viticole mondialement reconnue</h2>
                <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                  <p>À seulement 40 minutes au sud de Lyon, la Vallée du Rhône Nord est le berceau légendaire du Syrah et du Viognier. Ses vignobles en terrasses vertigineux surplombant le fleuve offrent une expérience viticole exclusive et intimiste de renommée mondiale.</p>
                  <p>Votre chauffeur anglophone vous guidera à travers les Crus prestigieux — Côte-Rôtie, Condrieu, Saint-Joseph et Hermitage — avec des visites de domaines familiaux d'exception et des panoramas spectaculaires.</p>
                </div>
              </div>
              <div className="bg-white rounded-sm border border-[#C6A15B]/20 shadow-md p-8">
                <h3 className="font-sans font-semibold text-[#C6A15B] mb-5">Points forts de l&apos;excursion</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  {[
                    ["Départ", "Lyon (prise en charge à l'hôtel incluse)"],
                    ["Trajet", "~40 min jusqu'à Ampuis (Côte-Rôtie)"],
                    ["Appellations", "Côte-Rôtie, Condrieu, Hermitage"],
                    ["Cépages", "Syrah & Viognier"],
                  ].map(([label, value]) => (
                    <li key={label} className="flex gap-3">
                      <span className="text-[#C6A15B] mt-0.5">→</span>
                      <div><strong className="text-[#080808]">{label} :</strong> {value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <GoogleReviews lang="fr" />
        <FAQSection lang="fr" items={pageFaqs} />
        <BookingCTA
          lang="fr"
          title="Prêt à découvrir la Vallée du Rhône depuis Lyon ?"
          subtitle="Contactez-nous pour concevoir votre excursion privée sur-mesure dans les appellations emblématiques de la Vallée du Rhône Nord."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
