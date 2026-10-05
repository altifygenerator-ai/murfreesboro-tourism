# Murfreesboro visitor optimization — 2026-10-05

Source: 550ddad. Six existing routes receive concise intent-led titles/descriptions: Crater, after Crater, Lake Greeson, food, stays and family planning. Priority H1s name their destination or visitor intent while keeping the guide's practical voice. Native secondary buttons connect the Crater cluster to food, lake time, stays, family stops and supplies. Existing closing CTABox links provide contextual next steps; related navigation on guides outside the main pilot cluster stays in place. No events route or thin new pages are invented.

Verification:
- Production build and `tsc --noEmit`: pass. No lint script is configured.
- 11 routes × 1440, 1280, 768, 360 and 390px = 55 production browser checks: HTTP 200, no overflow, missing jump targets or uncaught runtime errors.
- 21 discovered internal destinations return successfully. Home, top Crater/lake/family routes, restaurants, lodging, supplies, nearby activities, day trips, mobile menu and footer inspected.
- New paths use semantic links, visible focus and at least 44px targets. Existing listings, submission forms, tracking and Find a Place Booking remain intact. River View is a smaller direct website ad with no Spotlight route/link.
- External partner assets/local analytics can fail in this execution environment. No live submissions or delivery were tested; confirm those and remote images in an environment-backed preview before release.

At baseline average position around 12, evaluate page/query visibility and position alongside CTR. Authority and navigation through existing content are the main goal. Maps and a new planner are deferred; no traffic uplift is claimed before post-release data exists.
