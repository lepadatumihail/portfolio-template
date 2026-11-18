"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { whatsappNumber } from "@/lib/data";
import type { HomeCopy } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { joint, typeset, typesetHeading } from "../typeset";
import { WhatsAppIcon } from "../whatsapp-button";

type Copy = HomeCopy["compact"]["review"];
type Status = "idle" | "sending" | "sent" | "failed";

/** set by components/ad-lead-tag.tsx when the visit came from a Google ad */
const AD_FLAG = "site:ad-visit";

/**
 * The free website review: the address (or a box to tick when there is no site
 * yet) and an email or phone to send the findings to. "Get my free review"
 * posts it to app/api/review, which passes it to Alex's Telegram; nothing is
 * stored. WhatsApp sits under the button as the other way in, and is what a
 * visitor gets pointed to if the request fails.
 */
export function ReviewBand({ copy, lang }: { copy: Copy; lang: Lang }) {
  const [site, setSite] = useState("");
  const [noSite, setNoSite] = useState(false);
  const [contact, setContact] = useState("");
  const [missing, setMissing] = useState<"site" | "contact" | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const siteRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const ids = useId();

  const address = site.trim().replace(/^https?:\/\//i, "").replace(/\/$/, "");
  const waText = noSite ? copy.messageNoSite : fill(copy.message, address);
  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    if (!noSite && !address) {
      setMissing("site");
      siteRef.current?.focus();
      return;
    }
    if (contact.trim().length < 5) {
      setMissing("contact");
      contactRef.current?.focus();
      return;
    }

    let fromAd = false;
    try {
      fromAd = sessionStorage.getItem(AD_FLAG) === "1";
    } catch {
      // storage blocked: not marked
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          site: address,
          noSite,
          contact: contact.trim(),
          lang,
          fromAd,
          company: honeypotRef.current?.value ?? "",
        }),
      });
      setStatus(response.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  const error =
    missing === "site" ? copy.missing : missing === "contact" ? copy.missingContact : status === "failed" ? copy.failed : null;

  return (
    <section id="review" className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 sm:px-8">
      {/* the pricing cards' frame: hairline border, 25px corners, warm surface */}
      <div className="reveal rounded-[25px] border border-[rgb(32_33_30/10%)] bg-[#fdfdfb] px-6 py-9 shadow-[0_4px_8px_-4px_rgb(47_46_41/6%)] sm:px-10 sm:py-11 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-12 lg:py-12">
        <div>
          <p className="flex items-center gap-2.5 text-sm text-muted">
            <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />
            {typeset(copy.label, lang)}
          </p>
          <h2 className="mt-5 text-balance font-sans text-[clamp(2rem,4vw,3.1rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
            {typesetHeading(copy.title, lang, "sm")}
            {joint(copy.title, lang)}
            <span className="font-serif italic tracking-[-0.01em]">{typesetHeading(copy.accent, lang, "sm")}</span>
          </h2>
          <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-muted">{typeset(copy.body, lang)}</p>
        </div>

        <div aria-live="polite" className="mt-9 lg:mt-0 lg:self-end">
          {status === "sent" ? (
            <div className="rounded-2xl border border-[rgb(32_33_30/8%)] bg-[#f5f5f1] p-6 sm:p-7">
              <p className="flex items-center gap-3 text-xl font-medium tracking-tight text-foreground">
                <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-white">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                    <path d="m4 10 4 4 8-8" />
                  </svg>
                </span>
                {typeset(copy.sentTitle, lang)}
              </p>
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                {noSite
                  ? copy.sentBodyNoSite.replace("{contact}", contact.trim())
                  : copy.sentBody.replace("{site}", address).replace("{contact}", contact.trim())}
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="grid gap-x-3 gap-y-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${ids}-site`} className="text-[13px] text-muted">
                    {copy.website}
                  </label>
                  <input
                    ref={siteRef}
                    id={`${ids}-site`}
                    name="website"
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    spellCheck={false}
                    autoCapitalize="none"
                    placeholder={copy.placeholder}
                    value={site}
                    disabled={noSite}
                    aria-invalid={missing === "site" || undefined}
                    aria-describedby={missing === "site" ? `${ids}-error` : undefined}
                    onChange={(event) => {
                      setSite(event.target.value);
                      setMissing(null);
                    }}
                    className={FIELD}
                  />
                  <label className="mt-3.5 flex w-fit cursor-pointer items-center gap-2.5 text-[13px] text-muted">
                    <input
                      type="checkbox"
                      checked={noSite}
                      onChange={(event) => {
                        setNoSite(event.target.checked);
                        setMissing(null);
                      }}
                      className="size-4 cursor-pointer accent-accent"
                    />
                    {typeset(copy.noSite, lang)}
                  </label>
                </div>
                <div>
                  <label htmlFor={`${ids}-contact`} className="text-[13px] text-muted">
                    {copy.contact}
                  </label>
                  <input
                    ref={contactRef}
                    id={`${ids}-contact`}
                    name="contact"
                    type="text"
                    autoComplete="email"
                    spellCheck={false}
                    autoCapitalize="none"
                    placeholder={copy.contactPlaceholder}
                    value={contact}
                    aria-invalid={missing === "contact" || undefined}
                    aria-describedby={missing === "contact" ? `${ids}-error` : undefined}
                    onChange={(event) => {
                      setContact(event.target.value);
                      setMissing(null);
                    }}
                    className={FIELD}
                  />
                </div>
              </div>

              {/* people never see this field; bots that fill every input do */}
              <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden opacity-0">
                <input ref={honeypotRef} type="text" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              {error ? (
                <p id={`${ids}-error`} role="alert" className="mt-5 text-sm text-[#a5402a]">
                  {typeset(error, lang)}
                </p>
              ) : null}

              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-[scale,opacity] duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:scale-[0.97] disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "sending" ? copy.sending : typeset(copy.submit, lang)}
                  {status === "sending" ? null : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-4">
                      <path d="M4 12h15m-6-6 6 6-6 6" />
                    </svg>
                  )}
                </button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
                >
                  <WhatsAppIcon className="size-3.5 text-muted" />
                  {typeset(copy.whatsapp, lang)}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const FIELD =
  "mt-2 block w-full rounded-xl border border-[rgb(32_33_30/12%)] bg-white px-4 py-3.5 text-base text-foreground outline-none transition-[border-color,box-shadow,opacity] duration-200 placeholder:text-muted/60 focus-visible:border-accent focus-visible:shadow-[0_0_0_3px_rgb(30_58_95/12%)] disabled:opacity-45";

/** The template with the address put in; with no address, the colon before it goes too. */
function fill(template: string, address: string): string {
  return address ? template.replace("{site}", address) : template.replace(/:?\s*\{site\}/, "");
}
