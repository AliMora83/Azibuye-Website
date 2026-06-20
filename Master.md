# Master Progress Notes — Azibuye eSkills Website

Living notes on where the build stands. For product spec/design system see
`Azibuye_eSkills_Product_Document.md`; for the Phase 1 launch checklist see
`Phase1.md`; for setup instructions see `README.md`. This file tracks
day-to-day state, decisions, and open items that aren't captured elsewhere.

**Stack:** Next.js (App Router, Turbopack) · Tailwind CSS v4 · Framer Motion · EmailJS
**Phase 1 deadline:** 30 June 2026

## Status as of 2026-06-20

Site builds clean (`npm run build`) and lints clean (`npm run lint`). All
9 routes (`/`, `/about`, `/contact`, `/impact`, `/media`, `/programmes`,
`/programmes/corporate`, `/programmes/youth`) prerender as static content.

### Recent work
- Restructured the Next.js project to live at the repo root (was previously
  nested one level down).
- Converted `<img>` usage to `next/image`, added per-page `metadata` via
  sibling `layout.js` files (required since each `page.js` is a client
  component and can't export `metadata` directly).
- Extracted `components/PageHero.js` — the hero-section wrapper (bg image,
  gradient overlay, Zulu-pattern border, fade-in motion wrapper) was
  duplicated near-verbatim across `about`, `contact`, `impact`, `media`,
  `programmes`, `programmes/youth`, `programmes/corporate`. Now each page
  passes only what differs (`bgImage`, `bgOpacity`, `gradientFrom`,
  `containerClassName`) plus its own heading/copy as children.
- Deduped the contact page's `EnrolForm` / `PartnerForm`: shared
  `useEmailForm` hook (state + EmailJS submit handling) and shared
  `FormField` / `FormSelect` / `FormTextarea` / `FormSuccess` components.
  Fixed a drift bug in the process — `PartnerForm` inputs were missing the
  `transition-colors` class that `EnrolForm`'s had.
- Removed `tailwind.config.js` — dead code. Tailwind v4 theme tokens
  (colors, font) live in the `@theme` block in `app/globals.css`; there was
  no `@config` directive anywhere pointing at the JS config, so it was
  never loaded and risked drifting from the real source of truth.

## Known issues / cleanup needed

- **Stray `azibuye/` directory at repo root.** Contains an old pre-restructure
  copy of `app/about/page.js` (pre-`next/image`, plain `<img>` tags) and an
  `.env.local.example`. It was committed directly (not via this session) in
  commit `8c94575 ("Update")`. Looks like an accidental artifact from before
  the move-to-root restructure — needs a decision from the team on whether
  to delete it.
- `.claude/settings.local.json` is now tracked in git (added in `8c94575`).
  Worth confirming that's intentional before it picks up local-only settings.
- EmailJS credentials live in `.env.local` (gitignored) — confirm the real
  service/template IDs are filled in there before launch; `.env.local.example`
  documents the required keys.

## Architecture notes for future work

- Pages are client components (`'use client'`) because they use Framer Motion
  and hooks; metadata therefore has to live in an adjacent `layout.js` that
  just passes through `children`. This is intentional, not boilerplate to
  clean up further.
- Shared visual primitives: `SectionReveal` (scroll-triggered fade/slide-in),
  `AnimatedCounter` (count-up on scroll into view), `PageHero` (sub-page
  hero wrapper, see above).
- Per-page content (programme cards, stats, testimonials, CTA banners) is
  intentionally left inline per page rather than abstracted further — the
  copy/color/structure varies enough between pages that a shared component
  would trade real duplication for prop-explosion.

## Open items / next steps

- Decide on the stray `azibuye/` directory and tracked `.claude/` settings
  file (see Known issues above).
- Media page posts (`app/media/page.js`) are hardcoded placeholders —
  product doc references eventual CMS integration (Sanity) for these.
- Continue tracking Phase 1 checklist items in `Phase1.md` toward the
  30 June 2026 launch deadline.
