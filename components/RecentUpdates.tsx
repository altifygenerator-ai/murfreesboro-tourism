import Link from "next/link";

const updates = [
  {
    date: "July 16, 2026",
    label: "New article",
    title: "What to do after Crater of Diamonds",
    text: "A new visitor guide helps families decide what comes next after the diamond field, whether that means food, shade, Dino Dig, Ka-Do-Ha, Lake Greeson, or heading back to the cabin.",
    href: "/what-to-do-after-crater-of-diamonds",
  },
  {
    date: "July 16, 2026",
    label: "Business cleanup",
    title: "More Lake Greeson and Murfreesboro-area listings added",
    text: "The local guide now has more basic listings for lake access, marinas, campgrounds, recreation areas, restaurants, shops, stays, and useful visitor stops around Murfreesboro and Lake Greeson.",
    href: "/murfreesboro-local-businesses",
  },
  {
    date: "July 16, 2026",
    label: "Planning update",
    title: "Crater, food, lodging, and lake links tightened up",
    text: "Internal links, search details, sitemap routes, and planning pages were cleaned up so visitors can move easier between Crater of Diamonds, restaurants, cabins, shopping, and Lake Greeson.",
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
              <p className="hero-eyebrow">Recent Updates</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-[color:var(--color-text)] sm:text-4xl">
                New Murfreesboro planning notes and local listings.
              </h2>
            </div>
            <Link href="/what-to-do-after-crater-of-diamonds" className="btn-secondary">
              Read New Article
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
