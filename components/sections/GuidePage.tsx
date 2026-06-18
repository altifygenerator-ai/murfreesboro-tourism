import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABox from "@/components/ui/CTABox";
import FAQList from "@/components/ui/FAQList";
import type { GuidePageData } from "@/data/guides";
import { imagePaths } from "@/data/site";
import { getBusinessesForGuide } from "@/data/localBusinesses";

type DepthCard = {
  kicker: string;
  title: string;
  text: string;
  image: string;
  href?: string;
  linkLabel?: string;
  notes: string[];
};

type DepthData = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: DepthCard[];
};

const guideDepth: Record<string, DepthData> = {
  "things-to-do-in-murfreesboro-arkansas": {
    eyebrow: "Plan The Day",
    title: "Murfreesboro is better when the day has a little room in it.",
    intro:
      "This is a small Arkansas town with one very unusual state park, a real lake close by, and enough local stops to make a weekend work if you do not overpack the schedule.",
    cards: [
      {
        kicker: "Main Anchor",
        title: "Start with Crater of Diamonds and let the rest of the day be honest.",
        text:
          "The diamond field is usually why people choose Murfreesboro. It is also the stop most likely to wear everyone down. Treat it like an outdoor activity where people get dirty, hot, curious, and tired, and the whole day will go smoother.",
        image: imagePaths.crater,
        href: "/crater-of-diamonds-guide",
        linkLabel: "Read the Crater guide",
        notes: [
          "Bring water, hats, sunscreen, and clothes that can handle dirt.",
          "Have food or lodging figured out before everyone is done digging.",
          "Do not build the whole trip around finding a diamond. Let the search be the story.",
        ],
      },
      {
        kicker: "Lake Side",
        title: "Use Lake Greeson when the trip needs water, shade, or a slower second day.",
        text:
          "Lake Greeson is what makes Murfreesboro feel like more than a one-stop diamond trip. It fits fishing weekends, boat days, cabins, campgrounds, and families who want something quieter after the field.",
        image: imagePaths.lake,
        href: "/lake-greeson",
        linkLabel: "Open the Lake Greeson guide",
        notes: [
          "Check lake access, marina hours, campground details, and weather before you go.",
          "Think about parking if you are bringing a boat, camper, trailer, or UTV.",
          "Seasonal lake food and rentals should be checked before you count on them.",
        ],
      },
      {
        kicker: "Around Town",
        title: "Use the smaller stops to make the trip easier, not busier.",
        text:
          "Local restaurants, Ka-Do-Ha, supplies, souvenirs, cabins, and short drives can all help round out the trip. They work best when they solve a real need, like lunch, shade, a backup plan, or something simple after the main stop.",
        image: imagePaths.downtown,
        href: "/murfreesboro-local-businesses",
        linkLabel: "Browse local businesses",
        notes: [
          "Know a couple food options before you head into the field.",
          "Use local shops for forgotten basics, snacks, or souvenirs.",
          "Save longer drives for another day instead of forcing them into a tired afternoon.",
        ],
      },
    ],
  },

  "crater-of-diamonds-guide": {
    eyebrow: "Diamond Field Reality",
    title: "A better Crater trip starts before you ever walk into the field.",
    intro:
      "Crater of Diamonds is special because visitors can search the field and keep what they find. It is also an outdoor digging day, which means heat, dirt, patience, and a little planning matter.",
    cards: [
      {
        kicker: "Expectations",
        title: "Go for the experience, not a guaranteed diamond.",
        text:
          "Some people leave with a diamond. Plenty leave with rocks, dirt, and a story. The families who enjoy it most usually treat the search itself as the point, not just what ends up in the bucket.",
        image: imagePaths.crater,
        href: "/things-to-do-near-crater-of-diamonds",
        linkLabel: "See what else is nearby",
        notes: [
          "Tell kids they are treasure hunting, not shopping for jewelry.",
          "Take breaks before everyone is completely worn down.",
          "Use the park's current rules and staff guidance when available.",
        ],
      },
      {
        kicker: "Pack Smart",
        title: "The plain stuff matters more than the exciting gear.",
        text:
          "Water, hats, sunscreen, snacks, towels, wipes, and a change of clothes can make or break the day. Tools matter, but comfort and patience usually matter more, especially with kids.",
        image: imagePaths.family,
        href: "/murfreesboro-shopping-supplies",
        linkLabel: "Find local supplies",
        notes: [
          "Bring more water than you think you will need.",
          "Plan for mud after rain and dust during dry weather.",
          "Know where you will eat, clean up, or cool off afterward.",
        ],
      },
      {
        kicker: "After Digging",
        title: "Have the next stop picked before the group is hot and hungry.",
        text:
          "After the field, most groups need something simple: food, shade, showers, a cabin, the campground, or a slower plan for Lake Greeson. Decide that before everybody is done for the day.",
        image: imagePaths.damGrill,
        href: "/murfreesboro-restaurants",
        linkLabel: "Open restaurant guide",
        notes: [
          "Pick two food options in case one is closed or crowded.",
          "Do not schedule a tight activity right after the field with kids.",
          "Let Lake Greeson be a second-day plan if the first day is already full.",
        ],
      },
    ],
  },

  "things-to-do-near-crater-of-diamonds": {
    eyebrow: "Nearby Stops",
    title: "The best nearby stop depends on what your group needs after digging.",
    intro:
      "Some groups need lunch. Some need water. Some need a shorter local stop before heading back to the cabin. Around Crater of Diamonds, the right add-on is the one that keeps the day from getting harder.",
    cards: [
      {
        kicker: "Short Add-On",
        title: "Ka-Do-Ha fits when you want one more local stop without a long drive.",
        text:
          "Ka-Do-Ha gives visitors a Murfreesboro-area stop tied to local history, archeology, a museum, and hands-on exploring. It is a better fit when you still want to do something nearby but do not want to spend the afternoon on the road.",
        image: imagePaths.kadoha,
        href: "/murfreesboro-local-businesses",
        linkLabel: "See local listings",
        notes: [
          "Good for families who want something different from digging diamonds.",
          "Check current hours and admission before going.",
          "Pair it with lunch or a town stop instead of packing the day too tight.",
        ],
      },
      {
        kicker: "Water Option",
        title: "Lake Greeson is close enough to matter, but it deserves a real plan.",
        text:
          "A quick look at the lake is one thing. A real lake day is another. If your group wants swimming, fishing, boating, or marina time, build the plan around Lake Greeson instead of treating it like an extra hour after the Crater.",
        image: imagePaths.lake,
        href: "/lake-greeson",
        linkLabel: "Plan Lake Greeson",
        notes: [
          "Check access points, campground details, and marina hours.",
          "Bring towels, dry clothes, and shoes that can handle water and gravel.",
          "Do not assume seasonal food or rentals are available every day.",
        ],
      },
      {
        kicker: "Useful Stops",
        title: "Food, supplies, and souvenirs can be what saves the afternoon.",
        text:
          "Small-town travel often comes down to simple pieces. A good meal, a cold drink, a hat, digging-day basics, a souvenir, or a place to cool off can matter more than adding another big attraction.",
        image: imagePaths.downtown,
        href: "/murfreesboro-shopping-supplies",
        linkLabel: "Shopping and supplies",
        notes: [
          "Check what you need before driving to the park.",
          "Support local stops when they fit the trip.",
          "Keep cash, cards, snacks, and backup food options in mind on busy weekends.",
        ],
      },
    ],
  },

  "lake-greeson": {
    eyebrow: "Lake Greeson Planning",
    title: "Lake Greeson is close enough to Murfreesboro to shape the whole trip.",
    intro:
      "The lake side of Murfreesboro is not just a photo stop. It can mean cabins, marinas, campgrounds, boat ramps, fishing, swimming, tailwater water, and trail access around the broader Lake Greeson area.",
    cards: [
      {
        kicker: "Marina Base",
        title: "Swaha is one of the first names to check for the lake side of the trip.",
        text:
          "Swaha Lodge N Marina ties together lodging, marina access, boat rentals, Lake Greeson time, and Dam Grill when it is in season. If you want the weekend to feel like a lake trip, it is a practical place to start checking details.",
        image: imagePaths.swaha,
        href: "/murfreesboro-cabins",
        linkLabel: "Compare places to stay",
        notes: [
          "Check cabins, boat rentals, marina services, and seasonal food directly.",
          "Ask about parking if you are bringing a boat, camper, or trailer.",
          "Build extra time into the day because lake trips rarely run on a perfect schedule.",
        ],
      },
      {
        kicker: "Access Points",
        title: "Dam Area, Bear Creek, Kirby Landing, and other spots all serve different trips.",
        text:
          "Lake Greeson has more than one way to use it. Some areas make more sense for camping, some for boat ramps, some for trail access, and some for a simple lake stop with the family.",
        image: imagePaths.lake,
        href: "/bear-creek-cycle-trail",
        linkLabel: "Read about Bear Creek Cycle Trail",
        notes: [
          "Check whether the area is reservable, first-come, seasonal, electric, or primitive.",
          "Use official recreation pages for current rules, fees, and access details.",
          "Do not assume ATV or UTV riding is allowed everywhere around the lake.",
        ],
      },
      {
        kicker: "Tailwater",
        title: "The Little Missouri below Narrows Dam is its own kind of outdoor stop.",
        text:
          "For anglers, the Narrows Tailwater and Little Missouri River add real depth to the Murfreesboro area. This is not a show-up-and-guess spot. Water releases, fishing rules, and conditions matter.",
        image: imagePaths.littleMissouri,
        href: "/little-missouri-river-murfreesboro",
        linkLabel: "Little Missouri River guide",
        notes: [
          "Check generation schedules before wading or fishing below the dam.",
          "Know license and trout permit requirements.",
          "Treat changing water as a safety issue, not just a fishing detail.",
        ],
      },
    ],
  },

  "murfreesboro-cabins": {
    eyebrow: "Lodging Guide",
    title: "The right stay depends on whether your trip is about dirt, water, or both.",
    intro:
      "Murfreesboro lodging can mean a cabin near Lake Greeson, a place close to Crater of Diamonds, an RV site, a campground, or a rental house where everybody can clean up after a long outdoor day.",
    cards: [
      {
        kicker: "Crater Base",
        title: "Stay closer to town if the diamond field is the main event.",
        text:
          "If Crater of Diamonds is the centerpiece, being close to Murfreesboro keeps the day easier. That matters with kids, dirty clothes, quick meals, and tired adults who do not want a long drive after digging.",
        image: imagePaths.crater,
        href: "/crater-of-diamonds-guide",
        linkLabel: "Plan the Crater day",
        notes: [
          "Good for first-time visitors and families with younger kids.",
          "Check distance to the park, not just the town name.",
          "Look for easy cleanup, laundry, or outdoor space if you are digging hard.",
        ],
      },
      {
        kicker: "Lake Stay",
        title: "Choose Lake Greeson lodging when fishing, boating, and slower mornings matter more.",
        text:
          "Lake stays make sense when the trip is really about water, woods, boat ramps, fishing time, and quiet evenings. They may not be the closest option for the Crater, but they can make the weekend feel more like a getaway.",
        image: imagePaths.cabins,
        href: "/lake-greeson",
        linkLabel: "Open Lake Greeson guide",
        notes: [
          "Ask about boat parking, trailer room, and lake access.",
          "Check seasonal food and marina services before counting on them.",
          "Know the drive to Crater of Diamonds before booking a lake stay.",
        ],
      },
      {
        kicker: "RV & Campground",
        title: "Ask the practical questions before you pull in with gear or pets.",
        text:
          "Small-town lodging can be great, but details matter. Pet rules, cleaning fees, hookups, trailer space, cancellation rules, and late arrival policies can change the whole trip if you do not check first.",
        image: imagePaths.family,
        href: "/murfreesboro-local-businesses",
        linkLabel: "See stay listings",
        notes: [
          "Ask about pets, extra vehicles, and boat or UTV trailers.",
          "Confirm hookups, bathrooms, dump stations, and campground rules.",
          "Book early for busy summer weekends, holidays, and lake traffic.",
        ],
      },
    ],
  },

  "murfreesboro-restaurants": {
    eyebrow: "Food Planning",
    title: "Pick food before the group is hot, dusty, and ready to be done.",
    intro:
      "Murfreesboro has local food options, but it is still a small town. Hours, seasons, and busy weekends can matter, especially around Crater of Diamonds and Lake Greeson travel.",
    cards: [
      {
        kicker: "After Crater",
        title: "A real meal after the diamond field can save the rest of the day.",
        text:
          "After digging, most people want cold drinks, air conditioning, and food that does not require a long debate. Telinga's and Feed Bin are local names worth knowing before everyone is standing around hungry.",
        image: imagePaths.downtown,
        href: "/murfreesboro-local-businesses",
        linkLabel: "View local food listings",
        notes: [
          "Check hours before your park day starts.",
          "Have a backup if your first choice is closed or full.",
          "Keep it simple when kids are tired after a hot day outside.",
        ],
      },
      {
        kicker: "Lake Food",
        title: "Dam Grill fits the Swaha and Lake Greeson side of the trip.",
        text:
          "Dam Grill is tied to the lake, not a regular downtown food stop. It fits best when you are already staying, boating, fishing, or spending time around Swaha, and it should be checked before you drive out hungry.",
        image: imagePaths.damGrill,
        href: "/lake-greeson",
        linkLabel: "Plan lake stops",
        notes: [
          "Confirm seasonal hours and ordering details.",
          "Use it for lake-day timing, not as a guaranteed everyday stop.",
          "Pair it with cabins, marina plans, or boat days around Swaha.",
        ],
      },
      {
        kicker: "Longer Stays",
        title: "If you are staying more than one night, plan more than one meal.",
        text:
          "Camping, fishing, lake days, and family travel all go smoother when food is not an afterthought. Think about breakfast, snacks, dinner, and the drive route instead of only picking one restaurant after everyone is already hungry.",
        image: imagePaths.dayTrips,
        href: "/day-trips-from-murfreesboro",
        linkLabel: "See day trip ideas",
        notes: [
          "Check distance before promising a meal to the group.",
          "Use nearby food stops when they already fit the route.",
          "Keep snacks and drinks in the vehicle for outdoor days.",
        ],
      },
    ],
  },

  "murfreesboro-family-trip": {
    eyebrow: "Family Trip Reality",
    title: "A good family trip here is simple, flexible, and not packed too tight.",
    intro:
      "Murfreesboro works for families because the stops are memorable and hands-on. It gets rough when the plan ignores heat, dirt, meals, wet clothes, and the fact that kids may be done before adults are.",
    cards: [
      {
        kicker: "Day One",
        title: "Let Crater of Diamonds be enough if the day is hot.",
        text:
          "The diamond field can take more energy than expected. If the kids are tired after digging, do not force a full second activity just because it sounded good when you planned the trip at home.",
        image: imagePaths.family,
        href: "/crater-of-diamonds-guide",
        linkLabel: "Read the Crater guide",
        notes: [
          "Bring extra clothes, wipes, snacks, and water.",
          "Plan a food stop before everyone gets cranky.",
          "Use the water park or lake only if it fits the day and is open.",
        ],
      },
      {
        kicker: "Where To Stay",
        title: "The right stay can make the whole family trip easier.",
        text:
          "Families often need more than a bed. A kitchen, extra space, easy parking, pet rules, outdoor seating, or a place to rinse off gear can matter more than saving a few dollars on the room.",
        image: imagePaths.cabins,
        href: "/murfreesboro-cabins",
        linkLabel: "Compare stays",
        notes: [
          "Ask about sleeping layout, stairs, pets, and late check-in.",
          "Check how close the stay is to Crater, Lake Greeson, or town food.",
          "Think about where wet towels, muddy shoes, and tired kids will go.",
        ],
      },
      {
        kicker: "Backup Plan",
        title: "Keep one easy backup idea in your pocket.",
        text:
          "Weather, heat, and moods can change fast. A good backup might be lunch, a short local stop, souvenirs, a cabin break, or saving Lake Greeson for the next morning instead of forcing it late in the day.",
        image: imagePaths.downtown,
        href: "/things-to-do-near-crater-of-diamonds",
        linkLabel: "Nearby things to do",
        notes: [
          "Use short stops instead of long drives when the group is tired.",
          "Do not wait until late afternoon to figure out dinner.",
          "Keep the plan loose enough for the trip to breathe.",
        ],
      },
    ],
  },

  "day-trips-from-murfreesboro": {
    eyebrow: "Regional Loops",
    title: "Murfreesboro can anchor a wider southwest Arkansas trip if you pick the right direction.",
    intro:
      "The best day trip is not just the closest one. It is the one that fits your group after Crater of Diamonds, around Lake Greeson, or during a two-night cabin and outdoor weekend.",
    cards: [
      {
        kicker: "River Direction",
        title: "Glenwood and the Caddo River fit when you want another water-town day.",
        text:
          "Glenwood pairs naturally with Murfreesboro because both towns fit outdoor weekends, cabins, local food, and slower Arkansas travel. It is a good direction when your trip is already about water and small-town stops.",
        image: imagePaths.dayTrips,
        href: "https://www.glenwoodarkansas.org",
        linkLabel: "Visit Glenwood guide",
        notes: [
          "Good for Caddo River planning, cabins, and local food stops.",
          "Better as its own day than a tired afternoon detour.",
          "Works well with a Lake Greeson and Crater weekend loop.",
        ],
      },
      {
        kicker: "Ouachita Direction",
        title: "Mount Ida and Lake Ouachita fit the crystal-and-lake side of the region.",
        text:
          "If Murfreesboro gives you diamonds and Lake Greeson, Mount Ida adds quartz, Lake Ouachita, scenic drives, and another small-town tourism layer nearby.",
        image: imagePaths.lake,
        href: "https://www.mountidaarkansas.org",
        linkLabel: "Visit Mount Ida guide",
        notes: [
          "Good for visitors who want more than one Arkansas rockhounding stop.",
          "Better with a full day or overnight plan.",
          "Pairs naturally with cabins, lake days, crystal shops, and scenic drives.",
        ],
      },
      {
        kicker: "Outdoor Add-On",
        title: "Bear Creek and the Little Missouri are for more specific outdoor trips.",
        text:
          "Riders, anglers, campers, and lake visitors may care more about Bear Creek Cycle Trail, Narrows Tailwater, and Lake Greeson access than another town stop. These places need more checking, but they add real depth to the area.",
        image: imagePaths.littleMissouri,
        href: "/little-missouri-river-murfreesboro",
        linkLabel: "Read river guide",
        notes: [
          "Check rules, water levels, generation schedules, and trail access.",
          "Riders should verify designated trail access before unloading.",
          "Outdoor side trips need more prep than food, shopping, or town stops.",
        ],
      },
    ],
  },
};



export default function GuidePage({ data }: { data: GuidePageData }) {
  const relatedBusinesses = getBusinessesForGuide(data.slug, 5);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: data.metadata.title,
              description: data.metadata.description,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: data.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />

      <Hero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        text={data.hero.text}
        image={data.hero.image}
        primary={{ href: data.related[0]?.href ?? "/", label: data.related[0]?.label ?? "Start Planning" }}
        secondary={{ href: "/murfreesboro-local-businesses", label: "Local Businesses" }}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading eyebrow={data.intro.eyebrow} title={data.intro.title} />
            <div className="prose-guide space-y-5">
              {data.intro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 first:text-[color:var(--color-text)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {data.related.map((link) => (
              <Link key={link.href} href={link.href} className="btn-secondary">
                {link.label}
              </Link>
            ))}
            <Link href="/murfreesboro-local-businesses" className="btn-secondary">
              Local Businesses
            </Link>
          </div>
        </div>
      </section>

      <GuideDepth data={guideDepth[data.slug]} />

      {data.sections.map((section, index) => (
        <section key={section.title} className={index % 2 === 0 ? "section pt-0" : "section bg-white/30"}>
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <SectionHeading eyebrow={section.eyebrow} title={section.title} />
              <div className="prose-guide space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Places & Stops</p>
            <h2>Useful stops to know about while planning.</h2>
            <p>
              These are practical anchors for the trip. Check current hours,
              rules, access, weather, and availability before building the whole
              day around any one place.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.stops.map((stop) => (
              <article key={stop.title} className="card flex h-full flex-col p-6">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {stop.label}
                </p>
                <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {stop.title}
                </h3>
                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">{stop.text}</p>
                {stop.href && (
                  <LinkOrAnchor href={stop.href} className="mt-auto inline-flex pt-5 text-sm font-black text-[color:var(--color-accent)]">
                    Check details →
                  </LinkOrAnchor>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedBusinesses.length > 0 && (
        <section className="section bg-white/30">
          <div className="container">
           <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
  <SectionHeading
  eyebrow="Nearby Stops"
  title="A few local places that may come in handy."
  text="Whether you need a meal, a cabin, supplies, lake access, or somewhere simple to stop before heading back out, these Murfreesboro-area businesses are useful to know about while you are planning."
/>

              <div className="grid gap-4">
                {relatedBusinesses.map((business) => (
                  <article key={business.name} className="card p-5">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                      {business.type}
                    </p>
                    <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                      {business.name}
                    </h3>
                    <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                      {business.description}
                    </p>
                    {business.note && (
                      <p className="mt-3 rounded-2xl bg-white/60 p-4 text-sm leading-6 text-[color:var(--color-muted)]">
                        {business.note}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-3">
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

                <Link href="/murfreesboro-local-businesses" className="btn-primary mt-2">
                  Browse all local business listings
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <InfoList eyebrow="Good Fit" title="This guide is a good fit for..." items={data.goodFor} />
            <InfoList eyebrow="Check First" title="Do the boring checks before you go." items={data.checkBefore} />
          </div>
        </div>
      </section>

      <FAQList faqs={data.faqs} />

      <CTABox
        title={data.cta.title}
        text={data.cta.text}
        links={[
          { href: "/things-to-do-in-murfreesboro-arkansas", label: "Things To Do", light: true },
          { href: "/murfreesboro-cabins", label: "Cabins & Stays" },
          { href: "/murfreesboro-restaurants", label: "Restaurants" },
        ]}
      />
    </main>
  );
}

function GuideDepth({ data }: { data?: DepthData }) {
  if (!data) return null;

  return (
    <section className="section bg-white/30">
      <div className="container">
        <div className="section-heading">
          <p className="hero-eyebrow">{data.eyebrow}</p>
          <h2>{data.title}</h2>
          <p>{data.intro}</p>
        </div>

        <div className="space-y-8">
          {data.cards.map((card, index) => (
            <article key={card.title} className="card grid overflow-hidden lg:grid-cols-2">
              <div className={`relative min-h-[270px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                  {card.kicker}
                </p>
                <h3 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
                  {card.title}
                </h3>
                <p className="mt-4 leading-8 text-[color:var(--color-muted)]">{card.text}</p>

                <div className="mt-6 grid gap-3">
                  {card.notes.map((note) => (
                    <p key={note} className="rounded-2xl border border-black/10 bg-[color:var(--color-bg)] p-4 text-sm font-semibold leading-6 text-[color:var(--color-text)]">
                      {note}
                    </p>
                  ))}
                </div>

                {card.href && (
                  <LinkOrAnchor href={card.href} className="mt-6 text-sm font-black text-[color:var(--color-accent)]">
                    {card.linkLabel ?? "Read more"} →
                  </LinkOrAnchor>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="card p-7 md:p-9">
      <p className="hero-eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
        {title}
      </h2>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="leading-7 text-[color:var(--color-muted)]">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkOrAnchor({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
