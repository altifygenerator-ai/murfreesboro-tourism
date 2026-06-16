import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/things-to-do-in-murfreesboro-arkansas", priority: 0.94, changeFrequency: "monthly" as const },
  { path: "/crater-of-diamonds-guide", priority: 0.96, changeFrequency: "monthly" as const },
  { path: "/things-to-do-near-crater-of-diamonds", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/lake-greeson", priority: 0.94, changeFrequency: "monthly" as const },
  { path: "/murfreesboro-cabins", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/murfreesboro-restaurants", priority: 0.88, changeFrequency: "monthly" as const },
  { path: "/murfreesboro-family-trip", priority: 0.88, changeFrequency: "monthly" as const },
  { path: "/day-trips-from-murfreesboro", priority: 0.86, changeFrequency: "monthly" as const },
  { path: "/murfreesboro-local-businesses", priority: 0.84, changeFrequency: "monthly" as const },
  { path: "/murfreesboro-shopping-supplies", priority: 0.78, changeFrequency: "monthly" as const },
  { path: "/bear-creek-cycle-trail", priority: 0.78, changeFrequency: "monthly" as const },
  { path: "/little-missouri-river-murfreesboro", priority: 0.78, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.domain}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
