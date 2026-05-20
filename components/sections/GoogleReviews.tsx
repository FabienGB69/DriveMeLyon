"use client";

import Image from "next/image";
import { useState } from "react";
import { reviews } from "@/data/reviews";
import { TrustBar } from "./TrustBar";
import { Button } from "@/components/ui/Button";

interface GoogleReviewsProps {
  lang?: "en" | "fr";
}

export function GoogleReviews({ lang = "en" }: GoogleReviewsProps) {
  const [current, setCurrent] = useState(0);
  const perPage = 2;
  const total = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="bg-[#f3f1eb] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a880] mb-3 block">
            {lang === "en" ? "Guest Testimonials" : "Avis Clients"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0a0a0a] mb-4">
            {lang === "en" ? "Trusted by international travelers" : "La confiance des voyageurs internationaux"}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {lang === "en"
              ? "Rated on Google by clients from all over the world."
              : "Découvrez les avis laissés sur Google par nos clients du monde entier."}
          </p>
        </div>

        <div className="mb-12">
          <TrustBar lang={lang} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {visible.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-sm border border-black/[0.04] shadow-sm p-8 relative flex flex-col"
            >
              {/* Source badge */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 text-[0.65rem] font-semibold text-gray-400 bg-gray-50 border border-black/5 px-2 py-1 rounded-full">
                <span className="text-[#4285F4]">G</span> Google Review
              </div>

              {/* Quote mark */}
              <span className="absolute top-4 left-7 font-serif text-8xl text-[#c5a880]/10 leading-none select-none">&ldquo;</span>

              <div className="flex items-center gap-3 mb-4 relative">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#c5a880] flex-shrink-0">
                  <Image src={review.avatarUrl} alt={review.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="font-semibold text-[#0a0a0a] text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>

              <div className="text-[#c5a880] text-sm mb-3">{"★".repeat(review.rating)}</div>

              <p className="text-gray-700 text-sm leading-relaxed italic flex-grow">&ldquo;{review.text}&rdquo;</p>

              <span className="mt-4 inline-block text-[0.65rem] font-bold uppercase tracking-wider text-[#c5a880] bg-[#c5a880]/10 px-2.5 py-1 rounded-sm self-start">
                {review.type}
              </span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="w-11 h-11 rounded-full border border-black/10 bg-white flex items-center justify-center text-sm hover:border-[#c5a880] hover:text-[#c5a880] transition-all disabled:opacity-30"
          >
            ←
          </button>
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-[#c5a880]" : "w-2 bg-black/15"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
            disabled={current === total - 1}
            className="w-11 h-11 rounded-full border border-black/10 bg-white flex items-center justify-center text-sm hover:border-[#c5a880] hover:text-[#c5a880] transition-all disabled:opacity-30"
          >
            →
          </button>
        </div>

        <div className="text-center">
          <Button
            href="http://search.google.com/local/reviews?placeid=ChIJ6cu2eq3t9EcRgv3ak_zahtI"
            variant="outline-gold"
            external
          >
            {lang === "en" ? "Read all Google reviews" : "Lire tous les avis sur Google"}
          </Button>
        </div>
      </div>
    </section>
  );
}
