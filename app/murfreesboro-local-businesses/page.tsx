import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABox from "@/components/ui/CTABox";
import { imagePaths } from "@/data/site";
import { businessCategories, featuredBusinessPlaceholder, localBusinesses, type LocalBusinessCategory } from "@/data/localBusinesses";

export const metadata: Metadata = {
  title: "Murfreesboro Arkansas Local Businesses | Food, Cabins, Shops, Outdoor Stops & Services",
  description:
    "Browse basic local business listings for Murfreesboro, Arkansas including restaurants, cabins, RV parks, Lake Greeson stops, diamond digging supplies, shops, outdoor recreation, and visitor services.",
  keywords: [
    "Murfreesboro Arkansas local businesses",
    "Murfreesboro Arkansas restaurants",
    "Murfreesboro Arkansas cabins",
    "Murfreesboro Arkansas shops",
    "Crater of Diamonds businesses",
    "Lake Greeson businesses",
  ],
  alternates: { canonical: "/murfreesboro-local-businesses" },
};

const categoryNotes: Record<LocalBusinessCategory | "all", string> = {
  all: "A working list of local stops that fit visitor planning around Murfreesboro, Crater of Diamonds, Lake Greeson, Kirby, Daisy, and nearby Pike County travel.",
  food: "Restaurants and food stops that make sense before or after Crater of Diamonds, around town, or on a Lake Greeson day.",
  stay: "Cabins, inns, hotels, RV parks, campgrounds, and rentals that can work for diamond trips, lake weekends, fishing trips, and family travel.",
  attraction: "Main visitor stops and shorter add-ons that help round out a Murfreesboro trip.",
  shopping: "Local supplies, souvenirs, diamond digging gear, and practical stops visitors may need before or after the park.",
  outdoor: "Lake, river, trail, campground, and riding-related stops that need a little more planning before you go.",
  service: "Visitor-friendly local services that can help when travel plans, vehicles, rentals, or outdoor weekends need support.",
};

export default function LocalBusinessesPage() {
  return (
    <main>
      <Hero
        eyebrow="Local Businesses"
        title="Food, stays, supplies, outdoor stops, and local businesses around Murfreesboro."
        text="This page keeps the practical local pieces in one place, especially for visitors planning around Crater of Diamonds, Lake Greeson, cabin stays, camping, restaurants, supplies, and nearby outdoor stops."
        image={imagePaths.downtown}
        primary={{ href: "/murfreesboro-restaurants", label: "Restaurants" }}
        secondary={{ href: "/murfreesboro-cabins", label: "Cabins & Stays" }}
      />

     <section className="section">
  <div className="container">
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
      <div className="card p-7 md:p-9">
        <p className="hero-eyebrow mb-3">Featured Placement</p>

        <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
          A stronger spot for one local business that fits the guide.
        </h2>

        <p className="mt-5 leading-8 text-[color:var(--color-muted)]">
          Most businesses in the guide are listed where they naturally help
          visitors plan a trip. This larger feature space is set aside for a
          local business that wants more visibility, more room to tell people
          what they offer, and a better position on a page visitors are already
          using.
        </p>

        <p className="mt-4 leading-8 text-[color:var(--color-muted)]">
          It works well for lodging, restaurants, local shops, attractions,
          outdoor recreation, rentals, guides, lake-area businesses, and
          visitor-friendly services around Murfreesboro, Crater of Diamonds,
          Lake Greeson, Kirby, Daisy, or nearby southwest Arkansas.
        </p>

        <Link href="/contact" className="btn-primary mt-7">
          Ask About Featured Placement
        </Link>
      </div>

      <Link href={featuredBusinessPlaceholder.href} className="card card-hover group">
        <div className="image-card h-[300px]">
          <Image
            src={featuredBusinessPlaceholder.image}
            alt="Reserved featured business placement for the Murfreesboro Arkansas Guide"
            width={1000}
            height={700}
          />
        </div>

        <div className="p-7">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Reserved Featured Placement
          </p>

          <h3 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
            Featured Local Business Space
          </h3>

          <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
            This spot is available for one local business that wants a more
            visible placement in the Murfreesboro Arkansas Guide. The final
            feature can include a stronger photo, a more detailed write-up,
            direct links, and placement that helps visitors notice the business
            while planning their trip.
          </p>

          <span className="mt-6 inline-block text-sm font-black text-[color:var(--color-accent)]">
            Featured placement currently available →
          </span>
        </div>
      </Link>
    </div>
  </div>
</section>

      <section className="section bg-white/30">
        <div className="container">
          <SectionHeading
            eyebrow="Basic Listings"
            title="Local stops grouped by how visitors actually use them."
            text="These are standard guide listings, not full spotlight pages. They are here because they help with food, lodging, supplies, attractions, lake planning, outdoor recreation, or simple travel needs."
          />

          <div className="mt-10 space-y-10">
            {businessCategories.map((category) => {
              const items = category.key === "all"
                ? localBusinesses
                : localBusinesses.filter((business) => business.category === category.key);

              if (category.key === "all") return null;

              return (
                <section key={category.key} className="scroll-mt-28" id={category.key}>
                  <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="hero-eyebrow mb-2">{category.label}</p>
                      <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                        {category.label} around Murfreesboro
                      </h2>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-[color:var(--color-muted)]">
                      {categoryNotes[category.key]}
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((business) => (
                      <article key={business.name} className="card flex h-full flex-col p-6">
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

                        {(business.address || business.phone) && (
                          <div className="mt-4 rounded-2xl bg-white/60 p-4 text-sm leading-6 text-[color:var(--color-muted)]">
                            {business.address && <p>{business.address}</p>}
                            {business.phone && <p>{business.phone}</p>}
                          </div>
                        )}

                        {business.note && (
                          <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">
                            {business.note}
                          </p>
                        )}

                        <div className="mt-auto flex flex-wrap gap-3 pt-5">
                          {business.guideHref && (
                            <Link href={business.guideHref} className="text-sm font-black text-[color:var(--color-accent)]">
                              Related guide →
                            </Link>
                          )}
                          {business.href && (
                            <a href={business.href} target="_blank" rel="noopener noreferrer" className="text-sm font-black text-[color:var(--color-accent)]">
                              Official site →
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <CTABox
        title="Know a Murfreesboro business that should be considered?"
        text="Send the name, location, website or Facebook page, and what visitors should know. Basic listings are placed where they fit the guide. Featured placement and spotlight pages can be added for businesses that want more visibility."
        links={[
          { href: "/contact", label: "Send a Business", light: true },
          { href: "/things-to-do-in-murfreesboro-arkansas", label: "Things To Do" },
        ]}
      />
    </main>
  );
}
