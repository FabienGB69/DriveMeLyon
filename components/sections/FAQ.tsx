"use client";

import { useState } from "react";
import type { FAQ } from "@/data/faqs";

interface FAQProps {
  lang?: "en" | "fr";
  items: FAQ[];
}

export function FAQSection({ lang = "en", items }: FAQProps) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="bg-[#EDE8DC] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
            {lang === "en" ? "Common Questions" : "Des Questions ?"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#080808]">
            {lang === "en" ? "Frequently Asked Questions" : "Questions fréquentes"}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-black/5 rounded-sm overflow-hidden transition-all hover:border-[#C6A15B]/25 hover:shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between text-left px-7 py-5 font-sans font-semibold text-[#080808]"
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                aria-expanded={open === faq.id}
              >
                <span>{faq.question[lang]}</span>
                <svg
                  className={`w-4 h-4 text-[#C6A15B] flex-shrink-0 ml-4 transition-transform ${open === faq.id ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === faq.id && (
                <div className="px-7 pb-6 text-sm text-gray-500 leading-relaxed border-t border-black/3">
                  <p className="mt-4">{faq.answer[lang]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
