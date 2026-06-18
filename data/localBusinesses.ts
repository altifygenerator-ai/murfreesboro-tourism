import { imagePaths } from "@/data/site";

export type LocalBusinessCategory =
  | "food"
  | "stay"
  | "attraction"
  | "shopping"
  | "outdoor"
  | "service";

export type LocalBusiness = {
  name: string;
  type: string;
  category: LocalBusinessCategory;
  area: string;
  description: string;
  href?: string;
  guideHref?: string;
  phone?: string;
  address?: string;
  note?: string;
  guideSlugs: string[];
};


export const featuredBusinessPlaceholder = {
  name: "Featured Local Business",
  type: "Featured Placement • Placeholder Card",
  description:
    "This larger card is reserved for a Murfreesboro-area business that wants more room than a basic listing. Replace this with a real business photo, description, contact link, and placement details when you have a featured advertiser.",
  image: imagePaths.downtown,
  href: "/contact",
};

export const localBusinesses: LocalBusiness[] = [
  
  {
    name: "Crater of Diamonds State Park",
    type: "Diamond Digging • State Park • Family Activity",
    category: "attraction",
    area: "Murfreesboro",
    description:
      "The main visitor anchor for Murfreesboro. It is the place people come to dig, sift, learn a little geology, and keep whatever stones or minerals they find.",
    href: "https://www.arkansas.com/state-parks/explore/parks/crater-of-diamonds-state-park",
    guideHref: "/crater-of-diamonds-guide",
    address: "209 State Park Road, Murfreesboro, AR 71958",
    note: "Check current admission, park rules, tool rules, water park season, and field conditions before planning the day around it.",
    guideSlugs: ["things-to-do-in-murfreesboro-arkansas", "crater-of-diamonds-guide", "murfreesboro-family-trip", "things-to-do-near-crater-of-diamonds"],
  },
  {
    name: "Swaha Lodge N Marina",
    type: "Lake Greeson • Marina • Cabins • Boat Rentals",
    category: "stay",
    area: "Lake Greeson",
    description:
      "A long-running Lake Greeson stop for visitors building the trip around cabins, boating, fishing, marina access, and a slower lake weekend north of Murfreesboro.",
    href: "https://swahacabins.com/",
    guideHref: "/lake-greeson",
    phone: "870-285-2272",
    address: "205 Dynamite Hill Road, Murfreesboro, AR 71958",
    note: "Best treated as a Lake Greeson anchor. Check lodging, boat rental, marina, and seasonal food details directly before booking.",
    guideSlugs: ["lake-greeson", "murfreesboro-cabins", "murfreesboro-family-trip", "murfreesboro-restaurants", "day-trips-from-murfreesboro"],
  },
  {
    name: "Dam Grill at Swaha",
    type: "Seasonal Lake Food • Lake Greeson",
    category: "food",
    area: "Lake Greeson",
    description:
      "A seasonal lakeside food stop connected with Swaha Lodge N Marina. It fits best with a lake day, boat day, cabin stay, or marina stop rather than a rushed in-town meal plan.",
    href: "https://swahacabins.com/dam-grill/",
    guideHref: "/murfreesboro-restaurants",
    phone: "870-285-2202",
    address: "205 Dynamite Hill Road, Murfreesboro, AR 71958",
    note: "Seasonal lake restaurants can change hours. Check before driving out for a meal.",
    guideSlugs: ["murfreesboro-restaurants", "lake-greeson", "murfreesboro-family-trip", "day-trips-from-murfreesboro"],
  },
  {
    name: "Ka-Do-Ha Indian Village",
    type: "Museum • Archeology • Family Stop",
    category: "attraction",
    area: "Murfreesboro",
    description:
      "A local archeology and museum stop that can work well when visitors want something shorter and more educational to pair with Crater of Diamonds.",
    href: "https://www.arkansas.com/experiences/discover/attraction-listings/ka-do-ha-indian-village",
    guideHref: "/things-to-do-near-crater-of-diamonds",
    phone: "870-285-3736",
    address: "281 Kadoha Road, Murfreesboro, AR 71958",
    note: "Good as a shorter add-on, especially if the diamond field day needs a second local stop that is not another long drive.",
    guideSlugs: ["things-to-do-near-crater-of-diamonds", "things-to-do-in-murfreesboro-arkansas", "murfreesboro-family-trip"],
  },
  {
    name: "Telinga's Mexican Restaurant",
    type: "Mexican Restaurant • Local Food",
    category: "food",
    area: "Murfreesboro",
    description:
      "A long-running Murfreesboro restaurant that makes sense for visitors who want a sit-down meal after Crater of Diamonds or before heading back to a cabin or campground.",
    href: "https://telingas.com/",
    guideHref: "/murfreesboro-restaurants",
    phone: "870-285-2418",
    address: "100 E 13th Street, Murfreesboro, AR 71958",
    note: "Check current hours before planning the meal around it.",
    guideSlugs: ["murfreesboro-restaurants", "crater-of-diamonds-guide", "murfreesboro-family-trip", "things-to-do-in-murfreesboro-arkansas"],
  },
  {
    name: "Feed Bin Café",
    type: "Southern Food • Cafe • Local Restaurant",
    category: "food",
    area: "Murfreesboro",
    description:
      "A local cafe known for southern food with a Louisiana-style twist. Useful for visitors who want something more local than a chain stop.",
    href: "https://www.thefeedbincafe.com/",
    guideHref: "/murfreesboro-restaurants",
    note: "Menus and hours can change, so check current details before going.",
    guideSlugs: ["murfreesboro-restaurants", "crater-of-diamonds-guide", "murfreesboro-family-trip", "things-to-do-in-murfreesboro-arkansas"],
  },
  {
    name: "Lotta Bull BBQ",
    type: "BBQ • Nearby Food Stop",
    category: "food",
    area: "Delight",
    description:
      "A nearby barbecue option in Delight that can fit visitors staying longer or driving the area beyond Murfreesboro proper.",
    guideHref: "/murfreesboro-restaurants",
    phone: "580-276-0188",
    address: "110 S 3rd Street, Delight, AR 71940",
    note: "This is outside Murfreesboro, so check hours and distance before sending hungry kids that direction.",
    guideSlugs: ["murfreesboro-restaurants", "day-trips-from-murfreesboro"],
  },
  {
    name: "Diamonds Old West Cabins",
    type: "Cabins • Crater of Diamonds Stays",
    category: "stay",
    area: "Murfreesboro",
    description:
      "A themed cabin option near Crater of Diamonds for families, couples, and small groups who want more character than a plain room.",
    href: "https://www.diamondscabins.com/",
    guideHref: "/murfreesboro-cabins",
    note: "Good fit for travelers who want a stay close to the diamond field. Confirm current availability, pet rules, and group fit before booking.",
    guideSlugs: ["murfreesboro-cabins", "crater-of-diamonds-guide", "murfreesboro-family-trip"],
  },
  {
    name: "Queen of Diamonds Inn",
    type: "Hotel • Group Rooms • Crater Area",
    category: "stay",
    area: "Murfreesboro",
    description:
      "A Murfreesboro hotel option with enough rooms to work for couples, families, and larger groups needing a simple base near the diamond mine.",
    guideHref: "/murfreesboro-cabins",
    phone: "870-285-3105",
    address: "318 N Washington Ave, Murfreesboro, AR 71958",
    note: "A practical choice when a cabin is not the right fit. Check current condition, availability, and amenities before booking.",
    guideSlugs: ["murfreesboro-cabins", "crater-of-diamonds-guide", "murfreesboro-family-trip"],
  },
  {
    name: "Diamond Oaks Inn",
    type: "Bed & Breakfast • Crater Area",
    category: "stay",
    area: "Murfreesboro",
    description:
      "A bed and breakfast style stay close to Crater of Diamonds, useful for visitors who want a quieter lodging base instead of a larger hotel feel.",
    guideHref: "/murfreesboro-cabins",
    phone: "870-285-1535",
    address: "1701 S Washington Ave, Murfreesboro, AR 71958",
    note: "Check current rates, room setup, breakfast details, and policies before booking.",
    guideSlugs: ["murfreesboro-cabins", "crater-of-diamonds-guide", "murfreesboro-family-trip"],
  },
  {
    name: "Murfreesboro RV Park",
    type: "RV Park • Campground • Crater Area",
    category: "stay",
    area: "Murfreesboro",
    description:
      "A local RV option for travelers bringing campers or building a simple Crater of Diamonds and Lake Greeson weekend.",
    guideHref: "/murfreesboro-cabins",
    phone: "870-285-4058",
    address: "1410 S Washington Ave, Murfreesboro, AR 71958",
    note: "Confirm site availability, hookups, pet rules, and trailer space before arriving.",
    guideSlugs: ["murfreesboro-cabins", "crater-of-diamonds-guide", "murfreesboro-family-trip"],
  },
  {
    name: "Diamond Hideaway",
    type: "Vacation Rental • Crater Area",
    category: "stay",
    area: "Murfreesboro",
    description:
      "A vacation-rental style option that can make sense for visitors who want a kitchen, more space, and a place to reset after outdoor days.",
    guideHref: "/murfreesboro-cabins",
    note: "Check the exact location, cleaning fees, cancellation policy, and whether the setup works for your group.",
    guideSlugs: ["murfreesboro-cabins", "murfreesboro-family-trip"],
  },
  {
    name: "Parker Creek Bend Cabins",
    type: "Cabin Stay • Wooded Retreat",
    category: "stay",
    area: "Murfreesboro Area",
    description:
      "A cabin-style stay that fits visitors looking for a quieter wooded base near the broader Murfreesboro and Lake Greeson area.",
    guideHref: "/murfreesboro-cabins",
    note: "Ask about drive time, sleeping setup, pets, trailer parking, and whether the cabin works for your group size.",
    guideSlugs: ["murfreesboro-cabins", "murfreesboro-family-trip", "lake-greeson"],
  },
  {
    name: "Flamingo House Vacation Rental",
    type: "Vacation Rental • Family Stay",
    category: "stay",
    area: "Murfreesboro",
    description:
      "A house-style stay inside Murfreesboro that can work for families wanting space, a kitchen, and a home base between Crater of Diamonds and Lake Greeson.",
    guideHref: "/murfreesboro-cabins",
    note: "Confirm current booking details, rules, fees, pool availability, and distance to the stops you care about.",
    guideSlugs: ["murfreesboro-cabins", "murfreesboro-family-trip"],
  },
  {
    name: "Crater of Diamonds State Park Campground",
    type: "State Park Camping • RV & Tent Sites",
    category: "stay",
    area: "Crater of Diamonds",
    description:
      "A practical option for visitors who want to stay close to the park and keep the trip centered around diamond digging and outdoor time.",
    href: "https://reserve.arkansasstateparks.com/crater-diamonds/camping",
    guideHref: "/murfreesboro-cabins",
    note: "Reserve early when possible and check current campground details through Arkansas State Parks.",
    guideSlugs: ["murfreesboro-cabins", "crater-of-diamonds-guide", "murfreesboro-family-trip"],
  },
  {
    name: "Murfreesboro Hardware",
    type: "Diamond Digging Supplies • Hardware • Local Shop",
    category: "shopping",
    area: "Murfreesboro",
    description:
      "A useful local stop for diamond digging supplies, hardware, housewares, tools, and the kind of odds and ends visitors may forget.",
    guideHref: "/murfreesboro-shopping-supplies",
    phone: "870-285-3491",
    address: "216 S Washington, Murfreesboro, AR 71958",
    note: "Useful before the park if you need supplies, but still check what tools are allowed at Crater of Diamonds.",
    guideSlugs: ["murfreesboro-shopping-supplies", "crater-of-diamonds-guide", "things-to-do-near-crater-of-diamonds"],
  },
  {
    name: "Lovejoy Diamond Screens",
    type: "Diamond Screens • Mining Packages • Visitor Supplies",
    category: "shopping",
    area: "Murfreesboro",
    description:
      "A specialized local stop for diamond screen sets and mining packages for visitors planning to spend real time at the Crater of Diamonds field.",
    guideHref: "/murfreesboro-shopping-supplies",
    phone: "870-925-1771",
    address: "600 S Washington Ave, Murfreesboro, AR 71958",
    note: "Check current rental or purchase options and match them with current park rules before going.",
    guideSlugs: ["murfreesboro-shopping-supplies", "crater-of-diamonds-guide"],
  },
  {
    name: "The Old Store",
    type: "Souvenirs • Candy • Sodas • Town Square Stop",
    category: "shopping",
    area: "Murfreesboro Square",
    description:
      "A small-town stop on the square for candy, sodas, souvenirs, and a slower local browse after the main attractions.",
    guideHref: "/murfreesboro-shopping-supplies",
    address: "23 Courthouse Sq, Murfreesboro, AR 71958",
    note: "Good as a low-pressure local stop when visitors want something easy around town.",
    guideSlugs: ["murfreesboro-shopping-supplies", "things-to-do-near-crater-of-diamonds", "murfreesboro-family-trip"],
  },
  {
    name: "Bear Creek Cycle Trail",
    type: "ATV/UTV Trail • Lake Greeson • Kirby/Daisy Area",
    category: "outdoor",
    area: "Lake Greeson / Kirby / Daisy",
    description:
      "A designated ATV and motorcycle trail system around Lake Greeson that fits riders planning a more rugged outdoor trip near Kirby, Daisy, and Bear Creek.",
    href: "https://www.arkansas.com/state-parks/explore/trails/bear-creek-cycle-trail",
    guideHref: "/bear-creek-cycle-trail",
    note: "Riders need to stay on marked designated trails and check current trail conditions and rules before hauling machines in.",
    guideSlugs: ["bear-creek-cycle-trail", "lake-greeson", "day-trips-from-murfreesboro", "things-to-do-in-murfreesboro-arkansas"],
  },
  {
    name: "Narrows Tailwater and Little Missouri River",
    type: "Trout Fishing • Tailwater • Outdoor Stop",
    category: "outdoor",
    area: "Below Narrows Dam",
    description:
      "A trout-fishing and river stop below Narrows Dam that adds another kind of outdoor trip to the Murfreesboro and Lake Greeson area.",
    href: "https://www.agfc.com/fishing/where-to-fish/trout-waters/narrows-tailwater-little-missouri-river/",
    guideHref: "/little-missouri-river-murfreesboro",
    note: "Check generation schedules, water conditions, fishing regulations, and license requirements before entering the water.",
    guideSlugs: ["little-missouri-river-murfreesboro", "lake-greeson", "day-trips-from-murfreesboro", "things-to-do-in-murfreesboro-arkansas"],
  },
  {
    name: "Dam Area Campground and Narrows Dam",
    type: "Lake Greeson • Camping • Boat Ramp • Swim Beach",
    category: "outdoor",
    area: "Narrows Dam / Lake Greeson",
    description:
      "A Lake Greeson recreation area above Narrows Dam with campground access, lake facilities, and a useful base for visitors focused on the water side of the trip.",
    href: "https://www.recreation.gov/camping/campgrounds/10058234",
    guideHref: "/lake-greeson",
    note: "Check camping availability, recreation rules, lake conditions, and seasonal details before planning around it.",
    guideSlugs: ["lake-greeson", "murfreesboro-cabins", "day-trips-from-murfreesboro"],
  },
];

export const businessCategories: { key: LocalBusinessCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "food", label: "Food" },
  { key: "stay", label: "Places To Stay" },
  { key: "attraction", label: "Attractions" },
  { key: "shopping", label: "Shopping & Supplies" },
  { key: "outdoor", label: "Outdoor" },
  { key: "service", label: "Services" },
];

export function getBusinessesForGuide(slug: string, limit = 4) {
  return localBusinesses.filter((item) => item.guideSlugs.includes(slug)).slice(0, limit);
}
