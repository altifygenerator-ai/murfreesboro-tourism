"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/site";

type NavLinkItem = {
  href: string;
  label: string;
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--color-bg)]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 text-base font-semibold tracking-wide text-[color:var(--color-text)]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--color-accent)] text-white shadow-sm">
            💎
          </span>

          <span className="leading-tight">
            Murfreesboro Arkansas
            <span className="block text-xs font-medium tracking-normal text-[color:var(--color-muted)]">
              Local Tourism Guide
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 text-sm md:flex">
          <Dropdown label="Explore" links={navLinks.explore} />
          <Dropdown label="Plan Your Trip" links={navLinks.plan} />
          <Dropdown label="Local Guide" links={navLinks.localGuide} />
          <Dropdown label="Sister Sites" links={navLinks.sisterSites} />

          <Link
            href="/contact"
            className="rounded-full bg-[color:var(--color-accent)] px-4 py-2.5 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Get Listed
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-black/10 bg-[color:var(--bg-card)] px-4 py-2 text-sm font-semibold text-[color:var(--color-text)] shadow-sm transition hover:bg-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-[color:var(--color-bg)] px-6 pb-6 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 pt-4 text-sm">
            <MobileGroup
              title="Explore"
              links={navLinks.explore}
              closeMenu={() => setOpen(false)}
            />

            <MobileGroup
              title="Plan Your Trip"
              links={navLinks.plan}
              closeMenu={() => setOpen(false)}
            />

            <MobileGroup
              title="Local Guide"
              links={navLinks.localGuide}
              closeMenu={() => setOpen(false)}
            />

            <MobileGroup
              title="Sister Sites"
              links={navLinks.sisterSites}
              closeMenu={() => setOpen(false)}
            />

            <Link
              href="/contact"
              className="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              Get Listed
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Dropdown({
  label,
  links,
}: {
  label: string;
  links: NavLinkItem[];
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="font-medium text-[color:var(--color-text)] transition hover:text-[color:var(--color-accent)]"
      >
        {label} ▾
      </button>

      <div className="absolute left-0 top-full z-50 hidden min-w-[270px] pt-3 group-hover:block">
        <div className="overflow-hidden rounded-xl border border-black/10 bg-[color:var(--bg-card)] py-2 text-[color:var(--color-text)] shadow-xl">
          {links.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({
  title,
  links,
  closeMenu,
}: {
  title: string;
  links: NavLinkItem[];
  closeMenu: () => void;
}) {
  return (
    <div className="rounded-xl border border-black/10 bg-[color:var(--bg-card)] p-3 shadow-sm">
      <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
        {title}
      </p>

      {links.map((link) => (
        <NavItem
          key={link.href}
          href={link.href}
          label={link.label}
          mobile
          onClick={closeMenu}
        />
      ))}
    </div>
  );
}

function NavItem({
  href,
  label,
  mobile = false,
  onClick,
}: {
  href: string;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}) {
  const isExternal = href.startsWith("http");

  const className = mobile
    ? "block rounded-lg px-2 py-2 font-medium text-[color:var(--color-text)] hover:bg-[color:var(--color-bg)]"
    : "block px-4 py-2.5 transition hover:bg-[color:var(--color-bg)]";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {label}
    </Link>
  );
}