interface TrustedByProps {
  lang?: "en" | "fr";
}

const hotelPartners = [
  {
    name: "Collège Hôtel",
    stars: 4,
    city: "Lyon",
  },
  {
    name: "Grand Hôtel-Dieu",
    stars: 5,
    city: "Lyon",
  },
  {
    name: "Fourvière Hôtel",
    stars: 4,
    city: "Lyon",
  },
];

const bookingPlatforms = [
  {
    name: "Airbnb",
    href: "https://www.airbnb.fr/rooms/1658791848547533735?unique_share_id=920e0109-e96a-41dc-b4b2-cc1d7ba0367f&viralityEntryPoint=1&s=76",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12 6.627 0 12-5.372 12-12C24 5.373 18.627 0 12 0zm-.057 4.5c.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63-.9 0-1.63-.73-1.63-1.63 0-.9.73-1.63 1.63-1.63zm5.4 13.58c-.19.56-.74.88-1.32.74-1.35-.35-2.47-1.28-3.27-2.5-.3.52-.67 1-1.1 1.42-.79.73-1.73 1.1-2.73 1.1-.4 0-.8-.06-1.19-.18-.58-.17-.98-.71-.98-1.31v-.08c.02-2.4 1.7-4.88 4.65-6.97l.02-.01c.06-.04.13-.07.2-.07.06 0 .13.02.18.07l.02.01c2.95 2.09 4.63 4.57 4.65 6.97v.08c0 .28-.06.55-.19.79z"/>
      </svg>
    ),
    labelEn: "Available on Airbnb",
    labelFr: "Disponible sur Airbnb",
  },
  {
    name: "Booking.com",
    href: "https://www.booking.com/hotel/fr/quiet-apartment-in-tassin-parking-lyon-bus.fr.html?label=gen173bo-10CAsoTUIqcXVpZXQtYXBhcnRtZW50LWluLXRhc3Npbi1wYXJraW5nLWx5b24tYnVzSDNYA2hNiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBmAIGqAIBuALuv5bQBsACAdICJDY2YmYwMjk5LThjOWMtNGUwNi04YjcwLWY4OWEyOTE2YjZjZNgCAeACAQ&sid=a88aca115a818d18427f245c6b3defd3&dist=0&sb_price_type=total&type=total&",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.5 14.5h-3v-5h3v5zm0-7h-3V7.5h3V9.5z"/>
      </svg>
    ),
    labelEn: "Available on Booking.com",
    labelFr: "Disponible sur Booking.com",
  },
];

export function TrustedBy({ lang = "en" }: TrustedByProps) {
  return (
    <section className="bg-[#F7F3EA] py-16 border-t border-black/[0.05]">
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
              className="bg-white border border-black/[0.06] rounded-sm shadow-sm px-6 py-5 flex flex-col items-center text-center"
            >
              <span className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 mb-3">
                {lang === "en" ? "Hotel partner" : "Partenaire hôtelier"}
              </span>
              <p className="font-serif text-lg text-[#080808] leading-snug mb-2">
                {hotel.name}
              </p>
              <p className="text-[0.65rem] text-gray-400 mb-3">{hotel.city}</p>
              <span className="text-[#C6A15B] text-sm tracking-wide">
                {"★".repeat(hotel.stars)}
              </span>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="border-t border-black/[0.07] my-10" />

        {/* Booking platforms */}
        <p className="text-center text-xs text-gray-400 mb-6">
          {lang === "en" ? "Accommodation available on" : "Hébergement disponible sur"}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {bookingPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white border border-black/[0.08] rounded-sm shadow-sm px-6 py-3 text-sm font-semibold text-[#171717] hover:border-[#C6A15B]/50 hover:text-[#C6A15B] transition-colors"
            >
              {platform.icon}
              {lang === "en" ? platform.labelEn : platform.labelFr}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
