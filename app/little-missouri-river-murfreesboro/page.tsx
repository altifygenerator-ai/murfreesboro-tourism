import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABox from "@/components/ui/CTABox";
import { imagePaths } from "@/data/site";
import { getBusinessesForGuide } from "@/data/localBusinesses";

export const metadata: Metadata = {
  title: "Little Missouri River near Murfreesboro Arkansas | Narrows Tailwater, Trout Fishing & Lake Greeson",
  description:
    "A practical guide to the Little Missouri River and Narrows Tailwater near Murfreesboro, Arkansas, including trout fishing, Lake Greeson, Narrows Dam, safety checks, and nearby trip planning.",
  keywords: [
    "Little Missouri River Murfreesboro Arkansas",
    "Narrows Tailwater",
    "Lake Greeson trout fishing",
    "Narrows Dam Arkansas",
    "Murfreesboro Arkansas fishing",
  ],
  alternates: { canonical: "/little-missouri-river-murfreesboro" },
};

const relatedBusinesses = getBusinessesForGuide("little-missouri-river-murfreesboro", 6);

export default function LittleMissouriRiverPage() {
  return (
    <main>
      <Hero
  eyebrow="Little Missouri River"
  title="Fishing, tailwater access, and a quieter side of the Lake Greeson trip."
  text="The Little Missouri below Narrows Dam is one of those stops that makes more sense once you realize Murfreesboro is not just Crater of Diamonds. For anglers, campers, and lake visitors, it can add a slower outdoor stop to the trip, especially if you are already planning around Lake Greeson."
  image={imagePaths.littleMissouri}
  primary={{ href: "/lake-greeson", label: "Lake Greeson Guide" }}
  secondary={{ href: "/murfreesboro-cabins", label: "Places To Stay" }}
/>

<Hero
  eyebrow="Little Missouri River"
  title="Fishing, tailwater water, and a quieter side of the Lake Greeson trip."
  text="Down below Narrows Dam, the Little Missouri is a different kind of stop than Crater of Diamonds. It is better for folks who are fishing, camping, staying around Lake Greeson, or wanting a slower outdoor piece of the trip."
  image={imagePaths.littleMissouri}
  primary={{ href: "/lake-greeson", label: "Lake Greeson Guide" }}
  secondary={{ href: "/murfreesboro-cabins", label: "Places To Stay" }}
/>

<section className="section">
  <div className="container">
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <SectionHeading
        eyebrow="Before You Go"
        title="This is one of those places you check on before you head that way."
        text="The Little Missouri below Narrows Dam is tied to water releases, fishing rules, trout stockings, weather, and river conditions. It can be a great part of the trip, but it is not the kind of place where you just show up and guess."
      />

      <div className="prose-guide space-y-5">
        <p className="text-lg leading-8 text-[color:var(--color-text)]">
          A lot of people come to Murfreesboro thinking about diamonds first,
          and that makes sense. But the Little Missouri gives the area another
          side. It is more for anglers, campers, lake folks, and people who like
          a quieter outdoor stop that does not feel like the main tourist crowd.
        </p>

        <p className="leading-8">
          If you are planning to fish or wade below the dam, check the release
          schedule and current regulations before you go. Water below a dam can
          change fast, and that is not something you want to figure out while
          you are already standing in it.
        </p>

        <p className="leading-8">
          For visitors who are not fishing, the river still helps round out the
          Lake Greeson side of the trip. Cabins, campgrounds, Swaha, Narrows Dam,
          Crater of Diamonds, and the river can all fit the same weekend, but it
          works better when you give each stop enough room.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="section bg-white/30">
  <div className="container">
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <p className="hero-eyebrow mb-3">Fishing & Water Safety</p>

        <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
          Check the water, the rules, and whether this stop fits your group.
        </h2>

        <p className="mt-5 leading-8 text-[color:var(--color-muted)]">
          This part of the trip is best for people who understand that outdoor
          details matter. Fishing licenses, trout permits, water releases,
          weather, river level, and current rules should all be checked through
          official sources before you build a day around it.
        </p>

        <p className="mt-4 leading-8 text-[color:var(--color-muted)]">
          If you are just looking for an easy family stop after Crater of
          Diamonds, this may not be the first place to pick. If you are fishing,
          camping, staying near the lake, or planning a real outdoor weekend,
          then it can make a lot more sense.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://www.agfc.com/fishing/where-to-fish/trout-waters/narrows-tailwater-little-missouri-river/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            AGFC Tailwater Details
          </a>

          <a
            href="https://www.swepco.com/community/education/recreation.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Generation Schedule
          </a>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="image-card h-[360px]">
          <Image
            src={imagePaths.littleMissouri}
            alt="Little Missouri River near Murfreesboro Arkansas"
            width={1100}
            height={750}
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <SectionHeading
      eyebrow="Trip Fit"
      title="Who the Little Missouri makes sense for."
      text="This is not the same kind of stop as digging diamonds or grabbing lunch in town. It fits best when the trip is already leaning toward fishing, camping, lake time, or a slower outdoor weekend."
    />

    <div className="grid gap-5 md:grid-cols-3">
      {[
        [
          "Anglers",
          "Folks planning around trout fishing, tailwater rules, water releases, and the right time to be below the dam.",
        ],
        [
          "Cabin and RV Travelers",
          "Visitors staying more than one night who want something outdoorsy beyond the diamond field and town stops.",
        ],
        [
          "Lake Greeson Visitors",
          "Groups already spending time around Narrows Dam, Swaha, campgrounds, or the Lake Greeson recreation areas.",
        ],
      ].map(([title, text]) => (
        <article key={title} className="card p-7">
          <h3 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
            {text}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="section bg-white/30">
  <div className="container">
    <SectionHeading
      eyebrow="Nearby Trip Helpers"
      title="Useful stops for the river and Lake Greeson side of the trip."
      text="If you are fishing, camping, hauling gear, staying near the lake, or planning a full outdoor weekend, a few nearby businesses can make the trip easier. These listings fit that side of the Murfreesboro area."
    />

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {relatedBusinesses.map((business) => (
        <article key={business.name} className="card p-6">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            {business.type}
          </p>

          <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
            {business.name}
          </h3>

          <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
            {business.description}
          </p>

          {business.guideHref && (
            <Link
              href={business.guideHref}
              className="mt-5 inline-block text-sm font-black text-[color:var(--color-accent)]"
            >
              Related guide →
            </Link>
          )}
        </article>
      ))}
    </div>
  </div>
</section>

<CTABox
  title="Use the river as part of the bigger Lake Greeson trip."
  text="The Little Missouri works best when it is planned with the rest of the weekend: Lake Greeson, cabins, campgrounds, food stops, Crater of Diamonds, and enough time to slow down instead of rushing from one stop to the next."
  links={[
    { href: "/lake-greeson", label: "Lake Greeson", light: true },
    { href: "/murfreesboro-local-businesses", label: "Local Businesses" },
  ]}
/>
    </main>
  );
}
