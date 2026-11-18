import type { HomeCopy } from "./types";

/**
 * The English home page, and the source the other languages translate from.
 *
 * Every FAQ answer restates something the site already publishes (pricing,
 * process, guarantee, the service pages), so change it there first.
 */
export const homeEn: HomeCopy = {
  lang: "en",

  meta: {
    title: "Web development, SEO & AI automation in Marbella",
    description:
      "Fast websites, apps & AI automations for businesses in Marbella and the Costa del Sol. Live in days, from €500 — 6.3M+ Google impressions earned for clients.",
  },
  og: {
    alt: "example.com — web design & AI automation in Marbella. Fast websites, apps and AI automations for businesses on the Costa del Sol.",
    headline: "Websites that bring you customers.",
    sub: "Web design & AI automation — Marbella & Costa del Sol",
    foot: "Live in days · from €500",
  },

  hero: {
    availability: "Available for new projects",
    h1Main: "Websites that bring you",
    h1Accent: "customers.",
    sub: "Fast, search-ready websites and practical AI automations for businesses in Marbella & the Costa del Sol — designed, built and live in days.",
    cta: "Chat on WhatsApp",
    waMessage: "Hi Alex — I'd like to talk about a project.",
    seeWork: "See recent work",
  },

  services: {
    chatbotsLink: "Explore WhatsApp, voice & Meta automation",
    heading: { title: "More enquiries.", accent: "Less busywork." },
    intro: "Websites that bring customers in, search that helps them find you, and tools that take everyday work off your team. I design and build each one around how your business runs.",
    includes: "Includes",
    seenIn: "Seen in",
    items: {
      "web-design": {
        title: "Websites built for enquiries",
        summary: "A clear story, fast pages and a simple next step. Give visitors a reason to choose you, then make it easy to book, enquire or get in touch.",
        description:
          "Fast, SEO-first sites for small businesses — real estate, clinics, trades, restaurants. Designed to load instantly and turn visitors into inquiries: booking flows, WhatsApp capture, reviews, multilingual SEO.",
        includes: [
          "Landing pages and full business sites",
          "Booking flows and WhatsApp capture",
          "Property search on a live listings feed",
          "Websites in three languages, each with its own SEO",
        ],
        price: "from €500",
        linkLabel: "Web design in Marbella",
        imageAlt: "Acme Clinic website — booking wizard and WhatsApp on every page",
      },
      seo: {
        title: "Get found on Google & AI search",
        summary: "Show up where customers look: Google, Maps and AI answers. I work on your pages, listings and technical setup so your business is easier to find.",
        description:
          "A one-off setup and an optional monthly service that get your business found where customers look: Google's results, Google Maps and AI assistants like ChatGPT. Automated checks do the watching; I decide what changes. Setup from €500, monthly from €300, cancel any time.",
        includes: [
          "Where you stand today, in plain numbers",
          "Google Business Profile set up and kept current",
          "Pages an AI assistant can read and quote",
          "Automated monthly checks, changes decided by me",
        ],
        price: "from €500 · €300/month",
        linkLabel: "SEO in Marbella",
        imageAlt: "Atlas Graph website",
      },
      "ai-automation": {
        title: "AI for the work that repeats",
        summary: "Turn incoming PDFs into usable data, answer routine questions and prepare the next task—with your team approving the steps that need a human.",
        description:
          "Chatbots that answer your customers, AI imports that turn PDFs into structured data, agents that do the boring work. If your team does it by hand every day, I can probably automate it.",
        includes: [
          "Chatbots that answer your customers",
          "PDFs and documents turned into structured data",
          "An AI agent that answers from your own database",
          "Scheduled agents that draft, then wait for your OK",
        ],
        price: "€3,000+",
        linkLabel: "AI automation in Marbella",
        imageAlt: "Menu Atelier — a chef's PDF read by AI into a weekly menu plan",
      },
      "app-development": {
        title: "Your business, in one workspace",
        summary: "Bring clients, bookings, documents and payments into one place. A workspace built around your process, so your team can find what they need and keep work moving.",
        description:
          "Internal tools your staff actually enjoy using — client portals, booking engines, billing, case management. Built end-to-end: auth, payments, documents, admin.",
        includes: [
          "Client portals with document uploads",
          "Booking engines and appointment calendars",
          "Payments and subscriptions with Stripe",
          "An admin side for the whole pipeline",
        ],
        price: "€3,000+",
        linkLabel: "App development in Marbella",
        imageAlt: "Consular Platform admin dashboard — cases, documents, appointments and invoices",
      },
    },
    sketches: {
      site: {
        business: "Your business",
        headline: "Book in two taps",
        day: "Fri 12",
        party: "2 people",
        book: "Book",
        message: "Is Friday free?",
      },
      found: {
        domain: "yourbusiness.es",
        result: "Your business — Marbella",
        business: "Your business",
        maps: "Maps",
        open: "Open now",
        question: "Lunch near the port?",
        answerBefore: "Try",
        answerAfter: ", open now.",
      },
      automation: {
        file: "invoice.pdf",
        read: "Read by AI",
        client: "Client",
        date: "Date",
        dateValue: "12 Oct",
        total: "Total",
        totalValue: "€240",
        saved: "Saved",
      },
      dashboard: {
        title: "Clients",
        add: "+ New",
        rows: [
          { date: "Mon 14", status: "Paid" },
          { date: "Tue 15", status: "Booked" },
          { date: "Wed 16", status: "New" },
        ],
      },
    },
  },

  work: {
    heading: { title: "Selected", accent: "work" },
    imageAlt: "{name} website",
    projects: {
      "Northwind CRM": {
        description:
          "CRM for independent real-estate agents — every buyer, seller, viewing and offer on one client card, with follow-ups before a lead goes cold.",
        tags: ["SaaS", "Real Estate", "2 Languages"],
      },
      "Bayside Car Rental": {
        description:
          "Luxury car rental in Marbella — 57 cars, a page for each, and WhatsApp enquiries with the dates filled in.",
        tags: ["Car Rental", "5 Languages", "SEO"],
      },
      "Harbor Homes": {
        description:
          "Luxury property portal for the Costa del Sol — filterable listings, area guides and valuation funnel in four languages.",
        tags: ["Real Estate", "4 Languages", "SEO"],
      },
      "Signal AI": {
        description:
          "AI crypto research platform — eight specialized agents, multi-chain wallets and portfolio dashboards.",
        tags: ["AI", "SaaS", "Crypto"],
      },
      "Acme Clinic": {
        description:
          "24/7 clinic in Marbella — multi-step booking wizard, WhatsApp integration and per-locale SEO in three languages.",
        tags: ["Healthcare", "Booking", "3 Languages"],
      },
      "Hillside Living": {
        description:
          "Real estate, construction and renovation platform — searchable property database with lead-gen funnels.",
        tags: ["Real Estate", "Construction", "Lead Gen"],
      },
      "Atlas Graph": {
        description:
          "AI market-intelligence SaaS for the Swiss business landscape — AI chat agent, company database, subscriptions.",
        tags: ["AI", "SaaS", "4 Languages"],
      },
      "Signal Labs": {
        description:
          "Self-custodial smart wallet on 100+ chains — AI copilot, perps and DeFi automation. “Abstract the complex.”",
        tags: ["Web3", "Fintech", "AI"],
      },
      "Bloom Method": {
        description:
          "Bilingual conversion funnel for a digital course — lead magnets, testimonials and direct checkout.",
        tags: ["E-commerce", "Funnel", "2 Languages"],
      },
      "Summit Builders": {
        description:
          "Lead-gen site for a German heating and bath renovation company — process walkthrough, gallery, WhatsApp capture.",
        tags: ["Local Business", "Trades", "Lead Gen"],
      },
      "Hotel Aurora": {
        description:
          "Menu and guest-communication studio for an alpine hotel — weekly menu planning, trilingual print exports and AI PDF imports.",
        tags: ["Hospitality", "Dashboard", "3 Languages"],
        linkLabel: "live demo",
      },
    },
  },

  process: {
    heading: { title: "First call to live,", accent: "in days" },
    steps: [
      {
        day: "Day 0",
        title: "The call",
        description:
          "A 15-minute chat about your business and what you need. You get a fixed price and a delivery date on the spot — no proposals, no waiting.",
      },
      {
        day: "Day 1",
        title: "Design & build",
        description:
          "I design and build in one pass. You get a live preview link the next day — a real website you can click, not a PDF mockup.",
      },
      {
        day: "Day 2",
        title: "Your feedback",
        description:
          "One focused revision round, applied straight to the live preview while we talk. Most changes happen within the hour.",
      },
      {
        day: "Day 3",
        title: "Launch",
        description:
          "Domain, SEO, analytics, WhatsApp — wired and live. Simple landing pages can launch 24 hours after our first call.",
      },
    ],
    note: "No agencies, no hand-offs, no six-week timelines. You talk to the person who builds it — that's why it's fast.",
  },

  pricing: {
    heading: { title: "Simple, honest", accent: "pricing" },
    badge: "Most popular",
    tiers: {
      landing: {
        name: "Landing",
        price: "from €500",
        tagline: "One page that sells",
        features: [
          "Landing page designed & built",
          "Copy, SEO basics & analytics",
          "WhatsApp / contact capture",
          "Live in 24–48 hours",
        ],
        cta: "Start with a landing",
        subject: "Landing page",
      },
      business: {
        name: "Business site",
        price: "from €1,500",
        tagline: "Your whole business, online",
        features: [
          "Multi-page site, custom design",
          "Booking flows & lead funnels",
          "Multilingual + full SEO setup",
          "Google reviews & analytics",
          "Live in 1–2 weeks",
        ],
        cta: "Build my site",
        subject: "Business website",
      },
      platform: {
        name: "Platform & AI",
        price: "€3,000+",
        tagline: "Custom builds, scoped together",
        features: [
          "Dashboards & client portals",
          "AI bots & automations",
          "Payments, auth & documents",
          "Timeline depends on scope",
        ],
        cta: "Scope it with me",
        subject: "Custom platform / AI",
      },
    },
    note: "Every project ships fast-loading, mobile-first and SEO-ready. Prices are starting points — you get an exact fixed quote on our first call, and it doesn't change after.",
  },

  guarantee: {
    heading: { title: "The", accent: "guarantee" },
    kicker: "Risk-free",
    titleMain: "You don't like it,",
    titleAccent: "you don't pay.",
    body: "Every project ships on that deal. You see the finished site live before the final invoice — and if it isn't what you wanted and I can't make it right, you owe me nothing. In 25+ builds nobody has ever needed to take me up on it: every client so far has signed off happy.",
    score: "satisfied clients",
    scoreNote: "25+ builds · 0 refunds",
    claim: "100% satisfied clients — 25+ builds, 0 refunds.",
    points: [
      {
        title: "See it live first",
        description:
          "The finished site goes up on a private preview link before the final invoice. You judge the real thing, not a mockup.",
      },
      {
        title: "Not right? I fix it",
        description:
          "Tell me what feels off and it changes while we're still on the call. Most revisions land within the hour.",
      },
      {
        title: "Still not right? You walk",
        description:
          "No invoice, no argument, no awkward emails. We part ways and you owe me nothing.",
      },
    ],
    note: "It's written into every quote, not buried in terms. The only way this works long-term is if you'd recommend me afterwards — so that's the bar I build to.",
  },

  results: {
    heading: { title: "Proof, not promises", accent: "" },
    intro: "Numbers and builds from real client work. See more of what a harder-working website looks like.",
    stats: {
      impressions: { suffix: "M", label: "Google impressions", note: "clients, last 6 months" },
      clicks: { suffix: "K", label: "clicks from search", note: "clients, last 6 months" },
      projects: { suffix: "+", label: "projects shipped", note: "and counting" },
      languages: { suffix: "", label: "languages", note: "EN DE ES FR IT SV NL RU" },
    },
    note: "Search traffic measured in Google Search Console across client properties. Speed is only one of the things Google looks at; these are the results on sites built to load fast.",
  },

  caseStudies: {
    heading: { title: "Products &", accent: "dashboards" },
    demoLabel: "Open live demo",
    stack: "Stack",
    products: {
      "Menu Atelier": {
        client: "Hotel Aurora — Alpine boutique hotel",
        description:
          "A trilingual menu and guest-communication studio: staff plan weekly menu rotations, compose daily guest letters with live weather sync, and print pixel-perfect trilingual menus. AI turns a chef's PDF into a ready-to-apply weekly template in under a minute.",
        features: [
          "AI PDF imports → structured menus",
          "DE / EN / IT translation tracking",
          "Print-ready previews & exports",
          "Live weather-synced guest letters",
        ],
      },
      "Consular Platform": {
        client: "Consular services firm",
        description:
          "End-to-end case management for a consular services firm: a trilingual client portal with document uploads, six-step apostille tracking, appointment booking and Stripe billing — plus an admin dashboard running the whole pipeline from lead intake to invoicing.",
        features: [
          "Client portal + admin dashboard",
          "Document vault with signed URLs",
          "Appointment booking engine",
          "Stripe billing & webhooks",
        ],
      },
    },
    sketches: {
      portal: {
        active: "Active",
        steps: ["Requested", "Apostille", "Ready"],
        documents: [
          { name: "Passport", status: "Accepted" },
          { name: "Birth certificate", status: "Re-upload" },
          { name: "Translation", status: "In review" },
        ],
        invoice: "Invoice",
        paid: "Paid",
      },
    },
  },

  studies: {
    heading: { title: "The", accent: "working" },
    note: "Three write-ups with the raw data attached — Search Console exports, PageSpeed audits and a survey of 211 local business websites. Including the queries that have not been won yet.",
  },

  // worded the way people ask them; also the home page's FAQPage
  faq: {
    heading: { title: "Questions,", accent: "answered" },
    items: [
      {
        q: "How much does a website cost in Marbella?",
        a: "With me, a landing page starts at €500, a full business site at €1,500, and custom platforms with dashboards, AI or payments at €3,000. SEO for a website you already have starts at €500 for the setup, with an optional monthly service from €300 a month. You get a fixed price on the first 15-minute call, and it doesn't change afterwards.",
      },
      {
        q: "How fast can my website be live?",
        a: "A landing page can be live 24–48 hours after our first call, and a full business site takes one to two weeks. You get a live preview link the day after the call: a real website you can click, not a PDF mockup.",
      },
      {
        q: "What if I don't like the result?",
        a: "Then you don't pay. You see the finished site on a private preview link before the final invoice, and if something feels off, it changes while we're on the call. If it still isn't right, you owe me nothing. In 25+ builds, nobody has needed to use that.",
      },
      {
        q: "I already have a website. Do I need a new one?",
        a: "Not necessarily. I can do SEO on the site you have, whether it runs on WordPress, Wix, Shopify or custom code, from €500 for the setup. If the site itself is the problem, a redesign costs the same as a new build and usually keeps your domain and the Google rankings you've earned.",
      },
      {
        q: "Will ChatGPT recommend my business?",
        a: "That is ChatGPT's decision: nobody can buy or guarantee it, me included. What I can do is make your business easy for it to read, with your services, prices, hours and location written as text, a summary written for AI assistants, and your site connected to Bing as well as Google.",
      },
      {
        q: "Can my website be in more than one language?",
        a: "Yes. Client sites have shipped in eight languages: English, German, Spanish, French, Italian, Swedish, Dutch and Russian. Each language gets its own SEO instead of a translation plugin bolted on. Several languages come with a business site, from €1,500.",
      },
      {
        q: "Will I work with you or with an agency?",
        a: "With me. No agency, no account managers, no hand-offs: the person on the first call builds your site, and after launch you message me directly. I'm based in Marbella and work across the Costa del Sol, and clients in Germany, Switzerland and Miami have worked with me remotely.",
      },
    ],
  },

  industries: {
    heading: { title: "Websites by", accent: "industry" },
    all: "All industries",
  },

  contact: {
    kicker: "Have a project in mind?",
    titleMain: "Let's",
    titleAccent: "talk",
    links: {
      chatbots: "Chatbots & AI agents",
      "web-design": "Web design Marbella",
      "app-development": "App development",
      "ai-automation": "AI automation",
      seo: "SEO",
      "industry-hub": "By industry",
      "case-studies": "Case studies",
      reviews: "Reviews",
    },
    websitesFor: "Websites for",
    location: "Marbella, Spain",
  },

  compact: {
    review: {
      label: "Free website review",
      title: "See what could work",
      accent: "better.",
      body: "Send me your website. I look at its speed, how Google and AI assistants see it, and how easy it is to get in touch. You get clear findings and practical next steps, and a short call if you want one.",
      website: "Your website",
      placeholder: "yourbusiness.com",
      noSite: "I don't have a website yet",
      missing: "Add your website, or tick the box if you don't have one yet.",
      contact: "Your email or phone",
      contactPlaceholder: "you@yourbusiness.com",
      missingContact: "Add an email or phone number so I can send you the findings.",
      submit: "Get my free review",
      sending: "Sending…",
      sentTitle: "Thanks — it's on my list.",
      sentBody: "I'll look at {site} and send the findings to {contact}.",
      sentBodyNoSite: "I'll get back to you at {contact}.",
      failed: "That didn't go through. Please message me on WhatsApp instead.",
      whatsapp: "Or message me on WhatsApp",
      message: "Hi Alex — I'd like a free review of my website: {site}",
      messageNoSite: "Hi Alex — I don't have a website yet and I'd like your advice on where to start.",
    },
    services: {
      heading: { title: "Built around", accent: "your business" },
      items: {
        "web-design": {
          title: "Websites",
          line: "Business sites, landing pages and booking journeys that bring enquiries.",
        },
        seo: {
          title: "Google & AI search",
          line: "Get found on Google, Maps and assistants like ChatGPT.",
        },
        "ai-automation": {
          title: "AI & automation",
          line: "Chatbots, document imports and the everyday work that repeats.",
        },
        "app-development": {
          title: "CRM & integrations",
          line: "Clients, bookings, payments and documents in one place.",
        },
      },
    },
    work: { previous: "Previous project", next: "Next project" },
    steps: [
      {
        day: "15 minutes",
        title: "Share your brief",
        line: "A 15-minute call or a WhatsApp message about your business and what you need.",
      },
      {
        day: "Same day",
        title: "Agree the solution",
        line: "You get a fixed price and a delivery date. No long proposals, no waiting.",
      },
      {
        day: "Live in days",
        title: "Build, launch, improve",
        line: "A live preview within days, one round of changes, then launch — and monthly care if you want it.",
      },
    ],
  },

  markdown: {
    servicePages: "Service pages",
    caseStudies: "Case studies",
    basedIn: "Based in Marbella, Spain — working across the Costa del Sol",
  },
};
