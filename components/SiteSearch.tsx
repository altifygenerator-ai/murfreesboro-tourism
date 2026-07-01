"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { getSearchResults } from "@/data/searchIndex";

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const cleanQuery = query.trim();
  const results = useMemo(() => getSearchResults(cleanQuery, 6), [cleanQuery]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!cleanQuery) return;

    window.location.href = `/search?q=${encodeURIComponent(cleanQuery)}`;
  }

  return (
    <div className="site-search-row" role="search" aria-label="Search Murfreesboro guide">
      <div className="container site-search-inner">
        <form className="site-search-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="site-search-input">
            Search Murfreesboro Arkansas Guide
          </label>

          <div className="site-search-input-wrap">
            <span aria-hidden="true" className="site-search-icon">
              ⌕
            </span>

            <input
              id="site-search-input"
              type="search"
              name="q"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              onBlur={() => {
                window.setTimeout(() => setIsOpen(false), 180);
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") setIsOpen(false);
              }}
              placeholder="Search diamonds, Lake Greeson, cabins, restaurants..."
              autoComplete="off"
            />
          </div>

          <button type="submit">Search</button>

          {isOpen && cleanQuery && (
            <div
              className="site-search-dropdown"
              onMouseDown={(event) => event.preventDefault()}
            >
              {results.length > 0 ? (
                <>
                  {results.map((result) => (
                    <Link
                      key={`${result.href}-${result.title}`}
                      href={result.href}
                      className="site-search-result"
                    >
                      <span>{result.category}</span>
                      <strong>{result.title}</strong>
                      <p>{result.description}</p>
                    </Link>
                  ))}

                  <Link
                    href={`/search?q=${encodeURIComponent(cleanQuery)}`}
                    className="site-search-all"
                  >
                    View all results for “{cleanQuery}” →
                  </Link>
                </>
              ) : (
                <div className="site-search-empty">
                  <strong>No quick matches yet.</strong>
                  <p>
                    Try searching for diamonds, Lake Greeson, cabins,
                    restaurants, Dino Dig, or family trip ideas.
                  </p>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
