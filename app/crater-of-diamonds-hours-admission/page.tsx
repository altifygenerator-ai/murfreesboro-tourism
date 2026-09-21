import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";

const pagePath = "/crater-of-diamonds-hours-admission";
const officialParkUrl =
  "https://www.arkansas.com/state-parks/explore/parks/crater-of-diamonds-state-park";

export const metadata: Metadata = {
  title: "Crater of Diamonds Hours & Admission | Murfreesboro, Arkansas",
  description:
    "Check Crater of Diamonds State Park hours, diamond-field admission, tool rental prices, pet rules, water-park season, and practical Murfreesboro planning details before you go.",
  keywords: [
    "Crater of Diamonds hours",
    "Crater of Diamonds admission",
    "Crater of Diamonds ticket price",
    "Crater of Diamonds tool rentals",
    "Crater of Diamonds water park hours",
    "Crater of Diamonds Murfreesboro Arkansas",
    "Crater of Diamonds what to bring",
  ],
  alternates: { canonical: pagePath },
  openGraph: {
    title: "Crater of Diamonds Hours & Admission",
    description:
      "Current planning details for Crater of Diamonds State Park in Murfreesboro, Arkansas.",
    url: `${site.domain}${pagePath}`,
    type: "article",
  },
};

const toolRentals = [
  ["Box screen", "$5", "$20"],
  ["Basic diamond searching kit", "$15", "$45"],
  ["Advanced diamond searching kit", "$20", "$70"],
  ["Screen set", "$8", "$20"],
  ["Long shovel", "$6", "$10"],
  ["3.5-gallon bucket", "$5", "$10"],
  ["Wagon", "$12", "$40"],
];

const faqs = [
  {
    question: "What time does the Crater of Diamonds diamond search area open?",
    answer:
      "The official park page currently lists the diamond search area as open daily from 8 a.m. to 4 p.m., with holiday closures on New Year's Day, Thanksgiving Day, Christmas Eve, and Christmas Day.",
  },
  {
    question: "How much does it cost to dig for diamonds?",
    answer:
      "The official park page currently lists diamond-search admission at $15 for visitors over age 12, $7 for children ages 6 through 12, and free for children under 6.",
  },
  {
    question: "Can I rent tools at Crater of Diamonds?",
    answer:
      "Yes. The park lists individual tools and basic or advanced search kits for daily rental. Refundable deposits are also required, and rental equipment must be returned daily.",
  },
  {
    question: "Are pets allowed at Crater of Diamonds?",
    answer:
      "The official park page says pets are allowed in park facilities except the gift shop and Diamond Springs Water Park, as long as they remain leashed and under the owner's control.",
  },
];

export default function CraterHoursAdmissionPage() {
  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Crater of Diamonds Hours & Admission",
            description: metadata.description,
            url: `${site.domain}${pagePath}`,
            dateModified: "2026-09-20",
            isPartOf: {
              "@type": "WebSite",
              name: site.name,
              url: site.domain,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
              {
                "@type": "ListItem",
                position: 2,
                name: "Crater of Diamonds Guide",
                item: `${site.domain}/crater-of-diamonds-guide`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Hours & Admission",
                item: `${site.domain}${pagePath}`,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />

      <section className="section bg-white/30">
        <div className="container">
          <div className="max-w-4xl">
            <p className="hero-eyebrow">Last checked September 20, 2026</p>
            <h1 className="mt-3 text-5xl font-semibold leading-tight text-[color:var(--color-text)] md:text-6xl">
              Crater of Diamonds hours, admission, and tool rentals.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--color-muted)]">
              This page pulls the changeable park details into one quick place so you can check the numbers before driving to Murfreesboro. Always verify the official park page before a special trip because prices, hours, closures, rentals, and seasonal services can change.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={officialParkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open Official Park Page
              </a>
              <Link href="/crater-of-diamonds-guide" className="btn-secondary">
                Read Full Crater Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["8 a.m.–5 p.m.", "Visitor facilities", "Visitor Center, Gift Shop, and Diamond Discovery Center are listed as open daily during these hours."],
              ["8 a.m.–4 p.m.", "Diamond search area", "The official park page lists the search field as open daily during these hours."],
              ["$15 / $7 / Free", "Search admission", "Over 12: $15. Ages 6–12: $7. Under 6: free."],
              ["209 State Park Rd", "Murfreesboro, AR", "The park address is 209 State Park Road, Murfreesboro, Arkansas 71958."],
            ].map(([big, title, text]) => (
              <div key={title} className="card p-6">
                <strong className="block text-3xl text-[color:var(--color-accent)]">{big}</strong>
                <h2 className="mt-2 text-xl font-semibold text-[color:var(--color-text)]">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-black/10 bg-white/55 p-5 text-sm leading-7 text-[color:var(--color-muted)]">
            The official page lists closures for the visitor facilities and diamond search area on New Year's Day, Thanksgiving Day, Christmas Eve, and Christmas Day. Campground and picnic areas are listed as open year-round.
          </div>
        </div>
      </section>

      <section className="section bg-white/30">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="hero-eyebrow">Tool Rentals</p>
              <h2 className="mt-2 text-4xl font-semibold leading-tight text-[color:var(--color-text)]">
                You can rent digging gear instead of buying everything first.
              </h2>
              <p className="mt-5 leading-8 text-[color:var(--color-muted)]">
                The park lists daily equipment rentals at the Diamond Discovery Center. Refundable deposits are charged per item, and rentals must be returned daily. The official page also says ladders, battery-operated equipment, and motor-driven mining equipment are not allowed.
              </p>
            </div>

            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left">
                  <thead className="bg-white/60">
                    <tr>
                      <th className="border-b border-black/10 px-5 py-4 text-sm font-black uppercase tracking-[0.12em]">Rental</th>
                      <th className="border-b border-black/10 px-5 py-4 text-sm font-black uppercase tracking-[0.12em]">Daily price</th>
                      <th className="border-b border-black/10 px-5 py-4 text-sm font-black uppercase tracking-[0.12em]">Refundable deposit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {toolRentals.map(([name, price, deposit]) => (
                      <tr key={name} className="border-b border-black/10 last:border-b-0">
                        <td className="px-5 py-4 font-semibold text-[color:var(--color-text)]">{name}</td>
                        <td className="px-5 py-4 text-[color:var(--color-muted)]">{price}</td>
                        <td className="px-5 py-4 text-[color:var(--color-muted)]">{deposit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-7">
              <p className="hero-eyebrow">Diamond Springs Water Park</p>
              <h2 className="mt-2 text-3xl font-semibold text-[color:var(--color-text)]">Seasonal, not a year-round promise.</h2>
              <p className="mt-4 leading-8 text-[color:var(--color-muted)]">
                The official park page lists the water park as seasonal from Memorial Day through Labor Day, generally 11 a.m. to 4 p.m. and closed Mondays and Tuesdays. It also warns that late-summer staffing can reduce operation to weekends. Because September 20 is after Labor Day, do not plan a 2026 fall trip around the water park unless the park says otherwise.
              </p>
            </div>

            <div className="card p-7">
              <p className="hero-eyebrow">Pets & Practical Rules</p>
              <h2 className="mt-2 text-3xl font-semibold text-[color:var(--color-text)]">Pets can come, but there are exceptions.</h2>
              <p className="mt-4 leading-8 text-[color:var(--color-muted)]">
                The official park page says pets are allowed in park facilities except the gift shop and Diamond Springs Water Park, as long as they stay leashed and under the owner's control. Bring water, shade, and a realistic heat plan for pets just like you would for kids.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/30">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="hero-eyebrow">Before You Drive</p>
              <h2 className="mt-2 text-4xl font-semibold leading-tight text-[color:var(--color-text)]">Do the quick checks that keep the day from going sideways.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Check the official park page for closures, weather notes, and any changes to hours or admission.",
                "Bring water, sunscreen, hats, snacks, towels or wipes, and clothes that can get muddy or dusty.",
                "Pick a restaurant or backup food stop before everybody is tired from the field.",
                "If Lake Greeson is part of the trip, plan it as its own stop instead of assuming it will fit into whatever time is left.",
              ].map((item) => (
                <div key={item} className="card p-5 text-sm font-semibold leading-7 text-[color:var(--color-text)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/what-to-do-after-crater-of-diamonds" className="btn-primary">
              What To Do After Digging
            </Link>
            <Link href="/murfreesboro-restaurants" className="btn-secondary">
              Restaurants
            </Link>
            <Link href="/murfreesboro-cabins" className="btn-secondary">
              Cabins & Stays
            </Link>
            <Link href="/lake-greeson" className="btn-secondary">
              Lake Greeson
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Quick Answers</p>
            <h2>Crater of Diamonds hours and admission FAQ</h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
