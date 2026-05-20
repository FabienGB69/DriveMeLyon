import { Button } from "@/components/ui/Button";

interface BookingCTAProps {
  lang?: "en" | "fr";
  title?: string;
  subtitle?: string;
}

export function BookingCTA({ lang = "en", title, subtitle }: BookingCTAProps) {
  const defaultTitle =
    lang === "en"
      ? "Plan your private experience from Lyon"
      : "Planifiez votre expérience privée depuis Lyon";
  const defaultSubtitle =
    lang === "en"
      ? "Contact us to design your bespoke wine tour or premium transfer. Fast response guaranteed."
      : "Contactez-nous pour concevoir votre circuit viticole ou transfert premium sur-mesure. Réponse rapide garantie.";

  return (
    <section className="bg-[#080808] py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-4 block">
          {lang === "en" ? "Your quote in 15 minutes" : "Votre devis en 15 minutes"}
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-5">
          {title ?? defaultTitle}
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          {subtitle ?? defaultSubtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={`/${lang}/contact`} variant="primary">
            {lang === "en" ? "Request availability" : "Demander les disponibilités"}
          </Button>
          <Button href="https://wa.me/33658593922" variant="whatsapp" external>
            {lang === "en" ? "Contact on WhatsApp" : "Contacter sur WhatsApp"}
          </Button>
          <Button href="tel:+33658593922" variant="outline-light">
            {lang === "en" ? "Call now" : "Appeler maintenant"}
          </Button>
        </div>
      </div>
    </section>
  );
}
