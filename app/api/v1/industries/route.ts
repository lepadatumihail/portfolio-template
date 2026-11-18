import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SITE, apiJson } from "@/lib/api";
import { LANGS } from "@/lib/i18n";
import { INDUSTRY_HUB_PATH, industryPath, type Lang } from "@/lib/industries";
import { INDUSTRIES } from "@/lib/industries-index";

export const dynamic = "force-static";

/**
 * public/llms.txt is hand-written and lists every sector page. This route is
 * prerendered, so checking here makes the build fail when a sector is added,
 * renamed or re-summarised and llms.txt was not updated to match.
 */
function assertLlmsTxtInStep() {
  let llms: string;
  try {
    llms = readFileSync(join(process.cwd(), "public", "llms.txt"), "utf8");
  } catch {
    return; // not on disk in this runtime — nothing to compare against
  }
  const missing = INDUSTRIES.flatMap((entry) =>
    LANGS.map(
      (lang) =>
        `- [${entry[lang].serviceName}](${SITE}${industryPath(lang, entry[lang].slug)}): ${entry[lang].summary}`,
    ),
  ).filter((line) => !llms.includes(line));
  if (missing.length) {
    throw new Error(
      `public/llms.txt is out of step with lib/industries-index.ts. Expected these lines:\n${missing.join("\n")}`,
    );
  }
}

// The industry pages as data — same registry the pages, the sitemap and the
// markdown representations read, so the API cannot say anything they do not.
export async function GET() {
  assertLlmsTxtInStep();

  const page = (entry: (typeof INDUSTRIES)[number], lang: Lang) => {
    const sector = entry[lang];
    const url = `${SITE}${industryPath(lang, sector.slug)}`;
    return {
      name: sector.name,
      service: sector.serviceName,
      summary: sector.summary,
      title: sector.copy.metaTitle,
      description: sector.copy.metaDescription,
      url,
      markdown: `${url}.md`,
      faq: sector.copy.faq.map(({ q, a }) => ({ question: q, answer: a })),
    };
  };

  return apiJson({
    hub: Object.fromEntries(LANGS.map((lang) => [lang, `${SITE}${INDUSTRY_HUB_PATH[lang]}`])),
    industries: INDUSTRIES.map((entry) => ({
      key: entry.key,
      ...Object.fromEntries(LANGS.map((lang) => [lang, page(entry, lang)])),
    })),
  });
}
