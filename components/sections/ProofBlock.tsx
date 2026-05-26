import { Languages, Car, Clock, MapPin, Star } from "lucide-react";

interface ProofBlockProps {
  lang?: "en" | "fr";
}

const items = [
  {
    Icon: Languages,
    en: { label: "Bilingual Chauffeur", sub: "FR / EN" },
    fr: { label: "Chauffeur bilingue", sub: "FR / EN" },
  },
  {
    Icon: Car,
    en: { label: "Mercedes Fleet", sub: "E / S / V Class" },
    fr: { label: "Flotte Mercedes", sub: "Classe E / S / V" },
  },
  {
    Icon: Clock,
    en: { label: "Available", sub: "24/7" },
    fr: { label: "Disponible", sub: "24h/24" },
  },
  {
    Icon: MapPin,
    en: { label: "Pick-up anywhere", sub: "Hotels, airports & stations" },
    fr: { label: "Prise en charge", sub: "Hôtels, aéroports, gares" },
  },
  {
    Icon: Star,
    en: { label: "5-star reviews", sub: "International guests" },
    fr: { label: "Avis 5★", sub: "Clients internationaux" },
  },
];

export function ProofBlock({ lang = "en" }: ProofBlockProps) {
  return (
    <section className="bg-[#080808] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {items.map(({ Icon, en, fr }, index) => {
            const copy = lang === "fr" ? fr : en;
            const isLast = index === items.length - 1;
            return (
              <div
                key={copy.label}
                className={`flex flex-col items-center text-center gap-4${!isLast ? " md:border-r md:border-[#C6A15B]/20" : ""}`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/10">
                  <Icon className="w-7 h-7 text-[#C6A15B]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white text-base font-semibold leading-snug">
                    {copy.label}
                  </p>
                  <p className="text-white/60 text-xs mt-1">{copy.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
