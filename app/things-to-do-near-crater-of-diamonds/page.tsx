import type { Metadata } from "next";
import GuidePage from "@/components/sections/GuidePage";
import { guidePages } from "@/data/guides";

const data = guidePages.nearCrater;

export const metadata: Metadata = {
  title: "Things To Do Near Crater of Diamonds | Murfreesboro, Arkansas",
  description:
    "Find practical things to do near Crater of Diamonds in Murfreesboro, including food, Dino Dig, Ka-Do-Ha, Lake Greeson, family backup plans, cabins, and easy next stops after digging.",
  keywords: data.metadata.keywords,
  alternates: { canonical: "/things-to-do-near-crater-of-diamonds" },
};

export default function Page() {
  return <GuidePage data={data} />;
}
