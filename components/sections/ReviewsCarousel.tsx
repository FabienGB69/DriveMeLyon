"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/reviews";

interface ReviewsCarouselProps {
  lang?: "en" | "fr";
}

const GOOGLE_URL = "https://search.google.com/local/reviews?placeid=ChIJ6cu2eq3t9EcRgv3ak_zahtI";

export function ReviewsCarousel({ lang = "en" }: ReviewsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-[#F7F3EA] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
              {lang === "en" ? "Guest Reviews" : "Avis Clients"}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#080808]">
              {lang === "en" ? "Trusted by international travelers" : "La confiance des voyageurs internationaux"}
            </h2>
          </div>

          {/* Google trust badge */}
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-black/8 shadow-sm rounded-sm px-5 py-3 hover:border-[#C6A15B]/40 transition-colors flex-shrink-0"
          >
            <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3C34 32.3 29.5 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.3 2.7l5.7-5.7C33.4 7.5 28.9 5.5 24 5.5 13.8 5.5 5.5 13.8 5.5 24S13.8 42.5 24 42.5 42.5 34.2 42.5 24c0-1.2-.1-2.4-.3-3.5h1.4z"/>
              <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.5 16.2 19 13 24 13c2.8 0 5.3 1 7.3 2.7l5.7-5.7C33.4 7.5 28.9 5.5 24 5.5c-7.5 0-14 4.3-17.7 10.7z"/>
              <path fill="#FBBC05" d="M24 42.5c4.8 0 9.2-1.8 12.5-4.8l-6-5.1c-1.8 1.3-4 2-6.5 2-5.5 0-10-3.7-11.3-8.7l-6.5 5C7 36.7 15 42.5 24 42.5z"/>
              <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-.7 2-2 3.8-3.7 5.1l6 5.1C37.2 39.8 43 34.5 43 24c0-1.2-.1-2.4-.3-3.5h1.4z"/>
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold text-[#080808]">5.0</span>
                <span className="text-[#FBBC05] text-base">★★★★★</span>
              </div>
              <p className="text-[0.65rem] text-gray-400">
                {lang === "en" ? `${reviews.length} Google reviews` : `${reviews.length} avis Google`}
              </p>
            </div>
          </a>
        </div>

        <p className="text-gray-500 text-sm max-w-2xl mb-10">
          {lang === "en"
            ? "Guests choose Drive Me Lyon for punctual airport transfers, premium Mercedes comfort and private wine tours from Lyon."
            : "Nos clients choisissent Drive Me Lyon pour la ponctualité, le confort Mercedes et les excursions viticoles privées depuis Lyon."}
        </p>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-none w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-white rounded-sm border border-black/[0.05] shadow-sm p-7 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#C6A15B]/30 flex-shrink-0">
                    <Image src={review.avatarUrl} alt={review.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#080808] text-sm leading-tight">{review.name}</p>
                    <p className="text-[0.7rem] text-gray-400">{review.date}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-[0.6rem] font-semibold text-gray-400 bg-gray-50 border border-black/5 px-2 py-1 rounded-full">
                    <span className="text-[#4285F4] font-bold text-xs">G</span>
                    <span>Google</span>
                  </div>
                </div>

                <div className="text-[#FBBC05] text-sm mb-3">{"★".repeat(review.rating)}</div>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">&ldquo;{review.text}&rdquo;</p>
                <span className="mt-5 inline-block text-[0.6rem] font-bold uppercase tracking-wider text-[#C6A15B] bg-[#C6A15B]/10 px-2.5 py-1 rounded-sm self-start">
                  {review.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#C6A15B] hover:underline underline-offset-4"
          >
            {lang === "en" ? "Read all Google reviews →" : "Lire tous les avis Google →"}
          </a>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
