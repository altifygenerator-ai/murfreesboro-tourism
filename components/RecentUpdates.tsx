import Link from "next/link";

const planningGuides = [
  {
    label: "Before you dig",
    title: "Crater of Diamonds Hours & Admission",
    text: "Current planning essentials: park hours, prices, rentals and what to check before you drive.",
    href: "/crater-of-diamonds-hours-admission",
  },
  {
    label: "For the whole day",
    title: "Plan Your Crater of Diamonds Visit",
    text: "What to bring, what families should expect and where to go after the field.",
    href: "/crater-of-diamonds-guide",
  },
  {
    label: "Beyond the park",
    title: "Explore Murfreesboro & Lake Greeson",
    text: "Find food, local shops and lake stops to round out your trip.",
    href: "/things-to-do-in-murfreesboro-arkansas",
  },
];

export default function RecentUpdates() {
  return (
    <section className="section pb-0">
      <div className="container">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="hero-eyebrow">Plan ahead</p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-[color:var(--color-text)] sm:text-4xl">
              A few things to know before you go.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[color:var(--color-muted)]">
              Start with the park details, then make time for the town and the lake.
            </p>
          </div>
          <Link href="/crater-of-diamonds-hours-admission" className="btn-secondary">
            Check park details
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {planningGuides.map((guide) => (
            <Link key={guide.href} href={guide.href}
              className="group flex h-full flex-col rounded-[18px] border border-black/10 bg-[color:var(--bg-card)] p-5 transition hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-accent)]">
                {guide.label}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-[color:var(--color-text)]">
                {guide.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--color-muted)]">
                {guide.text}
              </p>
              <span className="mt-5 text-sm font-semibold text-[color:var(--color-accent)] group-hover:underline">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
