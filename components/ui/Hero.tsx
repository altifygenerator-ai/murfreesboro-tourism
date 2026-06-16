import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
  eyebrow,
  title,
  text,
  image,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative flex min-h-[720px] items-end overflow-hidden dark-section">
      <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-transparent to-transparent" />

      <div className="container relative z-10 pb-16 pt-32">
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] !text-white/75">
            {eyebrow}
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] !text-white md:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 !text-white/85 md:text-xl">
            {text}
          </p>

          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary && (
                <HeroLink href={primary.href} className="btn-light">
                  {primary.label}
                </HeroLink>
              )}

              {secondary && (
                <HeroLink href={secondary.href} className="btn">
                  {secondary.label}
                </HeroLink>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


function HeroLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
