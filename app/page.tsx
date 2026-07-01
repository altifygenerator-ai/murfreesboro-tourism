import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABox from "@/components/ui/CTABox";
import FAQList from "@/components/ui/FAQList";
import JsonLd from "@/components/JsonLd";
import RecentUpdates from "@/components/RecentUpdates";
import {
  attractions,
  homeFaqs,
  imagePaths,
  lodging,
  nearbyDayTrips,
  quickLinks,
  restaurants,
  sisterSites,
  site,
} from "@/data/site";
import { localBusinesses } from "@/data/localBusinesses";

export default function Home() {
  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            name: "Murfreesboro, Arkansas",
            description: site.description,
            url: site.domain,
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.domain,
            potentialAction: {
              "@type": "SearchAction",
              target: `${site.domain}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Murfreesboro Arkansas visitor guide pages",
            itemListElement: quickLinks.map((link, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: link.title,
              url: `${site.domain}${link.href}`,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((faq) => ({
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

      <Hero
        eyebrow="Murfreesboro Arkansas Guide"
        title="Plan around diamonds, Lake Greeson, cabins, and small-town Arkansas days."
        text="A practical visitor guide for Murfreesboro, Crater of Diamonds State Park, Lake Greeson, Swaha, Dam Grill, Ka-Do-Ha, restaurants, cabins, RV stays, and nearby southwest Arkansas day trips."
        image={imagePaths.heroHome}
        primary={{ href: "/crater-of-diamonds-guide", label: "Crater of Diamonds Guide" }}
        secondary={{ href: "/lake-greeson", label: "Lake Greeson" }}
      />
  <RecentUpdates />
      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Start Here"
              title="Murfreesboro works best when the trip has a simple anchor."
              text="Most visitors start with Crater of Diamonds, then decide whether the rest of the trip should be lake time, food, cabins, camping, or a nearby day trip. This guide is built to help you make that choice without turning the weekend into a giant checklist."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="card card-hover p-6">
                  <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                    {link.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                    {link.text}
                  </p>
                  <span className="mt-5 inline-block text-sm font-black text-[color:var(--color-accent)]">
                    Open guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Featured Guides</p>
            <h2>Build the trip around the kind of day you want.</h2>
            <p>
              Diamond digging, lake days, cabins, food, and family planning all
              need a little different approach. Start with the guide that fits
              your group.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {attractions.slice(0, 6).map((item) => (
              <Link key={item.name} href={item.href} className="card card-hover group">
                <div className="image-card">
                  <Image src={item.image} alt={item.name} width={900} height={650} />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {item.type}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                    {item.name}
                  </h3>
                  <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                    {item.description}
                  </p>
                  <span className="mt-5 inline-block text-sm font-black text-[color:var(--color-accent)]">
                    Read guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/30">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Food & Stays"
              title="Have the practical pieces figured out before everyone is tired."
              text="A good Murfreesboro weekend usually comes down to simple things: where to eat after the diamond field, where to clean up, where to sleep, and whether the next day is for Lake Greeson or the road home."
            />

            <div className="grid gap-4">
              {restaurants.slice(0, 3).map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="card card-hover p-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {item.type}
                  </p>
                  <h3 className="text-xl font-semibold text-[color:var(--color-text)]">{item.name}</h3>
                  <p className="mt-2 leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {lodging.map((item) => (
              <LinkOrAnchor key={item.name} href={item.href} className="card card-hover p-6">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {item.type}
                </p>
                <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">{item.name}</h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">{item.description}</p>
              </LinkOrAnchor>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Nearby Guides</p>
            <h2>Part of a wider Natural State Tourism guide network.</h2>
            <p>
              Murfreesboro connects naturally with Glenwood, Mount Ida, Hot
              Springs, Amity, and the bigger Natural State Tourism Project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {nearbyDayTrips.map((siteLink) => (
              <a key={siteLink.href} href={siteLink.href} target="_blank" rel="noopener noreferrer" className="card card-hover p-6">
                <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {siteLink.title}
                </h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">{siteLink.text}</p>
                <span className="mt-5 inline-block text-sm font-black text-[color:var(--color-accent)]">
                  Visit sister guide →
                </span>
              </a>
            ))}
            {sisterSites.slice(4).map((siteLink) => (
              <a key={siteLink.href} href={siteLink.href} target="_blank" rel="noopener noreferrer" className="card card-hover p-6">
                <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {siteLink.label}
                </h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">{siteLink.text}</p>
                <span className="mt-5 inline-block text-sm font-black text-[color:var(--color-accent)]">
                  Visit project →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>


      <section className="section bg-white/30">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Local Businesses"
              title="Food, stays, supplies, and outdoor stops visitors actually need."
              text="The Murfreesboro guide now includes basic local listings for restaurants, cabins, RV parks, diamond digging supplies, Lake Greeson stops, outdoor recreation, and practical visitor needs. Featured placement can be added later without making the regular guide feel like a sales page."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {localBusinesses.slice(0, 6).map((business) => (
                <Link key={business.name} href={business.guideHref ?? "/murfreesboro-local-businesses"} className="card card-hover p-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {business.type}
                  </p>
                  <h3 className="text-xl font-semibold text-[color:var(--color-text)]">{business.name}</h3>
                  <p className="mt-2 leading-7 text-[color:var(--color-muted)]">{business.description}</p>
                  <span className="mt-4 inline-block text-sm font-black text-[color:var(--color-accent)]">
                    View listing →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/murfreesboro-local-businesses" className="btn-primary">
              Browse Local Businesses
            </Link>
            <Link href="/murfreesboro-shopping-supplies" className="btn-secondary">
              Shopping & Supplies
            </Link>
            <Link href="/bear-creek-cycle-trail" className="btn-secondary">
              Bear Creek Cycle Trail
            </Link>
            <Link href="/little-missouri-river-murfreesboro" className="btn-secondary">
              Little Missouri River
            </Link>
          </div>
        </div>
      </section>

      <FAQList faqs={homeFaqs} />

      <CTABox
        title="Know a Murfreesboro place visitors should know about?"
        text="Send in restaurants, cabins, local shops, guides, attractions, lake stops, events, family activities, and small businesses that should be considered for the Murfreesboro guide."
        links={[
          { href: "/contact", label: "Send a Suggestion", light: true },
          { href: "/things-to-do-in-murfreesboro-arkansas", label: "View Things To Do" },
        ]}
      />
    </main>
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
