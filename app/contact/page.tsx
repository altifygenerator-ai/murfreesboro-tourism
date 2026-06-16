import type { Metadata } from "next";
import Link from "next/link";
import ContactAdvertisingForm from "@/components/ContactAdvertisingForm";

export const metadata: Metadata = {
  title:
    "Advertise Your Murfreesboro Arkansas Business | Natural State Tourism Project",
  description:
    "Request listing, advertising, featured placement, or local spotlight information for the Murfreesboro Arkansas Guide covering Crater of Diamonds, Lake Greeson, restaurants, cabins, local shops, and visitor stops.",
  keywords: [
    "advertise Murfreesboro Arkansas business",
    "Murfreesboro Arkansas business listing",
    "Crater of Diamonds advertising",
    "Lake Greeson business listing",
    "Murfreesboro Arkansas tourism advertising",
    "Natural State Tourism Project advertising",
  ],
  alternates: { canonical: "/contact" },
};

const listingOptions = [
  {
    title: "Basic Listing",
    price: "Free",
    text: "A simple listing for local businesses that naturally fit the guide. Includes your business name, category, short description, location, and a link when available.",
    cta: "Ask About This",
  },
  {
    title: "Featured Listing",
    price: "$20/month or $200/year",
    text: "A stronger listing with better visibility, a larger card, photo, stronger write-up, and better placement on relevant category pages.",
    cta: "Ask About This",
  },
  {
    title: "Business Spotlight",
    price: "$100 one-time",
    text: "A dedicated local spotlight page with more room for photos, services, story, contact info, and links back to your business.",
    cta: "Ask About This",
  },
];

const businessTypes = [
  "Restaurants",
  "Cabins & vacation rentals",
  "Hotels & RV parks",
  "Attractions",
  "Coffee shops",
  "Local shops",
  "Outdoor recreation",
  "Guides & rentals",
  "Local service businesses",
  "Event venues",
  "Tourism-related businesses",
  "Family-friendly stops",
];

export default function ContactPage() {
  return (
    <main className="bg-[color:var(--color-bg)]">
      <section className="relative overflow-hidden border-b border-black/10 bg-[color:var(--color-bg-soft)]">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[color:var(--color-accent)] blur-3xl" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[color:var(--color-accent-dark)] blur-3xl" />
        </div>

        <div className="container relative py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
            <div>
              <p className="eyebrow">Advertise Locally</p>

              <h1 className="mt-3 max-w-3xl font-heading text-5xl font-black leading-[0.95] text-[color:var(--color-text)] md:text-7xl">
                Get your Murfreesboro business in front of visitors.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--color-muted)] md:text-lg">
                The Murfreesboro Arkansas Guide helps visitors find local places
                to eat, stay, shop, explore, and plan their trip around Crater
                of Diamonds, Lake Greeson, and nearby southwest Arkansas stops.
                Basic listings are free on the guide when they fit, and
                featured options are available for small local businesses that
                want better visibility.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm">
                  <h2 className="text-base font-bold text-[color:var(--color-text)]">
                    Built for visitors
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                    The guide is organized around what people are searching for:
                    diamonds, lake days, restaurants, cabins, local shops, and
                    nearby stops.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm">
                  <h2 className="text-base font-bold text-[color:var(--color-text)]">
                    Affordable visibility
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                    Start with a basic listing, then upgrade to featured
                    placement or a local spotlight page when you want more room
                    and stronger placement.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="mailto:naturalstatetourismproject@gmail.com" className="btn-primary">
                  Email Us
                </a>

                <Link href="/murfreesboro-local-businesses" className="btn-secondary">
                  View Local Businesses
                </Link>
              </div>
            </div>

            <ContactAdvertisingForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Simple Listing Options</p>
            <h2 className="section-title">Pick the amount of visibility you need.</h2>
            <p className="section-lead mt-4">
              Listings are meant to stay simple and affordable. Local businesses
              can start free, then upgrade if they want stronger placement on
              pages visitors are already using.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {listingOptions.map((option) => (
              <article
                key={option.title}
                className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div>
                  <h3 className="text-xl font-black text-[color:var(--color-text)]">
                    {option.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-[color:var(--color-accent)]">
                    {option.price}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                    {option.text}
                  </p>
                </div>

                <a
                  href="#advertising-form"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-black/10 px-4 py-2.5 text-sm font-bold text-[color:var(--color-text)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
                >
                  {option.cta}
                </a>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-[color:var(--color-muted)]">
            Featured placement depends on fit, page layout, and available space.
            Business Spotlight pages are best for restaurants, cabins, shops,
            attractions, event venues, outdoor recreation, and other local
            tourism-related businesses.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Who Can Get Listed?</p>
            <h2 className="section-title">Businesses that help visitors plan a trip.</h2>
            <p className="section-lead mt-4">
              The guide is built for businesses that help visitors and locals
              find useful places around Murfreesboro, Crater of Diamonds, Lake
              Greeson, Kirby, Daisy, and nearby southwest Arkansas.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {businessTypes.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-bold text-[color:var(--color-text)] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-[color:var(--color-accent-dark)] p-7 text-white shadow-xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-white/65">
                  Local Visibility
                </p>
                <h2 className="mt-3 font-heading text-4xl font-black leading-tight md:text-5xl">
                  Get found while visitors are planning where to go.
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-white/82">
                  This is not a giant ad network or a generic directory. The
                  Murfreesboro guide is built around real trip planning:
                  Crater of Diamonds, Lake Greeson, food stops, places to stay,
                  supplies, outdoor recreation, and nearby day trips.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#advertising-form"
                    className="rounded-full bg-white px-5 py-3 text-sm font-black text-[color:var(--color-accent-dark)] transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Request Info
                  </a>

                  <Link
                    href="/things-to-do-in-murfreesboro-arkansas"
                    className="rounded-full border border-white/25 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                  >
                    View The Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}