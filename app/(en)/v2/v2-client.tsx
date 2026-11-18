"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { email } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------------------------------- data ---------------------------------- */

const FAN_CARDS = [
  "/work/hillside-living.jpg",
  "/work/bloom-method.jpg",
  "/work/signal-ai-old.jpg",
  "/work/harbor-homes.jpg",
  "/work/acme-clinic-old.jpg",
  "/work/signal-labs.jpg",
  "/work/summit-builders.jpg",
];

const WORK_GROUPS = [
  {
    group: "Real estate",
    rows: [
      { name: "Harbor Homes", meta: ["Marbella", "4 languages", "Live"], url: "https://example.com/harbor-homes" },
      { name: "Hillside Living", meta: ["Costa del Sol", "Construction", "Live"], url: "https://example.com/hillside-living" },
    ],
  },
  {
    group: "Health & coaching",
    rows: [
      { name: "Acme Clinic", meta: ["Marbella", "Booking wizard", "3 languages"], url: "https://example.com/acme-clinic" },
      { name: "Bloom Method", meta: ["Digital course", "Funnel", "2 languages"], url: "https://example.com/bloom-method" },
    ],
  },
  {
    group: "AI & platforms",
    rows: [
      { name: "Signal AI", meta: ["Crypto research", "AI agents", "SaaS"], url: "https://example.com/signal-ai" },
      { name: "Signal Labs", meta: ["Smart wallet", "100+ chains", "AI copilot"], url: "https://example.com/signal-labs" },
      { name: "Atlas Graph", meta: ["Market intelligence", "4 languages", "SaaS"], url: "https://example.com/atlas-graph" },
    ],
  },
  {
    group: "Trades & local",
    rows: [
      { name: "Summit Builders", meta: ["Germany", "Heating & bath", "Lead gen"], url: "https://example.com/summit-builders" },
    ],
  },
];

const RESULT_CARDS = [
  {
    title: "6.3M impressions",
    body: "What fast, SEO-first sites earn on Google in six months. 209K clicks for clients — measured, not promised.",
  },
  {
    title: "A hotel that prints menus in 3 languages",
    body: "Menu Atelier turns a chef's PDF into a trilingual, print-ready weekly menu in under a minute. AI where it saves hours.",
  },
  {
    title: "A consulate's worth of paperwork, automated",
    body: "Client portal with document tracking, bookings and Stripe billing — running an entire consular services firm.",
  },
];

const TILE_TINTS = ["#c9d2e8", "#e8d8c9", "#cfe8c9", "#e8c9dd", "#d8c9e8", "#e8e3c9", "#c9e4e8"];
const TILE_ROTATIONS = [-8, 5, -3, 9, -6, 4, -9];

/* --------------------------------- shared --------------------------------- */

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Pill({ label, href, dark = false }: { label: string; href: string; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-block rounded-full px-4 py-1.5 text-[13px] transition-[scale,background-color] duration-300 active:scale-[0.96] ${
        dark
          ? "bg-[#1e1e1e] text-[#efeee9] hover:bg-[#333]"
          : "text-[#efeee9] shadow-[0_0_0_1px_rgba(239,238,233,0.4)] hover:bg-white/10"
      }`}
    >
      {label}
    </a>
  );
}

/* ----------------------------------- nav ----------------------------------- */

function V2Nav() {
  const links = ["Work", "Services", "Pricing", "Contact"];
  return (
    <nav className="absolute inset-x-0 top-0 z-40 grid grid-cols-[1fr_auto_1fr] items-center px-5 py-4 sm:px-8">
      <div className="flex gap-4 text-[12px] text-[#efeee9]/70">
        {links.map((l) => (
          <a key={l} href={`/#${l.toLowerCase()}`} className="transition-colors duration-200 hover:text-[#efeee9]">
            {l}
          </a>
        ))}
      </div>
      <p className="font-sans text-[15px] font-semibold tracking-[0.35em] text-[#efeee9]">ALEX DOE</p>
      <div className="justify-self-end">
        <Pill label="Start a project" href={`mailto:${email}`} />
      </div>
    </nav>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function CardFan() {
  const mid = Math.floor(FAN_CARDS.length / 2);
  return (
    <div className="relative mx-auto h-[240px] w-full max-w-3xl sm:h-[280px]">
      {FAN_CARDS.map((src, i) => {
        const o = i - mid; // offset from center
        return (
          <motion.div
            key={src}
            className="absolute left-1/2 top-1/2 aspect-[16/11] w-[150px] overflow-hidden rounded-lg bg-[#2a2a2a] shadow-[0_18px_45px_rgba(0,0,0,0.5)] outline outline-1 -outline-offset-1 outline-white/10 sm:w-[190px]"
            style={{ zIndex: 10 - Math.abs(o) }}
            initial={{ x: "-50%", y: "-42%", rotate: 0, opacity: 0 }}
            animate={{
              x: `calc(-50% + ${o * 96}px)`,
              y: `calc(-50% + ${Math.abs(o) * 18}px)`,
              rotate: o * 6,
              opacity: 1,
            }}
            whileHover={{ y: `calc(-50% + ${Math.abs(o) * 16 - 22}px)`, scale: 1.04 }}
            transition={{ duration: 0.9, delay: 0.15 + Math.abs(o) * 0.08, ease: EASE }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-full w-full object-cover" loading="eager" />
          </motion.div>
        );
      })}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-24">
      <CardFan />
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
      >
        <p className="text-[17px] leading-snug text-[#efeee9]/55 sm:text-[19px]">
          Fast websites, AI bots and automations
        </p>
        <p className="text-[17px] leading-snug text-[#efeee9] sm:text-[19px]">
          the growth layer for small business
        </p>
      </motion.div>
      <motion.a
        href={`mailto:${email}`}
        className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#efeee9]/80 transition-colors duration-200 hover:text-[#efeee9]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: EASE }}
      >
        start a project
        <span className="grid size-6 place-items-center rounded-full shadow-[0_0_0_1px_rgba(239,238,233,0.4)]">
          {"→"}
        </span>
      </motion.a>
    </section>
  );
}

/* -------------------------------- statement -------------------------------- */

function Statement() {
  return (
    <section className="px-5 pb-28 pt-10 sm:pb-40">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-balance text-xl leading-relaxed text-[#efeee9]/40 sm:text-2xl">
          It has never been easier to get a website.
          <br />
          <span className="text-[#efeee9]">The challenge is getting one that sells.</span>
          <br />
          And getting it this week.
        </p>
      </Reveal>
    </section>
  );
}

/* --------------------------------- mission --------------------------------- */

function Mission() {
  return (
    <section className="bg-[#efeee9] px-5 py-28 text-[#1f1f1f] sm:px-8 sm:py-40">
      <div className="mx-auto grid w-full max-w-5xl gap-10 sm:grid-cols-2">
        <div />
        <Reveal>
          <h2 className="text-[22px] font-medium">Mission</h2>
          <div className="mt-6 flex flex-col gap-5 text-[15px] leading-relaxed text-[#1f1f1f]/75">
            <p>
              Every restaurant, clinic and family business deserves a website
              as good as the ones the big brands have — without the agency
              price tag or the six-week timeline.
            </p>
            <p>
              That means cracking what actually makes a site work: loading
              fast, ranking on Google, answering customers at 2am, and turning
              visits into bookings, calls and sales.
            </p>
            <p>
              So a website stops being a business card and starts being an
              employee — one that works every day and never calls in sick.
            </p>
            <p>We make websites measurable, starting with Google.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ service cards ------------------------------ */

function ServiceCard({
  title,
  body,
  subject,
  delay,
}: {
  title: string;
  body: string;
  subject: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="flex flex-col rounded-xl bg-[#efeee9] p-6 text-[#1f1f1f] sm:p-7">
      <div className="mb-8 grid h-40 place-items-center rounded-lg bg-[#e3e2db]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="" className="size-12 opacity-80" />
      </div>
      <h3 className="text-[19px] font-medium">{title}</h3>
      <p className="mt-3 text-[13.5px] leading-relaxed text-[#1f1f1f]/65">{body}</p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-8">
        <span className="flex-1 rounded-md px-3 py-2 text-[13px] text-[#1f1f1f]/40 shadow-[0_0_0_1px_rgba(31,31,31,0.15)]">
          your@mail.com
        </span>
        <a
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
          className="rounded-md bg-[#1e1e1e] px-4 py-2 text-[13px] text-[#efeee9] transition-[scale] duration-200 active:scale-[0.96]"
        >
          Get in touch
        </a>
      </div>
    </Reveal>
  );
}

function Services() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[#efeee9]/50">
          work across the stack
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <ServiceCard
            delay={0}
            title="Websites that sell"
            body="Fast, SEO-first sites for real estate, clinics, trades and restaurants. Booking flows, WhatsApp capture, reviews and multilingual SEO — live in days, built to bring customers."
            subject="Website"
          />
          <ServiceCard
            delay={0.1}
            title="AI for your business"
            body="Chatbots that answer your customers, imports that turn PDFs into structured data, dashboards and portals that run your operations — AI where it saves hours, not where it's a buzzword."
            subject="AI & automation"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- work table -------------------------------- */

function WorkTable() {
  return (
    <section className="bg-[#efeee9] px-5 py-28 text-[#1f1f1f] sm:px-8 sm:py-36">
      <div className="mx-auto grid w-full max-w-5xl gap-14 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <h2 className="max-w-xs text-balance text-[26px] font-medium leading-tight sm:text-[30px]">
            Work that pays for itself.
          </h2>
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[#1f1f1f]/60">
            25+ sites shipped in 7 languages — every one built to load fast,
            rank on Google and turn visitors into customers.
          </p>
        </Reveal>
        <div>
          <p className="mb-2 text-[15px] font-medium">Recent launches</p>
          {WORK_GROUPS.map((group) => (
            <div key={group.group} className="grid gap-x-6 border-t border-[#1f1f1f]/10 py-5 sm:grid-cols-[10rem_1fr]">
              <p className="pb-3 text-[12.5px] text-[#1f1f1f]/50 sm:pb-0">{group.group}</p>
              <div className="flex flex-col gap-5">
                {group.rows.map((row) => (
                  <a key={row.name} href={row.url} target="_blank" rel="noopener noreferrer" className="group">
                    <p className="text-[14.5px] font-medium transition-colors duration-200 group-hover:text-[#47536b]">
                      {row.name}
                      <span className="ml-1.5 inline-block opacity-0 transition-opacity duration-200 group-hover:opacity-60">
                        {"↗︎"}
                      </span>
                    </p>
                    <p className="mt-1 text-[12.5px] text-[#1f1f1f]/45">{row.meta.join("  |  ")}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- results --------------------------------- */

function Results() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <h2 className="text-[26px] font-medium text-[#efeee9] sm:text-[30px]">Proof, not promises</h2>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-[#efeee9]/55">
            Numbers and builds from real client work. See more of what a
            harder-working website looks like.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {RESULT_CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 0.08}
              className="flex flex-col rounded-xl bg-[#282828] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <h3 className="text-[17px] font-medium leading-snug text-[#efeee9]">{card.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[#efeee9]/55">{card.body}</p>
              <p className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#efeee9]/45">
                explore {"→"}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- drag tiles -------------------------------- */

function DragTiles() {
  return (
    <section className="px-2 pb-2 pt-16 sm:px-3 sm:pb-3">
      <div className="relative overflow-hidden rounded-xl bg-[#e4e7e0] px-5 pb-20 pt-14 text-[#1f1f1f] sm:pb-24">
        <p className="mb-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[#1f1f1f]/45">
          {"→"} drag a tile
        </p>
        <div className="text-center">
          <h2 className="text-[28px] font-medium leading-tight text-[#47536b] sm:text-[34px]">
            Which one is your business?
          </h2>
          <p className="text-[28px] font-medium leading-tight text-[#1f1f1f]/35 sm:text-[34px]">
            Play favorites.
          </p>
        </div>
        <div className="relative mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          <p className="absolute -left-2 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#1f1f1f]/40 lg:block">
            love it {"→"}
          </p>
          {FAN_CARDS.map((src, i) => (
            <motion.div
              key={src}
              drag
              dragMomentum={false}
              whileDrag={{ scale: 1.08, zIndex: 30 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-[4/5] w-[92px] cursor-grab overflow-hidden rounded-lg shadow-[0_10px_28px_rgba(31,31,31,0.18)] active:cursor-grabbing sm:w-[110px]"
              style={{ rotate: TILE_ROTATIONS[i], backgroundColor: TILE_TINTS[i] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" draggable={false} className="pointer-events-none h-full w-full object-cover" />
            </motion.div>
          ))}
          <p className="absolute -right-2 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#1f1f1f]/40 lg:block">
            hmm, not so much
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- footer ---------------------------------- */

function V2Footer() {
  const [copied, setCopied] = useState(false);
  return (
    <footer className="px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto grid w-full max-w-5xl gap-8 text-[13px] sm:grid-cols-4">
        <div>
          <p className="text-[#efeee9]/45">Connect</p>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-[#efeee9]/80 transition-colors hover:text-[#efeee9]"
          >
            Instagram
          </a>
          <a href="https://github.com/your-username" className="mt-1 block text-[#efeee9]/80 transition-colors hover:text-[#efeee9]">
            GitHub
          </a>
        </div>
        <div>
          <p className="text-[#efeee9]/45">Get in touch</p>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(email);
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            }}
            className="mt-3 block text-left text-[#efeee9]/80 transition-colors hover:text-[#efeee9]"
          >
            {email}
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#efeee9]/40">
              {copied ? "copied ✓" : "click to copy"}
            </span>
          </button>
        </div>
        <div>
          <p className="text-[#efeee9]/45">Location</p>
          <p className="mt-3 text-[#efeee9]/80">Marbella, Spain</p>
        </div>
        <div>
          <p className="text-[#efeee9]/45">Services</p>
          <p className="mt-3 text-[#efeee9]/80">
            Websites · Bots{" "}
            <span className="rounded-full bg-[#47536b] px-2 py-0.5 text-[10px] text-[#efeee9]">AI</span>
          </p>
        </div>
      </div>
      <p className="mx-auto mt-14 w-full max-w-5xl text-[11px] text-[#efeee9]/30">
        © 2026 example.com — websites that work harder
      </p>
    </footer>
  );
}

/* ----------------------------------- page ----------------------------------- */

export function V2Page() {
  return (
    <main className="min-h-svh bg-[#1e1e1e] font-sans text-[#efeee9]">
      <V2Nav />
      <Hero />
      <Statement />
      <Mission />
      <Services />
      <WorkTable />
      <Results />
      <DragTiles />
      <V2Footer />
    </main>
  );
}
