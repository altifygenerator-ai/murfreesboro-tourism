import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CTABox from "@/components/ui/CTABox";
import FAQList from "@/components/ui/FAQList";
import SectionHeading from "@/components/ui/SectionHeading";
import { imagePaths, site } from "@/data/site";

const pagePath = "/what-to-do-after-crater-of-diamonds";
const pageUrl = `${site.domain}${pagePath}`;

const title = "What To Do After Crater of Diamonds";
const description =
  "Food, shade, Lake Greeson, kid-friendly stops, shops, cabins, and practical next steps after a Crater of Diamonds day in Murfreesboro.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "what to do after Crater of Diamonds",
    "after Crater of Diamonds",
    "things to do after Crater of Diamonds",
    "restaurants after Crater of Diamonds",
    "Lake Greeson after Crater of Diamonds",
    "Murfreesboro Arkansas family trip",
    "things to do near Crater of Diamonds",
  ],
  alternates: { canonical: pagePath },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "article",
    images: [
      {
        url: imagePaths.nearbyCrater,
        width: 1200,
        height: 800,
        alt: "Planning what to do after Crater of Diamonds in Murfreesboro Arkansas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imagePaths.nearbyCrater],
  },
};

const quickPlans = [
  {
    title: "Hot, dusty, and hungry",
    text: "Go straight toward food, drinks, and a place to sit. This is where the Murfreesboro restaurant guide comes in handy before everyone is worn out.",
    href: "/murfreesboro-restaurants",
    label: "Find restaurants",
  },
  {
    title: "Kids still have some energy",
    text: "Keep the next stop short. Dino Dig, Ka-Do-Ha, a town-square browse, or a simple ice cream and souvenir stop can be enough.",
    href: "/murfreesboro-family-trip",
    label: "Family trip ideas",
  },
  {
    title: "You have the whole afternoon",
    text: "Lake Greeson can turn the day into more than a diamond-field stop, especially if the group needs water, shade, fishing, or a slower second half.",
    href: "/lake-greeson",
    label: "Plan Lake Greeson",
  },
];

const stops = [
  {
    eyebrow: "Food First",
    title: "Find food before the group starts getting cranky.",
    text: "A diamond field day can sneak up on you. A few hours of sun, dirt, buckets, screens, and walking will make a simple meal feel important. Murfreesboro has local food stops in town, and Lake Greeson has seasonal food when your day is already pointed that direction. Check current hours before you promise anything to the kids.",
    image: imagePaths.damGrill,
    href: "/murfreesboro-restaurants",
    label: "Open the restaurant guide",
  },
  {
    eyebrow: "Short Backup",
    title: "Use Dino Dig or Ka-Do-Ha when the day needs one more easy stop.",
    text: "Not every family needs another big outdoor plan after Crater of Diamonds. Dino Dig gives kids a climate-controlled digging stop with souvenirs and a lighter pace. Ka-Do-Ha keeps the day tied to local history, rocks, artifacts, and a slower self-guided stop close to town.",
    image: imagePaths.kadoha,
    href: "/things-to-do-near-crater-of-diamonds",
    label: "See nearby stops",
  },
  {
    eyebrow: "Lake Option",
    title: "Lake Greeson is close, but it works better with a little planning.",
    text: "If you are picturing swimming, boating, fishing, a marina stop, or a campground evening, do not treat Lake Greeson like a last-minute add-on. Bring towels, dry clothes, sunscreen, water shoes, and a plan for where you are going. The lake can be a good second-day anchor too.",
    image: imagePaths.lake,
    href: "/lake-greeson",
    label: "Read the Lake Greeson guide",
  },
];

const practicalNotes = [
  "Keep a change of clothes and towels in the vehicle if you are digging with kids.",
  "Do not wait until everyone is starving to pick a restaurant or backup food stop.",
  "Check park hours, seasonal water park details, lake access, and small-business hours before you go.",
  "If you are staying overnight, choose lodging based on the next morning, not just the first night.",
  "Leave room for one simple town stop instead of trying to cram five things into one afternoon.",
];

const faqs = [
  {
    question: "What is the best thing to do after Crater of Diamonds?",
    answer:
      "For most families, the best next step is food, drinks, shade, and a slower plan. If the group still has energy, look at Dino Dig, Ka-Do-Ha, local shopping, or Lake Greeson.",
  },
  {
    question: "Is Lake Greeson close enough to visit after Crater of Diamonds?",
    answer:
      "Yes, Lake Greeson is close enough to include in a Murfreesboro trip, but it is better with a real plan. Check access points, marina hours, swimming areas, and weather before you head that way.",
  },
  {
    question: "Where should families eat after Crater of Diamonds?",
    answer:
      "Start with the Murfreesboro restaurant guide and pick at least one backup. Local hours can change, and small-town restaurants may not fit every late lunch or dinner plan.",
  },
  {
    question: "Should we stay overnight in Murfreesboro?",
    answer:
      "Staying overnight makes sense if you want a slower Crater day, Lake Greeson time, or a second morning for nearby stops. Compare cabins, RV parks, campgrounds, hotels, and lake stays before booking.",
  },
  {
    question: "What should we bring for after the diamond field?",
    answer:
      "Bring water, snacks, towels, wipes, a change of clothes, sun protection, and shoes that can handle dirt or mud. If you are going to the lake, add swim gear and dry clothes.",
  },
];

const sourceLinks = [
  {
    title: "Crater of Diamonds State Park",
    href: "https://www.arkansas.com/state-parks/explore/parks/crater-of-diamonds-state-park",
    text: "Use the official park page for current hours, admission, rental tools, water park season, pet rules, and park notices.",
  },
  {
    title: "Lake Greeson recreation information",
    href: "https://www.mvk.usace.army.mil/Missions/Recreation/Lake-Greeson/",
    text: "Use the Corps page for lake access, campgrounds, boat ramps, swimming areas, marina information, and recreation details.",
  },
  {
    title: "Dino Dig",
    href: "https://www.arkansas.com/experiences/discover/attraction-listings/dino-dig",
    text: "Use the Arkansas Tourism listing to confirm the indoor digging stop, location, and contact details.",
  },
  {
    title: "Ka-Do-Ha Indian Village",
    href: "https://www.arkansas.com/experiences/discover/attraction-listings/ka-do-ha-indian-village",
    text: "Use the Arkansas Tourism listing for location, contact, and attraction details before planning around it.",
  },
];

export default function WhatToDoAfterCraterPage() {
  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            image: `${site.domain}${imagePaths.nearbyCrater}`,
            author: {
              "@type": "Organization",
              name: "Natural State Tourism Project",
            },
            publisher: {
              "@type": "Organization",
              name: "Natural State Tourism Project",
            },
            mainEntityOfPage: pageUrl,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
              {
                "@type": "ListItem",
                position: 2,
                name: "What To Do After Crater of Diamonds",
                item: pageUrl,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]}
      />

      <section className="hero-wrap">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="hero-eyebrow">After The Diamond Field</p>
              <h1 className="hero-title">What to do after Crater of Diamonds</h1>
              <p className="hero-text">
                Once everybody is dusty, hungry, and comparing rocks in the
                parking lot, the next choice matters. Murfreesboro works better
                when you already know where to eat, where to cool off, and
                whether the rest of the day should be town, lake, or cabin.
              </p>

              <div className="hero-actions">
                <Link href="/murfreesboro-restaurants" className="btn-primary">
                  Find Food Nearby
                </Link>
                <Link href="/lake-greeson" className="btn-secondary">
                  Plan Lake Greeson
                </Link>
              </div>
            </div>

            <div className="hero-media">
              <Image
                src={imagePaths.nearbyCrater}
                alt="Family trip planning after Crater of Diamonds in Murfreesboro Arkansas"
                width={1200}
                height={850}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              eyebrow="Start Simple"
              title="Do not make the next stop harder than the first one."
            />

            <div className="prose-guide space-y-5">
              <p className="text-lg leading-8 text-[color:var(--color-text)]">
                Crater of Diamonds is the reason most people come to
                Murfreesboro, but it is rarely the only thing they need. After a
                few hours in the field, people usually want food, shade, a
                bathroom, a cold drink, or a place to sit still for a minute.
              </p>

              <p className="leading-8">
                That is why this guide is built around the real question: what
                to do after Crater of Diamonds when the group is still in
                Murfreesboro and the day needs a good next step.
              </p>

              <p className="leading-8">
                For some families, that means heading into town for lunch and a
                slower browse around the square. For others, it means Lake
                Greeson, a cabin, the campground, or one short kid-friendly stop
                before calling it a day.
              </p>

              <p className="leading-8">
                The trick is not doing all of it. Pick the next thing that fits
                your group, the weather, and how much energy everyone actually
                has left.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/30">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Pick Your Next Move</p>
            <h2>Three easy ways the rest of the day can go.</h2>
            <p>
              The right plan after Crater of Diamonds depends on whether your
              group needs food, a lighter family activity, or time around the
              lake.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {quickPlans.map((plan) => (
              <Link key={plan.title} href={plan.href} className="card card-hover p-6">
                <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {plan.title}
                </h3>
                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
                  {plan.text}
                </p>
                <span className="mt-5 inline-block text-sm font-black text-[color:var(--color-accent)]">
                  {plan.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          {stops.map((stop, index) => (
            <article key={stop.title} className="card grid overflow-hidden lg:grid-cols-2">
              <div className={`relative min-h-[300px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={stop.image}
                  alt={stop.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                  {stop.eyebrow}
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
                  {stop.title}
                </h2>
                <p className="mt-5 leading-8 text-[color:var(--color-muted)]">
                  {stop.text}
                </p>
                <Link href={stop.href} className="mt-6 text-sm font-black text-[color:var(--color-accent)]">
                  {stop.label} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-white/30">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Good To Know"
              title="A few small things make the afternoon easier."
              text="Most Crater trips go better when the boring details are handled before everyone is tired. Keep it simple and you will enjoy more of Murfreesboro instead of spending the afternoon fixing small problems."
            />

            <div className="grid gap-3">
              {practicalNotes.map((note) => (
                <p
                  key={note}
                  className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-4 font-semibold leading-6 text-[color:var(--color-text)]"
                >
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              eyebrow="Keep Planning"
              title="Turn a diamond-field day into a better Murfreesboro trip."
              text="If you are staying overnight or building a family weekend, use the nearby guides before you go. Food, lodging, supplies, and lake plans are easier when you already know your options."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/murfreesboro-cabins" className="card card-hover p-5">
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  Cabins, RV parks, and places to stay
                </h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                  Compare stays near Crater of Diamonds, Lake Greeson, and the
                  Murfreesboro area before the weekend gets busy.
                </p>
              </Link>

              <Link href="/murfreesboro-shopping-supplies" className="card card-hover p-5">
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  Shopping and supplies
                </h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                  Find local stops for digging supplies, souvenirs, snacks,
                  small-town shopping, and practical trip needs.
                </p>
              </Link>

              <Link href="/things-to-do-near-crater-of-diamonds" className="card card-hover p-5">
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  More things near Crater of Diamonds
                </h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                  Keep the day close to town with short stops that make sense
                  after the diamond field.
                </p>
              </Link>

              <Link href="/day-trips-from-murfreesboro" className="card card-hover p-5">
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  Day trips from Murfreesboro
                </h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                  Stretch the trip toward Glenwood, Mount Ida, Hot Springs, Lake
                  Greeson, or the Little Missouri River if you have extra time.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQList faqs={faqs} />

      <section className="section pt-0">
        <div className="container">
          <div className="card p-7 md:p-9">
            <p className="hero-eyebrow mb-3">Official Planning Links</p>
            <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
              Check the places that change before you go.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-[color:var(--color-muted)]">
              Hours, rentals, admission, seasonal water features, lake access,
              and small-business details can change. Use these official or
              direct pages before building the whole day around one stop.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {sourceLinks.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-black/10 bg-white/60 p-5 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                    {source.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[color:var(--color-muted)]">
                    {source.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABox
        title="Keep planning your Murfreesboro trip."
        text="Start with Crater of Diamonds, then use the local guides to find food, cabins, supplies, Lake Greeson stops, and simple backup ideas that fit the rest of the day."
        links={[
          { href: "/crater-of-diamonds-guide", label: "Crater Guide", light: true },
          { href: "/murfreesboro-restaurants", label: "Restaurants" },
          { href: "/murfreesboro-cabins", label: "Cabins & Stays" },
        ]}
      />
    </main>
  );
}
