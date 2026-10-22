# Deliverable B: Exhaustive Scroll Animation & Motion Engineering Specification

**Primary Reference Website:** `https://nota.uprock.pro/`  
**Target Application:** Bluebonnet Homes RGV V2 (Luxury Custom Home Builder Interactive Scroll Experience)  
**Desktop Reference Viewport:** `1440×900` (`maxScrollY = 23,406px`, Total Document Height = `24,306px`)

---

## 1. Animation Engine & Runtime Stack (Code-Confirmed)

Direct inspection of the loaded scripts, DOM attributes, and inline `<script>` blocks (`steps\31\output.txt`) confirms that `https://nota.uprock.pro/` combines four synchronized layers of motion control on Desktop (`> 991px`):

### 1.1 Smooth Scroll Physics: Lenis v1.3.8 (`inlineScript #2`)
```js
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
  smoothWheel: true,
  wheelMultiplier: 1.0,
  touchMultiplier: 1.5,
  lerp: 0.08
});
```
- **Why this matters:** Because `lerp: 0.08` and `duration: 1.2` apply an exponential low-pass filter to raw mouse-wheel ticks, every `window.scrollY`-driven animation (including linear `SCROLL_TRANSFORM` keyframes and Lottie frame scrubbing) automatically inherits a weighted, cinematic deceleration curve even when the keyframe math itself is linear.

### 1.2 Declarative Scroll-Timeline Engine: Taptop `do.js` (`#data_do_json`)
- All structural transitions, curtain wipes, card reveals, scale zooms, venetian blinds, and multi-state crossfades are defined inside `<script id="data_do_json" type="application/json">` using `SCROLL_TRANSFORM` timelines.
- **How `SCROLL_TRANSFORM` calculates progress (`0%` → `100%`):**
  - Each timeline binds to a `source` container ID (e.g., `#iib2p854e_0` `.transition-specs`) with a `start` anchor (`{"object": "SELF", "Point": "TOP"}` vs viewport `TOP` or `BOTTOM`) and an `end` anchor (`{"object": "SELF", "Point": "BOTTOM"}` vs viewport `BOTTOM` or `TOP`).
  - As the user scrolls through the container's active pixel range, `do.js` normalizes progress $p \in [0, 100]$ and linearly interpolates CSS properties (`opacity`, `transform: translate3d / scale3d`, `width`, `height`, `backgroundColor`) between defined `keyframes` (`position: 0..100`).

### 1.3 Scroll-Scrubbed Frame Sequence: Lottie Player v2.0.4 (`inlineScript #1`)
- The Hero section (`#ir47l3u8h_0` `.cover`) embeds `<lottie-player id="lottie-cover" src="/f/0_refinedcover_03_09.json">`.
- `0_refinedcover_03_09.json` (`2.16 MB`) is a `1920×1080` sequence (`fr: 25`, `ip: 0`, `op: 75`) containing **75 pre-rendered base64 WebP frames** (`image_0` through `image_74`) of a photorealistic 3D pen rotating and translating in studio lighting.
- **Scrubbing Formula (`inlineScript #1`):**
  ```js
  const maxScroll = parent.offsetHeight - window.innerHeight; // 2430 - 900 = 1530px
  const scrollFraction = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
  const frame = Math.floor(scrollFraction * totalFrames); // 0 to 75
  player.seek(frame);
  ```

### 1.4 Character-by-Character Scroll Illumination (`inlineScript #7` & `#8`)
- Both `.who__text1` (`#i0pakxea2_0`) and `.inside__text--animation` (`#iwep58hh2_0`) split their text nodes into individual `<span class="char">` elements on load and update each character's color on `scroll` based on the element's bounding rect relative to the viewport center.

---

## 2. Complete Section-by-Section Motion Inventory & Keyframe Matrix

### Effect 0: Initial Preloader Counter & Fade (`#insu3xrls_0` `.preload`)
- **Screenshots:** `00_preloader_counter_active.png`, `00b_preloader_counter_100pct.png`
- **Trigger:** `DOMContentLoaded` (time-driven, independent of scroll; locks `lenis.stop()` and `body { overflow: hidden }` for `2600ms`).
- **Motion & Timing:**
  1. Counter (`#i94n0o1f4_0`) interpolates integer text from `0%` to `100%` over `1400ms` using `easeInOutQuart`:
     $$\text{easeInOutQuart}(t) = \begin{cases} 8t^4 & t < 0.5 \\ 1 - \frac{(-2t + 2)^4}{2} & t \ge 0.5 \end{cases}$$
  2. At `t = 1400ms`, `#insu3xrls_0` animates `opacity: 1` → `0` over `1000ms` (`transition: opacity 1s ease 1.4s`).
  3. At `t = 2600ms`, scroll lock is released (`lenis.start()`).

---

### Effect 1: Hero 75-Frame 3D Hardware Rotation Scrub (`#ir47l3u8h_0` `.cover`)
- **Screenshots:** `01_hero_scroll_00pct_y0.png` (`0%`), `02_hero_scroll_20pct_y300.png` (`20%`), `03_hero_scroll_42pct_y650.png` (`42%`), `04_hero_scroll_65pct_y1000.png` (`65%`), `05_hero_scroll_88pct_y1350.png` (`88%`)
- **Scroll Track:** `top: 0px`, `height: 2430px` (`270vh`). Active scrub distance = `1530px` (`scrollY = 0` → `1530px`).
- **Sticky Camera:** `#ilcbx1fvg_0` (`position: sticky; top: 0; height: 100vh; overflow: hidden`).
- **Visual Progression Across Scroll:**
  - **`0%` (`scrollY = 0px`, Frame 0):** Macro vertical close-up of the fountain pen nib and grip pointing straight down along the vertical center axis (`x = 50%`). Bottom-left H1 `"Smart pen / for real thinking"` sits at `bottom: 2.22vw; left: 2.22vw`.
  - **`20%` (`scrollY = 300px`, Frame 15):** The pen tilts counter-clockwise (~35°) and pulls back slightly in Z-space, revealing the brushed aluminum barrel and specular studio rim light along the upper-left edge.
  - **`42%` (`scrollY = 650px`, Frame 32):** The pen reaches a perfectly horizontal orientation (`0°`) across the middle of the viewport (`y = 50%`), showing the black grip section, brushed silver barrel, and ribbed cap threads.
  - **`65%` (`scrollY = 1000px`, Frame 49):** The horizontal pen glides leftward (`translateX` within the 3D render), bringing the ribbed cap and clip into the center-right of the frame.
  - **`88%–100%` (`scrollY = 1350..1530px`, Frames 66–75):** The pen settles horizontally across the center-right as Transition 1's darkening veil and vertical white curtains begin rising over it.
- **Reversibility:** 100% reversible frame-by-frame via `player.seek(frame)` when scrolling upward.

---

### Effect 2: Transition 1 — 6-Column Staggered Vertical Curtain Wipe (`#iib2p854e_0` `.transition-specs`)
- **Screenshots:** `06_transition1_curtains_start_y1550.png`, `07_transition1_curtains_mid_y1850.png`, `08_transition1_curtains_complete_y2150.png`
- **Scroll Track:** `top: 1530px` (`margin-top: -100vh` overlapping `.cover`), `height: 1620px` (`180vh`). Active range: `scrollY = 1530px` → `2250px` (`720px` scroll distance).
- **Sticky Camera:** `#ir8e303m4_0` (`position: sticky; top: 0; height: 100vh; display: grid; grid-template-columns: repeat(6, 1fr)`).
- **Keyframe Mechanics (`#data_do_json` confirmed):**
  1. **Darkening Veil (`#im29stx1x_0` `.transition-specs__bg`):**
     - `0%` → `25%`: `opacity: 0`
     - `25%` → `100%`: `opacity: 0` → `0.75` (`background: #000000`), dimming the Hero scene behind the rising white columns to heighten contrast.
  2. **6 Staggered White Curtains (`.transition-specs__curtain`, each `width: 100%; height: 100vh; background: #FFFFFF; border-right: 1px solid rgba(0,0,0,0.2)`):**
     - Column 1 (`#ipkrcmz5k_0`): `0%` → `50%` (`translateY(100%)` → `translateY(0%)`)
     - Column 2 (`#i1w12p03h_0`): `10%` → `60%` (`translateY(100%)` → `translateY(0%)`)
     - Column 3 (`#i58g5g06v_0`): `20%` → `70%` (`translateY(100%)` → `translateY(0%)`)
     - Column 4 (`#i06299r0g_0`): `30%` → `80%` (`translateY(100%)` → `translateY(0%)`)
     - Column 5 (`#i6c79c71u_0`): `40%` → `90%` (`translateY(100%)` → `translateY(0%)`)
     - Column 6 (`#infqf3b3x_0`): `50%` → `100%` (`translateY(100%)` → `translateY(0%)`)
- **Visual Effect:** Creates a diagonal wave of architectural white columns ascending left-to-right across the screen, completely replacing the dark radial hero with a pure `#FFFFFF` canvas by `scrollY = 2250px`.

---

### Effect 3: Specifications — Rising Hardware & Frosted Glass Cards (`#ig5resaoj_0` `.specs`)
- **Screenshots:** `09_specs_heading_enter_y2450.png`, `10_specs_pen_and_card1_enter_y2950.png`, `11_specs_card2_enter_y3450.png`, `12_specs_all_cards_complete_y4050.png`
- **Scroll Track:** `top: 2250px` (`margin-top: -20vh`), `height: 2700px` (`300vh`). Active range: `scrollY = 2250px` → `4050px` (`1800px` scroll distance).
- **Sticky Camera:** `#io4jf4ysb_0` (`position: sticky; top: 0; height: 100vh`).
- **Layering & Z-Index Stack:**
  - **Background Layer (`z-index: 1`):** `#i9b3n0vje_0` (`.specs__title` `"Nota pen / Specifications"`)
  - **Middle Layer (`z-index: 2`):** `#imaomcjy4_0` (`.specs__img`, vertical pen render `nota_scene_2_img.png`, `376×1669`)
  - **Foreground Layer (`z-index: 3`):** `.specs__cards` (3-column grid of frosted glass cards using `background: rgba(245, 245, 245, 0.6); backdrop-filter: blur(30px)`)
- **Keyframe Mechanics (`#data_do_json` confirmed):**
  1. **Section Wrapper (`#ixb5fk6ut_0`):** `opacity: 0` → `1` from `0%` → `2%`.
  2. **Heading (`#i9b3n0vje_0`):**
     - `0%` → `2%`: `opacity: 0, translateY(29.88vh)`
     - `2%` → `10%`: `opacity: 0` → `1`, stays centered at `translateY(29.88vh)` (see `09_specs_heading_enter_y2450.png`).
     - `10%` → `50%`: rises from `translateY(29.88vh)` → `translateY(0vh)` at the top of the viewport.
  3. **Center Vertical Pen (`#imaomcjy4_0`):**
     - `0%` → `25%`: held below viewport at `translateY(130%)`.
     - `25%` → `75%`: rises smoothly from `translateY(130%)` → `translateY(0%)`, passing directly behind the center glassmorphic card (`Capture Technology`) so the brushed aluminum barrel refracts through the `blur(30px)` backdrop filter (`12_specs_all_cards_complete_y4050.png`).
  4. **3 Frosted Glass Spec Cards (Staggered Vertical Ascent):**
     - **Card 1 (`#izt89q94t_0` `Writing System`):** `25%` → `45%` (`translateY(150%)` → `translateY(0%)`)
     - **Card 2 (`#ihn3af3jk_0` `Capture Technology`):** `25%` → `60%` (`translateY(250%)` → `translateY(0%)`)
     - **Card 3 (`#iqu0h75s7_0` `Digital Continuity`):** `25%` → `75%` (`translateY(350%)` → `translateY(0%)`)
     - `75%` → `100%`: All elements hold their final settled composition (`scrollY = 3600..4050px`).

---

### Effect 4: Transition 2 — 4-Row Horizontal Stepped Black Shutters (`#iljeh1gyu_0` `.who-transition`)
- **Screenshots:** `13_transition2_bars_start_y4450.png`, `14_transition2_bars_mid_y4700.png`, `15_transition2_bars_complete_y4980.png`
- **Scroll Track:** `top: 4320px` (`margin-top: -70vh`), `height: 1620px` (`180vh`). Active range: `scrollY = 4320px` → `5040px`.
- **Sticky Camera:** `#i0b3v1m0a_0` (`position: sticky; top: 0; height: 100vh; display: grid; grid-template-rows: 1fr 2fr 2fr 2fr; justify-items: center`).
- **Keyframe Mechanics (`#data_do_json` confirmed):**
  - Four horizontal black bars (`.who-transition__bar`, `background: #000000; height: 100%`) expand their `width` from `0%` to `100%` outward from the horizontal center (`justify-items: center`), staggered from bottom to top like a stepped ziggurat/pyramid (`14_transition2_bars_mid_y4700.png`):
    - **Row 4 (Bottom, `#i2yp53gej_0`):** `0%` → `55%` (`width: 0%` → `100%`)
    - **Row 3 (`#i5m6n5x5m_0`):** `4%` → `70%` (`width: 0%` → `100%`)
    - **Row 2 (`#i8m6b672m_0`):** `8%` → `85%` (`width: 0%` → `100%`)
    - **Row 1 (Top, `#ibfuwp6xz_0`):** `12%` → `92%` (`width: 0%` → `100%`)
  - Simultaneously, the preceding `.specs` and `.transition-specs` containers translate upward (`translateY(0%)` → `translateY(-20%)` over `70%` → `90%`) for subtle parallax departure.

---

### Effect 5: Who It's For — Character Illumination, Horizontal Thesis Slide & Two-Stage Video (`#iihsgh87l_0` `.who`)
- **Screenshots:** `16_who_text_illumination_start_y5350.png` – `20_who_video_shrink_shift_left_y7850.png`
- **Scroll Track:** `top: 5040px`, `height: 3892px` (`432vh` on `#000000`).
- **Sub-Animations:**
  1. **Character-by-Character Illumination (`#i0pakxea2_0` `.who__text1`, `scrollY = 5100..5850px`):**
     - Statement: *"Designed for people who think through writing — founders, researchers, designers, strategists, engineers, and students."*
     - Each `<span class="char">` transitions from `#666666` to `#FFFFFF` as its vertical position passes the active reading zone (`window.innerHeight * 0.65` to `0.25`).
  2. **Staggered Right-to-Left Thesis Cards (`.who__theses`, `scrollY = 5800..6600px`):**
     - Three horizontal rows (`Thinking comes first`, `Built for daily focus`, `Continuity without friction`) slide in from the right edge:
       - Thesis 1 (`#itb9e5l3d_0`): `0%` → `30%` (`translateX(110%)` → `translateX(0%)`)
       - Thesis 2 (`#i9404b84i_0`): `10%` → `40%` (`translateX(110%)` → `translateX(0%)`)
       - Thesis 3 (`#ip4r6401z_0`): `20%` → `50%` (`translateX(110%)` → `translateX(0%)`)
  3. **Two-Stage Sticky Video (`#ik5hhc3hg_0` `.who__video`, `25824d842058045cd73c3feba327dd09_1920.mp4`, `scrollY = 6500..8200px`):**
     - **Stage A (Expand to Full Screen, `0%` → `40%`):** Scales from `scale(0.5)` at center to `scale(1.0)` full-bleed (`19_who_video_expand_full_y7200.png`).
     - **Stage B (Shrink, Dock Bottom-Left & Dim, `40%` → `100%`):** Scales down `scale(1.0)` → `scale(0.68)`, translates `translate(-15.21vw, 9.3vh)` (`-219px, +83.7px`), and fades `opacity: 1.0` → `0.2` (`20_who_video_shrink_shift_left_y7850.png`) while the right-hand editorial summary block (`#i5m564x1f_0`) scrolls up beside it.

---

### Effect 6: Smart Paper — Curtain Drop/Lift & 4-Slide Counter-Scaling Gallery (`#ikrvtklue_0` `.paper`)
- **Screenshots:** `21_paper_cover_white_y8950.png` – `30_paper_slide4_settled_y12900.png`
- **Scroll Track:** `top: 8932px`, `height: 5400px` (`600vh` — longest section on the website). Active range: `scrollY = 8932px` → `13432px` (`4500px` scroll distance).
- **Sticky Camera:** `#iw267972p_0` (`position: sticky; top: 0; height: 100vh; overflow: hidden`).
- **Phase 1: White Cover to Black Curtain Drop & Reveal (`0%` → `23%`, `scrollY = 8932..9967px`):**
  - Starts on a stark white cover (`#iwaxzr8k1_0` `.paper__cover`, `background: #FFFFFF`) displaying `"Works with / smart paper"` in black (`21_paper_cover_white_y8950.png`).
  - **`3%` → `12%`:** 6 vertical black curtain columns (`.paper__curtain`, `#i26awi0ku_0` .. `#ikawy67tt_0`) grow downward from the top edge (`height: 0vh` → `100vh`), turning the entire viewport black (`22_paper_curtains_drop_black_y9250.png`).
  - **`12%` → `23%`:** The white cover underneath turns transparent (`backgroundColor: rgba(0,0,0,0)`), the title `#ihgcmzlad_0` fades out (`opacity: 1` → `0`), and the 6 black curtains slide downward out of the viewport (`translateY(0%)` → `translateY(100%)` over `14%` → `23%`), unveiling Slide 1 (`nota_scene_4_img_01.jpg`) beneath (`23_paper_curtains_reveal_slide1_y9650.png`).
- **Phase 2: 4-Slide Zoom-Out / Zoom-In Crossfades (`23%` → `100%`, `scrollY = 9967..13432px`):**
  - Each slide consists of a full-bleed `1920×1080` studio photo (`.paper__img`), a top-left `Instrument Serif` headline (`.paper__title`), a bottom-right frosted glass plate (`backdrop-filter: blur(25px)`), and a 4-segment bottom progress indicator (`.paper__pag-item`).
  - **Slide 1 → Slide 2 Transition (`39%` → `42%`, `scrollY = 10687..10822px`):**
    - Slide 1 image (`#iujqjm4e2_0`): `scale(1.0)` → `scale(0.6)`, `opacity: 1` → `0`
    - Slide 2 image (`#i0d5d95a8_0`): `scale(1.4)` → `scale(1.0)` (starts at `opacity: 1` behind Slide 1)
  - **Slide 2 → Slide 3 Transition (`56%` → `59%`, `scrollY = 11452..11587px`):**
    - Slide 2 image (`#i0d5d95a8_0`): `scale(1.0)` → `scale(0.6)`, `opacity: 1` → `0`
    - Slide 3 image (`#ifsklavzo_0`): `scale(1.4)` → `scale(1.0)`
  - **Slide 3 → Slide 4 Transition (`73%` → `76%`, `scrollY = 12217..12352px`):**
    - Slide 3 image (`#ifsklavzo_0`): `scale(1.0)` → `scale(0.6)`, `opacity: 1` → `0`
    - Slide 4 image (`#i8m3a930d_0`): `scale(1.4)` → `scale(1.0)`

---

### Effect 7: Transition 3 — Expanding White Circular Iris (`#inmw53la5_0` `.inside__transition`)
- **Screenshots:** `31_transition3_circle_start_y13650.png`, `32_transition3_circle_mid_title_y14100.png`, `33_transition3_circle_full_white_y14600.png`
- **Scroll Track:** `top: 13432px` (`margin-top: -100vh`), `height: 2070px` (`230vh`). Active range: `scrollY = 13432px` → `14602px`.
- **Sticky Camera:** `#i8l7r12v5_0` (`position: sticky; top: 0; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden`).
- **Keyframe Mechanics (`#data_do_json` confirmed):**
  - **Expanding Circle (`#idiquhjyq_0` `.inside__transition-circle`, `width: 40.32vw; height: 40.32vw; border-radius: 100vw; background: #FFFFFF`):**
    - `0%` → `85%`: `scale(0)` → `scale(4.5)`. At `scale(4.5)`, the circle diameter reaches `181.44vw` (`2,612px`), completely enveloping the `1440×900` viewport in pure white.
  - **Centered Title (`#io3h12ptc_0` `"Inside / the box"`):**
    - `0%` → `35%`: `opacity: 0`
    - `35%` → `100%`: `opacity: 0` → `1` (fades in from light gray to solid black as the white circle expands behind it).

---

### Effect 8: Inside the Box — 25-Strip Venetian Blinds & Dark Character Illumination (`#ir9soeuwq_0` `.inside`)
- **Screenshots:** `34_inside_blinds1_opening_y15150.png` – `38b_inside_adapter_hover_state.png`
- **Scroll Track:** `top: 15502px`, `height: 2700px` (`300vh` divided into three `100vh` stages on `#FFFFFF`).
- **Stage 8A: Full-Bleed Flat-Lay Venetian Blind Reveal (`scrollY = 14900..15600px`):**
  - Container `.inside__blinds` overlays the packaging flat-lay photograph (`nota_scene_5_img_01.jpg`, `1882×989`) with **25 equal-height horizontal rows** (`display: grid; grid-template-rows: repeat(25, 1fr)`).
  - Each row contains a white blind strip (`.inside__blind`, `#iubiyw8gc_0`, `background: #FFFFFF; width: 100%`) that shrinks `height: 100%` → `0%` over `0%` → `80%` of scroll entry (`34_inside_blinds1_opening_y15150.png`), creating a crisp architectural louver/venetian-blind opening effect.
  - Callout caption (`#i1az1ixbn_0` `"Smart Paper Notebook"`) fades `opacity: 0` → `1` over `75%` → `90%`.
- **Stage 8B: Light-Mode Character Illumination (`#iwep58hh2_0`, `scrollY = 15800..16500px`):**
  - Centered serif statement: *"Everything inside the box is designed to work together from the first page — no setup, no learning curve, just start writing."*
  - Characters illuminate sequentially from `#DDDDDD` to `#000000` (`36_inside_text_illumination_mid_y16250.png`).
- **Stage 8C: Dual-Card Venetian Blind Reveal & Hover Swap (`scrollY = 16500..17350px`):**
  - 2-column grid (`The NŌTA Smart Pen` left, `Charging Adapter` right) revealed via a second 25-strip `.inside__blinds` overlay (`#iza1g1zch_0`, `height: 100%` → `0%` over `0%` → `80%`), followed by text fade-in (`75%` → `90%`).

---

### Effect 9: Product Details — Scroll-Linked Bento Zoom & Full-Screen Pill Video (`#ivurrxt0z_0` `.details`)
- **Screenshots:** `39_details_bento_row1_y18100.png`, `40_details_bento_row2_row3_y18900.png`, `41_details_pill_video_y19850.png`
- **Scroll Track:** `top: 18202px`, `height: 2514px` (`279vh` on `#000000`).
- **Grid & Border-Radius Geometry:**
  - **Row 1:** 2 equal rounded cards (`border-radius: 5.56vw / 80px`, `height: 36.11vw / 520px`).
  - **Row 2:** Asymmetrical `2fr 1fr` row — Left wide pill (`border-radius: 13.89vw / 200px`, `nota_scene_6_img_03.jpg`) + Right rounded card (`border-radius: 5.56vw`, `nota_scene_6_img_04.jpg`).
  - **Row 3:** Full-width stadium pill (`border-radius: 13.89vw / 200px`, `nota_scene_6_img_05.jpg`).
  - **Row 4:** Full-viewport stadium pill video (`#icegagtko_0`, `width: 95.56vw; height: 93.61vh; border-radius: 27.78vw / 400px`, playing `7b66fa812d04f9c7075f91ef42d4dd53_1920.mp4`).
- **Keyframe Mechanics:**
  - Every card image (`#itz251722_0`, `#iwwfiweuo_0`, etc.) animates continuously across its viewport traversal:
    - `0%` → `30%`: `opacity: 0` → `1`
    - `0%` → `100%`: `scale(1.3)` → `scale(1.0)`

---

## 3. Deep-Dive Investigation: The Multi-State Identical-Composition Effect (`.section-colors`) & Day-to-Night Architectural Translation

### 3.1 Code-Verified Analysis of `.section-colors` (`#itcx2nwlb_0`)
- **Screenshots:**
  - **State 1 (Morning Mist / Brushed Silver):** `42_colors_state1_silver_y20750.png` (`scrollY = 20750px`)
  - **Transition 1→2 Midpoint (Daylight Silver → Twilight Graphite):** `43_colors_transition_silver_to_black_y21065.png` (`scrollY = 21065px`)
  - **State 2 (Nighttime / Graphite Black):** `44_colors_state2_graphite_black_y21350.png` (`scrollY = 21350px`)
  - **Transition 2→3 Midpoint:** `45_colors_transition_black_to_blue_y21670.png` (`scrollY = 21670px`)
  - **State 3 (Blue Hour / Mist Blue):** `46_colors_state3_mist_blue_y21900.png` (`scrollY = 21900px`)
  - **Transition 3→4 Midpoint:** `47_colors_transition_blue_to_red_y22120.png` (`scrollY = 22120px`)
  - **State 4 (Crimson Dusk / Precision Red):** `48_colors_state4_precision_red_y22350.png` (`scrollY = 22350px`)
  - **Transition 4→5 Midpoint:** `49_colors_transition_red_to_orange_y22575.png` (`scrollY = 22575px`)
  - **State 5 (Golden Sunset / Bright Orange):** `50_colors_state5_bright_orange_y22950.png` (`scrollY = 22950px`)

#### A. Composition & Pixel-Locked Continuity
- **What remains identical:** Across all 5 full-screen `1920×1080` images (`nota_scene_7_img_01.jpg` to `05.jpg`), the vertical fountain pen is rendered from the **exact same orthographic camera position** (`x = 50%`, nib tip at `y = 93.1%`, top cap dome at `y = 7.0%`, barrel width = `4.8%` of viewport). Every flute on the cap, the clip silhouette, the barrel seam, and the nib slit are 100% pixel-registered.
- **Camera vs. Lighting:** The camera does **not** move during `.section-colors`. All perceived transformation comes from the **environmental lighting gradient, specular reflections on the metal cylinder, shadow depth, and synchronized split typography** changing around the locked subject.

#### B. Exact Keyframe Opacity Architecture (`#data_do_json` Confirmed)
The sticky container `#i016b1k5q_0` (`100vh`) stacks 5 absolute `.section-colors__slide` layers (`z-index: 1` to `5`) over a `3150px` (`350vh`) scroll track (`2250px` active scrub distance from `scrollY = 20716px` to `22966px`, followed by `440px` hold/reveal of the sticky footer):

| Layer / State | Slide Image Asset | Background & Lighting Atmosphere | Split Editorial Copy (Left / Right of Pen) | Opacity Keyframes (`0%` – `100%` of `.section-colors`) | Exact Pixel Scroll Window (`scrollY`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **State 1: Silver (Daylight)** | `nota_scene_7_img_01.jpg` (`#i8xxxe533_0`) | Cool morning mist gradient (`#05070A` top edge → `#636975` mid → `#D0D6DF` bottom); high-key silver specular highlight on left barrel. | `"Impossible to"` / `"overthink"` (`#FFFFFF`) | `0%` → `10%`: `opacity: 1` (hold)<br>`10%` → `25%`: `opacity: 1` → `0` | Hold: `20716–20941px`<br>Fade out: `20941–21278px` |
| **State 2: Graphite Black (Night)** | `nota_scene_7_img_02.jpg` (`#ii452cx5b_0`) | Deep nocturnal studio gradient (`#000000` top → `#22252C` mid → `#555B66` bottom); muted matte anodized reflections, deep shadow core. | `"Graphite Black."` / `"Clarity in silence."` (`#FFFFFF`) | `10%` → `25%`: `opacity: 0` → `1`<br>`25%` → `35%`: `opacity: 1` (hold)<br>`35%` → `45%`: `opacity: 1` → `0` | Fade in: `20941–21278px`<br>Hold: `21278–21503px`<br>Fade out: `21503–21728px` |
| **State 3: Mist Blue (Blue Hour)** | `nota_scene_7_img_03.jpg` (`#inkrb08oy_0`) | Twilight cobalt sky gradient (`#000208` top → `#314482` mid → `#C2D2F2` horizon); cool sapphire metallic sheen. | `"Mist Blue."` / `"Light thinking."` (`#FFFFFF`) | `35%` → `45%`: `opacity: 0` → `1`<br>`45%` → `55%`: `opacity: 1` (hold)<br>`55%` → `65%`: `opacity: 1` → `0` | Fade in: `21503–21728px`<br>Hold: `21728–21953px`<br>Fade out: `21953–22178px` |
| **State 4: Precision Red (Dusk)** | `nota_scene_7_img_04.jpg` (`#iwd7fdw96_0`) | Dramatic crimson dusk (`#090000` top → `#8F1111` mid → `#FF6B57` bottom); warm carmine rim reflection on left flute. | `"Precision Red."` / `"Form follows thought."` (`#FFFFFF`) | `55%` → `65%`: `opacity: 0` → `1`<br>`65%` → `75%`: `opacity: 1` (hold)<br>`75%` → `85%`: `opacity: 1` → `0` | Fade in: `21953–22178px`<br>Hold: `22178–22403px`<br>Fade out: `22403–22628px` |
| **State 5: Bright Orange (Golden Hour)** | `nota_scene_7_img_05.jpg` (`#i44lvqr6l_0`) | South-Texas-style sunset gradient (`#6F5980` violet zenith → `#E6AD7C` warm gold mid → `#C3491E` terracotta horizon); copper-gold specular glow. | `"Bright Orange."` / `"Steady focus."` (`#4A154B` deep plum) | `75%` → `85%`: `opacity: 0` → `1`<br>`85%` → `100%`: `opacity: 1` (hold) | Fade in: `22403–22628px`<br>Hold: `22628–22966px+` |

---

### 3.2 Engineering Blueprint: Adapting `.section-colors` & `.cover` for Bluebonnet Homes RGV's Day-to-Night Architectural Sequences

To achieve an award-winning **Day-to-Night Architectural Photography Transformation** on the new **Bluebonnet Homes RGV V2** website that feels like time passing continuously inside a single luxury South Texas custom home scene, we combine `nota.uprock.pro`'s two proven scroll-scrubbing mechanics:

#### Technique A: 4-State Multi-Layer Luminance-Masked Crossfade (Adapted from `.section-colors`)
Used for the **Signature Exterior Custom Home Showcase (`350vh` pinned section)**:
1. **4 Pixel-Registered Architectural Renders (`1920×1080` WebP, locked tripod perspective):**
   - **State 1 (`0%–20%`): Bright South Texas Morning (`10:00 AM`)** — Crisp white stucco, limestone columns, bright azure sky, sharp solar shadows cast at 45°, pool water reflecting bright sky, interior windows dark/reflective.
   - **State 2 (`20%–50%`): Warm Golden Hour (`6:30 PM`)** — Low-angle amber sunlight (`3200K`) grazing the stucco and clay tile roof, long dramatic shadows, warm golden sky gradient (`#6F5980` → `#E6AD7C` → `#C3491E`, matching State 5 of `nota.uprock.pro`), foyer chandelier faintly visible.
   - **State 3 (`50%–80%`): Cobalt Blue Hour / Twilight (`7:45 PM`)** — Deep cobalt/indigo sky (`#050B1A` → `#2B4278`, matching State 3 of `nota.uprock.pro`), warm `2700K` interior architectural lighting glowing through floor-to-ceiling windows, soffit downlights igniting along the roofline.
   - **State 4 (`80%–100%`): Illuminated Night (`9:30 PM`)** — Starry obsidian South Texas night sky (`#020408`), full landscape pathway uplighting on palm and oak trees, underwater cyan/warm pool LED glow, and warm inviting interior illumination.
2. **Non-Uniform Emissive Light Ignition (Shader / Mask Enhancement over Simple Opacity):**
   - While `nota.uprock.pro` uses pure linear opacity crossfades (`opacity: 0` → `1` over `10%–15%` scroll windows), architectural day-to-night transitions look dramatically more realistic when **interior windows, soffit lights, and pool lights ignite slightly ahead of or non-uniformly with the sky darkening**.
   - **Implementation Specification:** Render a supplementary **Emissive Window/Fixture Mask Layer** (`mix-blend-mode: screen` or WebGL luminance threshold) that ramps `opacity: 0` → `1` between `42%` and `62%` scroll progress with a staggered radial gradient mask from the center foyer outward to the landscape lights.

#### Technique B: 60-to-75 Frame Scroll-Scrubbed Canvas Sequence (Adapted from `.cover` Lottie Scrubbing)
Used for the **Hero Pinned Architectural Reveal (`270vh` pinned section)**:
- Instead of `<lottie-player>` with base64 JSON (which costs `2.16 MB` of JSON parsing overhead), use an HTML5 `<canvas width="1920" height="1080">` drawing preloaded `.webp` frames (`frames/hero_001.webp` .. `hero_075.webp`) driven by `lenis` scroll progress:
  - **Frames 0–35 (`scrollY = 0..700px`):** Camera glides gently forward from the custom wrought-iron/glass pivot front door entrance out to a full-width architectural elevation as morning sunlight sweeps across the limestone facade.
  - **Frames 36–75 (`scrollY = 700..1530px`):** Solar angle transitions from high noon to warm golden dusk while interior warm lights ignite, directly setting up **Transition 1's 6-Column Vertical Curtain Wipe** into the Specifications/Craftsmanship section.
