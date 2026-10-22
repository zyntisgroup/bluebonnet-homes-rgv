# Bluebonnet Homes RGV — Luxury Custom Home Builder Website (V2)

A bespoke, architecturally choreographed web experience for **Bluebonnet Homes** (`https://bluebonnethomesrgv.com/`), premier custom home builders serving **Mission, McAllen, Edinburg, Pharr, Sharyland, Weslaco, Harlingen, and the Rio Grande Valley, South Texas**.

Designed and engineered to translate the editorial scroll choreography, pinned split-curtain reveals, architectural telemetry, and pixel-locked lighting transformations inspired by **Nota Architecture (`nota.uprock.pro`)** into a warm, sunlit South Texas luxury residential aesthetic (**"Sunlit Limestone, Deep Espresso & Brushed Brass"**).

---

## 1. Quick Start & Commands

The local development server is already running at:
- **Local URL:** `http://localhost:3000`

### Standard Commands
```bash
# Start local development server on http://localhost:3000
npm run dev

# Build production bundle (outputs to dist/)
npm run build

# Preview production build locally
npm run start
```

---

## 2. Project Structure

```text
V2/
├── ASSETS/                            # Original untouched client & website source assets (Read-Only)
├── reference_analysis/                # Saved Nota & Bluebonnet reference analysis logs & screenshots
│   ├── reference_uiux_analysis.md     # Architectural UI/UX translation blueprint
│   ├── scroll_animation_spec.md       # Scroll choreography & easing technical specification
│   ├── image_art_direction.md         # Art direction & pixel-locked Day-to-Night synthesis log
│   └── reference_analysis_log.md      # Consolidated Phase 0 analysis log
├── asset_audit.md                     # Complete audit of all 113 source assets in ASSETS/
├── asset_manifest.json                # Structured JSON manifest mapping every asset & route usage
├── verification_screenshots/          # 24 browser-verified Desktop, Tablet & Mobile screenshots
├── public/                            # Optimized production-served static assets
│   ├── brand/                         # Official Bluebonnet Homes SVG/PNG logos
│   ├── documents/                     # Official Bluebonnet-Homes-Cost-Guide.pdf (6.5 MB)
│   ├── videos/                        # 4K UHD header-video-design.mp4 & construction-timelapse.mp4
│   └── images/
│       ├── day-night/                 # Pixel-locked 1672x941 4-state Day-to-Night & 4-stage Build images
│       ├── generated/                 # High-resolution architectural materiality crops
│       ├── optimized/                 # Clean, watermark-remediated portfolio & process photography
│       └── originals/                 # Preserved copies of untouched original photography
└── src/
    ├── config/
    │   └── site.ts                    # Single source of truth: contact info, 4 estates, 5 phases, FAQs
    ├── components/
    │   ├── Header.tsx                 # Adaptive glass/ivory header + full-screen mobile drawer
    │   ├── HeroScrollVideo.tsx        # Pinned 240vh 4K header-video-design.mp4 + 4-stage scrubber
    │   ├── ArchitecturalCurtainTransition.tsx # Nota-inspired split-curtain horizontal reveal
    │   ├── DayToNightShowcase.tsx     # Pinned 260vh 4-state lighting scrubber + split wipe slider
    │   ├── PortfolioHorizontalGallery.tsx     # 4 verified estates + room filmstrip + lightbox
    │   ├── BluebonnetMethodPinned.tsx # Pinned 5-phase Bluebonnet Method walkthrough
    │   ├── CraftsmanshipBento.tsx     # 12-col materiality & South Texas climate engineering grid
    │   ├── FoundersAndTestimonials.tsx# Michael & Ana leadership narrative + 4 RGV testimonials
    │   ├── CostGuideAndResources.tsx  # Direct Cost Guide PDF download + interactive guide reader
    │   ├── FaqAndCorridors.tsx        # 5 candid custom building FAQs accordion
    │   ├── EnquiryForm.tsx            # Interactive Private Consultation & Lot Walk project brief
    │   └── Footer.tsx                 # Deep Espresso architectural footer + RGV corridors
    └── app/                           # Multi-route pages
        ├── layout.tsx                 # Global shell, JSON-LD HomeAndConstructionBusiness schema
        ├── page.tsx                   # Flagship 10-chapter homepage (/)
        ├── portfolio/page.tsx         # Filterable portfolio archive & case studies (/portfolio)
        ├── process/page.tsx           # 5-phase Bluebonnet Method & timelapse (/process)
        ├── about/page.tsx             # Michael & Ana founders story (/about)
        ├── resources/page.tsx         # Cost Guide PDF & 6 South Texas building guides (/resources)
        └── contact/page.tsx           # Private Consultation & Mission studio details (/contact)
```

---

## 3. Customization Guide

### Updating Phone Number, Address, or Social Links
Open [`src/config/site.ts`](src/config/site.ts) and edit `SITE_CONFIG`:
- `phone`: Display phone number (currently `(956) 555-0198`)
- `phoneHref`: Click-to-call `tel:` URI
- `email`: Studio contact email (`info@bluebonnethomesrgv.com`)
- `address`: Studio address (`2112 S Shary Rd, Ste 252, Mission, TX 78572`)
- `socials`: Instagram, Facebook, and YouTube URLs

### Adding or Editing Portfolio Homes
Open [`src/config/site.ts`](src/config/site.ts) and edit the `PORTFOLIO_HOMES` array. Each residence entry supports:
- `id`, `index`, `name`, `style`, `location`, `sqft`, `beds`, `baths`, `stories`, `year`
- `heroImage`: Primary exterior elevation path
- `summary` & `architecturalNotes`: Editorial narrative
- `features`: Array of architectural highlights
- `gallery`: Array of room-by-room photographs (`src`, `caption`, `category`)

Both the Homepage Portfolio Showcase and the `/portfolio` Case Study Archive automatically update from `PORTFOLIO_HOMES`.

### Replacing or Extending the 4K Hero Video or Day-to-Night Sequence
- **Hero Video:** Located at `public/videos/header-video-design.mp4` (`3840×2160` 4K UHD, sourced from `ASSETS/reference image for video gen/header video design.mp4`).
- **Day-to-Night Lighting States:** Located at `public/images/day-night/01-daylight.jpg`, `02-golden-hour.jpg`, `03-blue-hour.jpg`, and `04-night.jpg` (`1672×941`, `0.0px` structural drift). Configuration and Kelvin telemetry labels live in `DAY_NIGHT_STATES` inside [`src/config/site.ts`](src/config/site.ts).
