# Panorama Design — Website

React + TypeScript + Vite + Tailwind + Framer Motion single-page site for
Panorama Design, an authorised Supreme Griham uPVC channel partner.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The build output goes to `dist/` — upload that folder's contents to any
static host (Vercel, Netlify, Hostinger, GitHub Pages, cPanel, etc.).

## Before you go live — replace these placeholders

All business info lives in **one file**: `src/data/content.ts`, in the
`business` object at the top.

| Field       | Current placeholder            | Replace with |
|-------------|--------------------------------|--------------|
| `phone`     | `+91 90000 00000`              | Your real number |
| `whatsapp`  | `919000000000`                 | Your WhatsApp number, digits only, country code first, no `+` or spaces |
| `email`     | `hello@panoramadesign.in`      | Your real business email |
| `address`   | Placeholder studio address     | Your real address |
| `region`    | "Haryana & Delhi NCR"           | Confirm/adjust — inferred from your GSTIN's state code (06 = Haryana) |

Your GSTIN (`06ARRPA7384D1ZO`) is already wired into the footer and contact
section.

## Swapping in your own logo & photos

- **Logo**: currently the site uses a text wordmark ("PANORAMA DESIGN") in
  `Navbar.tsx` and `Footer.tsx`. To use your image logo instead, drop the file
  into `public/` (e.g. `public/logo.png`) and replace the `<span>` wordmark
  with `<img src="/logo.png" alt="Panorama Design" className="h-10" />`.
- **Product photos**: go in `public/images/products/` — see the README.txt
  in that folder for the exact filenames expected (they're already wired up
  in `src/data/content.ts`).
- **Gallery photos**: go in `public/images/gallery/` — see that folder's
  README.txt for filenames.
- Until you add real files, each image slot shows a small "add photo: ..."
  placeholder instead of a broken-image icon, so nothing looks broken while
  you're still gathering photos.

> **Note:** earlier drafts of this site linked directly to images hosted on
> `supreme.co.in`. That's been removed — hotlinking another company's CMS
> images is unreliable (their server can block cross-site requests or move
> files any time) and isn't something you want depending on for your own
> commercial site. Use your own photographed installs, or licensed stock
> photos, instead.

## Editing copy

Every headline, paragraph, product description, and per-section SEO
title/description lives in `src/data/content.ts`. You generally shouldn't
need to touch the component files just to change wording.

## SEO behavior

Because this is a single-page site, `src/hooks/useSectionSEO.ts` swaps
`document.title` and the meta description as the visitor scrolls past each
section (`seo` object in `content.ts`). This gives each section a distinct
effective title/description for anyone deep-linking or sharing a scroll
position, while keeping one URL.

## Structure

```
src/
  components/     one file per section (Hero, About, Products, ...)
  data/           content.ts (all copy + SEO), whatsapp.ts (link builder)
  hooks/          useSectionSEO.ts
  App.tsx         assembles all sections
  main.tsx        React root + HelmetProvider
```
