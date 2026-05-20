import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Drive Me Lyon",
  description: "Privacy policy for Drive Me Lyon — how we collect, use and protect your personal data.",
  path: "/en/politique-de-confidentialite",
  noIndex: true,
});

export default function PrivacyEN() {
  return (
    <>
      <Header lang="en" />
      <main className="bg-white min-h-screen pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-4xl text-[#080808] mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-10">Last updated: May 2026</p>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Data controller</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Drive Me Lyon, sole proprietorship, Lyon, France.<br />
              Contact: <a href="mailto:drivemelyon@yahoo.com" className="text-[#C6A15B]">drivemelyon@yahoo.com</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Data we collect</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">When you submit a quote request, we collect:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Full name and email address</li>
              <li>Phone number (optional)</li>
              <li>Travel date, service type, number of passengers</li>
              <li>Any additional details you provide</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              We also collect anonymous analytics data (page views, referrers) via Vercel Analytics. No personal data is stored by this analytics service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">How we use your data</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Responding to your booking or quote request</li>
              <li>Coordinating your transfer or tour</li>
              <li>Sending service confirmations</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">We do not sell, rent, or share your data with third parties for marketing purposes.</p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Data retention</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Contact form submissions are processed via Formspree and retained for up to 12 months. You may request deletion at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Your rights (GDPR)</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Under GDPR, you have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at{" "}
              <a href="mailto:drivemelyon@yahoo.com" className="text-[#C6A15B]">drivemelyon@yahoo.com</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Cookies</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              This website uses no tracking cookies. Vercel Analytics uses privacy-preserving, cookieless measurement. No consent banner is required.
            </p>
          </section>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
