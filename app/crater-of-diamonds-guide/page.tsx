import type { Metadata } from "next";
import Link from "next/link";
import GuidePage from "@/components/sections/GuidePage";
import { guidePages } from "@/data/guides";

const data = guidePages.crater;

export const metadata: Metadata = {
  title: "Crater of Diamonds Guide | What to Bring, Hours & Murfreesboro Tips",
  description:
    "Plan a Crater of Diamonds State Park visit with practical Murfreesboro tips for what to bring, kids, heat, mud, food, current park details, Lake Greeson, and what to do after digging.",
  keywords: data.metadata.keywords,
  alternates: { canonical: "/crater-of-diamonds-guide" },
};

export default function Page() {
  return (
    <>
      <GuidePage data={data} />

      <section className="section pt-0">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9">
            <p className="hero-eyebrow">Current Park Details</p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
              Need the current hours, admission, and rental prices before you go?
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[color:var(--color-muted)]">
              We separated the changeable park details from the general trip guide so you can check the practical numbers quickly without digging through the whole page.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/crater-of-diamonds-hours-admission" className="btn-primary">
                Check Hours & Admission
              </Link>
              <Link href="/what-to-do-after-crater-of-diamonds" className="btn-secondary">
                Plan What Comes Next
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
