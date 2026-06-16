export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "section-heading" : "max-w-3xl"}>
      <p className="hero-eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 leading-8 text-[color:var(--color-muted)]">{text}</p>}
    </div>
  );
}
