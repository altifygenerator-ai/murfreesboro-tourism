import type { Metadata } from "next";
import GuidePage from "@/components/sections/GuidePage";
import { guidePages } from "@/data/guides";
import { site } from "@/data/site";

const data = guidePages.lakeFishing;
const pagePath = "/lake-greeson-fishing";

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
  alternates: { canonical: pagePath },
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: `${site.domain}${pagePath}`,
    type: "article",
    images: [{ url: data.hero.image, alt: data.hero.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: data.metadata.title,
    description: data.metadata.description,
    images: [data.hero.image],
  },
};

export default function Page() {
  return <GuidePage data={data} />;
}
