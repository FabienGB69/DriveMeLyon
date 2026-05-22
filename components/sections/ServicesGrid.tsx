import Link from "next/link";
import { PlaneLanding, Briefcase, MapPin, Users, Heart } from "lucide-react";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import type { LucideIcon } from "lucide-react";

interface ServicesGridProps {
  lang?: "en" | "fr";
}

interface ServiceCard {
  Icon: LucideIcon;
  titleEn: string;
  titleFr: string;
  descEn: string;
  descFr: string;
  hrefEn: string;
  hrefFr: string;
}

const services: ServiceCard[] = [
  {
    Icon: PlaneLanding,
    titleEn: "Airport Transfer",
    titleFr: "Transfert Aéroport",
    descEn:
      "Fixed-price transfers to/from Lyon Saint-Exupéry, 24/7, with flight tracking.",
    descFr:
      "Transferts à prix fixe vers/depuis Lyon Saint-Exupéry, 24h/24, avec suivi de vol.",
    hrefEn: "/en/lyon-airport-transfers",
    hrefFr: "/fr/airport-transfers-lyon",
  },
  {
    Icon: Briefcase,
    titleEn: "Business Chauffeur",
    titleFr: "Chauffeur Professionnel",
    descEn: "Corporate travel, discretion and punctuality guaranteed.",
    descFr: "Déplacements professionnels, discrétion et ponctualité garanties.",
    hrefEn: "/en/private-driver-lyon",
    hrefFr: "/fr/chauffeur-prive-lyon",
  },
  {
    Icon: MapPin,
    titleEn: "Private City Tour",
    titleFr: "Visite Privée Lyon",
    descEn: "Guided exploration of Lyon's highlights, 2–4h.",
    descFr: "Exploration guidée des incontournables de Lyon, 2–4h.",
    hrefEn: "/en/private-lyon-city-tour",
    hrefFr: "/fr/lyon-private-tours",
  },
  {
    Icon: Users,
    titleEn: "Group Transport",
    titleFr: "Transport de Groupe",
    descEn: "Mercedes V-Class for groups up to 8, events and excursions.",
    descFr: "Mercedes Classe V pour groupes jusqu'à 8 personnes, événements et excursions.",
    hrefEn: "/en/group-transport-lyon",
    hrefFr: "/fr/group-transport-lyon",
  },
  {
    Icon: Heart,
    titleEn: "Wedding & Events",
    titleFr: "Mariage & Événements",
    descEn: "White-glove service for your special day.",
    descFr: "Service impeccable pour votre grand jour.",
    hrefEn: "/en/wedding-event-chauffeur-lyon",
    hrefFr: "/fr/wedding-event-chauffeur-lyon",
  },
];

export function ServicesGrid({ lang = "en" }: ServicesGridProps) {
  const label = lang === "fr" ? "Nos services" : "Our services";
  const heading = lang === "fr" ? "Une prestation pour chaque besoin" : "A service for every need";
  const learnMore = lang === "fr" ? "En savoir plus →" : "Learn more →";

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3">
            {label}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#080808]">
            {heading}
          </h2>
        </div>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service) => {
            const { Icon } = service;
            const title = lang === "fr" ? service.titleFr : service.titleEn;
            const desc = lang === "fr" ? service.descFr : service.descEn;
            const href = lang === "fr" ? service.hrefFr : service.hrefEn;

            return (
              <FadeInItem key={title}>
                <div className="border-l-2 border-[#C6A15B] bg-[#F7F3EA]/60 pl-5 pr-4 py-6 rounded-sm flex flex-col h-full">
                  <div className="mb-4">
                    <Icon
                      className="w-6 h-6 text-[#C6A15B]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#080808] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[#171717]/65 text-sm leading-relaxed flex-1 mb-5">
                    {desc}
                  </p>
                  <Link
                    href={href}
                    className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] hover:text-[#b38e4a] transition-colors"
                  >
                    {learnMore}
                  </Link>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
