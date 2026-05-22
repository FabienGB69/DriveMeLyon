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
  },
];

export function WineToursHub({ lang = "en" }: WineToursHubProps) {
  const label =
    lang === "fr" ? "Wine Tours depuis Lyon" : "Wine Tours from Lyon";
  const heading =
    lang === "fr" ? "Explorez les régions viticoles" : "Explore Wine Regions";
  const learnMore = lang === "fr" ? "Découvrir" : "Explore";

  return (
    <section className="bg-[#F7F3EA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3">
            {label}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#080808]">
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
                <div className="bg-white border-t-2 border-[#C6A15B] rounded-sm shadow-sm p-6 flex flex-col h-full">
                  <h3 className="font-serif text-2xl text-[#080808] mb-3">
                    {title}
                  </h3>
                  <p className="text-[#171717]/70 text-sm leading-relaxed flex-1 mb-6">
                    {desc}
                  </p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#C6A15B] hover:text-[#b38e4a] transition-colors"
                  >
                    {learnMore}
                    <span aria-hidden="true">→</span>
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
