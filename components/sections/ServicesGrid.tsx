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
  image: string;
  imageAlt: string;
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
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Lyon Saint-Exupéry airport",
  },
  {
    Icon: Briefcase,
    titleEn: "Business Chauffeur",
    titleFr: "Chauffeur Professionnel",
    descEn: "Corporate travel, discretion and punctuality guaranteed.",
    descFr: "Déplacements professionnels, discrétion et ponctualité garanties.",
    hrefEn: "/en/private-driver-lyon",
    hrefFr: "/fr/chauffeur-prive-lyon",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Mercedes luxury chauffeur",
  },
  {
    Icon: MapPin,
    titleEn: "Private City Tour",
    titleFr: "Visite Privée Lyon",
    descEn: "Guided exploration of Lyon's highlights, 2–4h.",
    descFr: "Exploration guidée des incontournables de Lyon, 2–4h.",
    hrefEn: "/en/private-lyon-city-tour",
    hrefFr: "/fr/lyon-private-tours",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Lyon city view",
  },
  {
    Icon: Users,
    titleEn: "Group Transport",
    titleFr: "Transport de Groupe",
    descEn: "Mercedes V-Class for groups up to 8, events and excursions.",
    descFr: "Mercedes Classe V pour groupes jusqu'à 8 personnes, événements et excursions.",
    hrefEn: "/en/group-transport-lyon",
    hrefFr: "/fr/group-transport-lyon",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Mercedes V-Class minivan",
  },
  {
    Icon: Heart,
    titleEn: "Wedding & Events",
    titleFr: "Mariage & Événements",
    descEn: "White-glove service for your special day.",
    descFr: "Service impeccable pour votre grand jour.",
    hrefEn: "/en/wedding-event-chauffeur-lyon",
    hrefFr: "/fr/wedding-event-chauffeur-lyon",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Wedding luxury car",
  },
];

export function ServicesGrid({ lang = "en" }: ServicesGridProps) {
  const label = lang === "fr" ? "Nos services" : "Our services";
  const heading = lang === "fr" ? "Une prestation pour chaque besoin" : "A service for every need";
  const learnMore = lang === "fr" ? "En savoir plus →" : "Learn more →";

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3">
            {label}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#080808]">
            {heading}
          </h2>
        </div>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => {
            const { Icon } = service;
            const title = lang === "fr" ? service.titleFr : service.titleEn;
            const desc = lang === "fr" ? service.descFr : service.descEn;
            const href = lang === "fr" ? service.hrefFr : service.hrefEn;

            return (
              <FadeInItem key={title}>
                <div className="bg-[#F7F3EA] rounded-sm border border-black/[0.03] overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="text-[#C6A15B] mb-3">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl text-[#080808] mb-2 leading-snug">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">
                      {desc}
                    </p>
                    <Link
                      href={href}
                      className="text-xs font-bold uppercase tracking-widest text-[#C6A15B] hover:underline"
                    >
                      {learnMore}
                    </Link>
                  </div>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
