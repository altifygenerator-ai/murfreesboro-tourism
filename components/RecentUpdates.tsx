import Link from "next/link";

const updates = [
  {
    date: "June 27, 2026",
    label: "New family stop",
    title: "Dino Dig added to the Murfreesboro guide",
    text: "A kid-friendly indoor digging stop near Crater of Diamonds, useful for families who need a shorter activity, a break from the heat, or something easy to pair with the diamond field.",
    href: "/things-to-do-near-crater-of-diamonds",
  },
  {
    date: "June 27, 2026",
    label: "Guide update",
    title: "Family Trip Guide refreshed with backup ideas",
    text: "The family guide now gives visitors a better way to plan around Crater of Diamonds, Lake Greeson, meals, cleanup time, and simple kid-friendly backup plans.",
    href: "/murfreesboro-family-trip",
  },
  {
    date: "June 27, 2026",
    label: "Crater-area planning",
    title: "Things to do near Crater of Diamonds expanded",
    text: "The Crater-area guide now has stronger short-stop planning for visitors who want more than the diamond field without turning the day into a rushed checklist.",
    href: "/things-to-do-near-crater-of-diamonds",
  },
];

export default function RecentUpdates() {
  return (
    <section className="section pb-0">
      <div className="container">
        <div className="rounded-[32px] border border-[rgba(45,42,38,0.12)] bg-[rgba(255,250,240,0.78)] p-5 shadow-[0_18px_50px_rgba(45,42,38,0.08)] sm:p-7 lg:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="hero-eyebrow">Recent Updates</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-[color:var(--color-text)] sm:text-4xl">
                New notes added to the Murfreesboro guide.
              </h2>
            </div>
            <Link href="/things-to-do-in-murfreesboro-arkansas" className="btn-secondary">
              View Things To Do
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
                  Read update →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}