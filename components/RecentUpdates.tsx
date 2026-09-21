import Link from "next/link";

const updates = [
  {
    date: "September 20, 2026",
    label: "Visitor info checked",
    title: "Crater of Diamonds hours, admission, and tool rentals",
    text: "A new quick-planning page pulls together the current park hours, diamond-field admission, common tool rental prices, pet rules, and seasonal water-park details in one place.",
    href: "/crater-of-diamonds-hours-admission",
  },
  {
    date: "September 20, 2026",
    label: "Guide reviewed",
    title: "Crater of Diamonds trip planning refreshed",
    text: "The main Crater guide was reviewed to make the page more useful for families planning around heat, dirt, kids, food, cleanup, and what comes after the field.",
    href: "/crater-of-diamonds-guide",
  },
  {
    date: "September 20, 2026",
    label: "Planning refresh",
    title: "Murfreesboro and Lake Greeson trip links checked",
    text: "Core trip-planning routes were reviewed so visitors can move more directly between diamonds, Lake Greeson, cabins, restaurants, family stops, and nearby day trips.",
    href: "/things-to-do-in-murfreesboro-arkansas",
  },
];

export default function RecentUpdates() {
  return (
    <section className="section pb-0">
      <div className="container">
        <div className="rounded-[32px] border border-[rgba(45,42,38,0.12)] bg-[rgba(255,250,240,0.78)] p-5 shadow-[0_18px_50px_rgba(45,42,38,0.08)] sm:p-7 lg:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="hero-eyebrow">Recently Reviewed</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-[color:var(--color-text)] sm:text-4xl">
                Current Murfreesboro trip-planning updates.
              </h2>
            </div>
            <Link href="/crater-of-diamonds-hours-admission" className="btn-secondary">
              Check Crater Info
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {updates.map((update) => (
              <Link key={update.title} href={update.href} className="card card-hover p-5">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[rgba(63,92,74,0.1)] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                    {update.label}
                  </span>
                  <span className="text-sm font-bold text-[color:var(--color-muted)]">
                    {update.date}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {update.title}
                </h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                  {update.text}
                </p>
                <span className="mt-5 inline-block text-sm font-black text-[color:var(--color-accent)]">
                  Open update →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
