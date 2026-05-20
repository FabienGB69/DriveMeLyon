"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileStickyCTA({ lang = "en" }: { lang?: "en" | "fr" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden flex gap-2 p-3 bg-[#0a0a0a]/95 backdrop-blur border-t border-[#c5a880]/15">
      <a
        href="https://wa.me/33658593922"
        target="_blank"
        rel="noopener"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-3 rounded-sm"
      >
        WhatsApp
      </a>
      <Link
        href={`/${lang}/contact`}
        className="flex-1 flex items-center justify-center bg-[#c5a880] text-[#0a0a0a] text-sm font-semibold py-3 rounded-sm"
      >
        {lang === "en" ? "Request Quote" : "Devis Gratuit"}
      </Link>
    </div>
  );
}
