# Beacon Hill Interiors

Marketing site for a Boston-based interior services company offering residential cleaning, commercial maintenance, interior construction, and construction punch list closeout. Covers Greater Boston — Beacon Hill, Back Bay, South End, Seaport, Cambridge, and surrounding neighborhoods.

## What it is

Beacon Hill Interiors is built by someone who has run work inside construction as a licensed Massachusetts Construction Supervisor — so the site positions the company around construction discipline applied to service work, not just cleaning. The design system reflects that: dark, editorial, gold accents, no stock-photo cheerfulness.

Four service lines:
1. **Residential Interior Care** — recurring cleaning and care for private residences
2. **Commercial & Hospitality** — hotel rooms, common areas, managed buildings
3. **Interior Construction & Refresh** — painting, drywall, finish carpentry, kitchen/bath refresh
4. **Punch List & Construction Closeout** — final-phase support for GCs, developers, and owners

## Stack

- **Next.js** (App Router) with TypeScript
- **Tailwind CSS** + custom CSS variables for the BHI design system (gold, charcoal, linen, sand)
- **`next/image`** throughout — all hero and service images are `.webp`
- Bespoke components — no UI library

## Project structure

```
beacon-hill-interiors/
  app/
    page.tsx              Homepage (hero, four pillars, why BHI, who we serve, process, CTA)
    about/
    residential/
    commercial/
    construction/
    punchlist/
    contact/
  components/
    Nav.tsx
    Footer.tsx
    Logo.tsx
    GoldRule.tsx          The horizontal gold accent rule used throughout
    SectionLabel.tsx      Small-caps section eyebrow label
  public/
    images/               Hero, service, and about images (.webp)
    logo.svg
```

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
