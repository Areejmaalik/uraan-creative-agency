import {
  ServiceItem,
  PortfolioProject,
  ClientStory,
  PricingPlan,
} from "../types";

export const AGENCY_METRICS = {
  clientsCount: "50+",
  deliveredAssets: "2,400+",
  avgTurnaroundHours: "48h",
  clientSatisfaction: "99.4%",
  globalCountries: "18",
  roiIncreaseAvg: "3.4x",
};

export const FEATURED_CLIENTS = [
  {
    name: "AeroPulse AI",
    industry: "Aviation & Logistics",
    ticker: "AERO",
    logoAccent: "from-amber-400 to-yellow-500",
  },
  {
    name: "NovaPay Global",
    industry: "FinTech & Banking",
    ticker: "NPAY",
    logoAccent: "from-teal-400 to-emerald-600",
  },
  {
    name: "Aetheria Bio",
    industry: "HealthTech AI",
    ticker: "ATHR",
    logoAccent: "from-yellow-300 to-amber-500",
  },
  {
    name: "Vortex Scale",
    industry: "Cloud Infrastructure",
    ticker: "VRTX",
    logoAccent: "from-emerald-400 to-teal-600",
  },
  {
    name: "Hyperion Robotics",
    industry: "Autonomous Hardware",
    ticker: "HYPR",
    logoAccent: "from-amber-500 to-yellow-600",
  },
  {
    name: "Synapse Capital",
    industry: "Venture & Web3",
    ticker: "SYNP",
    logoAccent: "from-teal-300 to-cyan-500",
  },
  {
    name: "Lumina Cine",
    industry: "Film & Entertainment",
    ticker: "LUMN",
    logoAccent: "from-yellow-400 to-amber-600",
  },
  {
    name: "OrbitScale DevOps",
    industry: "Enterprise SaaS",
    ticker: "ORBT",
    logoAccent: "from-emerald-300 to-teal-500",
  },
  {
    name: "Zephyr Botanicals",
    industry: "CleanTech & Beverages",
    ticker: "ZPHR",
    logoAccent: "from-amber-400 to-yellow-500",
  },
  {
    name: "Kinetix Spatial",
    industry: "XR & Spatial Computing",
    ticker: "KNTX",
    logoAccent: "from-teal-400 to-emerald-500",
  },
];

export const AGENCY_SERVICES: ServiceItem[] = [
  {
    id: "brand-identity",
    title: "Brand Identity & Responsive Logo Systems",
    category: "Branding",
    tagline:
      "Give your brand wings with unforgettable visual identities forged by vector mastery and generative velocity.",
    description:
      "We craft multi-dimensional brand identities that scale from micro-favicons to massive physical billboards. Our designers combine iterative AI moodboarding with pixel-perfect vector geometry, responsive token systems, and custom brand style guides.",
    icon: "Sparkles",
    metrics: "100% Vector Scalability",
    aiCapabilities: [
      "Generative brand concept exploration (100+ variations in 24h)",
      "Neural color harmony matching & accessibility validation",
      "Dynamic responsive logo lockups (Vertical, Horizontal, App Glyph, Flight Mark)",
      "Custom AI prompt recipes for your internal creative team",
    ],
    deliverables: [
      "Master Vector Logo Suite (.AI, .EPS, .SVG, .PDF, .PNG)",
      "Dynamic Brand Guidelines Bible (Typography, Grid, Spacing)",
      "Social Media Avatar & Banner Lockups",
      "Business Stationery & Digital Presentation Pitch Deck",
    ],
    sampleImage:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    startingPrice: "$1,490",
    turnaround: "5-7 Days",
  },
  {
    id: "marketing-social",
    title: "Generative Ad Creatives & Social Content Engine",
    category: "Marketing Design",
    tagline:
      "High-converting, scroll-stopping ad suites & multi-platform visual assets generated at scale.",
    description:
      "Eliminate creative fatigue. We design hyper-targeted marketing campaigns, social media systems, display ad banners, and promotional visual assets tailored for Meta, LinkedIn, TikTok, and Google Display networks.",
    icon: "Megaphone",
    metrics: "+42% Avg CTR Uplift",
    aiCapabilities: [
      "Automated multi-ratio aspect resizing (1:1, 9:16, 16:9, 4:5)",
      "AI visual storytelling with consistent brand characters & product staging",
      "Dynamic seasonal & localized creative variations in minutes",
    ],
    deliverables: [
      "Monthly 30/60-asset high-converting social creative batches",
      "Performance Ad Banner Kits (Figma + Export-ready PNG/WebP)",
      "Animated Story & Reel Graphic Templates",
    ],
    sampleImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    startingPrice: "$1,890/mo",
    turnaround: "48h Sprint Delivery",
  },
  {
    id: "3d-motion",
    title: "3D Visuals, Spatial Art & Motion Graphics",
    category: "3D & Motion",
    tagline:
      "Futuristic 3D product renders, spatial glassmorphism, and cinematic brand animations.",
    description:
      "Elevate your brand presence with jaw-dropping 3D compositions, metallic & glass textures, isometric tech architecture visuals, and buttery smooth Lottie & MP4 motion loops.",
    icon: "Boxes",
    metrics: "4K / 60 FPS Output",
    aiCapabilities: [
      "AI-accelerated 3D texturing, caustic lighting & volumetric shaders",
      "Parametric abstract glass and fluid motion simulations",
      "Neural upscaling to pristine 4K & 8K print resolution",
    ],
    deliverables: [
      "Hero 3D Product & Tech Ecosystem Illustrations",
      "Animated Logo Stingers & Video Intros (MP4, ProRes, GIF)",
      "Lottie / JSON Micro-Interactions for Web & Mobile Apps",
    ],
    sampleImage:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    startingPrice: "$2,200",
    turnaround: "7-10 Days",
  },
  {
    id: "ui-ux-web",
    title: "Next-Gen UI/UX & AI-Powered Web Design",
    category: "Digital Product",
    tagline:
      "Sleek, high-converting digital interfaces and websites that turn visitors into loyal advocates.",
    description:
      "We design modern SaaS dashboards, interactive landing pages, mobile apps, and design systems with dark-mode illumination, neo-brutal accents, and micro-delights.",
    icon: "Layout",
    metrics: "Sub-second Visual Polish",
    aiCapabilities: [
      "AI-driven user flow wireframing & rapid UX prototype testing",
      "Automated design token synchronization for Tailwind & Figma",
    ],
    deliverables: [
      "Complete Figma Design System with Auto-Layout Components",
      "Pixel-perfect Responsive Web & Mobile Screen Mockups",
    ],
    sampleImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    startingPrice: "$2,990",
    turnaround: "10-14 Days",
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "aeropulse",
    title: "AeroPulse Global Rebrand & 3D Flight System",
    client: "AeroPulse AI",
    category: "Branding",
    description:
      "Complete visual reinvention for an autonomous aviation network. We engineered an aerodynamic petrol-and-gold visual identity system featuring origami flight vectors, 3D telemetry illustrations, and a modular design system.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    stats: {
      label: "Enterprise Valuation Boost",
      value: "+180%",
    },
    tags: ["Logo System", "3D Motion", "Brand Bible", "Flight Tokens"],
    aiToolsUsed: ["Custom LoRA", "Midjourney v6", "VectorAI", "Cinema4D"],
    clientQuote:
      "Uraan Creative Agency gave our company true wings. Their speed, generative design pipeline, and obsessive polish delivered what traditional agencies couldn't in 6 months.",
    clientAuthor: "Tariq Mansoor — VP of Brand, AeroPulse",
    year: "2025",
  },
  {
    id: "novapay",
    title: "NovaPay Cross-Border FinTech Dashboard & App",
    client: "NovaPay Global",
    category: "UI/UX",
    description:
      "Futuristic dark petrol-and-gold UI/UX architecture for a high-frequency financial platform handling $40M daily volume.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    stats: {
      label: "Onboarding Conversion",
      value: "+44.6%",
    },
    tags: ["SaaS UI/UX", "Design System", "Dark Mode"],
    aiToolsUsed: ["Figma AI", "Gemini UX Analysis", "Lottie"],
    year: "2025",
  },
  {
    id: "zephyr-packaging",
    title: "Zephyr Energy Drink Luxury Matte Cans & Packaging",
    client: "Zephyr Botanicals",
    category: "Packaging",
    description:
      "Sustainable aluminum beverage cans featuring embossed holographic gold foil accents and generative botanical vector landscapes.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80",
    stats: {
      label: "Retail Shelf Pickup Rate",
      value: "+68%",
    },
    tags: ["Packaging Design", "Die-lines", "Gold Foil", "3D Renders"],
    aiToolsUsed: ["Midjourney v6", "Adobe Illustrator"],
    year: "2024",
  },
];

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: "c1",
    name: "AeroPulse AI",
    logo: "Send",
    industry: "Autonomous Aviation & AI Logistics",
    projectScope:
      "End-to-end Brand Identity, 3D Asset System & SaaS Design System",
    deliveredAssets: 142,
    highlight: "Secured $18M Series A following complete brand elevation",
    testimonial: {
      quote:
        "Working with Uraan Creative Agency felt like stepping 5 years into the future. Their speed, generative design pipeline, and obsessive polish gave our aviation startup an unmistakable visual authority.",
      author: "Zainab Al-Hassan",
      role: "CEO & Co-Founder, AeroPulse AI",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
  },
  {
    id: "c2",
    name: "NovaPay Global",
    logo: "CreditCard",
    industry: "Global Cross-Border FinTech",
    projectScope:
      "Mobile App UI/UX, Dark-Mode Web Portal & Marketing Campaign",
    deliveredAssets: 88,
    highlight: "Achieved 44% lift in user onboarding completions within 30 days",
    testimonial: {
      quote:
        "The Uraan team has mastered the synergy between human graphic craftsmanship and AI workflows. They deliver in 48 hours what used to take our previous agency a month.",
      author: "Priya Sundaram",
      role: "Head of Product Design, NovaPay",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Brand Flight Sprint",
    badge: "One-Time Launch",
    price: "$1,490",
    period: "single project sprint",
    description:
      "Ideal for startups and product launches needing an elite, future-proof visual identity with wings.",
    features: [
      "Master Responsive Vector Logo (4 lockups + Flight Glyph)",
      "Comprehensive Color Token & Typography System",
      "Brand Style Guide & Usage Guidelines (PDF Bible)",
      "Social Media Launch Kit (Avatars, Covers, Post Templates)",
      "Full Commercial Copyright & Vector Source Files (.AI, .SVG)",
      "5-7 Business Day Guaranteed Delivery",
    ],
    highlight: false,
    ctaText: "Launch Brand Sprint",
  },
  {
    id: "studio-monthly",
    name: "Growth AI Creative Studio",
    badge: "Most Popular for 50+ Clients",
    price: "$3,290",
    period: "per month (pause or cancel anytime)",
    description:
      "Your on-demand senior design squad. Unlimited requests, rapid 48-hour turnarounds, and generative scale.",
    features: [
      "Unlimited Graphic Design & Visual Requests",
      "One active request at a time (average 48h turnaround)",
      "AI Ad Creatives & Social Media Content Engines",
      "3D Visuals, Spatial Renders & Micro-Animations",
      "Figma UI/UX Screens & Web Design Iterations",
      "Dedicated Senior Art Director + AI Engineer",
      "Pause or cancel subscription anytime with zero penalty",
    ],
    highlight: true,
    popular: true,
    ctaText: "Join Creative Studio",
  },
  {
    id: "enterprise",
    name: "Enterprise Dedicated Squad",
    badge: "For High-Scale Brands",
    price: "$5,890",
    period: "per month",
    description:
      "Custom design squad with multiple parallel pipelines, bespoke brand AI model training, and VIP support.",
    features: [
      "2-3 Parallel Active Design Pipelines Simultaneously",
      "Custom Brand LoRA Model Weights & Private AI Pipelines",
      "Complex 3D Cinema4D & Video Motion Graphics",
      "Full Product UI/UX Architecture & Design Systems",
      "Priority 24/7 turnaround with weekend coverage",
    ],
    highlight: false,
    ctaText: "Book Enterprise Consultation",
  },
];

export const AGENCY_FAQS = [
  {
    q: "How does Uraan Creative Agency combine Graphic Design with Generative AI?",
    a: "We believe in Human Artistry amplified by Neural Velocity. Our senior designers use custom AI pipelines for ultra-rapid concept exploration and texturing, then handcraft and vector every asset in Figma and Illustrator for geometric precision.",
  },
  {
    q: "Why the name 'Uraan'?",
    a: "'Uraan' means flight, ascension, and soaring to new heights. Our mission is to give every client's brand wings through cutting-edge graphic design and rapid execution.",
  },
  {
    q: "Do I own 100% of the commercial copyrights to the designs?",
    a: "Yes, completely! Upon final delivery, you receive full commercial rights, intellectual property ownership, and all open vector source files (.AI, .EPS, .SVG, .FIG, .PSD, .PNG, .PDF).",
  },
  {
    q: "How fast is the turnaround time for design deliverables?",
    a: "For our Growth Studio subscribers, most design deliverables are delivered in 48 hours or less. Full Brand Identity sprints take 5–7 business days.",
  },
];