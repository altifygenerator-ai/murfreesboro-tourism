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
};

export const thingsToDoGuide: GuidePageData = {
  slug: "things-to-do-in-murfreesboro-arkansas",
  metadata: {
    title: "Things To Do in Murfreesboro Arkansas | Crater of Diamonds, Lake Greeson & Local Stops",
    description:
      "A practical guide to things to do in Murfreesboro, Arkansas, including Crater of Diamonds, Lake Greeson, Swaha, Dam Grill, Ka-Do-Ha, Dino Dig, restaurants, cabins, family stops, and nearby day trips.",
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
    { href: "/lake-greeson", label: "Lake Greeson" },
    { href: "/murfreesboro-family-trip", label: "Family Trip" },
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
    title: "Crater of Diamonds Guide | What To Know Before Visiting Murfreesboro Arkansas",
    description:
      "A practical Crater of Diamonds State Park guide for Murfreesboro visitors, with planning notes for diamond digging, kids, heat, what to bring, nearby food, Lake Greeson, and family trips.",
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
    { href: "/murfreesboro-restaurants", label: "Restaurants" },
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
    title: "Murfreesboro Arkansas Family Trip Guide | Crater of Diamonds, Lake Greeson & Kids",
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
    title: "Day Trips From Murfreesboro Arkansas | Lake Greeson, Glenwood, Mount Ida & Hot Springs",
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
  ],
  cta: {
    title: "Start with Murfreesboro, then choose the direction that fits your weekend.",
    text:
      "Build around Crater of Diamonds, Lake Greeson, and lodging first. Then decide whether Glenwood, Mount Ida, Hot Springs, or a more rugged Ouachita drive belongs in the same trip.",
  },
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
};

