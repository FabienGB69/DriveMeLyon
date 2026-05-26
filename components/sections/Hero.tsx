import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  lang?: "en" | "fr";
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export function Hero({
  lang = "en",
  title,
  subtitle,
  imageSrc = "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1920&q=80",
  imageAlt = "Mercedes V-Class in Beaujolais vineyard",
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#080808] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 text-white">
        {/* Trust widget */}
        <div className="inline-flex items-center gap-3 border border-[#C6A15B]/20 bg-[#C6A15B]/8 px-4 py-2 rounded-sm mb-10">
          <div className="flex text-[#C6A15B] text-sm">{"★".repeat(5)}</div>
          <span className="text-xs font-semibold uppercase tracking-widest">
            {lang === "en" ? "Rated 5/5 by our guests" : "Noté 5/5 par nos clients"}
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight max-w-3xl mb-8">
          {title}
        </h1>

        <p className="text-white/85 text-lg max-w-2xl leading-relaxed mb-12">
          {subtitle}
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          {ctaPrimary && (
            <Button href={ctaPrimary.href} variant="primary">
              {ctaPrimary.label}
            </Button>
          )}
          {ctaSecondary && (
            <Button href={ctaSecondary.href} variant="outline-light">
              {ctaSecondary.label}
            </Button>
          )}
          <Button
            href="https://wa.me/33658593922"
            variant="whatsapp"
            external
          >
            WhatsApp
          </Button>
        </div>

        {/* Badge bar */}
        <div className="flex flex-wrap gap-3">
          {[
            lang === "en" ? "English-speaking chauffeur" : "Chauffeur anglophone",
            lang === "en" ? "Mercedes vehicles" : "Véhicules Mercedes",
            lang === "en" ? "Hotel & airport pickup" : "Prise en charge hôtel & aéroport",
            "Beaujolais & Rhône Valley",
            lang === "en" ? "Google-rated service" : "Service noté sur Google",
          ].map((badge) => (
            <span
              key={badge}
              className="text-xs font-medium uppercase tracking-wider text-white/90 border border-white/10 bg-white/4 px-4 py-2 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
