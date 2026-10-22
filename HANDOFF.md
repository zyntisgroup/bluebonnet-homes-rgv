# Bluebonnet Homes RGV — Research Handoff

> **Purpose:** A clean starting point for a new conversation. It contains only client and business research, the original job context, and an inventory of client assets already downloaded.
>
> **Compiled:** 2026-10-22. Research was collected 2026-10-21 by a web-research subagent (search results + live site pages).

> [!WARNING]
> **Check before using in client-facing copy.** Most of this came from web searches and was not cross-checked by hand. Confirm these before they go on the site: the property specs and completion years (§4), the claims about competitors (§8), and the defects listed for the current site (§6).

---

## 1. Job Context (from the original brief)

### Upwork job posting (verbatim summary)
> "We need a web developer to redesign our website to make it more competitive against our top 3 competitors and better motivate custom home customers. The project includes improving the overall look, user experience, and conversion-focused messaging. After the redesign, we also need ongoing support for lower-cost hosting services. Please share examples of similar website redesigns and your approach to improving competitiveness and customer engagement. Preferably experience creating sites for home builders."
>
> **Skills listed:** Web Design, Web Development, WordPress, PHP

**What the client is actually asking for:**
1. Beat their **top 3 competitors** online.
2. **Motivate custom-home buyers**, with messaging aimed at conversion.
3. Better **look + UX**.
4. **Ongoing, lower-cost hosting** after launch (they currently pay for WordPress hosting, likely SiteGround, judging by the `siteground-optimizer-assets` paths).
5. Experience with **home builder** sites is preferred.

### Your pitch strategy (from the original brief)
- Win the job by DMing the client a **working demo** of the redesign.
- Host the demo on **Vercel**, so the client sees it without getting the source code.

> [!NOTE]
> The posting lists **WordPress / PHP**. A custom static or JS site on Vercel cuts hosting costs (it fits "lower-cost hosting"), but the client may expect to edit content in WordPress themselves. Decide early whether the pitch is "cheaper, faster custom site" or "rebuilt WordPress theme."

---

## 2. Business Profile

| Field | Value |
|---|---|
| **Name** | Bluebonnet Homes RGV |
| **Category** | Custom home builder ("Build on Your Lot") |
| **Address** | 2112 S Shary Rd Ste 252, Mission, TX 78572, USA |
| **Plus code** | 5PH5+X8 Mission, Texas |
| **Hours (Google)** | Opens 8 AM (full schedule not captured) |
| **Phone (as listed)** | +1 956-555-0198 ⚠️ *looks like a `555` placeholder. It is on the website AND the Google Maps listing* |
| **Website** | https://bluebonnethomesrgv.com/ |
| **Instagram** | https://www.instagram.com/bluebonnethomesrgv/ |
| **Founders / builders** | **Michael & Ana** |
| **Service area** | Mission, McAllen, Edinburg, Pharr, Weslaco, Harlingen (Rio Grande Valley, South Texas) |
| **Languages** | English + Mexican Spanish (full `/es/` mirror of the site) |
| **Current site built by** | Local agency **RGVision Media** (Elementor / WordPress) |

### Positioning in one line
A transparent, stress-free custom builder that **handles all the red tape** (permits, HOA approvals, utilities, site prep) and builds homes **engineered for South Texas heat**, with the same finish quality in every room.

---

## 3. Messaging & Copy (current site)

- **Primary headline:** *"Build your forever home, stress-free."*
- **Core value proposition:** *"We handle the complex permitting, site prep, and construction. You enjoy a transparent, energy-efficient build designed perfectly for your life in South Texas."*
- **Key positioning line:** *"You shouldn't have to micromanage contractors to get the quality you paid for."*
- **Founder trait (from reviews):** they build each home *"as if they were going to live in it themselves."*

### "The Bluebonnet Method" (3 pillars)
1. **Transparent Planning:** lot conditions, zoning, utility requirements, and fixed-cost contracts, all settled before ground breaks.
2. **Curated Design:** a streamlined selection process that avoids decision fatigue, using durable, heat-resilient materials.
3. **Milestone Construction:** updates arrive proactively at each milestone, instead of pulling clients into daily job-site problems.

### Climate differentiator
Thermal envelope insulation and HVAC engineered for RGV summers: spray foam, conditioned attics, Low-E dual-pane glass, SEER2 multi-stage HVAC, reflective roofing, and deep overhangs.

---

## 4. Build Process & Timeline (as published on `/process`)

| Phase | Duration | Contents |
|---|---|---|
| **01 · Discovery & Evaluation** | 4–8 weeks | City ordinance & zoning audit · utility access review · topographic & soil analysis · architectural drafting & selection curation · budget alignment & detailed cost breakdown |
| **02 · Curated Design** | — | 3D architectural renderings & walkthroughs · climate & energy engineering (HVAC, SHGC, insulation) · **fixed-cost contract with guaranteed pricing** |
| **03 · Red Tape & Prep** | 3–6 weeks | Municipal permits (McAllen, Edinburg, Mission…) · HOA ARC submissions · raw lot clearing · temporary power & utility setup |
| **04 · Construction** | 7–10 months | Foundation to final paint (depends on square footage and weather) |

The process page also has an FAQ accordion and a link to download the Cost Guide PDF.

---

## 5. Portfolio — 4 Featured Homes

| Home | Location | Year | Style | Size | Bed / Bath | Signature features |
|---|---|---|---|---|---|---|
| **The Onyx & Ivory** | Edinburg, TX | 2025 | Bold Contemporary / Transitional | 2,700 sq ft (lot 8,533.4 sq ft) | 4 / 3.5 | Glass-enclosed wine display room with black metal racks · floating open-riser staircase · floor-to-ceiling sliding glass doors · double vanity, light wood · freestanding soaking tub · indoor-outdoor patio |
| **The Via Cantera Estate** | McAllen, TX | 2008 | Classic Mediterranean Luxury | 4,774 sq ft | 5 / 6 | Hardwood floors · double-island chef's kitchen · grand foyer · tray ceilings with millwork · stone-clad spa primary bath · large masonry fireplace |
| **The Andalusian Estate** | Edinburg, TX | 2016 | Tuscan / Spanish Mediterranean | 4,103 sq ft | 4 / 4.5 | Barrel clay tile roof · natural stone facade · arched entryways · wrought-iron spiral staircase · two-story living area · maple cabinetry · custom walk-in closet |
| **The Bentley Blanc** | Edinburg, TX | 2024 | Modern Mediterranean / Minimalist | 5,100 sq ft | 5 / 6 | White & gray monochrome · dual symmetrical staircases · spherical iron chandeliers · multi-slide glass pocket doors |

Portfolio URLs: `/portfolio/the-onyx-ivory/`, `/portfolio/the-via-cantera-estate/`, `/the-andalusian-estate/`, `/the-bentley-blanc/`

**Portfolio mix:** mostly **Mediterranean / Spanish / transitional** family homes in the 2,700–5,100 sq ft range, plus one contemporary build (Onyx & Ivory).

---

## 6. Current Website — Structure & Problems

### Sitemap
- `/`: hero, value prop, 3-step Method teaser, swipeable featured-builds carousel, budget CTA
- `/about`: founding story, mission, philosophy, 4 client reviews
- `/process`: 4 phases, timeline, FAQ, Cost Guide PDF
- `/portfolio` + 4 property pages
- `/resources`: 6 articles (see §7)
- `/contact`: lead form with budget range + phone
- `/es/`: full Spanish mirror

### Current design system
- **Headings:** Cormorant Garamond (serif)
- **Body:** Manrope (sans-serif)
- **Colors:** Sage/olive `#7A8E6B` (primary accent) · White `#FFFFFF` · Charcoal `#1A1A1A` · muted cream/sand backgrounds
- **Logos:** `blubonnet-logo.svg` (dark) and `blubonnet-logo-white.svg` (reversed). Note that the filename misspells "blubonnet."

### Problems found (easy wins to point out in the pitch)
1. **Placeholder phone `(956) 555-0198`** in the nav, contact page, footer, and Google listing.
2. **Typo on the main CTA:** *"Recieve A Free Cost Guide"* on the home, about, and contact pages.
3. **Broken link:** on `/process`, "Guaranteed Pricing" links to `http://Energy%20Engineering`.
4. **Weak lead capture:** the Cost Guide PDF downloads with no email capture on `/process`, and `/contact` is a generic form with no instant value (no estimator).
5. **Testimonials are buried:** text-only blockquotes mid-page, with no photos, video, or link to the matching home.
6. **Low-res photography:** most portfolio JPGs are served at **700×466 px** (14–56 KB), so they look soft or pixelated when shown large.

---

## 7. Content / SEO Assets (`/resources`)

1. *What Makes a Great Home Site? Choosing the Right Lot for Your Custom Home*
2. *Designing a Home for South Texas Weather: Features That Improve Comfort Year-Round*
3. *Best Neighborhoods in the Rio Grande Valley for Building a New Home*
4. *Energy-Efficient Features Every New Home Should Have in South Texas*
5. *Custom Homes vs Pre-Built Homes in McAllen, TX*
6. *RGV Zoning Laws and Building Regulations for Custom Homes in McAllen, TX*

Lead magnet: **Bluebonnet Homes Cost Guide (PDF)**, downloaded locally (see §10).

---

## 8. Client Testimonials (verbatim, from the current site)

1. **Anthony & Michelle L.** (second-time buyers)
   > "We weren't even looking at new construction. We'd been in our house about five years... went in trying to find things wrong with it. Couldn't do it. The floor plan actually makes sense, there's storage in all the right places, and the finish work is solid even in the spots where most builders get lazy. You can tell Michael and Ana build these like they're going to live in them themselves."
2. **Dr. Robert & Linda K.** (experienced real-estate / renovation investors)
   > "I've been involved in building and renovating properties, so I know what to look for beyond the surface... Solid framing, clean mechanicals, and a level of consistency in the finish work that doesn't drop off once you leave the kitchen or the master suite. Most builders save their best work for the rooms they know buyers will focus on. Michael and Ana don't do that. Every room is built to the same standard."
3. **Alejandra & Luis R.** (first-time custom builders)
   > "Everything in the house felt like it was done on purpose, from the layout to the finishes... We were first-time buyers and had no idea what to expect, but Michael and Ana made the whole thing easy. They answered every question we had and never made us feel like we were asking too much."
4. **Daniel & Sarah M.** (quality-focused move-up buyers)
   > "The Bluebonnet home stood out because of the build quality. Not the stuff you see in listing photos, but the stuff most people miss. How the tile meets the wall. The way the cabinets are actually hung straight and flush... Stop looking at countertops and go look at how the house is put together."

**Recurring themes:** consistent quality in every room · honest, patient founders · thoughtful floor plans · craftsmanship you notice on close inspection.

---

## 9. Competitor Landscape (RGV custom builders)

> The client says "top 3 competitors" but never names them. These are the likely candidates from research. **Ask the client, or confirm, which 3 they mean.**

| Competitor | Segment | Strengths | Website / UX weaknesses | Bluebonnet angle |
|---|---|---|---|---|
| **Esperanza Homes** (`esperanzahomes.com`) | Volume / semi-custom, master-planned (Tres Lagos, McAllen, Brownsville) | Big brand, interactive design studio, "E-Difference" energy program, online lot reservation | Corporate, cookie-cutter subdivisions; doesn't serve private-lot or acreage buyers | The high-touch, one-of-a-kind alternative to a "subdivision box" |
| **Villanueva Construction** (`villanuevahomes.com`) | Veteran custom builder (est. 1985, Martin Villanueva, McAllen/Edinburg) | 40-year legacy, Parade of Homes wins, personal builder story | Dated layout, crowded galleries, weak mobile, no pricing or timeline tools | Modern experience aimed at younger professionals (doctors, attorneys, executives) |
| **Infinity Custom Homes** (`infinityhomesrgv.com`) | High-end modern custom (Tres Lagos, Edinburg/McAllen) | Strong contemporary photos, active video reels | Little education, no clear process or price transparency; can intimidate buyers | Explain the process plainly with a milestone roadmap and transparent costs |
| **WestWind Homes** (`westwindhomes.com`) | Production + build-on-your-lot (RGV & Laredo) | Financing tools, move-in-ready inventory, low-down-payment messaging | Transactional, entry-level, no prestige | Lead with build quality: "look at how the house is put together" |
| **Sorrento Fine Homes** (Mission/McAllen) | Boutique luxury Mediterranean | Master Builder credentials, strong luxury-neighborhood presence, bilingual | Minimal web presence; relies on word of mouth and Houzz | A far better digital discovery experience |

**Where Bluebonnet can stand out:** transparency (fixed price, published timelines), handling all the red tape, heat-engineered homes, consistent quality in every room, bilingual service, and founder-led personal attention.

---

## 10. Downloaded Client Assets (already local)

**Root:** `d:\side job\website dev\developed websites\blue bonnet homes\assets\original\`
**Manifest with source URLs:** `assets\asset-manifest.json`

| Folder | Count | Notes |
|---|---|---|
| `onyx-ivory/` | 18 `.webp` + 1 `.png` | Exterior, entry walkway, kitchen island, gas stove, wine cellar, staircase, living room, sliding doors, baths, bedroom, backyard. Resolution not measured (some source files say "scaled within 1536×1152") |
| `bentley-blanc/` | 32 `.jpg` | Named `genMbmob.427243_*`, so they need visual sorting. **~700×466 px** |
| `andalusian/` | 14 `.jpg` + 2 `.png` | JPGs are **~700×466 px**. `edinburg.png` and `edinburg-room.png` are **1121×749** |
| `via-cantera/` | 15 `.jpg` | **~700×466 px** |
| `resources/` | 6 `.png` | Blog header images, **1920×1080** |
| `general/` | 3 `.png` | `6-1.png`, `7-1.png`, `8.png` |
| `brand/` | 2 `.svg` + 1 `.pdf` + 1 `.png` | `blubonnet-logo.svg`, `blubonnet-logo-white.svg`, `Bluebonnet-Homes-Cost-Guide.pdf`, `portfolio-logos-3.png` |

> [!NOTE]
> **Photo resolution:** most of the client's project photos are only **700×466 px** (14–56 KB each). That is the size the client's current site serves them at.
