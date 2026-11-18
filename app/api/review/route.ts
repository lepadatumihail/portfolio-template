import { LANGS, type Lang } from "@/lib/i18n";

/**
 * The home page's free website review form (components/home/review-band.tsx)
 * posts here, and the request goes to Alex's Telegram through his bot. Nothing
 * is stored. Needs TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID (the chat that sent
 * the bot /start), set in Vercel and in .env.local.
 *
 * The message is plain text, so nothing a visitor types can format it, and
 * Telegram turns the email address or phone number into a tappable link.
 */

const MAX = 200;

type Body = {
  site?: unknown;
  noSite?: unknown;
  contact?: unknown;
  lang?: unknown;
  fromAd?: unknown;
  /** the hidden honeypot field: people never see it, form-filling bots fill it */
  company?: unknown;
};

export async function POST(request: Request) {
  // Only the site's own pages may post here.
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return Response.json({ ok: false }, { status: 403 });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // A bot filled the hidden field: say yes and send nothing.
  if (typeof body.company === "string" && body.company.trim()) return Response.json({ ok: true });

  const noSite = body.noSite === true;
  const site = clean(body.site);
  const contact = clean(body.contact);
  const lang: Lang = LANGS.includes(body.lang as Lang) ? (body.lang as Lang) : "en";
  if ((!noSite && !site) || contact.length < 5) {
    return Response.json({ ok: false }, { status: 422 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("review form: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    return Response.json({ ok: false }, { status: 503 });
  }

  const phone = contact.includes("@") ? "" : contact.replace(/[^\d]/g, "");
  const details = [
    `Website: ${noSite ? "none yet" : site}`,
    `Contact: ${contact}`,
    ...(phone.length >= 8 ? [`WhatsApp: https://wa.me/${phone}`] : []),
    `Page language: ${lang.toUpperCase()}`,
  ];
  const title = body.fromAd === true ? "New free review request (from a Google ad)" : "New free review request";
  const text = [title, "", ...details].join("\n");

  const sent = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, link_preview_options: { is_disabled: true } }),
  }).catch(() => null);

  if (!sent?.ok) {
    console.error("review form: Telegram sendMessage failed", sent?.status, await sent?.text().catch(() => ""));
    return Response.json({ ok: false }, { status: 502 });
  }
  return Response.json({ ok: true });
}

/** A short single-line string, or "" for anything else. */
function clean(value: unknown): string {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, MAX) : "";
}
