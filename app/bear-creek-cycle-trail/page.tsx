import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABox from "@/components/ui/CTABox";
import { imagePaths } from "@/data/site";
import { getBusinessesForGuide } from "@/data/localBusinesses";

export const metadata: Metadata = {
  title: "Bear Creek Cycle Trail near Lake Greeson | ATV and UTV Riding near Murfreesboro Arkansas",
  description:
    "A practical Bear Creek Cycle Trail guide for Murfreesboro and Lake Greeson visitors planning ATV, UTV, motorcycle, camping, and outdoor recreation around Kirby, Daisy, and Bear Creek.",
  keywords: [
    "Bear Creek Cycle Trail",
    "Bear Creek ATV Trail Arkansas",
    "Lake Greeson ATV trail",
    "UTV riding near Murfreesboro Arkansas",
    "Kirby Arkansas ATV trail",
  ],
  alternates: { canonical: "/bear-creek-cycle-trail" },
};

const relatedBusinesses = getBusinessesForGuide("bear-creek-cycle-trail", 6);

export default function BearCreekCycleTrailPage() {
  return (
    <main>
      <Hero
        eyebrow="Lake Greeson Outdoor Guide"
        title="Bear Creek Cycle Trail is the riding side of a Lake Greeson trip."
        text="For ATV, UTV, and motorcycle riders, Bear Creek Cycle Trail is one of the reasons to look beyond Crater of Diamonds and plan the Murfreesboro area as a bigger outdoor weekend."
        image={imagePaths.bearcreek}
        primary={{ href: "/lake-greeson", label: "Lake Greeson Guide" }}
        secondary={{ href: "/murfreesboro-local-businesses", label: "Local Businesses" }}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Riding Guide"
              title="This is not a casual every-road-around-the-lake situation."
              text="Bear Creek Cycle Trail is a designated riding trail around the Lake Greeson area. It fits riders who are coming prepared with machines, trailers, safety gear, fuel, and a real plan for where they can and cannot ride."
            />
            <div className="prose-guide space-y-5">
              <p className="text-lg leading-8 text-[color:var(--color-text)]">
                The trail is tied to the Lake Greeson side of the Murfreesboro region, especially the Kirby, Daisy, Bear Creek, and Kirby Landing areas. It can turn a diamond-digging trip into a bigger outdoor weekend for families or groups who bring machines.
              </p>
              <p className="leading-8">
                The important part is to plan it like a trail day, not like a quick tourist stop. Check current rules, trail status, maps, loading and unloading areas, weather, and whether your lodging or campground can handle trailers.
              </p>
              <p className="leading-8">
                If you are not bringing a machine, this page still matters because it helps explain why some visitors choose lodging around Kirby, Bear Creek, Daisy, or Lake Greeson instead of staying right in Murfreesboro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/30">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Check the official trail details first.",
                text: "Trail rules, conditions, allowed uses, and access points matter. Use official state and recreation sources before hauling machines into the area.",
              },
              {
                title: "Stay where trailers and gear make sense.",
                text: "A pretty cabin is not always the right cabin if there is nowhere to park a trailer. Ask about trailer space, road access, and check-in details before booking.",
              },
              {
                title: "Pair it naturally with Lake Greeson.",
                text: "Bear Creek works best as part of a lake and outdoor weekend, with fishing, camping, cabins, or marina time filling out the rest of the trip.",
              },
            ].map((item) => (
              <article key={item.title} className="card p-7">
                <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {item.title}
                </h2>
                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="card overflow-hidden">
              <div className="image-card h-[360px]">
                <Image src={imagePaths.bearcreekTrail} alt="Lake Greeson and Bear Creek Cycle Trail area" width={1100} height={750} />
              </div>
            </div>
            <div>
              <p className="hero-eyebrow mb-3">Before You Ride</p>
              <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                Do the check-ahead work before you unload.
              </h2>
              <div className="mt-6 grid gap-3">
                {[
                  "Confirm the trail is open and that your machine is allowed.",
                  "Know where designated loading and unloading areas are.",
                  "Stay on marked trails and respect Corps, state, and local rules.",
                  "Check weather, trail conditions, fuel, water, phone service, and emergency plans.",
                  "Ask lodging and campgrounds about trailer parking before booking.",
                ].map((item) => (
                  <p key={item} className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-4 font-semibold leading-6 text-[color:var(--color-text)]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/30">
        <div className="container">
  <SectionHeading
    eyebrow="Nearby Trip Helpers"
    title="A few useful stops if you are riding, camping, or staying near Lake Greeson."
    text="Bear Creek is not just a quick stop on a map. Most people coming this way are planning around trails, lake access, cabins, campgrounds, food, fuel, and enough room for trailers or outdoor gear. These listings are here because they can help with that kind of trip."
  />

  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedBusinesses.map((business) => (
              <article key={business.name} className="card p-6">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">{business.type}</p>
                <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">{business.name}</h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">{business.description}</p>
                {business.guideHref && <Link href={business.guideHref} className="mt-5 inline-block text-sm font-black text-[color:var(--color-accent)]">Related guide →</Link>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABox
        title="Planning a riding, lake, or cabin weekend around Bear Creek?"
        text="Use the Lake Greeson, cabins, local businesses, and day trip pages together so the ride, lodging, food, and outdoor stops all fit the same trip."
        links={[
          { href: "/lake-greeson", label: "Lake Greeson", light: true },
          { href: "/murfreesboro-cabins", label: "Cabins & RV Stays" },
        ]}
      />
    </main>
  );
}
