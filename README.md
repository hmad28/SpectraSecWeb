# SpectraSecWeb

Official landing page for **SpectraSec.id**, a cyber security learning community and educational media platform in Indonesia.

The site is built as a polished, dark-tech/cyberpunk single-page experience for presenting SpectraSec's learning focus, latest educational insights, instructor profile, core members, social channels, and ethical hacking disclaimer.

## Features

- Modern dark cyber security landing page for SpectraSec.id
- Responsive hero, about, insight, core member, instructor, CTA, and footer sections
- Interactive insight cards with modal summaries
- Core member profile cards with optimized local media assets
- Lightweight CSS hover interactions and motion using Framer Motion
- SEO metadata for SpectraSec.id and core member names
- JSON-LD structured data for the organization, website, and member list
- Optimized local images served through Next.js Image

## Tech Stack

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS 4 + custom CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image

## Project Structure

```text
app/
  globals.css        Global styles, layout, responsive rules, animations
  layout.tsx         Fonts, metadata, Open Graph, Twitter, SEO config
  page.tsx           Main landing page and page data
components/
  ui/
    button.tsx       Shared CTA/link button component
    card.tsx         Reusable card primitive
lib/
  utils.ts           Utility helpers
public/
  images/            Hero and supporting visual assets
  members/           Optimized member profile images
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```text
http://localhost:3000
```

To run on a custom port:

```bash
npm run dev -- -p 4322
```

## Available Scripts

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run typecheck
```

Runs TypeScript checking with `tsc --noEmit`.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server after `npm run build`.

```bash
npm run lint
```

Runs the configured lint script.

## SEO

The app includes:

- Canonical metadata for `https://spectrasec.id`
- Open Graph and Twitter card metadata
- Keyword coverage for SpectraSec.id, cyber security education, ethical hacking, bug hunting, OSINT, and listed core members
- JSON-LD structured data for `Organization`, `WebSite`, and `ItemList`
- Semantic section anchors for important content and member profiles

## Deployment

This project is ready for deployment on Vercel or any platform that supports Next.js.

Production build command:

```bash
npm run build
```

Default output is managed by Next.js. No environment variables are required for the current static landing page.

## Ethical Disclaimer

SpectraSec.id focuses on legal cyber security education, ethical hacking, responsible disclosure, and defensive learning. Any testing or research should only be performed on systems you own or systems where you have explicit permission and a clear scope.
