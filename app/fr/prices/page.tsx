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
  title: "Tarifs | Drive Me Lyon — Chauffeur & Wine Tours",
  description:
    "Tarifs transparents Drive Me Lyon. Transferts aéroport dès 95 €, wine tours dès 350 €, visites de Lyon dès 120 €. Prix fixes, sans frais cachés, TVA incluse.",
  path: "/fr/prices",
  alternatesLang: hreflangMap["/fr/prices"],
});

const pricingCategories = [
  {
    category: "Transferts Aéroport",
    description: "Transferts à prix fixe vers/depuis l'aéroport de Lyon Saint-Exupéry (LYS) et autres aéroports régionaux.",
    items: [
      { name: "Centre de Lyon ↔ Lyon Saint-Exupéry (LYS)", price: "Dès 95 €", note: "Jusqu'à 4 passagers" },
      { name: "Lyon ↔ Aéroport de Genève (GVA)", price: "Dès 280 €", note: "Jusqu'à 4 passagers" },
      { name: "Lyon ↔ Grenoble", price: "Dès 160 €", note: "Jusqu'à 4 passagers" },
      { name: "Lyon ↔ Aéroport de Chambéry", price: "Dès 185 €", note: "Jusqu'à 4 passagers" },
      { name: "Supplément V-Class (jusqu'à 7 pax)", price: "+30 €", note: "Ajouté au prix de base" },
    ],
  },
  {
    category: "Wine Tours",
    description: "Tours viticoles privés en journée complète ou demi-journée depuis Lyon. Tous les prix sont par véhicule.",
    items: [
      { name: "Beaujolais — Demi-journée (~5h)", price: "Dès 350 €", note: "Jusqu'à 4 passagers" },
      { name: "Beaujolais — Journée complète (~8h)", price: "Dès 480 €", note: "Jusqu'à 4 passagers" },
      { name: "Vallée du Rhône — Journée complète (~10h)", price: "Dès 420 €", note: "Jusqu'à 4 passagers" },
      { name: "Bourgogne — Journée complète (~10h)", price: "Dès 520 €", note: "Jusqu'à 4 passagers" },
      { name: "Supplément V-Class pour wine tours", price: "+50 €", note: "Groupes de 5 à 7 passagers" },
    ],
  },
  {
    category: "Visites de Lyon",
    description: "Visites privées guidées de Lyon avec un chauffeur bilingue.",
    items: [
      { name: "Tour découverte (2 heures)", price: "Dès 120 €", note: "Jusqu'à 4 passagers" },
      { name: "Tour approfondi (4 heures)", price: "Dès 220 €", note: "Jusqu'à 4 passagers" },
      { name: "Journée complète découverte de Lyon", price: "Dès 380 €", note: "Jusqu'à 4 passagers" },
    ],
  },
  {
    category: "Location à la Journée (Chauffeur + Véhicule)",
    description: "Réservez votre chauffeur et votre Mercedes pour une demi-journée ou une journée complète.",
    items: [
      { name: "Demi-journée (jusqu'à 4h) — Classe E", price: "Dès 290 €", note: "Jusqu'à 4 passagers" },
      { name: "Journée complète (jusqu'à 10h) — Classe E", price: "Dès 490 €", note: "Jusqu'à 4 passagers" },
      { name: "V-Class demi-journée", price: "Dès 380 €", note: "Jusqu'à 7 passagers" },
      { name: "V-Class journée complète", price: "Dès 620 €", note: "Jusqu'à 7 passagers" },
    ],
  },
];

export default function PricesFR() {
  const schemas = [
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Tarifs" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Tarifs"
          subtitle="Des prix transparents et fixes, sans frais cachés. Tous les prix incluent la TVA. Pour des itinéraires sur mesure, des réservations multi-jours ou des groupes, contactez-nous pour un devis personnalisé."
          ctaPrimary={{ label: "Demander un devis", href: "/fr/contact" }}
          ctaSecondary={{ label: "Devis rapide sur WhatsApp", href: "https://wa.me/33658593922" }}
        />

        {/* Pricing tables */}
        <section className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Tarification transparente
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Tous les tarifs — Drive Me Lyon
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  Tous les prix incluent la TVA et sont par véhicule, non par personne. Les droits de dégustation lors des wine tours sont payables directement aux vignerons.
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
                <p className="font-serif text-xl text-[#080808] mb-2">Tous les prix incluent la TVA</p>
                <p className="text-gray-500 text-sm max-w-lg mx-auto">
                  Les prix affichés sont des tarifs de départ par véhicule. Le devis final dépend des adresses exactes de prise en charge et dépose, des horaires et du véhicule sélectionné. Contactez-nous pour un devis précis — nous répondons dans l'heure.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <a href="/fr/contact" className="inline-flex items-center justify-center gap-2 bg-[#080808] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#C6A15B] transition-colors">
                    Demander un devis
                  </a>
                  <a href="https://wa.me/33658593922" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-[#C6A15B] text-[#C6A15B] text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#C6A15B] hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <BookingCTA
          lang="fr"
          title="Prêt à réserver ?"
          subtitle="Prix fixes, sans surprises. Contactez-nous pour un devis personnalisé."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
