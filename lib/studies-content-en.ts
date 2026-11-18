import type { Study, StudyDataset } from "./studies";

/**
 * English case studies.
 *
 * Every figure below is traceable: Search Console numbers come from the
 * property named in the study's `method` block with the exact date window
 * printed next to them, and the survey numbers come from the PageSpeed
 * Insights runs described in the third study. Nothing here is estimated,
 * rounded up, or attributed to a cause the data cannot support — where the
 * data only shows correlation or nothing at all, the study says so.
 */

export const acmeClinicEn: Study = {
  slug: "/case-studies/acme-clinic-marbella-seo",
  lang: "en",
  key: "acme-clinic",
  published: "2026-09-01",
  readingMinutes: 7,

  metaTitle: "Marbella dental clinic SEO: 101,872 impressions in 15 months",
  metaDescription:
    "Acme Clinic Marbella in Google over 15 months: 101,872 impressions, 1,894 clicks and the three languages that mattered. Real Search Console data.",

  hero: {
    kicker: "Case study · Healthcare · Marbella",
    h1Main: "A Marbella dental clinic's first 15 months in",
    h1Accent: "search",
    dek: "Acme Clinic went live with a booking wizard, WhatsApp capture and three languages. Here is every number Google recorded afterwards — including the queries it still has not won.",
  },

  facts: [
    { label: "Client", value: "Acme Clinic, Marbella" },
    { label: "Sector", value: "Dental & aesthetic clinic, open 24/7" },
    { label: "Languages", value: "Spanish, English, Swedish" },
    { label: "Measured", value: "1 Jun 2025 – 29 Aug 2026" },
    { label: "Source", value: "Google Search Console" },
  ],

  summary: [
    "Over 15 months the site earned 101,872 impressions and 1,894 clicks from Google, at an average position of 11.8.",
    "Monthly impressions grew from 1,889 in the first month to 9,778 in August 2026 — a 5.2× increase, with July 2026 the best month at 10,268 impressions and 267 clicks.",
    "27% of clicks came from outside Spain, and the site ranks in the top three for German, French and Dutch searches for a dentist in Marbella — languages the site was never translated into.",
    "Mobile converts 3.6× better than desktop: 2.92% CTR against 0.81%, despite desktop showing slightly more impressions.",
    "The largest term in the category, “clínica dental Marbella”, is still unwon — 3,410 impressions at an average position of 31.7.",
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "Acme Clinic is a dental and aesthetic clinic in Marbella that answers the phone at three in the morning. That is the whole proposition, and it is the reason the site was built the way it was: a multi-step booking wizard rather than a contact form, WhatsApp capture on every page, and separate Spanish, English and Swedish versions rather than a language switcher bolted onto one set of pages.",
        "A clinic site is a good subject for a case study because the search demand is real, local and measurable. Nobody idly browses for an emergency dentist. Every impression below is somebody in or near Marbella with a specific problem, and every click is that person choosing this clinic over the one above it in the results.",
      ],
    },

    {
      kind: "stats",
      heading: "The 15-month picture",
      note: "Google Search Console, property sc-domain:acme-clinic.example, 1 June 2025 – 29 August 2026. Impressions count every time a page appeared in results; clicks are visits that followed.",
      items: [
        { value: "101,872", label: "Impressions", note: "15 months" },
        { value: "1,894", label: "Clicks from search", note: "15 months" },
        { value: "11.8", label: "Average position", note: "all queries" },
        { value: "5.2×", label: "Monthly impression growth", note: "Jun 2025 → Aug 2026" },
      ],
    },

    {
      kind: "chart",
      heading: "Impressions per month",
      intro:
        "The shape matters more than any single month. There is no launch spike here — search growth for a local clinic is a slope, and the slope only becomes obvious across a year.",
      max: 11000,
      columns: ["Month", "Impressions"],
      caption:
        "Monthly impressions, June 2025 – August 2026. June 2025 is the first month with recorded data; August 2026 is partial through the 29th.",
      bars: [
        { label: "Jun 25", value: 1889, display: "1,889" },
        { label: "Jul 25", value: 4561, display: "4,561" },
        { label: "Aug 25", value: 5079, display: "5,079" },
        { label: "Sep 25", value: 5985, display: "5,985" },
        { label: "Oct 25", value: 6111, display: "6,111" },
        { label: "Nov 25", value: 4874, display: "4,874" },
        { label: "Dec 25", value: 5636, display: "5,636" },
        { label: "Jan 26", value: 6812, display: "6,812" },
        { label: "Feb 26", value: 7342, display: "7,342" },
        { label: "Mar 26", value: 9518, display: "9,518" },
        { label: "Apr 26", value: 7522, display: "7,522" },
        { label: "May 26", value: 7152, display: "7,152" },
        { label: "Jun 26", value: 9345, display: "9,345" },
        { label: "Jul 26", value: 10268, display: "10,268", highlight: true },
        { label: "Aug 26", value: 9778, display: "9,778" },
      ],
    },

    {
      kind: "prose",
      heading: "The languages nobody optimised for",
      body: [
        "The site ships in Spanish, English and Swedish. Swedish is there because Marbella has a large Scandinavian community, and it earned its place: Sweden sent 95 clicks at an average position of 6.7 in the last twelve months, from a market that most local clinics ignore entirely.",
        "The unplanned result is more interesting. The site also ranks in the top three for German, French and Dutch queries — “zahnarzt marbella” at position 2.6, “dentiste marbella” at 2.3, “tandarts marbella” at 2.9 — without a single page in any of those languages. Those searchers are looking for a Marbella dentist from abroad, the competition for their exact phrasing is thin, and a fast, well-structured page in a neighbouring language is enough to take the position.",
        "The lesson is not “skip translation”. It is that in a market built on foreign residents and visitors, the non-Spanish demand is larger and less contested than the Spanish demand, and most local competitors are not looking at it at all.",
      ],
    },

    {
      kind: "table",
      heading: "Where the site ranks",
      intro:
        "Top queries by clicks, last twelve months. Brand searches are included and marked — separating them is the only honest way to read a table like this.",
      columns: ["Query", "Impressions", "Clicks", "Avg. position"],
      numericFrom: 1,
      caption: "Google Search Console, 1 September 2025 – 1 September 2026.",
      rows: [
        ["acme clinic marbella (brand)", "1,664", "410", "1.2"],
        ["dentista marbella", "3,753", "35", "10.7"],
        ["emergency dentist marbella", "1,829", "22", "4.1"],
        ["clinica dental marbella", "3,410", "9", "31.7"],
        ["dentist near me", "1,881", "9", "8.4"],
        ["dentista urgencias marbella", "898", "8", "8.2"],
        ["zahnarzt marbella (German)", "166", "8", "2.6"],
        ["dentiste marbella (French)", "384", "7", "2.3"],
        ["tandarts marbella (Dutch)", "75", "4", "2.9"],
        ["dentista 24 horas cerca de mi", "58", "3", "1.7"],
      ],
    },

    {
      kind: "prose",
      heading: "Mobile is where the decision happens",
      body: [
        "Desktop produced slightly more impressions than mobile over the last twelve months — 48,011 against 41,727 — and barely a third of the clicks. Mobile click-through was 2.92%; desktop was 0.81%.",
        "That gap is the argument for building a clinic site mobile-first and putting a WhatsApp button within thumb reach of every screen. The person searching “dentista urgencias marbella” on a phone at 23:40 is not comparison-shopping. The desktop impression is research; the mobile impression is an appointment.",
      ],
    },

    {
      kind: "stats",
      heading: "Mobile vs desktop",
      note: "Last twelve months. Tablet accounted for a further 35 clicks from 605 impressions.",
      items: [
        { value: "2.92%", label: "Mobile CTR", note: "1,220 clicks / 41,727 impressions" },
        { value: "0.81%", label: "Desktop CTR", note: "388 clicks / 48,011 impressions" },
        { value: "3.6×", label: "Mobile advantage", note: "click-through ratio" },
        { value: "27%", label: "Clicks from outside Spain", note: "441 of 1,643" },
      ],
    },

    {
      kind: "prose",
      heading: "What has not been won",
      body: [
        "“Clínica dental Marbella” is the biggest phrase in the category and the site averages position 31.7 on it — page three, 3,410 impressions, nine clicks. It is visible to Google and invisible to patients. “Dentista Marbella” sits at 10.7, right on the edge of page one, where a single position is worth more than the ten below it combined.",
        "Both are winnable and neither is won. Getting them takes the things a website alone cannot do: a steady flow of Google reviews, a complete Business Profile, and pages that answer the specific question behind the query rather than describing the clinic in general. That work is ongoing, and the next update to this page will say whether it moved.",
      ],
    },

    {
      kind: "callout",
      body: "A case study that only lists wins is a brochure. The unwon queries above are the honest part — they are also the reason this page will be worth re-reading in six months.",
    },
  ],

  takeaways: [
    "Local search growth is a slope, not a spike. Fifteen months in, this site is still climbing; anyone promising results in week two is selling something else.",
    "In a market of foreign residents, the non-Spanish queries are cheaper to win than the Spanish ones — sometimes without a translated page at all.",
    "Mobile click-through was 3.6× desktop. Build for the phone and put the booking action where a thumb already is.",
    "Publish the queries you have not won. It is the only way a reader can tell whether the rest of the numbers are real.",
  ],

  method: [
    "All search figures come from Google Search Console for the domain property sc-domain:acme-clinic.example, pulled through the Search Analytics API on 1 September 2026. Windows are stated next to every number: the headline totals cover 1 June 2025 – 29 August 2026, and query, country and device breakdowns cover the twelve months to 1 September 2026.",
    "June 2025 is the first month with recorded search data for this property, and August 2026 is partial — Search Console data was complete through 29 August at the time of writing.",
    "Impressions and clicks measure search behaviour, not revenue. This page makes no claim about bookings, patients or income, because that data belongs to the clinic and is not something a developer can verify. What is shown is the part that can be checked.",
    "Google Search Console reports a sampled subset of queries and hides those with very low volume, so query-level rows will not sum to the property totals.",
  ],

  cta: {
    heading: "Want this measured for your business?",
    body: "Every site I build ships with Search Console connected and a baseline recorded on day one, so twelve months later there is something real to look at. Fifteen minutes on the phone is enough to tell you whether the search demand in your category is worth chasing.",
    label: "Chat on WhatsApp",
    waMessage:
      "Hi Alex — I read the Acme Clinic case study. I'd like to talk about search for my business. When can we do the 15-min call?",
  },

  ogHeadline: "15 months of search data from a Marbella clinic site",
  ogKicker: "Case study · 101,872 impressions",
  image: "/work/acme-clinic-old.jpg",
  imageAlt: "The Acme Clinic Marbella website",
  clientUrl: "https://example.com/acme-clinic",
  clientLabel: "acme-clinic.example",
};

export const harborHomesEn: Study = {
  slug: "/case-studies/harbor-homes-multilingual-seo",
  lang: "en",
  key: "harbor-homes",
  published: "2026-09-01",
  readingMinutes: 6,

  metaTitle: "Multilingual SEO in Marbella: Swedish pages rank 2× better",
  metaDescription:
    "Harbor Homes launched in English, Swedish, Dutch and German. Nine months of Search Console data: Swedish pages rank twice as well as English ones.",

  hero: {
    kicker: "Case study · Real estate · Costa del Sol",
    h1Main: "Four languages, four different",
    h1Accent: "search markets",
    dek: "Harbor Homes went live in English, Swedish, Dutch and German. Nine months of Google data shows which of those four bets paid off first — and it was not the obvious one.",
  },

  facts: [
    { label: "Client", value: "Harbor Homes" },
    { label: "Sector", value: "Property portal, Costa del Sol" },
    { label: "Languages", value: "English (default), Swedish, Dutch, German" },
    { label: "Measured", value: "26 Nov 2025 – 29 Aug 2026" },
    { label: "Source", value: "Google Search Console" },
  ],

  summary: [
    "Nine months after launch the site has earned 22,417 impressions and 116 clicks, at an average position of 33.9 — an early-stage site in one of Spain's most contested categories.",
    "Monthly impressions went from 6 in the first month to a 4,511 peak in May 2026.",
    "The Swedish pages rank far better than the English ones: average position 19.3 in Sweden against 44.2 in the UK and 40.0 in Spain.",
    "A single Swedish page — the Marbella area map — pulled 2,314 impressions at position 10.9, better placed than anything on the English side of the site.",
    "The Dutch area guides are indexed and ranking for long-tail queries no English page competes for.",
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "Harbor Homes is a property portal for the Costa del Sol: filterable listings, area guides, long- and short-term rentals, and a valuation funnel. It ships in four languages — English as the default, plus Swedish, Dutch and German — with proper reciprocal hreflang between them rather than a client-side translation widget.",
        "That choice is usually argued about on principle. Nine months of data lets us argue about it with numbers instead.",
      ],
    },

    {
      kind: "stats",
      heading: "Nine months in",
      note: "Google Search Console, property sc-domain:harbor-homes.example, 26 November 2025 – 29 August 2026. These are early-stage numbers and are presented as such.",
      items: [
        { value: "22,417", label: "Impressions", note: "since launch" },
        { value: "116", label: "Clicks from search", note: "since launch" },
        { value: "33.9", label: "Average position", note: "all queries" },
        { value: "4 languages", label: "Indexed and ranking", note: "EN · SV · NL · DE" },
      ],
    },

    {
      kind: "chart",
      heading: "Impressions per month",
      intro:
        "The first three months are almost nothing. That is normal, and it is the part most clients are never shown — a new domain in a competitive category spends its first quarter being crawled, not ranked.",
      max: 5000,
      columns: ["Month", "Impressions"],
      caption:
        "Monthly impressions, November 2025 – August 2026. November is a partial month from the 26th; August is partial through the 29th.",
      bars: [
        { label: "Nov 25", value: 6, display: "6" },
        { label: "Dec 25", value: 18, display: "18" },
        { label: "Jan 26", value: 69, display: "69" },
        { label: "Feb 26", value: 82, display: "82" },
        { label: "Mar 26", value: 1347, display: "1,347" },
        { label: "Apr 26", value: 4469, display: "4,469" },
        { label: "May 26", value: 4511, display: "4,511", highlight: true },
        { label: "Jun 26", value: 4438, display: "4,438" },
        { label: "Jul 26", value: 4365, display: "4,365" },
        { label: "Aug 26", value: 3112, display: "3,112" },
      ],
    },

    {
      kind: "prose",
      heading: "The least contested language wins first",
      body: [
        "Marbella property in English is one of the hardest SERPs in Spain. Portals with a decade of backlinks and six-figure content budgets own it, and the numbers show exactly that: an average position of 44.2 in the United Kingdom and 40.0 in Spain. Page four and page five. Real impressions, almost no clicks.",
        "Swedish is a different market with the same inventory. Average position 19.3 — roughly twice as well placed, on a fraction of the competition. The single best-performing page on the whole site is /sv/marbella-map, the Swedish version of the area map: 2,314 impressions at position 10.9, from searches like “marbella karta” and “karta marbella området”.",
        "Dutch behaves the same way at smaller scale. The Dutch area guides rank for long-tail queries about gated communities and buying guides in specific neighbourhoods — phrasings that have no English equivalent competing for them, because no English-language competitor has bothered.",
      ],
    },

    {
      kind: "table",
      heading: "Performance by market",
      intro: "The same site, the same listings, four very different levels of difficulty.",
      columns: ["Market", "Impressions", "Clicks", "Avg. position"],
      numericFrom: 1,
      caption: "Google Search Console, 1 September 2025 – 1 September 2026. Top markets by clicks.",
      rows: [
        ["Spain", "5,823", "40", "40.0"],
        ["United Kingdom", "5,089", "16", "44.2"],
        ["Sweden", "3,399", "14", "19.3"],
        ["Germany", "633", "11", "20.6"],
        ["Netherlands", "636", "7", "21.4"],
        ["United States", "3,693", "4", "34.3"],
      ],
    },

    {
      kind: "points",
      heading: "What a four-language build actually costs",
      intro:
        "The work is not four times a one-language site, and it is not free either. What it is, precisely:",
      items: [
        {
          title: "One codebase, four URL trees",
          body: "Every route exists under /sv, /nl and /de as well as the English default, with reciprocal hreflang tags and a shared x-default. No client-side translation widget: a widget shows one page to Google, so three of your four markets never get indexed at all.",
        },
        {
          title: "Translated content, not translated interface",
          body: "Buttons and labels are the easy half. The half that ranks is the area guides, the neighbourhood pages and the buying guides — that is where the long-tail queries live, and it is the part that has to be genuinely written in each language.",
        },
        {
          title: "Four sitemaps' worth of patience",
          body: "Each language tree gets discovered and indexed on its own schedule. The Swedish pages here started earning impressions before the English ones did, which is not something you can plan for — only something you can build for.",
        },
        {
          title: "A reason for each language",
          body: "Swedish, Dutch and German are on this site because the Costa del Sol property market is built on buyers from exactly those countries. A language with no buyers behind it is four times the maintenance for nothing.",
        },
      ],
    },

    {
      kind: "prose",
      heading: "Where this site actually stands",
      body: [
        "116 clicks in nine months is not a success story yet, and calling it one would be dishonest. What the data does show is a site that is fully indexed across four languages, growing from six impressions a month to four thousand, and already competitive in the markets where competition is thinnest.",
        "The English pages need what English pages always need in this category: links and time. The Swedish and Dutch pages need more content of the kind that is already working. Both of those are known, boring, unglamorous jobs — which is the point of measuring in the first place.",
      ],
    },
  ],

  takeaways: [
    "A four-language site is not one site translated. It is four search markets with four different levels of competition, and the easiest one usually pays out first.",
    "Use real per-language URLs and reciprocal hreflang. A translation widget leaves three of your four markets unindexed.",
    "Pick languages by where your buyers live, not by how international you want to look.",
    "Expect the first quarter to produce almost nothing. This site's first three months totalled 175 impressions.",
  ],

  method: [
    "All figures come from Google Search Console for the domain property sc-domain:harbor-homes.example, pulled through the Search Analytics API on 1 September 2026. The launch window figures cover 26 November 2025 — the first day with recorded impressions — through 29 August 2026. Market and page breakdowns cover the twelve months to 1 September 2026.",
    "Language versions were confirmed directly from the site's hreflang tags at the time of writing: en (x-default), sv, nl and de.",
    "Impressions and clicks describe search visibility only. This page makes no claim about property enquiries, viewings or sales — that data belongs to the client and cannot be verified from a developer's side.",
  ],

  cta: {
    heading: "Selling to more than one country?",
    body: "If your customers come from several countries, a multilingual build is often a cheap way to reach more search markets — as long as it is real pages with real hreflang. Fifteen minutes is enough to work out which languages are worth the maintenance.",
    label: "Chat on WhatsApp",
    waMessage:
      "Hi Alex — I read the Harbor Homes case study. I need a multilingual site for my business. When can we do the 15-min call?",
  },

  ogHeadline: "Four languages, four different search markets",
  ogKicker: "Case study · Harbor Homes",
  image: "/work/harbor-homes.jpg",
  imageAlt: "The Harbor Homes property portal",
  clientUrl: "https://example.com/harbor-homes",
  clientLabel: "harbor-homes.example",
};

/**
 * The survey's own measurements, for its Dataset node. One object for all
 * three language versions, like every figure in the study: the window is the
 * "Measured" fact as an ISO 8601 interval, the variables are what the page
 * reports.
 */
export const speedReportDataset: StudyDataset = {
  temporalCoverage: "2026-08-08/2026-08-23",
  variableMeasured: [
    "PageSpeed Insights mobile performance score",
    "Largest Contentful Paint",
    "Total Blocking Time",
    "Cumulative Layout Shift",
  ],
};

export const speedReportEn: Study = {
  slug: "/case-studies/marbella-website-speed-report",
  lang: "en",
  key: "speed-report",
  published: "2026-09-01",
  readingMinutes: 8,

  metaTitle: "Marbella website speed report: 211 business sites measured",
  metaDescription:
    "PageSpeed Insights on 211 Marbella and Málaga business websites: median load time 7.5 s, and 91% fail Google's threshold. The full data and the cause.",

  hero: {
    kicker: "Original research · Marbella & Málaga · August 2026",
    h1Main: "211 Marbella business websites,",
    h1Accent: "measured",
    dek: "I pulled every restaurant, barber, garage and beach bar I could find on Google Maps, ran Google's own speed test against each one, and wrote down what came back. The median local business site takes 7.5 seconds to show its main content.",
  },

  facts: [
    { label: "Sample", value: "446 businesses, 15 trades" },
    { label: "Audited", value: "211 websites" },
    { label: "Area", value: "Marbella & Málaga" },
    { label: "Measured", value: "8–23 August 2026" },
    { label: "Source", value: "Google PageSpeed Insights (mobile)" },
  ],

  summary: [
    "The median local business website in this sample scores 66/100 on mobile and takes 7.5 seconds to render its largest element.",
    "91% are slower than Google's 2.5-second threshold for good loading performance, 77% are in the “poor” band above 4 seconds, and 9% take longer than 20 seconds.",
    "The slowest site measured took 62.4 seconds.",
    "The cause is almost entirely images and hosting, not JavaScript: median blocking time was 34 ms and median layout shift was 0.00.",
    "21% of the businesses surveyed — 92 of 446 — have no real website at all.",
    "How busy a business is tells you nothing about its website: the correlation between Google review count and performance score was −0.05, statistically indistinguishable from zero.",
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "Everybody in this industry says local business websites are slow. I wanted to know how slow, so I measured them.",
        "The method was deliberately dull. I collected businesses from Google Maps across fifteen trades in Marbella and Málaga — restaurants, chiringuitos, barbers, hair and nail salons, massage studios, personal trainers, cafés, plumbers, electricians, locksmiths, mechanics, cleaners and renovation firms. Where a business listed a website, I ran Google's own PageSpeed Insights against it on a simulated mobile connection. Then I stopped editorialising and read the table.",
        "No business is named anywhere on this page. The point is the distribution, not any individual site, and a page that ranks by embarrassing named local businesses would deserve to be ignored.",
      ],
    },

    {
      kind: "stats",
      heading: "The headline numbers",
      note: "211 sites audited between 8 and 23 August 2026 with Google PageSpeed Insights, mobile profile. Two audits returned no usable timing and are excluded from the timing figures, leaving 209.",
      items: [
        { value: "66/100", label: "Median performance score", note: "mobile; mean 65.6" },
        { value: "7.5s", label: "Median load of main content", note: "Largest Contentful Paint" },
        { value: "91%", label: "Fail Google's LCP threshold", note: "slower than 2.5 seconds" },
        { value: "21%", label: "Have no website at all", note: "92 of 446 businesses" },
      ],
    },

    {
      kind: "chart",
      heading: "How the scores are distributed",
      intro:
        "Google calls 0–49 poor, 50–89 needs improvement and 90–100 good. Ten percent of the sites measured are good. Two thirds sit in the wide middle where a site is not broken, just slow enough to lose people.",
      max: 130,
      columns: ["Score band", "Sites"],
      caption: "PageSpeed Insights mobile performance score, 211 sites, August 2026.",
      bars: [
        { label: "0–24", value: 4, display: "4 sites" },
        { label: "25–49", value: 28, display: "28 sites" },
        { label: "50–74", value: 121, display: "121 sites", highlight: true },
        { label: "75–89", value: 37, display: "37 sites" },
        { label: "90–100", value: 21, display: "21 sites" },
      ],
    },

    {
      kind: "chart",
      heading: "How long the main content takes to appear",
      intro:
        "Largest Contentful Paint is the moment the biggest thing on screen — usually the hero image — finishes loading. Google considers 2.5 seconds good and anything past 4 seconds poor. The share of sites past each mark:",
      max: 100,
      columns: ["Threshold", "Share of sites"],
      caption:
        "Share of 209 audited sites exceeding each Largest Contentful Paint threshold. Median 7.5s, upper quartile 11.5s, slowest 62.4s.",
      bars: [
        { label: "over 2.5s", value: 91, display: "91%", highlight: true },
        { label: "over 4s", value: 77, display: "77%" },
        { label: "over 10s", value: 33, display: "33%" },
        { label: "over 20s", value: 9, display: "9%" },
      ],
    },

    {
      kind: "prose",
      heading: "It is not JavaScript. It is images.",
      body: [
        "This is the finding I did not expect, and it is the useful one. The two metrics that usually indicate a bloated, over-engineered site are barely elevated across the whole sample. Median total blocking time — how long the browser sits frozen executing scripts — was 34 milliseconds, against a 200 ms threshold. Only 13 of 209 sites exceeded 600 ms. Median cumulative layout shift was 0.00, and only 30 sites were above the 0.1 line.",
        "So these are not sites drowning in JavaScript frameworks. They are sites serving enormous unoptimised photographs from slow shared hosting. A restaurant uploads the photos straight off the camera, the page ships twelve megabytes of JPEG, and on a phone on 4G outside the restaurant it takes eighteen seconds.",
        "That matters because the fix is cheap. Rebuilding a site to shed JavaScript is a project. Compressing images, serving modern formats, sizing them properly and putting them behind a CDN is an afternoon — and on this evidence it is where nearly all of the available speed is hiding.",
      ],
    },

    {
      kind: "table",
      heading: "By trade",
      intro:
        "Ranked from worst to best average performance score. Only trades with at least eight audited sites are listed.",
      columns: ["Trade", "Sites", "Avg. score", "Avg. LCP"],
      numericFrom: 1,
      caption:
        "PageSpeed Insights mobile, August 2026. Averages, not medians — the restaurant figure is dragged up by a handful of extreme outliers.",
      rows: [
        ["Barbers", "12", "57", "10.4s"],
        ["Personal trainers", "11", "60", "10.3s"],
        ["Restaurants", "18", "63", "17.6s"],
        ["Beach bars (chiringuitos)", "28", "64", "9.3s"],
        ["Cleaning services", "17", "65", "9.1s"],
        ["Renovation firms", "17", "66", "10.2s"],
        ["Plumbers", "15", "67", "8.3s"],
        ["Locksmiths", "16", "69", "7.7s"],
        ["Hair salons", "11", "69", "7.8s"],
        ["Mechanics", "12", "69", "7.8s"],
        ["Massage studios", "16", "70", "10.0s"],
        ["Electricians", "16", "71", "8.1s"],
        ["Cafés", "14", "73", "6.7s"],
      ],
    },

    {
      kind: "prose",
      heading: "Restaurants are a category of their own",
      body: [
        "Restaurants average 17.6 seconds to load their main content — nearly twice the sample average — while scoring roughly in the middle on everything else. Food is photographed heavily and published untouched, and a menu page with thirty full-resolution dishes on it behaves accordingly. Among the sites in this sample with more than 400 Google reviews, the four slowest were all restaurants or beach bars, at 58.3, 57.3, 27.8 and 20.9 seconds.",
        "The gap between a busy restaurant and its website is the widest gap in the whole dataset, which brings us to the result I found most interesting.",
      ],
    },

    {
      kind: "prose",
      heading: "Being popular predicts nothing",
      body: [
        "I expected successful businesses to have better websites — more revenue, more budget, more attention. They do not. Across the 209 sites the correlation between Google review count and performance score was −0.05: no relationship at all. Sites belonging to businesses with 500 or more reviews averaged 65; everyone else averaged 67.",
        "A business with four thousand reviews and a twenty-second website is not failing. It is succeeding despite the website, on foot traffic, on Maps, on word of mouth. Which is worth stating plainly, because the honest version of the sales pitch is not “your business is broken”. It is: you are already winning offline, and the site is the one part of it that is not pulling its weight.",
      ],
    },

    {
      kind: "points",
      heading: "If your site is in the slow two thirds",
      intro: "In rough order of how much speed you get back per hour spent:",
      items: [
        {
          title: "Compress and resize the images",
          body: "Serve WebP or AVIF, size each image to the box it actually occupies, and never ship a 4,000-pixel-wide photo into a 600-pixel slot. On the evidence here this single step accounts for most of the available improvement.",
        },
        {
          title: "Lazy-load everything below the fold",
          body: "The gallery at the bottom of the page should not block the headline at the top of it.",
        },
        {
          title: "Check what your builder is loading",
          body: "Page-builder themes routinely load several font families, a slider library and three tracking scripts before anything visible appears. Most of it can go.",
        },
        {
          title: "Look at your hosting",
          body: "Cheap shared hosting adds a fixed delay to every single request before your site gets a chance to be slow on its own. A CDN in front of it fixes a surprising amount.",
        },
        {
          title: "Measure before and after, on a phone",
          body: "Run PageSpeed Insights yourself — it is free, it takes thirty seconds, and it is the same tool used for every number on this page. Desktop scores flatter you; test mobile.",
        },
      ],
    },

    {
      kind: "callout",
      body: "Google's threshold for good mobile loading is 2.5 seconds. Nineteen of the 211 sites in this sample meet it.",
    },
  ],

  takeaways: [
    "The median local business website in Marbella and Málaga takes 7.5 seconds to show its main content — three times Google's threshold.",
    "The problem is images and hosting, not JavaScript. Median blocking time was 34 ms and median layout shift was 0.00.",
    "Restaurants are the worst category by a distance, averaging 17.6 seconds.",
    "One business in five has no website at all.",
    "Commercial success and website quality are uncorrelated, so a slow site is not evidence of a failing business — just of an underused channel.",
  ],

  method: [
    "Businesses were collected from Google Maps search results across fifteen trade categories in Marbella and Málaga in August 2026, giving 446 businesses. Where a business listed a website, that URL was tested with the Google PageSpeed Insights API on the mobile profile between 8 and 23 August 2026, producing 211 audits. Two returned no usable timing data and are excluded from timing figures, leaving 209.",
    "PageSpeed Insights mobile scores are lab measurements on a simulated mid-range device and throttled connection. They are deliberately harsher than a real visitor on good WiFi, and they are the same benchmark Google publishes for everyone — which is what makes them comparable across 211 sites.",
    "“No real website” means the Maps listing had no website field, or pointed only at a social media profile; each was verified with a follow-up web search. 92 of 446 businesses qualified, 16 of them listing only a social profile.",
    "This is a single snapshot of a convenience sample from Google Maps, not a random sample of all businesses in the province. It is not weighted by business size, and Maps coverage itself skews towards businesses that have been claimed and maintained. Treat it as a solid indication, not a census.",
    "No business is identified. Aggregate figures and anonymous trade-level examples only.",
  ],

  cta: {
    heading: "Want to know where your site sits?",
    body: "Send me your URL and I will run the same test and tell you what it says — the actual number, and whether it is worth doing anything about. No charge, and no obligation to hire anyone. If the answer is “your site is fine”, that is a perfectly good answer.",
    label: "Send me your site on WhatsApp",
    waMessage:
      "Hi Alex — I read the Marbella speed report. Can you run the test on my site? The URL is:",
  },

  ogHeadline: "211 Marbella business websites, measured",
  ogKicker: "Original research · Median load: 7.5s",
  dataset: speedReportDataset,
};
