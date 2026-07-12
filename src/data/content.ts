// ============================================================================
// All site copy + per-section SEO metadata lives here.
// Edit this file to update text without touching any component.
// ============================================================================

export interface SectionSEO {
  id: string;
  title: string; // becomes document.title when this section is in view
  description: string; // becomes <meta name="description"> when in view
}

export const business = {
  Owner: "Mr. Ravinder Aggarwal",
  brandName: "PANORAMA DESIGN",
  fullName: "Panorama Design — uPVC Doors & Windows",
  tagline: "by Supreme Griham — Experience the Difference",
  gstin: "06ARRPA7384D1ZO",
  region: "Haryana & Delhi NCR", // derived from GSTIN state code 06 — edit if incorrect
  phone: "+91 9729243737", // PLACEHOLDER — replace with real number
  whatsapp: "9729243737",
  email: "panoramadesign10@gmail.com", // PLACEHOLDER
  address: "UG-15, Ocus Quantum Mall, Sector-51, Gurugram, Haryana 122001", // PLACEHOLDER
  hours: "Monday – Saturday: 9:30 AM – 7:00 PM",
};

export const seo: Record<string, SectionSEO> = {
  home: {
    id: "home",
    title: "Panorama Design | uPVC Doors & Windows — Authorised Supreme Griham Partner",
    description:
      "Frame every view with Panorama Design — authorised Supreme Griham channel partner offering engineered uPVC doors and windows, free consultation, and installation across Haryana & Delhi NCR.",
  },
  about: {
    id: "about",
    title: "About Panorama Design | Your Local Supreme Griham Partner",
    description:
      "Panorama Design is the local face of Supreme Griham uPVC — a dedicated team handling every project personally, from first measurement to final handover.",
  },
  products: {
    id: "products",
    title: "uPVC Windows & Doors Catalogue | Panorama Design",
    description:
      "Explore Panorama Design's full Supreme Griham range — slider, casement and tilt & turn windows, sliding and slide & fold doors, smart locks, and glass accessories.",
  },
  technology: {
    id: "technology",
    title: "DecoShield, Gold Line & Co-Extruded Gasket Technology | Panorama Design",
    description:
      "Discover the engineering behind Panorama Design's uPVC systems — DecoShield textured finishes, Gold Line architectural profiles, and molecular-bonded co-extruded gaskets.",
  },
  benefits: {
    id: "benefits",
    title: "Why uPVC? Noise, Dust & Energy Benefits | Panorama Design",
    description:
      "See why uPVC outperforms wood and aluminium — up to 40dB noise reduction, dust sealing, thermal efficiency and zero maintenance, built for Indian conditions.",
  },
  process: {
    id: "process",
    title: "Our Process — From Consultation to Handover | Panorama Design",
    description:
      "A clear seven-step journey from consultation and site survey to manufacturing, installation and after-sales care with Panorama Design.",
  },
  gallery: {
    id: "gallery",
    title: "Project Gallery | Panorama Design uPVC Installations",
    description:
      "Browse real Panorama Design installations — windows, doors and finished interiors across homes in Haryana & Delhi NCR.",
  },
  testimonials: {
    id: "testimonials",
    title: "Customer Stories | Panorama Design",
    description:
      "Hear from homeowners who transformed their spaces with Panorama Design's Supreme Griham uPVC doors and windows.",
  },
  contact: {
    id: "contact",
    title: "Book a Free Site Visit | Panorama Design Contact",
    description:
      "Get in touch with Panorama Design for a free home visit, measurement and quote. Serving Haryana & Delhi NCR via WhatsApp, phone and email.",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Why uPVC", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "20 Yr", label: "Profile Warranty" },
  { value: "80+", label: "Years of Trust" },
  { value: "40 dB", label: "Noise Reduction" },
  { value: "7-Chamber", label: "German Engineering" },
];

export const aboutPillars = [
  {
    title: "Free Home Visit",
    body: "We come to you, measure, advise & quote — at no cost.",
  },
  {
    title: "20 Yr Warranty",
    body: "Supreme-backed profile warranty with lifelong support.",
  },
  {
    title: "Expert Installation",
    body: "Trained technicians ensure precision fitting every time.",
  },
  {
    title: "After-Sales Care",
    body: "We don't disappear after delivery. We're always reachable.",
  },
  {
    title: "Supreme Quality",
    body: "Premium uPVC profiles from India's most trusted brand.",
  },
  {
    title: "Custom Design",
    body: "Tailored to your home, your style, and your budget.",
  },
];

export interface Product {
  id: string;
  tag: string;
  title: string;
  description: string;
  specs: string[];
  image: string;
  category: "window" | "door" | "accessory";
}

export const products: Product[] = [
  {
    id: "slider-window",
    tag: "Best Seller",
    title: "Slider Window",
    description:
      "Glides horizontally on a precision roller track — the practical choice for balconies and living rooms where a swing sash won't fit.",
    specs: ["2 & 3 Track", "Mesh Option", "Multi-Point Lock"],
    image: "/images/products/Slider-Window.jpg",
    category: "window",
  },
  {
    id: "casement-window",
    tag: "Premium",
    title: "Casement Window",
    description:
      "Side-hinged with friction stays for controlled ventilation — full airflow without compromising on the seal.",
    specs: ["Single / Double", "Tilt & Turn", "DG Glass Ready"],
    image: "/images/products/Casement-Window.png",
    category: "window",
  },
  {
    id: "tilt-turn",
    tag: "European Design",
    title: "Tilt & Turn Window",
    description:
      "One sash, two motions — tilt inward for gentle airflow, or turn like a door for full cleaning access and ventilation.",
    specs: ["Dual Function", "Burglar-Resistant", "Easy-Clean"],
    image: "/images/products/Tilt-Turn-Window.png",
    category: "window",
  },
  {
    id: "fixed-window",
    tag: "Picture Window",
    title: "Fixed / Picture Window",
    description:
      "No opening mechanism, maximum glass — built for the wall you want to disappear behind the view.",
    specs: ["Panoramic Sizing", "Custom Dimensions", "Acoustic Glass"],
    image: "/images/products/Combination-Window.png",
    category: "window",
  },
  {
    id: "sliding-door",
    tag: "Most Popular",
    title: "Sliding Door",
    description:
      "Wide-format panels for patios and balconies — up to six panels for openings that turn a wall into a doorway.",
    specs: ["2 & 3 Track", "Up to 6 Panels", "Multi-Point Lock"],
    image: "/images/products/Sliding-Door.png",
    category: "door",
  },
  {
    id: "casement-door",
    tag: "Premium",
    title: "Casement Door",
    description:
      "A classic hinged door on 3D-adjustable hinges — precise alignment that holds up over years of daily use.",
    specs: ["Single / Double Leaf", "3D Hinges", "Multi-Point Lock"],
    image: "/images/products/Casement-Door.png",
    category: "door",
  },
  {
    id: "combination-door",
    tag: "Versatile",
    title: "Combination Door",
    description:
      "A multi-functional door system that combines sliding and folding mechanisms — perfect for maximising space and creating seamless indoor-outdoor transitions.",
    specs: ["Slide & Fold", "Space Saving", "Custom Config"],
    image: "/images/products/Combination-Door.png",
    category: "door",
  },
  {
    id: "special-door",
    tag: "Premium",
    title: "Special Door",
    description:
      "Designed for grand entrances and oversized openings — these custom-engineered doors combine aesthetics with strength, making a bold statement for your home's entryway.",
    specs: ["Custom Size", "Premium Finish", "Multi-Point Lock"],
    image: "/images/products/Special-Door.png",
    category: "door",
  },
];

export interface TechFeature {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
}

export const techFeatures: TechFeature[] = [
  {
    id: "decoshield",
    eyebrow: "First in India",
    title: "DecoShield Surface Engineering",
    body: "A finishing process fused directly onto the profile — not painted, not laminated after the fact — so wood grain, stone and marble textures carry real depth you can feel, not just see.",
    points: [
      "Textured finish with genuine depth and grain",
      "UV-stable colour — no fading or peeling",
      "Scratch and weather resistant for Indian conditions",
      "Consistent finish across corners and joints",
    ],
  },
  {
    id: "gold-line",
    eyebrow: "New Benchmark",
    title: "Gold Line Architectural Groove",
    body: "A metallic gold groove set directly into the uPVC profile, running along the beading, frame edge or as a mullion divider — a detail usually reserved for far more expensive materials.",
    points: [
      "Available as a subtle 2mm line or a bold wide casing",
      "Anti-tarnish, UV-resistant finish for the long term",
      "Pairs naturally with gold-toned handles and hardware",
      "Works across white, black and dark grey profiles",
    ],
  },
  {
    id: "gasket",
    eyebrow: "Engineering Detail",
    title: "Co-Extruded Gasket",
    body: "The weather seal is extruded together with the profile itself, fusing at a molecular level — not pressed in afterward like a standard rubber gasket that can shrink or lift over time.",
    points: [
      "Zero shrinkage — bonded during manufacturing, not after",
      "Continuous seal against rain, dust and drafts",
      "Improved acoustic and thermal insulation",
      "No maintenance required over the product's life",
    ],
  },
  {
    id: "smart-home",
    eyebrow: "Connected Living",
    title: "Smart Lock & Automation",
    body: "Turn balcony doors and windows into part of your smart home — app control, voice-command compatibility and managed access, without changing how the door looks or feels.",
    points: [
      "Control from anywhere via app",
      "Voice command hardware compatibility",
      "Manage access for family and staff",
      "Keyless, code-based entry options",
    ],
  },
];

export const benefits = [
  {
    title: "Lower Electricity Bills",
    body: "Multi-chamber uPVC profiles and precision sealing cut heat transfer by up to 40% — your AC works less, and your pocket feels the difference.",
  },
  {
    title: "Up to 40dB Quieter Home",
    body: "Road noise, construction, barking dogs — our acoustic sealing keeps the chaos outside where it belongs. Your bedroom stays your sanctuary.",
  },
  {
    title: "Monsoon-Proof Construction",
    body: "Fusion-welded corners and engineered drainage channels keep water out during the heaviest downpours — no seepage, no stains, no worries.",
  },
  {
    title: "Zero Dust Infiltration",
    body: "Tight multi-point seals block dust and PM2.5 pollution from entering your rooms. Cleaner floors, cleaner air, fewer allergies.",
  },
  {
    title: "Built-In Fortress Security",
    body: "Steel-reinforced chambers and multi-point locking systems turn every window and door into a structural barrier — not just a pane of glass.",
  },
  {
    title: "Never Rots, Never Warps",
    body: "Wood rots, aluminium corrodes, uPVC doesn't. No termites, no chemical treatments, no replacement costs down the line.",
  },
  {
    title: "Zero Maintenance Living",
    body: "No painting, no polishing, no seasonal upkeep. A quick wipe with a damp cloth is all it takes to keep them looking brand new for decades.",
  },
  {
    title: "100% Recyclable & Green",
    body: "uPVC is fully recyclable at end of life. It's also lead-free and manufactured with minimal environmental impact — a choice you can feel good about.",
  },
];

export const processSteps = [
  { title: "Consultation", body: "Share your requirements with Karan & our team" },
  { title: "Design", body: "We create a custom layout with your choice of colour, glass, finish, and opening style — all visualised before you commit." },
  { title: "Site Survey", body: "A free, no-obligation visit to your home for precise on-site measurements. No guesswork, no surprises later." },
  { title: "Manufacturing", body: "Your order is fabricated at Supreme Industries' ISO-certified facility to exact specifications and quality standards." },
  { title: "Installation", body: "Our trained crew fits every unit to Supreme Griham's system standards — proper sealing, alignment, and finish, done right the first time." },
  { title: "Handover", body: "We walk you through every operating detail, inspect the work together, and only consider the job done when you're completely satisfied." },
  { title: "After-Sales", body: "You're not forgotten after payment. We're available for adjustments, servicing, and any questions for the life of your windows." },
];

export const galleryImages = [
  "/images/products/Slider-Window.jpg",
  "/images/products/Casement-Window.png",
  "/images/products/Tilt-Turn-Window.png",
  "/images/products/Combination-Window.png",
  "/images/products/Sliding-Door.png",
  "/images/products/Casement-Door.png",
  "/images/products/Combination-Door.png",
  "/images/products/Special-Door.png",
  "/images/products/Casement.png",
  "/images/products/Special.png",
  "/images/products/Sliding.jpg",
  "/images/products/Glass-Accessories.png",
];

export const testimonials = [
  {
    name: "Anita R.",
    location: "Sector 57, Gurugram",
    quote:
      "The difference in road noise after installation was immediate. Our bedroom finally feels like a quiet sanctuary even with traffic right outside. The team also cleaned up every bit of dust before leaving — that impressed me.",
  },
  {
    name: "Vivek M.",
    location: "South City II, Gurgaon",
    quote:
      "What stood out was how little dust collects on the sills now. More importantly, the team explained every hardware choice and let us decide instead of pushing the most expensive option. Genuine trust builder.",
  },
  {
    name: "Priya & Sanjay",
    location: "DLF Phase 3, Gurugram",
    quote:
      "We chose the Gold Line profile for our balcony doors and it completely transformed the look. Guests actually think we spent double. But beyond the looks — no dust, no noise, no regrets.",
  },
  {
    name: "Rajesh K.",
    location: "Sector 49, Gurugram",
    quote:
      "Replaced all old aluminium windows with uPVC sliders. The room temperature difference is noticeable — our AC runs less and the kids' study room is finally quiet enough for online classes.",
  },
];

export const productInterestOptions = [
  "Slider Windows",
  "Casement Windows",
  "Tilt & Turn Windows",
  "Sliding Doors",
  "Casement Doors",
  "Slide & Fold Doors",
  "Smart Lock & Automation",
  "Complete Home — Doors & Windows",
  "Not Sure — Need Consultation",
];
