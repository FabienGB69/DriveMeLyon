"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const navEN = [
  {
    label: "Wine Tours",
    href: "/en/wine-tours",
    children: [
      { label: "Beaujolais", href: "/en/beaujolais-wine-tour-from-lyon" },
      { label: "Rhône Valley", href: "/en/northern-rhone-valley-wine-tour-from-lyon" },
      { label: "Custom Experience", href: "/en/wine-tours" },
    ],
  },
  {
    label: "Private Transfers",
    href: "/en/private-chauffeur-lyon",
    children: [
      { label: "Lyon Airport", href: "/en/lyon-airport-transfer" },
      { label: "Private Chauffeur", href: "/en/private-chauffeur-lyon" },
    ],
  },
  { label: "Contact", href: "/en/contact" },
];

export function Header({ lang = "en" }: { lang?: "en" | "fr" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = navEN;
  const oppositeLang = lang === "en" ? "fr" : "en";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 h-20 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c5a880]/15 shadow-md"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} aria-label="Drive Me Lyon Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 280 60"
            width="200"
            height="44"
          >
            <text
              x="10"
              y="32"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="20"
              fontWeight="600"
              fill="#ffffff"
              letterSpacing="2"
            >
              DRIVE ME LYON
            </text>
            <text
              x="12"
              y="48"
              fontFamily="'Inter', sans-serif"
              fontSize="7.5"
              fontWeight="600"
              fill="#c5a880"
              letterSpacing="2.5"
            >
              PRIVATE CHAUFFEUR & WINE TOURS
            </text>
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="text-[0.8rem] font-medium uppercase tracking-widest text-white/80 hover:text-white flex items-center gap-1 transition-colors">
                  {item.label}
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute top-full left-0 mt-2 w-56 bg-[#0a0a0a]/95 backdrop-blur-md border border-[#c5a880]/15 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-5 py-3 text-sm text-white/80 hover:text-[#c5a880] hover:bg-[#c5a880]/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.8rem] font-medium uppercase tracking-widest text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={`/${oppositeLang}`}
            className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white border border-[#c5a880]/30 rounded-full px-3 py-1 transition-colors"
          >
            {oppositeLang.toUpperCase()}
          </Link>
          <Button href={`/${lang}/contact`} variant="outline-gold" className="text-xs py-2 px-4">
            {lang === "en" ? "Request Quote" : "Devis Gratuit"}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-6"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-full h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-[#c5a880]/15 px-6 py-6 flex flex-col gap-4">
          {nav.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-medium uppercase tracking-wider text-white/80"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-2 pl-4 flex flex-col gap-2">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-sm text-white/60 hover:text-[#c5a880]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Button href={`/${lang}/contact`} variant="primary" className="mt-2 w-full justify-center">
            {lang === "en" ? "Request Quote" : "Devis Gratuit"}
          </Button>
        </div>
      )}
    </header>
  );
}
