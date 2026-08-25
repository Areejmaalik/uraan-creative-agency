export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  icon: string;
  metrics: string;
  aiCapabilities: string[];
  deliverables: string[];
  sampleImage: string;
  beforeAfter?: {
    beforeLabel: string;
    beforeDesc: string;
    afterLabel: string;
    afterDesc: string;
  };
  startingPrice: string;
  turnaround: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category:
    | 'Branding'
    | 'UI/UX'
    | 'Generative Art'
    | '3D & Motion'
    | 'Packaging'
    | 'Marketing';
  description: string;
  image: string;
  gallery?: string[];
  stats: { label: string; value: string };
  tags: string[];
  aiToolsUsed: string[];
  clientQuote?: string;
  clientAuthor?: string;
  year: string;
}

export interface ClientStory {
  id: string;
  name: string;
  logo: string;
  industry: string;
  projectScope: string;
  deliveredAssets: number;
  highlight: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
    rating: number;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  ctaText: string;
  popular?: boolean;
}

export interface ColorToken {
  name: string;
  hex: string;
  usage: string;
}

export interface AiGeneratedBrief {
  conceptTitle: string;
  executiveSummary: string;
  colorPalette: ColorToken[];
  typography: {
    headingFont: string;
    bodyFont: string;
    fontPairingRationale: string;
  };
  visualMetaphors: string[];
  aiPromptDirectives: string[];
  recommendedDeliverables: {
    item: string;
    format: string;
    phase: string;
  }[];
  estimatedTimelineDays: number;
  uraanAdvantage: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}