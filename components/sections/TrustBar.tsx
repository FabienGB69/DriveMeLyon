interface TrustBarProps {
  lang?: "en" | "fr";
}

const badges = {
  en: ["Punctuality", "Professionalism", "Flexibility", "English-speaking service", "Mercedes Comfort", "Wine region knowledge"],
  fr: ["Ponctualité", "Professionnalisme", "Flexibilité", "Service Anglophone", "Confort Mercedes", "Expertise Oenologique"],
};

export function TrustBar({ lang = "en" }: TrustBarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-white border border-black/5 shadow-sm rounded-sm p-6 max-w-3xl mx-auto">
      {/* Score */}
      <div className="flex items-center gap-4 pr-0 sm:pr-6 sm:border-r border-black/10">
        <span className="text-4xl font-bold font-sans text-[#080808]">5.0</span>
        <div>
          <div className="text-[#C6A15B] text-base">{"★".repeat(5)}</div>
          <p className="text-xs text-gray-500 mt-0.5">
            {lang === "en" ? "Based on verified Google reviews" : "Avis Google vérifiés"}
          </p>
        </div>
      </div>
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {badges[lang].map((b) => (
          <span key={b} className="text-[0.65rem] font-semibold uppercase tracking-wide bg-[#F7F3EA] text-[#080808] border border-black/4 px-2.5 py-1 rounded-sm">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
