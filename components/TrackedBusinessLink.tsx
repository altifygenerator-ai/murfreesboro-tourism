"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

type Props = {
  href: string;
  business: string;
  category: string;
  children: ReactNode;
  className?: string;
};

export default function TrackedBusinessLink({ href, business, category, children, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        track("business_click", {
          action: "website",
          business,
          city: "Murfreesboro",
          page: "/murfreesboro-local-businesses",
          placement: category === "service" ? "local-services" : "local-business-directory",
          placementType: "editorial",
        });
      }}
    >
      {children}
    </a>
  );
}
