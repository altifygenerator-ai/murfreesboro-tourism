import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import FindAPlaceBookingCTA from "@/components/FindAPlaceBookingCTA";
import { localBusinesses } from "@/data/localBusinesses";
import { site } from "@/data/site";

const lakeCabins = localBusinesses.filter(
  (business) =>
    business.category === "stay" &&
    (business.name === "Swaha Lodge N Marina" ||
      business.name === "Parker Creek Bend Cabins")
);

export const metadata: Metadata = {
  title: "Lake Greeson Cabins | Places to Stay Near Murfreesboro, Arkansas",
  description:
    "Find cabins and lake-area places to stay near Lake Greeson and Murfreesboro, Arkansas, with planning tips for fishing, boating, Crater of Diamonds, and outdoor weekends.",
  keywords: [
    "Lake Greeson cabins",
    "cabins near Lake Greeson",
    "Lake Greeson lodging",
    "Murfreesboro Arkansas cabins",
    "Swaha cabins",
    "cabins near Crater of Diamonds",
  ],
  alternates: { canonical: "/lake-greeson-cabins" },
};

export default function LakeGreesonCabinsPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Lake Greeson Cabins",
          description: metadata.description,
          url: `${site.domain}/lake-greeson-cabins`,
          about: ["Lake Greeson", "Murfreesboro Arkansas", "Cabins"],
        }}
      />

      <section className="section">
        <div className="container">
          <div className="max-w-4xl">
            <p className="hero-eyebrow mb-3">Lake Greeson Cabins</p>
            <h1 className="text-5xl font-semibold leading-[0.98] text-[color:var(--color-text)] md:text-7xl">
              Stay close to Lake Greeson and build the weekend around the water.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--color-muted)]">
              Lake Greeson cabins work well for fishing trips, boat weekends,
              family lake days, and visitors pairing the lake with Crater of
              Diamonds. The right stay depends on which side of the lake you
              plan to use, whether you are bringing a boat or trailer, and how
              much driving you want to do.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/lake-greeson" className="btn-primary">
                Lake Greeson Guide
              </Link>
              <Link href="/murfreesboro-cabins" className="btn-secondary">
                All Murfreesboro Stays
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Cabins & Lake Stays"
            title="Start with stays that make sense for a Lake Greeson trip."
            text="These existing local lodging listings are especially relevant when the lake is the main part of the trip."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {lakeCabins.map((business) => (
              <article key={business.name} className="card flex h-full flex-col p-7">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {business.type}
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {business.name}
                </h2>
                <p className="mt-2 font-bold text-[color:var(--color-rust)]">
                  {business.area}
                </p>
                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
                  {business.description}
                </p>
                {business.note ? (
                  <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">
                    {business.note}
                  </p>
                ) : null}
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {business.href ? (
                    <a
                      href={business.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Official Site
                    </a>
                  ) : null}
                  <Link href="/murfreesboro-cabins" className="btn-secondary">
                    Compare More Stays
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Bringing a boat or trailer?",
                text: "Ask about trailer parking, ramp access, road conditions, and whether the property setup works for the size of your rig before booking.",
              },
              {
                title: "Pairing it with Crater of Diamonds?",
                text: "A lake stay can turn the trip into a full weekend. Keep one day for digging and another for fishing, swimming, boating, or a slower lake day.",
              },
              {
                title: "Booking a busy weekend?",
                text: "Summer weekends, holidays, fishing trips, and local events can tighten availability. Check directly with the property before building the rest of the trip around it.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-7">
                <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  {item.title}
                </h2>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/lake-greeson-fishing" className="btn-secondary">
              Lake Greeson Fishing
            </Link>
            <Link href="/lake-greeson-marinas-boat-rentals" className="btn-secondary">
              Marinas & Boat Rentals
            </Link>
            <Link href="/lake-greeson-camping-swimming" className="btn-secondary">
              Camping & Swimming
            </Link>
            <Link href="/crater-of-diamonds-guide" className="btn-secondary">
              Crater of Diamonds Guide
            </Link>
          </div>
        </div>
      </section>

      <FindAPlaceBookingCTA
        heading="Looking for another Arkansas stay?"
        text="Browse cabins, vacation rentals, and other stays available through Find a Place Booking."
        href="https://www.findaplacebooking.com/stays"
        buttonLabel="Browse Find a Place Booking →"
      />
    </main>
  );
}
