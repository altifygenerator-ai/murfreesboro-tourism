import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABox from "@/components/ui/CTABox";
import { imagePaths } from "@/data/site";
import { localBusinesses } from "@/data/localBusinesses";

export const metadata: Metadata = {
  title:
    "Murfreesboro Arkansas Cabins, RV Parks & Places To Stay Near Crater of Diamonds",
  description:
    "Find cabins, RV parks, campgrounds, lake stays, and practical lodging tips for Murfreesboro, Arkansas near Crater of Diamonds and Lake Greeson.",
  keywords: [
    "Murfreesboro Arkansas cabins",
    "cabins near Crater of Diamonds",
    "Lake Greeson cabins",
    "Murfreesboro RV parks",
    "places to stay near Crater of Diamonds",
    "Swaha Lodge N Marina cabins",
    "Murfreesboro Arkansas places to stay",
  ],
  alternates: { canonical: "/murfreesboro-cabins" },
};

const stayBusinesses = localBusinesses.filter((business) =>
  business.guideSlugs.includes("murfreesboro-cabins")
);

const featuredStayPlacement = {
  name: "Reserved Cabins & Stays Feature",
  type: "Reserved Local Feature",
  description:
    "This feature space is set aside for a Murfreesboro-area cabin, RV park, campground, lake stay, or visitor-friendly lodging option that fits naturally with Crater of Diamonds, Lake Greeson, and southwest Arkansas trip planning.",
  image: imagePaths.cabins,
  href: "/contact",
};

const stayTypes = [
  {
    title: "Close to Crater of Diamonds",
    text: "Best for families who want an easier park day, a shorter drive back after digging, and quick access to food or supplies around town.",
  },
  {
    title: "Near Lake Greeson",
    text: "Better for fishing trips, boat days, swimming, marina plans, and slower mornings around the water instead of a packed schedule.",
  },
  {
    title: "RV parks and campgrounds",
    text: "A good fit for outdoor travelers, but it is worth checking hookups, site size, trailer room, bathrooms, quiet hours, and busy weekend availability.",
  },
];

const bookingChecks = [
  "How far the stay is from Crater of Diamonds, Lake Greeson, and town food",
  "Pet rules, cleaning fees, minimum nights, and cancellation details",
  "Boat, trailer, RV, UTV, and extra vehicle parking",
  "Check-in time, late arrival rules, stairs, and sleeping layout",
  "Kitchen, laundry, outdoor space, and a place to handle dirty shoes or wet towels",
  "Availability around summer weekends, holidays, fishing trips, and local events",
];

export default function CabinsPage() {
  return (
    <main>
      <Hero
        eyebrow="Cabins & Places To Stay"
        title="Pick a stay that fits the dirt, water, gear, and tired people."
        text="The right place to stay can make a Murfreesboro trip a lot easier, especially when your plans include Crater of Diamonds, Lake Greeson, kids, pets, fishing gear, wet clothes, or a trailer."
        image={imagePaths.cabins}
        primary={{
          href: "/crater-of-diamonds-guide",
          label: "Crater Guide",
        }}
        secondary={{
          href: "/lake-greeson",
          label: "Lake Greeson",
        }}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Lodging Guide"
              title="Where you stay changes how easy the whole trip feels."
              text="A Murfreesboro trip is not always clean and simple. The diamond field can mean dirt and heat. Lake Greeson can mean wet towels, coolers, fishing rods, and boat parking. A good stay gives your group room to clean up, slow down, and not spend the whole weekend in the vehicle."
            />

            <div className="prose-guide space-y-5">
              <p className="text-lg leading-8 text-[color:var(--color-text)]">
                If Crater of Diamonds is the main reason for the trip, staying
                closer to Murfreesboro usually keeps the day easier. You can get
                to the park earlier, come back to clean up, and still be close
                enough to food, supplies, or a slower evening.
              </p>

              <p className="leading-8">
                If Lake Greeson is the heart of the trip, the lake side may make
                more sense. That is where cabins, RV spots, campgrounds, marina
                plans, boat parking, and fishing gear start to matter more than
                being right by the town square.
              </p>

              <p className="leading-8">
                The best choice depends on the trip you are actually taking. A
                couple with a boat, a family with kids, a group digging diamonds,
                and RV travelers all need different things from a place to stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/30">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="card overflow-hidden">
              <div className="image-card h-[360px]">
                <Image
                  src={imagePaths.cabins}
                  alt="Cabins and RV stays near Murfreesboro Arkansas and Lake Greeson"
                  width={1100}
                  height={750}
                />
              </div>
            </div>

            <div>
              <p className="hero-eyebrow mb-3">Stay Style</p>

              <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                Cabins, RV sites, campgrounds, and lake stays all solve
                different problems.
              </h2>

              <p className="mt-5 leading-8 text-[color:var(--color-muted)]">
                Around Murfreesboro, lodging is not just about finding a bed.
                It is about whether your group can park, clean up, dry out,
                cook a simple meal, get to the park on time, or spend the next
                morning at the lake without feeling rushed.
              </p>

              <div className="mt-6 grid gap-3">
                {stayTypes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-4"
                  >
                    <h3 className="font-semibold leading-6 text-[color:var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <div className="card p-7 md:p-9">
              <p className="hero-eyebrow mb-3">Featured Local Stay</p>

              <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                A closer look at one Murfreesboro-area place to stay can go
                here.
              </h2>

              <p className="mt-5 leading-8 text-[color:var(--color-muted)]">
                This larger feature area is set aside for one local stay that
                belongs naturally in the Murfreesboro travel guide. It gives
                visitors a closer look at a place that may help shape their
                trip, whether they are coming for diamonds, lake time, fishing,
                camping, or a slower southwest Arkansas weekend.
              </p>

              <p className="mt-4 leading-8 text-[color:var(--color-muted)]">
                It is a good fit for cabins, RV parks, campgrounds, lake stays,
                vacation rentals, resorts, or family-friendly lodging around
                Murfreesboro, Crater of Diamonds, Lake Greeson, Kirby, Daisy,
                or the nearby area.
              </p>

              <Link href="/contact" className="btn-primary mt-7">
                Ask About This Feature
              </Link>
            </div>

            <Link href={featuredStayPlacement.href} className="card card-hover group">
              <div className="image-card h-[300px]">
                <Image
                  src={featuredStayPlacement.image}
                  alt="Reserved cabins and places to stay feature for the Murfreesboro Arkansas Guide"
                  width={1000}
                  height={700}
                />
              </div>

              <div className="p-7">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {featuredStayPlacement.type}
                </p>

                <h3 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {featuredStayPlacement.name}
                </h3>

                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
                  This reserved feature space is for a Murfreesboro-area stay
                  that visitors may want to know about while planning around
                  Crater of Diamonds, Lake Greeson, or a weekend in southwest
                  Arkansas. It can highlight the setting, guest experience,
                  location, amenities, and why the stay fits the trip.
                </p>

                <span className="mt-6 inline-block text-sm font-black text-[color:var(--color-accent)]">
                  Reserved local feature space →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white/30">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Before You Book"
              title="Ask the boring questions before you show up."
              text="Small-town lodging can be exactly what you need, but the details matter. Before you book, make sure the place fits your group, your gear, your arrival time, and the kind of trip you are planning."
            />

            <div className="grid gap-3">
              {bookingChecks.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-4 font-semibold leading-6 text-[color:var(--color-text)]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Places To Stay"
            title="Cabins, RV stays, campgrounds, and lake-area lodging to keep on your radar."
            text="These are local stay listings that may help with a Crater of Diamonds trip, a Lake Greeson weekend, a fishing trip, or a simple overnight stay around Murfreesboro."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {stayBusinesses.map((business) => (
              <article
                key={business.name}
                className="card flex h-full flex-col p-6"
              >
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {business.type}
                </p>

                <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {business.name}
                </h3>

                <p className="mt-1 text-sm font-bold text-[color:var(--color-rust)]">
                  {business.area}
                </p>

                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
                  {business.description}
                </p>

                {business.note && (
                  <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">
                    {business.note}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap gap-3 pt-5">
                  {business.guideHref && (
                    <Link
                      href={business.guideHref}
                      className="text-sm font-black text-[color:var(--color-accent)]"
                    >
                      Related guide →
                    </Link>
                  )}

                  {business.href && (
                    <a
                      href={business.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-black text-[color:var(--color-accent)]"
                    >
                      Official site →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABox
        title="Know a cabin, RV park, or local stay visitors should know about?"
        text="Send the name, location, link, and what kind of trip it fits best. The goal is to keep this lodging guide useful for real visitors planning around Crater of Diamonds, Lake Greeson, and Murfreesboro."
        links={[
          { href: "/contact", label: "Suggest A Stay", light: true },
          {
            href: "/murfreesboro-local-businesses",
            label: "All Local Businesses",
          },
        ]}
      />
    </main>
  );
}
