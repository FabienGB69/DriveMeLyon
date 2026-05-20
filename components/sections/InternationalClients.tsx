interface InternationalClientsProps {
  lang?: "en" | "fr";
}

const proofs = {
  en: [
    { icon: "🗣️", title: "English-speaking service", desc: "Fluent bilingual chauffeur — English & French throughout the journey." },
    { icon: "🏨", title: "Hotel pickup included", desc: "Door-to-door collection from any hotel or address in Lyon and the surrounding area." },
    { icon: "✏️", title: "Flexible itinerary", desc: "Your schedule, your pace. Routes and stops adjusted to your preferences." },
    { icon: "✈️", title: "Airport pickup", desc: "Meet & greet at Lyon Saint-Exupéry (LYS) with real-time flight tracking." },
    { icon: "📍", title: "Local recommendations", desc: "Insider knowledge of the best restaurants, producers and hidden viewpoints." },
    { icon: "🚗", title: "Mercedes vehicles", desc: "Pristine, air-conditioned Mercedes fleet — comfort from door to door." },
  ],
  fr: [
    { icon: "🗣️", title: "Service anglophone", desc: "Chauffeur bilingue anglais–français pour tous vos déplacements." },
    { icon: "🏨", title: "Prise en charge hôtel", desc: "Collecte porte-à-porte depuis n'importe quel hôtel ou adresse à Lyon." },
    { icon: "✏️", title: "Itinéraire flexible", desc: "Votre programme, votre rythme. Parcours ajusté selon vos préférences." },
    { icon: "✈️", title: "Transfert aéroport", desc: "Accueil à Lyon Saint-Exupéry (LYS) avec suivi des vols en temps réel." },
    { icon: "📍", title: "Recommandations locales", desc: "Connaissance approfondie des meilleurs restaurants, domaines et panoramas." },
    { icon: "🚗", title: "Véhicules Mercedes", desc: "Flotte Mercedes premium, climatisée et entretenue à la perfection." },
  ],
};

export function InternationalClients({ lang = "en" }: InternationalClientsProps) {
  const items = proofs[lang];

  return (
    <section className="bg-[#F7F3EA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: headline */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
              {lang === "en" ? "Who We Serve" : "Pour qui"}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#080808] leading-tight mb-6">
              {lang === "en"
                ? "Designed for international guests, hotels, private groups and business travelers."
                : "Conçu pour les voyageurs internationaux, hôtels, groupes privés et voyageurs d'affaires."}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              {lang === "en"
                ? "From a solo traveler arriving at Lyon airport to a group of wine enthusiasts exploring Beaujolais, every experience is tailored and personal."
                : "Du voyageur solo arrivant à Lyon à un groupe d'amateurs de vins en Beaujolais, chaque expérience est personnalisée et mémorable."}
            </p>
          </div>

          {/* Right: proof grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-black/[0.05] rounded-sm p-5 flex gap-4 hover:border-[#C6A15B]/30 transition-colors"
              >
                <span className="text-2xl flex-shrink-0 leading-none mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#080808] text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
