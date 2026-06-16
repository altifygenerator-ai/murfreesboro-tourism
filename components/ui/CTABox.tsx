import Link from "next/link";

export default function CTABox({
  eyebrow = "Keep Planning",
  title,
  text,
  links,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  links: { href: string; label: string; light?: boolean }[];
}) {
  return (
    <section className="section pt-0">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-[2rem] border p-8 shadow-sm md:p-10"
          style={{
            borderColor: "rgba(0,0,0,0.08)",
            background:
              "linear-gradient(135deg, rgba(47,88,78,0.96), rgba(31,49,42,0.96))",
          }}
        >
          <div className="relative z-10 max-w-4xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] !text-white/75">
              {eyebrow}
            </p>
            <h2 className="text-4xl font-semibold leading-tight !text-white md:text-6xl">
              {title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 !text-white/85">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className={link.light ? "btn-light" : "btn"}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
