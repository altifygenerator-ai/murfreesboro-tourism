import Link from "next/link";
import styles from "./TripPaths.module.css";

export const murfreesboroPaths = [
  { href: "/crater-of-diamonds-guide", label: "Crater of Diamonds" },
  { href: "/murfreesboro-restaurants", label: "Food after digging" },
  { href: "/lake-greeson", label: "Lake Greeson" },
  { href: "/murfreesboro-cabins", label: "Places to stay" },
  { href: "/murfreesboro-family-trip", label: "Family trip" },
  { href: "/what-to-do-after-crater-of-diamonds", label: "After the Crater" },
];

export default function TripPaths({ current, heading = "Plan your Murfreesboro trip", links = murfreesboroPaths }: {
  current?: string;
  heading?: string;
  links?: { href: string; label: string }[];
}) {
  return (
    <section className={styles.paths} aria-label={heading}>
      <div className="container">
        <p className="hero-eyebrow">{heading}</p>
        <nav aria-label={heading} className={styles.links}>
          {links.filter(link => link.href !== current).map(link => (
            <Link key={link.href} href={link.href} className="btn-secondary">{link.label}</Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
