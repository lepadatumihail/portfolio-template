import { email, whatsappNumber } from "@/lib/data";
import { SITE, apiJson } from "@/lib/api";
import { HOME_COPY, homeServices, homeStats, homeTiers } from "@/lib/home";

export const dynamic = "force-static";

// Same facts the site renders — the English home page's, from lib/data.ts and
// lib/home/en.ts, so the API cannot claim anything the pages do not.
export async function GET() {
  const { process, guarantee } = HOME_COPY.en;

  return apiJson({
    name: "Alex Doe",
    role: "Freelance web developer & AI builder",
    summary:
      "Fast websites, web apps and AI automations for small businesses in Marbella and the Costa del Sol — live in days, from €500.",
    location: {
      city: "Marbella",
      region: "Andalusia",
      country: "ES",
      areaServed: [
        "Marbella",
        "San Pedro de Alcántara",
        "Puerto Banús",
        "Estepona",
        "Fuengirola",
        "Mijas",
        "Benalmádena",
        "Málaga",
        "Costa del Sol",
      ],
    },
    contact: {
      email,
      whatsapp: `+${whatsappNumber}`,
      instagram: "https://instagram.com/yourhandle",
      github: "https://github.com/your-username",
    },
    services: homeServices("en").map(
      ({ title, summary, description, includes, price, href, seenIn }) => ({
        title,
        summary,
        description,
        includes,
        price,
        url: `${SITE}${href}`,
        seenIn,
      }),
    ),
    pricing: homeTiers("en").map(({ name, price, tagline, features }) => ({
      name,
      price,
      tagline,
      features,
    })),
    process: process.steps.map(({ day, title, description }) => ({
      day,
      title,
      description,
    })),
    guarantee: guarantee.points.map(({ title, description }) => ({
      title,
      description,
    })),
    stats: homeStats("en").map(({ value, suffix, label, note }) => ({
      value,
      suffix,
      label,
      note,
    })),
  });
}
