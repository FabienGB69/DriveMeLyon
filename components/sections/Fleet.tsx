import { fleet } from "@/data/fleet";
import { cn } from "@/lib/utils";

interface FleetProps {
  lang?: "en" | "fr";
}

export function Fleet({ lang = "en" }: FleetProps) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
            {lang === "en" ? "Our Premium Fleet" : "Véhicules Haut de Gamme"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#080808] mb-4">
            {lang === "en" ? "Experience absolute comfort & elegance" : "Voyagez dans un confort absolu"}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {lang === "en"
              ? "A meticulous selection of pristine Mercedes-Benz vehicles tailored to every journey."
              : "Une sélection de véhicules Mercedes récents, entretenus à la perfection pour tous vos déplacements."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fleet.map((v) => (
            <div
              key={v.id}
              className={cn(
                "rounded-sm border p-7 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg",
                v.highlight
                  ? "border-[#C6A15B] bg-[#C6A15B]/5"
                  : "border-black/4 bg-[#F7F3EA] hover:bg-white hover:border-[#C6A15B]/25"
              )}
            >
              <div
                className={cn(
                  "w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-5 border transition-all",
                  v.highlight
                    ? "bg-[#C6A15B] text-[#080808] border-[#C6A15B]"
                    : "bg-white text-[#C6A15B] border-[#C6A15B]/20"
                )}
              >
                🚗
              </div>
              <h3 className="font-sans font-semibold text-lg text-[#080808] mb-1">{v.name}</h3>
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] mb-4">{v.class}</span>
              <ul className="w-full border-t border-black/6 pt-4 space-y-2">
                {v.specs.map((s) => (
                  <li key={s.label} className="flex justify-between text-xs text-gray-500">
                    <span>{s.label}</span>
                    <strong className="text-[#080808] font-medium">{s.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
