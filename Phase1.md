# Antigravity — Phase 1 Execution Guide
**Project:** Azibuye eSkills Website
**Phase:** 1 of 3 — Foundation
**Deadline:** 30 June 2026
**Goal:** All pages live, forms working, domain pointing, website launched.

---

## Before You Start — Folder Contents Check

You should have received one folder with the following artifacts. Confirm each is present before proceeding.

| File | What It Is |
|---|---|
| `azibuye-eskills-website.zip` | Complete Next.js project (unzip this first) |
| `Azibuye_eSkills_Product_Document.md` | Full product spec, design system, all three phases |
| `Phase1.md` | This file — your step-by-step execution guide |
| `Azibuye_Company_Profile.pdf` | Source of truth for all content |
| `Azibuye_Letterhead.pdf` | Brand reference |
| `Business_card_Front.png` | Brand reference — logo, colours |
| `Business_card_Back.png` | Brand reference — contact details, social icons |
| `Info_email.png` | Email signature — Dr Maseru Mkhwane |
| `Support_email.png` | Email signature — Mr Sibusiso Muthwa |
| `Website.jpeg` | Website design mockup — visual reference |

> **Reference priority:** When in doubt about content, use the Company Profile PDF.
> When in doubt about design, use Website.jpeg and the business cards.

---

## Phase 1 Overview

Phase 1 is split into three sprints of roughly 5 working days each.

| Sprint | Name | Target Dates | Output |
|---|---|---|---|
| Sprint 1 | Setup & Infrastructure | 17–19 Jun | Running project on Vercel, all global components working |
| Sprint 2 | Home & About | 20–24 Jun | Home and About pages live and reviewed by client |
| Sprint 3 | Inner Pages, Forms & Launch | 25–30 Jun | All pages live, forms sending email, domain connected |

---

## Environment & Tools Required

### Your Machine Must Have

```bash
node --version    # v18.17.0 or higher
npm --version     # v9 or higher
git --version     # any recent version
```

Install Node.js from https://nodejs.org if needed (choose LTS).

### Accounts to Create Before Sprint 1

| Service | URL | Why | Free? |
|---|---|---|---|
| GitHub | github.com | Version control, triggers Vercel deploys | ✅ Free |
| Vercel | vercel.com | Hosting, deploys from GitHub automatically | ✅ Free |
| EmailJS | emailjs.com | Sends contact form emails, no backend needed | ✅ Free (200/month) |

> Create all three accounts now before you start. You'll need them in Sprint 1 and Sprint 3.

---

## Sprint 1 — Setup & Infrastructure
**Target:** 17–19 June 2026
**Output:** Project running locally, pushed to GitHub, deployed to Vercel, global components working

---

### Step 1.1 — Unzip and Install the Project

```bash
# 1. Unzip the project from your folder
unzip azibuye-eskills-website.zip

# 2. Enter the project directory
cd azibuye

# 3. Install all dependencies (this takes 1–2 minutes)
npm install

# 4. Confirm the dev server starts
npm run dev
```

Open http://localhost:3000 in your browser. You should see the site running.

> If you see an error about Node version, upgrade Node.js from nodejs.org then retry.

---

### Step 1.2 — Review the Project Structure

Before touching any code, spend 10 minutes familiarising yourself with the layout:

```
azibuye/
├── app/                        ← All pages live here (Next.js App Router)
│   ├── layout.js               ← Root layout: Navbar + Footer wrap every page
│   ├── globals.css             ← Global styles, brand colours, Zulu pattern
│   ├── page.js                 ← Home page (/)
│   ├── about/page.js           ← About Us (/about)
│   ├── programmes/
│   │   ├── page.js             ← Programmes overview (/programmes)
│   │   ├── youth/page.js       ← Youth programmes (/programmes/youth)
│   │   └── corporate/page.js   ← Corporate solutions (/programmes/corporate)
│   ├── impact/page.js          ← Impact & Partners (/impact)
│   ├── media/page.js           ← Blog / News (/media)
│   └── contact/page.js         ← Contact + Forms (/contact)
│
├── components/                 ← Reusable UI components
│   ├── Navbar.js               ← Sticky nav, mobile menu
│   ├── Footer.js               ← 4-column footer
│   ├── WhatsAppButton.js       ← Floating WhatsApp CTA
│   ├── SectionReveal.js        ← Scroll-triggered animation wrapper
│   ├── AnimatedCounter.js      ← Number counter (1000+, 500+, etc.)
│   └── SocialIcons.js          ← SVG icons: Facebook, LinkedIn, YouTube, Instagram
│
├── public/
│   └── images/                 ← All images go here
│       └── IMAGES_README.md    ← Full image requirements list
│
├── tailwind.config.js          ← Brand colour tokens
├── .env.local.example          ← Template for environment variables
├── vercel.json                 ← Vercel deployment settings
└── README.md                   ← Quick-start reference
```

---

### Step 1.3 — Create the GitHub Repository

```bash
# Inside the azibuye/ folder:

# 1. Initialise git
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial commit — Antigravity Phase 1"

# 4. Create a new repo on github.com (do this in your browser):
#    → github.com → New repository
#    → Name: azibuye-eskills (or similar)
#    → Private ✅
#    → Do NOT add README, .gitignore, or licence (the project already has them)
#    → Click Create repository

# 5. Connect your local project to GitHub (replace YOUR_USERNAME):
git remote add origin https://github.com/YOUR_USERNAME/azibuye-eskills.git
git branch -M main
git push -u origin main
```

Refresh GitHub in your browser — you should see all the project files there.

---

### Step 1.4 — Connect to Vercel

1. Go to **vercel.com** → Log in with your GitHub account
2. Click **Add New → Project**
3. Find and click **Import** next to your `azibuye-eskills` repository
4. Vercel auto-detects Next.js — leave all settings as default
5. Click **Deploy**

Vercel will build and deploy the project. This takes about 60 seconds.

When complete, you get a URL like `https://azibuye-eskills-abc123.vercel.app` — open it and confirm the site loads.

> Every time you push to `main` on GitHub from now on, Vercel automatically rebuilds and deploys. No manual steps required.

---

### Step 1.5 — Add Logo Files

The Navbar and Footer expect two logo files that are not included in the zip (you need to export them from your brand assets):

| File to create | Where it appears | Background it sits on |
|---|---|---|
| `public/images/logo.png` | Navbar | Dark green — use the white version of the logo |
| `public/images/logo-white.png` | Footer | Dark green — use the white version of the logo |

**How to export from your existing brand assets:**

- Open the business card or letterhead files in your design tool (Canva, Illustrator, etc.)
- Export the logo as PNG with **transparent background**
- Minimum width: 300px
- Save as `logo.png` and `logo-white.png` into the `public/images/` folder

> **Shortcut:** If you only have one version right now, copy the same file to both names. You can refine later.

After adding them:

```bash
git add public/images/
git commit -m "Add logo files"
git push
```

Vercel will automatically redeploy.

---

### Step 1.6 — Verify Global Components

With the dev server running (`npm run dev`), check each global component:

**Navbar checklist:**
- [ ] Logo appears in the top left
- [ ] All nav links are visible on desktop (Home, About Us, Programmes, Youth, Corporates, Impact, Media, Contact Us)
- [ ] "Enrol Now" gold button appears on the right
- [ ] Scroll down the page — navbar turns solid dark green after ~40px of scroll
- [ ] Resize browser to mobile width — hamburger menu icon appears
- [ ] Tap hamburger — mobile menu slides open with all links
- [ ] Tap a link in mobile menu — menu closes

**Footer checklist:**
- [ ] Four columns visible on desktop: Brand, Programmes, Quick Links, Contact
- [ ] Contact details are correct: 066 004 6289, info@azibuyeeskills.co.za, 169 Lilly Road Umzinto Durban 4240
- [ ] Social icons (Facebook, LinkedIn, YouTube, Instagram) render as icons, not broken squares
- [ ] Accreditation strip at bottom: ETDP SETA · NQF Accredited · NEMISA
- [ ] Zulu geometric gold pattern visible at top of footer

**WhatsApp button checklist:**
- [ ] Green WhatsApp button fixed in bottom-right corner
- [ ] Hover over it — "Chat with us" tooltip appears to the left
- [ ] Click it — opens WhatsApp (web or app) with pre-filled message to 066 004 6289

---

### Sprint 1 — Complete ✅

Before moving to Sprint 2, confirm:

- [ ] `npm run build` runs without errors locally
- [ ] Site is live on Vercel preview URL
- [ ] Logo files added and showing in navbar and footer
- [ ] All global component checks above pass
- [ ] Everything pushed to GitHub (`git status` shows nothing pending)

---

## Sprint 2 — Home & About Pages
**Target:** 20–24 June 2026
**Output:** Home and About pages complete with real images and content, reviewed by client

---

### Step 2.1 — Prepare Your Images

The Home and About pages need real photography before they'll look their best. While you can develop without images, get these supplied and dropped into `public/images/` as early as possible.

**Priority images for Sprint 2:**

| Filename | Description | Where to get it |
|---|---|---|
| `hero-bg.jpg` | A photo of learners in a training environment, or a community scene. Should be dark/busy enough for white text overlay | From company photography, or Unsplash.com (search "digital skills training africa") |
| `about-bg.jpg` | A graduation or community photo | From company photography, or Unsplash |
| `founder.jpg` | Professional portrait of Dr Maseru Mkhwane | From existing company assets |

**Image optimisation (do this before uploading):**
1. Go to **squoosh.app** in your browser
2. Drag in each image
3. Set format to **WebP** or **MozJPEG**, quality **80%**
4. Target file size: hero images under 200KB, portraits under 100KB
5. Download and rename to the filenames above
6. Drop into `public/images/`

> If you don't have real photos yet, use placeholder images from Unsplash and swap them later. The pages are fully built — they just need the image files present.

---

### Step 2.2 — Review the Home Page

Open http://localhost:3000 and scroll through the entire Home page.

Work through the content against the Company Profile PDF and correct anything that doesn't match.

**Home page section review:**

#### Hero Section
- [ ] Headline: **"Skills That Shape Futures."** ✓
- [ ] Subheading: "Accredited digital skills, workforce development and employability programmes designed for tomorrow's economy."
- [ ] Gold badge: "ETDP SETA Registered · NQF Accredited"
- [ ] Two CTA buttons: "Explore Programmes" and "Partner With Us"
- [ ] Italic line: *"Come back. Reclaim what is yours."* appears in gold

#### Three Pathways Strip (white bar below hero)
- [ ] Enrol → Find your programme → links to `/programmes`
- [ ] Partner → Company Training Solutions → links to `/programmes/corporate`
- [ ] Connect → Let's work together → links to `/contact`

#### Four Pillars Section
- [ ] Training & Development
- [ ] Digital Skills
- [ ] Career Support
- [ ] Community Impact
- [ ] Each has an icon, title, and description

#### Impact Counters
These animate when you scroll to them. Confirm the numbers:
- [ ] 1000+ Learners Trained
- [ ] 500+ Youth Empowered
- [ ] 10+ Community Projects
- [ ] 9 Provinces Reached

> To update a number, open `app/page.js` and find the `stats` array near the top of the file. Change `value:` for each item.

#### Programmes Grid
Confirm all 6 cards are correct:
- [ ] Early Childhood Development — tag: "NQF 4 & 5"
- [ ] NEMISA Digital Skills — tag: "Youth"
- [ ] Microsoft 365 Productivity — tag: "Youth & Corporate"
- [ ] New Venture Creation — tag: "Youth"
- [ ] Data Science & Software Dev — tag: "In Accreditation"
- [ ] Bespoke Corporate Training — tag: "Corporate"

#### Testimonials
The three testimonials are placeholders. To update them, open `app/page.js` and find the `testimonials` array. Replace `quote`, `name`, and `role` with real testimonials if you have them, or keep the placeholders for now.

#### Partner Logo Strip
Confirm the scrolling strip includes:
- [ ] ETDP SETA, NEMISA, DUT, Coastal College, Elangeni TVET, QCTO, Vodacom, Huawei, King Cetshwayo, iBMS

To add or remove a partner name, find the `partners` array in `app/page.js`.

#### CTA Banner (gold section)
- [ ] "Let's Build Something That Lasts."
- [ ] Two buttons: "Enrol Today" and "Partner With Us"

---

### Step 2.3 — Review the About Page

Open http://localhost:3000/about

**About page section review:**

#### Hero
- [ ] Headline: "The Azibuye Story"
- [ ] Subheading explains the Nguni word meaning

#### Story Section
- [ ] Green quote card: "Come back, reclaim what is yours."
- [ ] Explanation of name origin is accurate
- [ ] Four stat tiles: 2 Enterprises, 5 Advocacy Areas, 3 National Sector Impact, 9 Provinces

#### Founder Section
- [ ] Founder name: **Dr Maseru Mkhwane**
- [ ] Tags: Digital Transformation Specialist · Social Entrepreneur · Community Builder
- [ ] Qualifications:
  - [ ] PhD (Digital Transformation)
  - [ ] B Tech (Travel & Tourism)
  - [ ] ETDP SETA & QCTO Accredited Provider
- [ ] Awards (three bordered items):
  - [ ] Influential Woman of the Year — Woman Changing The World Global Awards, London UK
  - [ ] Standard Bank Top Women Award — 2022 Winner
  - [ ] Honorary Doctorate Nomination — Leadership & Strategic Management
- [ ] Timeline:
  - [ ] 2017 — Recognised as Best Tourism Ambassador by Ugu District Municipality
  - [ ] 2022 — Winner of Standard Bank Top Women Gender Empowered Award
  - [ ] 2025 — Completed PhD in Digital Transformation (Durban University of Technology)
  - [ ] 2026+ — Expanding skills centres and impacting communities across South Africa

#### Vision & Mission
- [ ] Vision: "A South Africa in which every person, regardless of the postcode of their birth..."
- [ ] Mission: "To deliver accredited, human-centred skills development..."

#### Values (4 cards)
- [ ] Human Dignity
- [ ] Ubuntu
- [ ] Excellence
- [ ] Integrity

#### Objectives (6 numbered items)
Cross-check each against the Company Profile PDF page 4.

---

### Step 2.4 — How to Edit Content

All content lives directly in the page files. Here's how to make changes:

**To edit text on any page:**
1. Open the relevant file in your code editor (e.g. VS Code)
2. Find the text using `Ctrl+F` (or `Cmd+F` on Mac)
3. Edit the text directly
4. Save the file — the browser auto-refreshes (hot reload)
5. Confirm the change looks correct in the browser

**To edit the Home page:** `app/page.js`
**To edit the About page:** `app/about/page.js`
**To edit the Navbar links:** `components/Navbar.js`
**To edit Footer contact details:** `components/Footer.js`
**To edit WhatsApp number/message:** `components/WhatsAppButton.js`

**Example — updating the WhatsApp number:**
```js
// In components/WhatsAppButton.js, find:
const phone = '27660046289'
// Change to a different number in international format (no + sign):
const phone = '27821234567'
```

**Example — updating a stat counter:**
```js
// In app/page.js, find the stats array:
const stats = [
  { value: 1000, suffix: '+', label: 'Learners Trained' },
  // Change value: 1000 to value: 1200 to show 1200+
]
```

---

### Step 2.5 — Mobile Check

Resize your browser or use Chrome DevTools (F12 → toggle device toolbar) to check at these widths:

| Width | Device simulation |
|---|---|
| 375px | iPhone SE / older Android |
| 390px | iPhone 14 / 15 |
| 430px | iPhone 14 Plus |
| 768px | iPad portrait |
| 1024px | iPad landscape / small laptop |
| 1280px | Standard desktop |

For each width, check:
- [ ] No horizontal scrollbar (nothing overflows off-screen)
- [ ] Text is readable (not too small, not wrapping awkwardly)
- [ ] Images fill their containers correctly
- [ ] Buttons are large enough to tap (minimum 44px height)
- [ ] Navbar collapses to hamburger below 1024px

---

### Step 2.6 — Client Review

Once you're happy with Home and About:

1. Push to GitHub:
```bash
git add .
git commit -m "Sprint 2: Home and About pages complete"
git push
```

2. Vercel auto-deploys (takes ~60 seconds)
3. Share the Vercel preview URL with Dr Maseru Mkhwane and Mr Sibusiso Muthwa
4. Ask them to review:
   - All content is accurate
   - Founder section details are correct
   - Testimonials — are these real quotes, or should they be changed?
   - Any wording they'd like adjusted

5. Collect all feedback in one message/list, make changes, push again

---

### Sprint 2 — Complete ✅

Before moving to Sprint 3, confirm:

- [ ] Hero background image (`hero-bg.jpg`) in place
- [ ] About background image (`about-bg.jpg`) in place
- [ ] Founder portrait (`founder.jpg`) in place
- [ ] All content reviewed against Company Profile PDF
- [ ] All counter values confirmed correct
- [ ] Mobile layout checked at 375px, 390px, 768px, 1280px
- [ ] Client has reviewed and signed off via WhatsApp or email
- [ ] Changes pushed to GitHub, Vercel preview URL live

---

## Sprint 3 — Inner Pages, Forms & Launch
**Target:** 25–30 June 2026
**Output:** All pages live, contact forms sending email, domain connected, website launched

---

### Step 3.1 — Review All Inner Pages

Open each page and verify content against the Company Profile PDF.

#### Programmes Overview — `/programmes`
- [ ] "Two Arms. One Purpose." headline
- [ ] Two large cards: Youth (green) and Corporate (gold)
- [ ] Youth card: "Pillar One — For Youth", "Because Potential Doesn't Expire", CTA to `/programmes/youth`
- [ ] Corporate card: "Pillar Two — For Corporates", "Build the Workforce Your Business Deserves", CTA to `/programmes/corporate`

#### Youth Programmes — `/programmes/youth`

Confirm all 5 programme cards:

| Programme | NQF Tag | What it opens |
|---|---|---|
| Early Childhood Development | NQF 4 & 5 · QCTO Accredited | ECD practitioner qualification |
| NEMISA Digital Skills Programme | Active 2025–2027 | Digital literacy for the digital economy |
| Microsoft 365 Productivity | Youth & Corporate | Word, Excel, Teams, Outlook, OneDrive |
| New Venture Creation | Entrepreneurship | Starting and running a business |
| Data Science & Software Development | In Accreditation 2025–2026 | Fastest-growing 21st century careers |

- [ ] "Enrol Now" CTA links to `/contact#enrol`
- [ ] "Apply Now" CTA at bottom also links to `/contact#enrol`

**To update a programme name or description:**
Open `app/programmes/youth/page.js`, find the `programmes` array at the top, and edit `title`, `tag`, or `opens`.

#### Corporate Solutions — `/programmes/corporate`

Confirm all 5 offering cards:

| Offering | What it delivers |
|---|---|
| Microsoft 365 Workplace Programme | Immediately applicable digital productivity skills, customisable |
| Digital Skills Programme (HEMISA) | Digital fluency from foundation to intermediate |
| Capacity Building for Certificate Programmes | Equip academic managers for QCTO programmes |
| B-BBEE Aligned Learnerships | SETA-compliant, strengthens scorecard |
| Bespoke Organisational Training | Custom training for specific sector and goals |

- [ ] "Request a Proposal" CTA links to `/contact#partner`
- [ ] Quote: *"We don't measure success by the number of certificates we print..."*

#### Impact — `/impact`
- [ ] Stats bar: 1000+ Learners, 500+ Youth, 10+ Projects, 2 Divisions
- [ ] Accreditation table (4 rows) — verify each row matches Company Profile PDF page 7
- [ ] Partner grid (12 partners) — verify names match Company Profile PDF page 7

**To add a partner** open `app/impact/page.js`, find the `partners` array, and add:
```js
{ name: 'Partner Name', type: 'Partner Type' },
```

#### Media / Blog — `/media`
- [ ] 4 placeholder blog post cards visible
- [ ] Category filter buttons work (click All, News, etc.)
- [ ] Note: These are static placeholders for now. Real blog CMS (Sanity) comes in Phase 3.

> If you have real news items or announcements, you can update the static posts now:
> Open `app/media/page.js`, find the `posts` array, and edit `title`, `date`, `category`, and `excerpt` for each post.

---

### Step 3.2 — Set Up EmailJS (Critical for Forms)

The contact forms on `/contact` need EmailJS configured before they will actually send emails. This takes about 20 minutes.

#### 3.2.1 — Create Your EmailJS Account

1. Go to **emailjs.com** → Click "Sign Up Free"
2. Verify your email address
3. Log in to the EmailJS dashboard

#### 3.2.2 — Add an Email Service

1. In the dashboard, click **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Click **Connect Account** → log in with `info@azibuyeeskills.co.za`
4. Give it a name: `Azibuye Gmail`
5. Click **Create Service**
6. Copy the **Service ID** — it looks like `service_abc1234`
   - Save it somewhere — you'll need it in Step 3.2.5

#### 3.2.3 — Create the Enrolment Email Template

1. Click **Email Templates** → **Create New Template**
2. Name it: `Enrolment Enquiry`
3. Set the template content:

**Subject line:**
```
New Enrolment Enquiry — {{programme}}
```

**Email body** (paste this exactly):
```
New Enrolment Enquiry

Name:       {{name}}
Phone:      {{phone}}
Email:      {{email}}
Programme:  {{programme}}

Message:
{{message}}

---
Sent from the Azibuye eSkills website
Reply to: {{email}}
```

4. In the **To Email** field, enter: `info@azibuyeeskills.co.za`
5. In the **Reply To** field, enter: `{{email}}`
6. Click **Save**
7. Copy the **Template ID** — it looks like `template_xyz5678`
   - Save it

#### 3.2.4 — Create the Corporate Partner Email Template

1. Click **Email Templates** → **Create New Template**
2. Name it: `Corporate Partner Request`
3. Set the template content:

**Subject line:**
```
New Corporate Proposal Request — {{company}}
```

**Email body:**
```
New Corporate Proposal Request

Company:          {{company}}
Contact Person:   {{name}}
Email:            {{email}}
Phone:            {{phone}}
Team Size:        {{size}}

Training Needs:
{{needs}}

---
Sent from the Azibuye eSkills website
Reply to: {{email}}
```

4. **To Email:** `info@azibuyeeskills.co.za`
5. **Reply To:** `{{email}}`
6. Click **Save**
7. Copy the **Template ID** — save it

#### 3.2.5 — Get Your Public Key

1. Click your account name (top right) → **Account**
2. Click the **General** tab
3. Copy your **Public Key** — it looks like `abcDEF123xyz`
   - Save it

#### 3.2.6 — Update the Code

Open `app/contact/page.js` in your code editor.

Near the top of the file, find these four lines:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_ENROL_TID   = 'YOUR_ENROL_TEMPLATE_ID'
const EMAILJS_PARTNER_TID = 'YOUR_PARTNER_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
```

Replace each value with what you copied:

```js
const EMAILJS_SERVICE_ID  = 'service_abc1234'      // ← your Service ID
const EMAILJS_ENROL_TID   = 'template_xyz5678'     // ← Enrolment template ID
const EMAILJS_PARTNER_TID = 'template_abc9999'     // ← Partner template ID
const EMAILJS_PUBLIC_KEY  = 'abcDEF123xyz'         // ← your Public Key
```

Save the file.

#### 3.2.7 — Test Both Forms

With the dev server running (`npm run dev`):

1. Go to http://localhost:3000/contact
2. Fill in the **Enrol / Enquire** form completely
3. Click Submit
4. You should see a green tick with "Application Received!"
5. Check `info@azibuyeeskills.co.za` — the email should arrive within 1 minute

6. Click the **Partner With Us** tab
7. Fill in all fields
8. Click Submit
9. You should see "Proposal Request Received!"
10. Check your email again

> If emails aren't arriving, check your Gmail spam folder first. If still missing, go back to the EmailJS dashboard → Email Services → click **Test** on your service.

---

### Step 3.3 — Remaining Images

Supply these remaining images into `public/images/` before launch:

| Filename | Priority | Description |
|---|---|---|
| `youth-bg.jpg` | High | Hero background for Youth page — young learners, energy |
| `corporate-bg.jpg` | High | Hero background for Corporate page — professional setting |
| `programmes-bg.jpg` | Medium | Hero background for Programmes overview page |
| `youth-class.jpg` | Medium | Body image on Youth page — training environment |
| `corporate-class.jpg` | Medium | Body image on Corporate page — workplace training |
| `media-1.jpg` | Low | Blog post thumbnail |
| `media-2.jpg` | Low | Blog post thumbnail |

> All pages will still render without these images — the `<img>` tags will simply show the browser's broken image icon. Prioritise the high-priority ones before launch.

**Same optimisation process as before:** Squoosh → WebP/MozJPEG → 80% quality → under 200KB for heroes, under 80KB for body images.

---

### Step 3.4 — Fix the Google Maps Embed

The Contact page includes a Google Maps embed with placeholder coordinates. Update it to the exact Umzinto address.

1. Go to **maps.google.com**
2. Search: `169 Lilly Road, Umzinto, 4235`
3. Click the **Share** button → **Embed a map**
4. Copy the `<iframe>` code Google gives you

5. Open `app/contact/page.js`
6. Find the existing iframe (search for `google.com/maps/embed`)
7. Replace the entire `<iframe ... />` element with the one you copied from Google

---

### Step 3.5 — Update Social Media Links

The Footer and email signatures reference social media profiles. Update the links with the real URLs.

Open `components/Footer.js`, find this section:

```js
{ icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
{ icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
{ icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' },
{ icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
```

Replace each `href` with the actual Azibuye profile URL:
```js
{ icon: FacebookIcon, href: 'https://facebook.com/azibuyeeskills', label: 'Facebook' },
{ icon: LinkedinIcon, href: 'https://linkedin.com/company/azibuyeeskills', label: 'LinkedIn' },
{ icon: YoutubeIcon, href: 'https://youtube.com/@azibuyeeskills', label: 'YouTube' },
{ icon: InstagramIcon, href: 'https://instagram.com/azibuyeeskills', label: 'Instagram' },
```

> If a profile doesn't exist yet, link to the main website (`https://www.azibuyeeskills.co.za`) as a placeholder.

---

### Step 3.6 — Full Cross-Browser & Mobile QA

Before going live, test in every major browser. Use your own device for mobile testing.

#### Desktop Browsers

| Browser | Test URL | Pass? |
|---|---|---|
| Chrome (latest) | localhost:3000 | ⬜ |
| Firefox (latest) | localhost:3000 | ⬜ |
| Safari (Mac) | localhost:3000 | ⬜ |
| Edge (latest) | localhost:3000 | ⬜ |

#### Pages to Check in Each Browser

- [ ] Home — hero parallax, counters animate, partner strip scrolls
- [ ] About — timeline dots visible, values cards aligned
- [ ] Programmes — two pillar cards side by side on desktop
- [ ] Youth — 5 programme cards in grid
- [ ] Corporate — 5 offering cards in grid
- [ ] Impact — stats bar, accreditation table, partner grid
- [ ] Media — 2-column post grid, category buttons
- [ ] Contact — both tabs work, forms submit, map shows

#### Mobile Devices (or Chrome DevTools at 390px)

- [ ] Navbar hamburger works on all pages
- [ ] No horizontal scroll on any page
- [ ] Hero text readable (not too small)
- [ ] Cards stack to single column correctly
- [ ] Forms are easy to fill on touch screen
- [ ] WhatsApp button doesn't cover important content
- [ ] Footer stacks cleanly to 2 columns then 1 column

---

### Step 3.7 — Run Lighthouse Audit

Lighthouse is built into Chrome DevTools and measures performance, accessibility, and SEO.

1. Open Chrome, go to your Vercel preview URL (not localhost — Lighthouse needs a live URL)
2. Press **F12** to open DevTools
3. Click the **Lighthouse** tab
4. Select: ✅ Performance, ✅ Accessibility, ✅ SEO
5. Device: **Mobile** (harder to pass, so fix mobile first)
6. Click **Analyze page load**

**Phase 1 minimum targets:**

| Category | Minimum | Ideal |
|---|---|---|
| Performance | 75 | 90+ |
| Accessibility | 85 | 95+ |
| SEO | 85 | 95+ |

**Common issues and fixes:**

| Issue | Fix |
|---|---|
| "Image elements do not have explicit width and height" | Add `width` and `height` attributes to `<img>` tags |
| "Links do not have a discernible name" | Add `aria-label` to icon-only links |
| "Background and foreground colors do not have sufficient contrast" | Check any light grey text on white backgrounds |
| "Document does not have a meta description" | Already set in `app/layout.js` — confirm it's not empty |

Run Lighthouse on the Home page first, fix any issues below the minimums, then check About and Contact.

---

### Step 3.8 — Connect Your Domain

This step makes the website live at `www.azibuyeeskills.co.za`.

#### Add Domain in Vercel

1. In the Vercel dashboard, click your project
2. Go to **Settings → Domains**
3. Type `www.azibuyeeskills.co.za` → Click **Add**
4. Also add `azibuyeeskills.co.za` (without www) → Vercel will set up a redirect
5. Vercel shows you the DNS records you need to add

#### Update DNS at Your Registrar

Log in to wherever `azibuyeeskills.co.za` is registered (e.g. Domains.co.za, GoDaddy, etc.) and add these records:

| Type | Name | Value | Notes |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | Points root domain to Vercel |
| `CNAME` | `www` | `cname.vercel-dns.com` | Points www to Vercel |

> Vercel shows the exact values in the Domains settings panel — use those, as they may differ slightly.

**DNS propagation takes 15 minutes to 48 hours.** Vercel shows a ✅ green tick next to the domain once it's connected. Check back in 30 minutes.

> While waiting for DNS, your site is still fully accessible at the Vercel preview URL.

---

### Step 3.9 — Final Pre-Launch Checklist

Go through this list top to bottom before announcing the launch.

#### Content
- [ ] All pages have real content (no "Lorem ipsum" or placeholder text visible)
- [ ] All contact details are correct: 066 004 6289, info@azibuyeeskills.co.za, 169 Lilly Road Umzinto Durban 4240
- [ ] Founder name spelt correctly: Dr Maseru Mkhwane
- [ ] Project Manager name correct: Mr Sibusiso Muthwa
- [ ] All programme names and NQF tags match Company Profile PDF
- [ ] All partner names match Company Profile PDF
- [ ] Social media links go to real profiles (or fallback URLs)

#### Technical
- [ ] `npm run build` passes locally with 0 errors
- [ ] Both contact forms send email successfully (tested with real submissions)
- [ ] WhatsApp button opens correct conversation (066 004 6289)
- [ ] Google Maps shows correct Umzinto location
- [ ] All nav links go to the correct pages
- [ ] `/contact#enrol` deep link opens the Enrol tab
- [ ] `/contact#partner` deep link opens the Partner tab

#### Design
- [ ] Logo visible in navbar (top-left) on all pages
- [ ] Logo visible in footer
- [ ] Zulu geometric pattern visible on hero and footer sections
- [ ] Gold accent colour (`#C8922B`) used correctly throughout
- [ ] No broken image icons anywhere (all image files present in `public/images/`)
- [ ] Animations working: parallax hero, counters, scroll reveals, partner strip

#### Performance & SEO
- [ ] Lighthouse Performance ≥ 75 on mobile
- [ ] Lighthouse Accessibility ≥ 85
- [ ] Lighthouse SEO ≥ 85
- [ ] Page title: "Azibuye eSkills | Skills without Limits" visible in browser tab
- [ ] Meta description set

#### Domain & Deployment
- [ ] `www.azibuyeeskills.co.za` loads the website ✅
- [ ] `azibuyeeskills.co.za` (no www) redirects to www version ✅
- [ ] HTTPS padlock visible in browser (Vercel provides SSL automatically)
- [ ] All code pushed to GitHub `main` branch

---

### Step 3.10 — Launch 🚀

Once every item above is checked:

```bash
# Final commit
git add .
git commit -m "Sprint 3 complete — Phase 1 launch ready"
git push
```

Wait for Vercel to finish deploying (~60 seconds), then:

1. Open `https://www.azibuyeeskills.co.za`
2. Do one final scroll through the Home page
3. Submit a test contact form
4. Confirm the email arrives

**You're live.** Share the URL with the Azibuye team.

---

## Ongoing — Post-Sprint Maintenance

### Pushing Updates After Launch

Any time you make a change:

```bash
git add .
git commit -m "Brief description of what you changed"
git push
```

Vercel automatically deploys within 60–90 seconds. No additional steps needed.

### Common Content Updates

| What you want to change | File to open |
|---|---|
| Home page stats (1000+, 500+, etc.) | `app/page.js` → `stats` array |
| Testimonial quotes | `app/page.js` → `testimonials` array |
| Partner names in scrolling strip | `app/page.js` → `partners` array |
| Programme names or descriptions | `app/programmes/youth/page.js` → `programmes` array |
| Corporate offering details | `app/programmes/corporate/page.js` → `offerings` array |
| Blog/news posts | `app/media/page.js` → `posts` array |
| Contact details (phone, email, address) | `components/Footer.js` and `app/contact/page.js` |
| WhatsApp number | `components/WhatsAppButton.js` → `const phone` |
| Navigation links | `components/Navbar.js` → `navLinks` array |
| Footer links | `components/Footer.js` → `programmes` and `quickLinks` arrays |

### What Requires a Developer

These things are more involved and are part of Phase 2 / Phase 3:

- Adding a new page
- Changing the layout of an existing page
- Adding animations or new components
- Integrating Sanity CMS (Phase 3)
- Adding Google Analytics (Phase 2, Sprint 6)

---

## Troubleshooting

### `npm install` fails

```bash
# Try clearing the npm cache
npm cache clean --force
npm install
```

If it still fails, check your Node version:
```bash
node --version
# Must be v18.17.0 or higher
```

### `npm run build` fails

Read the error message carefully — it will name the file and line number.

Common causes:
- A typo in a JSX file (unclosed tag, missing quote)
- An import referencing a file that doesn't exist

Search the error message on Google if you're unsure — Next.js errors are very well documented.

### Vercel build fails but local build passes

Check that you haven't accidentally committed your `.env.local` file (it shouldn't be committed). Vercel builds in a clean environment without it.

### Emails not arriving

1. Check Gmail spam folder
2. Go to EmailJS dashboard → Email Services → click your service → **Test**
3. Confirm template variable names match exactly (case-sensitive)
4. Check EmailJS usage hasn't hit the 200/month limit (dashboard shows usage)

### WhatsApp button not opening

- Confirm the phone number in `WhatsAppButton.js` is in international format without `+`: `27660046289`
- Test on a mobile device (WhatsApp deep links work best on mobile)
- On desktop, WhatsApp Web must be set up at web.whatsapp.com

### Domain not resolving after DNS update

- DNS can take up to 48 hours — be patient
- Use https://dnschecker.org to see if your DNS records have propagated globally
- Confirm the A record and CNAME record are exactly as Vercel specified

### Images not showing

- Confirm the filename matches exactly (case-sensitive on Linux/Vercel): `hero-bg.jpg` ≠ `Hero-BG.jpg`
- Confirm the file is in `public/images/` (not a subfolder)
- Confirm the file extension matches what's in the code (`.jpg` vs `.jpeg` vs `.png`)

---

## Phase 1 Complete — What's Next

When Phase 1 is done, the website is fully live and functional. Phase 2 and Phase 3 build on top of it progressively — the live site is never broken between phases.

**Phase 2 priorities (next):**
- Replace `<img>` tags with `next/image` for better performance
- Add SEO metadata to every page
- Install Google Analytics 4
- Build a testimonials carousel
- Add a cookie consent banner (POPIA compliance)

Full details in `Azibuye_eSkills_Product_Document.md` — Sections 9 and 10.

---

*Antigravity — Phase 1 Execution Guide*
*Project: Azibuye eSkills Website*
*Document version: 1.0 — 17 June 2026*
