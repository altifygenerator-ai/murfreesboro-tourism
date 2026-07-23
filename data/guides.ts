import { imagePaths } from "@/data/site";

export type GuideStop = {
  title: string;
  label: string;
  text: string;
  href?: string;
};

export type GuideSection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export type GuidePageData = {
  slug: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    image: string;
  };
  intro: GuideSection;
  sections: GuideSection[];
  stops: GuideStop[];
  checkBefore: string[];
  goodFor: string[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
  cta: {
    title: string;
    text: string;
  };
  planningTable?: {
    eyebrow: string;
    title: string;
    intro: string;
    columns: string[];
    rows: string[][];
  };
  sourceLinks?: { title: string; href: string; text: string }[];
};

export const thingsToDoGuide: GuidePageData = {
  slug: "things-to-do-in-murfreesboro-arkansas",
  metadata: {
    title: "Things To Do in Murfreesboro, Arkansas | Crater of Diamonds & Lake Greeson",
    description:
      "A practical guide to things to do in Murfreesboro, Arkansas, including Crater of Diamonds, Lake Greeson, Ka-Do-Ha, Dino Dig, restaurants, cabins, family stops, and nearby day trips.",
    keywords: [
      "things to do in Murfreesboro Arkansas",
      "Murfreesboro Arkansas attractions",
      "Crater of Diamonds",
      "Lake Greeson",
      "Ka-Do-Ha Indian Village",
      "Dino Dig Murfreesboro Arkansas",
      "Swaha Lodge N Marina",
      "Murfreesboro family trip",
    ],
  },
  hero: {
    eyebrow: "Things To Do in Murfreesboro",
    title: "Diamonds, lake days, small-town food stops, and room to slow down.",
    text:
      "Murfreesboro is not the kind of place where you need a packed schedule every hour. Come for Crater of Diamonds, give yourself time for Lake Greeson, then work in the local stops that actually make the day easier.",
    image: imagePaths.downtown,
  },
  intro: {
    eyebrow: "Start Here",
    title: "Most Murfreesboro trips work best when you pick one main thing first.",
    paragraphs: [
      "For a lot of folks, that main thing is Crater of Diamonds State Park. It is the reason the kids are excited, the stop people ask about, and the one place around here that really does not feel like everywhere else.",
      "The part people miss is how much energy that one stop can take. A few hours in the field can mean dirt, heat, hungry kids, and everybody needing a break before the next thing. That is why Murfreesboro works better with a loose plan than a packed itinerary.",
      "If you are staying overnight, the trip gets easier. You can let one day be the diamond field, let another part of the weekend be Lake Greeson, and still leave room for food, cabins, supplies, or a drive toward Glenwood, Mount Ida, or Hot Springs if the trip stretches that far.",
    ],
  },
  sections: [
    {
      eyebrow: "Trip Style",
      title: "Think diamonds first, lake second, and keep the rest simple.",
      paragraphs: [
        "Crater of Diamonds is what makes Murfreesboro stand out. Plan it like an outdoor day. Bring water, expect dirt, and do not treat it like a quick stop where everyone stays clean and patient.",
        "Lake Greeson gives the trip a slower side. It is for fishing, boating, campground time, lake wind, wet towels, and families who want something more relaxed after the diamond field. It is worth giving the lake its own space instead of squeezing it into whatever time is left.",
      ],
    },
    {
      eyebrow: "Local Pace",
      title: "Food, cleanup, and a backup plan matter more than one more stop.",
      paragraphs: [
        "After the field, most groups need a reset. That might be lunch in town, a stop back at the cabin, a cold drink, dry clothes, or just ten quiet minutes before deciding if the lake still sounds good.",
        "That is the honest way to plan Murfreesboro. It is a good Arkansas trip when you let it be outdoorsy, a little messy, and simple enough that the day does not turn into work.",
      ],
    },
  ],
  stops: [
    {
      title: "Crater of Diamonds State Park",
      label: "Diamond Digging • State Park",
      text:
        "The main reason most visitors come to Murfreesboro. Plan for sun, dirt, water, and realistic expectations. Finding something is exciting, but the search itself is the memory.",
      href: "/crater-of-diamonds-guide",
    },
    {
      title: "Lake Greeson",
      label: "Lake Day • Fishing • Boating",
      text:
        "The best second anchor for a Murfreesboro trip. It fits fishing weekends, boat days, campgrounds, cabins, and families who want water after the diamond field.",
      href: "/lake-greeson",
    },
    {
      title: "Ka-Do-Ha Indian Village",
      label: "Museum • Archeology • Family Stop",
      text:
        "A local history and hands-on stop near Murfreesboro that can work well when your group wants something different without driving far from town.",
      href: "/things-to-do-near-crater-of-diamonds",
    },
    {
      title: "Dino Dig",
      label: "Indoor Kids Dig • Gemstones • Backup Plan",
      text:
        "A climate-controlled family stop where kids can dig in sand for treasures and polished stones around dinosaur displays. It is a strong backup when heat, rain, or tired kids make another outdoor stop harder.",
      href: "https://www.arkansas.com/experiences/discover/attraction-listings/dino-dig",
    },
    {
      title: "Swaha Lodge N Marina and Dam Grill",
      label: "Lake Greeson • Marina • Seasonal Food",
      text:
        "A useful Lake Greeson name to know for cabins, marina plans, boat questions, fishing trips, and seasonal lake food. Check current details before counting on a meal or rental.",
      href: "/lake-greeson",
    },
  ],
  checkBefore: [
    "Crater of Diamonds hours, admission, tool rules, and field conditions",
    "Heat, rain, mud, dust, and how much water your group will need",
    "Lake Greeson access, boat ramps, swimming areas, and weather",
    "Marina hours, cabin availability, and boat rental details",
    "Restaurant hours, especially smaller local spots and seasonal lake food",
    "Cabin, campground, and RV availability on summer and holiday weekends",
  ],
  goodFor: [
    "Families planning a Crater of Diamonds trip",
    "Cabin guests who want a lake and outdoor weekend",
    "Campers and RV travelers using the Murfreesboro area as a base",
    "Anglers and boaters spending time around Lake Greeson",
    "Visitors linking Murfreesboro with Glenwood, Mount Ida, or Hot Springs",
  ],
  faqs: [
    {
      question: "What are the main things to do in Murfreesboro, Arkansas?",
      answer:
        "Most visitors plan around Crater of Diamonds State Park, Lake Greeson, Swaha Lodge N Marina, Ka-Do-Ha Indian Village, Dino Dig, local restaurants, cabins, camping, and nearby drives toward Glenwood, Mount Ida, or Hot Springs.",
    },
    {
      question: "Is Murfreesboro good for a weekend trip?",
      answer:
        "Yes. It works best as a weekend trip when you give Crater of Diamonds its own time, add Lake Greeson if you want water or fishing, and choose lodging that makes cleanup and downtime easy.",
    },
  ],
  related: [
    { href: "/crater-of-diamonds-guide", label: "Crater Guide" },
    { href: "/things-to-do-near-crater-of-diamonds", label: "Near Crater" },
    { href: "/lake-greeson", label: "Lake Greeson" },
    { href: "/murfreesboro-family-trip", label: "Family Trip" },
    { href: "/murfreesboro-restaurants", label: "Restaurants" },
  ],
  cta: {
    title: "Plan the trip around the day you actually want, not a checklist.",
    text:
      "Use the restaurants, cabins, Lake Greeson, Crater of Diamonds, and nearby day trip pages to build a Murfreesboro trip that feels easy to follow once you get here.",
  },
};

export const craterGuide: GuidePageData = {
  slug: "crater-of-diamonds-guide",
  metadata: {
    title: "Crater of Diamonds Guide | Murfreesboro, Arkansas Trip Planning",
    description:
      "A practical Crater of Diamonds State Park guide for Murfreesboro visitors, with notes for diamond digging, kids, heat, what to bring, nearby food, Lake Greeson, and family trips.",
    keywords: [
      "Crater of Diamonds guide",
      "Crater of Diamonds State Park",
      "diamond digging Arkansas",
      "Murfreesboro Arkansas diamonds",
      "what to bring to Crater of Diamonds",
      "things to do near Crater of Diamonds",
    ],
  },
  hero: {
    eyebrow: "Crater of Diamonds Guide",
    title: "Come ready for dirt, sun, slow searching, and a story worth telling.",
    text:
      "Crater of Diamonds is the stop Murfreesboro is known for. It is also a real outdoor day, so the trip goes better when you plan for heat, mud or dust, tired kids, and a good meal afterward.",
    image: imagePaths.crater,
  },
  intro: {
    eyebrow: "Before You Go",
    title: "The field is the draw, but the day is better when you plan the basics.",
    paragraphs: [
      "Crater of Diamonds State Park is famous because visitors can search the field and keep the rocks, minerals, and gemstones they find. That makes it a rare Arkansas stop and the main reason a lot of families make the drive to Murfreesboro.",
      "The field can also be hot, muddy after rain, dusty when it is dry, and slower than people expect. If you are bringing kids, think of it like heading outside to work and explore for a while, not like walking through an indoor attraction.",
      "Finding a diamond would be something to talk about forever, but the trip does not have to depend on that. The better way to frame it is treasure hunting, learning, digging, and making a memory you cannot really copy anywhere else.",
    ],
  },
  sections: [
    {
      eyebrow: "Realistic Expectations",
      title: "Do not make a diamond the only way the day can be a win.",
      paragraphs: [
        "Some visitors leave with something special. Plenty leave with dirty shoes, a bucket of rocks, and a good story. That is still a real trip, especially for kids who have never done anything like it.",
        "Bring patience, water, hats, sunscreen, and a backup plan. When everyone is ready to be done, Murfreesboro has food, cabins, Lake Greeson, and nearby stops that can help the rest of the day recover.",
      ],
    },
    {
      eyebrow: "After The Field",
      title: "Know where you are going next before everyone is worn out.",
      paragraphs: [
        "The worst time to decide on lunch is after everybody is hot, dirty, and standing around the parking lot. Before you go in, know your likely next move: food, cabin, campground, lake, or home.",
        "With younger kids, that simple plan can save the afternoon. A clean shirt, cold drink, easy meal, and a place to sit may matter more than adding another attraction.",
      ],
    },
  ],
  stops: [
    {
      title: "Diamond Field",
      label: "Search • Sift • Keep What You Find",
      text:
        "The main experience at the park. Check current park rules for tools, rentals, field access, admission, and weather before you build the day around it.",
      href: "https://www.arkansas.com/state-parks/explore/parks/crater-of-diamonds-state-park",
    },
    {
      title: "Diamond Springs Water Park",
      label: "Seasonal Cooling Off • Kids",
      text:
        "When it is open, the water park can make a hot Crater day easier for families. Check the current season, hours, and rules before promising it to the kids.",
      href: "https://www.arkansas.com/state-parks/explore/parks/crater-of-diamonds-state-park",
    },
    {
      title: "Lake Greeson",
      label: "After-Digging Lake Option",
      text:
        "A strong second-day plan or a slower afternoon idea if your group still has energy. Check access, weather, and food options before heading that way.",
      href: "/lake-greeson",
    },
  ],
  checkBefore: [
    "Park hours, admission, and current digging rules",
    "Weather, mud, dust, and field conditions",
    "Water park season and hours if that is part of the plan",
    "Which tools can be brought, rented, or used on site",
    "Water, snacks, hats, sunscreen, and dirt-ready clothes",
    "Food hours and lodging check-in details after the field",
  ],
  goodFor: [
    "Families wanting a hands-on Arkansas experience",
    "Rockhounds, curious kids, and anyone who likes unusual state parks",
    "Cabin weekends with one main activity planned",
    "Visitors who understand the day may be hot, dirty, and slow",
    "People who care more about the experience than a guaranteed find",
  ],
  faqs: [
    {
      question: "Can visitors keep diamonds found at Crater of Diamonds?",
      answer:
        "Yes. Crater of Diamonds is known for allowing visitors to search and keep what they find. Check the park's current rules before going, especially if you are bringing tools or planning around rentals.",
    },
    {
      question: "What should I bring to Crater of Diamonds?",
      answer:
        "Bring water, sunscreen, hats, clothes and shoes that can get dirty, snacks for kids, patience, and a plan for food or rest once the field has worn everyone down.",
    },
  ],
  related: [
    { href: "/things-to-do-near-crater-of-diamonds", label: "Things Nearby" },
    { href: "/murfreesboro-family-trip", label: "Family Trip Guide" },
    { href: "/murfreesboro-restaurants", label: "Food After Digging" },
    { href: "/murfreesboro-shopping-supplies", label: "Supplies" },
    { href: "/murfreesboro-cabins", label: "Cabins & Stays" },
  ],
  cta: {
    title: "Let Crater of Diamonds be the anchor, then keep the rest of the day simple.",
    text:
      "Use the nearby things to do, restaurants, cabins, Lake Greeson, and family trip guides to plan what happens after everyone is done digging.",
  },
};

export const nearCraterGuide: GuidePageData = {
  slug: "things-to-do-near-crater-of-diamonds",
  metadata: {
    title: "Things To Do Near Crater of Diamonds | Murfreesboro Arkansas Guide",
    description:
      "Find things to do near Crater of Diamonds State Park in Murfreesboro, Arkansas, including Lake Greeson, Ka-Do-Ha Indian Village, Dino Dig, restaurants, cabins, family stops, and nearby day trips.",
    keywords: [
      "things to do near Crater of Diamonds",
      "near Crater of Diamonds State Park",
      "Murfreesboro Arkansas things to do",
      "Lake Greeson near Crater of Diamonds",
      "Ka-Do-Ha Indian Village",
      "Dino Dig near Crater of Diamonds",
    ],
  },
  hero: {
  eyebrow: "Near Crater of Diamonds",
  title: "Good nearby stops for after the field, before dinner, or a slower second day.",
  text:
    "Once the diamond digging is planned, the rest of the trip comes down to food, shade, water, places to stay, and a few local stops that fit the energy your group has left.",
  image: imagePaths.nearbyCrater,
},
  intro: {
    eyebrow: "After The Dig",
    title: "Crater of Diamonds is the anchor, but it does not have to be the whole trip.",
    paragraphs: [
      "A lot of people come to Murfreesboro for one reason: to search the diamond field. That is enough reason by itself. But once the field is done, you may still have hungry kids, dirty shoes, a half day of daylight, or an overnight stay to fill.",
      "The right nearby stop depends on the day. Some groups need a meal and a cabin. Some want the lake. Some want one shorter local stop before heading home. The best plan is the one that does not make everyone more tired than they already are.",
    ],
  },
  sections: [
    {
      eyebrow: "Keep It Simple",
      title: "One good add-on is usually better than five rushed stops.",
      paragraphs: [
        "The diamond field can take a lot out of a group, especially in the heat. If you stack too much after it, the day starts to feel like a chore instead of a trip.",
        "A better plan might be Crater of Diamonds, lunch, and a Lake Greeson stop. Or Crater of Diamonds, Dino Dig or Ka-Do-Ha, and back to the cabin. That is enough for most families.",
      ],
    },
    {
      eyebrow: "Nearby Water",
      title: "Lake Greeson is the strongest nearby add-on when your group wants water.",
      paragraphs: [
        "Lake Greeson can be a full second day or a lighter afternoon if you planned ahead. It works best when you already know where you are going, what is open, and whether your group has the energy for water after dirt.",
      ],
    },
  ],
  stops: [
    {
      title: "Lake Greeson",
      label: "Lake Day • Swimming • Fishing",
      text:
        "The best direction when your group wants to trade dirt for water. Check access, weather, swimming areas, and marina details before heading out.",
      href: "/lake-greeson",
    },
    {
      title: "Ka-Do-Ha Indian Village",
      label: "Museum • Archeology • Shorter Stop",
      text:
        "A local history and hands-on stop near town that can work well when you want one more activity without turning the afternoon into a long drive.",
      href: "https://www.arkansas.com/experiences/discover/attraction-listings/ka-do-ha-indian-village",
    },
    {
      title: "Dino Dig",
      label: "Indoor Kids Activity • Gem Dig • Short Add-On",
      text:
        "A practical family add-on near the Crater trip, especially when younger kids still want to dig but parents need shade, air conditioning, and something easier than another outdoor stop.",
      href: "https://www.arkansas.com/experiences/discover/attraction-listings/dino-dig",
    },
    {
      title: "Murfreesboro Restaurants",
      label: "Food • Reset • Easy Meal",
      text:
        "Pick food before everyone is past hungry. Small-town hours can vary, so have a first choice and a backup before the field is done.",
      href: "/murfreesboro-restaurants",
    },
    {
      title: "Cabins, RV Parks, and Stays",
      label: "Clean Up • Rest • Weekend Base",
      text:
        "A nearby stay makes the trip easier when you are dealing with dirt, wet towels, kids, pets, fishing gear, or an early start the next morning.",
      href: "/murfreesboro-cabins",
    },
  ],
  checkBefore: [
    "Crater of Diamonds field conditions, hours, and admission",
    "Restaurant hours after your digging window",
    "Lake Greeson access, weather, and swimming conditions",
    "Whether your group needs a meal, nap, water break, or cabin reset",
    "Ka-Do-Ha current hours, admission, and season details",
    "Dino Dig current hours, pricing, and activity details",
    "How much extra driving your group really wants after digging",
  ],
  goodFor: [
    "Families looking for one extra stop after Crater of Diamonds",
    "Parents who want an indoor backup after outdoor digging",
    "Visitors staying overnight around Murfreesboro",
    "People pairing a diamond trip with lake time",
    "Cabin guests planning two slower days instead of one rushed day",
  ],
  faqs: [
    {
      question: "What is close to Crater of Diamonds?",
      answer:
        "Lake Greeson, Ka-Do-Ha Indian Village, Dino Dig, Murfreesboro restaurants, cabins, campgrounds, RV stays, and nearby day trips toward Glenwood and Mount Ida can all fit around a Crater of Diamonds trip.",
    },
    {
      question: "Should we add Lake Greeson after Crater of Diamonds?",
      answer:
        "Lake Greeson can be a good add-on if your group still has energy and you checked access, weather, and food details. For families with younger kids, it may work better as a separate day.",
    },
  ],
  related: [
    { href: "/crater-of-diamonds-guide", label: "Crater Guide" },
    { href: "/lake-greeson", label: "Lake Greeson" },
    { href: "/murfreesboro-family-trip", label: "Family Trip" },
    { href: "/murfreesboro-restaurants", label: "Restaurants" },
    { href: "/murfreesboro-shopping-supplies", label: "Supplies" },
  ],
  cta: {
    title: "After the field, make the rest of the day easier on purpose.",
    text:
      "Use the restaurants, cabins, Lake Greeson, and family trip guides to pick the next stop before everybody is tired and hungry.",
  },
};

export const lakeGreesonGuide: GuidePageData = {
  slug: "lake-greeson",
  metadata: {
    title: "Lake Greeson Arkansas Guide | Murfreesboro Lake Days, Swaha, Fishing & Cabins",
    description:
      "Plan a Lake Greeson trip near Murfreesboro, Arkansas with practical notes on boating, fishing, swimming, camping, Swaha Lodge N Marina, Dam Grill, cabins, and Crater of Diamonds weekends.",
    keywords: [
      "Lake Greeson Arkansas",
      "Lake Greeson Murfreesboro Arkansas",
      "Swaha Lodge N Marina",
      "Dam Grill Lake Greeson",
      "Lake Greeson cabins",
      "Lake Greeson fishing",
      "Lake Greeson camping",
    ],
  },
  hero: {
    eyebrow: "Lake Greeson Guide",
    title: "The lake side of Murfreesboro is worth planning on its own.",
    text:
      "Lake Greeson gives the Murfreesboro trip fishing, boating, swimming, cabins, campgrounds, marina stops, and a slower kind of day after the diamond field.",
    image: imagePaths.lake,
  },
  intro: {
    eyebrow: "Lake Day Planning",
    title: "Lake Greeson is more than a quick add-on to Crater of Diamonds.",
    paragraphs: [
      "For some visitors, Lake Greeson is the main reason to come this way. For others, it is the second half of a Crater of Diamonds weekend. Either way, it gives Murfreesboro a water-and-woods side that is worth giving some room in the plan.",
      "This is where you think about fishing rods, boat ramps, towels, kids cooling off, lake cabins, RV sites, campground rules, and whether your group wants a slower outdoor weekend instead of a one-stop day trip.",
    ],
  },
  sections: [
    {
      eyebrow: "Swaha Side",
      title: "Swaha is a good first name to check when you are figuring out the lake side.",
      paragraphs: [
        "Swaha Lodge N Marina gives visitors a clear starting point for cabins, marina details, boat rental questions, lake access, and Dam Grill when it is in season.",
        "Still, lake businesses run on real-world details. Weather, seasons, hours, rentals, and availability can change. Check before you count on one meal, one rental, or one arrival time.",
      ],
    },
    {
      eyebrow: "Trip Fit",
      title: "Lake Greeson works better when you stop trying to rush it.",
      paragraphs: [
        "You can pair Lake Greeson with Crater of Diamonds, but a real lake day needs space. Give yourself time for parking, gear, weather, wet clothes, food, and the normal slow pace that comes with being around the water.",
      ],
    },
  ],
  stops: [
    {
      title: "Swaha Lodge N Marina",
      label: "Marina • Cabins • Lake Greeson",
      text:
        "A key lake-area stop for lodging, marina questions, boat rental details, fishing trips, and planning a weekend close to the water.",
      href: "https://swahacabins.com/",
    },
    {
      title: "Dam Grill",
      label: "Seasonal Lake Food",
      text:
        "A seasonal food stop at Swaha that fits best when you are already spending time around the marina or lake. Check current hours before making it your only plan.",
      href: "https://swahacabins.com/dam-grill/",
    },
    {
      title: "Narrows Dam and Lake Access Areas",
      label: "Lake Access • Scenery • Day Use",
      text:
        "Worth checking when you are looking at boat ramps, day-use areas, swimming access, tailwater stops, or a simple afternoon near the water.",
      href: "https://www.mvk.usace.army.mil/Missions/Recreation/Lake-Greeson/",
    },
  ],
  checkBefore: [
    "Lake levels, weather, and wind",
    "Boat ramp, day-use, and swimming access",
    "Fishing rules, licenses, and trout permit needs where applicable",
    "Marina hours, boat rental availability, and fuel or supply details",
    "Dam Grill seasonal hours and food availability",
    "Cabin, campground, and RV availability around busy weekends",
  ],
  goodFor: [
    "Fishing trips and boat weekends",
    "Families wanting water after Crater of Diamonds",
    "Cabin and RV stays near the lake",
    "Visitors who want a slower outdoor day",
    "People building a southwest Arkansas weekend around water and woods",
  ],
  faqs: [
    {
      question: "Is Lake Greeson close to Murfreesboro?",
      answer:
        "Yes. Lake Greeson is one of the main outdoor anchors near Murfreesboro, but the exact drive depends on which ramp, campground, marina, or lake access point you are using.",
    },
    {
      question: "Can Lake Greeson and Crater of Diamonds fit the same trip?",
      answer:
        "Yes. They pair well for a weekend, especially if you let each one have its own space instead of trying to rush both into one afternoon.",
    },
  ],
  related: [
    { href: "/crater-of-diamonds-guide", label: "Crater Guide" },
    { href: "/murfreesboro-cabins", label: "Cabins & Stays" },
    { href: "/murfreesboro-restaurants", label: "Restaurants" },
    { href: "/little-missouri-river-murfreesboro", label: "Little Missouri" },
    { href: "/bear-creek-cycle-trail", label: "Bear Creek Trail" },
  ],
  cta: {
    title: "Treat the lake like part of the trip, not filler between attractions.",
    text:
      "Use this with the cabin, restaurant, Crater of Diamonds, Little Missouri, and Bear Creek pages to build a lake day that fits your group.",
  },
};

export const cabinsGuide: GuidePageData = {
  slug: "murfreesboro-cabins",
  metadata: {
    title: "Murfreesboro Arkansas Cabins, RV Parks & Places To Stay Near Crater of Diamonds",
    description:
      "Find practical lodging tips for Murfreesboro, Arkansas, including cabins near Crater of Diamonds, Lake Greeson stays, Swaha Lodge N Marina, RV parks, campgrounds, and family trip planning.",
    keywords: [
      "Murfreesboro Arkansas cabins",
      "cabins near Crater of Diamonds",
      "Lake Greeson cabins",
      "Murfreesboro RV parks",
      "places to stay near Crater of Diamonds",
      "Swaha Lodge N Marina cabins",
    ],
  },
  hero: {
    eyebrow: "Cabins & Places To Stay",
    title: "Pick a stay that can handle dirt, water, gear, and tired people.",
    text:
      "The right place to stay can make a Murfreesboro trip much easier, especially when your plans include Crater of Diamonds, Lake Greeson, kids, pets, fishing gear, wet clothes, or a trailer.",
    image: imagePaths.cabins,
  },
  intro: {
    eyebrow: "Lodging Guide",
    title: "Think about what your trip needs before you book the cheapest place.",
    paragraphs: [
      "A Crater of Diamonds trip is not always clean and tidy. People come back dusty, hot, muddy, or worn out. If Lake Greeson is part of the plan, now you have wet towels, coolers, fishing gear, or boat parking to think about too.",
      "Families may want space, a kitchen, laundry, and a place where kids can unwind. Anglers may care more about parking, freezer space, boat access, and how close they are to the lake. RV travelers need to check hookups, site rules, and availability before making the drive.",
    ],
  },
  sections: [
    {
      eyebrow: "Stay Style",
      title: "Cabins, campgrounds, RV sites, and lake stays all solve different problems.",
      paragraphs: [
        "If the diamond field is the main plan, staying closer to Murfreesboro keeps the day simple. If Lake Greeson is the heart of the trip, look closer to the lake and marina side. If you are trying to include Glenwood, Mount Ida, or Hot Springs too, choose a base that does not put you in the vehicle all weekend.",
      ],
    },
    {
      eyebrow: "Check First",
      title: "Ask the boring questions before you book.",
      paragraphs: [
        "Small-town lodging can be exactly what you need, but details matter. Ask about pet rules, cleaning fees, boat and trailer parking, check-in times, cancellation rules, stairs, sleeping layout, and whether the exact unit fits your group.",
      ],
    },
  ],
  stops: [
    {
      title: "Swaha Lodge N Marina",
      label: "Lake Greeson Cabins • Marina",
      text:
        "A strong place to check when your trip is built around Lake Greeson, fishing, boat rentals, marina access, or staying close to the water.",
      href: "https://swahacabins.com/",
    },
    {
      title: "Crater-area rentals",
      label: "Cabins • Homes • Family Stays",
      text:
        "A good direction for groups that want more room, a kitchen, laundry, and an easier reset after digging at the diamond field.",
      href: "https://www.google.com/search?q=cabins+near+Crater+of+Diamonds+Murfreesboro+Arkansas",
    },
    {
      title: "Campgrounds and RV sites",
      label: "RV • Camping • Outdoor Weekends",
      text:
        "A good fit for outdoor travelers who want to stay closer to the lake, the park, or the broader Murfreesboro area. Busy weekends can book up, so check early.",
      href: "https://www.google.com/search?q=Murfreesboro+Arkansas+RV+parks+campgrounds+Crater+of+Diamonds",
    },
  ],
  checkBefore: [
    "Exact location compared to Crater of Diamonds, Lake Greeson, and town food",
    "Pet rules, cleaning fees, and minimum stay requirements",
    "Boat, trailer, UTV, and extra vehicle parking",
    "Check-in time, late arrival rules, and cancellation details",
    "Kitchen, laundry, sleeping layout, stairs, and outdoor space",
    "Summer, holiday, and tournament-weekend availability",
  ],
  goodFor: [
    "Families needing space and cleanup time",
    "Fishing trips with boats, coolers, and gear",
    "Crater of Diamonds visitors staying overnight",
    "Lake Greeson weekends with water and outdoor time",
    "RV travelers, campers, and groups hauling trailers",
  ],
  faqs: [
    {
      question: "Where should I stay for Crater of Diamonds?",
      answer:
        "Look for lodging close enough to Murfreesboro that you can get to the park early, clean up after the field, and still reach food or Lake Greeson without turning the day into a long drive.",
    },
    {
      question: "Should I stay near Lake Greeson or near town?",
      answer:
        "Stay near Lake Greeson if fishing, boating, or lake time is the main plan. Stay closer to town if Crater of Diamonds, restaurants, and shorter drives matter more.",
    },
  ],
  related: [
    { href: "/crater-of-diamonds-guide", label: "Crater Guide" },
    { href: "/lake-greeson", label: "Lake Greeson" },
    { href: "/murfreesboro-family-trip", label: "Family Trip" },
  ],
  cta: {
    title: "Book the stay that fits the messy parts of the trip.",
    text:
      "Use the Crater, Lake Greeson, restaurants, and family trip guides to decide whether you need town convenience, lake access, RV space, or a cabin with room to reset.",
  },
};

export const restaurantsGuide: GuidePageData = {
  slug: "murfreesboro-restaurants",
  metadata: {
    title: "Murfreesboro Arkansas Restaurants | Food Near Crater of Diamonds & Lake Greeson",
    description:
      "A practical guide to restaurants in Murfreesboro, Arkansas, food near Crater of Diamonds, Lake Greeson meal planning, Telinga’s, Feed Bin Café, Dam Grill, and family trip food tips.",
    keywords: [
      "Murfreesboro Arkansas restaurants",
      "restaurants near Crater of Diamonds",
      "food near Crater of Diamonds",
      "Telinga’s Murfreesboro",
      "Feed Bin Café Murfreesboro",
      "Dam Grill Lake Greeson",
    ],
  },
  hero: {
    eyebrow: "Restaurants & Food",
    title: "Know where you might eat before everybody is hot, dusty, and done.",
    text:
      "Food around Murfreesboro is about timing. Pick a place before the diamond field wears everyone down, and keep a backup in mind for lake days, seasonal hours, and busy weekends.",
    image: imagePaths.damGrill,
  },
  intro: {
    eyebrow: "Food Guide",
    title: "A simple meal plan matters more here than a long restaurant list.",
    paragraphs: [
      "After a few hours at Crater of Diamonds, people usually want cold drinks, air conditioning, and food that does not require a big debate. That is not the time to start scrolling and hoping every place is open.",
      "Murfreesboro has local food options, but it is still a small town. Hours can vary, lake food can be seasonal, and busy weekends can change the feel of a place fast. Pick a first choice, keep a backup, and check current details before the day gets away from you.",
    ],
  },
  sections: [
    {
      eyebrow: "Timing",
      title: "Eat earlier than you think if kids are involved.",
      paragraphs: [
        "Crater of Diamonds can wear people down fast in warm weather. A late lunch might sound fine at breakfast, but by the time everyone is dirty and tired, an earlier food stop can save the afternoon.",
      ],
    },
    {
      eyebrow: "Lake Food",
      title: "Dam Grill belongs with the Lake Greeson part of the trip.",
      paragraphs: [
        "If you are already around Swaha and Lake Greeson, Dam Grill can fit the lake-day feel. Because it is seasonal, check ahead instead of treating it like a guaranteed everyday dinner plan.",
      ],
    },
  ],
  stops: [
    {
      title: "Telinga’s Mexican Restaurant",
      label: "Mexican Food • Local Restaurant",
      text:
        "A familiar local restaurant name to check when you want a sit-down meal around Murfreesboro after the park or before settling in for the evening.",
      href: "https://telingas.com/",
    },
    {
      title: "Feed Bin Café",
      label: "Cafe • Southern Food • Local Stop",
      text:
        "A local cafe option for a simpler meal in town. Check current hours before planning around it, especially around slower seasons or odd meal times.",
      href: "https://www.thefeedbincafe.com/",
    },
    {
      title: "Dam Grill",
      label: "Seasonal Lake Food • Swaha",
      text:
        "A seasonal Lake Greeson food stop that makes the most sense when you are already staying, boating, or spending time around Swaha.",
      href: "https://swahacabins.com/dam-grill/",
    },
  ],
  checkBefore: [
    "Current hours and days open",
    "Whether lake food is in season",
    "Group size and wait time during busy weekends",
    "Backup food options if your first choice is closed",
    "Distance from the restaurant to your cabin, campground, lake access, or Crater of Diamonds",
  ],
  goodFor: [
    "Families coming from Crater of Diamonds",
    "Lake Greeson visitors looking for a nearby meal",
    "Cabin guests who want dinner figured out before dark",
    "Travelers who would rather eat local than rely on chain stops",
  ],
  faqs: [
    {
      question: "Are there restaurants near Crater of Diamonds?",
      answer:
        "Yes. Murfreesboro has local restaurant options near the Crater of Diamonds travel route, but it is smart to check current hours before planning around one specific place.",
    },
    {
      question: "Where should we eat around Lake Greeson?",
      answer:
        "Dam Grill at Swaha is one lake-area option to check when it is in season. Verify current hours and keep a backup plan, especially if you are driving out hungry.",
    },
  ],
  related: [
    { href: "/crater-of-diamonds-guide", label: "Crater Guide" },
    { href: "/lake-greeson", label: "Lake Greeson" },
    { href: "/murfreesboro-cabins", label: "Cabins & Stays" },
  ],
  cta: {
    title: "Do not make dinner the part of the trip that falls apart.",
    text:
      "Use the restaurant guide with the Crater, Lake Greeson, lodging, and family trip pages so your group has a realistic food plan before everyone is worn out.",
  },
};

export const familyGuide: GuidePageData = {
  slug: "murfreesboro-family-trip",
  metadata: {
    title: "Murfreesboro Family Trip Guide | Crater of Diamonds & Lake Greeson",
    description:
      "Plan a family trip to Murfreesboro, Arkansas with practical tips for Crater of Diamonds, Lake Greeson, kids, cabins, food, heat, water, Dino Dig, Ka-Do-Ha, and nearby day trips.",
    keywords: [
      "Murfreesboro Arkansas family trip",
      "Crater of Diamonds with kids",
      "Lake Greeson family trip",
      "family things to do in Murfreesboro Arkansas",
      "Arkansas family day trip",
      "Dino Dig Murfreesboro",
    ],
  },
  hero: {
    eyebrow: "Family Trip Guide",
    title: "A good family trip here needs water, snacks, and a plan that can bend.",
    text:
      "Murfreesboro can be a great family weekend when you plan for the real stuff: dirt, heat, wet clothes, hungry kids, lake time, and knowing when to call the day good.",
    image: imagePaths.family,
  },
  intro: {
    eyebrow: "Family Planning",
    title: "Kids can love Murfreesboro, but the day needs room to breathe.",
    paragraphs: [
      "Crater of Diamonds gives kids something hands-on and different. Lake Greeson gives them water and space. A cabin or campground gives everyone a place to reset. Put those pieces together the right way, and Murfreesboro can be a solid family weekend.",
      "The trick is not trying to do every stop. Pick the main activity, build in food and cleanup, then use the lake, Dino Dig, Ka-Do-Ha, or a short local stop only if the group still has energy.",
    ],
  },
  sections: [
    {
      eyebrow: "Kids And Heat",
      title: "The diamond field is more fun when you plan for the rough parts.",
      paragraphs: [
        "Bring water, hats, sunscreen, snacks, wipes, towels, and clothes that can get dirty. If you treat the field like a real outdoor activity, everybody has a better shot at enjoying it.",
      ],
    },
    {
      eyebrow: "Easy Second Step",
      title: "Lake Greeson can be the break, not another chore.",
      paragraphs: [
        "After digging, some families need a quiet cabin. Others want water. Lake Greeson works best when it is planned as a slower reset with towels, dry clothes, and food figured out ahead of time.",
      ],
    },
  ],
  stops: [
    {
      title: "Crater of Diamonds State Park",
      label: "Main Family Anchor",
      text:
        "Hands-on, memorable, and different. Plan for dirt and sun, and do not make finding a diamond the only way the day can be successful.",
      href: "/crater-of-diamonds-guide",
    },
    {
      title: "Lake Greeson",
      label: "Water Day • Fishing • Swimming",
      text:
        "A good family add-on when you want water, fishing, camping, or a slower day around the lake instead of another dry-land stop.",
      href: "/lake-greeson",
    },
    {
      title: "Dino Dig",
      label: "Indoor Digging • Polished Stones • Kids",
      text:
        "A useful indoor backup for families when the Crater field is too hot, rainy, or tiring, but the kids still want a hands-on treasure-digging stop.",
      href: "https://www.arkansas.com/experiences/discover/attraction-listings/dino-dig",
    },
    {
      title: "Ka-Do-Ha Indian Village",
      label: "Shorter Educational Stop",
      text:
        "A possible add-on for families who want something local and educational without committing to another long drive.",
      href: "/things-to-do-near-crater-of-diamonds",
    },
  ],
  checkBefore: [
    "Heat, rain, mud, and field conditions",
    "Crater of Diamonds hours, admission, and tool rules",
    "Water park season and hours if that is part of the plan",
    "Dino Dig hours and pricing if that is your indoor backup stop",
    "Lake access, swimming rules, and weather",
    "Restaurant hours before the kids are starving",
    "Cabin, campground, or RV check-in details",
  ],
  goodFor: [
    "Families with kids who like hands-on outdoor activities",
    "Cabin weekends with space to reset",
    "Parents wanting one memorable main attraction",
    "Families pairing Crater of Diamonds with Lake Greeson",
    "Groups that do better with loose plans than packed schedules",
  ],
  faqs: [
    {
      question: "Is Crater of Diamonds good for kids?",
      answer:
        "Yes, but it is an outdoor digging activity. Plan for heat, dirt, water, snacks, sun protection, breaks, and a realistic amount of time in the field.",
    },
    {
      question: "What else can families do near Murfreesboro?",
      answer:
        "Families can add Lake Greeson, Dino Dig, Ka-Do-Ha Indian Village, local restaurants, cabins, camping, and nearby day trips depending on energy, weather, and how long they are staying.",
    },
  ],
  related: [
    { href: "/crater-of-diamonds-guide", label: "Crater Guide" },
    { href: "/lake-greeson", label: "Lake Greeson" },
    { href: "/murfreesboro-restaurants", label: "Restaurants" },
  ],
  cta: {
    title: "Build the family trip around comfort, not just attractions.",
    text:
      "Use the Crater, Lake Greeson, restaurants, and lodging pages to plan a weekend with enough food, cleanup time, water, and downtime to keep everyone from running out of patience.",
  },
};

export const dayTripsGuide: GuidePageData = {
  slug: "day-trips-from-murfreesboro",
  metadata: {
    title: "Day Trips From Murfreesboro, Arkansas | Lake Greeson, Glenwood & Hot Springs",
    description:
      "Plan day trips from Murfreesboro, Arkansas to Lake Greeson, Glenwood and the Caddo River, Mount Ida and Lake Ouachita, Hot Springs, Little Missouri Falls, and nearby southwest Arkansas stops.",
    keywords: [
      "day trips from Murfreesboro Arkansas",
      "things to do near Murfreesboro Arkansas",
      "Lake Greeson day trip",
      "Glenwood Arkansas Caddo River",
      "Mount Ida Lake Ouachita",
      "Hot Springs Arkansas day trip",
      "Little Missouri Falls Arkansas",
    ],
  },
  hero: {
    eyebrow: "Nearby Day Trips",
    title: "Use Murfreesboro as the starting point for a wider southwest Arkansas weekend.",
    text:
      "Crater of Diamonds may be the reason you came, but Lake Greeson, Glenwood, Mount Ida, Hot Springs, and Ouachita backroads can turn the trip into more than one stop.",
    image: imagePaths.dayTrips,
  },
  intro: {
    eyebrow: "Regional Planning",
    title: "The best day trip depends on how much road time your group actually wants.",
    paragraphs: [
      "If you already spent hours at the diamond field, you may not need a long drive. Lake Greeson is the easiest nearby direction. If you have another full day, Glenwood, Mount Ida, Hot Springs, or a scenic Ouachita drive can make the trip feel bigger.",
      "The main thing is not pretending every day trip is the same. A lake day, a river float, a crystal stop, a bathhouse town, and a forest drive all take different energy. Pick the one that fits your people.",
    ],
  },
  sections: [
    {
      eyebrow: "Close And Easy",
      title: "Lake Greeson is the first nearby day trip to consider.",
      paragraphs: [
        "Lake Greeson fits the Murfreesboro trip naturally. It gives you fishing, boating, swimming, camping, marina time, and a slower outdoor day without leaving the area behind.",
      ],
    },
    {
      eyebrow: "Bigger Circle",
      title: "Glenwood, Mount Ida, and Hot Springs each add a different kind of Arkansas day.",
      paragraphs: [
        "Glenwood points you toward the Caddo River. Mount Ida points you toward quartz, Lake Ouachita, and scenic drives. Hot Springs gives you the bigger visitor town with Bathhouse Row, restaurants, hotels, shops, and more options if your group wants a full change of pace.",
      ],
    },
  ],
  stops: [
    {
      title: "Lake Greeson",
      label: "Closest Lake Day",
      text:
        "Best for fishing, swimming, boating, camping, Swaha, Dam Grill, and a slower day around the water close to Murfreesboro.",
      href: "/lake-greeson",
    },
    {
      title: "Glenwood and the Caddo River",
      label: "River Town • Floating • Cabins",
      text:
        "A good add-on if your group wants a river day, cabins, restaurants, or another small-town base nearby.",
      href: "https://www.glenwoodarkansas.org",
    },
    {
      title: "Mount Ida and Lake Ouachita",
      label: "Crystals • Lake Ouachita • Scenic Drives",
      text:
        "A strong nearby direction for quartz shops, crystal digging, Lake Ouachita, Brady Mountain, Hickory Nut Mountain, and Ouachita scenery.",
      href: "https://www.mountidaarkansas.org",
    },
    {
      title: "Hot Springs",
      label: "Bathhouse Row • Restaurants • Hotels",
      text:
        "The bigger Arkansas visitor-town option when you want restaurants, hotels, spas, Lake Hamilton, Bathhouse Row, shopping, and a wider mix of things to do.",
      href: "https://www.hotspringsarkansas.org",
    },
    {
      title: "Little Missouri Falls Area",
      label: "Scenic Drive • Waterfall Area",
      text:
        "A more rugged Ouachita direction for people who like backroads, forest scenery, and outdoor stops. Check current road and forest conditions before heading out.",
      href: "https://www.arkansas.com/experiences/discover/attraction-listings/little-missouri-river",
    },
  ],
  checkBefore: [
    "Drive distance, road conditions, and fuel",
    "Weather and lake or river conditions",
    "Park, forest, and recreation area rules",
    "Restaurant, attraction, and shop hours",
    "How much energy your group has after Crater of Diamonds",
    "Water, snacks, phone service, and daylight for outdoor drives",
  ],
  goodFor: [
    "Visitors staying two or more nights",
    "Families wanting a second day after Crater of Diamonds",
    "Cabin and RV travelers building a regional loop",
    "People linking Murfreesboro with Glenwood, Mount Ida, or Hot Springs",
    "Travelers who like small towns, lakes, rivers, rocks, and backroads",
  ],
  faqs: [
    {
      question: "What is the best day trip from Murfreesboro?",
      answer:
        "Lake Greeson is the easiest nearby day trip. Glenwood, Mount Ida, Hot Springs, and the Little Missouri Falls area are better for visitors with more time and more willingness to drive.",
    },
    {
      question: "Can Murfreesboro work as a base for southwest Arkansas?",
      answer:
        "Yes, especially if your trip is built around Crater of Diamonds, Lake Greeson, cabins, camping, and nearby drives toward Glenwood, Mount Ida, and Hot Springs.",
    },
  ],
  related: [
    { href: "/lake-greeson", label: "Lake Greeson" },
    { href: "/murfreesboro-family-trip", label: "Family Trip" },
    { href: "/murfreesboro-cabins", label: "Cabins & Stays" },
    { href: "/little-missouri-river-murfreesboro", label: "Little Missouri" },
    { href: "/bear-creek-cycle-trail", label: "Bear Creek Trail" },
  ],
  cta: {
    title: "Start with Murfreesboro, then choose the direction that fits your weekend.",
    text:
      "Build around Crater of Diamonds, Lake Greeson, and lodging first. Then decide whether Glenwood, Mount Ida, Hot Springs, or a more rugged Ouachita drive belongs in the same trip.",
  },
};


export const lakeGreesonFishingGuide: GuidePageData = {
  slug: "lake-greeson-fishing",
  metadata: {
    title: "Lake Greeson Fishing Near Murfreesboro | Trip Planning Guide",
    description:
      "Plan a Lake Greeson fishing trip near Murfreesboro with practical notes on shore and boat access, licenses, marinas, lodging, food, and changing conditions.",
    keywords: [
      "Lake Greeson fishing",
      "fishing near Murfreesboro Arkansas",
      "Lake Greeson boat ramps",
      "Lake Greeson fishing license",
      "Lake Greeson marina",
    ],
  },
  hero: {
    eyebrow: "Lake Greeson Fishing",
    title: "Pick the kind of fishing day first. Then choose the right side of the lake.",
    text:
      "Lake Greeson can work for a boat-based fishing weekend, a campground trip, or a shorter shore-access plan. The details change by access point, weather, water conditions, and current Arkansas fishing rules, so check the official information before you launch or cast.",
    image: imagePaths.lake,
  },
  intro: {
    eyebrow: "Start With The Plan",
    title: "A fishing trip goes smoother when the ramp, license, and lodging are settled before daylight.",
    paragraphs: [
      "Lake Greeson sits close enough to Murfreesboro to be part of the same trip, but it is large enough that driving to the wrong access point can cost real time. Decide whether you are bringing a boat, renting one, meeting a guide, fishing from shore, or staying close to a campground before choosing the rest of the day.",
      "Arkansas fishing licenses, trout permits, limits, and seasonal rules can change. Use the Arkansas Game and Fish Commission as the source for current requirements, and use the Corps of Engineers or Recreation.gov for ramps, campgrounds, swim areas, closures, and reservation details.",
    ],
  },
  sections: [
    {
      eyebrow: "Boat-Based Trips",
      title: "Marinas and ramps matter more than a broad lake map.",
      paragraphs: [
        "Swaha and Kirby Landing are two practical names to compare when a trip needs marina services, rentals, supplies, lodging, or a clear place to start. Call directly before going because fuel, rental fleets, store hours, guide availability, and seasonal services can change.",
        "If you are towing a boat, confirm ramp access and trailer parking before arrival. Give yourself extra time on summer weekends and keep a second launch option in mind when weather or lake conditions change the plan.",
      ],
    },
    {
      eyebrow: "Shore & Tailwater",
      title: "Shore fishing and the Little Missouri tailwater are different trips.",
      paragraphs: [
        "Public recreation areas may provide shoreline access, but conditions vary by water level, vegetation, crowds, and the exact place you stop. The Little Missouri below Narrows Dam is also managed differently from the lake and can involve generation schedules and trout-permit requirements.",
        "Do not wade below the dam without checking current release information and safety guidance. Changing water is not a minor inconvenience there.",
      ],
    },
    {
      eyebrow: "Food & Sleep",
      title: "Match the stay to the side of the lake you will actually use.",
      paragraphs: [
        "A Murfreesboro stay works well when Crater of Diamonds is also part of the weekend. A lake cabin, marina room, or campground makes more sense when early fishing and boat access are the main reason for coming.",
        "Pack breakfast, drinks, ice, and snacks even when a marina store or restaurant is part of the plan. Small-town and seasonal lake hours should always be checked directly.",
      ],
    },
  ],
  stops: [
    {
      title: "Arkansas Game and Fish Commission",
      label: "Licenses • Regulations • Fishing Information",
      text:
        "Use AGFC for current license requirements, trout permits, regulation changes, fish-attractor information, and current statewide fishing guidance.",
      href: "https://www.agfc.com/fishing/",
    },
    {
      title: "Lake Greeson Recreation Information",
      label: "Corps Access • Campgrounds • Ramps",
      text:
        "Use the Corps and Recreation.gov to confirm public recreation areas, reservations, seasonal operations, ramps, beaches, and current notices.",
      href: "https://www.recreation.gov/gateways/152",
    },
    {
      title: "Swaha Lodge & Marina",
      label: "Marina • Lodging • Check-Ahead Services",
      text:
        "A south-lake base to check for lodging, marina access, rentals, and fishing-trip services near Murfreesboro.",
      href: "/swaha-lodge-marina-lake-greeson",
    },
    {
      title: "Kirby Landing",
      label: "Marina • Campground • Boat Access",
      text:
        "A major lake access area on the Kirby side with campground, ramp, marina, and day-use planning value.",
      href: "/kirby-landing-lake-greeson",
    },
  ],
  checkBefore: [
    "Current Arkansas fishing license and permit requirements",
    "Lake or tailwater-specific regulations and generation schedules",
    "Ramp status, marina services, rental availability, and trailer parking",
    "Weather, wind, water level, and current lake notices",
    "Campground or lodging reservations",
    "Food, fuel, ice, bait, and supply availability",
  ],
  goodFor: [
    "Anglers staying in Murfreesboro or around Lake Greeson",
    "Boat owners choosing a launch and overnight base",
    "Families pairing fishing with camping or a cabin stay",
    "Visitors adding a lake day to a Crater of Diamonds trip",
  ],
  faqs: [
    {
      question: "Do I need an Arkansas fishing license at Lake Greeson?",
      answer:
        "Most anglers need a current Arkansas fishing license, and some waters or fishing methods may require additional permits. Check the Arkansas Game and Fish Commission before the trip.",
    },
    {
      question: "Can visitors fish Lake Greeson without a boat?",
      answer:
        "There are public recreation areas and shoreline opportunities, but access and conditions vary. Check the Corps recreation information and choose a specific area instead of assuming every shoreline is easy to reach.",
    },
    {
      question: "Where can I launch or rent a boat on Lake Greeson?",
      answer:
        "Swaha and Kirby Landing are useful starting points to check, along with other verified lake marinas and Corps ramps. Confirm current services directly before going.",
    },
  ],
  related: [
    { href: "/lake-greeson", label: "Lake Greeson Guide" },
    { href: "/lake-greeson-marinas-boat-rentals", label: "Marinas & Rentals" },
    { href: "/lake-greeson-camping-swimming", label: "Camping & Swimming" },
    { href: "/murfreesboro-cabins", label: "Places To Stay" },
    { href: "/murfreesboro-restaurants", label: "Food Guide" },
  ],
  cta: {
    title: "Settle the access point before you build the rest of the fishing weekend.",
    text:
      "Use the marina, campground, lodging, and restaurant guides to keep the trip practical once the lake plan is chosen.",
  },
  planningTable: {
    eyebrow: "Choose Your Base",
    title: "Different fishing plans need different starting points.",
    intro:
      "This is a planning comparison, not a promise of current access or services. Verify the exact facility before leaving.",
    columns: ["Trip style", "Start by checking", "What to confirm"],
    rows: [
      ["Boat and cabin weekend", "Swaha or Kirby Landing", "Rental or slip, ramp, trailer parking, lodging"],
      ["Campground fishing trip", "Kirby Landing, Cowhide Cove, Parker Creek, Daisy", "Reservation, ramp, shore access, seasonal operation"],
      ["Short shore-based outing", "A named public recreation area", "Parking, bank access, water level, posted rules"],
      ["Tailwater trout trip", "Little Missouri below Narrows Dam", "Permit, generation schedule, wading safety"],
    ],
  },
  sourceLinks: [
    {
      title: "Arkansas Game and Fish Commission fishing information",
      href: "https://www.agfc.com/fishing/",
      text: "Current licenses, regulations, fish-attractor files, and statewide fishing guidance.",
    },
    {
      title: "Lake Greeson on Recreation.gov",
      href: "https://www.recreation.gov/gateways/152",
      text: "Public campgrounds, recreation areas, reservations, and facility details.",
    },
  ],
};

export const lakeGreesonCampingSwimmingGuide: GuidePageData = {
  slug: "lake-greeson-camping-swimming",
  metadata: {
    title: "Lake Greeson Camping & Swimming | Murfreesboro Family Guide",
    description:
      "Compare Lake Greeson camping, swim beaches, picnic areas, day-use stops, reservations, and family planning near Murfreesboro, Kirby, and Daisy.",
    keywords: [
      "Lake Greeson camping",
      "Lake Greeson swimming",
      "campgrounds near Murfreesboro Arkansas",
      "Cowhide Cove",
      "Parker Creek Lake Greeson",
      "Daisy State Park",
    ],
  },
  hero: {
    eyebrow: "Camping & Swimming",
    title: "Choose a named recreation area. Do not just drive toward the lake and hope.",
    text:
      "Lake Greeson has several public campgrounds and day-use areas, but they do not all offer the same facilities. Pick the place that fits your camper, boat, swim plan, and family before you leave Murfreesboro.",
    image: imagePaths.cabins,
  },
  intro: {
    eyebrow: "Compare The Stops",
    title: "Daisy, Kirby Landing, Cowhide Cove, and Parker Creek each solve a different trip problem.",
    paragraphs: [
      "Daisy State Park works well for a state-park camping trip with lake access and family programming. Kirby Landing is useful for visitors who want a larger campground and marina connection. Cowhide Cove and Parker Creek are Corps campgrounds with swim beaches, ramps, and developed facilities listed through Recreation.gov.",
      "Reservations, loops, hookups, beach access, and seasonal operations can change. Use official pages for the specific campground instead of relying on a general lake description.",
    ],
  },
  sections: [
    {
      eyebrow: "State Park Option",
      title: "Daisy State Park is the easiest all-in-one family comparison.",
      paragraphs: [
        "Daisy State Park sits on Lake Greeson and supports camping, paddling, fishing, picnic time, and access to the Bear Creek Cycle Trail. It is a practical choice for families who want a staffed park setting and more than one activity close together.",
        "Check the park directly for current camping availability, equipment rentals, programs, trail details, and any seasonal changes.",
      ],
    },
    {
      eyebrow: "Corps Campgrounds",
      title: "Kirby Landing, Cowhide Cove, and Parker Creek are worth comparing by facilities.",
      paragraphs: [
        "Recreation.gov lists developed camping, ramps, swim beaches, restrooms, and other facilities at these Lake Greeson areas. The right one depends on your rig, campsite needs, boat plan, and which side of the lake you want to use.",
        "Do not assume every loop is open or every site fits a large trailer. Enter your dates and equipment details on the official reservation page.",
      ],
    },
    {
      eyebrow: "Day Use",
      title: "A swim-and-picnic day still needs towels, shade, food, and a backup.",
      paragraphs: [
        "For a shorter lake day, confirm that the selected area has a designated swim beach and day-use access. Bring water, sun protection, dry clothes, water shoes, and food that does not depend on a seasonal restaurant being open.",
        "Lake conditions and weather can change quickly. Keep a town, cabin, or shorter family stop ready when wind, rain, heat, or crowds make the original plan harder.",
      ],
    },
  ],
  stops: [
    {
      title: "Daisy State Park",
      label: "State Park • Camping • Lake Access",
      text:
        "A staffed Lake Greeson park with camping, family use, paddling and fishing opportunities, and Bear Creek trail access.",
      href: "/daisy-state-park",
    },
    {
      title: "Kirby Landing",
      label: "Campground • Marina • Swim Beach",
      text:
        "A large Lake Greeson recreation area with campground, ramp, marina, playground, and swim-beach planning value.",
      href: "/kirby-landing-lake-greeson",
    },
    {
      title: "Cowhide Cove",
      label: "Corps Campground • Ramp • Swim Beach",
      text:
        "A developed Corps campground with electric and tent sites, showers, a ramp, playground, and swim beach listed on Recreation.gov.",
      href: "https://www.recreation.gov/camping/campgrounds/233469",
    },
    {
      title: "Parker Creek",
      label: "Corps Campground • Ramp • Swim Beach",
      text:
        "A developed Corps campground with electric and tent sites, showers, a ramp, playground, swim beach, and nearby trail history.",
      href: "https://www.recreation.gov/camping/campgrounds/233578",
    },
  ],
  checkBefore: [
    "Campsite reservation and the exact loop or equipment limits",
    "Seasonal opening, beach status, and current facility notices",
    "Boat-ramp access and trailer parking",
    "Pet, leash, quiet-hour, and campground rules",
    "Food, ice, fuel, and supply needs before leaving town",
    "Weather, heat, storms, and lake conditions",
  ],
  goodFor: [
    "Families comparing developed Lake Greeson campgrounds",
    "RV and trailer travelers",
    "Visitors wanting a designated swim beach",
    "Campers pairing the lake with Crater of Diamonds",
    "Boat owners who need campground and ramp access together",
  ],
  faqs: [
    {
      question: "Where can families swim at Lake Greeson?",
      answer:
        "Named public areas such as Kirby Landing, Cowhide Cove, Parker Creek, and Daisy State Park are the right places to check. Confirm current beach access and seasonal operation before driving out.",
    },
    {
      question: "Do Lake Greeson campgrounds require reservations?",
      answer:
        "Many developed sites can be reserved through Arkansas State Parks or Recreation.gov. Availability and rules vary by campground, date, loop, and equipment size.",
    },
    {
      question: "Which campground is best for a large RV?",
      answer:
        "That depends on current site dimensions and availability. Enter your equipment length on the official reservation page and confirm the exact site rather than relying on a general campground description.",
    },
  ],
  related: [
    { href: "/lake-greeson", label: "Lake Greeson Guide" },
    { href: "/daisy-state-park", label: "Daisy State Park" },
    { href: "/kirby-landing-lake-greeson", label: "Kirby Landing" },
    { href: "/lake-greeson-marinas-boat-rentals", label: "Marinas & Rentals" },
    { href: "/murfreesboro-cabins", label: "Lodging Guide" },
  ],
  cta: {
    title: "Pick the campground by the facilities your group will actually use.",
    text:
      "Then check the official reservation page for dates, equipment limits, current operations, and the exact access point.",
  },
  planningTable: {
    eyebrow: "Campground Comparison",
    title: "A practical starting point for narrowing the list.",
    intro:
      "Facilities and operations can change. Use this to choose what to verify on the official page.",
    columns: ["Area", "Best starting fit", "Verify before booking"],
    rows: [
      ["Daisy State Park", "State-park family trip", "Site type, programs, rentals, trail access"],
      ["Kirby Landing", "Marina and campground together", "Site size, ramp, marina services, swim beach"],
      ["Cowhide Cove", "Developed Corps camping and swimming", "Loop, hookups, reservation, beach status"],
      ["Parker Creek", "Developed camping with lake and trail options", "Site type, ramp, beach, seasonal operation"],
    ],
  },
  sourceLinks: [
    {
      title: "Lake Greeson campgrounds on Recreation.gov",
      href: "https://www.recreation.gov/gateways/152",
      text: "Official federal reservation and facility information for Corps-managed recreation areas.",
    },
    {
      title: "Daisy State Park",
      href: "https://www.arkansasstateparks.com/parks/daisy-state-park",
      text: "Official Arkansas State Parks information, reservations, programs, and park notices.",
    },
  ],
};

export const lakeGreesonMarinasGuide: GuidePageData = {
  slug: "lake-greeson-marinas-boat-rentals",
  metadata: {
    title: "Lake Greeson Marinas & Boat Rentals | Murfreesboro Guide",
    description:
      "Find verified Lake Greeson marinas, boat rentals, launches, fuel, supplies, lodging, and check-ahead lake services near Murfreesboro and Kirby.",
    keywords: [
      "Lake Greeson marinas",
      "Lake Greeson boat rentals",
      "Swaha Marina",
      "Kirby Landing Marina",
      "Lake Greeson boat launch",
    ],
  },
  hero: {
    eyebrow: "Marinas & Boat Rentals",
    title: "Call the marina before the trip. Lake services are too important to guess about.",
    text:
      "Swaha and Kirby Landing are two verified Lake Greeson marina bases with different locations and trip uses. Rental fleets, fuel, slips, food, and store services can change, so confirm the exact service directly.",
    image: imagePaths.swaha,
  },
  intro: {
    eyebrow: "Choose The Side",
    title: "The best marina is usually the one closest to your lodging, ramp, and planned water.",
    paragraphs: [
      "Lake Greeson stretches north of Murfreesboro, and a marina name alone does not tell you how it fits the rest of the weekend. Swaha works naturally for visitors coming from Murfreesboro and staying on the south side. Kirby Landing serves the Kirby side and connects directly with a large public recreation area.",
      "Ask about the exact boat type, passenger limits, deposit, fuel policy, weather cancellation, check-in time, and required operator experience before counting on a rental.",
    ],
  },
  sections: [
    {
      eyebrow: "Swaha",
      title: "Swaha combines marina planning with lodging on the south side of the lake.",
      paragraphs: [
        "Swaha Lodge & Marina advertises lodging and marina access on Lake Greeson. It is useful for visitors who want the boat, cabin, and lake-day pieces handled from one base close to Murfreesboro.",
        "Check current rental availability, slip or launch details, fuel, store services, and seasonal food directly through Swaha before booking around them.",
      ],
    },
    {
      eyebrow: "Kirby Landing",
      title: "Kirby Landing connects marina services with a major public recreation area.",
      paragraphs: [
        "Kirby Landing Marina advertises boat rentals, a marina store, lodging, slips, and other lake services inside the Kirby Landing Recreation Area. It is a practical base for visitors camping or staying on the Kirby side.",
        "Use the marina site for commercial services and Recreation.gov for the campground, ramp, beach, and public-facility details.",
      ],
    },
    {
      eyebrow: "Before You Reserve",
      title: "Confirm the boring details before money and schedules depend on the boat.",
      paragraphs: [
        "Ask what is included, what is not, how weather is handled, when the boat must be returned, whether pets are allowed, and what identification or deposit is required. Bring a backup plan for wind or storms.",
        "Visitors towing their own boat should confirm the public ramp and trailer parking separately from marina rental or slip services.",
      ],
    },
  ],
  stops: [
    {
      title: "Swaha Lodge & Marina",
      label: "South Lake • Lodging • Marina",
      text:
        "A Murfreesboro-side base to check for cabins, marina access, boat rentals, and current lake services.",
      href: "/swaha-lodge-marina-lake-greeson",
    },
    {
      title: "Kirby Landing Marina",
      label: "Kirby Side • Rentals • Marina Store",
      text:
        "A marina and lodging operation inside the Kirby Landing Recreation Area with advertised boat-rental and marina services.",
      href: "https://www.kirbylandingmarina.com/",
    },
    {
      title: "Kirby Landing Recreation Area",
      label: "Public Ramp • Campground • Swim Beach",
      text:
        "Use Recreation.gov for the public campground, ramp, beach, and facility information connected to Kirby Landing.",
      href: "/kirby-landing-lake-greeson",
    },
    {
      title: "Lake Greeson Corps Information",
      label: "Public Access • Notices • Recreation Areas",
      text:
        "Use official Corps information to compare named public access areas and current lake notices.",
      href: "https://www.mvk.usace.army.mil/Missions/Recreation/Lake-Greeson/",
    },
  ],
  checkBefore: [
    "Boat type, capacity, rental availability, and reservation terms",
    "Fuel policy, deposit, cancellation, and weather rules",
    "Launch ramp and trailer-parking availability",
    "Required identification, safety equipment, and operator rules",
    "Marina store, food, and fuel hours",
    "Current lake conditions and severe-weather forecast",
  ],
  goodFor: [
    "Visitors who need a Lake Greeson boat rental",
    "Families choosing between south-lake and Kirby-side lodging",
    "Campers who want a marina close to the campground",
    "Boat owners comparing ramps, fuel, supplies, and slips",
  ],
  faqs: [
    {
      question: "Can visitors rent boats at Lake Greeson?",
      answer:
        "Swaha and Kirby Landing advertise boat-rental services. Availability, boat types, policies, and seasonal operation should be confirmed directly before the trip.",
    },
    {
      question: "Which Lake Greeson marina is closest to Murfreesboro?",
      answer:
        "Swaha is a practical south-lake option for many Murfreesboro visitors. Actual drive time depends on your lodging and route, so map the exact marina before choosing.",
    },
    {
      question: "Are marina services the same as public boat-ramp access?",
      answer:
        "No. Commercial marina services and public Corps facilities may be managed separately. Verify rentals, fuel, and slips with the marina, and ramps or campgrounds through the official public-facility source.",
    },
  ],
  related: [
    { href: "/lake-greeson", label: "Lake Greeson Guide" },
    { href: "/lake-greeson-fishing", label: "Fishing Guide" },
    { href: "/lake-greeson-camping-swimming", label: "Camping & Swimming" },
    { href: "/swaha-lodge-marina-lake-greeson", label: "Swaha Guide" },
    { href: "/kirby-landing-lake-greeson", label: "Kirby Landing" },
  ],
  cta: {
    title: "Choose the marina by route and services, not just the first name you find.",
    text:
      "Confirm the boat, policies, ramp, parking, fuel, weather rules, and lodging before the weekend depends on it.",
  },
  planningTable: {
    eyebrow: "Marina Comparison",
    title: "Two useful Lake Greeson starting points.",
    intro:
      "This comparison uses currently advertised services. Call directly because availability can change.",
    columns: ["Marina", "Trip fit", "Confirm directly"],
    rows: [
      ["Swaha Lodge & Marina", "Murfreesboro-side lodging and lake base", "Rental fleet, cabins, slips, fuel, food"],
      ["Kirby Landing Marina", "Kirby-side campground and marina trip", "Rentals, motel, store, slips, guide services"],
    ],
  },
  sourceLinks: [
    {
      title: "Swaha Lodge & Marina",
      href: "https://swahacabins.com/",
      text: "Official lodging and marina information for the south side of Lake Greeson.",
    },
    {
      title: "Kirby Landing Marina",
      href: "https://www.kirbylandingmarina.com/",
      text: "Official marina, lodging, boat-rental, and service information for Kirby Landing.",
    },
  ],
};

export const daisyStateParkGuide: GuidePageData = {
  slug: "daisy-state-park",
  metadata: {
    title: "Daisy State Park Guide | Lake Greeson Near Murfreesboro",
    description:
      "Plan a Daisy State Park visit with camping, Lake Greeson access, family activities, Bear Creek trail context, reservations, food, and Murfreesboro trip links.",
    keywords: [
      "Daisy State Park",
      "Daisy State Park camping",
      "Lake Greeson state park",
      "Bear Creek Cycle Trail",
      "camping near Murfreesboro Arkansas",
    ],
  },
  hero: {
    eyebrow: "Daisy State Park",
    title: "A Lake Greeson base for families who want camping, water, and more than one outdoor option.",
    text:
      "Daisy State Park gives the north side of a Murfreesboro trip a clear home base. It works for camping, paddling, fishing, picnic time, and Bear Creek trail access, with official reservations and park information in one place.",
    image: imagePaths.bearcreek,
  },
  intro: {
    eyebrow: "What The Park Is For",
    title: "Daisy makes sense when the lake is part of the trip, not just an afternoon extra.",
    paragraphs: [
      "The park sits on Lake Greeson near Daisy and Kirby. It is a practical choice for visitors who want a state-park camping setup, lake access, family programs, and an easier way to combine water with the Bear Creek Cycle Trail.",
      "It can pair with Crater of Diamonds, but the two stops are better treated as separate anchors. Give the diamond field one block of time and Daisy or Lake Greeson another instead of rushing between both.",
    ],
  },
  sections: [
    {
      eyebrow: "Camping",
      title: "Reserve the right site for the equipment and pace you are bringing.",
      paragraphs: [
        "Arkansas State Parks handles the current campsite, yurt, and facility details. Enter your dates and compare the actual options rather than assuming every site has the same hookups or space.",
        "Families should also check pet rules, arrival timing, fire restrictions, and where groceries, ice, fuel, or a restaurant fit into the route.",
      ],
    },
    {
      eyebrow: "Lake Time",
      title: "Use the park for a real lake day, not a rushed photo stop.",
      paragraphs: [
        "Daisy supports fishing, paddling, picnicking, and other lake-based use described by Arkansas State Parks. Rental and program availability can be seasonal, so check the park calendar and current notices before promising a specific activity.",
        "Bring sun protection, drinking water, dry clothes, and a weather backup even when the forecast looks simple.",
      ],
    },
    {
      eyebrow: "Bear Creek",
      title: "Trail access adds another reason to choose Daisy, but riders need current details.",
      paragraphs: [
        "Daisy is tied to the Bear Creek Cycle Trail area. Riders should verify the designated route, vehicle requirements, closures, weather, and current trail guidance before unloading.",
        "A trail trip needs more preparation than a regular park visit. Carry water, repair basics, navigation, and a realistic turnaround plan.",
      ],
    },
  ],
  stops: [
    {
      title: "Official Daisy State Park Page",
      label: "Reservations • Park Notices • Programs",
      text:
        "Use Arkansas State Parks for current camping, park facilities, events, rentals, maps, and official contact information.",
      href: "https://www.arkansasstateparks.com/parks/daisy-state-park",
    },
    {
      title: "Bear Creek Cycle Trail",
      label: "Trail Planning • Outdoor Riding",
      text:
        "Use the separate trail guide to plan equipment, conditions, safety, and the role Daisy plays in the trip.",
      href: "/bear-creek-cycle-trail",
    },
    {
      title: "Lake Greeson Camping & Swimming",
      label: "Compare Public Areas",
      text:
        "Compare Daisy with Kirby Landing, Cowhide Cove, Parker Creek, and other named public recreation options.",
      href: "/lake-greeson-camping-swimming",
    },
    {
      title: "Crater of Diamonds",
      label: "Separate Day Anchor",
      text:
        "Use the practical park guide when pairing Daisy or Lake Greeson with a Murfreesboro diamond trip.",
      href: "/crater-of-diamonds-guide",
    },
  ],
  checkBefore: [
    "Current campsite, yurt, or facility availability",
    "Park programs, rentals, and seasonal services",
    "Bear Creek trail status and current rules",
    "Weather, lake conditions, and fire restrictions",
    "Food, fuel, ice, and supply needs",
    "Drive time to Crater of Diamonds or Murfreesboro meals",
  ],
  goodFor: [
    "Families wanting a state-park Lake Greeson base",
    "Campers pairing the lake with Murfreesboro",
    "Paddlers, anglers, and picnic-day visitors",
    "Riders using the Bear Creek trail area",
    "Visitors who prefer one base with several outdoor options",
  ],
  faqs: [
    {
      question: "Is Daisy State Park close to Crater of Diamonds?",
      answer:
        "It is close enough to include in the same Murfreesboro-area trip, but each works better as its own main activity. Map the drive and avoid packing both into a rushed half-day.",
    },
    {
      question: "Can visitors camp at Daisy State Park?",
      answer:
        "Yes. Use the official Arkansas State Parks reservation system for current site types, availability, equipment details, and park rules.",
    },
    {
      question: "Does Daisy State Park connect with Bear Creek Cycle Trail?",
      answer:
        "Arkansas State Parks identifies Daisy as a trailhead area. Riders should check current trail maps, rules, conditions, and closures before going.",
    },
  ],
  related: [
    { href: "/lake-greeson", label: "Lake Greeson" },
    { href: "/lake-greeson-camping-swimming", label: "Camping & Swimming" },
    { href: "/bear-creek-cycle-trail", label: "Bear Creek Trail" },
    { href: "/murfreesboro-family-trip", label: "Family Trip" },
    { href: "/murfreesboro-cabins", label: "Places To Stay" },
  ],
  cta: {
    title: "Use Daisy as a base, not another box to check between bigger stops.",
    text:
      "Reserve the right site, confirm current park details, and give the lake or trail enough time to be the main plan.",
  },
  sourceLinks: [
    {
      title: "Daisy State Park",
      href: "https://www.arkansasstateparks.com/parks/daisy-state-park",
      text: "Official park information, reservations, facilities, programs, and notices.",
    },
    {
      title: "Lake Greeson recreation gateway",
      href: "https://www.recreation.gov/gateways/152",
      text: "Federal campground and recreation-area information for the wider lake.",
    },
  ],
};

export const swahaGuide: GuidePageData = {
  slug: "swaha-lodge-marina-lake-greeson",
  metadata: {
    title: "Swaha Lodge & Marina Guide | Lake Greeson Near Murfreesboro",
    description:
      "A factual visitor guide to Swaha Lodge & Marina on Lake Greeson, including lodging, marina planning, boat rentals, seasonal food, and nearby Murfreesboro stops.",
    keywords: [
      "Swaha Lodge Marina",
      "Swaha cabins Lake Greeson",
      "Lake Greeson boat rentals",
      "Lake Greeson lodging",
      "Murfreesboro lake cabins",
    ],
  },
  hero: {
    eyebrow: "Swaha Lodge & Marina",
    title: "A south-lake base for visitors who want lodging and marina access in the same plan.",
    text:
      "Swaha is useful when a Murfreesboro trip is really about Lake Greeson. The official business site advertises lodging and marina services, but current rentals, food, availability, and policies should be checked directly before booking.",
    image: imagePaths.swaha,
  },
  intro: {
    eyebrow: "Who It Fits",
    title: "Swaha makes the most sense when the lake is the center of the weekend.",
    paragraphs: [
      "A cabin or room close to the marina can reduce driving for boating, fishing, and early lake starts. It also keeps the Murfreesboro side of Lake Greeson close enough to pair with Crater of Diamonds or town meals on a longer stay.",
      "This page is a planning guide, not a sponsored review. Use Swaha's official site for current accommodations, boat rentals, marina details, policies, and booking.",
    ],
  },
  sections: [
    {
      eyebrow: "Lodging",
      title: "Compare the actual unit with the group you are bringing.",
      paragraphs: [
        "Swaha advertises multiple lodging types. Check sleeping layout, stairs, kitchen setup, pet rules, cancellation terms, parking, and whether the unit fits boat or trailer logistics before reserving.",
        "Families using Crater of Diamonds should also think about laundry, dirty shoes, towels, and the drive back after a hot field day.",
      ],
    },
    {
      eyebrow: "Marina",
      title: "Confirm the exact boat and marina service before the day depends on it.",
      paragraphs: [
        "The business advertises marina access and boat rentals. Ask about the current fleet, passenger capacity, safety equipment, deposit, fuel, return time, weather policy, and operator requirements.",
        "Visitors bringing their own boat should separately confirm ramp, parking, slip, fuel, and storage details.",
      ],
    },
    {
      eyebrow: "Nearby Planning",
      title: "Use Murfreesboro for the town side of the trip.",
      paragraphs: [
        "Crater of Diamonds, local restaurants, supplies, and family stops are the natural Murfreesboro connections. Kirby Landing, Daisy State Park, and other public Lake Greeson areas make sense when you want to see more of the lake.",
        "Dam Grill is associated with Swaha, but seasonal food should always be checked before the group drives out hungry.",
      ],
    },
  ],
  stops: [
    {
      title: "Official Swaha Site",
      label: "Booking • Lodging • Marina",
      text:
        "Use the business site for current units, marina services, boat rentals, policies, contact details, and availability.",
      href: "https://swahacabins.com/",
    },
    {
      title: "Lake Greeson Marinas & Rentals",
      label: "Compare Lake Bases",
      text:
        "Compare Swaha with Kirby Landing and understand the difference between marina services and public facilities.",
      href: "/lake-greeson-marinas-boat-rentals",
    },
    {
      title: "Murfreesboro Restaurants",
      label: "Town Food • Backup Meals",
      text:
        "Use the food guide for town meals and backup choices when seasonal lake food does not fit the schedule.",
      href: "/murfreesboro-restaurants",
    },
    {
      title: "Crater of Diamonds",
      label: "Nearby Main Attraction",
      text:
        "Plan the diamond field separately and leave enough time for cleanup before returning to the lake.",
      href: "/crater-of-diamonds-guide",
    },
  ],
  checkBefore: [
    "Lodging availability, unit details, and cancellation policy",
    "Boat-rental fleet, policies, deposit, and weather rules",
    "Marina fuel, slips, store, launch, and parking details",
    "Seasonal restaurant or food-service availability",
    "Pet, trailer, extra-vehicle, and late-arrival rules",
    "Drive time to Crater of Diamonds and Murfreesboro meals",
  ],
  goodFor: [
    "Lake-focused family weekends",
    "Anglers and boaters wanting a south-lake base",
    "Visitors pairing Lake Greeson with Murfreesboro",
    "Groups who prefer lodging and marina access together",
  ],
  faqs: [
    {
      question: "Does Swaha offer lodging on Lake Greeson?",
      answer:
        "The official Swaha site advertises cabins and other lodging. Check current unit details, availability, policies, and rates directly.",
    },
    {
      question: "Can visitors rent a boat at Swaha?",
      answer:
        "Swaha advertises boat-rental and marina services. Confirm the current fleet, policies, passenger limits, and weather rules before the trip.",
    },
    {
      question: "Can Swaha be paired with Crater of Diamonds?",
      answer:
        "Yes. It can work as a Lake Greeson base for a longer Murfreesboro trip, but map the drive and leave time for cleanup after the diamond field.",
    },
  ],
  related: [
    { href: "/lake-greeson", label: "Lake Greeson" },
    { href: "/lake-greeson-marinas-boat-rentals", label: "Marinas & Rentals" },
    { href: "/lake-greeson-fishing", label: "Fishing Guide" },
    { href: "/murfreesboro-cabins", label: "Lodging Guide" },
    { href: "/murfreesboro-restaurants", label: "Restaurants" },
  ],
  cta: {
    title: "Book from the current business details, not an old directory description.",
    text:
      "Check the exact unit, boat, policies, seasonal services, and route before the Lake Greeson weekend is locked in.",
  },
  sourceLinks: [
    {
      title: "Swaha Lodge & Marina",
      href: "https://swahacabins.com/",
      text: "Official source for current lodging, marina, boat-rental, contact, and booking information.",
    },
  ],
};

export const kirbyLandingGuide: GuidePageData = {
  slug: "kirby-landing-lake-greeson",
  metadata: {
    title: "Kirby Landing Lake Greeson Guide | Camping, Marina & Boat Access",
    description:
      "Plan a Kirby Landing visit on Lake Greeson with campground, ramp, swim beach, marina, boat rentals, day use, nearby food, and Murfreesboro trip links.",
    keywords: [
      "Kirby Landing Lake Greeson",
      "Kirby Landing campground",
      "Kirby Landing Marina",
      "Lake Greeson boat ramp",
      "camping near Kirby Arkansas",
    ],
  },
  hero: {
    eyebrow: "Kirby Landing",
    title: "A major Lake Greeson base when camping, marina access, and boating need to work together.",
    text:
      "Kirby Landing combines a Corps recreation area with a separate marina operation. Use Recreation.gov for the public campground and facilities, and the marina's official site for rentals, lodging, slips, store services, and current commercial details.",
    image: imagePaths.lake,
  },
  intro: {
    eyebrow: "Know The Split",
    title: "Public recreation facilities and marina services are connected by place, not by one information source.",
    paragraphs: [
      "The public recreation area includes developed camping, a ramp, playground, swim beach, restrooms, and other facilities listed on Recreation.gov. Kirby Landing Marina separately advertises boat rentals, a store, lodging, slips, and other marina services.",
      "Check both sources when the trip needs both campground and marina pieces. Do not assume a campsite reservation includes a rental boat, slip, motel room, or marina service.",
    ],
  },
  sections: [
    {
      eyebrow: "Camping",
      title: "Enter the real equipment size before choosing a campsite.",
      paragraphs: [
        "Kirby Landing has reservable campground facilities, but site dimensions, hookups, loops, and availability vary. Use Recreation.gov with the actual RV, trailer, or tent setup you are bringing.",
        "Confirm check-in, pet rules, quiet hours, extra vehicles, and any current operational notices before arrival.",
      ],
    },
    {
      eyebrow: "Boating & Swimming",
      title: "The ramp and swim beach make Kirby useful even without a marina rental.",
      paragraphs: [
        "Recreation.gov lists a boat ramp, swim beach, playground, showers, and drinking water among the public facilities. Current access can still be affected by weather, water, maintenance, or seasonal operations.",
        "Bring dry clothes, sun protection, drinking water, and a backup plan for storms or crowded summer days.",
      ],
    },
    {
      eyebrow: "Marina Services",
      title: "Use the marina directly for boats, slips, store, and lodging questions.",
      paragraphs: [
        "Kirby Landing Marina advertises rentals, marina-store services, lodging, slips, and fishing-guide services. Call or use its official site for the current fleet, availability, policies, and prices.",
        "The Kirby side works well for visitors coming from Daisy, Glenwood, or northern Lake Greeson, but Murfreesboro travelers should map the exact drive before choosing it over Swaha.",
      ],
    },
  ],
  stops: [
    {
      title: "Kirby Landing Campground",
      label: "Official Public Facility",
      text:
        "Use Recreation.gov for campsite reservations, ramp, beach, playground, showers, drinking water, and public-facility details.",
      href: "https://www.recreation.gov/camping/campgrounds/233531",
    },
    {
      title: "Kirby Landing Marina",
      label: "Rentals • Store • Lodging • Slips",
      text:
        "Use the marina's official site for current commercial services, availability, booking, and policies.",
      href: "https://www.kirbylandingmarina.com/",
    },
    {
      title: "Daisy State Park",
      label: "Nearby State Park",
      text:
        "A nearby alternative or add-on for state-park camping, family programs, lake use, and Bear Creek trail access.",
      href: "/daisy-state-park",
    },
    {
      title: "Murfreesboro & Crater of Diamonds",
      label: "Town & Park Connection",
      text:
        "Use Murfreesboro for the diamond field, town food, supplies, and a broader southwest Arkansas trip.",
      href: "/things-to-do-in-murfreesboro-arkansas",
    },
  ],
  checkBefore: [
    "Campsite availability, equipment limits, hookups, and loop details",
    "Ramp, swim beach, showers, and public-facility status",
    "Marina rental fleet, slips, fuel, store, and lodging availability",
    "Trailer parking and extra-vehicle rules",
    "Weather, water conditions, and seasonal operations",
    "Food, ice, fuel, and supply needs before arrival",
  ],
  goodFor: [
    "Campers who want a marina close by",
    "Boat owners needing a developed public ramp",
    "Families wanting a swim beach and playground",
    "Visitors staying on the Kirby or Daisy side of Lake Greeson",
    "Anglers comparing lodging, rentals, and campground access",
  ],
  faqs: [
    {
      question: "Does Kirby Landing have camping?",
      answer:
        "Yes. Kirby Landing is a reservable Corps campground on Lake Greeson. Use Recreation.gov for current sites, availability, facilities, and rules.",
    },
    {
      question: "Can visitors rent a boat at Kirby Landing?",
      answer:
        "Kirby Landing Marina advertises boat rentals. Confirm current boat types, availability, policies, and weather rules directly with the marina.",
    },
    {
      question: "Is Kirby Landing the same as Kirby Landing Marina?",
      answer:
        "They share the same lake area, but public campground and recreation facilities are managed separately from the commercial marina operation. Check the correct source for each need.",
    },
  ],
  related: [
    { href: "/lake-greeson", label: "Lake Greeson" },
    { href: "/lake-greeson-camping-swimming", label: "Camping & Swimming" },
    { href: "/lake-greeson-marinas-boat-rentals", label: "Marinas & Rentals" },
    { href: "/daisy-state-park", label: "Daisy State Park" },
    { href: "/murfreesboro-cabins", label: "Lodging Guide" },
  ],
  cta: {
    title: "Check the public campground and the marina separately.",
    text:
      "That one step prevents most confusion about reservations, rentals, ramps, lodging, slips, and what is actually available when you arrive.",
  },
  planningTable: {
    eyebrow: "Who Handles What",
    title: "Use the right source for the question.",
    intro:
      "Kirby Landing works as one place on the map, but the public and commercial pieces have different booking systems.",
    columns: ["Need", "Check", "Examples"],
    rows: [
      ["Campsite or public facilities", "Recreation.gov", "Site, ramp, beach, playground, showers"],
      ["Rental boat or marina service", "Kirby Landing Marina", "Boat, slip, store, lodging, fishing guide"],
      ["Lake-wide notices", "Corps of Engineers", "Closures, recreation information, current notices"],
    ],
  },
  sourceLinks: [
    {
      title: "Kirby Landing Campground",
      href: "https://www.recreation.gov/camping/campgrounds/233531",
      text: "Official federal campground, reservation, and public-facility details.",
    },
    {
      title: "Kirby Landing Marina",
      href: "https://www.kirbylandingmarina.com/",
      text: "Official commercial marina, rental, lodging, store, and service information.",
    },
  ],
};

export const guidePages = {
  thingsToDo: thingsToDoGuide,
  crater: craterGuide,
  nearCrater: nearCraterGuide,
  lake: lakeGreesonGuide,
  cabins: cabinsGuide,
  restaurants: restaurantsGuide,
  family: familyGuide,
  dayTrips: dayTripsGuide,
  lakeFishing: lakeGreesonFishingGuide,
  lakeCampingSwimming: lakeGreesonCampingSwimmingGuide,
  lakeMarinas: lakeGreesonMarinasGuide,
  daisyStatePark: daisyStateParkGuide,
  swaha: swahaGuide,
  kirbyLanding: kirbyLandingGuide,
};

