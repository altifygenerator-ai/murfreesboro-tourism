import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Murfreesboro Arkansas Guide | Crater of Diamonds, Lake Greeson & Local Trips",
    template: "%s | Murfreesboro Arkansas Guide",
  },
  description: site.description,
  keywords: [
    "Murfreesboro Arkansas",
    "Crater of Diamonds State Park",
    "Lake Greeson",
    "things to do in Murfreesboro Arkansas",
    "Murfreesboro Arkansas cabins",
    "Murfreesboro Arkansas restaurants",
    "things to do near Crater of Diamonds",
    "Lake Greeson cabins",
    "Swaha Lodge N Marina",
    "Dam Grill Lake Greeson",
    "Ka-Do-Ha Indian Village",
    "Arkansas family trip",
  ],
  authors: [{ name: "Murfreesboro Arkansas Guide" }],
  creator: "Natural State Tourism Project",
  publisher: "Natural State Tourism Project",
  alternates: { canonical: site.domain },
  openGraph: {
    title: "Murfreesboro Arkansas Guide | Crater of Diamonds & Lake Greeson",
    description: site.description,
    url: site.domain,
    siteName: "Murfreesboro Arkansas Guide",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Murfreesboro Arkansas travel guide for Crater of Diamonds and Lake Greeson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murfreesboro Arkansas Guide",
    description: site.description,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
