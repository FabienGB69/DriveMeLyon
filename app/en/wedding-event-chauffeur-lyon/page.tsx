import type { Metadata } from "next";
import { buildMetadata, hreflangMap } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Wedding Chauffeur Lyon | Premium Event Transport Service",
  description:
    "Wedding and event chauffeur service in Lyon. White-glove transport for your special day — decorated vehicles, bridal party transfers, guest shuttles, and gala evenings.",
  path: "/en/wedding-event-chauffeur-lyon",
  alternatesLang: hreflangMap["/en/wedding-event-chauffeur-lyon"],
});

const services = [
  {
    title: "Bridal Party Transport",
    desc: "The bride, groom, and wedding party arrive in an immaculate Mercedes — ribbons, flowers, and red-carpet treatment on request.",
  },
  {
    title: "Guest Shuttles",
    desc: "Coordinate arrivals and departures for guests between the venue, accommodation, and reception. We manage the logistics so you don't have to.",
  },
  {
    title: "Ceremony to Reception",
    desc: "Seamless transfer between ceremony and reception venues, with time built in for photos. Your schedule, perfectly executed.",
  },
  {
    title: "Corporate Galas & Events",
    desc: "Premium transport for gala dinners, product launches, award ceremonies, and VIP client evenings across the Lyon region.",
  },
  {
    title: "Anniversary & Celebrations",
    desc: "Surprise a loved one with a chauffeured evening out — dinner at a Michelin-starred restaurant, a concert, or a bespoke evening in Lyon.",
  },
  {
    title: "Venue Reconnaissance",
    desc: "Pre-wedding visit to map the route, time the journey, and meet the venue team. Included in all wedding bookings.",
  },
];

const whyChoose = [
  ["Punctuality guaranteed", "We map every route in advance and account for traffic on the day"],
  ["Immaculate presentation", "Vehicles cleaned and polished before every wedding booking"],
  ["Discrete & professional", "Your chauffeur blends seamlessly into your special day"],
  ["Vehicle decoration", "Ribbons, flowers, and bespoke decoration available on request"],
  ["Backup vehicle on call", "A second vehicle is always available for our wedding clients"],
  ["Flexible itinerary", "Your timeline changes — we adapt. No extra charges for minor schedule shifts"],
];

export default function WeddingEventChauffeurLyonEN() {
  const schemas = [
    serviceSchema({
      name: "Wedding & Event Chauffeur Lyon",
      description:
        "Premium wedding and event chauffeur service in Lyon with Mercedes vehicles, white-glove service, and professional presentation.",
      url: "/en/wedding-event-chauffeur-lyon",
      serviceType: "Wedding Chauffeur",
    }),
    breadcrumbSchema([
      { name: "Home", href: "/en" },
      { name: "Wedding Chauffeur Lyon" },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header lang="en" />
      <main>
        <Hero
          lang="en"
          title="Wedding Chauffeur Lyon"
          subtitle="Your most important day deserves flawless transport. Impeccably presented Mercedes vehicles, a professional chauffeur, and white-glove service from ceremony to celebration."
          ctaPrimary={{ label: "Enquire for your wedding", href: "/en/contact" }}
          ctaSecondary={{ label: "Chat on WhatsApp", href: "https://wa.me/33658593922" }}
        
          imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Wedding chauffeur luxury vehicle Lyon"
        />

        {/* Services */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  Our wedding services
                </span>
                <h2 className="font-serif text-4xl text-[#080808] mb-4">
                  Every detail, perfectly handled
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">
                  From the first car to the last shuttle — we coordinate your wedding transport so you can be present for every moment.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.07}>
                  <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-7">
                    <h3 className="font-serif text-xl text-[#080808] mb-3">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="bg-[#080808] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
                  The Drive Me Lyon standard
                </span>
                <h2 className="font-serif text-4xl text-white mb-4">
                  Why couples choose us for their wedding
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChoose.map(([title, desc], i) => (
                <FadeIn key={title} delay={i * 0.07}>
                  <div className="border border-white/10 rounded-sm p-6 hover:border-[#C6A15B]/40 transition-colors">
                    <span className="text-[#C6A15B] text-lg font-serif mr-2">✓</span>
                    <span className="font-semibold text-white text-sm">{title}</span>
                    <p className="text-white/50 text-xs leading-relaxed mt-2">{desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ReviewsCarousel lang="en" />
        <BookingCTA
          lang="en"
          title="Enquire about wedding chauffeur in Lyon"
          subtitle="We book a limited number of weddings each season. Contact us early to secure your date."
        />
      </main>
      <Footer lang="en" />
      <MobileStickyCTA lang="en" />
    </>
  );
}
