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
  title: "Wine Tours Lyon | Beaujolais, Vallée du Rhône & Bourgogne en Privé",
  description:
    "Excursions viticoles privées depuis Lyon vers le Beaujolais, la Vallée du Rhône et la Bourgogne. Chauffeur bilingue, véhicule Mercedes, itinéraire sur mesure.",
  path: "/fr/wine-tours-lyon",
  alternatesLang: hreflangMap["/fr/wine-tours-lyon"],
});

const tours = [
  {
    region: "Beaujolais",
    tag: "40 min de Lyon",
    duration: "Demi-journée ou journée complète",
    from: "Dès 350 €",
    grapes: "Gamay Noir",
    appellations: "Morgon, Moulin-à-Vent, Fleurie, Brouilly",
    style: "Rouges fruités, villages pittoresques, châteaux et collines dorées",
    best: "Premiers pas dans le vin, groupes décontractés, itinéraires courts",
    href: "/fr/wine-tours-lyon/beaujolais-wine-tour",
    cta: "Découvrir le tour Beaujolais",
  },
  {
    region: "Vallée du Rhône",
    tag: "1h de Lyon",
    duration: "Journée complète recommandée",
    from: "Dès 420 €",
    grapes: "Syrah & Viognier",
    appellations: "Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage",
    style: "Rouges et blancs de renommée mondiale, vignobles en terrasses sur granit",
    best: "Amateurs de vins sérieux, collectionneurs, journées complètes",
    href: "/fr/wine-tours-lyon/rhone-valley-wine-tour",
    cta: "Découvrir le tour Vallée du Rhône",
  },
  {
    region: "Bourgogne",
    tag: "~2h de Lyon",
    duration: "Journée complète",
    from: "Dès 520 €",
    grapes: "Pinot Noir & Chardonnay",
    appellations: "Beaune, Nuits-Saint-Georges, Gevrey-Chambertin, Meursault",
    style: "Terroir légendaire, caves Grand Cru, Hôtel-Dieu, les plus grands vins du monde",
    best: "Passionnés, connaisseurs, occasions spéciales",
    href: "/fr/wine-tours-lyon/burgundy-wine-tour-from-lyon",
    cta: "Découvrir le tour Bourgogne",
  },
];

const includes = [
  ["Prise en charge à l'hôtel", "Collecte à domicile depuis votre hébergement à Lyon"],
  ["Chauffeur bilingue", "Conducteur anglophone et francophone, guide régional"],
  ["Mercedes haut de gamme", "Véhicule climatisé, confortable et impeccable"],
  ["Itinéraire flexible", "Votre rythme, vos préférences, votre tour"],
  ["Visites de domaines", "2–3 propriétés sélectionnées avec soin"],
  ["Dégustations organisées", "Sur site (droits de dégustation payables aux domaines)"],
];

export default function WineToursLyonFR() {
  const schemas = [
    serviceSchema({
      name: "Wine Tours Lyon",
      description:
        "Excursions viticoles privées depuis Lyon vers le Beaujolais, la Vallée du Rhône et la Bourgogne avec chauffeur bilingue.",
      url: "/fr/wine-tours-lyon",
      serviceType: "Wine Tour",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Wine Tours Lyon" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        <Hero
          lang="fr"
          title="Wine Tours depuis Lyon"
          subtitle="Trois grandes régions viticoles à portée de Lyon — Beaujolais, Vallée du Rhône et Bourgogne. Excursions privées avec un chauffeur bilingue, adaptées à votre goût."
          ctaPrimary={{ label: "Réserver un wine tour", href: "/fr/contact" }}
          ctaSecondary={{ label: "Discuter sur WhatsApp", href: "https://wa.me/33658593922" }}
        />

        {/* Tour cards */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Choisissez votre région
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Trois régions viticoles d'exception depuis Lyon
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  Chaque région offre un caractère totalement différent. Parcourez les trois tours ci-dessous — ou contactez-nous et nous vous aiderons à choisir.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {tours.map((t, i) => (
                <FadeIn key={t.region} delay={i * 0.1}>
                  <div className="border border-black/[0.06] rounded-sm overflow-hidden flex flex-col h-full">
                    <div className="bg-[#080808] p-6">
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-3 py-1 rounded-full">
                        {t.tag}
                      </span>
                      <h3 className="font-serif text-3xl text-white mt-4 mb-1">{t.region}</h3>
                      <p className="text-[#C6A15B] text-xs font-semibold uppercase tracking-wider">{t.duration}</p>
                    </div>
                    <div className="bg-[#F7F3EA] p-6 flex flex-col flex-1">
                      <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-1">
                        {[
                          ["Cépages", t.grapes],
                          ["Appellations", t.appellations],
                          ["Style", t.style],
                          ["Idéal pour", t.best],
                        ].map(([label, value]) => (
                          <li key={label} className="flex gap-2">
                            <span className="text-[#C6A15B] flex-shrink-0 mt-0.5">→</span>
                            <span>
                              <strong className="text-[#080808]">{label} :</strong> {value}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#C6A15B]/20">
                        <span className="text-[#C6A15B] font-semibold text-sm">{t.from}</span>
                        <a
                          href={t.href}
                          className="text-xs font-bold uppercase tracking-widest text-[#080808] hover:text-[#C6A15B] transition-colors"
                        >
                          {t.cta} →
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Inclus dans chaque tour
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Ce qui est inclus dans votre wine tour privé
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {includes.map(([title, desc], i) => (
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

        <ReviewsCarousel lang="fr" />
        <BookingCTA
          lang="fr"
          title="Prêt à explorer les vignobles autour de Lyon ?"
          subtitle="Contactez-nous pour concevoir votre wine tour privé idéal. Disponible pour 1 à 8 personnes."
        />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
