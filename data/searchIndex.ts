import { localBusinesses } from "@/data/localBusinesses";

export type SearchEntry = {
  title: string;
  href: string;
  category: string;
  description: string;
  keywords?: string;
};

const pageEntries: SearchEntry[] = [
  {
    title: "Murfreesboro Arkansas Guide",
    href: "/",
    category: "Visitor Guide",
    description:
      "Start planning a Murfreesboro trip around Crater of Diamonds, Lake Greeson, cabins, food, family stops, and nearby day trips.",
    keywords:
      "murfreesboro arkansas visit guide crater diamonds lake greeson cabins restaurants trip planning",
  },
  {
    title: "Things To Do in Murfreesboro",
    href: "/things-to-do-in-murfreesboro-arkansas",
    category: "Things To Do",
    description:
      "A practical guide to Crater of Diamonds, Lake Greeson, Ka-Do-Ha, Dino Dig, Bear Creek, Little Missouri River ideas, and local stops.",
    keywords:
      "things to do attractions activities family diamond digging lake greeson kadoha dino dig bear creek",
  },
  {
    title: "Crater of Diamonds Guide",
    href: "/crater-of-diamonds-guide",
    category: "Crater of Diamonds",
    description:
      "Plan a Crater of Diamonds State Park day with realistic notes on digging, heat, mud, tools, kids, food, and what to do afterward.",
    keywords:
      "diamond field diamonds digging state park tools rentals water park treasure hunting rocks gemstones",
  },
  {
    title: "Things To Do Near Crater of Diamonds",
    href: "/things-to-do-near-crater-of-diamonds",
    category: "Crater Area",
    description:
      "Nearby stops and backup ideas around the diamond field, including Ka-Do-Ha, Dino Dig, restaurants, Lake Greeson, and short family-friendly plans.",
    keywords:
      "near crater diamonds after digging kadoha dino dig family backup restaurants lake greeson",
  },
  {
    title: "Lake Greeson",
    href: "/lake-greeson",
    category: "Lake Guide",
    description:
      "Plan a Lake Greeson day around boating, fishing, swimming, camping, Swaha, Dam Grill, cabins, and slower lake weekends near Murfreesboro.",
    keywords:
      "lake greeson boating fishing swimming camping swaha marina dam grill cabins water",
  },
  {
    title: "Murfreesboro Family Trip Guide",
    href: "/murfreesboro-family-trip",
    category: "Family Guide",
    description:
      "A family planning guide for Crater of Diamonds, Dino Dig, Lake Greeson, meals, cleanup, breaks, and easy backup plans with kids.",
    keywords:
      "family kids children dino dig diamond field lunch cleanup backup plan water park",
  },
  {
    title: "Murfreesboro Cabins & RV Stays",
    href: "/murfreesboro-cabins",
    category: "Places To Stay",
    description:
      "Cabins, RV parks, campgrounds, vacation rentals, lake stays, and lodging notes for Crater of Diamonds and Lake Greeson trips.",
    keywords:
      "cabins rv campground lodging vacation rentals hotel motel stay crater lake greeson",
  },
  {
    title: "Murfreesboro Restaurants",
    href: "/murfreesboro-restaurants",
    category: "Food Guide",
    description:
      "Local food options for Murfreesboro visitors, including Mexican food, cafes, lake food, nearby BBQ, and check-ahead meal planning.",
    keywords:
      "restaurants food lunch dinner cafe mexican bbq dam grill feed bin telingas",
  },
  {
    title: "Day Trips From Murfreesboro",
    href: "/day-trips-from-murfreesboro",
    category: "Day Trips",
    description:
      "Nearby Arkansas day trip ideas from Murfreesboro, including Lake Greeson, Little Missouri River areas, Caddo River, Glenwood, Mount Ida, and Hot Springs.",
    keywords:
      "day trips nearby hot springs glenwood mount ida caddo river little missouri lake greeson",
  },
  {
    title: "Murfreesboro Local Businesses",
    href: "/murfreesboro-local-businesses",
    category: "Local Businesses",
    description:
      "A local business guide for restaurants, cabins, RV parks, attractions, shops, supplies, services, and places visitors may need around Murfreesboro.",
    keywords:
      "business listings local guide shops supplies restaurants cabins attractions services",
  },
  {
    title: "Murfreesboro Shopping & Supplies",
    href: "/murfreesboro-shopping-supplies",
    category: "Shopping & Supplies",
    description:
      "Where to think about supplies, snacks, fuel, simple shopping needs, and practical errands before a diamond field or Lake Greeson day.",
    keywords:
      "shopping supplies fuel groceries snacks ice tools souvenirs visitor essentials",
  },
  {
    title: "Bear Creek Cycle Trail",
    href: "/bear-creek-cycle-trail",
    category: "Outdoor Guide",
    description:
      "A guide to Bear Creek Cycle Trail and mountain biking or outdoor riding plans near Murfreesboro and Lake Greeson.",
    keywords:
      "bear creek cycle trail biking mountain bike outdoor trails ride lake greeson",
  },
  {
    title: "Little Missouri River Near Murfreesboro",
    href: "/little-missouri-river-murfreesboro",
    category: "Outdoor Guide",
    description:
      "A practical guide to nearby Little Missouri River and falls-area ideas for scenic drives, creek stops, Ouachita exploring, and check-ahead outdoor plans.",
    keywords:
      "little missouri river falls waterfall scenic drive ouachita outdoor creek day trip",
  },
  {
    title: "Contact & Get Listed",
    href: "/contact",
    category: "Get Listed",
    description:
      "Contact the Murfreesboro Arkansas Guide to suggest a place, ask about a listing, or get a local business included in the guide.",
    keywords:
      "contact get listed advertise suggest business listing update tourism project",
  },
];

const businessEntries: SearchEntry[] = localBusinesses.map((business) => ({
  title: business.name,
  href: business.guideHref ?? "/murfreesboro-local-businesses",
  category: business.type,
  description: business.description,
  keywords: [
    business.name,
    business.type,
    business.category,
    business.area,
    business.address,
    business.note,
    business.guideSlugs.join(" "),
  ]
    .filter(Boolean)
    .join(" "),
}));

export const searchIndex: SearchEntry[] = [...pageEntries, ...businessEntries];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

export function getSearchResults(query: string, limit = 12) {
  const cleanQuery = normalize(query);

  if (!cleanQuery) {
    return [];
  }

  const terms = cleanQuery.split(" ").filter(Boolean);

  return searchIndex
    .map((entry) => {
      const title = normalize(entry.title);
      const category = normalize(entry.category);
      const description = normalize(entry.description);
      const keywords = normalize(entry.keywords ?? "");
      const combined = `${title} ${category} ${description} ${keywords}`;

      let score = 0;

      if (title === cleanQuery) score += 90;
      if (title.includes(cleanQuery)) score += 45;
      if (category.includes(cleanQuery)) score += 24;
      if (description.includes(cleanQuery)) score += 18;
      if (keywords.includes(cleanQuery)) score += 14;

      for (const term of terms) {
        if (title.includes(term)) score += 12;
        if (category.includes(term)) score += 7;
        if (description.includes(term)) score += 5;
        if (keywords.includes(term)) score += 4;
        if (combined.includes(term)) score += 1;
      }

      return { entry, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map((result) => result.entry);
}
