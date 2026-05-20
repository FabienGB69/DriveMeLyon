import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Drive Me Lyon | Premium Private Chauffeur & Wine Tours",
    template: "%s | Drive Me Lyon",
  },
  description:
    "Premium private chauffeur service in Lyon. Luxury wine tours in Beaujolais & Rhône Valley, airport transfers, business travel and bespoke English-speaking service.",
  metadataBase: new URL("https://drivemelyon.com"),
  openGraph: {
    type: "website",
    siteName: "Drive Me Lyon",
    images: [{ url: "/og/default.jpg" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
