"use client";

import { useState } from "react";

interface ContactFormProps {
  lang?: "en" | "fr";
}

const t = {
  en: {
    heading: "Request a quote",
    subheading: "Fill in the form below and we'll get back to you within 2 hours.",
    name: "Full name",
    email: "Email address",
    phone: "Phone number",
    service: "Service",
    servicePlaceholder: "Select a service",
    services: [
      "Beaujolais wine tour",
      "Northern Rhône Valley wine tour",
      "Lyon airport transfer",
      "Private chauffeur Lyon",
      "Other",
    ],
    date: "Preferred date",
    passengers: "Number of passengers",
    message: "Additional details",
    messagePlaceholder: "Pickup location, special requests, flight number…",
    submit: "Send request",
    sending: "Sending…",
    success: "Your request has been sent! We'll reply within 2 hours.",
    error: "Something went wrong. Please try again or contact us on WhatsApp.",
    whatsapp: "Or reach us directly on WhatsApp",
  },
  fr: {
    heading: "Demander un devis",
    subheading: "Remplissez le formulaire ci-dessous et nous vous répondons sous 2 heures.",
    name: "Nom complet",
    email: "Adresse email",
    phone: "Numéro de téléphone",
    service: "Service",
    servicePlaceholder: "Sélectionnez un service",
    services: [
      "Wine Tour Beaujolais",
      "Wine Tour Vallée du Rhône Nord",
      "Transfert aéroport Lyon",
      "Chauffeur privé Lyon",
      "Autre",
    ],
    date: "Date souhaitée",
    passengers: "Nombre de passagers",
    message: "Détails supplémentaires",
    messagePlaceholder: "Lieu de prise en charge, demandes spéciales, numéro de vol…",
    submit: "Envoyer la demande",
    sending: "Envoi…",
    success: "Votre demande a bien été envoyée ! Nous vous répondons sous 2 heures.",
    error: "Une erreur s'est produite. Veuillez réessayer ou nous contacter sur WhatsApp.",
    whatsapp: "Ou contactez-nous directement sur WhatsApp",
  },
};

export function ContactForm({ lang = "en" }: ContactFormProps) {
  const copy = t[lang];
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mwpbyjka", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">Drive Me Lyon</span>
          <h1 className="font-serif text-4xl text-white mb-4">{copy.heading}</h1>
          <p className="text-white/60 text-sm">{copy.subheading}</p>
        </div>

        {status === "success" ? (
          <div className="border border-[#C6A15B]/30 bg-[#C6A15B]/8 rounded-sm p-8 text-center">
            <p className="text-[#C6A15B] font-semibold mb-2">✓</p>
            <p className="text-white/80 text-sm">{copy.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{copy.name}</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C6A15B]/60"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{copy.email}</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C6A15B]/60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{copy.phone}</label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C6A15B]/60"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{copy.passengers}</label>
                <input
                  name="passengers"
                  type="number"
                  min="1"
                  max="8"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C6A15B]/60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{copy.service}</label>
                <select
                  name="service"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C6A15B]/60"
                >
                  <option value="" className="bg-[#080808]">{copy.servicePlaceholder}</option>
                  {copy.services.map((s) => (
                    <option key={s} value={s} className="bg-[#080808]">{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{copy.date}</label>
                <input
                  name="date"
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C6A15B]/60"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{copy.message}</label>
              <textarea
                name="message"
                rows={4}
                placeholder={copy.messagePlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C6A15B]/60 resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-xs">{copy.error}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#C6A15B] text-[#080808] font-semibold text-sm uppercase tracking-widest py-4 rounded-sm hover:bg-[#d4b990] transition-colors disabled:opacity-60"
            >
              {status === "sending" ? copy.sending : copy.submit}
            </button>

            <p className="text-center text-white/40 text-xs pt-2">
              {copy.whatsapp}{" "}
              <a href="https://wa.me/33658593922" className="text-[#C6A15B] hover:underline">WhatsApp</a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
