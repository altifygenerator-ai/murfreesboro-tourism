import type { MetadataRoute } from "next";
import { site } from "@/data/site";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const baseUrl = site.domain.replace(/\/$/, "");
const contentUpdated = new Date("2026-09-20T00:00:00-05:00");

const coreRoutes: SitemapRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  {
    path: "/things-to-do-in-murfreesboro-arkansas",
    priority: 0.94,
    changeFrequency: "monthly",
  },
  {
    path: "/crater-of-diamonds-guide",
    priority: 0.97,
    changeFrequency: "monthly",
  },
  {
    path: "/crater-of-diamonds-hours-admission",
    priority: 0.96,
    changeFrequency: "monthly",
  },
  {
    path: "/what-to-do-after-crater-of-diamonds",
    priority: 0.92,
    changeFrequency: "monthly",
  },
  {
    path: "/things-to-do-near-crater-of-diamonds",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  { path: "/lake-greeson", priority: 0.94, changeFrequency: "monthly" },
  { path: "/lake-greeson-cabins", priority: 0.92, changeFrequency: "monthly" },
  {
    path: "/lake-greeson-fishing",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/lake-greeson-camping-swimming",
    priority: 0.88,
    changeFrequency: "monthly",
  },
  {
    path: "/lake-greeson-marinas-boat-rentals",
    priority: 0.88,
    changeFrequency: "monthly",
  },
  { path: "/daisy-state-park", priority: 0.88, changeFrequency: "monthly" },
  {
    path: "/swaha-lodge-marina-lake-greeson",
    priority: 0.86,
    changeFrequency: "monthly",
  },
  {
    path: "/kirby-landing-lake-greeson",
    priority: 0.86,
    changeFrequency: "monthly",
  },
];

const planningRoutes: SitemapRoute[] = [
  { path: "/murfreesboro-cabins", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/murfreesboro-restaurants",
    priority: 0.88,
    changeFrequency: "monthly",
  },
  {
    path: "/murfreesboro-family-trip",
    priority: 0.88,
    changeFrequency: "monthly",
  },
  {
    path: "/day-trips-from-murfreesboro",
    priority: 0.86,
    changeFrequency: "monthly",
  },
];

const localGuideRoutes: SitemapRoute[] = [
  {
    path: "/murfreesboro-local-businesses",
    priority: 0.84,
    changeFrequency: "monthly",
  },
  {
    path: "/murfreesboro-shopping-supplies",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/bear-creek-cycle-trail",
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/little-missouri-river-murfreesboro",
    priority: 0.78,
    changeFrequency: "monthly",
  },
];

const utilityRoutes: SitemapRoute[] = [
  { path: "/contact", priority: 0.55, changeFrequency: "monthly" },
];

const routes: SitemapRoute[] = [
  ...coreRoutes,
  ...planningRoutes,
  ...localGuideRoutes,
  ...utilityRoutes,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: contentUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
