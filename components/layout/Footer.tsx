import Link from "next/link";

const linksEN = {
  services: [
    { label: "Beaujolais Wine Tour", href: "/en/beaujolais-wine-tour-from-lyon" },
    { label: "Northern Rhône Wine Tour", href: "/en/northern-rhone-valley-wine-tour-from-lyon" },
    { label: "Airport Transfers (LYS)", href: "/en/lyon-airport-transfer" },
    { label: "Business Travel & VIP", href: "/en/private-chauffeur-lyon" },
  ],
  company: [
    { label: "Home", href: "/en" },
    { label: "Contact", href: "/en/contact" },
  ],
};

export function Footer({ lang = "en" }: { lang?: "en" | "fr" }) {
  const links = linksEN;

  return (
    <footer className="bg-[#050505] text-[#9ca3af] border-t border-white/5 pt-20 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 60" width="180" height="40" className="mb-5">
              <text x="10" y="32" fontFamily="'Playfair Display', Georgia, serif" fontSize="18" fontWeight="600" fill="#ffffff" letterSpacing="2">DRIVE ME LYON</text>
              <text x="12" y="48" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="600" fill="#c5a880" letterSpacing="2.5">PRIVATE CHAUFFEUR & WINE TOURS</text>
            </svg>
            <p className="text-sm leading-relaxed mb-5">
              {lang === "en"
                ? "Premium private chauffeur service in Lyon. Bespoke wine tours and airport transport with high-end Mercedes fleet."
                : "Service de chauffeur privé premium à Lyon. Wine Tours sur-mesure et transferts aéroport avec flotte Mercedes haut de gamme."}
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/DRIVE-ME-LYON-VTC-172640863261840/" target="_blank" rel="noopener" className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/5 text-white/60 hover:text-[#c5a880] hover:border-[#c5a880] transition-all">f</a>
              <a href="https://fr.linkedin.com/in/sanath-sirimal-durage-0536b3162" target="_blank" rel="noopener" className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/5 text-white/60 hover:text-[#c5a880] hover:border-[#c5a880] transition-all">in</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-l-2 border-[#c5a880] pl-3 mb-5">
              {lang === "en" ? "Our Services" : "Nos Services"}
            </h4>
            <ul className="space-y-3">
              {links.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-l-2 border-[#c5a880] pl-3 mb-5">
              {lang === "en" ? "Company" : "L'Entreprise"}
            </h4>
            <ul className="space-y-3">
              {links.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-l-2 border-[#c5a880] pl-3 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li><a href="tel:+33658593922" className="hover:text-white transition-colors">+33 6 58 59 39 22</a></li>
              <li><a href="https://wa.me/33658593922" target="_blank" rel="noopener" className="hover:text-white transition-colors">Chat WhatsApp</a></li>
              <li><a href="mailto:drivemelyon@yahoo.com" className="hover:text-white transition-colors">drivemelyon@yahoo.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Drive Me Lyon. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Legal Notices</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          <a href="https://kr-project.fr" target="_blank" rel="noopener" className="text-white/30 hover:text-white transition-colors">Designed by Agence KR Project</a>
        </div>
      </div>
    </footer>
  );
}
