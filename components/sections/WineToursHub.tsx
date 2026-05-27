import Link from "next/link";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

interface WineToursHubProps {
  lang?: "en" | "fr";
}

interface CardData {
  titleEn: string;
  titleFr: string;
  descEn: string;
  descFr: string;
  hrefEn: string;
  hrefFr: string;
  image: string;
  alt: string;
  tag: string;
}

const cards: CardData[] = [
  {
    titleEn: "Beaujolais",
    titleFr: "Beaujolais",
    descEn:
      "Charming villages, family estates and Gamay wines — a 45-min drive from Lyon.",
    descFr:
      "Villages pittoresques, domaines familiaux et vins de Gamay — à 45 min de Lyon.",
    hrefEn: "/en/beaujolais-wine-tour-from-lyon",
    hrefFr: "/fr/wine-tours-lyon/beaujolais-wine-tour",
    image: "https://images.unsplash.com/photo-1559666082-998df2b4e28b?auto=format&fit=crop&w=800&q=80",
    alt: "Beaujolais vineyard hills",
    tag: "Beaujolais",
  },
  {
    titleEn: "Rhône Valley",
    titleFr: "Vallée du Rhône",
    descEn:
      "Côte-Rôtie, Condrieu, Hermitage — prestigious appellations along the river.",
    descFr:
      "Côte-Rôtie, Condrieu, Hermitage — appellations prestigieuses le long du Rhône.",
    hrefEn: "/en/rhone-valley-wine-tour-from-lyon",
    hrefFr: "/fr/wine-tours-lyon/rhone-valley-wine-tour",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    alt: "Rhône Valley wine tasting",
    tag: "Rhône Valley",
  },
  {
    titleEn: "Burgundy",
    titleFr: "Bourgogne",
    descEn:
      "Côte d'Or, Beaune, Nuits-Saint-Georges — the world's finest Pinot Noir and Chardonnay.",
    descFr:
      "Côte d'Or, Beaune, Nuits-Saint-Georges — les plus grands Pinot Noir et Chardonnay.",
    hrefEn: "/en/burgundy-wine-tour-from-lyon",
    hrefFr: "/fr/wine-tours-lyon/burgundy-wine-tour-from-lyon",
    image: "https://images.unsplash.com/photo-1474722883778-792e7fb1f4a2?auto=format&fit=crop&w=800&q=80",
    alt: "Burgundy wine cellar",
    tag: "Burgundy",
  },
  {
    titleEn: "Custom Private Day",
    titleFr: "Journées privées sur mesure",
    descEn:
      "Combine regions, adjust pace, add a restaurant — everything is tailored to your group.",
    descFr:
      "Combinez les régions, ajustez le rythme, ajoutez un restaurant — tout est sur mesure.",
    hrefEn: "/en/contact",
    hrefFr: "/fr/contact",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    alt: "Private wine tasting experience",
    tag: "Private",
  },
];

export function WineToursHub({ lang = "en" }: WineToursHubProps) {
  const label =
    lang === "fr" ? "Wine Tours depuis Lyon" : "Wine Tours from Lyon";
  const heading =
    lang === "fr" ? "Explorez les régions viticoles" : "Explore Wine Regions";
  const learnMore = lang === "fr" ? "Découvrir" : "Explore";

  return (
    <section className="bg-[#F7F3EA] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3">
            {label}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#080808] max-w-2xl mx-auto">
            {heading}
          </h2>
        </div>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const title = lang === "fr" ? card.titleFr : card.titleEn;
            const desc = lang === "fr" ? card.descFr : card.descEn;
            const href = lang === "fr" ? card.hrefFr : card.hrefEn;

            return (
              <FadeInItem key={title}>
                <div className="bg-white rounded-sm border border-black/[0.03] overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Overlay tag */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[0.6rem] font-bold uppercase tracking-widest text-white bg-[#080808]/70 px-2.5 py-1 rounded-sm backdrop-blur-sm">
                        {card.tag}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-7">
                    <h3 className="font-serif text-2xl text-[#080808] mb-3">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C6A15B] hover:gap-4 transition-all"
                    >
                      {learnMore} →
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
