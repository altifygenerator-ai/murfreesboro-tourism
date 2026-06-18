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
  {
  name: "Hawkins Variety Store",
  type: "Gifts • Sweets • Sandwiches • Town Square Stop",
  category: "shopping",
  area: "Murfreesboro Square",
  description:
    "A long-running town-square stop for gifts, sweets, sandwiches, coffee, pastries, and the kind of small-town browse visitors may enjoy before or after Crater of Diamonds.",
  href: "https://www.facebook.com/Hawkins1943/",
  guideHref: "/murfreesboro-shopping-supplies",
  phone: "870-285-3587",
  address: "51 Courthouse Square, Murfreesboro, AR 71958",
  note: "Good as an easy family stop around the square. Check current hours before building the day around it.",
  guideSlugs: [
    "murfreesboro-shopping-supplies",
    "murfreesboro-restaurants",
    "murfreesboro-family-trip",
    "things-to-do-near-crater-of-diamonds",
  ],
},
{
  name: "Caddo Antiques Gifts and More",
  type: "Antiques • Gifts • Souvenirs • Minerals",
  category: "shopping",
  area: "Murfreesboro Square",
  description:
    "A larger town-square shop with antiques, gifts, souvenirs, minerals, jewelry, home decor, and local browsing that fits well before or after a Crater of Diamonds stop.",
  href: "https://www.caddotc.com/Antique/antiques.html",
  guideHref: "/murfreesboro-shopping-supplies",
  phone: "870-285-2780",
  address: "Murfreesboro Square, Murfreesboro, AR 71958",
  note: "Good for visitors who want a local browse, souvenirs, minerals, or a slower stop around the square.",
  guideSlugs: [
    "murfreesboro-shopping-supplies",
    "things-to-do-near-crater-of-diamonds",
    "things-to-do-in-murfreesboro-arkansas",
  ],
},
{
  name: "Murfreesboro Mini Mall",
  type: "Mining Supplies • Rocks • Gems • Antiques",
  category: "shopping",
  area: "Murfreesboro",
  description:
    "A local shop with diamond mining supplies, rocks, gems, minerals, T-shirts, antiques, vintage items, and souvenirs that can fit visitors planning around Crater of Diamonds.",
  guideHref: "/murfreesboro-shopping-supplies",
  phone: "870-285-2700",
  address: "204 S Washington Ave, Murfreesboro, AR 71958",
  note: "Useful before or after the park, especially for visitors interested in rocks, gems, souvenirs, or digging-related items.",
  guideSlugs: [
    "murfreesboro-shopping-supplies",
    "crater-of-diamonds-guide",
    "things-to-do-near-crater-of-diamonds",
  ],
},
{
  name: "Ace of Diamonds",
  type: "Boutique • Apparel • Shoes • Gifts",
  category: "shopping",
  area: "Murfreesboro",
  description:
    "A locally owned retail shop with apparel, shoes, gifts, accessories, and home goods for visitors who want a more traditional small-town shopping stop.",
  href: "https://aceofdiamondsllc.com/",
  guideHref: "/murfreesboro-shopping-supplies",
  phone: "870-285-3133",
  address: "201 W Main, Murfreesboro, AR 71958",
  note: "Good for visitors looking for clothes, gifts, or a local boutique stop around town.",
  guideSlugs: [
    "murfreesboro-shopping-supplies",
    "murfreesboro-local-businesses",
  ],
},
{
  name: "Pizza Inn",
  type: "Pizza • Carryout • Family Food",
  category: "food",
  area: "Murfreesboro",
  description:
    "A familiar pizza option in Murfreesboro that can work well for families, carryout, and an easier meal after Crater of Diamonds or before heading back to a cabin.",
  href: "https://www.pizzainn.com/locations/murfreesboro-ar/",
  guideHref: "/murfreesboro-restaurants",
  phone: "870-285-4146",
  address: "104 E. 13th Street, Murfreesboro, AR 71958",
  note: "A practical family-food backup. Check current hours and ordering options before planning around it.",
  guideSlugs: [
    "murfreesboro-restaurants",
    "murfreesboro-family-trip",
    "things-to-do-near-crater-of-diamonds",
  ],
},
{
  name: "Sonic Drive-In",
  type: "Drive-In • Fast Food • Drinks",
  category: "food",
  area: "Murfreesboro",
  description:
    "A familiar quick food and drink stop that can be useful for families needing something easy before or after the park, lake, cabin, or road home.",
  href: "https://www.sonicdrivein.com/locations/us/ar/murfreesboro/325-e-13th/store-4307",
  guideHref: "/murfreesboro-restaurants",
  address: "325 E 13th, Murfreesboro, AR 71958",
  note: "Useful as a quick backup when local sit-down hours do not fit the day.",
  guideSlugs: [
    "murfreesboro-restaurants",
    "murfreesboro-family-trip",
  ],
},
{
  name: "Yellow Diamond Inn",
  type: "Hotel • Crater Area • Family Stay",
  category: "stay",
  area: "Murfreesboro",
  description:
    "A hotel option on North Washington Avenue that can work for visitors wanting a simple stay close to town and Crater of Diamonds.",
  href: "https://www.yellowdiamondinn.com/",
  guideHref: "/murfreesboro-cabins",
  phone: "870-285-2131",
  address: "705 N Washington Ave, Murfreesboro, AR 71958",
  note: "Good for travelers who want a hotel-style stay instead of a cabin or RV site. Check current availability and amenities before booking.",
  guideSlugs: [
    "murfreesboro-cabins",
    "crater-of-diamonds-guide",
    "murfreesboro-family-trip",
  ],
},
{
  name: "Samantha’s Timber Inn",
  type: "Themed Rooms • Boutique Inn • Downtown Stay",
  category: "stay",
  area: "Murfreesboro",
  description:
    "A small themed inn in Murfreesboro with customized rooms that can fit visitors wanting something with more character than a standard hotel room.",
  href: "https://samantha-s-timber-inn.mydirectstay.com/",
  guideHref: "/murfreesboro-cabins",
  phone: "870-285-3594",
  address: "24 Hwy 27 North, Murfreesboro, AR 71958",
  note: "Good for visitors who want a unique stay close to town. Check current room options, check-in details, and availability before booking.",
  guideSlugs: [
    "murfreesboro-cabins",
    "murfreesboro-family-trip",
    "things-to-do-near-crater-of-diamonds",
  ],
},
{
  name: "Miner’s Camping & Rock Shop",
  type: "Camping • RV Sites • Rock Shop",
  category: "stay",
  area: "Crater of Diamonds Area",
  description:
    "A camping and rock shop option near Crater of Diamonds that fits visitors who want to stay close to the park and keep the trip focused on digging, rocks, and outdoor time.",
  guideHref: "/murfreesboro-cabins",
  phone: "870-285-2722",
  address: "2235 Hwy 301 S, Murfreesboro, AR 71958",
  note: "Useful for campers and rockhounds. Check current camping, cabin, RV hookup, and shop details before arriving.",
  guideSlugs: [
    "murfreesboro-cabins",
    "murfreesboro-shopping-supplies",
    "crater-of-diamonds-guide",
  ],
},
{
  name: "Diamond Glamping",
  type: "Glamping • Outdoor Stay • Crater Area",
  category: "stay",
  area: "Murfreesboro",
  description:
    "A glamping-style stay near Murfreesboro for visitors who want something outdoorsy but different from a basic tent site, motel, or cabin.",
  href: "https://www.facebook.com/diamondglamping.global/",
  guideHref: "/murfreesboro-cabins",
  note: "A good fit for travelers comparing cabins, camping, and more unique stays. Check current booking details and amenities before planning around it.",
  guideSlugs: [
    "murfreesboro-cabins",
    "murfreesboro-family-trip",
  ],
},
{
  name: "Self Creek Lodge & Marina",
  type: "Lake Greeson • Marina • Lakeside Cottages",
  category: "stay",
  area: "Lake Greeson",
  description:
    "A Lake Greeson lodge and marina option that can fit visitors planning around lake cottages, boating, fishing, and a quieter water-focused stay.",
  href: "https://selfcreek.com/",
  guideHref: "/lake-greeson",
  phone: "870-398-5000",
  address: "4192 Hwy 70, West Kirby, AR 71950",
  note: "Best for visitors focused on the lake side of the trip. Check current lodging, marina, and lake access details before booking.",
  guideSlugs: [
    "lake-greeson",
    "murfreesboro-cabins",
    "day-trips-from-murfreesboro",
  ],
},
{
  name: "Dos Broz by Telinga’s",
  type: "Arcade • Mini Golf • Laser Tag • Family Activity",
  category: "attraction",
  area: "Murfreesboro",
  description:
    "An indoor family activity stop with arcade games, glow mini golf, laser tag, and group-friendly entertainment that can work well when kids need a break from heat, dirt, or lake time.",
  href: "https://telingas.com/",
  guideHref: "/murfreesboro-family-trip",
  phone: "870-285-2199",
  address: "604 N Washington St, Murfreesboro, AR 71958",
  note: "Good as a family backup or evening activity. Check current hours and activity availability before promising it to the kids.",
  guideSlugs: [
    "murfreesboro-family-trip",
    "things-to-do-near-crater-of-diamonds",
    "things-to-do-in-murfreesboro-arkansas",
  ],
},
{
  name: "Daisy State Park",
  type: "Lake Greeson • State Park • Camping • Trails",
  category: "outdoor",
  area: "Daisy / Lake Greeson",
  description:
    "A Lake Greeson state park option for camping, lake access, outdoor recreation, and a wider southwest Arkansas trip beyond Murfreesboro proper.",
  href: "https://www.arkansasstateparks.com/parks/daisy-state-park",
  guideHref: "/lake-greeson",
  note: "Good for visitors building a Lake Greeson or day-trip plan. Check current Arkansas State Parks details before heading that way.",
  guideSlugs: [
    "lake-greeson",
    "day-trips-from-murfreesboro",
    "things-to-do-in-murfreesboro-arkansas",
  ],
},
{
  name: "Diamond Springs Water Park",
  type: "Seasonal Water Park • Crater of Diamonds • Family Stop",
  category: "attraction",
  area: "Crater of Diamonds",
  description:
    "A seasonal water park connected with the Crater of Diamonds experience that can help families cool off when it is open.",
  href: "https://www.arkansasstateparks.com/parks/crater-diamonds-state-park",
  guideHref: "/murfreesboro-family-trip",
  note: "Check current season, hours, rules, and availability before promising it as part of the park day.",
  guideSlugs: [
    "murfreesboro-family-trip",
    "crater-of-diamonds-guide",
    "things-to-do-near-crater-of-diamonds",
  ],
},
{
  name: "Diamonds in the Hole Miniature Golf",
  type: "Mini Golf • Family Activity • Crater Area",
  category: "attraction",
  area: "Murfreesboro",
  description:
    "A miniature golf stop along the main strip through Murfreesboro that can work as an easy family add-on near the Crater of Diamonds travel route.",
  href: "https://www.digmurfreesboro.com/pages/location/?id=34",
  guideHref: "/murfreesboro-family-trip",
  phone: "870-285-3105",
  address: "316 North Washington Avenue, Murfreesboro, AR 71958",
  note: "Good for families wanting a lighter activity before or after the park. Check current hours before planning around it.",
  guideSlugs: [
    "murfreesboro-family-trip",
    "things-to-do-near-crater-of-diamonds",
    "things-to-do-in-murfreesboro-arkansas",
  ],
},
{
  name: "Diamond Speedway",
  type: "Stock Car Racing • Local Recreation",
  category: "attraction",
  area: "Murfreesboro Area",
  description:
    "A local racing attraction that can fit visitors who are in town during race nights or looking for something different beyond the diamond field and lake.",
  guideHref: "/things-to-do-in-murfreesboro-arkansas",
  note: "Schedule-based stop. Check current race dates, times, and weather before planning around it.",
  guideSlugs: [
    "things-to-do-in-murfreesboro-arkansas",
    "day-trips-from-murfreesboro",
  ],
},
{
  name: "Action Fishing Trips",
  type: "Guided Fishing • Lake Greeson",
  category: "outdoor",
  area: "Lake Greeson",
  description:
    "A guided fishing option for visitors who want help planning a Lake Greeson fishing trip instead of trying to figure out the lake on their own.",
  href: "https://actionfishingtrips.com/",
  guideHref: "/lake-greeson",
  note: "Best for anglers planning a real fishing day. Check current guide availability, pricing, season, and trip details before booking.",
  guideSlugs: [
    "lake-greeson",
    "little-missouri-river-murfreesboro",
    "day-trips-from-murfreesboro",
  ],
},
{
  name: "Little Missouri Fly Fishing",
  type: "Fly Fishing • Little Missouri River • Trout Info",
  category: "outdoor",
  area: "Little Missouri River",
  description:
    "A fly-fishing resource tied to the Little Missouri River below Lake Greeson, useful for anglers researching the tailwater side of the trip.",
  href: "https://www.littlemissouriflyfishing.com/",
  guideHref: "/little-missouri-river-murfreesboro",
  note: "Fishing conditions, generation schedules, and regulations matter here. Check official water and fishing sources before entering the water.",
  guideSlugs: [
    "little-missouri-river-murfreesboro",
    "lake-greeson",
    "day-trips-from-murfreesboro",
  ],
},
{
  name: "Dino Dig",
  type: "Family Activity • Rockhounding • Kids Stop",
  category: "attraction",
  area: "Murfreesboro",
  description:
    "A kid-friendly digging and rockhounding-style stop that can fit families looking for another hands-on activity around the Crater of Diamonds trip.",
  guideHref: "/murfreesboro-family-trip",
  note: "Good as a family add-on. Check current hours, pricing, and activity details before planning around it.",
  guideSlugs: [
    "murfreesboro-family-trip",
    "things-to-do-near-crater-of-diamonds",
    "things-to-do-in-murfreesboro-arkansas",
  ],
},
{
  name: "Ceramics by Telinga’s",
  type: "Ceramics • Local Shopping • Family Stop",
  category: "shopping",
  area: "Murfreesboro",
  description:
    "A local ceramics and shopping stop connected with the Telinga’s family of businesses that can fit visitors looking for something hands-on or locally made around town.",
  href: "https://telingas.com/",
  guideHref: "/murfreesboro-shopping-supplies",
  note: "Good as a slower town stop. Check current hours and available activities before planning around it.",
  guideSlugs: [
    "murfreesboro-shopping-supplies",
    "murfreesboro-family-trip",
    "things-to-do-near-crater-of-diamonds",
  ],
},
{
  name: "Gypsy Underground Flea Market",
  type: "Flea Market • Vintage Finds • Local Shopping",
  category: "shopping",
  area: "Murfreesboro",
  description:
    "A local flea market and vintage shopping stop that can fit visitors who like browsing for unusual finds before or after the main attractions.",
  guideHref: "/murfreesboro-shopping-supplies",
  note: "Good for visitors who enjoy flea markets and local browsing. Check current hours before stopping.",
  guideSlugs: [
    "murfreesboro-shopping-supplies",
    "things-to-do-near-crater-of-diamonds",
  ],
},
{
  name: "Southern Specialties Fine Jewelry",
  type: "Jewelry • Gifts • Local Shopping",
  category: "shopping",
  area: "Murfreesboro",
  description:
    "A local jewelry and gift stop that can fit visitors looking for something small-town and locally connected while browsing around Murfreesboro.",
  guideHref: "/murfreesboro-shopping-supplies",
  note: "Good as a local shopping stop. Check current hours before planning around it.",
  guideSlugs: [
    "murfreesboro-shopping-supplies",
    "murfreesboro-local-businesses",
  ],
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
