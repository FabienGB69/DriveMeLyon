"use client";

import Image from "next/image";
import { reviews } from "@/data/reviews";

interface GoogleReviewsProps {
  lang?: "en" | "fr";
}

export function GoogleReviews({ lang = "en" }: GoogleReviewsProps) {
  const GOOGLE_URL = "https://search.google.com/local/reviews?placeid=ChIJ6cu2eq3t9EcRgv3ak_zahtI";

  return (
    <section className="bg-[#F7F3EA] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
            {lang === "en" ? "Guest Reviews" : "Avis Clients"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#080808] mb-4">
            {lang === "en" ? "Trusted by international travelers" : "La confiance des voyageurs internationaux"}
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            {lang === "en"
              ? "Guests choose Drive Me Lyon for punctual airport transfers, premium Mercedes comfort and private wine tours from Lyon."
              : "Nos clients choisissent Drive Me Lyon pour la ponctualité des transferts, le confort Mercedes premium et les excursions viticoles privées depuis Lyon."}
          </p>
        </div>

        {/* Google trust block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white border border-black/8 shadow-sm rounded-sm px-7 py-4 hover:border-[#C6A15B]/40 transition-colors"
          >
            {/* Google G */}
            <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3C34 32.3 29.5 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.3 2.7l5.7-5.7C33.4 7.5 28.9 5.5 24 5.5 13.8 5.5 5.5 13.8 5.5 24S13.8 42.5 24 42.5 42.5 34.2 42.5 24c0-1.2-.1-2.4-.3-3.5h1.4z"/>
              <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.5 16.2 19 13 24 13c2.8 0 5.3 1 7.3 2.7l5.7-5.7C33.4 7.5 28.9 5.5 24 5.5c-7.5 0-14 4.3-17.7 10.7-.5.8-.5 1.7 0 2.5z"/>
              <path fill="#FBBC05" d="M24 42.5c4.8 0 9.2-1.8 12.5-4.8l-6-5.1c-1.8 1.3-4 2-6.5 2-5.5 0-10-3.7-11.3-8.7l-6.5 5C7 36.7 15 42.5 24 42.5z"/>
              <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-.7 2-2 3.8-3.7 5.1l6 5.1C37.2 39.8 43 34.5 43 24c0-1.2-.1-2.4-.3-3.5h1.4-.5z"/>
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xl font-bold text-[#080808]">5.0</span>
                <span className="text-[#FBBC05] text-lg tracking-tight">★★★★★</span>
              </div>
              <p className="text-xs text-gray-400">
                {lang === "en" ? `${reviews.length} reviews on Google` : `${reviews.length} avis sur Google`}
              </p>
            </div>
          </a>

          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#C6A15B] hover:underline underline-offset-4"
          >
            {lang === "en" ? "Read all Google reviews →" : "Lire tous les avis Google →"}
          </a>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-sm border border-black/[0.05] shadow-sm p-7 relative flex flex-col"
            >
              {/* Google badge */}
              <div className="absolute top-5 right-5 flex items-center gap-1 text-[0.6rem] font-semibold text-gray-400 bg-gray-50 border border-black/5 px-2 py-1 rounded-full">
                <span className="text-[#4285F4] font-bold text-xs">G</span>
                <span>Google</span>
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#C6A15B]/30 flex-shrink-0">
                  <Image src={review.avatarUrl} alt={review.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <p className="font-semibold text-[#080808] text-sm leading-tight">{review.name}</p>
                  <p className="text-[0.7rem] text-gray-400">{review.date}</p>
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

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#C6A15B] text-[#C6A15B] text-sm font-semibold px-8 py-3 rounded-sm hover:bg-[#C6A15B] hover:text-white transition-colors"
          >
            {lang === "en" ? "See all reviews on Google" : "Voir tous les avis sur Google"}
          </a>
        </div>
      </div>
    </section>
  );
}
