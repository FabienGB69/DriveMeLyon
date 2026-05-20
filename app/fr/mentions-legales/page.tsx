import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Mentions Légales | Drive Me Lyon",
  description: "Mentions légales de Drive Me Lyon — service de chauffeur privé et wine tours depuis Lyon.",
  path: "/fr/mentions-legales",
  noIndex: true,
});

export default function MentionsLegalesFR() {
  return (
    <>
      <Header lang="fr" />
      <main className="bg-white min-h-screen pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-4xl text-[#080808] mb-10">Mentions Légales</h1>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Éditeur du site</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Drive Me Lyon — Chauffeur Privé &amp; Wine Tours<br />
              Entreprise individuelle (Auto-entrepreneur)<br />
              Lyon, France<br />
              Email&nbsp;: <a href="mailto:drivemelyon@yahoo.com" className="text-[#C6A15B]">drivemelyon@yahoo.com</a><br />
              Téléphone&nbsp;: <a href="tel:+33658593922" className="text-[#C6A15B]">+33 6 58 59 39 22</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Hébergement</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#C6A15B]">vercel.com</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Propriété intellectuelle</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              L'ensemble des contenus présents sur ce site (textes, images, logos, structure) est la propriété exclusive de Drive Me Lyon. Toute reproduction, diffusion ou utilisation sans autorisation écrite préalable est interdite.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Limitation de responsabilité</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Drive Me Lyon s'efforce d'assurer l'exactitude des informations publiées sur ce site mais ne saurait être tenu responsable des erreurs, omissions ou indisponibilités du service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Droit applicable</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. Tout litige relèvera de la compétence exclusive des tribunaux français.
            </p>
          </section>
        </div>
      </main>
      <Footer lang="fr" />
    </>
  );
}
