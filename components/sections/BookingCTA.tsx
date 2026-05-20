import { Button } from "@/components/ui/Button";

interface BookingCTAProps {
  lang?: "en" | "fr";
  title?: string;
  subtitle?: string;
}

export function BookingCTA({ lang = "en", title, subtitle }: BookingCTAProps) {
  const defaultTitle =
    lang === "en"
      ? "Ready to discover Beaujolais from Lyon?"
      : "Prêt à découvrir le Beaujolais depuis Lyon ?";
  const defaultSubtitle =
    lang === "en"
      ? "Contact us today to design your bespoke private wine tour or transfer with premium chauffeur service."
      : "Contactez-nous aujourd'hui pour concevoir votre circuit viticole privé sur-mesure avec chauffeur haut de gamme.";

  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a880] mb-4 block">
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
            {lang === "en" ? "Request private wine tour" : "Demander mon circuit privé"}
          </Button>
          <Button href="https://wa.me/33658593922" variant="whatsapp" external>
            Chat WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
