"use client";

import { useEffect } from "react";

/**
 * Marks the enquiries that come from a Google Ads click, so they can be
 * counted without Google's tag. A visit that
 * lands with `gclid` (Google's auto-tagging) or `utm_medium=cpc` sets a flag
 * for the rest of the tab's session. From then on, clicking a WhatsApp link
 * starts the message with `line`, and clicking a mail link starts the subject
 * with "[Google]". The visitor sees it before sending and can delete it.
 *
 * Nothing is sent anywhere, no cookie is set and nothing reads layout: the
 * link is rewritten in the click's capture phase, just before the browser
 * follows it.
 */
const FLAG = "site:ad-visit";
const MAIL_TAG = "[Google]";

export function AdLeadTag({ line }: { line: string }) {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.has("gclid") || params.get("utm_medium") === "cpc") sessionStorage.setItem(FLAG, "1");
    } catch {
      // storage blocked: nothing gets marked
    }

    const mark = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link?.href) return;
      try {
        if (sessionStorage.getItem(FLAG) !== "1") return;
      } catch {
        return;
      }
      link.href = marked(link.href, line);
    };

    // auxclick covers a middle-click into a new tab
    document.addEventListener("click", mark, true);
    document.addEventListener("auxclick", mark, true);
    return () => {
      document.removeEventListener("click", mark, true);
      document.removeEventListener("auxclick", mark, true);
    };
  }, [line]);

  return null;
}

/** `href` with the ad mark added; unchanged when it is not a WhatsApp or mail link, or is marked already. */
function marked(href: string, line: string): string {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return href;
  }
  if (url.hostname === "wa.me") {
    const text = url.searchParams.get("text") ?? "";
    return text.startsWith(line) ? href : withParam(url, "text", text ? `${line} ${text}` : line);
  }
  if (url.protocol === "mailto:") {
    const subject = url.searchParams.get("subject") ?? "";
    return subject.startsWith(MAIL_TAG) ? href : withParam(url, "subject", subject ? `${MAIL_TAG} ${subject}` : MAIL_TAG);
  }
  return href;
}

/**
 * `url` with one parameter set. Spaces stay %20, the way the site writes these
 * links (encodeURIComponent), rather than the "+" URLSearchParams would write.
 */
function withParam(url: URL, key: string, value: string): string {
  url.searchParams.set(key, value);
  const query = [...url.searchParams].map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
  return `${url.href.split("?")[0]}?${query}`;
}
