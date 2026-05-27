import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Chauffeur Privé Lyon | Conducteur Anglophone Business & Événements",
  description:
    "Chauffeur privé professionnel anglophone à Lyon. Réunions d'affaires, hôtels de luxe, transferts aéroport, soirées gastronomiques et événements privés. Flotte Mercedes, tarifs fixes.",
  path: "/fr/chauffeur-prive-lyon",
  alternatesLang: hreflangMap["/fr/chauffeur-prive-lyon"],
});

const useCases = [
  {
    emoji: "💼",
    title: "Réunions professionnelles",
    description:
      "Présentation irréprochable. Prise en charge porte-à-porte depuis votre hôtel ou bureau, toujours à l'heure.",
  },
  {
    emoji: "🏨",
    title: "Arrivées en hôtels de luxe",
    description:
      "Accueil aux meilleurs hôtels de Lyon : Grand Hôtel-Dieu, Fourvière Hôtel, Collège Hôtel.",
  },
  {
    emoji: "✈️",
    title: "Transferts aéroport",
    description:
      "Suivi de vol, accueil en arrivées, tarifs fixes. Lyon Saint-Exupéry 24h/24.",
  },
  {
    emoji: "🍽️",
    title: "Soirées gastronomiques",
    description:
      "Arrivez et repartez avec style. Votre soirée, sans contrainte.",
  },
  {
    emoji: "🥂",
    title: "Événements privés",
    description:
      "Mariages, galas, soirées VIP. Présentation impeccable garantie.",
  },
  {
    emoji: "🗓️",
    title: "Mise à disposition",
    description:
      "Journée ou demi-journée exclusive pour plusieurs arrêts, visites ou shopping.",
  },
];

const trustPillars = [
  {
    title: "Ponctualité",
    description:
      "Nous suivons votre vol, surveillons le trafic et arrivons 10 minutes en avance. Toujours.",
  },
  {
    title: "Discrétion",
    description:
      "Les conversations confidentielles restent confidentielles. Aucun appel téléphonique pendant votre transfert.",
  },
  {
    title: "Anglophone",
    description:
      "Communication en anglais courant. Aucune barrière linguistique, jamais.",
  },
];

const stats = [
  { value: "100+", label: "avis 5 étoiles" },
  { value: "24/7", label: "disponibilité" },
  { value: "Mercedes", label: "E / S / V Class" },
];

const included = [
  "Prise en charge hôtel, bureau ou domicile",
  "Attente offerte (15 min aéroport, 10 min ville)",
  "Accueil en salle d'arrivées aéroport",
  "Suivi de vol inclus",
  "Eau minérale et chargeur à bord",
  "Prix fixes — pas de tarification dynamique",
  "Facture disponible pour les déplacements professionnels",
  "Communication bilingue FR/EN",
];

const chauffeurFaqs = faqs.filter((f) =>
  f.pages.some((p) => p === "chauffeur" || p === "general" || p === "airport")
);

export default function ChauffeurPriveLyonFR() {
  const schemas = [
    serviceSchema({
      name: "Chauffeur Privé Lyon",
      description:
        "Chauffeur privé professionnel anglophone à Lyon. Réunions d'affaires, hôtels de luxe, transferts aéroport, soirées gastronomiques et événements privés. Flotte Mercedes, tarifs fixes.",
      url: "/fr/chauffeur-prive-lyon",
      serviceType: "Chauffeur Service",
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/fr" },
      { name: "Chauffeur Privé Lyon" },
    ]),
    faqSchema(chauffeurFaqs, "fr"),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="fr" />
      <main>
        {/* Hero */}
        <Hero
          lang="fr"
          title="Chauffeur Privé Anglophone à Lyon"
          subtitle="Réunions professionnelles, arrivées en hôtels de luxe, transferts aéroport, soirées événementielles — discrétion, ponctualité, flotte Mercedes premium."
          ctaPrimary={{ label: "Réserver un chauffeur", href: "/fr/contact" }}
          ctaSecondary={{ label: "Voir les tarifs", href: "/fr/prices" }}
        
          imageSrc="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Mercedes luxury chauffeur vehicle"
        />

        {/* Section 1: Use cases */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Services
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#080808]">
                  Votre chauffeur pour chaque occasion
                </h2>
              </div>
            </FadeIn>
            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <FadeInItem key={uc.title}>
                  <div className="bg-white border-l-2 border-[#C6A15B] pl-5 pr-6 py-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-3">{uc.emoji}</div>
                    <h3 className="font-serif text-xl text-[#080808] mb-2">{uc.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{uc.description}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        {/* Section 2: Trust proofs */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Pourquoi nous choisir
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-white">
                  Pourquoi les clients internationaux choisissent Drive Me Lyon
                </h2>
              </div>
            </FadeIn>
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {trustPillars.map((pillar) => (
                <FadeInItem key={pillar.title}>
                  <div className="border border-[#C6A15B]/30 p-8 text-center">
                    <h3 className="font-serif text-2xl text-[#C6A15B] mb-4">{pillar.title}</h3>
                    <p className="text-gray-400 leading-relaxed">&ldquo;{pillar.description}&rdquo;</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <FadeInItem key={stat.label}>
                  <div className="text-center py-8 border border-white/10">
                    <div className="font-serif text-4xl text-[#C6A15B] mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        {/* Section 3: What's included */}
        <section className="bg-[#F7F3EA] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Inclus
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#080808]">
                  Ce qui est inclus dans votre service chauffeur
                </h2>
              </div>
            </FadeIn>
            <FadeIn>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#C6A15B] font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-[#171717] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Section 4: WhatsApp CTA strip */}
        <section className="bg-[#5A1F2B] py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                Besoin d&rsquo;un chauffeur aujourd&rsquo;hui ?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Écrivez-nous sur WhatsApp — nous répondons généralement en moins de 10 minutes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/33658593922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C6A15B] text-[#080808] font-semibold px-7 py-3 hover:bg-[#d4b06a] transition-colors"
                >
                  Message sur WhatsApp
                </a>
                <a
                  href="tel:+33658593922"
                  className="inline-flex items-center gap-2 border border-white text-white font-semibold px-7 py-3 hover:bg-white/10 transition-colors"
                >
                  Appeler maintenant
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <FAQSection lang="fr" items={chauffeurFaqs} />

        {/* Section 6: BookingCTA */}
        <BookingCTA lang="fr" />
      </main>
      <Footer lang="fr" />
      <MobileStickyCTA lang="fr" />
    </>
  );
}
