import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteSearch from "@/components/SiteSearch";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const siteUrl = "https://www.murfreesboroarkansas.org";

const title =
  "Murfreesboro Arkansas Travel Guide | Crater of Diamonds & Lake Greeson";

const description =
  "Plan a Murfreesboro, Arkansas trip around Crater of Diamonds State Park, Lake Greeson, cabins, restaurants, family stops, fishing, camping, and southwest Arkansas day trips.";

const ogImage = "/images/murfreesboro/og-murfreesboro-arkansas-guide.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: title,
    template: "%s | Murfreesboro Arkansas Guide",
  },

  description,

  keywords: [
    "Murfreesboro Arkansas",
    "Murfreesboro AR",
    "Murfreesboro Arkansas guide",
    "Murfreesboro Arkansas travel guide",
    "visit Murfreesboro Arkansas",
    "things to do in Murfreesboro Arkansas",
    "things to do near Murfreesboro Arkansas",

    "Crater of Diamonds",
    "Crater of Diamonds State Park",
    "Crater of Diamonds guide",
    "Crater of Diamonds Arkansas",
    "Crater of Diamonds Murfreesboro Arkansas",
    "things to do near Crater of Diamonds",
    "cabins near Crater of Diamonds",
    "restaurants near Crater of Diamonds",
    "diamond digging Arkansas",
    "diamond digging Murfreesboro Arkansas",
    "what to bring to Crater of Diamonds",

    "Lake Greeson",
    "Lake Greeson Arkansas",
    "Lake Greeson Murfreesboro Arkansas",
    "Lake Greeson cabins",
    "Lake Greeson camping",
    "Lake Greeson fishing",
    "Lake Greeson boating",
    "Lake Greeson marina",
    "Swaha Lodge N Marina",
    "Dam Grill Lake Greeson",
    "Self Creek Lodge and Marina",
    "Narrows Dam",
    "Little Missouri River",
    "Little Missouri River Arkansas",
    "Narrows Tailwater",

    "Murfreesboro Arkansas cabins",
    "Murfreesboro Arkansas RV parks",
    "Murfreesboro Arkansas campgrounds",
    "Murfreesboro Arkansas hotels",
    "places to stay in Murfreesboro Arkansas",
    "Murfreesboro Arkansas vacation rentals",

    "Murfreesboro Arkansas restaurants",
    "Murfreesboro Arkansas food",
    "Telinga's Murfreesboro",
    "Feed Bin Cafe Murfreesboro",
    "Pizza Inn Murfreesboro Arkansas",

    "Ka-Do-Ha Indian Village",
    "Daisy State Park",
    "Bear Creek Cycle Trail",
    "Murfreesboro Arkansas shopping",
    "Murfreesboro Arkansas local businesses",
    "Murfreesboro Arkansas souvenirs",
    "diamond digging supplies",

    "Arkansas family trip",
    "Arkansas weekend trip",
    "southwest Arkansas travel",
    "southwest Arkansas guide",
    "Arkansas lake weekend",
    "Arkansas cabins",
    "Arkansas state parks",
    "family things to do in Arkansas",
    "day trips from Murfreesboro Arkansas",
    "Kirby Arkansas",
    "Daisy Arkansas",
    "Delight Arkansas",
  ],

  authors: [{ name: "Murfreesboro Arkansas Guide" }],
  creator: "Natural State Tourism Project",
  publisher: "Natural State Tourism Project",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Murfreesboro Arkansas Guide",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Murfreesboro Arkansas guide for Crater of Diamonds, Lake Greeson, cabins, restaurants, and local trip planning",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Murfreesboro Arkansas Guide",
    description,
    images: [ogImage],
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

  verification: {
    google: "WMZrHmR5dQ0tZ1zlRlNuQOH4swP97eaYlkGX14ubTFo",
  },

  category: "travel",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <SiteSearch />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}