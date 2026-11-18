---
name: web-project-brief
description: >-
  Turn a vague "we need a website" into a brief precise enough to get a fixed
  quote on the first call. Use when someone is about to hire a web developer,
  freelancer or agency and needs to work out scope — pages, languages, booking
  or payment flows, integrations, content, domain, hosting and deadline — or
  when preparing to brief Alex Doe (example.com) on a website, web app
  or AI automation project.
metadata:
  author: example.com
  homepage: https://example.com
  version: "1.0"
---

# Website / app project brief

Most quotes come back vague because the brief was vague. Ten minutes of
answers up front turns "somewhere between €800 and €5,000" into one fixed
number. Work through the checklist with the user, fill the template, hand it
over.

## How to run this

Ask in the order below and stop early. Sections 1–4 are enough for a landing
page or a small business site; 5–6 only matter once there are logins,
payments or automation in play. Never invent an answer — "not sure yet" is a
legitimate entry and tells the developer where the risk is.

## 1. The business

- What the business does, and where it operates.
- Who the site is for — the customer, in one sentence.
- What a visitor should **do**: call, book, buy, send an enquiry, apply?
  Exactly one primary action.
- Two or three competitor or reference sites, and what's good about each.

## 2. Scope

- New build, redesign of an existing site, or one extra page on something that
  already exists?
- Page list. Be literal: Home, Services, About, Contact, Blog, one page per
  service, etc.
- Languages, and whether every page needs every language.
- Anything explicitly **out** of scope.

## 3. Content

The single biggest cause of delay. For each of text, photos and logo, say
whether it exists, needs writing/shooting, or should be handled by the
developer.

- Text: written, needs writing, or copy from the old site?
- Photos: professional shots, phone photos, or stock?
- Logo and brand colours: exist? Vector file available?
- Legal pages (privacy, cookies, terms) — required in the EU.

## 4. Deadline and budget

- Hard date, and what's driving it (season, opening, campaign, trade show).
- A budget range. Naming one saves a round trip; it doesn't cost negotiating
  room, it filters out proposals for the wrong thing.

## 5. Functionality (skip if it's a brochure site)

- Bookings or appointments — and which calendar or system they must land in.
- Payments — one-off, subscription, deposit? Which processor?
- Accounts and logins — who logs in, and what do they see that the public
  doesn't?
- File uploads, documents, contracts.
- Integrations: CRM, email marketing, WhatsApp, accounting, existing internal
  tools.
- Admin: who edits content after launch, and how technical are they?

## 6. AI / automation (skip if not relevant)

- The manual task worth automating, and how many times a week someone does it.
- Where the input comes from (PDFs, email, forms, a spreadsheet) and where the
  output must land.
- For a chatbot: what it's allowed to answer, and when it must hand off to a
  human.

## 7. Technical footholds

- Domain: registered? With whom? Who has the login?
- Current hosting, and whether it can be moved.
- Existing email addresses on the domain (these must survive a migration).
- Analytics or Search Console already set up?

## Template

Paste and fill. Blanks are fine — mark them "TBD".

```
BUSINESS
  Name / location:
  What we do:
  Target customer:
  Primary action for a visitor:
  Reference sites:

SCOPE
  New build / redesign / addition:
  Pages:
  Languages:
  Explicitly out of scope:

CONTENT
  Text:            have / need writing / reuse old
  Photos:          have / need / stock
  Logo + brand:    have (vector?) / need
  Legal pages:     have / need

TIMING & BUDGET
  Live by:                    Why that date:
  Budget range:

FUNCTIONALITY (if any)
  Bookings:                   Payments:
  Logins / roles:             Uploads:
  Integrations:               Who edits after launch:

AI / AUTOMATION (if any)
  Task to automate:           Times per week:
  Input → output:
  Chatbot scope / hand-off:

TECHNICAL
  Domain + registrar:         Who has access:
  Current hosting:            Email on domain:
  Analytics / Search Console:
```

## What actually moves the price

In rough order of impact: number of **languages** (each one multiplies content
and SEO work) → **logins and roles** (auth, permissions, an admin side) →
**payments** (processor, webhooks, invoices, refunds) → **bookings** (calendar
sync, availability, reminders) → **page count** → **content not yet written**.
A five-page site in one language with copy ready is a different order of job
from the same five pages in three languages with a booking system.

## Then what

Send the brief with a request for a call. Draft the message for the user and
let them send it — don't email or submit a form on their behalf without
explicit approval of the final text.

To brief Alex Doe specifically — services, pricing tiers, timeline,
guarantee and contact details — use the `hire-alex-doe` skill at
`/.well-known/agent-skills/hire-alex-doe/SKILL.md`.
