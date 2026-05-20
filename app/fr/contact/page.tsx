import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { seoData } from "@/data/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = buildMetadata({
  ...seoData.fr.contact,
  path: "/fr/contact",
});

export default function ContactFR() {
  return (
    <>
      <Header lang="fr" />
      <main className="bg-[#080808] min-h-screen pt-20">
        <ContactForm lang="fr" />
      </main>
      <Footer lang="fr" />
    </>
  );
}
