import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getSearchResults } from "@/data/searchIndex";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Search the Murfreesboro Arkansas Guide",
  description:
    "Search the Murfreesboro Arkansas guide for Crater of Diamonds, Lake Greeson, cabins, restaurants, local businesses, family stops, and nearby day trips.",
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string | string[];
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const rawQuery = params?.q;
  const query = Array.isArray(rawQuery) ? rawQuery[0] ?? "" : rawQuery ?? "";
  const cleanQuery = query.trim();
  const results = getSearchResults(cleanQuery, 30);

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "SearchResultsPage",
            name: "Search the Murfreesboro Arkansas Guide",
            url: `${site.domain}/search${cleanQuery ? `?q=${encodeURIComponent(cleanQuery)}` : ""}`,
            about: "Murfreesboro Arkansas visitor guide search results",
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
              { "@type": "ListItem", position: 2, name: "Search", item: `${site.domain}/search` },
            ],
          },
        ]}
      />

      <section className="section search-page-hero">
        <div className="container">
          <div className="search-page-heading">
            <p className="hero-eyebrow">Search The Guide</p>
            <h1>Find Murfreesboro trip pages faster.</h1>
            <p>
              Search for Crater of Diamonds, Lake Greeson, cabins, restaurants,
              Dino Dig, local businesses, family trip ideas, supplies, and nearby
              southwest Arkansas stops.
            </p>
          </div>

          <form action="/search" className="search-page-form" role="search">
            <label className="sr-only" htmlFor="search-page-input">
              Search Murfreesboro Arkansas Guide
            </label>
            <input
              id="search-page-input"
              type="search"
              name="q"
              defaultValue={cleanQuery}
              placeholder="Search diamonds, cabins, Lake Greeson..."
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          {cleanQuery ? (
            <div className="mb-8">
              <p className="hero-eyebrow">Results</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                {results.length > 0
                  ? `Results for “${cleanQuery}”`
                  : `No results for “${cleanQuery}”`}
              </h2>
            </div>
          ) : (
            <div className="mb-8">
              <p className="hero-eyebrow">Start Searching</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                Try a topic from your trip.
              </h2>
            </div>
          )}

          {results.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {results.map((result) => (
                <Link
                  key={`${result.href}-${result.title}`}
                  href={result.href}
                  className="card card-hover p-6"
                >
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {result.category}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                    {result.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                    {result.description}
                  </p>
                  <span className="mt-5 inline-block text-sm font-black text-[color:var(--color-accent)]">
                    Open page →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="card p-6">
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                Search ideas
              </h3>
              <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                Try searching for Crater of Diamonds, Lake Greeson, cabins,
                restaurants, Dino Dig, Ka-Do-Ha, family trip, supplies, or day
                trips.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
