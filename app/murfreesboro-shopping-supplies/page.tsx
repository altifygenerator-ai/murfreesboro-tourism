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
    "Murfreesboro Arkansas Shopping & Supplies | Diamond Digging Gear, Souvenirs and Local Stops",
  description:
    "A practical Murfreesboro shopping and supplies guide for Crater of Diamonds visitors, including diamond digging supplies, hardware, souvenirs, local shops, and check-ahead notes.",
  keywords: [
    "Murfreesboro Arkansas shopping",
    "Crater of Diamonds supplies",
    "diamond digging gear Murfreesboro Arkansas",
    "Murfreesboro Arkansas souvenirs",
    "Murfreesboro Hardware",
    "Lovejoy Diamond Screens",
  ],
  alternates: { canonical: "/murfreesboro-shopping-supplies" },
};

const shoppingBusinesses = localBusinesses.filter(
  (business) => business.category === "shopping"
);

const featuredShoppingPlacement = {
  name: "Reserved Shopping & Supplies Feature",
  type: "Reserved Local Feature",
  description:
    "This feature space is set aside for a Murfreesboro-area shop, supply stop, souvenir spot, hardware store, or visitor-friendly business that fits naturally with Crater of Diamonds, Lake Greeson, and local trip planning.",
  image: imagePaths.downtown,
  href: "/contact",
};

export default function ShoppingSuppliesPage() {
  return (
    <main>
      <Hero
        eyebrow="Shopping & Supplies"
        title="The small local stops that make a Crater of Diamonds trip easier."
        text="Before or after the diamond field, visitors often need digging supplies, forgotten basics, snacks, souvenirs, cold drinks, or a simple town-square stop. This page keeps those useful pieces together."
        image={imagePaths.shopping}
        primary={{ href: "/crater-of-diamonds-guide", label: "Crater Guide" }}
        secondary={{
          href: "/murfreesboro-local-businesses",
          label: "Local Businesses",
        }}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Before The Park"
              title="A little planning makes the Crater day go a lot smoother."
              text="Most visitors come to Murfreesboro for Crater of Diamonds, but the day usually goes better when the simple stuff is handled first. Water, shade, snacks, dirty clothes, and a few backup stops around town can make the trip feel a lot less rushed."
            />

            <div className="prose-guide space-y-5">
              <p className="text-lg leading-8 text-[color:var(--color-text)]">
                Murfreesboro is not a big shopping town, and that is part of its
                charm. But when you are heading to the diamond field, the small
                local stops can matter. A place to grab drinks, pick up a hat,
                find a souvenir, get a few supplies, or let the kids slow down
                for a minute can help round out the day.
              </p>

              <p className="leading-8">
                The main thing is to check the current Crater of Diamonds rules
                before counting on any specific tool, rental, or setup. Park
                rules, weather, field conditions, and seasonal hours can change,
                so it is better to know before you are already standing there
                with tired kids and a hot parking lot.
              </p>

              <p className="leading-8">
                Use this page for the practical side of the trip: simple
                shopping, forgotten basics, local souvenirs, snack stops, and
                small businesses that make sense before or after a Crater of
                Diamonds or Lake Greeson day.
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
                  src={imagePaths.downtown}
                  alt="Murfreesboro Arkansas local shopping and visitor supplies"
                  width={1100}
                  height={750}
                />
              </div>
            </div>

            <div>
              <p className="hero-eyebrow mb-3">Useful Stops</p>

              <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                Think less about shopping big and more about making the day
                easier.
              </h2>

              <p className="mt-5 leading-8 text-[color:var(--color-muted)]">
                Around Murfreesboro, shopping and supplies are usually part of
                the trip instead of the whole reason for the trip. Visitors may
                need cold drinks, sunscreen, digging-day basics, a quick snack,
                a souvenir, or somewhere easy to stop before heading back to the
                cabin, campground, lake, or road home.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Check current Crater of Diamonds rules before counting on specific digging tools.",
                  "Bring water, sunscreen, hats, towels, and clothes that can handle dirt or mud.",
                  "Use local shops for forgotten basics, souvenirs, snacks, and simple family stops.",
                  "Check current hours before building your plan around any one store or stop.",
                ].map((item) => (
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <div className="card p-7 md:p-9">
              <p className="hero-eyebrow mb-3">Featured Local Spot</p>

              <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                A closer look at one useful Murfreesboro-area stop can go here.
              </h2>

              <p className="mt-5 leading-8 text-[color:var(--color-muted)]">
                This feature area is set aside for a local business that fits
                naturally with the shopping, supplies, and visitor-planning side
                of the guide. It gives travelers a closer look at a place that
                may help before or after a Crater of Diamonds, Lake Greeson, or
                southwest Arkansas trip.
              </p>

              <p className="mt-4 leading-8 text-[color:var(--color-muted)]">
                A good fit could be a hardware store, souvenir shop, screen or
                digging supply stop, local market, boutique, outdoor gear stop,
                or any business that helps visitors get what they need while
                they are already in town.
              </p>

              <Link href="/contact" className="btn-primary mt-7">
                Ask About This Feature
              </Link>
            </div>

            <Link
              href={featuredShoppingPlacement.href}
              className="card card-hover group"
            >
              <div className="image-card h-[300px]">
                <Image
                  src={featuredShoppingPlacement.image}
                  alt="Reserved local shopping and supplies feature for the Murfreesboro Arkansas Guide"
                  width={1000}
                  height={700}
                />
              </div>

              <div className="p-7">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {featuredShoppingPlacement.type}
                </p>

                <h3 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {featuredShoppingPlacement.name}
                </h3>

                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
                  This reserved feature space is for a Murfreesboro-area shop
                  or supply stop that visitors may want to know about before or
                  after the park. It could highlight what the business offers,
                  where it fits into the trip, and why it is useful for people
                  planning around Crater of Diamonds, Lake Greeson, or the town.
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
          <SectionHeading
            eyebrow="Around Town"
            title="A few useful stops before or after the park."
            text="Murfreesboro is small, so the simple stops matter. These are the kinds of places visitors may need for a drink, snack, souvenir, supplies, hardware, or a quick local stop before heading to Crater of Diamonds, Lake Greeson, the cabin, or the road home."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {shoppingBusinesses.map((business) => (
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
        title="Know another local shop visitors should know about?"
        text="Send the business name, location, link, and what visitors should know. The goal is to keep this page useful for real trip planning, not turn it into a messy list of every result on the internet."
        links={[
          { href: "/contact", label: "Suggest a Shop", light: true },
          {
            href: "/murfreesboro-local-businesses",
            label: "All Local Businesses",
          },
        ]}
      />
    </main>
  );
}