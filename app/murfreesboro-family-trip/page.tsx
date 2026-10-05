import type { Metadata } from "next";
import GuidePage from "@/components/sections/GuidePage";
import { guidePages } from "@/data/guides";

const data = guidePages.family;

export const metadata: Metadata = {
  title: { absolute: "Murfreesboro Family Trip | Diamonds, Lake Greeson & Food" },
  description: "Plan a family trip to Murfreesboro with Crater of Diamonds, Lake Greeson, easy meals, kid-friendly stops and cabins. Leave room for breaks and backup plans.",
  keywords: data.metadata.keywords,
  alternates: { canonical: "/murfreesboro-family-trip" },
};

export default function Page() {
  return <GuidePage data={data} />;
}
