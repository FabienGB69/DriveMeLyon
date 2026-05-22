import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";

interface QuickContactProps {
  lang?: "en" | "fr";
}

export function QuickContact({ lang = "en" }: QuickContactProps) {
  const isFr = lang === "fr";

  const heading = isFr ? "Nous contacter" : "Get in touch";
  const subtext = isFr
    ? "Nous répondons généralement en moins de 2 heures."
    : "We typically respond within 2 hours.";

  const contactLink = isFr ? "/fr/contact" : "/en/contact";

  return (
    <section className="bg-[#F7F3EA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3">
            {isFr ? "Contact" : "Contact"}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#080808] mb-4">
            {heading}
          </h2>
          <p className="text-[#171717]/60 text-lg max-w-md mx-auto">
            {subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <div className="bg-white rounded-sm shadow-sm border border-black/[0.06] p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366]/10 border border-[#25D366]/20 mb-5">
              <MessageCircle className="w-6 h-6 text-[#25D366]" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-[#080808] mb-2">
              WhatsApp
            </h3>
            <p className="text-[#171717]/60 text-sm mb-6">
              {isFr ? "Réponse rapide garantie" : "Fast response guaranteed"}
            </p>
            <a
              href="https://wa.me/33658593922"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#1eba59] transition-colors"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              {isFr ? "Message sur WhatsApp" : "Message on WhatsApp"}
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-sm shadow-sm border border-black/[0.06] p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/20 mb-5">
              <Phone className="w-6 h-6 text-[#C6A15B]" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-[#080808] mb-2">
              {isFr ? "Téléphone" : "Phone"}
            </h3>
            <p className="text-[#171717]/60 text-sm mb-6">
              +33 6 58 59 39 22
            </p>
            <a
              href="tel:+33658593922"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 border border-[#C6A15B] text-[#C6A15B] text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#C6A15B] hover:text-[#080808] transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              {isFr ? "Appeler maintenant" : "Call now"}
            </a>
          </div>

          {/* Email / Quote */}
          <div className="bg-white rounded-sm shadow-sm border border-black/[0.06] p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/20 mb-5">
              <Mail className="w-6 h-6 text-[#C6A15B]" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-[#080808] mb-2">
              {isFr ? "Demande de devis" : "Quote request"}
            </h3>
            <p className="text-[#171717]/60 text-sm mb-6">
              {isFr
                ? "Réponse sous 2 heures"
                : "Response within 2 hours"}
            </p>
            <Link
              href={contactLink}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#080808] text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#171717] transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={2} />
              {isFr ? "Envoyer une demande de devis" : "Send a quote request"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
