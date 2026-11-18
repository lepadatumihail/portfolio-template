import type { ServiceKey } from "./landing";

/**
 * What the home page shows that is the same in every language: names, URLs,
 * images, numbers, contact details. The words that go with each item —
 * descriptions, labels, prices as printed — are per language, in
 * lib/home/{en,es,ru}.ts, keyed by the names and keys below; lib/home/index.ts
 * joins the two.
 */

export type Project = {
  name: string;
  url: string;
  image: string;
};

export const projects = [
  { name: "Northwind CRM", url: "https://example.com/northwind-crm", image: "/work/northwind-crm.jpg" },
  { name: "Bayside Car Rental", url: "https://example.com/bayside-car-rental", image: "/work/bayside-car-rental.webp" },
  { name: "Harbor Homes", url: "https://example.com/harbor-homes", image: "/work/harbor-homes.jpg" },
  { name: "Signal AI", url: "https://example.com/signal-ai", image: "/work/signal-ai.jpg" },
  { name: "Acme Clinic", url: "https://example.com/acme-clinic", image: "/work/acme-clinic.webp" },
  { name: "Hillside Living", url: "https://example.com/hillside-living", image: "/work/hillside-living.jpg" },
  { name: "Atlas Graph", url: "https://example.com/atlas-graph", image: "/work/atlas-graph.jpg" },
  { name: "Signal Labs", url: "https://example.com/signal-labs", image: "/work/signal-labs.jpg" },
  { name: "Bloom Method", url: "https://example.com/bloom-method", image: "/work/bloom-method.jpg" },
  { name: "Summit Builders", url: "https://example.com/summit-builders", image: "/work/summit-builders.jpg" },
  { name: "Hotel Aurora", url: "https://example.com/hotel-demo", image: "/work/hotel-aurora.webp" },
] as const satisfies readonly Project[];

export type ProjectName = (typeof projects)[number]["name"];

/** The three live sites layered beside the hero headline, front one first. */
export const heroShowcase = ["Harbor Homes", "Northwind CRM", "Acme Clinic"] as const satisfies readonly ProjectName[];

/**
 * The home page's work slideshow, in order: the two local businesses first,
 * then the range — an AI SaaS, an AI research platform, a CRM, a portal.
 */
export const featuredWork = [
  "Acme Clinic",
  "Bayside Car Rental",
  "Atlas Graph",
  "Signal AI",
  "Northwind CRM",
  "Harbor Homes",
] as const satisfies readonly ProjectName[];

export type CaseStudy = {
  name: string;
  image: string;
  stack: readonly string[];
  /** public demo — the real deployments are private */
  url?: string;
};

export const caseStudies = [
  {
    name: "Menu Atelier",
    image: "/work/hotel-aurora.webp",
    stack: ["Next.js", "Drizzle", "Postgres", "LLM pipeline"],
  },
  {
    name: "Consular Platform",
    image: "/work/consular-admin.jpg",
    stack: ["Next.js", "Supabase", "Prisma", "Stripe"],
  },
] as const satisfies readonly CaseStudy[];

export type CaseStudyName = (typeof caseStudies)[number]["name"];

export type Service = {
  /** the service page it links to, in the visitor's language */
  key: ServiceKey;
  /** where it can be seen: names from projects[] or caseStudies[] */
  seenIn: string[];
  /** a screenshot of one of those, shown beside the service */
  image: string;
};

export const services: Service[] = [
  { key: "web-design", seenIn: ["Acme Clinic", "Harbor Homes", "Summit Builders"], image: "/work/acme-clinic.webp" },
  { key: "seo", seenIn: ["Acme Clinic", "Atlas Graph", "Harbor Homes"], image: "/work/atlas-graph.jpg" },
  { key: "ai-automation", seenIn: ["Atlas Graph", "Hotel Aurora", "Signal AI"], image: "/work/hotel-aurora.webp" },
  { key: "app-development", seenIn: ["Northwind CRM", "Consular Platform", "Atlas Graph"], image: "/work/consular-admin.jpg" },
];

// the results section's counters: the number and how many decimals it prints
export const stats = [
  { key: "impressions", value: 6.32, decimals: 2 },
  { key: "clicks", value: 209, decimals: 0 },
  { key: "projects", value: 25, decimals: 0 },
  { key: "languages", value: 8, decimals: 0 },
] as const;

export type StatKey = (typeof stats)[number]["key"];

export const pricingTiers = [
  { key: "landing", highlighted: false },
  { key: "business", highlighted: true },
  { key: "platform", highlighted: false },
] as const;

export type TierKey = (typeof pricingTiers)[number]["key"];

export const marqueeClients = [
  "Harbor Homes",
  "Signal Labs",
  "Acme Clinic",
  "Hillside Living",
  "Atlas Graph",
  "Hotel Aurora",
  "Bloom Method",
  "Summit Builders",
];

export const email = "hello@example.com";

export const whatsappNumber = "34600000000";
