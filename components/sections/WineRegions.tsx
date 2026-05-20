import Link from "next/link";
import Image from "next/image";

interface WineRegionsProps {
  lang?: "en" | "fr";
}

const regions = {
  beaujolais: {
    image: "https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Beaujolais vineyard village",
    tag: { en: "40 min from Lyon", fr: "40 min de Lyon" },
    title: "Beaujolais",
    promise: {
      en: "Charming villages, family-owned wineries and scenic vineyards less than one hour from Lyon.",
      fr: "Villages pittoresques, domaines familiaux et vignobles enchanteurs à moins d'une heure de Lyon.",
    },
    appellations: ["Morgon", "Moulin-à-Vent", "Fleurie", "Brouilly", "Chiroubles"],
    cta: {
      en: { label: "Discover the Beaujolais tour", href: "/en/beaujolais-wine-tour-from-lyon" },
      fr: { label: "Découvrir le tour Beaujolais", href: "/fr/beaujolais-wine-tour" },
    },
  },
  rhone: {
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Northern Rhône Valley terraced vineyards",
    tag: { en: "1h from Lyon", fr: "1h de Lyon" },
    title: { en: "Northern Rhône Valley", fr: "Vallée du Rhône Nord" },
    promise: {
      en: "Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage and Crozes-Hermitage with a private chauffeur.",
      fr: "Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage et Crozes-Hermitage avec un chauffeur privé.",
    },
    appellations: ["Côte-Rôtie", "Condrieu", "Saint-Joseph", "Hermitage", "Crozes-Hermitage"],
    cta: {
      en: { label: "Discover the Rhône Valley tour", href: "/en/northern-rhone-valley-wine-tour-from-lyon" },
      fr: { label: "Découvrir le tour Vallée du Rhône", href: "/fr/vallee-du-rhone-wine-tour" },
    },
  },
};

export function WineRegions({ lang = "en" }: WineRegionsProps) {
  const b = regions.beaujolais;
  const r = regions.rhone;

  return (
    <section className="bg-[#080808] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
            {lang === "en" ? "Wine Regions" : "Vignobles"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            {lang === "en" ? "Two world-class wine regions" : "Deux régions viticoles d'exception"}
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            {lang === "en"
              ? "Both within easy reach of Lyon — each offering a completely different wine experience."
              : "Toutes deux accessibles depuis Lyon — chacune offrant une expérience viticole unique."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Beaujolais */}
          <article className="group relative overflow-hidden rounded-sm">
            <div className="relative h-[420px]">
              <Image
                src={b.image}
                alt={b.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
            </div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] bg-[#C6A15B]/15 border border-[#C6A15B]/30 px-3 py-1 rounded-full self-start mb-4">
                {b.tag[lang]}
              </span>
              <h3 className="font-serif text-3xl text-white mb-3">{b.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-sm">{b.promise[lang]}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {b.appellations.map((a) => (
                  <span key={a} className="text-[0.6rem] font-semibold uppercase tracking-wider text-white/60 border border-white/15 px-2.5 py-1 rounded-full">
                    {a}
                  </span>
                ))}
              </div>
              <Link
                href={b.cta[lang].href}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C6A15B] hover:gap-4 transition-all"
              >
                {b.cta[lang].label} →
              </Link>
            </div>
          </article>

          {/* Northern Rhône Valley */}
          <article className="group relative overflow-hidden rounded-sm">
            <div className="relative h-[420px]">
              <Image
                src={r.image}
                alt={r.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
            </div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] bg-[#C6A15B]/15 border border-[#C6A15B]/30 px-3 py-1 rounded-full self-start mb-4">
                {r.tag[lang]}
              </span>
              <h3 className="font-serif text-3xl text-white mb-3">
                {lang === "en" ? r.title.en : r.title.fr}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-sm">{r.promise[lang]}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {r.appellations.map((a) => (
                  <span key={a} className="text-[0.6rem] font-semibold uppercase tracking-wider text-white/60 border border-white/15 px-2.5 py-1 rounded-full">
                    {a}
                  </span>
                ))}
              </div>
              <Link
                href={r.cta[lang].href}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C6A15B] hover:gap-4 transition-all"
              >
                {r.cta[lang].label} →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
