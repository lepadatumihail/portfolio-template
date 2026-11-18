#!/usr/bin/env node
/**
 * Tells IndexNow (Bing, Yandex, Seznam, Naver) which URLs on the live site
 * changed, so they are crawled now rather than whenever. Bing's index is what
 * ChatGPT search and Copilot answer from, so this is the fast path into those.
 *
 * Run by hand after a deploy that adds or changes pages: `npm run indexnow`.
 * It reads the production sitemap, so it only ever submits URLs that are live.
 * Pass paths to submit just those: `npm run indexnow -- /web-design`.
 *
 * The key is not a secret — IndexNow proves ownership by finding the same
 * string at https://example.com/<key>.txt, which is public/<key>.txt here.
 */
const HOST = "example.com";
const SITE = `https://${HOST}`;
const KEY = "your-indexnow-key";

const paths = process.argv.slice(2);
let urlList;

if (paths.length) {
  urlList = paths.map((path) => new URL(path, SITE).href);
} else {
  const sitemap = await fetch(`${SITE}/sitemap.xml`);
  if (!sitemap.ok) throw new Error(`sitemap.xml answered ${sitemap.status}`);
  urlList = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

const keyFile = await fetch(`${SITE}/${KEY}.txt`);
if (!keyFile.ok || (await keyFile.text()).trim() !== KEY) {
  throw new Error(`${SITE}/${KEY}.txt is not live yet — deploy first, then run this again`);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});

// 200 = accepted, 202 = accepted, key validation pending
console.log(`IndexNow: ${response.status} ${response.statusText} for ${urlList.length} URLs`);
if (!response.ok) process.exitCode = 1;
