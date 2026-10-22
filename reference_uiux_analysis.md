# Deliverable A: Deep UI/UX, Visual Identity & Layout Architecture Analysis

**Primary Motion & UI/UX Reference Website:** `https://nota.uprock.pro/` (`NŌTA | Writing Infrastructure for Modern Thinking`, designed by Alice & UPROCK Studio)  
**Client Brand & Legacy Reference Website:** `https://bluebonnethomesrgv.com/` (`Bluebonnet Homes | Custom Homes in South Texas`, Rio Grande Valley, TX)  
**Inspection Viewport Matrix:** Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`)  
**Total Desktop Document Scroll Height (`nota.uprock.pro`):** `24,306px` (`maxScrollY = 23,406px`, equivalent to `27.0×` viewport heights at `900px`)

---

## 1. Executive Summary & Architectural Thesis

The reference experience (`https://nota.uprock.pro/`) is a masterclass in **spatial, scroll-scrubbed editorial storytelling**. Rather than presenting a vertical stack of static marketing blocks (like the legacy `https://bluebonnethomesrgv.com/` site), the reference site treats the browser viewport as a **pinned 100vh cinema lens** (`position: sticky; top: 0px; height: 100vh`) inside extended scroll tracks (`2430px` to `5400px` tall) that translate vertical scroll progress (`0%` to `100%`) into continuous time, lighting, depth, and structural reveals.

### Core Experience Pillars
1. **Alternating Atmospheric Polarity (Daylight vs. Nighttime/Studio Dark):**
   - The narrative rhythm deliberately oscillates between **cool metallic twilight** (`.cover` radial gradient `#969CA6` → `#3A3C40`), **stark architectural daylight** (`.specs` and `.inside` on `#FFFFFF`), **deep obsidian cinema** (`.who`, `.paper`, and `.details` on `#000000`), and a **5-state identical-composition lighting/color transformation** (`.section-colors`), culminating in a warm daylight-reveal sticky footer (`.footer`).
2. **Architectural Wipes & Physical Mask Transitions:**
   - Sections never terminate with hard horizontal borders. Instead, negative-margin overlap containers (`margin-top: -100vh` or `-70vh`) physically wipe the viewport using:
     - **6-column vertical architectural curtains** (`.transition-specs` and `.paper__curtains`) with subtle `1px solid rgba(0, 0, 0, 0.2)` grid hairlines.
     - **4-row horizontal stepped black shutters** (`.who-transition`) expanding from the center outward (`width: 0%` → `100%`).
     - **Expanding circular iris portal** (`.inside__transition`) scaling a `40.32vw` white circle from `scale(0)` to `scale(4.5)`.
     - **25-strip horizontal venetian blinds** (`.inside__blinds`) shrinking `height: 100%` → `0%` simultaneously across full-bleed photography.
3. **Scroll-Linked Object Continuity & Multi-State Lighting:**
   - Hero hardware rotates and translates across a 75-frame WebP Lottie sequence (`0_refinedcover_03_09.json`) scrubbed directly by scroll (`scrollY = 0..1530px`).
   - In `.section-colors` (`scrollY = 20716..23866px`), 5 full-bleed `1920×1080` renders (`nota_scene_7_img_01.jpg` through `05.jpg`) share **100% identical camera perspective, focal length, and object coordinates**, crossfading seamlessly across 5 distinct lighting and material moods as the visitor scrolls.
4. **Adaptive Responsive Bifurcation (`991px` Threshold):**
   - On Desktop (`> 991px`), the site runs full Lenis smooth scrolling (`duration: 1.2, lerp: 0.08`), pinned `100vh` sticky stages, and declarative keyframe scrubbing (`do.js`).
   - On Tablet and Mobile (`<= 991px`), all heavy scroll-scrubbed sections are hidden (`display: none`) and replaced by dedicated `--static` DOM sections (`.cover--static`, `.specs--static`, `.who--static`, `.paper--static`, `.inside--static`, `.details--static`, `.section-colors--static`) utilizing touch-friendly **Swiper.js** carousels and native vertical scrolling.

---

## 2. Complete Page Section Hierarchy & Pacing Map

The table below documents every top-level section in DOM order on Desktop (`1440×900`), confirmed via live DOM inspection and computed style probing:

| # | DOM ID & Class | Section Name | Top `Y` (`px`) | Height (`px` / `vh`) | Sticky Camera | Background / Polarity | Pacing & Emotional Role | Key Reference Screenshots |
| :- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0** | `#insu3xrls_0` `.preload` | **Initial Preloader Overlay** | `0` (Fixed) | `900px` (`100vh`) | `position: fixed; inset: 0; z-index: 1000` | Radial `#969CA6` → `#3A3C40` | **Anticipation (2.6s lock):** Counts `0%` → `100%` in `Instrument Serif` (`6.94vw`), then fades out (`1.0s`). | `00_preloader_counter_active.png`, `00b_preloader_counter_100pct.png` |
| **H** | `#ibwupc86g_0` `.header` | **Adaptive Fixed Header** | `0` (Fixed) | `84px` | `position: fixed; top: 0; z-index: 100` | Transparent (`--header-color` switches `#FFF` ↔ `#000`) | **Wayfinding & Conversion:** Hides on scroll down (`>6%`), reveals on scroll up; houses persistent CTA card. | `01_hero_scroll_00pct_y0.png`, `09_specs_heading_enter_y2450.png` |
| **1** | `#ir47l3u8h_0` `.cover` | **Hero — 75-Frame Scroll Scrub** | `0` | `2,430px` (`270vh`) | `#ilcbx1fvg_0` (`100vh`) | Radial `#969CA6` → `#3A3C40` (Cool Twilight) | **Dramatic Immersion:** 3D object rotates from vertical macro nib to horizontal profile while H1 anchors bottom-left. | `01_hero_scroll_00pct_y0.png` – `05_hero_scroll_88pct_y1350.png` |
| **T1** | `#iib2p854e_0` `.transition-specs` | **Transition 1 — 6-Column Vertical Curtain Wipe** | `1,530` (`-100vh` margin) | `1,620px` (`180vh`) | `#ir8e303m4_0` (`100vh`) | Darkening veil (`rgba(0,0,0,0.75)`) → `#FFFFFF` curtains | **Architectural Palette Cleanser:** 6 staggered white columns rise from `y: 100%` → `0%`, wiping twilight into stark daylight. | `06_transition1_curtains_start_y1550.png` – `08_transition1_curtains_complete_y2150.png` |
| **2** | `#ig5resaoj_0` `.specs` | **Specifications — Frosted Glass Over Hardware** | `2,250` (`-20vh` margin) | `2,700px` (`300vh`) | `#io4jf4ysb_0` (`100vh`) | Pure Daylight `#FFFFFF` | **Precision Engineering:** Centered serif header rises; vertical pen ascends behind 3 `backdrop-filter: blur(30px)` spec cards. | `09_specs_heading_enter_y2450.png` – `12_specs_all_cards_complete_y4050.png` |
| **T2** | `#iljeh1gyu_0` `.who-transition` | **Transition 2 — 4-Row Stepped Black Shutters** | `4,320` (`-70vh` margin) | `1,620px` (`180vh`) | `#i0b3v1m0a_0` (`100vh`) | Daylight `#FFFFFF` → 4 expanding `#000000` bars | **Cinematic Blackout:** 4 horizontal black bars (`1fr 2fr 2fr 2fr`) expand from center (`width: 0%` → `100%`) bottom-to-top. | `13_transition2_bars_start_y4450.png` – `15_transition2_bars_complete_y4980.png` |
| **3** | `#iihsgh87l_0` `.who` | **Who It's For — Editorial Illumination & Video Stage** | `5,040` | `3,892px` (`432vh`) | `#i7d5a87x7_0` (`100vh` video stage) | Pure Obsidian `#000000` | **Contemplative Manifesto:** Character-by-character text illumination (`#666` → `#FFF`), 3 right-aligned theses, and scaling 1080p video (`0.5` → `1.0` → `0.68`). | `16_who_text_illumination_start_y5350.png` – `20_who_video_shrink_shift_left_y7850.png` |
| **4** | `#ikrvtklue_0` `.paper` | **Smart Paper — Curtain Drop & 4-Slide Zoom Showcase** | `8,932` | `5,400px` (`600vh`) | `#iw267972p_0` (`100vh`) | White cover `#FFFFFF` → Black curtains → Dark studio slides | **Deep Technical Storytelling (Longest Section):** White cover drops 6 black curtains that part to reveal 4 full-screen slides cross-scaling (`1.4` → `1.0` → `0.6`). | `21_paper_cover_white_y8950.png` – `30_paper_slide4_settled_y12900.png` |
| **T3** | `#inmw53la5_0` `.inside__transition` | **Transition 3 — Expanding White Iris Circle** | `13,432` (`-100vh` margin) | `2,070px` (`230vh`) | `#i8l7r12v5_0` (`100vh`) | Obsidian `#000000` → Expanding `#FFFFFF` circle | **Portal to Daylight:** A centered `40.32vw` white circle scales `0` → `4.5` while `"Inside the box"` fades in at the center. | `31_transition3_circle_start_y13650.png` – `33_transition3_circle_full_white_y14600.png` |
| **5** | `#ir9soeuwq_0` `.inside` | **Inside the Box — Venetian Blinds & Editorial Split** | `15,502` | `2,700px` (`300vh`) | Three `100vh` sub-stages | Pure Daylight `#FFFFFF` (`#F5F5F5` cards) | **Tactile Unboxing:** Two 25-strip venetian blind photo reveals flanking a centered character-illuminated serif statement (`#DDD` → `#000`). | `34_inside_blinds1_opening_y15150.png` – `38b_inside_adapter_hover_state.png` |
| **6** | `#ivurrxt0z_0` `.details` | **Product Details — Rounded Bento & Pill Video** | `18,202` | `2,514px` (`279vh`) | Natural scroll w/ scroll-linked zoom | Pure Obsidian `#000000` | **Tactile Craftsmanship:** 3-row asymmetrical bento grid (`border-radius: 5.56vw` & `13.89vw` pills) + full-screen `27.78vw` pill video. | `39_details_bento_row1_y18100.png` – `41_details_pill_video_y19850.png` |
| **7** | `#itcx2nwlb_0` `.section-colors` | **Multi-State Identical-Composition Showcase** | `20,716` | `3,150px` (`350vh`) | `#i016b1k5q_0` (`100vh`) | 5 crossfading full-bleed atmospheric lighting states | **Climactic Visual Payoff:** Identical composition transforms across 5 lighting/material states with split serif typography. | `42_colors_state1_silver_y20750.png` – `50_colors_state5_bright_orange_y22950.png` |
| **F** | `#i6xdke8ib_0` `.footer` | **Sticky Reveal Footer** | `23,866` | `370px` (`29.93vw`) | `position: sticky; bottom: -0.1vw; z-index: 1` | Pure Daylight `#FFFFFF` | **Calm Resolution:** Uncovered from beneath `.section-colors` as the final scroll completes; displays giant `21.8vw` wordmark. | `51_footer_sticky_reveal_y23406.png` |

---

## 3. Visual Identity & Design System (Code-Verified)

### 3.1 Typography System
All typography is scaled fluidly using viewport-width (`vw`) units on Desktop (`1440px` reference = `1vw = 14.4px`), creating an editorial magazine proportion that scales identically across wide monitors.

| Role | Font Family | Weight / Style | Fluid Size (`vw`) | Computed (`1440px`) | Line Height | Letter Spacing | Usage in Reference Site |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Serif H1 / Section Titles** | `'Instrument Serif', serif` | `400` Regular | `6.94vw` | `100.0px` | `90%` (`0.90`) | `-0.28vw` (`-4.03px`) | `.title-h1`: Preloader counter, Hero H1, `"Nota pen / Specifications"`, `"Who it's for"`, `"Works with / smart paper"`, `"Inside the box"` |
| **Editorial Illumination Copy** | `'Instrument Serif', serif` | `400` Regular | `4.44vw` | `64.0px` | `100%` (`1.00`) | `-0.18vw` (`-2.59px`) | `.who__text1` (dark-to-light character illumination) & `.inside__text` (light-to-dark character illumination) |
| **Multi-State Split Display** | `'Instrument Serif', serif` | `400` Regular | `5.56vw` | `80.0px` | `90%` (`0.90`) | `-0.22vw` (`-3.17px`) | `.section-colors__text` (`"Impossible to / overthink"`, `"Graphite Black. / Clarity in silence."`, etc.) |
| **Slide Overlay Display** | `'Instrument Serif', serif` | `400` Regular | `4.44vw` | `64.0px` | `90%` (`0.90`) | `-0.18vw` (`-2.59px`) | `.paper__title` top-left headlines across the 4 Smart Paper slides |
| **Card Subheadings (H3)** | `'Inter Tight', sans-serif` | `500` Medium | `1.53vw` | `22.0px` | `120%` (`1.20`) | `-0.03vw` (`-0.43px`) | `.specs__card-title`, `.who__thesis-title`, `.paper__plate-title`, `.inside__card-title`, `.details__card-title` |
| **Primary Body Copy** | `'Inter Tight', sans-serif` | `400` Regular | `1.11vw` | `16.0px` | `135%` (`1.35`) | `-0.02vw` (`-0.29px`) | `.text-body`: Spec bullet items, thesis descriptions, frosted plate copy, bento card captions |
| **Navigation & UI Micro-Copy** | `'Inter Tight', sans-serif` | `500` Medium | `0.97vw` | `14.0px` | `120%` (`1.20`) | `-0.02vw` (`-0.29px`) | `.header__link`, `.header__btn`, `.footer__link` |
| **Giant Footer Wordmark** | `'Inter Tight', sans-serif` | `500` Medium | `21.8vw` | `313.9px` | `80%` (`0.80`) | `-0.87vw` (`-12.5px`) | `.footer__logo` (`Nōta` giant cropped bottom wordmark) |

### 3.2 Color & Surface Token Architecture
 Extracted directly from `:root` in `shared-design-styles.css` and inline section styles:

- **Core Surface Tokens:**
  - `--color-white`: `#FFFFFF` (Used on `.specs`, `.paper__cover`, `.inside`, `.footer`, and `.header__card`)
  - `--color-black`: `#000000` (Used on `.who`, `.paper`, `.details`, `.who-transition__bar`)
  - `--color-gray-bg`: `#F5F5F5` (Used on `.inside__card` surfaces)
  - `--color-dark-card`: `#141414` (Used on `.details__card` surfaces over `#000000` canvas)
  - `--bc-main-radial`: `radial-gradient(farthest-corner at 50% 0%, #969CA6 0%, #3A3C40 80%)` (Used on `.preload` and `.cover`)
- **Typography & Accent Tokens:**
  - `--color-text-gray`: `#7A7A7A` (Used for dual-tone H1 secondary words like `"Nota pen"` above `"Specifications"`, muted pricing `• $300`, and secondary captions)
  - `--color-char-unlit-dark`: `#666666` → illuminates to `#FFFFFF` in `.who__text1`
  - `--color-char-unlit-light`: `#DDDDDD` → illuminates to `#000000` in `.inside__text--animation`
  - **State 5 Editorial Contrast Token:** `#4A154B` (Deep plum serif text over the warm sunset-orange gradient in `.section-colors` State 5)
- **Glassmorphism & Translucent Surfaces:**
  - **Light Frosted Glass (`.specs__card-head`, `.specs__card-body`):** `background-color: rgba(245, 245, 245, 0.6); backdrop-filter: blur(30px); border-radius: 0.83vw (12px)`
  - **Dark Frosted Glass (`.paper__plate-top`, `.paper__plate-bottom`):** `background-color: rgba(38, 38, 38, 0.6); backdrop-filter: blur(25px); border-radius: 0.83vw (12px)`
  - **Dark Bento Pill Overlay (`.details__card-info`):** `background-color: rgba(20, 20, 20, 0.75); backdrop-filter: blur(20px)`

---

## 4. Header, Navigation & Micro-Interaction Mechanics

### 4.1 Smart Scroll-Direction & Color-Switching Header (`#ibwupc86g_0`)
Confirmed from inline script #5 and #6 in `steps\31\output.txt`:
1. **Scroll-Direction Auto-Hide/Reveal:**
   - The script tracks `window.scrollY` vs `lastScrollY` and calculates `scrollPercent = (scrollTop / docHeight) * 100`.
   - Below `6%` of total page scroll (`scrollY < 1404px`), the header is always visible (`transform: translateY(0)`).
   - Past `6%`, scrolling down (`diff > 5px`) applies `.header--hidden` (`transform: translateY(-101%); transition: transform 0.35s ease`).
   - Scrolling upward (`diff < -5px`) immediately removes `.header--hidden`, sliding the header back into view.
2. **Scroll-Position Polarity Switching (`--header-color`):**
   - An inline listener evaluates `scrollPercent` against an array of dark-background ranges (`whiteRanges`):
     - `0.00% – 8.17%` (Hero `.cover`) → `--header-color: #ffffff`
     - `8.17% – 20.51%` (`.specs` on white) → `--header-color: #000000`
     - `20.51% – 37.58%` (`.who` on black) → `--header-color: #ffffff`
     - `37.58% – 40.83%` (`.paper__cover` on white) → `--header-color: #000000`
     - `40.83% – 58.60%` (`.paper` dark slides) → `--header-color: #ffffff`
     - `58.60% – 76.29%` (`.inside` on white) → `--header-color: #000000`
     - `76.29% – 100.0%` (`.details` & `.section-colors`) → `--header-color: #ffffff`
   - Meanwhile, the right-aligned `.header__card` (`background: #FFFFFF; padding: 0.56vw; border-radius: 0.56vw; width: 29.86vw`) remains permanently white with a black CTA button (`#iv8a34qce_0` `"Order Nota One • $300"`), creating a high-contrast floating island that never loses visibility.

### 4.2 3-Layer GSAP ScrambleText Hover Effect (`inlineScript #3`)
Every navigation link (`.header__link`), footer link (`.footer__link`), CTA button (`.header__btn`), and even the Hero H1 (`#i4h3z9g0c_0`) is wrapped at runtime into three stacked spans:
- `.scramble-base` (holds layout metrics; `opacity: 0` during animation)
- `.scramble-ghost` (foreground random-character scramble layer using charset `"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"`)
- `.scramble-ghost2` (secondary offset scramble layer at `opacity: 0.6`)
- **Hover Behavior:** On `mouseenter`, GSAP runs a `0.6s` (`power2.out`) character-decoding sweep across the link text (`delayStep = 0.025s` per character, `3` random ticks per character before locking the real glyph).

### 4.3 Card Hover Swap in `.inside` (`#i5f34w28y_0`)
- In the third `100vh` stage of `.inside` (`scrollY = 17300px`), the right-hand card (`Charging Adapter`) includes an overlay layer `.inside__card-hover` (`#i79f5s34t_0`) with a dark inverted photograph (`new-scene_5_adapter.jpg`, `1340×1620`).
- Hovering the card crossfades `opacity: 0` → `1` (`transition: opacity 0.4s ease`), swapping both the product angle and the card's visual polarity from light gray (`#F5F5F5`) to dark studio charcoal.

---

## 5. Responsive Architecture (`<= 991px` Tablet & Mobile Breakdown)

Confirmed via `shared-design-styles.css` media queries (`@media (max-width: 991px)` and `@media (max-width: 479px)`) and our captured Tablet (`768×1024`) and Mobile (`375×812`) screenshots (`54_tablet_768_hero_static.png` through `60_mobile_375_inside_static.png`):

1. **Complete Deactivation of Scroll-Scrubbed Sticky Stages:**
   - At `max-width: 991px`, `.cover`, `.transition-specs`, `.specs`, `.who-transition`, `.who`, `.paper`, `.inside__transition`, `.inside`, `.details`, and `.section-colors` are set to `display: none !important`.
   - Lenis smooth scrolling (`window.innerWidth <= 991`), ScrambleText initialization, and preloader scroll-locking are bypassed in JS.
2. **Activation of Dedicated `--static` Sections & Touch Carousels:**
   - **Hero (`.cover--static`):** Displays a high-resolution vertical pen render (`nota_scene_1_static.png`, `620×1332`) centered above `"Smart pen / for real thinking"`, with a compact top bar (`Nōta` wordmark left, 9-dot grid menu icon `#ioefl52w2_0` center, mark icon right) and a full-width bottom CTA bar.
   - **Specifications (`.specs--static`):** Stacks the 3 frosted glass cards vertically on the left while pinning the vertical pen graphic on the right (`55_tablet_768_specs_static.png`).
   - **Smart Paper (`.paper--static`):** Converts the `600vh` 4-slide zoom sequence into a touch-swipeable **Swiper.js** horizontal carousel (`56_tablet_768_paper_swiper.png`).
   - **Multi-State Showcase (`.section-colors--static`):** Converts the `350vh` 5-state crossfade into a touch-swipeable **Swiper.js** gallery where each slide pairs its full-bleed background with centered split typography (`57_tablet_768_colors_swiper.png`).

---

## 6. Comparative Gap Analysis: `bluebonnethomesrgv.com` (Legacy) vs. `nota.uprock.pro` (Target Architecture)

Inspecting our baseline captures of `https://bluebonnethomesrgv.com/` (`61_bluebonnet_legacy_hero_y0.png` through `64_bluebonnet_legacy_testimonials_contact_y2800.png`) alongside `HANDOFF.md` reveals why the V2 redesign will be transformative:

| Dimension | Legacy `bluebonnethomesrgv.com` (Current) | Target V2 Inspired by `nota.uprock.pro` |
| :--- | :--- | :--- |
| **Spatial Architecture** | Standard WordPress vertical stack (`~3600px` total height); zero sticky stages; static sections scroll past immediately. | Extended scroll-scrubbed theatre (`~20,000px+` desktop track) with pinned `100vh` viewports where scenes evolve in place. |
| **Hero Experience** | Static darkened photo (`Hero-Image.png`) with utility top-bar, white navbar, gold button (`"RECIEVE A FREE COST GUIDE"` typo), and cookie banner clutter. | Full-bleed pinned architectural canvas with scroll-scrubbed spatial/lighting progression, floating high-contrast CTA island, and editorial serif display typography. |
| **Lighting & Time Storytelling** | Static daytime snapshots placed in a 4-column thumbnail grid (`62_bluebonnet_legacy_philosophy_gallery_y900.png`). | **Pinned Day-to-Night Architectural Transitions:** Identical-composition custom luxury homes transforming continuously from bright South Texas morning sun → golden hour → twilight → illuminated night as the user scrolls. |
| **Section Transitions** | Abrupt horizontal cuts between white (`#FFFFFF`), off-white (`#F8F9FA`), and navy (`#0D2B4E`). | Physical architectural wipes: 6-column vertical limestone/white plaster curtains, 4-row stepped dark bronze shutters, expanding circular architectural iris, and 25-strip horizontal louver blinds. |
| **Data & Specification Presentation** | Flat 3-column icon cards and bullet lists (`63_bluebonnet_legacy_services_projects_y1800.png`). | Staggered `backdrop-filter: blur(30px)` glassmorphic cards floating over rising architectural elevation drawings/renders, plus rounded bento detail showcases. |
