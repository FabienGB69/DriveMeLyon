import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Legal Notices | Drive Me Lyon",
  description: "Legal notices for Drive Me Lyon — private chauffeur and wine tour service in Lyon, France.",
  path: "/en/mentions-legales",
  noIndex: true,
});

export default function MentionsLegalesEN() {
  return (
    <>
      <Header lang="en" />
      <main className="bg-white min-h-screen pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-4xl text-[#080808] mb-10">Legal Notices</h1>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Publisher</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Drive Me Lyon — Private Chauffeur &amp; Wine Tours<br />
              Sole proprietorship (Auto-entrepreneur)<br />
              Lyon, France<br />
              Email: <a href="mailto:drivemelyon@yahoo.com" className="text-[#C6A15B]">drivemelyon@yahoo.com</a><br />
              Phone: <a href="tel:+33658593922" className="text-[#C6A15B]">+33 6 58 59 39 22</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Hosting</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#C6A15B]">vercel.com</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Intellectual Property</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              All content on this website (texts, images, logos, structure) is the exclusive property of Drive Me Lyon. Any reproduction, distribution, or use without prior written permission is prohibited.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Limitation of Liability</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Drive Me Lyon makes every effort to ensure the accuracy of information published on this website but cannot be held liable for errors, omissions, or unavailability of the service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-semibold text-[#080808] text-lg mb-3">Applicable Law</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              These legal notices are governed by French law. Any dispute will fall under the exclusive jurisdiction of the French courts.
            </p>
          </section>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
