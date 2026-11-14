import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Upcoming Events in Murfreesboro, Arkansas | Local Calendar",
  description: "Find verified upcoming Murfreesboro and Lake Greeson-area events, community activities, markets, and things to do near Crater of Diamonds.",
  alternates: { canonical: "/events" },
};

type EventRecord = {
  id: string;
  title: string;
  description: string | null;
  city: string | null;
  location_name: string | null;
  address: string | null;
  start_date: string;
  end_date: string | null;
  start_time: string | null;
  category: string | null;
  source_url: string | null;
};

async function fetchEvents(): Promise<EventRecord[]> {
  try {
    const response = await fetch(
      "https://www.glenwoodarkansas.org/api/events?site=murfreesboro",
      { next: { revalidate: 600 } },
    );
    if (!response.ok) throw new Error("Event feed unavailable");
    const payload = (await response.json()) as { events?: EventRecord[] };
    return Array.isArray(payload.events) ? payload.events : [];
  } catch (error) {
    console.error("Murfreesboro event feed failed", error);
    return [];
  }
}

function displayDate(date: string) {
  return new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });
}

function displayTime(time: string | null) {
  if (!time) return "";
  const [hours, minutes] = time.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return "";
  return new Date(2026, 0, 1, hours, minutes).toLocaleTimeString("en-US", {
    hour: "numeric", minute: "2-digit",
  });
}

export default async function EventsPage() {
  const events = await fetchEvents();
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="hero-eyebrow">Murfreesboro community calendar</p>
          <h1>Upcoming events around Murfreesboro, Arkansas</h1>
          <p className="mt-4 max-w-3xl leading-7">
            Look for local happenings around Murfreesboro and Lake Greeson.
            Dates, venues, and times come from event organizers; check the original
            listing before traveling, since details can change.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/crater-of-diamonds-guide" className="btn-primary">Plan a diamond-digging day</Link>
            <Link href="/murfreesboro-restaurants" className="btn-secondary">Find local food</Link>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container">
          <h2 className="mb-6 text-2xl font-semibold">Coming up</h2>
          {events.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {events.map((event) => (
                <article key={event.id} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <p className="mb-2 text-sm font-semibold">
                    {displayDate(event.start_date)}
                    {event.start_time ? " · " + displayTime(event.start_time) : ""}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                  <p className="mb-3 text-sm">
                    {[event.location_name, event.city].filter(Boolean).join(" · ")}
                  </p>
                  {event.description ? <p className="mb-4 leading-7">{event.description}</p> : null}
                  {event.source_url && /^https:\/\//i.test(event.source_url) ? (
                    <a href={event.source_url} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                      Check original event details
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-black/10 p-6">
              No upcoming events have been verified for this calendar yet.
              In the meantime, browse the <Link href="/things-to-do-in-murfreesboro-arkansas" className="underline">things-to-do guide</Link>.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
