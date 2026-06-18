import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABox from "@/components/ui/CTABox";
import { imagePaths } from "@/data/site";
import { guidePages } from "@/data/guides";
import { localBusinesses } from "@/data/localBusinesses";

const data = guidePages.restaurants;

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
  alternates: { canonical: "/murfreesboro-restaurants" },
};

const restaurantBusinesses = localBusinesses.filter(
  (business) =>
    business.category === "food" &&
    business.guideSlugs.includes("murfreesboro-restaurants")
);

const featuredRestaurantPlacement = {
  name: "Reserved Restaurant Feature",
  type: "Reserved Local Feature",
  description:
    "This feature space is set aside for a Murfreesboro-area restaurant, cafe, food stop, or lake-area dining option that fits naturally with Crater of Diamonds, Lake Greeson, and local trip planning.",
  image: imagePaths.downtown,
  href: "/contact",
};

const mealPlanningTips = [
  "Pick a first-choice restaurant before your group is tired and hungry.",
  "Check current hours, especially for smaller local spots and seasonal lake food.",
  "Keep a backup in mind if you are visiting on a busy weekend or later in the day.",
  "Think about where you are headed next: cabin, lake, campground, park, or road home.",
];

const foodSituations = [
  {
    title: "After Crater of Diamonds",
    text: "This is usually when families want cold drinks, an easy meal, air conditioning, and a place to sit without making another big decision.",
  },
  {
    title: "Around Lake Greeson",
    text: "Lake food works best when you check the season and hours first. Dam Grill and Swaha make more sense when your day is already built around the lake.",
  },
  {
    title: "Before the evening slows down",
    text: "Small-town restaurant hours can change. It is better to know where you are eating before everybody is back at the cabin and worn out.",
  },
];

export default function RestaurantsPage() {
  return (
    <main>
      <Hero
        eyebrow="Restaurants & Food"
        title="Know where you might eat before everybody is hot, dusty, and done."
        text="Food around Murfreesboro is about timing. Pick a place before the diamond field wears everyone down, and keep a backup in mind for lake days, seasonal hours, and busy weekends."
        image={imagePaths.damGrill}
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
              eyebrow="Food Guide"
              title="A simple meal plan matters more here than a long restaurant list."
              text="After a few hours at Crater of Diamonds, people usually want cold drinks, air conditioning, and food that does not require a big debate. That is not the time to start scrolling and hoping every place is open."
            />

            <div className="prose-guide space-y-5">
              <p className="text-lg leading-8 text-[color:var(--color-text)]">
                Murfreesboro has local food options that fit a Crater of
                Diamonds trip, a Lake Greeson day, a cabin weekend, or a simple
                stop before heading back down the road. The key is knowing what
                makes sense for the part of the day you are in.
              </p>

              <p className="leading-8">
                If everyone is hot and dusty after the diamond field, an easy
                meal in town may be the right call. If you are already spending
                time around Swaha and Lake Greeson, a seasonal lake food stop
                may fit better.
              </p>

              <p className="leading-8">
                Small-town hours can vary, and lake food can be seasonal. Check
                current details before building the whole afternoon around one
                restaurant, especially on slower days, busy weekends, holidays,
                or later meal times.
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
                  src={imagePaths.downtownPage}
                  alt="Food and restaurants around Murfreesboro Arkansas and Lake Greeson"
                  width={1100}
                  height={750}
                />
              </div>
            </div>

            <div>
              <p className="hero-eyebrow mb-3">Meal Planning</p>

              <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                Food is easier when you know the next stop before everybody is
                hungry.
              </h2>

              <p className="mt-5 leading-8 text-[color:var(--color-muted)]">
                A good Murfreesboro food plan is usually simple: know where you
                might eat after the park, know what works if you are headed to
                the lake, and have one backup in case your first choice is
                closed or too busy.
              </p>

              <div className="mt-6 grid gap-3">
                {mealPlanningTips.map((item) => (
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
              <p className="hero-eyebrow mb-3">Featured Local Restaurant</p>

              <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                A closer look at one Murfreesboro-area food stop can go here.
              </h2>

              <p className="mt-5 leading-8 text-[color:var(--color-muted)]">
                This larger feature area is set aside for one local food stop
                that belongs naturally in the Murfreesboro travel guide. It
                gives visitors a closer look at a place that may help shape
                their trip, whether they are coming from Crater of Diamonds,
                spending time at Lake Greeson, staying in a cabin, or passing
                through town.
              </p>

              <p className="mt-4 leading-8 text-[color:var(--color-muted)]">
                It is a good fit for restaurants, cafes, barbecue stops, lake
                food, breakfast spots, coffee shops, bakeries, or other local
                food businesses around Murfreesboro, Lake Greeson, Kirby, Daisy,
                or nearby southwest Arkansas.
              </p>

              <Link href="/contact" className="btn-primary mt-7">
                Ask About This Feature
              </Link>
            </div>

            <Link
              href={featuredRestaurantPlacement.href}
              className="card card-hover group"
            >
              <div className="image-card h-[300px]">
                <Image
                  src={featuredRestaurantPlacement.image}
                  alt="Reserved restaurant feature for the Murfreesboro Arkansas Guide"
                  width={1000}
                  height={700}
                />
              </div>

              <div className="p-7">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {featuredRestaurantPlacement.type}
                </p>

                <h3 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {featuredRestaurantPlacement.name}
                </h3>

                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
                  This reserved feature space is for a Murfreesboro-area food
                  stop visitors may want to know about while planning meals
                  around Crater of Diamonds, Lake Greeson, cabins, campgrounds,
                  or a weekend in southwest Arkansas. It can highlight the food,
                  setting, location, hours, and why the stop fits the trip.
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
              eyebrow="When To Eat"
              title="Different parts of the trip call for different kinds of food stops."
              text="The best restaurant choice depends on where your group is coming from, where you are headed next, and how much energy everybody has left."
            />

            <div className="grid gap-3">
              {foodSituations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-5"
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
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Restaurants & Food Stops"
            title="Places to eat around Murfreesboro, Crater of Diamonds, and Lake Greeson."
            text="These local food stops are worth checking when you are planning a Crater of Diamonds day, Lake Greeson trip, cabin weekend, or simple meal before heading back out."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {restaurantBusinesses.map((business) => (
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
        title="Know another local food stop visitors should know about?"
        text="Send the name, location, link, and what kind of trip it fits best. The goal is to keep this food guide useful for real visitors planning around Crater of Diamonds, Lake Greeson, and Murfreesboro."
        links={[
          { href: "/contact", label: "Suggest A Food Stop", light: true },
          {
            href: "/murfreesboro-local-businesses",
            label: "All Local Businesses",
          },
        ]}
      />
    </main>
  );
}