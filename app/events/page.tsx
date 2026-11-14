import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Murfreesboro AR Events | Lake Greeson, Crater of Diamonds & Community Calendar",
  description:
    "Find upcoming events near Murfreesboro, Arkansas, Lake Greeson, Kirby, Daisy State Park and Crater of Diamonds, with dates and links to organizers.",
  alternates: { canonical: "/events" },
};

type TourismEvent = {
  title: string;
  slug: string;
  description: string | null;
  city: string | null;
  location_name: string | null;
  address: string | null;
  start_date: string;
  end_date: string | null;
  start_time: string | null;
  end_time: string | null;
  category: string | null;
  source_url: string | null;
};

async function getEvents(): Promise<TourismEvent[]> {
  try {
    const response = await fetch(
      "https://www.glenwoodarkansas.org/api/public/events?site=murfreesboro",
      { cache: "no-store", headers: { Accept: "application/json" }, signal: AbortSignal.timeout(8000) }
    );
    if (!response.ok) throw new Error("Event feed responded " + response.status);
    const payload = (await response.json()) as { events?: TourismEvent[] };
    if (!Array.isArray(payload.events)) return [];
    return payload.events.filter((event) =>
      typeof event.title === "string" &&
      typeof event.start_date === "string" &&
      /^20\d{2}-\d{2}-\d{2}$/.test(event.start_date)
    );
  } catch (error) {
    console.error("Could not load Murfreesboro events:", error);
    return [];
  }
}

function formatDate(date: string) {
  return new Date(date + "T12:00:00Z").toLocaleDateString("en-US", {
    timeZone: "UTC", month: "short", day: "numeric", year: "numeric",
  });
}
function formatTime(value: string | null) {
  if (!value) return null;
  const match = value.match(/^(\d{2}):(\d{2})/);
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = match[2];
  return String(hours % 12 || 12) + ":" + minutes + (hours >= 12 ? " PM" : " AM");
}
function safeSource(url: string | null) {
  try {
    const parsed = new URL(url || "");
    return parsed.protocol === "https:" ? parsed.href : null;
  } catch { return null; }
}

export default async function MurfreesboroEvents() {
  const events = await getEvents();
  const jsonLd = events.slice(0, 30).map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.start_date + (event.start_time ? "T" + event.start_time.slice(0, 5) + ":00" : ""),
    ...(event.end_date ? { endDate: event.end_date } : {}),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location_name || event.city || "Murfreesboro area",
      address: event.address || (event.city ? event.city + ", Arkansas, USA" : "Murfreesboro, Arkansas, USA"),
    },
    ...(safeSource(event.source_url) ? { url: safeSource(event.source_url) } : {}),
    ...(event.description ? { description: event.description } : {}),
  }));
  return (
    <main className="section">
      {jsonLd.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }} />
      )}
      <div className="container mx-auto max-w-6xl">
        <p className="hero-eyebrow">Local Events</p>
        <h1 className="mt-2 text-4xl font-semibold text-[color:var(--color-text)] md:text-5xl">
          What’s happening around Murfreesboro, Arkansas
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--color-muted)]">
          Community gatherings, holiday events, outdoor programs, and things to do around
          Crater of Diamonds, Daisy State Park, Kirby and Lake Greeson. Dates and details
          can change, so check with organizers before heading out.
        </p>

        {events.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {events.map((event) => {
              const organizerUrl = safeSource(event.source_url);
              return (
                <article key={event.slug} className="card rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-wide text-[color:var(--color-accent)]">
                    {event.category || "Local Event"}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[color:var(--color-text)]">
                    {event.title}
                  </h2>
                  <p className="mt-3 font-semibold">
                    <time dateTime={event.start_date}>{formatDate(event.start_date)}</time>
                    {event.end_date && event.end_date !== event.start_date ? " – " + formatDate(event.end_date) : ""}
                    {formatTime(event.start_time) ? " · " + formatTime(event.start_time) : ""}
                  </p>
                  {(event.location_name || event.city) && (
                    <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                      {[event.location_name, event.city].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  {event.description && (
                    <p className="mt-4 leading-7 text-[color:var(--color-muted)]">{event.description}</p>
                  )}
                  {organizerUrl && (
                    <a href={organizerUrl} target="_blank" rel="noopener noreferrer"
                       className="mt-5 inline-flex font-semibold text-[color:var(--color-accent)] underline underline-offset-4">
                      Check event details
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="card mt-10 rounded-2xl border border-black/10 bg-white p-8">
            <h2 className="text-2xl font-semibold">More local events are on the way</h2>
            <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
              Our community calendar is regularly refreshed. For official dates, also check
              the City of Murfreesboro and Arkansas State Parks.
            </p>
            <div className="mt-4 flex flex-wrap gap-5">
              <a className="font-semibold underline" href="https://murfreesboroar.gov/calendar-of-events"
                target="_blank" rel="noopener noreferrer">City events</a>
              <a className="font-semibold underline" href="https://www.arkansas.com/state-parks/explore/parks/crater-of-diamonds-state-park"
                target="_blank" rel="noopener noreferrer">Crater of Diamonds State Park</a>
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-black/10 pt-8">
          <Link className="font-semibold text-[color:var(--color-accent)] underline" href="/things-to-do-in-murfreesboro-arkansas">
            Explore things to do
          </Link>
          <Link className="font-semibold text-[color:var(--color-accent)] underline" href="/contact">
            Tell us about an event
          </Link>
        </div>
      </div>
    </main>
  );
}
