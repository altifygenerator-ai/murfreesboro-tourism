import Link from "next/link";
import { navLinks, sisterSites, site } from "@/data/site";

const footerGuides = [
  {
    href: "/things-to-do-in-murfreesboro-arkansas",
    label: "Things To Do",
  },
  {
    href: "/crater-of-diamonds-guide",
    label: "Crater of Diamonds",
  },
  {
    href: "/things-to-do-near-crater-of-diamonds",
    label: "Near Crater of Diamonds",
  },
  {
    href: "/lake-greeson",
    label: "Lake Greeson",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-accent-dark)] text-white">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 text-white">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-xl shadow-sm">
                💎
              </span>

              <span>
                <span className="block text-lg font-semibold text-white">
                  {site.shortName}
                </span>
                <span className="block text-sm font-medium text-white/80">
                  Natural State Tourism Project guide
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 !text-white/85">
  A practical visitor guide for Murfreesboro, Crater of Diamonds,
  Lake Greeson, cabins, restaurants, family trips, and nearby
  southwest Arkansas stops.
</p>
          </div>

          <FooterGroup title="Murfreesboro Guides" links={footerGuides} />
          <FooterGroup title="Plan Your Trip" links={navLinks.plan} />

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Sister Sites
            </h3>

            <ul className="space-y-2.5 text-sm">
              {sisterSites.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white/85 transition hover:text-white hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm !text-white/80 md:flex-row md:items-center md:justify-between">
          <p className="!text-white/80">© {new Date().getFullYear()} Murfreesboro Arkansas Guide.</p>

          <div className="flex flex-col gap-2 !text-white/85 md:items-end">
  <p className="!text-white/85">
    Built as part of the{" "}
    <a
      href="https://www.naturalstatetourismproject.org"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold !text-white underline underline-offset-4 transition hover:!text-white/85"
    >
      Natural State Tourism Project
    </a>
    .
  </p>

  <p className="!text-white/85">
    Website by{" "}
    <a
      href="https://hometownwebservicesar.cc"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold !text-white underline underline-offset-4 transition hover:!text-white/85"
    >
      Hometown Web Services
    </a>
    .
  </p>
</div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
        {title}
      </h3>

      <ul className="space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-medium text-white/85 transition hover:text-white hover:underline hover:underline-offset-4"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}