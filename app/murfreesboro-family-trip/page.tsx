import type { Metadata } from "next";
import GuidePage from "@/components/sections/GuidePage";
import { guidePages } from "@/data/guides";

const data = guidePages.family;

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
  alternates: { canonical: "/murfreesboro-family-trip" },
};

export default function Page() {
  return <GuidePage data={data} />;
}
