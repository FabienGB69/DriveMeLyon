import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { FAQSection } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Wine Tours Lyon | Beaujolais, Vallée du Rhône & Bourgogne en Privé",
  description:
    "Réservez un wine tour privé depuis Lyon — Beaujolais, Vallée du Rhône Nord ou Bourgogne. Chauffeur anglophone, Mercedes, prise en charge hôtel, aide aux réservations domaines.",
  path: "/fr/wine-tours-lyon",
  alternatesLang: hreflangMap["/fr/wine-tours-lyon"],
});

const includes = [
  {
    title: "Prise en charge hôtel",
    desc: "Depuis tout hôtel, Airbnb ou résidence à Lyon",
  },
  {
    title: "Chauffeur anglophone",
    desc: "Chauffeur-guide bilingue pour toute la durée",
  },
  {
    title: "Réservations domaines",
    desc: "Nous réservons les meilleurs domaines",
  },
  {
    title: "Horaires flexibles",
    desc: "Journée, demi-journée ou durée sur mesure",
  },
  {
    title: "Véhicule Mercedes",
    desc: "Confort premium climatisé pour 1 à 7 passagers",
  },
  {
    title: "Transport de groupe",
    desc: "Van privé pour les groupes jusqu'à 7 personnes",
  },
];

const tourCards = [
  {
    region: "Beaujolais",
    tag: "À 45 min",
    grapes: "Gamay Noir",
    appellations: "Morgon, Moulin-à-Vent, Fleurie, Brouilly",
    mood: "Villages pittoresques, châteaux en pierre dorée, vins fruités et accessibles",
    bestFor: "Primo-visiteurs, couples, demi-journée",
    from: "Dès 350 €",
    href: "/fr/wine-tours-lyon/beaujolais-wine-tour",
  },
  {
    region: "Vallée du Rhône",
    tag: "À 1h",
    grapes: "Syrah & Viognier",
    appellations: "Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage",
    mood: "Prestige, puissance, renom mondial",
    bestFor: "Connaisseurs, collectionneurs",
    from: "Dès 420 €",
    href: "/fr/wine-tours-lyon/rhone-valley-wine-tour",
  },
  {
    region: "Bourgogne",
    tag: "À 1h45",
    grapes: "Pinot Noir & Chardonnay",
    appellations: "Beaune, Nuits-Saint-Georges, Gevrey-Chambertin, Meursault",
    mood: "Légendaire, complexe, les vins les plus prestigieux du monde",
    bestFor: "Collectionneurs, occasions spéciales",
    from: "Dès 520 €",
    href: "/fr/wine-tours-lyon/burgundy-wine-tour-from-lyon",
  },
];

const logisticsPoints = [
  "Prise en charge directe depuis tout hôtel lyonnais — Grand Hôtel-Dieu, Fourvière Hôtel, Collège Hôtel, et tous les autres",
  "Départ matinal calé sur votre agenda, généralement entre 9h et 9h30",
  "Toutes les réservations domaines gérées avant votre excursion, sans frais supplémentaires",
  "Les excursions journée incluent une recommandation de restaurant pour le déjeuner",
  "Retour hôtel ou toute adresse à Lyon en soirée",
];

const stats = [
  { value: "100+", label: "Groupes internationaux par an" },
  { value: "5.0★", label: "Note Google" },
  { value: "3", label: "Régions viticoles" },
  { value: "< 2h", label: "Délai de réponse" },
];

export default function WineToursLyonFR() {
  const wineFaqs = faqs.filter(
    (f) =>
      f.pages.includes("beaujolais") ||
      f.pages.includes("rhone") ||
      f.pages.includes("general"),
  );

  const schemas = [
    serviceSchema({
      name: "Wine Tours Privés depuis Lyon",
      description:
        "Réservez un wine tour privé depuis Lyon — Beaujolais, Vallée du Rhône Nord ou Bourgogne. Chauffeur anglophone, Mercedes, prise en charge hôtel, aide aux réservations domaines.",
      url: "/fr/wine-tours-lyon",
      serviceType: "Wine Tour",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Wine Tours" },
    ]),
    faqSchema(wineFaqs, "fr"),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        {/* Section 1: Hero */}
        <Hero
          lang="fr"
          title="Wine Tours Privés depuis Lyon avec Chauffeur Anglophone"
          subtitle="Beaujolais, Vallée du Rhône Nord et Bourgogne — excursions privées sur mesure depuis Lyon. Prise en charge hôtel, aide aux réservations domaines, véhicule Mercedes."
          ctaPrimary={{ label: "Réserver un wine tour", href: "/fr/contact" }}
          ctaSecondary={{ label: "Découvrir le Beaujolais", href: "/fr/wine-tours-lyon/beaujolais-wine-tour" }}
        
          imageSrc="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Wine tours from Lyon vineyard"
        />

        {/* Section 2: What's included */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Inclus dans chaque tour
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Tout est inclus dans votre wine tour privé
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  Pas de frais cachés. Tous les services ci-dessous sont inclus dans votre devis.
                </p>
              </div>
            </FadeIn>
            <FadeInStagger>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {includes.map((item) => (
                  <FadeInItem key={item.title}>
                    <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#C6A15B] text-lg font-serif">✓</span>
                        <span className="font-semibold text-[#080808] text-sm">{item.title}</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </FadeInStagger>
          </div>
        </section>

        {/* Section 3: Tour destination cards */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Régions viticoles
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Choisissez votre région viticole
                </h2>
                <p className="text-white/50 text-base max-w-lg mx-auto">
                  Trois expériences viticoles uniques — toutes à moins de 2 heures de Lyon
                </p>
              </div>
            </FadeIn>
            <FadeInStagger>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {tourCards.map((card) => (
                  <FadeInItem key={card.region}>
                    <div className="border-t-2 border-[#C6A15B] bg-[#171717] rounded-sm p-8 flex flex-col h-full">
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-3 py-1 rounded-full self-start mb-4">
                        {card.tag}
                      </span>
                      <h3 className="font-serif text-3xl text-white mb-2">{card.region}</h3>
                      <p className="text-[#C6A15B] text-xs font-semibold uppercase tracking-wider mb-5">
                        {card.grapes}
                      </p>
                      <ul className="space-y-3 text-sm text-white/70 mb-6 flex-1">
                        <li className="flex gap-2">
                          <span className="text-[#C6A15B] flex-shrink-0">→</span>
                          <span>
                            <strong className="text-white">Appellations :</strong>{" "}
                            {card.appellations}
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#C6A15B] flex-shrink-0">→</span>
                          <span>
                            <strong className="text-white">Caractère :</strong> {card.mood}
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#C6A15B] flex-shrink-0">→</span>
                          <span>
                            <strong className="text-white">Idéal pour :</strong> {card.bestFor}
                          </span>
                        </li>
                      </ul>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                        <span className="text-[#C6A15B] font-semibold text-sm">{card.from}</span>
                        <a
                          href={card.href}
                          className="text-xs font-bold uppercase tracking-widest text-[#C6A15B] hover:text-white transition-colors"
                        >
                          Découvrir →
                        </a>
                      </div>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </FadeInStagger>
          </div>
        </section>

        {/* Section 4: Custom itinerary */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-16 h-px bg-[#C6A15B] mx-auto mb-8" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Entièrement sur mesure
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-8">
                  Chaque excursion est privée et entièrement personnalisée
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-5">
                  Pas de groupes partagés. Pas d&apos;horaires imposés. Votre excursion est construite autour
                  de vos envies, votre rythme et vos domaines préférés. Que vous souhaitiez vous
                  concentrer sur une seule appellation, combiner deux régions, intégrer un déjeuner dans
                  un restaurant étoilé ou prolonger votre journée — nous nous en chargeons.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-10">
                  Dites-nous simplement ce que vous recherchez lors de votre prise de contact. Nous vous
                  proposerons un itinéraire, prendrons en charge les réservations et préparerons votre
                  véhicule.
                </p>
                <a
                  href="/fr/contact"
                  className="text-[#C6A15B] font-semibold text-sm tracking-wide hover:text-[#080808] transition-colors"
                >
                  Construire votre itinéraire sur mesure →
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 5: Hotel pickup & logistics */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Service porte-à-porte
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Une logistique sans effort, depuis la porte de votre hôtel
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeIn direction="left">
                <ul className="space-y-5">
                  {logisticsPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="text-[#C6A15B] flex-shrink-0 font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn direction="right">
                <div className="bg-[#F7F3EA] border border-[#C6A15B]/20 p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat) => (
                      <div key={stat.value} className="text-center">
                        <p className="font-serif text-4xl text-[#C6A15B] mb-1">{stat.value}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section 6: Reviews */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Témoignages clients
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Ce que disent nos clients internationaux
                </h2>
              </div>
            </FadeIn>
          </div>
          <ReviewsCarousel lang="fr" />
        </section>

        {/* Section 7: Private van for groups */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Wine tours en groupe
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Excursions privées en groupe — jusqu&apos;à 7 passagers
                </h2>
              </div>
            </FadeIn>
            <FadeInStagger>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: "Mercedes V-Class",
                    desc: "Van 7 places spacieux pour tout le groupe avec de la place pour vos achats.",
                  },
                  {
                    title: "Famille & amis",
                    desc: "Anniversaires, célébrations, team building corporate.",
                  },
                  {
                    title: "Tarifs groupe",
                    desc: "Devis personnalisés pour 4 à 7 personnes. Meilleur rapport par personne.",
                  },
                ].map((feat) => (
                  <FadeInItem key={feat.title}>
                    <div className="text-center p-6">
                      <h3 className="font-serif text-2xl text-[#C6A15B] mb-3">{feat.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </FadeInStagger>
            <div className="text-center">
              <a
                href="/fr/contact"
                className="inline-block bg-[#C6A15B] text-[#080808] font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-[#d4b06a] transition-colors"
              >
                Demander un devis groupe
              </a>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <FAQSection lang="fr" items={wineFaqs} />

        {/* Section 9: BookingCTA */}
        <BookingCTA lang="fr" title="Planifiez votre wine tour privé depuis Lyon" />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
