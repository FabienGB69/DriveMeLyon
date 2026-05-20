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
  ...seoData.fr.beaujolais,
  path: "/fr/beaujolais-wine-tour",
});

export default function BeaujolaisWineTourFR() {
  const pageFaqs = faqs.filter((f) => f.pages.includes("beaujolais"));

  return (
    <>
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Wine Tour Beaujolais depuis Lyon"
          subtitle="Partez à la découverte des vignobles du Beaujolais lors d'une excursion privée depuis Lyon. Chauffeur anglophone, Mercedes premium, domaines familiaux sélectionnés et dégustations exclusives."
          ctaPrimary={{ label: "Réserver ce Wine Tour", href: "/fr/contact" }}
          ctaSecondary={{ label: "Consulter les disponibilités", href: "/fr/contact" }}
        />

        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">Pourquoi choisir le Beaujolais</span>
                <h2 className="font-serif text-4xl text-[#080808] mb-6">Une expérience viticole authentique aux portes de Lyon</h2>
                <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                  <p>À seulement 40 minutes de Lyon, le Beaujolais est l'une des régions viticoles les plus attachantes de France. Ses villages pittoresques, ses châteaux et ses domaines familiaux offrent une expérience authentique loin du tourisme de masse.</p>
                  <p>Votre chauffeur anglophone vous guidera à travers les Crus du Beaujolais — Morgon, Moulin-à-Vent, Fleurie — avec des visites de domaines triés sur le volet et des dégustations commentées en français et en anglais.</p>
                </div>
              </div>
              <div className="bg-white rounded-sm border border-[#C6A15B]/20 shadow-md p-8">
                <h3 className="font-sans font-semibold text-[#C6A15B] mb-5">Points forts de l&apos;excursion</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  {[
                    ["Départ", "Lyon (prise en charge à l'hôtel incluse)"],
                    ["Durée", "Journée complète ou demi-journée"],
                    ["Appellations", "Morgon, Moulin-à-Vent, Fleurie, Brouilly"],
                    ["Cépage", "Gamay Noir"],
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
          title="Prêt à découvrir le Beaujolais depuis Lyon ?"
          subtitle="Contactez-nous pour organiser votre excursion privée sur-mesure dans les vignobles du Beaujolais."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
