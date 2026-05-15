# CombitTech — Embedded Product Engineering Website

A production-quality static website for CombitTech, built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed for deployment on Cloudflare Pages (free tier).

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui inspired custom components
- **Icons:** Lucide React
- **Deployment:** Cloudflare Pages (static export)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── industries/        # Industries page
│   ├── projects/          # Projects / Case Studies page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── sitemap.ts         # Auto-generated sitemap
│   ├── robots.ts          # Robots.txt configuration
│   └── not-found.tsx      # 404 page
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   └── ui/                # Reusable UI components (Button, Card, etc.)
├── config/
│   └── assets.ts          # ⭐ CENTRALIZED image/asset configuration
├── data/
│   ├── company.ts         # Company information
│   ├── navigation.ts      # Navigation links
│   ├── services.ts        # Services data
│   ├── projects.ts        # Projects/case studies data
│   ├── industries.ts      # Industries data
│   ├── careers.ts         # Job positions & benefits
│   └── testimonials.ts    # Client testimonials
├── lib/
│   └── utils.ts           # Utility functions
└── styles/
    └── globals.css        # Global styles & Tailwind config
```

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd combittech

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

The static output will be in the `out/` directory.

## Deployment on Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push your code to a GitHub/GitLab repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Click **"Create a project"** → **"Connect to Git"**
4. Select your repository
5. Configure build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** `18` (set in Environment Variables: `NODE_VERSION` = `18`)
6. Click **"Save and Deploy"**

### Option 2: Direct Upload

```bash
# Build the project
npm run build

# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy out --project-name=combittech
```

### Custom Domain

1. In Cloudflare Pages project settings, go to **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter your domain (e.g., `combittech.com`)
4. Follow DNS configuration instructions
5. Cloudflare will automatically provision SSL

### Environment Variables (if needed)

Set these in Cloudflare Pages → Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `NODE_VERSION` | `18` |

## Image & Asset Management

### Centralized Asset System

All images are managed through a single configuration file:

📁 **`src/config/assets.ts`**

```typescript
export const assets = {
  logo: {
    primary: "/placeholders/logo/logo-primary.png",
    dark: "/placeholders/logo/logo-dark.png",
  },
  hero: {
    main: "/placeholders/hero/hero-main.jpg",
  },
  services: {
    firmware: "/placeholders/services/firmware.jpg",
    // ...
  },
  // ...
};
```

### Replacing Images

All images should be placed in the `public/placeholders/` directory:

```
public/placeholders/
├── logo/           # Company logos
├── hero/           # Hero section images
├── services/       # Service-related images
├── projects/       # Project/case study images
├── industries/     # Industry images
├── team/           # Team member photos
├── general/        # Office, lab, culture photos
└── og/             # OpenGraph images
```

**To replace any image:**

1. Add your new image to the appropriate folder in `public/placeholders/`
2. Update the path in `src/config/assets.ts`
3. All components referencing that asset will automatically use the new image

### Recommended Image Dimensions

| Image Type | Recommended Size | Format |
|-----------|-----------------|--------|
| Logo (primary) | 200×60px | PNG (transparent) |
| Logo (icon) | 64×64px | PNG (transparent) |
| Hero images | 1920×1080px | JPG/WebP |
| Service images | 800×600px | JPG/WebP |
| Project images | 800×600px | JPG/WebP |
| Industry images | 800×600px | JPG/WebP |
| Team photos | 400×400px | JPG/WebP |
| OG image | 1200×630px | JPG/PNG |

### Image Optimization Tips

- Use **WebP** format for best compression
- Compress images with [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- Keep hero images under 200KB
- Keep other images under 100KB
- Use appropriate dimensions — don't serve 4K images for thumbnails

## Content Management

All content is managed through data files in `src/data/`:

| File | Content |
|------|---------|
| `company.ts` | Company info, address, stats, values |
| `services.ts` | Service offerings with capabilities & technologies |
| `projects.ts` | Project/case study details |
| `industries.ts` | Industry information & solutions |
| `careers.ts` | Job positions & employee benefits |
| `testimonials.ts` | Client testimonials |
| `navigation.ts` | Header & footer navigation links |

Edit these files to update website content without touching component code.

## SEO

The website includes:
- ✅ Page-level metadata (title, description)
- ✅ OpenGraph tags
- ✅ Twitter Card tags
- ✅ Auto-generated sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Alt text support for all images
- ✅ Accessible navigation with ARIA labels

## Performance

- ✅ Static HTML export (no server required)
- ✅ Minimal JavaScript bundle
- ✅ Lazy-loaded animations (Intersection Observer)
- ✅ No unnecessary third-party libraries
- ✅ Optimized Tailwind CSS (purged unused styles)
- ✅ Responsive images with proper sizing

## Development

```bash
# Development server with hot reload
npm run dev

# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Production build
npm run build
```

## License

Proprietary — CombitTech. All rights reserved.
