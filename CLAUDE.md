# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev        # Start dev server (auto-runs typegen first)
pnpm run build      # Production build (auto-runs typegen first)
pnpm run lint       # Run Biome linter
pnpm run format     # Format code with Biome
pnpm run typegen    # Regenerate TypeScript types from Sanity schema
```

No test suite is configured. `predev` and `prebuild` hooks auto-run `typegen` — run it manually after any Sanity schema changes.

## Architecture

**Next.js 15 App Router + Sanity CMS**

Data flows from Sanity (headless CMS) through GROQ queries into React Server Components. Most pages are async server components that fetch directly from Sanity.

### Key directories

- [sanity/schemaTypes/](sanity/schemaTypes/) — Sanity content schemas (artwork, blog, about, pots)
- [sanity/lib/queries.ts](sanity/lib/queries.ts) — All GROQ queries
- [sanity/lib/api.ts](sanity/lib/api.ts) — Data-fetching functions wrapping `sanityFetch()`
- [app/actions/sendEmail.ts](app/actions/sendEmail.ts) — Server action for contact form (uses Resend)
- [lib/siteConfig.ts](lib/siteConfig.ts) — Site-wide metadata (title, author, URLs)
- [lib/seo.ts](lib/seo.ts) — `buildMetadata()` helper for per-page SEO

### Content types

| Type | Key fields |
|------|-----------|
| Artwork | title, slug, image, materials, dimensions, category (`Wall panels` \| `Murals`), featured |
| Blog | title, slug, excerpt, body (block content), featuredImage, publishedAt, author |
| About | fullname, profileImage, bio (block array), availability, email, socialLinks |
| Pots | image (with hotspot), featured |

### Routing

| Route | Component type | Notes |
|-------|---------------|-------|
| `/` | Server | Aggregates Hero, About, Showcase, Blogs, Contact sections |
| `/artwork` | Server | Supports `?category=` query param filtering |
| `/artwork/[id]` | Server | Fetches artwork by Sanity document ID |
| `/blog/[slug]` | Server | Fetches blog post by slug |
| `/studio/[[...tool]]` | Client | Embedded Sanity Studio |

### Image handling

All Sanity images go through `urlFor()` from [sanity/lib/image.ts](sanity/lib/image.ts). Remote images are served from `cdn.sanity.io` (configured in [next.config.ts](next.config.ts)).

### Contact form flow

[components/contact.tsx](components/contact.tsx) (react-hook-form + Zod) → [app/actions/sendEmail.ts](app/actions/sendEmail.ts) → Resend API → email template at [components/email/contact-email.tsx](components/email/contact-email.tsx).

## Environment variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
RESEND_API_KEY
CONTACT_EMAIL
```

## Tooling notes

- **Linter/formatter**: Biome (not ESLint/Prettier) — use `pnpm run lint` and `pnpm run format`
- **Package manager**: pnpm
- **Fonts**: IBM Plex Sans (body), Ojuju (display) — set as CSS variables in layout
- **UI**: shadcn/ui ("new-york" style) with Radix UI primitives; components live in [components/ui/](components/ui/)
