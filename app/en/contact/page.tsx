import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { seoData } from "@/data/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = buildMetadata({
  ...seoData.en.contact,
  path: "/en/contact",
});

export default function ContactEN() {
  return (
    <>
      <Header lang="en" />
      <main className="bg-[#0a0a0a] min-h-screen pt-20">
        <ContactForm lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
