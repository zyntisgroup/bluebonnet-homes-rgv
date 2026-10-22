# Bluebonnet Homes RGV — Visual Asset Audit & Photographic Art Direction Report

**Audit Date:** October 22, 2026  
**Project Workspace:** `d:\side job\website dev\developed websites\blue bonnet homes\V2`  
**Total Source Assets Inspected:** 113 files across `ASSETS/original/` and `ASSETS/reference image for video gen/`  

---

## 1. Executive Summary

Every visual asset in the project repository was inspected programmatically (dimensions, aspect ratio, format, byte size, bitrate) and visually evaluated for lighting realism, architectural composition, color temperature, and watermark artifacts.

### Key Discoveries
1. **4K Master Hero Architectural Video (`header video design.mp4`):**
   - Located at `ASSETS/reference image for video gen/header video design.mp4` (`52,561.9 KB`, `3840×2160` 4K UHD, `30.00 fps`, `19.0s` duration, `22.6 Mbps` H.264).
   - Depicts the flagship Bluebonnet Homes contemporary residence (**"1620" / The Onyx & Ivory**) progressing through architectural construction and lighting transformation.
   - Deployed to `public/videos/header-video-design.mp4` for the Hero and scroll-linked transformation experience.
2. **Pixel-Locked Multi-State "1620" Residence Masters (`basic reference/`):**
   - `Modern Luxury Home with Landscaped Driveway-1.png` (`1671×941`, `2,621.8 KB`) — Clean, watermark-free **Bright South Texas Daylight** master of the "1620" residence.
   - `March-2026-Blogs-Images-2.png` (`1672×941`, `2,438.9 KB`) — Clean, watermark-free **Twilight / Sunset Dusk** master locked to the **exact same camera tripod position and lens focal length**, featuring warm 2700K soffit downlights, vertical column sconces, interior chandelier illumination, landscape uplights, and wet-paver specular reflections.
   - `house_self_constructing_midstage.jpg` (`1376×768`, `310.7 KB`) & `house_self_constructing_latestage.jpg` (`1376×768`, `320.6 KB`) — Pixel-locked mid-stage CMU block/truss framing and late-stage enclosure renders from the exact same camera perspective.
3. **4-State Pixel-Locked Day-to-Night Sequence (`public/images/day-night/`):**
   - Using the `1672×941` Daylight and Dusk masters, we synthesized a 4-state pixel-locked radiometric sequence (`01-daylight.jpg`, `02-golden-hour.jpg`, `03-blue-hour.jpg`, `04-night.jpg`) with `0.0px` structural drift and top-down sky-flood segmentation so clouds, rooflines, and warm 2700K architectural light pools transition seamlessly on scroll.
4. **Portfolio MLS Watermark Remediation (`public/images/optimized/`):**
   - Several original portfolio photos in `bentley-blanc`, `via-cantera`, and `andalusian` were sourced at `700×525` (`4:3`) with a faint `"GREATER McALLEN ASSOCIATION OF REALTORS"` watermark in the bottom-right corner (`y > 94.2%`).
   - All originals are preserved untouched in `ASSETS/original/` and `public/images/originals/`, while `public/images/optimized/` contains clean, symmetrically framed derivatives with the bottom-right MLS watermark removed.

---

## 2. Hero, Video & Day-to-Night Master Assets (`ASSETS/reference image for video gen/`)

| File Path | Format | Resolution / Specs | Size | Visual Assessment & Role |
| :--- | :--- | :--- | :--- | :--- |
| `header video design.mp4` | MP4 (H.264) | `3840×2160` · 30fps · 19s | 51.3 MB | **Flagship Hero Video.** True 4K UHD architectural progression of the "1620" Onyx & Ivory residence. Used in the pinned Hero scroll showcase (`public/videos/header-video-design.mp4`). |
| `basic reference/Modern Luxury Home with Landscaped Driveway-1.png` | PNG | `1671×941` (`16:9`) | 2.56 MB | **Daylight Master (State 1).** Crisp 5500K South Texas sunlight, warm ivory stucco, charcoal fascia, landscaped stone pavers, zero watermarks. |
| `basic reference/March-2026-Blogs-Images-2.png` | PNG | `1672×941` (`16:9`) | 2.38 MB | **Golden/Dusk Master (State 2/3 Base).** Pixel-locked to the Daylight Master; warm 2700K soffit recessed lights, vertical column sconces, foyer chandelier, and driveway reflections. |
| `basic reference/house_self_constructing_midstage.jpg` | JPEG | `1376×768` (`16:9`) | 310.7 KB | **Construction Stage 1 (Framing & Masonry).** Pixel-locked CMU block walls, roof trusses, and sod rolls (`public/images/day-night/stage-01-framing.jpg`). |
| `basic reference/house_self_constructing_latestage.jpg` | JPEG | `1376×768` (`16:9`) | 320.6 KB | **Construction Stage 2 (Enclosure & Cladding).** Pixel-locked stucco coat, glass balcony, and paver grid (`public/images/day-night/stage-02-enclosure.jpg`). |
| `basic reference/house_recreated.jpg` | JPEG | `1376×768` (`16:9`) | 275.8 KB | Completed daylight reference matching the construction stages. |
| `basic reference/AI Vid gen 1.mp4` | MP4 | 14.0s · 30fps | 2.75 MB | Continuous blueprint → 3D massing → framing → daylight → twilight timelapse (`public/videos/construction-timelapse.mp4`). Note: small bottom-right watermark masked via `object-fit` crop when displayed. |

---

## 3. Brand & Document Assets (`ASSETS/original/brand/`)

| File Name | Format | Dimensions | Size | Assessment & Usage |
| :--- | :--- | :--- | :--- | :--- |
| `blubonnet-logo.svg` | SVG | Vector | 39.0 KB | Primary Bluebonnet Homes vector mark + wordmark for light ivory/limestone backgrounds (`public/brand/blubonnet-logo.svg`). |
| `blubonnet-logo-white.svg` | SVG | Vector | 37.8 KB | Inverted white/gold vector logo for dark espresso & nocturnal sections (`public/brand/blubonnet-logo-white.svg`). |
| `portfolio-logos-3.png` | PNG | `1999×1999` (`1:1`) | 780.7 KB | High-res brand crest over blue-tinted "1620" residence backdrop (` QUALITY · CRAFTSMANSHIP · TEXAS TRADITION `). |
| `Bluebonnet-Homes-Cost-Guide.pdf` | PDF | Multi-page | 6.84 MB | Official verified **Custom Home Cost Guide PDF** (`public/documents/Bluebonnet-Homes-Cost-Guide.pdf`). Linked directly in the Cost Guide CTA and Resources page. |

---

## 4. Portfolio Residence 01 — The Onyx & Ivory (Edinburg, TX · 2025)

**Directory:** `ASSETS/original/onyx-ivory/` (18 WebP + 1 PNG)  
**Resolution:** `1024×681` to `1024×683` (`3:2` aspect ratio)  
**Architectural Style:** Bold Contemporary / Transitional · 2,700 sq ft · 4 Bed · 3.5 Bath  

| File Name | Dimensions | Size | Visual Subject & Art Direction Notes |
| :--- | :--- | :--- | :--- |
| `hero-exterior-daylight.jpg` *(from 1620 Master)* | `1672×941` | 360 KB | **Primary Exterior Hero.** Clean high-res front elevation without neighboring construction clutter. |
| `hero-exterior-golden-hour.jpg` *(from 1620 Master)* | `1672×941` | 350 KB | **Twilight Exterior Hero.** Warm 2700K architectural lighting and sunset sky. |
| `modern-custom-home-exterior-mcallen.webp` | `1024×681` | 94.0 KB | Original MLS exterior front elevation of "1620" home (shows construction trailer on left lot; replaced in primary hero slots by the clean `1672×941` master). |
| `modern-home-front-entrance-walkway-south-texas.webp` | `1024×681` | 140.9 KB | **Entryway Detail.** Geometric faceted mahogany pivot door, twin charcoal columns with lattice sconces, octagonal stone stepping pads. |
| `two-story-living-room-modern-staircase.webp` | `1024×681` | 50.5 KB | **Great Room & Staircase.** Double-height white walls, black Nero Marquina marble fireplace wall, floating wood-and-steel staircase with glass balustrade, wine display room underneath. |
| `custom-wine-cellar-display-rack-black-metal.webp` | `1024×683` | 46.4 KB | **Custom Wine Display.** Under-staircase glass-enclosed wine room with dark veined stone backdrop and matte black horizontal racking. |
| `custom-kitchen-gas-stove-pot-filler.webp` | `1024×681` | 43.8 KB | **Culinary Craftsmanship.** Natural white-oak cabinetry, fluted wood range hood, commercial 6-burner gas range, matte-black wall-mounted pot filler, illuminated stone niches. |
| `modern-kitchen-island-light-wood-cabinets.webp` | `1024×681` | 67.1 KB | **Kitchen Island.** Waterfall stone island with warm oak cabinetry and matte black hardware. |
| `luxury-bathroom-freestanding-soaking-tub.webp` | `1024×681` | 136.6 KB | **Primary Bath Sanctuary.** Full-height dramatic veined marble slab walls, sculptural freestanding soaking tub, frameless dual-head rain shower, contemporary ring chandelier. |
| `spacious-double-vanity-bathroom-light-wood.webp` | `1024×681` | 26.0 KB | Floating natural oak double vanity with backlit mirrors. |
| `open-sliding-glass-doors-backyard-access.webp` | `1024×681` | 44.5 KB | Multi-panel black-framed glass doors connecting living area to covered patio. |

---

## 5. Portfolio Residence 02 — The Bentley Blanc (Edinburg, TX · 2024)

**Directory:** `ASSETS/original/bentley-blanc/` (26 JPEG files)  
**Resolution:** `697×385` (Twilight Hero) & `700×466` to `700×525`  
**Architectural Style:** Modern Mediterranean / Minimalist · 5,100 sq ft · 5 Bed · 6 Bath  

| File Name | Dimensions | Size | Visual Subject & Art Direction Notes |
| :--- | :--- | :--- | :--- |
| `genMbmob.427243_2_1-e1776196976349.jpg` | `697×385` | 46.1 KB | **Primary Exterior Twilight Hero.** Grand travertine-clad arched portico, warm soffit downlights, deep cobalt dusk sky, circular driveway, palm tree silhouette. Clean (no MLS watermark). |
| `genMbmob.427243_1_1.jpg` | `700×525` | 53.3 KB | **Aerial Estate Overview.** Drone perspective showing multi-hipped terra-cotta roof geometry, circular drive, and expansive lot footprint. |
| `genMbmob.427243_3_1.jpg` | `700×466` | 47.9 KB | **Rear Loggia & Columns.** Classical carved limestone columns, stained tongue-and-groove wood soffit ceiling with ceiling fan, covered patio overlooking lawn. |
| `genMbmob.427243_6_1.jpg` | `700×466` | 25.0 KB | **Custom Wrought-Iron Staircase.** Sculptural organic branch-motif black iron balustrade ascending to double-height landing. |
| `genMbmob.427243_5_1.jpg` | `700×466` | 22.9 KB | **En-Suite Bath.** Charcoal slate walk-in glass shower and crisp white shaker cabinetry. |
| `genMbmob.427243_16_1.jpg` | `700×466` | 25.1 KB | **Utility & Mudroom.** Floor-to-ceiling white cabinetry with patterned Mediterranean cement-tile backsplash. |

---

## 6. Portfolio Residence 03 — The Andalusian Estate (Edinburg, TX · 2016)

**Directory:** `ASSETS/original/andalusian/` (11 JPEG + 2 PNG files)  
**Resolution:** `700×367` to `700×525` (JPEGs) & `978×659` (`edinburg.png`, `edinburg-room.png`)  
**Architectural Style:** Tuscan / Spanish Mediterranean · 4,103 sq ft · 4 Bed · 4.5 Bath  

| File Name | Dimensions | Size | Visual Subject & Art Direction Notes |
| :--- | :--- | :--- | :--- |
| `rio-grande-valley-custom-home-construction-energy-efficient-design-south-texas.jpg` | `700×367` | 31.7 KB | **Primary Exterior Hero.** Two-story Spanish clay-tile roof, rusticated Texas limestone facade, double mahogany entry doors, twin stone mailbox columns. |
| `rio-grande-valley-custom-home-interior-grand-entrance-staircase-design-south-texas.jpg` | `700×465` | 33.9 KB | **Grand Foyer & Archways.** Carved cantera stone columns, circular mosaic floor medallion, ornate scrolled iron staircase, formal dining beyond. |
| `kitchen-interior-design-rio-grande-valley-custom-home-energy-efficient-building-texas.jpg` | `700×465` | 32.1 KB | **Chef's Kitchen & Great Room.** Rich espresso-stained alder cabinetry, dual exotic granite islands, travertine fireplace with custom bookshelves. |
| `rio-grande-valley-custom-builders-stress-free-energy-efficient-home-backyard-patio-south-texas.jpg` | `700×465` | 40.3 KB | **Covered Outdoor Veranda.** Dark stained wood ceiling, tropical leaf ceiling fans, limestone column, manicured lawn. |
| `rio-grande-valley-custom-home-construction-south-texas-backyard-view.jpg` | `700×465` | 39.0 KB | Rear elevation showing two-story stucco massing and clay tile roof eaves. |

---

## 7. Portfolio Residence 04 — The Via Cantera Estate (McAllen, TX · 2008)

**Directory:** `ASSETS/original/via-cantera/` (12 JPEG files)  
**Resolution:** `700×467` (`3:2`)  
**Architectural Style:** Classic Mediterranean Luxury · 4,774 sq ft · 5 Bed · 6 Bath  

| File Name | Dimensions | Size | Visual Subject & Art Direction Notes |
| :--- | :--- | :--- | :--- |
| `rio-grande-valley-custom-home-builders-south-texas-energy-efficient-luxury-residential-design.jpg` | `700×467` | 56.4 KB | **Primary Exterior Streetscape.** Warm Texas limestone portico, mature palms, arched windows, stone entry pillars. |
| `IM-SO1.jpg` | `700×467` | 54.3 KB | **Elevated Aerial Front View.** Shows expansive hipped tile roof, palm landscaping, and McAllen estate neighborhood context. |
| `rio-grande-valley-custom-kitchen-energy-efficient-appliances-south-texas-home.jpg` | `700×467` | 43.7 KB | **Warm Maple & Granite Kitchen.** Custom wood range hood, dramatic book-matched stone backsplash, expansive granite island, commercial stainless range. |
| `living-room-with-fireplace-custom-home-rio-grande-valley-south-texas.jpg` | `700×467` | 32.5 KB | **Great Room.** Warm hardwood floors, coffered ceiling, stone fireplace surround. |
| `elegant-interior-foyer-rio-grande-valley-home-custom-built-south-texas.jpg` | `700×467` | 27.7 KB | **Arched Foyer.** Warm Mediterranean plaster archways and travertine tile flooring. |

---

## 8. Process & Editorial Resource Assets (`ASSETS/original/general/` & `resources/`)

| File Name | Dimensions | Size | Assigned Section & Role |
| :--- | :--- | :--- | :--- |
| `general/6-1.png` | `960×540` | 91.4 KB | **Process Step 01 — Consultation & Architectural Planning.** Architectural blueprints, drafting compass, pencils, and measuring tape. |
| `general/7-1.png` | `960×540` | 131.9 KB | **Process Step 02 — Lot Evaluation & Site Engineering.** Precision optical site-survey level on tripod for RGV soil & drainage grading. |
| `general/8.png` | `960×540` | 168.8 KB | **Process Step 03 — Structural Framing & Roof Trusses.** Crisp upward angle of structural timber roof rafters and ridge beam. |
| `resources/Designing-a-Home-for-South-Texas-Weather-1.png` | `1920×1080` | 1.05 MB | **Resource Article 01 / Process Step 04.** Sunlit timber-framed interior structure. |
| `resources/March-2026-Blogs-Images-1.png` | `3226×1808` | 2.99 MB | **Resource Article 03 — What to Expect During Construction.** Ultra-high-res (`3.2K`) two-story custom home under construction with scaffolding, clay roof tiles stacked on eaves, and thermal insulation wraps. |
| `resources/March-2026-Blogs-Images-2.png` | `1920×1080` | 3.10 MB | **Resource Article 06 — Why Build a Custom Home.** Full HD twilight exterior of the "1620" flagship residence. |
| `resources/What-Makes-a-Great-Home-Site.png` | `1920×1080` | 1.00 MB | **Resource Article 04 — What Makes a Great Home Site.** Precision structural gable framing and hurricane truss ties against blue sky. |
| `resources/Energy-Efficient-Features.png` | `1920×1080` | 609.2 KB | **Resource Article 05 — Energy-Efficient Features.** Smart climate control panel and warm contemporary living space. |
| `resources/Best-Neighborhoods-in-the-Rio-Grande-.png` | `1920×1080` | 759.3 KB | **Resource Article 02 — Best Neighborhoods in the RGV.** Golden-hour residential streetscape. |
