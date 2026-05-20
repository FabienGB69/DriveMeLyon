interface TrustedByProps {
  lang?: "en" | "fr";
}

const hotelPartners = [
  { name: "Collège Hôtel", stars: 4, city: "Lyon" },
  { name: "Grand Hôtel-Dieu", stars: 5, city: "Lyon" },
  { name: "Fourvière Hôtel", stars: 4, city: "Lyon" },
];

const bookingPlatforms = [
  {
    name: "Airbnb",
    href: "https://www.airbnb.fr/rooms/1658791848547533735?unique_share_id=920e0109-e96a-41dc-b4b2-cc1d7ba0367f&viralityEntryPoint=1&s=76",
    labelEn: "Available on Airbnb",
    labelFr: "Disponible sur Airbnb",
    color: "#FF5A5F",
  },
  {
    name: "Booking.com",
    href: "https://www.booking.com/hotel/fr/quiet-apartment-in-tassin-parking-lyon-bus.fr.html?label=gen173bo-10CAsoTUIqcXVpZXQtYXBhcnRtZW50LWluLXRhc3Npbi1wYXJraW5nLWx5b24tYnVzSDNYA2hNiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBmAIGqAIBuALuv5bQBsACAdICJDY2YmYwMjk5LThjOWMtNGUwNi04YjcwLWY4OWEyOTE2YjZjZNgCAeACAQ&sid=a88aca115a818d18427f245c6b3defd3&dist=0&sb_price_type=total&type=total&",
    labelEn: "Available on Booking.com",
    labelFr: "Disponible sur Booking.com",
    color: "#003580",
  },
];

export function TrustedBy({ lang = "en" }: TrustedByProps) {
  return (
    <section className="bg-[#F7F3EA] py-16 border-t border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-10">
          {lang === "en" ? "Trusted by Lyon's finest hotels" : "Ils nous font confiance"}
        </p>

        {/* Hotel partner cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {hotelPartners.map((hotel) => (
            <div
              key={hotel.name}
              className="bg-white border border-black/[0.06] rounded-sm shadow-sm px-6 py-6 flex flex-col items-center text-center"
            >
              <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#C6A15B]/70 mb-3">
                {lang === "en" ? "Hotel partner" : "Partenaire hôtelier"}
              </span>
              <p className="font-serif text-xl text-[#080808] leading-snug mb-1">
                {hotel.name}
              </p>
              <p className="text-[0.65rem] text-gray-400 mb-3">{hotel.city}</p>
              <span className="text-[#C6A15B] text-sm tracking-widest">
                {"★".repeat(hotel.stars)}
              </span>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="border-t border-black/[0.07] my-10" />

        {/* Booking platforms */}
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6">
          {lang === "en" ? "Accommodation available on" : "Hébergement disponible sur"}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {bookingPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border border-black/[0.08] rounded-sm shadow-sm px-7 py-3.5 text-sm font-semibold text-[#171717] hover:border-[#C6A15B]/50 hover:text-[#C6A15B] transition-colors"
            >
              <span className="text-base font-bold" style={{ color: platform.color }}>
                {platform.name[0]}
              </span>
              <span>{lang === "en" ? platform.labelEn : platform.labelFr}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
