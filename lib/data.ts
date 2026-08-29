export type ListingMode = "buy" | "rent" | "commercial";

export type PropertyType =
  | "villa"
  | "apartment"
  | "penthouse"
  | "bungalow"
  | "townhouse"
  | "office"
  | "retail"
  | "warehouse";

export interface Agent {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  avatar: string;
  bio: string;
  listings: number;
  experienceYears: number;
  specialty: string;
  verified: boolean;
}

export interface FloorPlan {
  name: string;
  rooms: string;
  area: string;
  image: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: string;
  area: string;
  price: number;
  mode: ListingMode;
  type: PropertyType;
  beds: number;
  baths: number;
  areaSqft: number;
  yearBuilt: number;
  description: string[];
  highlights: string[];
  amenities: string[];
  feature: boolean;
  featured: boolean;
  status: "available" | "under-offer" | "sold" | "new";
  images: string[];
  floorPlans: FloorPlan[];
  agentId: string;
  lat: number;
  lng: number;
  additionalFees?: string;
  possession?: string;
}

/* ----------------------------------------------------------------------- */
/*  Images — curated Unsplash CDN references (stable, real photography).    */
/* ----------------------------------------------------------------------- */
const IMG = {
  villaDusk:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
  villaPool:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
  modernLiving:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  kitchen:
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80",
  bedroom:
    "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1600&q=80",
  bathroom:
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80",
  exteriorGlass:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  penthouse:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
  livingGold:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  officeLobby:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  officeSpace:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
  retail:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
  warehouse:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
  loft:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
  courtyard:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
  townhouse:
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1600&q=80",
  glassHall:
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80",
  dining:
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&q=80",
  stair:
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=80",
  garden:
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80",
};

/* ----------------------------------------------------------------------- */
/*  Agents                                                                 */
/* ----------------------------------------------------------------------- */
export const agents: Agent[] = [
  {
    id: "a-1",
    name: "Ishaan Kapoor",
    role: "Founder · Principal Adviser",
    phone: "+91 98200 11400",
    email: "ishaan@aurelia.estate",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio: "Two decades across investment-grade residential. Ishaan founded Aurelia with a single conviction — that buying a home should be as considered as building one.",
    listings: 214,
    experienceYears: 21,
    specialty: "Heirloom residences",
    verified: true,
  },
  {
    id: "a-2",
    name: "Meera Nair",
    role: "Head of Private Sales",
    phone: "+91 98220 33210",
    email: "meera@aurelia.estate",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Meera curates the most discreet mandates in the city — a hand-selected portfolio of homes that never appear on public portals.",
    listings: 178,
    experienceYears: 15,
    specialty: "Off-market & penthouses",
    verified: true,
  },
  {
    id: "a-3",
    name: "Arjun Mehta",
    role: "Director · Commercial",
    phone: "+91 99300 55440",
    email: "arjun@aurelia.estate",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio: "From boutique storefronts to full-floor office mandates, Arjun has spent a decade matching businesses with spaces that carry their brand.",
    listings: 96,
    experienceYears: 11,
    specialty: "Commercial & retail",
    verified: true,
  },
  {
    id: "a-4",
    name: "Sana Sheikh",
    role: "Senior Estate Manager",
    phone: "+91 98110 77890",
    email: "sana@aurelia.estate",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Sana manages the largest portfolio of villas on the western coast, and is the quiet force behind dozens of closed transactions this year.",
    listings: 149,
    experienceYears: 9,
    specialty: "Coastal villas",
    verified: true,
  },
  {
    id: "a-5",
    name: "Rohan Desai",
    role: "Associate · Sales",
    phone: "+91 98210 99880",
    email: "rohan@aurelia.estate",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Elite property for first and second homes alike. Rohan is known for leaving nothing to chance in the final stretch of a deal.",
    listings: 121,
    experienceYears: 7,
    specialty: "New launches",
    verified: true,
  },
  {
    id: "a-6",
    name: "Ananya Iyer",
    role: "Associate · Leasing",
    phone: "+91 99670 44560",
    email: "ananya@aurelia.estate",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80",
    bio: "Ananya brings a designer's eye to leasing — pairing rare interiors with discerning tenants and making sure every detail is perfect on move-in day.",
    listings: 88,
    experienceYears: 6,
    specialty: "Premium leasing",
    verified: false,
  },
];

export function getAgent(id: string): Agent {
  return agents.find((a) => a.id === id) ?? agents[0];
}

/* ----------------------------------------------------------------------- */
/*  Properties                                                             */
/* ----------------------------------------------------------------------- */
export const properties: Property[] = [
  {
    id: "p-1",
    slug: "the-ivory-house-worli",
    title: "The Ivory House",
    location: "Worli Sea Face, Mumbai",
    city: "Mumbai",
    area: "Worli",
    price: 128000000,
    mode: "buy",
    type: "penthouse",
    beds: 4,
    baths: 5,
    areaSqft: 6840,
    yearBuilt: 2021,
    description: [
      "Set high above Worli Sea Face, The Ivory House is a full-floor residence of rare composure. A 90-metre double-height living hall opens to a gallery of water on three sides, framing the Bay and the bandra skyline through floor-to-ceiling glazing.",
      "Every surface was resolved to silence: honed Italian marble underfoot, hand-oiled walnut millwork, and a bespoke brass staircase that rises through the core of the home. The residence is delivered with its full-turnkey interiors, a private duplex, and two dedicated car parks.",
    ],
    highlights: [
      "Private duplex with sea-facing terrace",
      "Two dedicated car parks",
      "Smart-home automation throughout",
      "Staff quarters & maids' kitchen",
    ],
    amenities: [
      "Double-height living hall",
      "Private lift lobby",
      "Wine cellar",
      "Gymnasium & spa pool",
      "24/7 concierge",
      "Valet & guest parking",
    ],
    feature: true,
    featured: true,
    status: "new",
    images: [
      IMG.penthouse,
      IMG.livingGold,
      IMG.bedroom,
      IMG.bathroom,
      IMG.kitchen,
      IMG.dining,
      IMG.stair,
    ],
    floorPlans: [
      { name: "Upper Level", rooms: "3 Bed · 3 Bath", area: "3,940 sq ft", image: IMG.livingGold },
      { name: "Duplex Level", rooms: "1 Bed · 2 Bath", area: "2,900 sq ft", image: IMG.bedroom },
    ],
    agentId: "a-2",
    lat: 19.0176,
    lng: 72.8163,
    possession: "Ready to move",
    additionalFees: "Stamp duty & registration applicable as per state guidelines.",
  },
  {
    id: "p-2",
    slug: "solas-villa-alibaug",
    title: "Solas Villa",
    location: "Alibaug, Maharashtra",
    city: "Alibaug",
    area: "Alibaug",
    price: 174000000,
    mode: "buy",
    type: "villa",
    beds: 5,
    baths: 6,
    areaSqft: 11000,
    yearBuilt: 2022,
    description: [
      "Solas is an eleven-thousand-square-foot coastal estate wrapped around a private Mangalore-tile courtyard. Six pavilions step down a terraced plot toward the water, each with its own verandah and view of the horizon.",
      "The architecture trades the usual glamour for restraint — raw plaster, recycled teak, and bronze-framed glass that lets the garden do the talking. A 55-foot pool, sunken lounge, and a separate guest cottage complete the compound.",
    ],
    highlights: [
      "55-ft infinity-edge pool",
      "Private beach access",
      "Guest cottage with kitchen",
      "Fully furnished",
    ],
    amenities: [
      "Open-air pavilions",
      "Sunken courtyard lounge",
      "Outdoor kitchen & firepit",
      "Tennis-enclosure lawn",
      "Solar & borewell self-sufficiency",
      "Caretaker's quarters",
    ],
    feature: true,
    featured: true,
    status: "available",
    images: [IMG.villaPool, IMG.villaDusk, IMG.garden, IMG.dining, IMG.kitchen, IMG.bedroom],
    floorPlans: [
      { name: "Main House", rooms: "4 Bed · 5 Bath", area: "8,200 sq ft", image: IMG.villaDusk },
      { name: "Guest Cottage", rooms: "1 Bed · 1 Bath", area: "2,800 sq ft", image: IMG.garden },
    ],
    agentId: "a-4",
    lat: 18.6414,
    lng: 72.8726,
    possession: "Ready to move",
    additionalFees: "Non-agricultural conversion completed; title clear.",
  },
  {
    id: "p-3",
    slug: "arteria-residence-indiranagar",
    title: "Arteria Residence",
    location: "Indiranagar, Bengaluru",
    city: "Bengaluru",
    area: "Indiranagar",
    price: 950000,
    mode: "rent",
    type: "apartment",
    beds: 3,
    baths: 3,
    areaSqft: 2450,
    yearBuilt: 2020,
    description: [
      "A generous three-bedroom apartment in the heart of Indiranagar, finished in warm oak and calm stone. The living room opens onto a deep balcony overlooking the tree-lined main street — close enough to taste the cafés, quiet enough to read.",
      "Residents share a rooftop lounge, a co-working wing, and a small orchard garden. Furnished on request, with a private parking bay and 24-hour security.",
    ],
    highlights: [
      "Rooftop lounge & orchard",
      "In-house co-working wing",
      "Furnished option",
      "Private parking bay",
    ],
    amenities: [
      "Deep balcony",
      "Modular kitchen",
      "Air-conditioned bedrooms",
      "Service lift",
      "Visitor parking",
      "Pet friendly",
    ],
    feature: false,
    featured: false,
    status: "available",
    images: [IMG.modernLiving, IMG.kitchen, IMG.bedroom, IMG.bathroom],
    floorPlans: [{ name: "Level 12", rooms: "3 Bed · 3 Bath", area: "2,450 sq ft", image: IMG.modernLiving }],
    agentId: "a-5",
    lat: 12.9719,
    lng: 77.6412,
    possession: "Immediate",
    additionalFees: "Maintenance of ₹18,000/month included in rent.",
  },
  {
    id: "p-4",
    slug: "Astra-Park-Floor-ifc",
    title: "Astra — Full Floor, BKC",
    location: "Bandra Kurla Complex, Mumbai",
    city: "Mumbai",
    area: "BKC",
    price: 780000,
    mode: "commercial",
    type: "office",
    beds: 0,
    baths: 4,
    areaSqft: 18800,
    yearBuilt: 2019,
    description: [
      "A contiguous 18,800 sq ft full floor in a LEED Gold tower at Bandra Kurla Complex. The floor is delivered with raised access flooring, a central atrium, and dual power feeds — built for a headquarters that means to stay.",
      "BKC's Grade-A office bench has thinned since 2019; this floor offers rare scale and instant availability in the country's most liquid commercial address.",
    ],
    highlights: [
      "LEED Gold certified tower",
      "Raised access flooring",
      "Two full power feeds",
      "Atrium with double height",
    ],
    amenities: [
      "Central atrium",
      "High-speed passenger lifts",
      "Smart building management",
      "Banquet & conferencing wing",
      "Six-level basement parking",
      "On-site F&B court",
    ],
    feature: true,
    featured: true,
    status: "available",
    images: [IMG.officeLobby, IMG.officeSpace, IMG.glassHall],
    floorPlans: [
      { name: "North Wing", rooms: "Open plan", area: "11,200 sq ft", image: IMG.officeSpace },
      { name: "South Wing", rooms: "Cabins + Open", area: "7,600 sq ft", image: IMG.officeLobby },
    ],
    agentId: "a-3",
    lat: 19.0633,
    lng: 72.8386,
    possession: "Immediate",
    additionalFees: "Rent exclusive of GST & CAM charges.",
  },
  {
    id: "p-5",
    slug: "mira-villa-north-goa",
    title: "Mira Villa",
    location: "Assagao, North Goa",
    city: "Goa",
    area: "Assagao",
    price: 86000000,
    mode: "buy",
    type: "villa",
    beds: 4,
    baths: 4,
    areaSqft: 6800,
    yearBuilt: 2021,
    description: [
      "Quietly nestled among the paddy fields of Assagao, Mira is a tropical-modern villa built for slow living. A long sloped roof, warm whitewashed walls and a central pool make the indoors feel like a shaded courtyard.",
      "Four en-suite bedrooms open onto the gardens, and the upper lounge frames the sunset across the fields. Walking distance to the village's celebrated restaurants and quiet coastal roads.",
    ],
    highlights: [
      "Private 35-ft pool",
      "4 en-suite bedrooms",
      "Sunset upper lounge",
      "10 minutes to the coast",
    ],
    amenities: [
      "Courtyard pool",
      "Outdoor shower garden",
      "Wine & pantry room",
      "Staff bedroom",
      "Solar array",
      "Hammock orchard",
    ],
    feature: false,
    featured: true,
    status: "under-offer",
    images: [IMG.villaDusk, IMG.courtyard, IMG.garden, IMG.bedroom, IMG.dining],
    floorPlans: [
      { name: "Ground", rooms: "2 Bed · 2 Bath", area: "3,600 sq ft", image: IMG.courtyard },
      { name: "Upper", rooms: "2 Bed · 2 Bath", area: "3,200 sq ft", image: IMG.bedroom },
    ],
    agentId: "a-4",
    lat: 15.6712,
    lng: 73.7566,
    possession: "Ready to move",
    additionalFees: "Includes all fixtures, fittings and pool equipment.",
  },
  {
    id: "p-6",
    slug: "the-glass-pavilion-gurugram",
    title: "The Glass Pavilion",
    location: "Golf Course Road, Gurugram",
    city: "Gurugram",
    area: "Golf Course Road",
    price: 42000000,
    mode: "buy",
    type: "penthouse",
    beds: 3,
    baths: 4,
    areaSqft: 4200,
    yearBuilt: 2020,
    description: [
      "Perched atop a slim residential tower, The Glass Pavilion is an all-glass triplex with a double-height sky lounge and a wraparound terrace that looks down the length of Golf Course Road.",
      "The interiors lean on brushed brass, smoked oak and pale stone — a quiet, monied palette that lets the city view do the work. Includes two automated car parks and a private lift.",
    ],
    highlights: [
      "Triplex with sky lounge",
      "Wraparound terrace",
      "Private lift",
      "2 automated car parks",
    ],
    amenities: [
      "Double-height lounge",
      "Fully automated home",
      "Temperature-controlled wine wall",
      "Gym & steam",
      "Concierge desk",
      "24/7 security",
    ],
    feature: true,
    featured: false,
    status: "new",
    images: [IMG.penthouse, IMG.glassHall, IMG.livingGold, IMG.bedroom, IMG.kitchen],
    floorPlans: [
      { name: "Sky Lounge", rooms: "Living + Study", area: "1,800 sq ft", image: IMG.glassHall },
      { name: "Bed Level", rooms: "3 Bed · 4 Bath", area: "2,400 sq ft", image: IMG.bedroom },
    ],
    agentId: "a-2",
    lat: 28.4595,
    lng: 77.0266,
    possession: "Ready to move",
    additionalFees: "Clubhouse membership transferable.",
  },
  {
    id: "p-7",
    slug: "lantern-retail-terrace-bandra",
    title: "Lantern — Retail Terrace",
    location: "Bandra West, Mumbai",
    city: "Mumbai",
    area: "Bandra West",
    price: 425000,
    mode: "commercial",
    type: "retail",
    beds: 0,
    baths: 1,
    areaSqft: 2300,
    yearBuilt: 2018,
    description: [
      "A high-footfall retail space on Bandra's Hill Road with double street frontage and a sheltered terrace. Currently fitted for a fashion flagship, with generous power, a wrap-around glazing and direct loading access.",
      "One of the rare ground-floor tenures on this stretch with an open café line — suited to retail, F&B or a flagship showroom.",
    ],
    highlights: [
      "Double street frontage",
      "Sheltered front terrace",
      "Fashion-fit electricals",
      "Direct loading access",
    ],
    amenities: [
      "Ground-floor tenure",
      "Café pavement line",
      "Dedicated power feed",
      "Service lift",
      "Basement storage",
      "24-hour high street",
    ],
    feature: false,
    featured: false,
    status: "available",
    images: [IMG.retail, IMG.officeSpace],
    floorPlans: [{ name: "Street Level", rooms: "Open retail", area: "2,300 sq ft", image: IMG.retail }],
    agentId: "a-3",
    lat: 19.0596,
    lng: 72.8295,
    possession: "Immediate",
    additionalFees: "CAM & minor taxes billed separately.",
  },
  {
    id: "p-8",
    slug: "kinara-house-hyderabad",
    title: "Kinara House",
    location: "Jubilee Hills, Hyderabad",
    city: "Hyderabad",
    area: "Jubilee Hills",
    price: 52000000,
    mode: "buy",
    type: "villa",
    beds: 4,
    baths: 5,
    areaSqft: 7400,
    yearBuilt: 2019,
    description: [
      "Kinara is a tree-shaded four-bedroom villa in Jubilee Hills, built around a central water court. Cool stone floors, deep verandahs and a private garden make it feel far larger and far calmer than its footprint.",
      "The layout is designed for family life and effortless entertaining, with a separate study, a media den, and a catering kitchen adjoining the main one.",
    ],
    highlights: [
      "Central water court",
      "Media den & study",
      "Catering kitchen",
      "Private garden",
    ],
    amenities: [
      "Deep verandahs",
      "Guest suite",
      "Basement gym",
      "Home-office",
      "Car park for four",
      "Solar hot water",
    ],
    feature: false,
    featured: false,
    status: "available",
    images: [IMG.courtyard, IMG.garden, IMG.livingGold, IMG.bedroom],
    floorPlans: [
      { name: "Ground", rooms: "2 Bed · 3 Bath", area: "3,900 sq ft", image: IMG.courtyard },
      { name: "Upper", rooms: "2 Bed · 2 Bath", area: "3,500 sq ft", image: IMG.garden },
    ],
    agentId: "a-1",
    lat: 17.413,
    lng: 78.4076,
    possession: "Ready to move",
    additionalFees: "Clear & marketable title with encumbrance certificate.",
  },
  {
    id: "p-9",
    slug: "atelier-loft-powai",
    title: "Atelier Loft",
    location: "Powai, Mumbai",
    city: "Mumbai",
    area: "Powai",
    price: 185000,
    mode: "rent",
    type: "apartment",
    beds: 2,
    baths: 2,
    areaSqft: 1520,
    yearBuilt: 2021,
    description: [
      "A bright corner loft above the lake in Powai, with a mezzanine study and walls of glazing that flood the room with light. Raw concrete and smoked teak give it a gallery feel that works for creatives and founders alike.",
      "The building has a shared rooftop deck, a small gym, and is minutes from the tech parks along the lakefront.",
    ],
    highlights: [
      "Mezzanine study",
      "Corner glazing",
      "Rooftop deck",
      "Lakefront proximity",
    ],
    amenities: [
      "Shared rooftop deck",
      "Building gym",
      "High-speed fibre",
      "Visitor parking",
      "Pet friendly",
      "Smart locks",
    ],
    feature: false,
    featured: false,
    status: "available",
    images: [IMG.loft, IMG.modernLiving, IMG.bedroom],
    floorPlans: [{ name: "Level 6", rooms: "2 Bed + Study", area: "1,520 sq ft", image: IMG.loft }],
    agentId: "a-6",
    lat: 19.1176,
    lng: 72.906,
    possession: "Immediate",
    additionalFees: "Maintenance ₹9,500/month included.",
  },
  {
    id: "p-10",
    slug: "crown-logs-warehouse-bhiwandi",
    title: "Crown Logs — Warehouse",
    location: "Bhiwandi, Maharashtra",
    city: "Bhiwandi",
    area: "Bhiwandi",
    price: 3800000,
    mode: "commercial",
    type: "warehouse",
    beds: 0,
    baths: 2,
    areaSqft: 64000,
    yearBuilt: 2017,
    description: [
      "A 64,000 sq ft modern logistics warehouse with a clear height of 11 metres, six dock-level loading bays and dedicated power of 250 kVA. Situated on the Bhiwandi–Mumbai belt with direct access to the Western Express Highway.",
      "The facility offers a large truck yard, office annexe, and full gated security — suited to distribution and third-party logistics operators.",
    ],
    highlights: [
      "11 m clear height",
      "6 dock-level bays",
      "250 kVA power",
      "Direct W.E.H. access",
    ],
    amenities: [
      "Large truck yard",
      "Office annexe",
      "Gated security",
      "SOP covered loading",
      "Fire suppression",
      "Ample parking",
    ],
    feature: true,
    featured: false,
    status: "under-offer",
    images: [IMG.warehouse, IMG.officeSpace],
    floorPlans: [{ name: "Shed", rooms: "Open warehouse", area: "64,000 sq ft", image: IMG.warehouse }],
    agentId: "a-3",
    lat: 19.2254,
    lng: 73.0446,
    possession: "Lease renewal available",
    additionalFees: "Lease: lock-in 3 years, escalation 7% p.a.",
  },
  {
    id: "p-11",
    slug: "meridian-terrace-south-delhi",
    title: "Meridian Terrace",
    location: "Greater Kailash II, New Delhi",
    city: "New Delhi",
    area: "GK II",
    price: 98000000,
    mode: "buy",
    type: "townhouse",
    beds: 4,
    baths: 5,
    areaSqft: 7900,
    yearBuilt: 2018,
    description: [
      "A rare four-storey townhouse in Greater Kailash II with a private terrace and a double-height garden salon. The home keeps the original sense of light and air that makes South Delhi's older properties so sought-after.",
      "Finished in warm limestone and dark oak, with a dedicated entertainment level, an office, and a separate service entrance. Two covered car parks and a staff room complete the package.",
    ],
    highlights: [
      "Private rooftop terrace",
      "Double-height garden salon",
      "Entertainment level",
      "Two covered car parks",
    ],
    amenities: [
      "Private terrace",
      "Home office",
      "Service entrance",
      "Staff quarter",
      "Basement parking",
      "Individual security",
    ],
    feature: false,
    featured: true,
    status: "new",
    images: [IMG.townhouse, IMG.livingGold, IMG.dining, IMG.bedroom],
    floorPlans: [
      { name: "Garden Level", rooms: "Salon + Office", area: "2,400 sq ft", image: IMG.livingGold },
      { name: "Upper Levels", rooms: "4 Bed · 5 Bath", area: "5,500 sq ft", image: IMG.dining },
    ],
    agentId: "a-1",
    lat: 28.5355,
    lng: 77.2088,
    possession: "Ready to move",
    additionalFees: "Transferable DDA approved layout.",
  },
  {
    id: "p-12",
    slug: "harbor-loft-cuffe-parade",
    title: "Harbor Loft",
    location: "Cuffe Parade, Mumbai",
    city: "Mumbai",
    area: "Cuffe Parade",
    price: 735000,
    mode: "rent",
    type: "apartment",
    beds: 3,
    baths: 4,
    areaSqft: 3800,
    yearBuilt: 2020,
    description: [
      "A full-floor apartment on the harbour line at Cuffe Parade with uninterrupted water views from every principal room. The residence is furnished to appointment — Italian sofas, a chef's kitchen and smart lighting throughout.",
      "Residents have access to an infinity pool, a residents' club, and a private marina lounge in the adjoining tower.",
    ],
    highlights: [
      "Uninterrupted sea views",
      "Fully furnished",
      "Infinity pool access",
      "Private marina lounge",
    ],
    amenities: [
      "Chef's kitchen",
      "Infinity pool",
      "Residents' club",
      "Concierge",
      "Valet parking",
      "Smart lighting",
    ],
    feature: true,
    featured: false,
    status: "available",
    images: [IMG.livingGold, IMG.penthouse, IMG.bedroom, IMG.bathroom],
    floorPlans: [{ name: "Full Floor", rooms: "3 Bed · 4 Bath", area: "3,800 sq ft", image: IMG.livingGold }],
    agentId: "a-2",
    lat: 18.9218,
    lng: 72.8239,
    possession: "Immediate",
    additionalFees: "Fully furnished; utilities billed separately.",
  },
  {
    id: "p-13",
    slug: "hemlock-terrace-bengaluru",
    title: "Hemlock Terrace",
    location: "Koramangala, Bengaluru",
    city: "Bengaluru",
    area: "Koramangala",
    price: 34000000,
    mode: "buy",
    type: "bungalow",
    beds: 3,
    baths: 3,
    areaSqft: 4100,
    yearBuilt: 2016,
    description: [
      "A single-storey bungalow set back from the street on a landscaped plot in Koramangala. Deep overhangs, exposed brick and a generous central garden keep the home cool and calm through the afternoon.",
      "A separate garage block with a studio above, and quiet side access, make it as practical as it is beautiful.",
    ],
    highlights: [
      "Single-storey layout",
      "Garage studio block",
      "Landscaped garden",
      "Discreet side access",
    ],
    amenities: [
      "Central garden",
      "Garage studio",
      "Outdoor dining",
      "Rainwater harvesting",
      "Solar panels",
      "Home office",
    ],
    feature: false,
    featured: false,
    status: "available",
    images: [IMG.exteriorGlass, IMG.garden, IMG.kitchen, IMG.bedroom],
    floorPlans: [{ name: "Ground", rooms: "3 Bed · 3 Bath", area: "4,100 sq ft", image: IMG.exteriorGlass }],
    agentId: "a-5",
    lat: 12.9279,
    lng: 77.6271,
    possession: "Ready to move",
    additionalFees: "B-Khata regularised; garden maintained by association.",
  },
  {
    id: "p-14",
    slug: "veranda-penthouse-jaipur",
    title: "Veranda Penthouse",
    location: "C-Scheme, Jaipur",
    city: "Jaipur",
    area: "C-Scheme",
    price: 520000,
    mode: "rent",
    type: "penthouse",
    beds: 4,
    baths: 5,
    areaSqft: 5200,
    yearBuilt: 2019,
    description: [
      "A boutique penthouse above the city walls in C-Scheme, with four en-suite bedrooms and a wrap-around verandah that faces the Aravalli skyline. The interiors blend Jaipur's heritage of block-printed textiles with clean contemporary lines.",
      "Furnished and staffed-ready, with a private pool on the terrace and access to the building's fitness and spa facilities.",
    ],
    highlights: [
      "Wrap-around verandah",
      "Private terrace pool",
      "Fully furnished",
      "Spa & fitness access",
    ],
    amenities: [
      "Terrace pool",
      "Block-print interiors",
      "Concierge",
      "Spa & steam",
      "Automated shade",
      "Visitor parking",
    ],
    feature: false,
    featured: false,
    status: "available",
    images: [IMG.penthouse, IMG.livingGold, IMG.garden, IMG.bedroom],
    floorPlans: [{ name: "Penthouse", rooms: "4 Bed · 5 Bath", area: "5,200 sq ft", image: IMG.penthouse }],
    agentId: "a-6",
    lat: 26.9216,
    lng: 75.7932,
    possession: "Immediate",
    additionalFees: "Maintenance & utilities billed separately.",
  },
];

export function getProperty(idOrSlug: string): Property | undefined {
  return properties.find(
    (p) => p.id === idOrSlug || p.slug === idOrSlug
  );
}

export function getRelated(property: Property, count = 3): Property[] {
  return properties
    .filter((p) => p.id !== property.id && p.city === property.city)
    .concat(properties.filter((p) => p.id !== property.id && p.city !== property.city))
    .slice(0, count);
}

/* ----------------------------------------------------------------------- */
/*  Testimonials                                                           */
/* ----------------------------------------------------------------------- */
export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Aurelia found us a sea-facing home we didn't even know existed. The process was so quiet and considered that, halfway through, we forgot we were buying a property at all.",
    name: "Anil & Radhika Sharma",
    detail: "Purchased The Ivory House, Worli",
    rating: 5,
  },
  {
    quote:
      "They advised against a property we'd already fallen for. I'm grateful for it — the home we finally bought has appreciated more in eighteen months than the first would have in a decade.",
    name: "Vikram Talwar",
    detail: "Invested · Golf Course Road",
    rating: 5,
  },
  {
    quote:
      "The villa was handed over exactly as promised, down to the pool equipment. The fittings they source are better than anything we'd have chosen ourselves.",
    name: "Sara & Dev Patel",
    detail: "Purchased Solas Villa, Alibaug",
    rating: 5,
  },
];

/* ----------------------------------------------------------------------- */
/*  Stats & curation                                                       */
/* ----------------------------------------------------------------------- */
export const stats = [
  { value: "₹7,400 Cr", label: "Portfolio transacted" },
  { value: "2,300+", label: "Homes advised" },
  { value: "94%", label: "Repeat & referral buyers" },
  { value: "16", label: "Years of discretion" },
];

export const cities = ["Mumbai", "Bengaluru", "Delhi NCR", "Goa", "Hyderabad", "Pune", "Jaipur"];

export function formatINR(value: number, compact = false): string {
  const n = new Intl.NumberFormat("en-IN", {
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);
  return "₹" + n;
}
