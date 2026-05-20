import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";

interface SignatureExperiencesProps {
  lang?: "en" | "fr";
}

export function SignatureExperiences({ lang = "en" }: SignatureExperiencesProps) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a880] mb-3 block">
            {lang === "en" ? "Signature Offerings" : "Prestations Signatures"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0a0a0a] mb-4">
            {lang === "en"
              ? "Bespoke private tours & luxury transport"
              : "Vivez des expériences exclusives depuis Lyon"}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {lang === "en"
              ? "Whether exploring world-famous vineyards or traveling with complete peace of mind, we craft the perfect journey for you."
              : "Que ce soit pour explorer des vignobles réputés ou voyager avec style, nous créons le voyage parfait pour vous."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-sm border border-black/[0.03] shadow-sm overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#c5a880]/25 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="gold">{service.badge[lang]}</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-[#0a0a0a] mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-6">
                  {service.description[lang]}
                </p>
                <Link
                  href={service.slug[lang]}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c5a880] group-hover:gap-3 transition-all"
                >
                  {lang === "en" ? "Explore Experience" : "Découvrir l'excursion"}
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
