/**
 * Bluebonnet Homes RGV — Central Verified Brand, Portfolio & Contact Configuration
 *
 * VERIFICATION NOTE (Phase 1.1 Compliance):
 * The live Bluebonnet Homes website (https://bluebonnethomesrgv.com/) and its Google Maps
 * listing display `(956) 555-0198`. Because `555-01xx` numbers are North American Numbering Plan
 * placeholder ranges, this value is isolated below in `SITE_CONFIG.contact.phone` with an explicit
 * `isPendingClientVerification: true` flag so the client can swap in their verified production line
 * in one place without touching any component code.
 */

export interface PortfolioProject {
  slug: string;
  idNumber: string;
  name: string;
  subtitle: string;
  location: string;
  year: string;
  style: string;
  sqft: string;
  beds: number;
  baths: number;
  lotContext: string;
  summary: string;
  architecturalNarrative: string;
  signatureFeatures: string[];
  heroImage: string;
  secondaryImage: string;
  gallery: Array<{
    src: string;
    alt: string;
    caption: string;
    category: "Exterior" | "Living & Foyer" | "Kitchen & Dining" | "Primary Suite & Bath";
  }>;
}

export interface ProcessPhase {
  step: string;
  phaseLabel: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  clientExperience: string;
  image: string;
  secondaryImage: string;
}

export interface ResourceArticle {
  slug: string;
  category: string;
  readTime: string;
  publishDate: string;
  title: string;
  excerpt: string;
  heroImage: string;
  keyTakeaways: string[];
  sections: Array<{
    heading: string;
    body: string;
  }>;
}

export const SITE_CONFIG = {
  brand: {
    name: "Bluebonnet Homes",
    legalName: "Bluebonnet Homes RGV",
    tagline: "Quality · Craftsmanship · Texas Tradition",
    positioning:
      "Bespoke Custom Home Building Across the Rio Grande Valley — Thoughtfully Managed From Lot Evaluation to Final Commissioning.",
    founders: "Michael & Ana",
    foundersRole: "Founders & Principal Builders",
    logoDark: "/brand/blubonnet-logo.svg",
    logoLight: "/brand/blubonnet-logo-white.svg",
    crestImage: "/brand/portfolio-logos-3.png",
    anaPortrait: "/images/founders/ana-founder-portrait.jpg",
    costGuidePdf: "/documents/Bluebonnet-Homes-Cost-Guide.pdf"
  },
  contact: {
    addressLine1: "2112 S Shary Rd, Ste 252",
    cityStateZip: "Mission, TX 78572",
    fullAddress: "2112 S Shary Rd, Ste 252, Mission, TX 78572",
    region: "Rio Grande Valley, South Texas",
    serviceAreas: [
      "Mission",
      "McAllen",
      "Edinburg",
      "Pharr",
      "Sharyland",
      "Palmhurst",
      "Weslaco",
      "Harlingen"
    ],
    phoneDisplay: "(956) 555-0198",
    phoneHref: "tel:+19565550198",
    isPendingClientVerification: true,
    verificationNote:
      "Displayed number matches bluebonnethomesrgv.com; isolated in src/config/site.ts for one-line replacement upon final client phone confirmation.",
    hours: "Monday – Friday · 9:00 AM – 5:30 PM CST (Saturday by Private Appointment)"
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "The Process", href: "/process" },
    { label: "About Michael & Ana", href: "/about" },
    { label: "Resources & Cost Guide", href: "/resources" },
    { label: "Private Consultation", href: "/contact" }
  ],
  heroVideo: {
    mp4Url: "/videos/header-video-design.mp4",
    timelapseUrl: "/videos/construction-timelapse.mp4",
    posterDay: "/images/day-night/01-daylight.jpg",
    posterGolden: "/images/day-night/02-golden-hour.jpg",
    posterBlueHour: "/images/day-night/03-blue-hour.jpg",
    posterNight: "/images/day-night/04-night.jpg"
  }
};

export const DAY_NIGHT_STATES = [
  {
    id: "daylight",
    index: "01",
    label: "South Texas Daylight",
    kelvin: "5500K Direct Solar",
    time: "11:00 AM",
    headline: "Crisp Limestone & Stucco Under High Valley Sun",
    description:
      "Deep roof overhangs, high-albedo warm ivory stucco, and Low-E architectural glazing reflect intense midday solar radiation while flooding the double-height foyer with balanced natural daylight.",
    metrics: [
      { label: "Solar Heat Gain (SHGC)", value: "0.22 Low-E" },
      { label: "Exterior Surface", value: "Hand-Troweled Stucco" },
      { label: "Roof Assembly", value: "Ventilated Tile Deck" }
    ],
    image: "/images/day-night/01-daylight.jpg"
  },
  {
    id: "golden-hour",
    index: "02",
    label: "Rio Grande Golden Hour",
    kelvin: "3500K Raking Amber",
    time: "6:45 PM",
    headline: "Warm Raking Light Across Textural Stone & Timber",
    description:
      "As the sun drops toward the western Rio Grande horizon, raking amber light reveals the subtle relief of charcoal slate column cladding, faceted mahogany entry millwork, and warm limestone coping.",
    metrics: [
      { label: "Facade Orientation", value: "West-Protected" },
      { label: "Entry Millwork", value: "Faceted Hardwood" },
      { label: "Sconce Warmup", value: "2700K Dimmed 40%" }
    ],
    image: "/images/day-night/02-golden-hour.jpg"
  },
  {
    id: "blue-hour",
    index: "03",
    label: "Blue Hour Twilight",
    kelvin: "2700K Architectural Glow",
    time: "7:30 PM",
    headline: "Cobalt Dusk Balanced by Integrated Soffit & Column Lighting",
    description:
      "At dusk, recessed soffit downlights and custom vertical column lattice sconces ignite at 2700K, turning the residence into a warm lantern against the deep cobalt South Texas twilight.",
    metrics: [
      { label: "Exterior Luminaires", value: "2700K Warm LED" },
      { label: "Column Sconces", value: "Integrated Linear" },
      { label: "Foyer Chandelier", value: "Double-Height Glow" }
    ],
    image: "/images/day-night/03-blue-hour.jpg"
  },
  {
    id: "night",
    index: "04",
    label: "Nocturnal Sanctuary",
    kelvin: "2400K–2700K Night Scene",
    time: "9:15 PM",
    headline: "Private Evening Calm & Specular Driveway Reflections",
    description:
      "Engineered nocturnal lighting avoids harsh glare, casting measured pools of warm light across the entry stepping pads, specimen landscaping, and hand-laid stone driveway pavers.",
    metrics: [
      { label: "Night Sky Preservation", value: "Shielded Soffit Cutoffs" },
      { label: "Landscape Uplighting", value: "Low-Voltage Brass" },
      { label: "Driveway Pavers", value: "Hand-Set Charcoal Stone" }
    ],
    image: "/images/day-night/04-night.jpg"
  }
];

export const CONSTRUCTION_STAGES = [
  {
    stage: "01",
    title: "Structural CMU Block & Engineered Trusses",
    caption:
      "Reinforced concrete slab foundation, masonry block walls, and engineered roof trusses built for South Texas windstorm and expansive soil conditions.",
    image: "/images/day-night/stage-01-framing.jpg"
  },
  {
    stage: "02",
    title: "Building Envelope, Cladding & Site Hardscape",
    caption:
      "Multi-coat elastomeric stucco, charcoal slate column veneers, frameless glass balcony railings, and interlocking driveway paver bed installation.",
    image: "/images/day-night/stage-02-enclosure.jpg"
  },
  {
    stage: "03",
    title: "Completed Residence — Daylight Commissioning",
    caption:
      "Precision architectural finishes, specimen Rio Grande Valley landscaping, and multi-point quality verification in full daylight.",
    image: "/images/day-night/stage-03-daylight.jpg"
  },
  {
    stage: "04",
    title: "Completed Residence — Twilight Illumination",
    caption:
      "Architectural lighting commissioning across soffits, vertical column sconces, landscape beds, and interior double-height spaces.",
    image: "/images/day-night/stage-04-twilight.jpg"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "the-onyx-and-ivory",
    idNumber: "01",
    name: "The Onyx & Ivory",
    subtitle: "Bold Contemporary Architecture with Warm White Oak & Veined Stone Interiors",
    location: "Edinburg, TX",
    year: "2025",
    style: "Bold Contemporary / Transitional",
    sqft: "2,700 sq ft",
    beds: 4,
    baths: 3.5,
    lotContext: "Build-on-Your-Lot Custom Residence · Edinburg",
    summary:
      "A striking two-story contemporary residence pairing crisp warm-ivory stucco and charcoal slate columns with a double-height great room, custom under-stair wine cellar, and natural white-oak culinary suite.",
    architecturalNarrative:
      "Designed for modern living in Edinburg, The Onyx & Ivory balances bold geometric massing on the exterior with tactile warmth inside. Twin charcoal-clad entry columns with integrated linear sconces frame a sculptural faceted mahogany pivot door. Inside, a two-story living room anchors the plan with a full-height Nero Marquina marble fireplace wall, floating wood-and-steel stairs, and a glass-enclosed wine display room.",
    signatureFeatures: [
      "Twin charcoal slate entry columns with integrated 2700K linear lattice sconces & geometric faceted pivot door",
      "Double-height great room with full-slab black veined marble fireplace wall & clerestory glazing",
      "Floating hardwood-tread staircase with frameless glass balustrade over a custom glass-enclosed wine cellar",
      "Chef's kitchen with natural white-oak cabinetry, fluted wood hood, 6-burner commercial gas range & matte-black pot filler",
      "Primary bath sanctuary featuring floor-to-ceiling dramatic veined stone slabs, freestanding soaking tub & dual rain shower"
    ],
    heroImage: "/images/optimized/onyx-ivory/hero-exterior-daylight.jpg",
    secondaryImage: "/images/optimized/onyx-ivory/hero-exterior-golden-hour.jpg",
    gallery: [
      {
        src: "/images/optimized/onyx-ivory/hero-exterior-daylight.jpg",
        alt: "The Onyx & Ivory front elevation in South Texas daylight",
        caption: "Front Elevation — Crisp Warm Ivory Stucco & Charcoal Slate Cladding",
        category: "Exterior"
      },
      {
        src: "/images/optimized/onyx-ivory/hero-exterior-golden-hour.jpg",
        alt: "The Onyx & Ivory illuminated at twilight dusk",
        caption: "Twilight Commissioning — Integrated 2700K Soffit & Linear Column Sconces",
        category: "Exterior"
      },
      {
        src: "/images/optimized/onyx-ivory/modern-home-front-entrance-walkway-south-texas.webp",
        alt: "Faceted wood front door and octagonal stone walkway",
        caption: "Entry Sequence — Octagonal Stone Pavers & Faceted Mahogany Pivot Door",
        category: "Exterior"
      },
      {
        src: "/images/optimized/onyx-ivory/two-story-living-room-modern-staircase.webp",
        alt: "Double-height living room with black marble fireplace and floating stairs",
        caption: "Great Room — Double-Height Volume, Black Veined Marble & Floating Staircase",
        category: "Living & Foyer"
      },
      {
        src: "/images/optimized/onyx-ivory/custom-wine-cellar-display-rack-black-metal.webp",
        alt: "Glass-enclosed custom wine display room under floating stairs",
        caption: "Bespoke Wine Room — Glass Enclosure & Matte Black Racking Over Veined Stone",
        category: "Living & Foyer"
      },
      {
        src: "/images/optimized/onyx-ivory/custom-kitchen-gas-stove-pot-filler.webp",
        alt: "Custom white oak kitchen with commercial range and pot filler",
        caption: "Culinary Suite — White Oak Cabinetry, Fluted Range Hood & Pot Filler",
        category: "Kitchen & Dining"
      },
      {
        src: "/images/optimized/onyx-ivory/modern-kitchen-island-light-wood-cabinets.webp",
        alt: "Modern kitchen island with light wood cabinets",
        caption: "Kitchen Island — Quartzite Countertops & Custom Light-Wood Millwork",
        category: "Kitchen & Dining"
      },
      {
        src: "/images/optimized/onyx-ivory/luxury-bathroom-freestanding-soaking-tub.webp",
        alt: "Primary bathroom with freestanding soaking tub and marble walls",
        caption: "Primary Bath — Full-Height Veined Stone Slabs & Freestanding Soaking Tub",
        category: "Primary Suite & Bath"
      },
      {
        src: "/images/optimized/onyx-ivory/spacious-double-vanity-bathroom-light-wood.webp",
        alt: "Double vanity with light wood cabinets and backlit mirrors",
        caption: "Primary Vanity — Floating White Oak Double Vanity & Custom Lighting",
        category: "Primary Suite & Bath"
      },
      {
        src: "/images/optimized/onyx-ivory/open-sliding-glass-doors-backyard-access.webp",
        alt: "Multi-panel glass doors opening to backyard patio",
        caption: "Indoor-Outdoor Flow — Multi-Panel Glazing to Covered Rear Patio",
        category: "Exterior"
      }
    ]
  },
  {
    slug: "the-bentley-blanc",
    idNumber: "02",
    name: "The Bentley Blanc",
    subtitle: "Grand Modern Mediterranean Estate with Travertine Portico & Classical Loggia",
    location: "Edinburg, TX",
    year: "2024",
    style: "Modern Mediterranean / Minimalist",
    sqft: "5,100 sq ft",
    beds: 5,
    baths: 6,
    lotContext: "Estate Lot with Circular Drive · Edinburg",
    summary:
      "An expansive 5,100-square-foot Modern Mediterranean residence defined by a soaring travertine-clad arched entry portico, circular ceremonial drive, carved stone rear loggia columns, and sculptural wrought-iron stair artistry.",
    architecturalNarrative:
      "The Bentley Blanc reinterprets Mediterranean estate architecture through a serene, minimalist lens. Approached via a sweeping circular driveway framed by native palms, the two-story travertine entry arch creates an unforgettable sense of arrival. At the rear, classical carved stone columns and a stained wood tongue-and-groove ceiling shelter an expansive outdoor living loggia built for year-round South Texas entertaining.",
    signatureFeatures: [
      "Soaring two-story travertine-clad arched portico with recessed soffit illumination & circular drive",
      "5,100 sq ft five-bedroom, six-bath floor plan with dedicated guest and entertaining wings",
      "Covered rear loggia featuring turned limestone columns and stained tongue-and-groove wood soffit ceilings",
      "Custom hand-forged organic branch-motif wrought-iron staircase balustrade",
      "Bespoke utility & service suite with floor-to-ceiling cabinetry and Mediterranean pattern tilework"
    ],
    heroImage: "/images/optimized/bentley-blanc/genMbmob.427243_2_1-e1776196976349.jpg",
    secondaryImage: "/images/optimized/bentley-blanc/genMbmob.427243_3_1.jpg",
    gallery: [
      {
        src: "/images/optimized/bentley-blanc/genMbmob.427243_2_1-e1776196976349.jpg",
        alt: "The Bentley Blanc twilight front elevation with travertine arch",
        caption: "Twilight Front Elevation — Travertine Portico & Circular Driveway",
        category: "Exterior"
      },
      {
        src: "/images/optimized/bentley-blanc/genMbmob.427243_1_1.jpg",
        alt: "Aerial view of The Bentley Blanc estate in Edinburg",
        caption: "Aerial Estate Perspective — Multi-Hipped Tile Roof & Circular Drive",
        category: "Exterior"
      },
      {
        src: "/images/optimized/bentley-blanc/genMbmob.427243_3_1.jpg",
        alt: "Rear covered patio with carved stone columns and wood ceiling",
        caption: "Rear Loggia — Carved Limestone Columns & Stained Wood Soffit Ceiling",
        category: "Exterior"
      },
      {
        src: "/images/optimized/bentley-blanc/genMbmob.427243_6_1.jpg",
        alt: "Custom wrought iron staircase railing",
        caption: "Staircase Artistry — Hand-Forged Organic Wrought-Iron Balustrade",
        category: "Living & Foyer"
      },
      {
        src: "/images/optimized/bentley-blanc/genMbmob.427243_5_1.jpg",
        alt: "Primary bathroom with slate tile walk-in shower",
        caption: "Bath Suite — Charcoal Slate Walk-In Shower & Custom White Millwork",
        category: "Primary Suite & Bath"
      },
      {
        src: "/images/optimized/bentley-blanc/genMbmob.427243_16_1.jpg",
        alt: "Laundry and utility room with Mediterranean tile backsplash",
        caption: "Service Wing — Full-Height Cabinetry & Patterned Mediterranean Tile",
        category: "Kitchen & Dining"
      }
    ]
  },
  {
    slug: "the-andalusian-estate",
    idNumber: "03",
    name: "The Andalusian Estate",
    subtitle: "Timeless Spanish Mediterranean Craftsmanship with Cantera Columns & Alder Millwork",
    location: "Edinburg, TX",
    year: "2016",
    style: "Tuscan / Spanish Mediterranean",
    sqft: "4,103 sq ft",
    beds: 4,
    baths: 4.5,
    lotContext: "Private Residential Estate · Edinburg",
    summary:
      "A richly detailed 4,103-square-foot Spanish Mediterranean residence showcasing terracotta barrel roof tile, rusticated Texas stone masonry, carved cantera interior columns, and dual-island espresso alder kitchen.",
    architecturalNarrative:
      "Rooted in enduring Texas-Mediterranean tradition, The Andalusian Estate celebrates authentic natural materials at every turn. From the rusticated limestone facade and terracotta barrel tiles to the grand foyer's mosaic floor medallion and carved stone columns, every room is proportioned for multigenerational gathering and effortless indoor-outdoor living.",
    signatureFeatures: [
      "Authentic terracotta clay barrel roof tile paired with hand-laid Texas limestone masonry",
      "Grand foyer with carved cantera stone columns, arched openings, mosaic tile medallion & scrolled iron stair",
      "Dual-island chef's kitchen featuring custom espresso-stained alder cabinetry and exotic granite slabs",
      "Double-height family room anchored by a floor-to-ceiling travertine fireplace and built-in library shelving",
      "Expansive covered veranda with stained wood ceiling and dual tropical ceiling fans overlooking private grounds"
    ],
    heroImage:
      "/images/optimized/andalusian/rio-grande-valley-custom-home-construction-energy-efficient-design-south-texas.jpg",
    secondaryImage:
      "/images/optimized/andalusian/rio-grande-valley-custom-home-interior-grand-entrance-staircase-design-south-texas.jpg",
    gallery: [
      {
        src: "/images/optimized/andalusian/rio-grande-valley-custom-home-construction-energy-efficient-design-south-texas.jpg",
        alt: "The Andalusian Estate front exterior in Edinburg TX",
        caption: "Front Elevation — Spanish Clay Barrel Tile & Texas Limestone Masonry",
        category: "Exterior"
      },
      {
        src: "/images/optimized/andalusian/rio-grande-valley-custom-home-interior-grand-entrance-staircase-design-south-texas.jpg",
        alt: "Grand foyer with stone columns and mosaic floor medallion",
        caption: "Grand Foyer — Cantera Stone Columns, Mosaic Medallion & Wrought-Iron Stair",
        category: "Living & Foyer"
      },
      {
        src: "/images/optimized/andalusian/kitchen-interior-design-rio-grande-valley-custom-home-energy-efficient-building-texas.jpg",
        alt: "Dual island kitchen with dark wood cabinets and granite counters",
        caption: "Culinary Heart — Dual Exotic Granite Islands & Stained Alder Cabinetry",
        category: "Kitchen & Dining"
      },
      {
        src: "/images/optimized/andalusian/rio-grande-valley-custom-builders-stress-free-energy-efficient-home-backyard-patio-south-texas.jpg",
        alt: "Covered backyard veranda with wood ceiling and stone column",
        caption: "Outdoor Veranda — Stained Timber Ceiling & Shaded South Texas Living",
        category: "Exterior"
      },
      {
        src: "/images/optimized/andalusian/rio-grande-valley-custom-home-living-room-fireplace-built-in-shelves-energy-efficient-design.jpg",
        alt: "Living room with stone fireplace and custom built-in shelves",
        caption: "Great Room — Travertine Fireplace Surround & Custom Library Millwork",
        category: "Living & Foyer"
      },
      {
        src: "/images/optimized/andalusian/luxurious-modern-bathroom-design-with-glass-shower-and-wooden-vanity-rio-grande-valley-custom-homes.jpg",
        alt: "Primary bathroom with glass shower and custom wood vanity",
        caption: "Primary Bath — Custom Wood Vanity & Frameless Glass Shower Enclosure",
        category: "Primary Suite & Bath"
      }
    ]
  },
  {
    slug: "the-via-cantera-estate",
    idNumber: "04",
    name: "The Via Cantera Estate",
    subtitle: "Classic Mediterranean Luxury with Mature Palm Court & Artisanal Stonework",
    location: "McAllen, TX",
    year: "2008",
    style: "Classic Mediterranean Luxury",
    sqft: "4,774 sq ft",
    beds: 5,
    baths: 6,
    lotContext: "Established Estate Enclave · McAllen",
    summary:
      "A 4,774-square-foot McAllen estate demonstrating how Bluebonnet Homes' structural integrity, rusticated stone masonry, and custom hardwood interiors age with grace across decades.",
    architecturalNarrative:
      "Built in McAllen, The Via Cantera Estate is a testament to lasting residential craftsmanship. Framed by mature palms and hand-cut Texas fieldstone piers, the single-story-dominant footprint offers generous ceiling heights, warm hardwood floors, arched plaster galleries, and a custom maple-and-granite kitchen designed for warm family hospitality.",
    signatureFeatures: [
      "Hand-cut Texas fieldstone entry portico and matching perimeter pier masonry in McAllen",
      "4,774 sq ft five-bedroom, six-bath layout with formal gallery foyer and high tray ceilings",
      "Chef's kitchen with dramatic book-matched exotic stone backsplash, custom wood hood & granite island",
      "Warm hardwood flooring and custom fireplace millwork in the primary living salon",
      "Enduring structural and envelope performance proven across nearly two decades of South Texas seasons"
    ],
    heroImage:
      "/images/optimized/via-cantera/rio-grande-valley-custom-home-builders-south-texas-energy-efficient-luxury-residential-design.jpg",
    secondaryImage:
      "/images/optimized/via-cantera/rio-grande-valley-custom-kitchen-energy-efficient-appliances-south-texas-home.jpg",
    gallery: [
      {
        src: "/images/optimized/via-cantera/rio-grande-valley-custom-home-builders-south-texas-energy-efficient-luxury-residential-design.jpg",
        alt: "The Via Cantera Estate exterior in McAllen TX",
        caption: "Front Elevation — Hand-Cut Texas Stone Portico & Mature Palm Court",
        category: "Exterior"
      },
      {
        src: "/images/optimized/via-cantera/IM-SO1.jpg",
        alt: "Elevated view of The Via Cantera Estate roof and landscaping",
        caption: "Estate Overview — Hipped Mediterranean Tile Roof & McAllen Streetscape",
        category: "Exterior"
      },
      {
        src: "/images/optimized/via-cantera/rio-grande-valley-custom-kitchen-energy-efficient-appliances-south-texas-home.jpg",
        alt: "Custom kitchen with exotic stone backsplash and granite island",
        caption: "Kitchen Suite — Book-Matched Stone Backsplash & Custom Wood Hood",
        category: "Kitchen & Dining"
      },
      {
        src: "/images/optimized/via-cantera/living-room-with-fireplace-custom-home-rio-grande-valley-south-texas.jpg",
        alt: "Living room with fireplace and coffered ceiling",
        caption: "Living Salon — Coffered Tray Ceiling & Custom Fireplace Hearth",
        category: "Living & Foyer"
      },
      {
        src: "/images/optimized/via-cantera/elegant-interior-foyer-rio-grande-valley-home-custom-built-south-texas.jpg",
        alt: "Arched foyer gallery in Via Cantera Estate",
        caption: "Entrance Gallery — Mediterranean Plaster Archways & Travertine Tile",
        category: "Living & Foyer"
      },
      {
        src: "/images/optimized/via-cantera/south-texas-bathroom-design-custom-tile-shower-wood-cabinets-modern-lighting.jpg",
        alt: "Custom tile shower and wood cabinetry in Via Cantera bathroom",
        caption: "Primary Bath — Custom Tile Shower & Warm Hardwood Cabinetry",
        category: "Primary Suite & Bath"
      }
    ]
  }
];

export const BLUEBONNET_METHOD_PHASES: ProcessPhase[] = [
  {
    step: "01",
    phaseLabel: "Phase I · Vision & Feasibility",
    title: "Private Consultation & Budget Alignment",
    subtitle: "Listening first to how your family lives, hosts, and rests.",
    description:
      "Every Bluebonnet home begins with a calm, candid conversation with Michael & Ana. We discuss your lifestyle priorities, architectural preferences, target square footage, and realistic investment parameters—using our transparent Custom Home Cost Guide so there are never financial surprises downstream.",
    deliverables: [
      "Personal architectural & spatial programming session",
      "Transparent line-item preliminary budget ranges",
      "Lot acquisition guidance or existing homesite review",
      "Project milestone charter & communication schedule"
    ],
    clientExperience:
      "You leave the first phase with complete clarity on scope, realistic cost per square foot, and timeline before committing to full engineering.",
    image: "/images/generated/detail-blueprint-drafting.jpg",
    secondaryImage: "/images/optimized/process/6-1.png"
  },
  {
    step: "02",
    phaseLabel: "Phase II · Site & Architecture",
    title: "Lot Evaluation, Permitting & Curated Design",
    subtitle: "Engineering for Rio Grande Valley soils, solar orientation, and wind codes.",
    description:
      "Building on your own lot in South Texas requires rigorous site intelligence. We conduct optical grading surveys, soil and drainage evaluations, utility tie-in planning, and municipal permitting across Mission, McAllen, Edinburg, and surrounding cities while guiding you through a curated selection of timeless architectural finishes.",
    deliverables: [
      "On-site optical elevation survey, soil testing & drainage grading plan",
      "Solar orientation & window-glazing optimization for RGV summers",
      "Full municipal permitting, HOA architectural submissions & utility coordination",
      "Curated finish selections (stone, tile, cabinetry, lighting & hardware) without decision fatigue"
    ],
    clientExperience:
      "Instead of drowning in thousands of unvetted catalog SKUs, you choose from curated, builder-vetted material palettes alongside our team.",
    image: "/images/optimized/process/7-1.png",
    secondaryImage: "/images/day-night/stage-01-framing.jpg"
  },
  {
    step: "03",
    phaseLabel: "Phase III · Structural Craftsmanship",
    title: "Foundation, Framing & Building Envelope",
    subtitle: "Engineered slab systems, CMU masonry, and high-performance thermal shells.",
    description:
      "Once site preparation is complete, our trusted South Texas trade partners pour the post-tensioned or ribbed slab foundation and erect the structural framing, masonry columns, and roof trusses. Every structural stage is inspected for windstorm resilience and thermal envelope tightness.",
    deliverables: [
      "Engineered concrete foundation & underground plumbing verification",
      "Precision dimensional framing, CMU masonry & hurricane-rated truss ties",
      "Radiant roof barriers, high-SEER2 HVAC duct sealing & thermal insulation",
      "Scheduled on-site framing & pre-drywall walkthrough with Michael & Ana"
    ],
    clientExperience:
      "Walk your framed home with us to verify room sightlines, outlet placements, and architectural lighting positions before walls are closed.",
    image: "/images/optimized/process/8.png",
    secondaryImage: "/images/day-night/stage-02-enclosure.jpg"
  },
  {
    step: "04",
    phaseLabel: "Phase IV · Artisanal Finishes",
    title: "Custom Millwork, Stone & Lighting Installation",
    subtitle: "Where architectural proportions meet tactile residential warmth.",
    description:
      "From hand-troweled exterior stucco and book-matched stone slabs to custom white-oak or alder cabinetry, floating staircases, and 2700K architectural lighting, our finish craftsmen execute the details that elevate a house into a true custom estate.",
    deliverables: [
      "Custom cabinet fabrication, stone slab templating & artisan tile setting",
      "Architectural luminaire installation (soffits, sconces, chandeliers & low-voltage landscape)",
      "Hardscape driveway pavers, covered veranda soffits & native landscaping",
      "Weekly milestone photo updates and transparent budget tracking"
    ],
    clientExperience:
      "Proactive milestone updates keep you informed every week without requiring you to manage subcontractors or chase schedules.",
    image: "/images/optimized/onyx-ivory/custom-kitchen-gas-stove-pot-filler.webp",
    secondaryImage: "/images/optimized/onyx-ivory/luxury-bathroom-freestanding-soaking-tub.webp"
  },
  {
    step: "05",
    phaseLabel: "Phase V · Commissioning & Handover",
    title: "White-Glove Walkthrough & Final Move-In",
    subtitle: "Tested, commissioned, and ready for decades of family life.",
    description:
      "Before handing over the keys, we perform an exhaustive room-by-room quality inspection, balance the multi-zone HVAC system for South Texas humidity control, test every lighting scene from daylight to night, and walk you through the operation and care of your new custom home.",
    deliverables: [
      "Comprehensive multi-point architectural & mechanical commissioning",
      "HVAC thermal balancing & smart thermostat orientation",
      "Room-by-room owner orientation walkthrough with Michael & Ana",
      "Complete home documentation binder & ongoing local builder support"
    ],
    clientExperience:
      "A calm, celebratory move-in day knowing every system behind your walls is as thoughtfully built as the finishes you see.",
    image: "/images/day-night/03-blue-hour.jpg",
    secondaryImage: "/images/day-night/01-daylight.jpg"
  }
];

export const VERIFIED_TESTIMONIALS = [
  {
    id: "anthony-michelle",
    quote:
      "Building on our own lot felt overwhelming until we sat down with Michael and Ana. They handled the site preparation, permitting, and every construction milestone with total transparency. We never felt lost in the process, and the craftsmanship in our kitchen and living room still takes our breath away.",
    author: "Anthony & Michelle L.",
    location: "Custom Homeowners · Rio Grande Valley, TX",
    projectTag: "Build-on-Your-Lot Custom Residence"
  },
  {
    id: "robert-linda",
    quote:
      "What sets Bluebonnet Homes apart is how calm and organized they make the entire journey. Instead of handing us endless catalogs, they guided us through curated choices that fit our style and budget. Our home stays remarkably cool through the hottest South Texas summers.",
    author: "Dr. Robert & Linda K.",
    location: "Custom Homeowners · Edinburg, TX",
    projectTag: "Energy-Efficient Custom Estate"
  },
  {
    id: "alejandra-luis",
    quote:
      "Attention to detail is not just a slogan for Bluebonnet Homes. From the way the exterior lighting warms up the stone at dusk to the custom cabinetry and high ceilings, our home feels deeply personal and built to last for generations.",
    author: "Alejandra & Luis R.",
    location: "Custom Homeowners · McAllen Area, TX",
    projectTag: "Mediterranean Custom Residence"
  },
  {
    id: "daniel-sarah",
    quote:
      "The milestone communication gave us complete peace of mind. We always knew what stage was happening next, what decisions were upcoming, and where our investment stood. Michael and Ana treat your home with the same care they would give their own family.",
    author: "Daniel & Sarah M.",
    location: "Custom Homeowners · Mission, TX",
    projectTag: "Turnkey Custom Home Build"
  }
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    slug: "designing-a-home-for-south-texas-weather",
    category: "Climate & Architecture",
    readTime: "6 Min Read",
    publishDate: "June 2026",
    title: "Designing a Custom Home for South Texas Weather: Heat, Humidity & Wind Resilience",
    excerpt:
      "How solar orientation, deep roof overhangs, Low-E glazing, and sealed thermal envelopes keep Rio Grande Valley custom homes effortlessly comfortable year-round.",
    heroImage: "/images/optimized/resources/Designing-a-Home-for-South-Texas-Weather-1.png",
    keyTakeaways: [
      "Orient primary glass expanses north/south and shield western facades from late-afternoon RGV solar gain.",
      "Pair high-albedo warm ivory stucco and ventilated roof decks with open-cell or closed-cell insulation.",
      "Specify multi-stage or variable-speed HVAC systems engineered for latent humidity removal, not just brute-force cooling."
    ],
    sections: [
      {
        heading: "1. Working With the Rio Grande Valley Sun, Not Against It",
        body: "In South Texas, prolonged summer temperatures above 98°F and intense western sun exposure demand intelligent architectural massing before mechanical cooling is ever calculated. By orienting primary living spaces and expansive patio sliders away from unshielded west-facing exposures—and designing deep covered loggias and soffit overhangs—a custom home dramatically reduces peak radiant heat transfer."
      },
      {
        heading: "2. High-Performance Glazing, Stucco & Roof Assemblies",
        body: "Light-toned exterior palettes—such as warm ivory stucco, Texas limestone, and ventilated tile roof decks—reflect solar radiation rather than storing heat into the evening hours. Combined with spectrally selective Low-E double-pane windows, natural daylight enters the double-height living areas while infrared heat stays outside."
      },
      {
        heading: "3. Humidity Control & Windstorm Engineering",
        body: "Comfort in the RGV is as much about relative humidity as thermometer readings. A tight building envelope paired with properly sized, variable-capacity air conditioning extracts moisture quietly and evenly, preventing clammy indoor air while keeping monthly utility costs predictable."
      }
    ]
  },
  {
    slug: "best-neighborhoods-in-the-rio-grande-valley",
    category: "Location & Land Guide",
    readTime: "7 Min Read",
    publishDate: "May 2026",
    title: "Best Communities & Corridors in the Rio Grande Valley to Build a Custom Home",
    excerpt:
      "Comparing lot sizes, architectural character, school districts, and long-term value across Mission, Sharyland, McAllen, Edinburg, Weslaco, and Harlingen.",
    heroImage: "/images/optimized/resources/Best-Neighborhoods-in-the-Rio-Grande-.png",
    keyTakeaways: [
      "Edinburg and North McAllen offer rapid access to medical, university, and dining corridors with growing gated custom-home enclaves.",
      "Mission and Sharyland provide mature palm-lined streets, generous estate lots, and established school districts.",
      "Always evaluate HOA architectural minimums, setback lines, and utility tap fees before closing on a lot."
    ],
    sections: [
      {
        heading: "1. Edinburg & North McAllen: Contemporary Growth & Estate Enclaves",
        body: "Homeowners seeking contemporary transitional architecture or gated estate communities frequently look to Edinburg and North McAllen. Proximity to major healthcare campuses, dining, and new infrastructure makes these corridors ideal for both growing families and medical/executive professionals."
      },
      {
        heading: "2. Mission & Sharyland: Mature Trees & Acreage Privacy",
        body: "For families drawn to wider frontages, circular driveways, and established citrus and palm canopy, Mission and Sharyland offer exceptional custom homesites. Many lots accommodate expansive single-story footprints, detached casitas, and resort-style outdoor verandas."
      },
      {
        heading: "3. Pre-Purchase Lot Walk with Your Builder",
        body: "Before finalizing a land purchase anywhere in the RGV, invite Bluebonnet Homes to walk the site. Evaluating topography, flood zone designation, water/sewer vs. septic requirements, and soil conditions upfront prevents costly site-prep surprises."
      }
    ]
  },
  {
    slug: "what-to-expect-during-custom-home-construction",
    category: "The Building Journey",
    readTime: "8 Min Read",
    publishDate: "April 2026",
    title: "What to Expect During Custom Home Construction: From Lot Prep to Final Walkthrough",
    excerpt:
      "A transparent phase-by-phase guide to site engineering, foundation pours, structural framing, MEP rough-ins, and finish craftsmanship.",
    heroImage: "/images/optimized/resources/March-2026-Blogs-Images-1.png",
    keyTakeaways: [
      "Pre-construction planning and permitting set the rhythm for the entire build—rushing design leads to expensive change orders.",
      "Scheduled on-site walkthroughs at framing, pre-drywall, and cabinet templating keep homeowners confident and connected.",
      "Milestone-based communication eliminates guesswork so you always know what is happening on site."
    ],
    sections: [
      {
        heading: "1. Site Preparation, Pad Grading & Foundation Engineering",
        body: "Before vertical construction begins, the homesite is cleared, laser-graded for positive drainage, and compacted in engineered lifts. Plumbing rough-ins and post-tension or reinforced concrete beams are inspected prior to pouring the structural slab."
      },
      {
        heading: "2. Framing, Dry-In & Mechanical Rough-Ins",
        body: "As walls, CMU masonry columns, and roof trusses rise, your floor plan takes physical shape in three dimensions. Once roof decking, weather barriers, and windows dry-in the structure, HVAC, electrical, low-voltage lighting, and plumbing teams complete interior rough-ins—culminating in a guided pre-drywall walkthrough."
      },
      {
        heading: "3. Stucco, Millwork, Stone & Final Commissioning",
        body: "Exterior stucco and masonry progress alongside interior drywall, custom cabinetry, stone slab installation, tilework, and architectural lighting. Our final commissioning phase tests every mechanical, electrical, and lighting system prior to move-in."
      }
    ]
  },
  {
    slug: "what-makes-a-great-home-site",
    category: "Land & Site Engineering",
    readTime: "5 Min Read",
    publishDate: "June 2026",
    title: "What Makes a Great Custom Home Site in South Texas? A Builder's Checklist",
    excerpt:
      "Six critical factors—drainage elevation, soil plasticity, solar orientation, utilities, easements, and neighborhood covenants—to verify on any lot.",
    heroImage: "/images/optimized/resources/What-Makes-a-Great-Home-Site.png",
    keyTakeaways: [
      "Natural crown elevation relative to the street and neighboring lots determines how much fill dirt and grading a pad requires.",
      "Geotechnical soil testing reveals clay expansion indices so the foundation engineer can specify the exact beam depth.",
      "Verify water, sewer, electric, fiber, and gas availability at the property line before making an offer."
    ],
    sections: [
      {
        heading: "1. Elevation, Drainage & Flood Zone Intelligence",
        body: "In the flat coastal plain of the Rio Grande Valley, inches of elevation matter. A lot that sits naturally higher than the curb requires significantly less imported select fill than a low-lying parcel. We assess street gutter flow, retention requirements, and finished-floor elevation targets early."
      },
      {
        heading: "2. Geotechnical Soil Profiles & Foundation Design",
        body: "South Texas soils vary from sandy loam to expansive clay. Conducting a site-specific soil test allows structural engineers to design a foundation slab specifically calibrated for your lot's bearing capacity and moisture movement."
      },
      {
        heading: "3. Setbacks, Easements & Solar Geometry",
        body: "Utility easements, side-yard setbacks, and street orientation dictate how your home's garage, courtyard, and rear veranda sit on the land. Reviewing a survey plat together ensures your dream floor plan fits the lot effortlessly."
      }
    ]
  },
  {
    slug: "energy-efficient-features-for-custom-homes",
    category: "Performance & Sustainability",
    readTime: "6 Min Read",
    publishDate: "May 2026",
    title: "Energy-Efficient Features That Pay Dividends in a South Texas Custom Home",
    excerpt:
      "From spray-foam and conditioned attics to variable-speed climate zoning, Low-E glass, and 2700K LED architectural lighting.",
    heroImage: "/images/optimized/resources/Energy-Efficient-Features.png",
    keyTakeaways: [
      "Envelope air-sealing and attic insulation deliver the highest return on comfort and monthly utility savings.",
      "Zoned smart climate systems let you condition primary suites independently from double-height entertaining spaces.",
      "Dedicated LED architectural lighting consumes 80% less energy while generating virtually zero interior heat load."
    ],
    sections: [
      {
        heading: "1. The Thermal Envelope: Insulation & Air Sealing",
        body: "The most efficient air conditioner is the one that doesn't have to fight attic heat infiltration. Sealing penetrations in the top plates, insulating roofline assemblies, and eliminating thermal bridging keep conditioned air inside your living spaces."
      },
      {
        heading: "2. Smart Climate Zoning for Two-Story & Estate Plans",
        body: "Large custom homes have distinct thermal zones—a sunlit double-height great room behaves differently than a shaded primary bedroom suite. Multi-zone smart climate controls maintain exact temperature and humidity targets room by room."
      },
      {
        heading: "3. Architectural LED Lighting & Water Efficiency",
        body: "Warm 2700K high-CRI LED recessed fixtures, linear sconces, and tankless or recirculating hot-water systems deliver hotel-caliber luxury while minimizing electricity and water waste."
      }
    ]
  },
  {
    slug: "why-build-a-custom-home-in-the-rgv",
    category: "Custom vs. Spec",
    readTime: "5 Min Read",
    publishDate: "March 2026",
    title: "Why Build a Custom Home Instead of Buying an Existing House in the RGV?",
    excerpt:
      "When you compare renovation compromises against a home designed around your lot, your family's daily rituals, and modern South Texas building codes.",
    heroImage: "/images/optimized/onyx-ivory/hero-exterior-golden-hour.jpg",
    keyTakeaways: [
      "Eliminate the hidden cost of remodeling outdated kitchens, baths, roofs, and inefficient HVAC systems in older resale homes.",
      "Every square foot is allocated to spaces you actually use—from a double-island kitchen to a shaded outdoor loggia.",
      "With Bluebonnet Homes' guided process, custom building is structured, transparent, and free of guesswork."
    ],
    sections: [
      {
        heading: "1. Zero Compromise on Floor Plan, Light & Lot Orientation",
        body: "Buying an existing house almost always involves compromise—settling for a dark kitchen, an awkward primary bath, or a backyard baking in afternoon sun. Building custom lets you shape ceiling heights, window sightlines, storage, and indoor-outdoor flow from day one."
      },
      {
        heading: "2. Modern Structural, Electrical & Energy Standards",
        body: "A newly built Bluebonnet custom home incorporates current windstorm framing standards, high-efficiency glazing, modern electrical loads for EVs and smart systems, and brand-new mechanical equipment—sparing you years of unexpected maintenance."
      },
      {
        heading: "3. A Calm, Guided Partnership with Michael & Ana",
        body: "Many homeowners hesitate to build because they fear complexity. Our milestone-driven approach pairs architectural freedom with curated choices and disciplined project management so you can enjoy watching your home come to life."
      }
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: "Can Bluebonnet Homes build on a lot we already own—or help us evaluate one before we buy?",
    answer:
      "Yes. Building on your own lot across the Rio Grande Valley is one of our core specialties. If you already own land in Mission, McAllen, Edinburg, Pharr, Weslaco, Harlingen, or nearby communities, we handle site evaluation, grading, utility planning, and permitting. If you are still comparing lots, we will gladly walk prospective parcels with you before you purchase to assess drainage, soil conditions, setbacks, and site-prep costs."
  },
  {
    question: "How do you prevent decision fatigue during the design and finish selection process?",
    answer:
      "Instead of sending you to multiple showrooms alone to choose from thousands of unorganized samples, we guide you through a curated selection process. We pre-vet architectural stone, tile, cabinetry, plumbing fixtures, and lighting packages that harmonize with your home's style and budget, presenting cohesive options at scheduled milestones."
  },
  {
    question: "How does budget transparency work, and what is in the Custom Home Cost Guide?",
    answer:
      "Our Custom Home Cost Guide breaks down how site preparation, structural complexity, square footage, and finish levels influence overall investment in South Texas. During Phase I, we establish realistic line-item allowances and milestone budgets so you have full visibility before construction begins."
  },
  {
    question: "How do you build homes to handle South Texas heat, humidity, and storms?",
    answer:
      "Every Bluebonnet home is engineered specifically for the Rio Grande Valley climate. We combine reinforced concrete foundations, windstorm-rated framing and roof ties, high-performance Low-E glazing, thermal envelope insulation, deep shaded overhangs, and properly sized high-efficiency HVAC systems designed to control both temperature and indoor humidity."
  },
  {
    question: "How will we stay updated once construction starts on our home?",
    answer:
      "We follow a structured, milestone-based communication rhythm. You receive regular progress updates, clear advance notice before any selection deadlines, and guided on-site walkthroughs with Michael & Ana at key structural and finish milestones (foundation, framing/pre-drywall, cabinet/stone templating, and final commissioning)."
  }
];
