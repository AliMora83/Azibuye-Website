# Azibuye eSkills Website

Built with Next.js 14 (App Router) · Tailwind CSS · Framer Motion · EmailJS

## Quick Start

```bash
npm install
cp .env.local.example .env.local
# Fill in your EmailJS credentials in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.js              # Root layout (Navbar, Footer, WhatsApp button)
├── page.js                # Home page
├── about/page.js          # About Us
├── programmes/
│   ├── page.js            # Programmes overview
│   ├── youth/page.js      # Youth programmes
│   └── corporate/page.js  # Corporate solutions
├── impact/page.js         # Impact & Partners
├── media/page.js          # Blog / News
└── contact/page.js        # Contact + Enrol + Partner forms

components/
├── Navbar.js              # Sticky transparent → solid nav
├── Footer.js              # Full footer with links & social
├── WhatsAppButton.js      # Floating WhatsApp CTA
├── AnimatedCounter.js     # Scroll-triggered number counter
└── SectionReveal.js       # Framer Motion scroll reveal wrapper
```

## Brand Tokens

| Token         | Value     |
|---------------|-----------|
| Green (primary)   | #0D4B3E |
| Green (dark)      | #0a3328 |
| Gold (accent)     | #C8922B |
| Cream (light bg)  | #FAF8F3 |
| Font              | Montserrat |

## EmailJS Setup

1. Sign up at https://www.emailjs.com/ (free: 200 emails/month)
2. Add your email service (Gmail recommended)
3. Create two templates — see `.env.local.example` for variable names
4. Paste credentials into `.env.local`
5. Update the constants in `app/contact/page.js`

## Images

See `public/images/IMAGES_README.md` for the full list of required images.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at https://vercel.com/new

## Next Steps

- [ ] Add logo files to `/public/images/`
- [ ] Add photography to `/public/images/`
- [ ] Set up EmailJS and fill `.env.local`
- [ ] Connect GitHub repo to Vercel
- [ ] (Optional) Add Sanity CMS for blog/media
- [ ] (Optional) Add Google Analytics
