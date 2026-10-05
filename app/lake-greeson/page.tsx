import type { Metadata } from "next";
import GuidePage from "@/components/sections/GuidePage";
import { guidePages } from "@/data/guides";

const data = guidePages.lake;

export const metadata: Metadata = {
  title: { absolute: "Lake Greeson, Arkansas | Boating, Fishing & Cabin Guide" },
  description: "Plan Lake Greeson fishing, boating, camping and cabins near Murfreesboro. Explore marina guides and pair a lake day with your Crater of Diamonds trip.",
  keywords: data.metadata.keywords,
  alternates: { canonical: "/lake-greeson" },
};

export default function Page() {
  return <GuidePage data={data} />;
}
