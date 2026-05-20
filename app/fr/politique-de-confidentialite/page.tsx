import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Politique de Confidentialité | Drive Me Lyon",
  description: "Politique de confidentialité de Drive Me Lyon — collecte, utilisation et protection de vos données personnelles.",
  path: "/fr/politique-de-confidentialite",
  noIndex: true,
});

export default function PrivacyFR() {
  return (
    <>
      <Header lang="fr" />
      <main className="bg-white min-h-screen pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-4xl text-[#080808] mb-4">Politique de Confidentialité</h1>
          <p className="text-gray-400 text-sm mb-10">Dernière mise à jour : mai 2026</p>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Responsable du traitement</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Drive Me Lyon, entreprise individuelle, Lyon, France.<br />
              Contact&nbsp;: <a href="mailto:drivemelyon@yahoo.com" className="text-[#C6A15B]">drivemelyon@yahoo.com</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Données collectées</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">Lors d'une demande de devis, nous collectons&nbsp;:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Nom complet et adresse email</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Date du voyage, type de service, nombre de passagers</li>
              <li>Tout détail complémentaire que vous fournissez</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              Nous collectons également des données analytiques anonymes (pages vues, sources) via Vercel Analytics. Aucune donnée personnelle n'est stockée par ce service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Utilisation de vos données</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Répondre à votre demande de réservation ou de devis</li>
              <li>Coordonner votre transfert ou excursion</li>
              <li>Envoyer les confirmations de service</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">Nous ne vendons, ne louons et ne partageons jamais vos données à des fins commerciales.</p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Conservation des données</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Les formulaires sont traités via Formspree et conservés 12 mois maximum. Vous pouvez demander la suppression à tout moment.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Vos droits (RGPD)</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Conformément au RGPD, vous disposez du droit d'accès, de rectification, de suppression et de limitation du traitement de vos données. Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:drivemelyon@yahoo.com" className="text-[#C6A15B]">drivemelyon@yahoo.com</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Cookies</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ce site n'utilise aucun cookie de tracking. Vercel Analytics utilise une mesure sans cookie respectueuse de la vie privée. Aucune bannière de consentement n'est nécessaire.
            </p>
          </section>
        </div>
      </main>
      <Footer lang="fr" />
    </>
  );
}
