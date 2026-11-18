/**
 * Markdown representations of the site's pages, built from the same content
 * modules the React components render — not by scraping the HTML.
 *
 * Scraping was the other option and it loses real content here: the animated
 * counters in the results section serialise as "0.00M" before hydration, and
 * the services accordion only ships the open item's copy. Reading lib/home/
 * and lib/landing-copy.ts directly gives agents the true numbers and the full
 * text. The home page's words live in lib/home/{en,es,ru}.ts only — the
 * components and this module both read them from there.
 */
import { absoluteUrl, otherVersions, pathFor } from "../alternates";
import type { ChatbotsConfig } from "../chatbots";
import { email, whatsappNumber } from "../data";
import {
  HOME_COPY,
  homeCaseStudies,
  homeProjects,
  homeServices,
  homeStats,
  homeTiers,
  landingProjects,
  type LocalizedProject,
} from "../home";
import type { Heading } from "../home/types";
import { formatNumber, homePath, LANG_META, LANGS, otherLangs, type Lang } from "../i18n";
import { INDUSTRY_HUB_PATH, industryHubUi, industryPath } from "../industries";
import { INDUSTRIES, INDUSTRY_CONFIGS } from "../industries-index";
import { landingUi, type LandingConfig } from "../landing";
import { industryHubJsonLd, landingJsonLd } from "../landing-schema";
import {
  formatReviewMonth,
  GOOGLE_PROFILE_URL,
  REVIEWS_PATH,
  reviewLines,
  reviewsCopy,
  reviewsUi,
  starsLabel,
  STRIP_REVIEWS,
  WRITTEN_REVIEWS,
  type GoogleReview,
  type QuotedReview,
} from "../reviews";
import { reviewsJsonLd } from "../reviews-schema";
import { markdownLabelsRu } from "../ru/ui";
import { SERVICE_CONFIGS } from "../services-index";
import {
  formatReadingTime,
  formatStudyDate,
  studyUi,
  type Study,
  type StudyBlock,
} from "../studies";
import { relatedStudies, STUDIES, STUDY_INDEX_PATH, studiesFor } from "../studies-index";
import { studyIndexJsonLd, studyJsonLd } from "../studies-schema";
import { SITE_NAME, SITE_PHONE, SITE_URL, homeFaqJsonLd, siteJsonLd } from "../site-schema";
import { MARKDOWN_ROUTES, normalizePathname } from "./routes";

const FENCE = "```";
const WHATSAPP_URL = `https://wa.me/${whatsappNumber}`;

/** YAML front matter. JSON string escaping is valid YAML for these values. */
function frontmatter(fields: Record<string, string | undefined>): string {
  const lines = Object.entries(fields)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`);
  return ["---", ...lines, "---"].join("\n");
}

/**
 * The page's other language versions for the front matter. `alternate` stays
 * one URL, as it was when the site had two languages: the English page's
 * Spanish twin, every other page's English one. Each other version also gets a
 * key of its own — `alternate_es`, `alternate_ru`, `alternate_en` — so no
 * field changes type as languages are added.
 */
function alternateFields(key: string, lang: Lang): Record<string, string> {
  const versions = otherVersions(key, lang);
  if (!versions.length) return {};
  return {
    alternate: absoluteUrl(versions[0].path),
    ...Object.fromEntries(
      versions.map((version) => [
        `alternate_${LANG_META[version.lang].htmlLang}`,
        absoluteUrl(version.path),
      ]),
    ),
  };
}

/** "[Español](…)", one per other language version — the markdown language switch. */
function languageLinks(key: string, lang: Lang): string[] {
  return otherVersions(key, lang).map(
    (version) => `[${LANG_META[version.lang].label}](${absoluteUrl(version.path)})`,
  );
}

/** Labels for the parts of the document that have no counterpart on the page. */
const labels: Record<Lang, { structuredData: string; phone: string; location: string }> = {
  en: {
    structuredData: "Structured data",
    phone: "WhatsApp / phone",
    location: "Location",
  },
  es: {
    structuredData: "Datos estructurados",
    phone: "WhatsApp / teléfono",
    location: "Ubicación",
  },
  ru: markdownLabelsRu,
};

/** Structured data kept verbatim, the way Cloudflare's converter does it. */
function jsonLdBlock(data: unknown, lang: Lang = "en"): string {
  return [
    `## ${labels[lang].structuredData}`,
    `${FENCE}json`,
    JSON.stringify(data, null, 2),
    FENCE,
  ].join("\n");
}

function sentenceCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** The footer sets its location in lowercase with CSS; markdown has no CSS. */
function titleCase(text: string): string {
  return text.replace(/(^|\s)(\p{Ll})/gu, (_, lead, letter: string) => lead + letter.toUpperCase());
}

function bullets(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

function heading({ title, accent }: Heading): string {
  return `${title} ${accent}`;
}

function projectBlock(project: LocalizedProject): string {
  const host = new URL(project.url).hostname.replace("www.", "");
  return [
    `### ${project.name} — [${host}](${project.url})`,
    "",
    project.description,
    "",
    `*${project.tags.join(" · ")}*`,
  ].join("\n");
}

/** "**5.0** · [17 reviews on Google](…/reviews)", the rating line the home hero and sector quotes print. */
function ratingLine(lang: Lang): string {
  const copy = reviewsCopy(lang);
  return `**${copy.rating}** · [${copy.count}](${SITE_URL}${REVIEWS_PATH[lang]})`;
}

/** A review quoted on a sector page, as the page sets it: rating, words, translation, who and when. */
function quotedReview(review: QuotedReview, lang: Lang): string {
  return [
    ratingLine(lang),
    "",
    `> ${review.excerpt}`,
    ...(review.translation
      ? ["", `*${reviewsUi[lang].translatedFrom[review.lang]}:* ${review.translation}`]
      : []),
    "",
    `— ${review.author}, ${formatReviewMonth(review.date, lang)} · [${reviewsCopy(lang).reviewLink}](${review.url})`,
  ].join("\n");
}

/** The service pages' review strip: the rating, linked to the listing on Google, then each short line. */
function reviewStrip(lang: Lang): string {
  const copy = reviewsCopy(lang);
  return [
    `**${copy.rating}** · [${copy.count}](${GOOGLE_PROFILE_URL})`,
    "",
    bullets(
      STRIP_REVIEWS.map(
        (review) =>
          `${review.short} — ${review.author}, ${formatReviewMonth(review.date, lang)} · [${copy.reviewLink}](${review.url})`,
      ),
    ),
  ].join("\n");
}

function document(blocks: string[]): string {
  return `${blocks.filter(Boolean).join("\n\n")}\n`;
}

function renderHome(lang: Lang): string {
  const copy = HOME_COPY[lang];
  const { locale } = LANG_META[lang];
  // pages in other languages say which language they are in
  const marked = (link: string, other: Lang) =>
    other === lang ? link : `${link} (${LANG_META[other].inline})`;

  return document([
    frontmatter({
      title: copy.meta.title,
      description: copy.meta.description,
      url: `${SITE_URL}${homePath(lang)}`,
      site: SITE_NAME,
      language: LANG_META[lang].htmlLang,
      ...alternateFields("home", lang),
    }),

    `# ${copy.hero.h1Main} ${copy.hero.h1Accent}`,
    copy.hero.sub,
    `${copy.hero.availability} — [WhatsApp](${WHATSAPP_URL}) · [${email}](mailto:${email})`,
    ratingLine(lang),

    `## ${heading(copy.services.heading)}`,
    copy.services.intro,
    ...homeServices(lang).map((service) =>
      [
        `### ${service.title} — ${service.price}`,
        "",
        service.summary,
        "",
        service.description,
        "",
        bullets(service.includes),
        "",
        `${copy.services.seenIn}: ${service.seenIn.join(", ")}`,
        "",
        ...(service.key === "ai-automation" ? [`[${copy.services.chatbotsLink}](${SITE_URL}${pathFor("chatbots", lang)})`, ""] : []),
        `[${service.linkLabel}](${SITE_URL}${service.href})`,
      ].join("\n"),
    ),

    `## ${heading(copy.work.heading)}`,
    ...homeProjects(lang).map(projectBlock),

    `## ${heading(copy.process.heading)}`,
    ...copy.process.steps.map(
      (step) => `### ${step.day} — ${step.title}\n\n${step.description}`,
    ),
    copy.process.note,

    `## ${heading(copy.pricing.heading)}`,
    ...homeTiers(lang).map((tier) =>
      [
        `### ${tier.name} — ${tier.price}${tier.highlighted ? ` (${copy.pricing.badge.toLocaleLowerCase(locale)})` : ""}`,
        "",
        tier.tagline,
        "",
        bullets(tier.features),
      ].join("\n"),
    ),
    copy.pricing.note,

    `## ${heading(copy.guarantee.heading)}`,
    `**${copy.guarantee.kicker}: ${copy.guarantee.titleMain} ${copy.guarantee.titleAccent}**`,
    copy.guarantee.body,
    copy.guarantee.claim,
    ...copy.guarantee.points.map(
      (point) => `### ${point.title}\n\n${point.description}`,
    ),
    copy.guarantee.note,

    `## ${heading(copy.results.heading)}`,
    copy.results.intro,
    bullets(
      homeStats(lang).map(
        (stat) =>
          `**${formatNumber(stat.value, lang, stat.decimals)}${stat.suffix}** — ${stat.label} (${stat.note})`,
      ),
    ),
    copy.results.note,

    `## ${heading(copy.caseStudies.heading)}`,
    ...homeCaseStudies(lang).map((study) =>
      [
        `### ${study.name} — ${study.client}`,
        "",
        study.description,
        "",
        bullets(study.features),
        "",
        `*${copy.caseStudies.stack}: ${study.stack.join(", ")}*`,
        ...(study.url
          ? ["", `[${study.linkLabel ?? copy.caseStudies.demoLabel}](${study.url})`]
          : []),
      ].join("\n"),
    ),

    `## ${heading(copy.studies.heading)}`,
    copy.studies.note,
    ...studiesFor(lang).map((study) =>
      [
        `### [${study.hero.h1Main} ${study.hero.h1Accent}](${SITE_URL}${study.slug})`,
        "",
        `*${study.hero.kicker}*`,
        "",
        study.summary[0],
      ].join("\n"),
    ),
    `[${studyUi[lang].backToIndex}](${SITE_URL}${STUDY_INDEX_PATH[lang]})`,

    `## ${heading(copy.faq.heading)}`,
    ...copy.faq.items.map((item) => `### ${item.q}\n\n${item.a}`),

    `## ${heading(copy.industries.heading)}`,
    industryHubUi[lang].dek,
    bullets([
      ...INDUSTRY_CONFIGS[lang].map(
        (config) => `[${config.serviceName}](${SITE_URL}${config.slug})`,
      ),
      `[${copy.industries.all}](${SITE_URL}${INDUSTRY_HUB_PATH[lang]})`,
      ...otherVersions("industry-hub", lang).map((version) =>
        marked(`[${industryHubUi[version.lang].label}](${SITE_URL}${version.path})`, version.lang),
      ),
    ]),

    `## ${[copy.contact.titleMain, copy.contact.titleAccent].filter(Boolean).join(" ")}`,
    copy.contact.kicker,
    bullets([
      `Email: [${email}](mailto:${email})`,
      `${labels[lang].phone}: [${SITE_PHONE}](${WHATSAPP_URL})`,
      "Instagram: [@yourhandle](https://instagram.com/yourhandle)",
      "GitHub: [your-username](https://github.com/your-username)",
      copy.markdown.basedIn,
    ]),

    // every service page, this language's first, each named in its own language
    `## ${copy.markdown.servicePages}`,
    bullets(
      [lang, ...otherLangs(lang)].flatMap((other) =>
        SERVICE_CONFIGS[other].map((config) =>
          marked(`[${config.linkLabel}](${SITE_URL}${config.slug})`, other),
        ),
      ),
    ),

    `## ${copy.markdown.caseStudies}`,
    bullets([
      `[${studyUi[lang].indexMetaTitle}](${SITE_URL}${STUDY_INDEX_PATH[lang]})`,
      ...otherVersions("case-studies", lang).map((version) =>
        marked(`[${studyUi[version.lang].indexMetaTitle}](${SITE_URL}${version.path})`, version.lang),
      ),
    ]),

    jsonLdBlock([siteJsonLd(lang), homeFaqJsonLd(lang)], lang),
  ]);
}

/** The chatbots page's own extras: a WhatsApp ask per feature and the Northwind CRM proof. */
function isChatbots(config: LandingConfig): config is ChatbotsConfig {
  return config.key === "chatbots";
}

function chatbotsProof({ proof }: ChatbotsConfig): string[] {
  const { report } = proof;
  return [
    `## ${proof.title} ${proof.accent}`,
    proof.intro,
    bullets(proof.does),
    `### ${report.title}`,
    `*${report.status}*`,
    bullets([
      `**${report.value}** ${report.unit}`,
      ...report.rows.map((row) => `${row.label}: ${row.value}`),
    ]),
    `**${report.estimate.label}**`,
    bullets(report.estimate.rows.map((row) => `${row.label}: ${row.value}`)),
    `*${report.caption}*`,
  ];
}

function renderLanding(config: LandingConfig): string {
  const ui = landingUi[config.lang];
  const { copy } = config;
  const chatbots = isChatbots(config) ? config : null;
  const url = `${SITE_URL}${config.slug}`;
  const section = (key: keyof typeof ui.sections) =>
    `${ui.sections[key].title} ${ui.sections[key].accent}`.trim();
  const projects = landingProjects(config.lang);
  const proof = config.proofProjects
    .map((name) => projects.find((project) => project.name === name))
    .filter((project): project is LocalizedProject => Boolean(project));
  const stats = config.stats ?? ui.stats;
  const statsSource = config.statsSource ?? ui.statsSource;
  const processHeading = config.process?.heading ?? ui.sections.process;

  return document([
    frontmatter({
      title: copy.metaTitle,
      description: copy.metaDescription,
      url,
      site: SITE_NAME,
      language: LANG_META[config.lang].htmlLang,
      ...alternateFields(config.key, config.lang),
    }),

    config.parent
      ? [
          `[${ui.nav.home}](${absoluteUrl(ui.nav.homeHref)})`,
          `[${config.parent.label}](${SITE_URL}${config.parent.href})`,
          config.audience ?? config.serviceName,
        ].join(" / ")
      : "",
    `# ${copy.hero.h1Main} ${copy.hero.h1Accent}`,
    `*${copy.hero.label}*`,
    copy.hero.sub,
    `[${copy.hero.ctaLabel}](${WHATSAPP_URL}) · [${email}](mailto:${email})`,
    ...copy.intro,

    `## ${section("features")}`,
    ...copy.features.map((feature, i) => {
      const ask = chatbots?.asks[i];
      return [
        `### ${feature.title}\n\n${feature.description}`,
        ...(feature.includes ? [bullets(feature.includes)] : []),
        ...(ask ? [`[${ask.label}](${WHATSAPP_URL}?text=${encodeURIComponent(ask.waMessage)})`] : []),
      ].join("\n\n");
    }),

    ...(chatbots ? chatbotsProof(chatbots) : []),

    ...(config.hideProof
      ? []
      : [
          `## ${section("proof")}`,
          ...(config.reviewRail ? [reviewStrip(config.lang)] : []),
          bullets(stats.map((stat) => `**${stat.value}** — ${stat.label}`)),
          `${config.statsNote ?? ui.statsNote} [${statsSource.label}](${SITE_URL}${statsSource.href}).`,
          ...proof.map(projectBlock),
          ...(config.review ? [quotedReview(config.review, config.lang)] : []),
          copy.localNote,
        ]),

    `## ${processHeading.title} ${processHeading.accent}`.trim(),
    copy.processNote,
    ...(config.process?.steps ?? ui.processSteps).map(
      (step) => `### ${step.day} — ${step.title}\n\n${step.description}`,
    ),
    config.process?.footnote ?? ui.processFootnote,

    `## ${section("pricing")}`,
    ...(config.tiers ?? ui.tiers).map((tier, i) =>
      [
        `### ${tier.name} — ${tier.price}${i === config.highlightTier ? ` (${config.tierBadge ?? ui.tierBadge})` : ""}`,
        "",
        tier.tagline,
        // the chatbots page prints one starting price and no feature list
        ...(tier.features.length ? ["", bullets(tier.features)] : []),
      ].join("\n"),
    ),
    config.pricingFootnote ?? ui.pricingFootnote,

    `## ${section("faq")}`,
    ...copy.faq.map((item) => `### ${item.q}\n\n${item.a}`),

    `## ${sentenceCase(ui.alsoLooking)}`,
    copy.crossLinksBlurb,
    bullets([
      ...config.siblings.map(
        (sibling) => `[${sibling.label}](${SITE_URL}${sibling.href})`,
      ),
      // the footer link every landing page carries; sector pages already
      // have it in their breadcrumb line
      ...(config.parent || config.siblings.some((s) => s.href === INDUSTRY_HUB_PATH[config.lang])
        ? []
        : [`[${industryHubUi[config.lang].label}](${SITE_URL}${INDUSTRY_HUB_PATH[config.lang]})`]),
      ...languageLinks(config.key, config.lang),
    ]),

    `## ${[ui.contact.titleMain, ui.contact.titleAccent].filter(Boolean).join(" ")}`,
    ui.contact.kicker,
    bullets([
      `Email: [${email}](mailto:${email})`,
      `${labels[config.lang].phone}: [${SITE_PHONE}](${WHATSAPP_URL})`,
      `${labels[config.lang].location}: ${titleCase(ui.footerLocation)}`,
    ]),

    jsonLdBlock(landingJsonLd(config), config.lang),
  ]);
}

function renderIndustryHub(lang: Lang): string {
  const ui = industryHubUi[lang];

  return document([
    frontmatter({
      title: ui.metaTitle,
      description: ui.metaDescription,
      url: `${SITE_URL}${INDUSTRY_HUB_PATH[lang]}`,
      site: SITE_NAME,
      language: LANG_META[lang].htmlLang,
      ...alternateFields("industry-hub", lang),
    }),

    `# ${ui.title.main} ${ui.title.accent}`,
    `*${ui.kicker}*`,
    ui.dek,

    ...INDUSTRIES.map((entry) => {
      const sector = entry[lang];
      return [
        `## [${sector.serviceName}](${SITE_URL}${industryPath(lang, sector.slug)})`,
        "",
        sector.summary,
      ].join("\n");
    }),

    `${ui.outro} [${ui.general.label}](${SITE_URL}${ui.general.href}).`,

    bullets([
      `Email: [${email}](mailto:${email})`,
      `${labels[lang].phone}: [${SITE_PHONE}](${WHATSAPP_URL})`,
      ...languageLinks("industry-hub", lang),
    ]),

    jsonLdBlock(industryHubJsonLd(lang), lang),
  ]);
}

/** A markdown table from a header row plus body rows. */
function table(columns: string[], rows: string[][]): string {
  const header = `| ${columns.join(" | ")} |`;
  const rule = `| ${columns.map(() => "---").join(" | ")} |`;
  return [header, rule, ...rows.map((row) => `| ${row.join(" | ")} |`)].join("\n");
}

function studyBlock(block: StudyBlock): string {
  const heading = "heading" in block && block.heading ? `## ${block.heading}` : "";
  const parts: string[] = [heading];

  switch (block.kind) {
    case "prose":
      parts.push(...block.body);
      break;
    case "stats":
      parts.push(
        bullets(
          block.items.map(
            (item) => `**${item.value}** — ${item.label}${item.note ? ` (${item.note})` : ""}`,
          ),
        ),
      );
      if (block.note) parts.push(`*${block.note}*`);
      break;
    case "chart":
      // the bars carry their own printed value, so the chart is a two-column
      // table in markdown — same numbers, no pictures
      if (block.intro) parts.push(block.intro);
      parts.push(
        table(block.columns ?? ["", "Value"], block.bars.map((bar) => [bar.label, bar.display])),
      );
      if (block.caption) parts.push(`*${block.caption}*`);
      break;
    case "table":
      if (block.intro) parts.push(block.intro);
      parts.push(table(block.columns, block.rows));
      if (block.caption) parts.push(`*${block.caption}*`);
      break;
    case "points":
      if (block.intro) parts.push(block.intro);
      parts.push(...block.items.map((item) => `### ${item.title}\n\n${item.body}`));
      break;
    case "callout":
      parts.push(`> ${block.body}`);
      break;
  }

  return parts.filter(Boolean).join("\n\n");
}

function renderStudy(study: Study): string {
  const ui = studyUi[study.lang];
  const url = `${SITE_URL}${study.slug}`;

  return document([
    frontmatter({
      title: study.metaTitle,
      description: study.metaDescription,
      url,
      site: SITE_NAME,
      language: LANG_META[study.lang].htmlLang,
      ...alternateFields(study.key, study.lang),
      published: study.published,
      author: "Alex Doe",
    }),

    `# ${study.hero.h1Main} ${study.hero.h1Accent}`,
    `*${study.hero.kicker}*`,
    `${ui.labels.published} ${formatStudyDate(study.published, study.lang)} · ${formatReadingTime(study.readingMinutes, study.lang)} · Alex Doe`,
    study.hero.dek,
    bullets(study.facts.map((fact) => `**${fact.label}:** ${fact.value}`)),
    ...(study.clientUrl
      ? [`${ui.labels.liveSite}: [${study.clientLabel}](${study.clientUrl})`]
      : []),

    `## ${ui.labels.summary}`,
    bullets(study.summary),

    ...study.blocks.map(studyBlock),

    `## ${ui.labels.takeaways}`,
    study.takeaways.map((point, i) => `${i + 1}. ${point}`).join("\n"),

    `## ${ui.labels.method}`,
    ...study.method,

    `## ${study.cta.heading}`,
    study.cta.body,
    bullets([
      `${labels[study.lang].phone}: [${SITE_PHONE}](${WHATSAPP_URL})`,
      `Email: [${email}](mailto:${email})`,
    ]),

    `## ${ui.labels.readNext}`,
    bullets(
      relatedStudies(study).map(
        (other) => `[${other.hero.h1Main} ${other.hero.h1Accent}](${SITE_URL}${other.slug})`,
      ),
    ),

    jsonLdBlock(studyJsonLd(study), study.lang),
  ]);
}

function renderStudyIndex(lang: Lang): string {
  const ui = studyUi[lang];
  const url = `${SITE_URL}${STUDY_INDEX_PATH[lang]}`;

  return document([
    frontmatter({
      title: ui.indexMetaTitle,
      description: ui.indexMetaDescription,
      url,
      site: SITE_NAME,
      language: LANG_META[lang].htmlLang,
      ...alternateFields("case-studies", lang),
    }),

    `# ${ui.indexTitle.main} ${ui.indexTitle.accent}`,
    `*${ui.indexKicker}*`,
    ui.indexDek,

    ...studiesFor(lang).map((study) =>
      [
        `## [${study.hero.h1Main} ${study.hero.h1Accent}](${SITE_URL}${study.slug})`,
        "",
        `*${study.hero.kicker} — ${formatStudyDate(study.published, lang)} — ${formatReadingTime(study.readingMinutes, lang)}*`,
        "",
        study.hero.dek,
        "",
        bullets(study.summary),
      ].join("\n"),
    ),

    jsonLdBlock(studyIndexJsonLd(lang), lang),
  ]);
}

/** A review as a markdown quote, one line of the original per paragraph, as the page sets it. */
function reviewQuote(review: GoogleReview): string {
  return reviewLines(review)
    .map((line) => `> ${line.text}`)
    .join("\n>\n");
}

function renderReviews(lang: Lang): string {
  const copy = reviewsCopy(lang);

  return document([
    frontmatter({
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${SITE_URL}${REVIEWS_PATH[lang]}`,
      site: SITE_NAME,
      language: LANG_META[lang].htmlLang,
      ...alternateFields("reviews", lang),
    }),

    `# ${copy.title.main} ${copy.title.accent}`,
    `*${copy.kicker}*`,
    copy.dek,
    // the page's two lines, with its separators: a Russian date already ends
    // in "г.", so a full stop after it would double
    `**${copy.rating}** · ${copy.count}`,
    `${copy.checked} · [${copy.profileLink}](${GOOGLE_PROFILE_URL})`,

    ...WRITTEN_REVIEWS.map((review) =>
      [
        `## ${review.author}`,
        "",
        `*${starsLabel(review.rating, lang)} — ${formatReviewMonth(review.date, lang)} — [${copy.reviewLink}](${review.url})*`,
        "",
        reviewQuote(review),
      ].join("\n"),
    ),

    copy.languageNote,

    bullets([
      `Email: [${email}](mailto:${email})`,
      `${labels[lang].phone}: [${SITE_PHONE}](${WHATSAPP_URL})`,
      ...languageLinks("reviews", lang),
    ]),

    jsonLdBlock(reviewsJsonLd(lang), lang),
  ]);
}

const LANDING_CONFIGS: LandingConfig[] = LANGS.flatMap((lang) => [
  ...SERVICE_CONFIGS[lang],
  ...INDUSTRY_CONFIGS[lang],
]);

const renderers = new Map<string, () => string>([
  ...LANGS.map((lang) => [homePath(lang), () => renderHome(lang)] as const),
  ...LANDING_CONFIGS.map(
    (config) => [config.slug, () => renderLanding(config)] as const,
  ),
  ...LANGS.map(
    (lang) => [INDUSTRY_HUB_PATH[lang], () => renderIndustryHub(lang)] as const,
  ),
  ...LANGS.map(
    (lang) => [STUDY_INDEX_PATH[lang], () => renderStudyIndex(lang)] as const,
  ),
  ...STUDIES.map((study) => [study.slug, () => renderStudy(study)] as const),
  ...LANGS.map((lang) => [REVIEWS_PATH[lang], () => renderReviews(lang)] as const),
]);

// routes.ts keeps its list as literals so the proxy stays small. This module
// already has the content loaded, so it is the place to notice the two lists
// drifting apart — at build time, not as a 404 an agent finds later.
const unlisted = [...renderers.keys()].filter(
  (path) => !(MARKDOWN_ROUTES as readonly string[]).includes(path),
);
const unrendered = MARKDOWN_ROUTES.filter((path) => !renderers.has(path));
if (unlisted.length || unrendered.length) {
  throw new Error(
    `lib/markdown/routes.ts is out of step with the content: missing from MARKDOWN_ROUTES [${unlisted.join(", ")}], no renderer for [${unrendered.join(", ")}]`,
  );
}

/** Markdown for a site path, or null when the path has no representation. */
export function renderMarkdown(pathname: string): string | null {
  return renderers.get(normalizePathname(pathname))?.() ?? null;
}
