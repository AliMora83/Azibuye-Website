# Azibuye eSkills — Product Document
**Project Codename:** Antigravity
**Version:** 1.0
**Date:** 17 June 2026
**Owner:** Azibuye Digital Technologies
**Stack:** Next.js 14 (App Router) · Tailwind CSS · JavaScript · EmailJS · Framer Motion · Vercel

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Goals & Success Metrics](#2-goals--success-metrics)
3. [Tech Stack & Architecture](#3-tech-stack--architecture)
4. [Brand & Design System](#4-brand--design-system)
5. [Site Architecture & Pages](#5-site-architecture--pages)
6. [Component Library](#6-component-library)
7. [Phase & Sprint Plan](#7-phase--sprint-plan)
8. [Sprint Detail: Phase 1](#8-sprint-detail-phase-1--foundation)
9. [Sprint Detail: Phase 2](#9-sprint-detail-phase-2--content--conversion)
10. [Sprint Detail: Phase 3](#10-sprint-detail-phase-3--growth--scale)
11. [EmailJS Configuration](#11-emailjs-configuration)
12. [Image & Asset Checklist](#12-image--asset-checklist)
13. [Deployment & DevOps](#13-deployment--devops)
14. [Definition of Done](#14-definition-of-done)
15. [Risk Register](#15-risk-register)
16. [Contacts & Roles](#16-contacts--roles)

---

## 1. Project Overview

### What We're Building

A production-grade marketing and conversion website for **Azibuye eSkills**, trading as **Azibuye Digital Technologies**. The site serves two distinct audiences:

- **Youth & school leavers** — seeking accredited digital skills, employment pathways, and economic opportunity
- **Corporates & organisations** — seeking SETA-aligned workforce training, B-BBEE learnerships, and bespoke corporate solutions

The site replaces any existing digital presence with a fully branded, high-performance Next.js application that reflects the maturity, accreditation, and community mission of the organisation.

### Why This Matters

Azibuye's mission is community restoration through skills. The website is the first impression, the enrolment gateway, and the credibility signal for both learners and corporate decision-makers. It must work as hard as the organisation does.

### Codename: Antigravity

The project is codenamed **Antigravity** — a reference to lifting people out of economic gravity, and to the bold, energetic visual language of the site itself.

---

## 2. Goals & Success Metrics

### Primary Goals

| Goal | Metric | Target |
|---|---|---|
| Generate learner enquiries | Form submissions (Enrol form) | 20+ per month by end of Phase 3 |
| Generate corporate leads | Form submissions (Partner form) | 5+ per month by end of Phase 3 |
| Establish credibility online | Time on site, bounce rate | >2 min avg, <55% bounce |
| Rank for key terms | Organic search | Top 5 for "digital skills training KwaZulu-Natal" |
| Mobile experience | Lighthouse mobile score | ≥ 90 |
| Performance | Lighthouse performance score | ≥ 90 |
| Accessibility | Lighthouse accessibility | ≥ 85 |

### Secondary Goals

- Build a blog/media presence that establishes Dr Maseru Mkhwane as a thought leader in digital skills and community development
- Create a scalable CMS foundation for the team to manage content without developer involvement
- Serve as a professional document for investors, partners, and government stakeholders

---

## 3. Tech Stack & Architecture

### Core Stack

| Layer | Technology | Rationale |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSG + future SSR capability, Vercel-native |
| Language | JavaScript (JSX) | Team familiarity, no TypeScript overhead for this scope |
| Styling | Tailwind CSS | Utility-first, rapid iteration, consistent design tokens |
| Animations | Framer Motion | Parallax, scroll reveals, counter animations |
| Icons | Lucide React + Custom SVG | Lucide for UI icons; custom SVG for social brand icons |
| Email | EmailJS | No backend needed, free tier 200 emails/month |
| Fonts | Montserrat (Google Fonts via `<link>`) | Matches existing brand assets exactly |
| Hosting | Vercel | Zero-config Next.js deployment, free tier |
| Version Control | GitHub | Required for Vercel CI/CD integration |

### Future Stack (Phase 3)

| Layer | Technology | Rationale |
|---|---|---|
| CMS | Sanity.io | Headless CMS, generous free tier, Next.js integration |
| Analytics | Google Analytics 4 | Free, industry standard |
| SEO | next-seo | Structured metadata, OG tags, schema.org |
| Maps | Google Maps Embed API | Physical location, trust signal |

### Architecture Notes

- All pages are **statically generated** (SSG) at build time — fast, SEO-friendly, no server costs
- `'use client'` directive used only where interactivity requires it (forms, animations, nav scroll)
- EmailJS calls happen **client-side** — no API routes required, no backend
- Images served from `/public/images/` — optimise with `next/image` in Phase 2
- Environment variables prefixed `NEXT_PUBLIC_` (client-safe, no secrets)

---

## 4. Brand & Design System

### Colour Palette

| Name | Hex | Tailwind Token | Usage |
|---|---|---|---|
| Green 800 (Primary) | `#0D4B3E` | `green-800` | Nav, headers, CTAs, dark sections |
| Green 900 (Deep) | `#0a3328` | `green-900` | Footer, dark overlays |
| Green 950 (Darkest) | `#061f18` | `green-950` | Hero backgrounds, testimonials |
| Gold 500 (Accent) | `#C8922B` | `gold-500` | Highlights, icons, CTAs, accent borders |
| Gold 400 (Light) | `#d9a843` | `gold-400` | Text on dark backgrounds |
| Cream 50 (Light BG) | `#FAF8F3` | `cream-50` | Section alternating backgrounds |
| Cream 100 | `#F5F7F6` | `cream-100` | Cards, input fields |
| Dark Text | `#222222` | — | Body copy |

### Typography

| Role | Font | Weight | Class |
|---|---|---|---|
| Display / H1 | Montserrat | 800 (ExtraBold) | `font-extrabold` |
| Heading / H2 | Montserrat | 700 (Bold) | `font-bold` |
| Subheading / H3 | Montserrat | 600 (SemiBold) | `font-semibold` |
| Body | Montserrat | 400 (Regular) | `font-normal` |
| Labels / Tags | Montserrat | 700 (Bold) | `font-bold text-xs tracking-widest uppercase` |

### Spacing System

Follow Tailwind's default 4px base scale. Key spacing:
- Section vertical padding: `py-24` (desktop), `py-16` (mobile)
- Content max width: `max-w-7xl mx-auto px-4`
- Card padding: `p-7`
- Gap between grid items: `gap-6` or `gap-8`

### Zulu Geometric Pattern

The brand features a traditional Zulu diamond/geometric repeating border. Implemented as inline SVG in CSS:

```css
.zulu-border {
  background-image: url("data:image/svg+xml,..."); /* Gold version */
  background-repeat: repeat-x;
  height: 16px;
}
.zulu-border-green { /* Dark green version for use on light backgrounds */ }
```

Used as decorative section dividers and hero top borders.

### Section Shape Transitions

Two CSS clip-path utilities for visual interest between sections:

```css
.section-clip         { clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%); }
.section-clip-reverse { clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 100%); }
```

### Animation Principles

- **Style:** Bold and energetic — large reveals, parallax hero, satisfying counters
- **Scroll reveals:** 60px upward translate + opacity fade, 0.7s ease-out cubic
- **Counters:** Ease-out cubic, 2s duration, trigger on first viewport entry
- **Parallax:** Hero background moves at 40% of scroll speed
- **Hover states:** `scale-105` on primary CTAs, colour transitions on cards/links
- **Partner strip:** Continuous horizontal scroll animation at 20s linear

---

## 5. Site Architecture & Pages

### Navigation Structure

```
/                      → Home
/about                 → About Us
/programmes            → Programmes Overview
/programmes/youth      → Youth Programmes
/programmes/corporate  → Corporate Solutions
/impact                → Impact & Partners
/media                 → Blog / News
/contact               → Contact, Enrol & Partner Forms
```

### Page Inventory

#### `/` — Home
The primary conversion and brand page.

**Sections:**
1. **Hero** — Full-screen parallax, headline "Skills That Shape Futures", two CTAs (Explore Programmes, Partner With Us), ETDP SETA badge
2. **Three Pathways strip** — Enrol / Partner / Connect quick-access bar (white bg)
3. **Four Pillars** — Training & Development, Digital Skills, Career Support, Community Impact
4. **Impact Counters** — 1000+ Learners, 500+ Youth Empowered, 10+ Projects, 9 Provinces (animated on scroll)
5. **Programmes Grid** — 6 programme cards with tags
6. **Testimonials** — 3-column dark section with star ratings
7. **Partner Logo Strip** — Continuous auto-scroll of partner names
8. **CTA Banner** — Gold section, dual CTAs

**Key Interactions:** Parallax hero, counter animation, scroll reveals throughout

---

#### `/about` — About Us
Full brand story and leadership page.

**Sections:**
1. Hero with headline "The Azibuye Story"
2. Brand story + "Come back, reclaim what is yours" quote card
3. 4 stat tiles (2 enterprises, 5 advocacy areas, 3 national sector impact, 9 provinces)
4. Founder profile — Dr Maseru Mkhwane (photo, qualifications, awards, timeline)
5. Vision & Mission (dark green, two cards)
6. Values — Human Dignity, Ubuntu, Excellence, Integrity
7. Objectives — 6 numbered items
8. CTA Banner

---

#### `/programmes` — Programmes Overview
Dual-pillar landing page.

**Sections:**
1. Hero
2. Two large cards — Youth (green) and Corporate (gold), each with description and CTA

---

#### `/programmes/youth` — Youth Programmes
Full youth division detail page.

**Sections:**
1. Hero — "Because Potential Doesn't Expire"
2. Mission statement with image
3. Programme cards (5 programmes with icons, NQF tags, and what each opens for learners)
4. Enrol CTA banner

**Programmes listed:**
- Early Childhood Development (NQF 4 & 5)
- NEMISA Digital Skills Programme
- Microsoft 365 Productivity
- New Venture Creation
- Data Science & Software Development (In Accreditation)

---

#### `/programmes/corporate` — Corporate Solutions
Full corporate division detail page.

**Sections:**
1. Hero — "Build the Workforce Your Business Deserves"
2. Mission + quote with image
3. 5 offering cards (with icons and what each delivers)
4. "Why Partner With Azibuye" — 4 reasons (Accredited, Community Rooted, Human Centred, Measurable Outcomes)
5. Proposal request CTA

**Offerings listed:**
- Microsoft 365 Workplace Programme
- Digital Skills Programme (HEMISA)
- Capacity Building for Certificate Programmes
- B-BBEE Aligned Learnerships
- Bespoke Organisational Training

---

#### `/impact` — Impact & Partners
Credibility and proof page.

**Sections:**
1. Hero — "Creating Opportunity Through Skills"
2. Stats bar (1000+ Learners, 500+ Youth, 10+ Projects, 2 Divisions)
3. Accreditations detail table
4. Partner grid — 12 partners with type labels

---

#### `/media` — Blog & News
Content and thought leadership page.

**Sections:**
1. Hero — "Stories of Impact"
2. Category filter bar (All / News / Programmes / Leadership / Insight)
3. Blog post grid (2-column, with image, category tag, date, excerpt)

**Phase 1:** Static placeholder posts
**Phase 3:** Live Sanity CMS integration

---

#### `/contact` — Contact Page
Primary conversion page — dual-purpose forms.

**Sections:**
1. Hero — "Let's Build Something That Lasts"
2. Contact info column (phone, 2 emails, address, website) + Google Maps embed
3. Tabbed form panel:
   - **Tab 1: Enrol / Enquire** — Name, phone, email, programme select, message
   - **Tab 2: Partner With Us** — Company, contact, email, phone, team size, training needs

**Anchors:** `/contact#enrol`, `/contact#partner` for direct deep-linking from CTAs

---

## 6. Component Library

All components live in `/components/`.

### Core Components

| Component | File | Purpose |
|---|---|---|
| Navbar | `Navbar.js` | Sticky nav, transparent→green on scroll, mobile drawer |
| Footer | `Footer.js` | 4-column: Brand, Programmes, Quick Links, Contact |
| WhatsAppButton | `WhatsAppButton.js` | Fixed floating button, pre-filled message, tooltip |
| SectionReveal | `SectionReveal.js` | Framer Motion scroll reveal wrapper (up/down/left/right) |
| AnimatedCounter | `AnimatedCounter.js` | Ease-out cubic counter, triggers once on scroll entry |
| SocialIcons | `SocialIcons.js` | Custom inline SVG: Facebook, LinkedIn, YouTube, Instagram |

### SectionReveal API

```jsx
<SectionReveal
  delay={0.1}        // stagger delay in seconds (default 0)
  direction="up"     // up | down | left | right (default "up")
  className=""       // pass-through className
>
  {children}
</SectionReveal>
```

### AnimatedCounter API

```jsx
<AnimatedCounter
  target={1000}      // final number
  suffix="+"         // text appended (e.g. "+", "%")
  prefix=""          // text prepended (e.g. "R", "$")
  duration={2000}    // animation duration in ms
/>
```

### WhatsApp Configuration

```js
// In WhatsAppButton.js
const phone = '27660046289'  // International format, no +
const message = 'Hi Azibuye eSkills! I'd like to find out more about your programmes.'
```

---

## 7. Phase & Sprint Plan

### Timeline Overview

| Phase | Name | Sprints | Duration | Target Completion |
|---|---|---|---|---|
| Phase 1 | Foundation | S1, S2, S3 | 3 weeks | 30 June 2026 |
| Phase 2 | Content & Conversion | S4, S5, S6 | 3 weeks | *(Post-June if needed)* |
| Phase 3 | Growth & Scale | S7, S8, S9 | 3 weeks | *(Post-June if needed)* |

> **Note on timeline:** The end-of-June 2026 deadline applies to **Phase 1 completion** — a fully functional, branded, deployed website with all core pages live. Phases 2 and 3 represent progressive enhancement and can continue post-launch without affecting the live site.

### Sprint Cadence

- Each sprint = ~5 working days
- Start of sprint: planning & task breakdown
- End of sprint: review, deploy to Vercel preview, sign-off
- All code committed to GitHub before sprint close
- Deploys: Vercel preview branch per sprint; merge to `main` = live

---

## 8. Sprint Detail: Phase 1 — Foundation

**Goal:** Scaffolded, branded, deployed Next.js project with all pages built and live on Vercel.

---

### Sprint 1 — Project Setup & Core Infrastructure
**Dates:** 17–21 June 2026
**Goal:** Running project, design system established, global components complete

#### Tasks

| # | Task | Owner | Status |
|---|---|---|---|
| 1.1 | Scaffold Next.js 14 App Router project | Dev | ✅ Done |
| 1.2 | Configure Tailwind with brand colour tokens | Dev | ✅ Done |
| 1.3 | Write `globals.css` (Zulu pattern, clip paths, body styles) | Dev | ✅ Done |
| 1.4 | Set up `app/layout.js` with Montserrat font | Dev | ✅ Done |
| 1.5 | Build `Navbar.js` (transparent→solid, mobile menu) | Dev | ✅ Done |
| 1.6 | Build `Footer.js` (4 columns, social icons, accreditation strip) | Dev | ✅ Done |
| 1.7 | Build `WhatsAppButton.js` (floating, tooltip, pre-filled message) | Dev | ✅ Done |
| 1.8 | Build `SectionReveal.js` (Framer Motion scroll reveal wrapper) | Dev | ✅ Done |
| 1.9 | Build `AnimatedCounter.js` (ease-out cubic, scroll trigger) | Dev | ✅ Done |
| 1.10 | Build `SocialIcons.js` (inline SVG: FB, LI, YT, IG) | Dev | ✅ Done |
| 1.11 | Create GitHub repository and push initial commit | Dev | ⬜ To do |
| 1.12 | Connect repo to Vercel, configure production domain | Dev | ⬜ To do |
| 1.13 | Add logo files to `/public/images/` (logo.png, logo-white.png) | Client | ⬜ To do |
| 1.14 | Verify build passes zero errors on Vercel | Dev | ⬜ To do |

#### Sprint 1 Acceptance Criteria
- `npm run build` passes with 0 errors locally and on Vercel
- Navbar renders correctly on mobile and desktop
- Footer renders with correct contact details and social links
- WhatsApp button opens correct pre-filled message
- Vercel preview URL accessible

---

### Sprint 2 — Home & About Pages
**Dates:** 22–26 June 2026 (estimated)
**Goal:** Home and About pages fully built, animated, and content-complete

#### Tasks

| # | Task | Owner | Status |
|---|---|---|---|
| 2.1 | Build `app/page.js` — Home page (all 8 sections) | Dev | ✅ Done |
| 2.2 | Build `app/about/page.js` — About page (all 8 sections) | Dev | ✅ Done |
| 2.3 | Supply hero background image (`hero-bg.jpg`) | Client | ⬜ To do |
| 2.4 | Supply about page background image (`about-bg.jpg`) | Client | ⬜ To do |
| 2.5 | Supply founder portrait (`founder.jpg`) | Client | ⬜ To do |
| 2.6 | Test all animations (parallax, counters, scroll reveals) | Dev | ⬜ To do |
| 2.7 | Mobile QA — Home page (375px, 390px, 414px breakpoints) | Dev | ⬜ To do |
| 2.8 | Mobile QA — About page | Dev | ⬜ To do |
| 2.9 | Review content accuracy against Company Profile PDF | Client | ⬜ To do |
| 2.10 | Merge Sprint 2 branch → `main`, confirm live | Dev | ⬜ To do |

#### Content Checklist — Home
- [ ] Headline: "Skills That Shape Futures"
- [ ] Tagline: "Accredited digital skills, workforce development..."
- [ ] Stats: 1000+ Learners, 500+ Youth, 10+ Projects, 9 Provinces
- [ ] 6 programme cards with correct tags
- [ ] 3 testimonials (confirm quotes with client or use placeholders)
- [ ] Partner names: ETDP SETA, NEMISA, DUT, Coastal College, Elangeni TVET, QCTO, Vodacom, Huawei, King Cetshwayo, iBMS

#### Content Checklist — About
- [ ] Brand name origin correctly explained
- [ ] Founder: Dr Maseru Mkhwane — title, qualifications, awards correct
- [ ] Timeline: 2017, 2022, 2025, 2026+
- [ ] 4 values correct: Human Dignity, Ubuntu, Excellence, Integrity
- [ ] 6 objectives correct

#### Sprint 2 Acceptance Criteria
- Home and About pages render without layout issues at all breakpoints
- All animated counters trigger correctly on scroll
- Parallax hero works on desktop (disabled on mobile for performance)
- Client has reviewed and approved content accuracy

---

### Sprint 3 — Inner Pages, Forms & Launch
**Dates:** 27–30 June 2026 (estimated)
**Goal:** All remaining pages live, EmailJS configured, website launched

#### Tasks

| # | Task | Owner | Status |
|---|---|---|---|
| 3.1 | Build `app/programmes/page.js` — overview | Dev | ✅ Done |
| 3.2 | Build `app/programmes/youth/page.js` | Dev | ✅ Done |
| 3.3 | Build `app/programmes/corporate/page.js` | Dev | ✅ Done |
| 3.4 | Build `app/impact/page.js` | Dev | ✅ Done |
| 3.5 | Build `app/media/page.js` (static placeholder posts) | Dev | ✅ Done |
| 3.6 | Build `app/contact/page.js` (dual tabbed forms) | Dev | ✅ Done |
| 3.7 | Create EmailJS account at emailjs.com | Client | ⬜ To do |
| 3.8 | Set up Gmail service in EmailJS dashboard | Client | ⬜ To do |
| 3.9 | Create Enrolment email template in EmailJS | Dev/Client | ⬜ To do |
| 3.10 | Create Corporate Partner email template in EmailJS | Dev/Client | ⬜ To do |
| 3.11 | Replace 4 EmailJS constants in `app/contact/page.js` | Dev | ⬜ To do |
| 3.12 | Test Enrol form → confirm email received at info@azibuyeeskills.co.za | Dev+Client | ⬜ To do |
| 3.13 | Test Partner form → confirm email received | Dev+Client | ⬜ To do |
| 3.14 | Supply remaining images (youth-bg, corporate-bg, media-1, media-2) | Client | ⬜ To do |
| 3.15 | Replace Google Maps iframe embed with correct Umzinto coordinates | Dev | ⬜ To do |
| 3.16 | Full cross-browser QA (Chrome, Safari, Firefox, Edge) | Dev | ⬜ To do |
| 3.17 | Full mobile QA — all pages | Dev | ⬜ To do |
| 3.18 | Update social media links in Footer and WhatsApp button | Client | ⬜ To do |
| 3.19 | DNS: point `www.azibuyeeskills.co.za` to Vercel | Client/Dev | ⬜ To do |
| 3.20 | Run Lighthouse audit — resolve any score below 85 | Dev | ⬜ To do |
| 3.21 | Merge to `main` → **LAUNCH** 🚀 | Dev | ⬜ To do |

#### EmailJS Template Variables

**Enrolment Template** — variables to use in the EmailJS template editor:
```
{{name}}        Full name of applicant
{{phone}}       Phone number
{{email}}       Email address
{{programme}}   Selected programme
{{message}}     Optional message
```

**Corporate Partner Template:**
```
{{company}}     Company name
{{name}}        Contact person
{{email}}       Email address
{{phone}}       Phone number
{{size}}        Number of employees to train
{{needs}}       Training needs / goals
```

#### Sprint 3 Acceptance Criteria
- All 9 routes render correctly with no broken images or layout issues
- Both contact forms successfully send emails and show success states
- WhatsApp button opens correct conversation
- Live domain resolves correctly (`www.azibuyeeskills.co.za`)
- Lighthouse scores: Performance ≥ 90, Accessibility ≥ 85, SEO ≥ 90
- Client has done final walkthrough and signed off

---

## 9. Sprint Detail: Phase 2 — Content & Conversion

**Goal:** Optimise for performance, improve SEO, add `next/image`, refine UX based on Phase 1 feedback, and enhance conversion pathways.

---

### Sprint 4 — Performance & SEO
**Goal:** Lighthouse scores maximised; metadata, schema.org, and sitemap in place

#### Tasks

| # | Task | Notes |
|---|---|---|
| 4.1 | Install and configure `next-seo` | Per-page metadata, OpenGraph, Twitter cards |
| 4.2 | Add `generateMetadata()` to all pages | Dynamic `<title>` and `<meta description>` |
| 4.3 | Migrate all `<img>` tags to `next/image` | Automatic WebP, lazy loading, responsive srcset |
| 4.4 | Add `robots.txt` and `sitemap.xml` | Via `next-sitemap` package |
| 4.5 | Add `schema.org` JSON-LD to Home and About | `Organization`, `LocalBusiness` schemas |
| 4.6 | Add `schema.org` JSON-LD to programme pages | `Course` schema for each programme |
| 4.7 | Compress and optimise all images with Squoosh | Target: hero <200KB, cards <80KB |
| 4.8 | Add `<link rel="preload">` for hero images | Eliminate LCP delay |
| 4.9 | Audit and fix any Lighthouse accessibility issues | Colour contrast, ARIA labels, alt text |
| 4.10 | Submit sitemap to Google Search Console | Post-launch indexing |

---

### Sprint 5 — Enhanced UX & Micro-interactions
**Goal:** Elevate the user experience with refined animations, testimonials carousel, and improved mobile nav

#### Tasks

| # | Task | Notes |
|---|---|---|
| 5.1 | Build animated testimonials carousel | Framer Motion, auto-play with pause on hover |
| 5.2 | Add programme filter on `/programmes` | Filter by Youth / Corporate / Accredited |
| 5.3 | Add "Back to top" button | Appears after 400px scroll |
| 5.4 | Refine mobile navigation | Add animated underline active state, close on route change |
| 5.5 | Add loading skeleton for contact forms | Spinner on submit button state |
| 5.6 | Add `404.js` custom not-found page | On-brand with navigation options |
| 5.7 | Add cookie consent banner | POPIA compliance (South Africa's GDPR equivalent) |
| 5.8 | Add print stylesheet | For Company Profile / About page print view |
| 5.9 | Build reusable `<ProgrammeCard />` component | Consolidate card UI used on 3 pages |
| 5.10 | Build reusable `<PageHero />` component | Consolidate hero pattern used on 7 pages |

---

### Sprint 6 — Google Analytics & Lead Tracking
**Goal:** Full analytics visibility, form conversion tracking, and contact form email reliability upgrade

#### Tasks

| # | Task | Notes |
|---|---|---|
| 6.1 | Set up Google Analytics 4 property | Create GA4 account at analytics.google.com |
| 6.2 | Install `@next/third-parties` GA4 integration | Preferred Next.js method for GA4 |
| 6.3 | Set up GA4 conversion events | `form_submit_enrol`, `form_submit_partner`, `whatsapp_click` |
| 6.4 | Track WhatsApp button clicks as GA4 event | `onClick` handler in `WhatsAppButton.js` |
| 6.5 | Set up Google Search Console | Verify domain, monitor impressions & clicks |
| 6.6 | Add UTM parameter support to CTA links | For future email/social campaigns |
| 6.7 | Evaluate EmailJS limits vs Resend | If >200 emails/month needed, migrate to Resend API route |
| 6.8 | Build `/api/contact` route (Resend, if needed) | Server-side email sending with domain verification |
| 6.9 | Set up Vercel Analytics | Lightweight, privacy-friendly, built-in |
| 6.10 | Monthly reporting dashboard setup | GA4 dashboard for key metrics |

---

## 10. Sprint Detail: Phase 3 — Growth & Scale

**Goal:** Add content management, a learner-facing blog, potential multi-language support, and long-term content strategy infrastructure.

---

### Sprint 7 — Sanity CMS Integration
**Goal:** The team can create and publish blog posts, update programme content, and manage testimonials — all without touching code

#### Tasks

| # | Task | Notes |
|---|---|---|
| 7.1 | Create Sanity.io project (free tier) | sanity.io/get-started |
| 7.2 | Install Sanity client: `npm install next-sanity` | Official Next.js integration |
| 7.3 | Define `post` schema | title, slug, category, publishedAt, excerpt, body (Portable Text), mainImage |
| 7.4 | Define `programme` schema | title, pillar, tag, description, nqfLevel, status |
| 7.5 | Define `testimonial` schema | quote, name, role, featured |
| 7.6 | Define `partner` schema | name, logo, type, url |
| 7.7 | Build Sanity Studio at `/studio` route | Embedded in the Next.js app |
| 7.8 | Migrate static blog posts to Sanity | Re-enter the 4 placeholder posts |
| 7.9 | Rebuild `app/media/page.js` to fetch from Sanity | GROQ query, ISR with 60s revalidation |
| 7.10 | Build `app/media/[slug]/page.js` — individual post page | Portable Text renderer, OG image, schema.org |
| 7.11 | Add Sanity preview mode | Draft preview before publishing |
| 7.12 | Train client on Sanity Studio | 30-minute walkthrough session |

---

### Sprint 8 — Programme Deep Pages & Enrolment Flow
**Goal:** Each programme gets its own dedicated page with full detail, and the enrolment form becomes smarter

#### Tasks

| # | Task | Notes |
|---|---|---|
| 8.1 | Build `app/programmes/[slug]/page.js` | Dynamic route for each programme |
| 8.2 | Create Sanity programme content for all 10 programmes | Youth (5) + Corporate (5) |
| 8.3 | Add programme page sections: overview, outcomes, who it's for, accreditation, duration, cost | Full programme detail |
| 8.4 | Add programme PDF download | Link to downloadable brochure per programme |
| 8.5 | Multi-step enrolment form | Step 1: Contact info → Step 2: Programme + background → Step 3: Confirm |
| 8.6 | Add form field validation with react-hook-form | Replace basic HTML validation |
| 8.7 | Add enquiry source field to forms | "How did you hear about us?" — for attribution tracking |
| 8.8 | Build `/programmes/youth` dynamic grid from Sanity | Replace static cards |
| 8.9 | Build `/programmes/corporate` dynamic grid from Sanity | Replace static cards |
| 8.10 | Add "Related Programmes" section to each programme page | Cross-sell between youth and corporate |

---

### Sprint 9 — Learner Portal Stub & Future Planning
**Goal:** Plant seeds for the learner-facing product, multi-language, and long-term infrastructure

#### Tasks

| # | Task | Notes |
|---|---|---|
| 9.1 | Build `/portal` stub page | "Learner Login — Coming Soon" branded holding page |
| 9.2 | Add isiZulu language toggle (MVP) | Translate navigation and hero text only; use `next-intl` |
| 9.3 | Build reusable `<LanguageSwitcher />` component | EN / ZU toggle in navbar |
| 9.4 | Add social proof section to Home | Sanity-powered: recent graduate count, latest testimonial |
| 9.5 | Build `app/partners/page.js` | Partner showcase with logos, descriptions, and relationship type |
| 9.6 | Add FAQ section to `/contact` | Accordion component; common questions from sales calls |
| 9.7 | Set up automated Vercel preview deploys | Every PR gets a preview URL |
| 9.8 | Document component library in `COMPONENTS.md` | For future developers |
| 9.9 | Security audit | Review EmailJS exposure, headers, POPIA compliance |
| 9.10 | Performance audit and final Lighthouse run | Document baseline scores post-Phase 3 |

---

## 11. EmailJS Configuration

### Setup Steps

1. Go to **emailjs.com** → Sign Up (free: 200 emails/month)
2. Add Email Service → Choose Gmail → Authorise with `info@azibuyeeskills.co.za`
3. Create **Template 1: Enrolment Enquiry**
   - Subject: `New Enrolment Enquiry — {{programme}}`
   - Body: Include all template variables listed below
4. Create **Template 2: Corporate Partner Request**
   - Subject: `New Corporate Proposal Request — {{company}}`
   - Body: Include all template variables listed below
5. Go to **Account → General** → copy your **Public Key**

### Constants to Update in `app/contact/page.js`

```js
const EMAILJS_SERVICE_ID  = 'service_xxxxxxx'   // from Email Services tab
const EMAILJS_ENROL_TID   = 'template_xxxxxxx'  // Enrolment template ID
const EMAILJS_PARTNER_TID = 'template_xxxxxxx'  // Partner template ID
const EMAILJS_PUBLIC_KEY  = 'xxxxxxxxxxxxxxx'   // from Account > General
```

### Enrolment Template (paste into EmailJS template editor)

```
Subject: New Enrolment Enquiry — {{programme}}

Name:       {{name}}
Phone:      {{phone}}
Email:      {{email}}
Programme:  {{programme}}

Message:
{{message}}

---
Sent from Azibuye eSkills website
```

### Corporate Template

```
Subject: New Corporate Proposal Request — {{company}}

Company:          {{company}}
Contact Person:   {{name}}
Email:            {{email}}
Phone:            {{phone}}
Team Size:        {{size}}

Training Needs:
{{needs}}

---
Sent from Azibuye eSkills website
```

---

## 12. Image & Asset Checklist

All images go in `/public/images/`. Optimise before upload using [Squoosh](https://squoosh.app).

| Filename | Usage | Dimensions | Format | Source |
|---|---|---|---|---|
| `logo.png` | Navbar (dark bg) | ~300px wide | PNG (transparent) | Brand assets |
| `logo-white.png` | Footer (dark bg) | ~300px wide | PNG (transparent) | Brand assets |
| `hero-bg.jpg` | Home hero parallax | 1920×1080px min | JPEG | Company profile / shoot |
| `about-bg.jpg` | About page hero | 1920×1080px min | JPEG | Graduation / community photo |
| `programmes-bg.jpg` | Programmes hero | 1920×1080px min | JPEG | Classroom photo |
| `youth-bg.jpg` | Youth page hero | 1920×1080px min | JPEG | Young learners photo |
| `youth-class.jpg` | Youth page body | 800×500px | JPEG | Training environment |
| `corporate-bg.jpg` | Corporate hero | 1920×1080px min | JPEG | Professional / office photo |
| `corporate-class.jpg` | Corporate body | 800×500px | JPEG | Workplace training |
| `founder.jpg` | About page portrait | 600×750px | JPEG | Dr Maseru Mkhwane portrait |
| `media-1.jpg` | Blog thumbnail | 800×500px | JPEG | Any relevant photo |
| `media-2.jpg` | Blog thumbnail | 800×500px | JPEG | Any relevant photo |

### Image Notes
- Hero images should have **dark, busy subjects** so overlaid white text reads clearly
- The `founder.jpg` should be a **portrait orientation professional headshot** with clear face visibility
- Optimise all images to **< 200KB** for heroes, **< 80KB** for thumbnails before upload
- After Phase 2 Sprint 4, `<img>` tags will be replaced with `next/image` for automatic optimisation

---

## 13. Deployment & DevOps

### Local Development

```bash
# Clone repo
git clone https://github.com/your-org/azibuye-eskills.git
cd azibuye-eskills

# Install dependencies
npm install

# Copy environment config
cp .env.local.example .env.local
# Fill in EmailJS values

# Run dev server
npm run dev
# → http://localhost:3000
```

### Git Branching Strategy

```
main          → production (auto-deploys to azibuyeeskills.co.za)
dev           → staging branch (deploy to Vercel preview)
sprint/S1     → Sprint 1 work branch
sprint/S2     → Sprint 2 work branch
feature/xxx   → Individual feature branches off sprint branch
```

### Vercel Setup

1. Push repo to GitHub
2. Go to **vercel.com/new** → Import Git Repository
3. Framework: **Next.js** (auto-detected)
4. Build command: `next build` (default)
5. Output directory: `.next` (default)
6. Add environment variables (none required for Phase 1 — EmailJS keys are hardcoded client-side)
7. Add custom domain: `www.azibuyeeskills.co.za`

### DNS Configuration

At your domain registrar (where `azibuyeeskills.co.za` is registered):

```
Type    Name    Value
CNAME   www     cname.vercel-dns.com
A       @       76.76.21.21
```

Vercel provides exact values in the **Settings → Domains** panel.

### Environment Variables (Phase 2+)

```bash
# .env.local (never commit to git)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX           # Google Analytics 4
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx        # Phase 3
NEXT_PUBLIC_SANITY_DATASET=production    # Phase 3
SANITY_API_TOKEN=xxx                     # Phase 3 (server-only)
```

---

## 14. Definition of Done

A task is **Done** when all of the following are true:

### Code Quality
- [ ] Code committed to the correct sprint branch on GitHub
- [ ] No console errors or warnings in development or production build
- [ ] `npm run build` passes with exit code 0
- [ ] No TypeScript/ESLint errors (ESLint is configured by default in Next.js)

### Design
- [ ] Renders correctly at 375px (iPhone SE), 390px (iPhone 14), 768px (tablet), 1280px (desktop), 1536px (large desktop)
- [ ] Brand colours, typography, and spacing match the design system defined in Section 4
- [ ] Hover/focus states present on all interactive elements
- [ ] Zulu pattern borders present on correct sections

### Accessibility
- [ ] All images have descriptive `alt` text (or `alt=""` for decorative images)
- [ ] All form inputs have associated `<label>` elements
- [ ] All interactive elements are keyboard-navigable
- [ ] Colour contrast ratio ≥ 4.5:1 for body text

### Performance
- [ ] Lighthouse Performance score ≥ 85 on mobile
- [ ] No unoptimised images over 500KB (Phase 1 tolerance; tighten in Sprint 4)

### Content
- [ ] All content reviewed against Company Profile PDF
- [ ] No placeholder text ("Lorem ipsum") present in production
- [ ] Contact details match: 066 004 6289, info@azibuyeeskills.co.za, 169 Lilly Road, Umzinto, Durban 4240

### Deployment
- [ ] Vercel preview URL shared with client for review
- [ ] Client has reviewed and provided written sign-off (WhatsApp or email acceptable)

---

## 15. Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Images not supplied before Sprint 2/3 | Medium | High | Use high-quality stock photos from Unsplash as placeholders; swap when client supplies |
| EmailJS free tier exceeded (200/month) | Low | Medium | Monitor usage; migrate to Resend API route in Sprint 6 if needed |
| DNS propagation delays at launch | Medium | Medium | Initiate DNS changes 48hrs before target launch date |
| Founder portrait photo not available | Low | Medium | Use a professional-quality substitute until real photo supplied |
| Scope creep beyond Phase 1 | High | Medium | Strictly enforce sprint scope; log additions to backlog for Phase 2 |
| Client feedback delays slowing sprints | Medium | High | Set 24hr turnaround SLA for client reviews; keep builds independently releasable |
| EmailJS service outage | Low | High | Display fallback message with direct WhatsApp link if EmailJS fails |
| Google Fonts unavailable (offline dev) | Low | Low | Font loads from Google CDN; add `font-display: swap` fallback stack |

---

## 16. Contacts & Roles

| Role | Name | Contact |
|---|---|---|
| CEO / Founder / Client | Dr Maseru Mkhwane | 066 004 6289 · info@azibuyeeskills.co.za |
| Project Manager | Mr Sibusiso Muthwa | 063 692 1714 · support@azibuyeeskills.co.za |
| Lead Developer | TBC | — |
| Designer | TBC (branding complete) | — |

### Communication

- **Daily updates:** WhatsApp group — Antigravity Build
- **Sprint reviews:** End-of-sprint Vercel preview link shared to client WhatsApp/email
- **Issue tracking:** GitHub Issues (label: `bug`, `feature`, `content`, `blocked`)
- **Document version control:** This file lives in the project repo at `/PRODUCT_DOCUMENT.md`

---

## Appendix A — File Structure Reference

```
/
├── app/
│   ├── layout.js                    ← Root layout, font, metadata
│   ├── globals.css                  ← Tailwind, brand variables, Zulu pattern
│   ├── page.js                      ← Home
│   ├── about/page.js                ← About Us
│   ├── programmes/
│   │   ├── page.js                  ← Overview
│   │   ├── youth/page.js            ← Youth programmes
│   │   └── corporate/page.js        ← Corporate solutions
│   ├── impact/page.js               ← Impact & Partners
│   ├── media/page.js                ← Blog / News
│   └── contact/page.js              ← Contact + Forms
│
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── WhatsAppButton.js
│   ├── SectionReveal.js
│   ├── AnimatedCounter.js
│   └── SocialIcons.js
│
├── public/
│   └── images/
│       ├── IMAGES_README.md         ← Image requirements guide
│       ├── logo.png                 ← [REQUIRED: client to supply]
│       ├── logo-white.png           ← [REQUIRED: client to supply]
│       └── *.jpg                    ← [REQUIRED: client to supply]
│
├── tailwind.config.js               ← Brand colour tokens
├── vercel.json                      ← Vercel deployment config
├── .env.local.example               ← Environment variable template
├── .env.local                       ← [NOT COMMITTED — local only]
├── PRODUCT_DOCUMENT.md              ← This file
└── README.md                        ← Developer quick-start
```

---

## Appendix B — Key Brand Copy

These phrases appear throughout the site and must be used consistently and exactly:

| Phrase | Usage |
|---|---|
| *Skills without Limits* | Tagline under logo |
| *Empowering Communities. Reclaiming Futures.* | Hero sub-tagline, footer |
| *Come back. Reclaim what is yours.* | Brand story section |
| *Skills That Shape Futures* | Home page H1 |
| *Because Potential Doesn't Expire.* | Youth page tagline |
| *Build the Workforce Your Business Deserves.* | Corporate page tagline |
| *We don't just train people. We transform lives and build futures.* | Testimonials header, About CTA |
| *Powered by Azibuye Digital Technologies* | Footer, as legal brand entity |
| *Let them return. Come back. Reclaim what is yours.* | Brand name origin translation |

---

*Document last updated: 17 June 2026 — Project Antigravity v1.0*
*Next review: End of Sprint 1 (21 June 2026)*
