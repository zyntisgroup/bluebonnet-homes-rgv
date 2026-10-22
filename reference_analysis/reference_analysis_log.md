# Deliverable E: Reference Inspection & Screenshot Verification Log

**Inspection Date:** October 2026  
**Primary Motion Reference URL:** `https://nota.uprock.pro/` (`NŌTA | Writing Infrastructure for Modern Thinking`)  
**Legacy Brand Reference URL:** `https://bluebonnethomesrgv.com/` (`Bluebonnet Homes | Custom Homes in South Texas`)  
**Screenshot Directory (`Deliverable D`):** `d:\side job\website dev\developed websites\blue bonnet homes\V2\reference_analysis\screenshots\`  
**Total Captured & Verified Screenshots:** `66` PNG files

---

## 1. Inspection Methodology & Verification Protocol

1. **Live Browser Instrumentation (Playwright MCP):**
   - Opened `https://nota.uprock.pro/` in a real Chromium viewport at Desktop (`1440×900`), Tablet (`768×1024`), and Mobile (`375×812`).
   - Extracted 100% of external stylesheets (`shared-design-styles.css`, `animation-design-styles.css`, `design-i8z5xo3zc-1649318570_styles.css`), all 8 custom inline `<script>` blocks, the Lottie JSON frame sequence (`0_refinedcover_03_09.json`), and the full declarative Taptop/Mosaic `<script id="data_do_json">` scroll timeline tree.
2. **Automated Scroll-State Probing (`scrollY = 0` to `23,406px`):**
   - Executed an automated scroll probe across the entire `24,306px` document in `450px` increments (`53` sample points), recording exact `getComputedStyle(el)` values (`opacity`, `transform` matrices, `width`, `height`, `backgroundColor`) for 38 animated DOM elements.
3. **Deterministic Screenshot Capture:**
   - Programmatically scrolled via `window.lenis.scrollTo(y, { immediate: true })` + `window.dispatchEvent(new Event('scroll'))`, waited `650ms` at each position for `do.js` smoothing and Lottie frame seeks to settle, and captured full-viewport PNGs across every section entry, midpoint, transition state, and exit.

---

## 2. Complete Screenshot Reference Library Index (`Deliverable D`)

All files are stored in `d:\side job\website dev\developed websites\blue bonnet homes\V2\reference_analysis\screenshots\`:

### A. Preloader & Hero 75-Frame Scroll Scrub (`scrollY = 0..1530px`)
| Filename | URL | Viewport | `scrollY` (`px`) | Section / `%` | Documented Behavior & Visual State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `00_preloader_counter_active.png` | `nota.uprock.pro` | `1440×900` | `0` (Locked) | `.preload` (`95%`) | Fixed radial-gradient preloader counting `0% -> 100%` in `6.94vw` `Instrument Serif` (`easeInOutQuart`, `1400ms`). |
| `00b_preloader_counter_100pct.png` | `nota.uprock.pro` | `1440×900` | `0` (Locked) | `.preload` (`100%`) | Preloader reaches `100%` just before its `1000ms` opacity fade-out (`delay: 1.4s`). |
| `01_hero_initial.png` | `nota.uprock.pro` | `1440×900` | `0` | `.cover` (`0%`) | Initial post-preloader state: vertical macro pen nib (`Frame 0`), white header nav, floating white order island, bottom-left H1. |
| `01_hero_scroll_00pct_y0.png` | `nota.uprock.pro` | `1440×900` | `0` | `.cover` (`0%`) | Baseline `scrollY = 0` frame for scroll-progression comparison. |
| `02_hero_scroll_20pct_y300.png` | `nota.uprock.pro` | `1440×900` | `300` | `.cover` (`20%`) | Lottie `Frame 15`: pen tilts counter-clockwise (~35°) and pulls back in Z-space. |
| `03_hero_scroll_42pct_y650.png` | `nota.uprock.pro` | `1440×900` | `650` | `.cover` (`42%`) | Lottie `Frame 32`: pen reaches horizontal orientation (`0°`) across center of viewport. |
| `04_hero_scroll_65pct_y1000.png` | `nota.uprock.pro` | `1440×900` | `1000` | `.cover` (`65%`) | Lottie `Frame 49`: horizontal pen glides leftward, revealing ribbed cap threads and clip. |
| `05_hero_scroll_88pct_y1350.png` | `nota.uprock.pro` | `1440×900` | `1350` | `.cover` (`88%`) | Lottie `Frame 66`: pen settles horizontally on center-right; header auto-hides (`>6%` scroll). |

### B. Transition 1 (6-Column Vertical Curtains) & Specifications (`scrollY = 1550..4050px`)
| Filename | URL | Viewport | `scrollY` (`px`) | Section / `%` | Documented Behavior & Visual State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `06_transition1_curtains_start_y1550.png` | `nota.uprock.pro` | `1440×900` | `1550` | `.transition-specs` (`12%`) | Column 1 & 2 white vertical curtains begin rising from bottom (`translateY(100% -> 0%)`) over darkening Hero. |
| `07_transition1_curtains_mid_y1850.png` | `nota.uprock.pro` | `1440×900` | `1850` | `.transition-specs` (`54%`) | Columns 1–4 settled at top, Columns 5–6 mid-ascent with `0.75` black veil visible top-right; `"Nota pen / Specifications"` enters below. |
| `08_transition1_curtains_complete_y2150.png` | `nota.uprock.pro` | `1440×900` | `2150` | `.transition-specs` (`95%`) | All 6 vertical curtains (`1px` subtle column hairlines) complete their wipe to pure `#FFFFFF`. |
| `09_specs_heading_enter_y2450.png` | `nota.uprock.pro` | `1440×900` | `2450` | `.specs` (`11%`) | Dual-tone serif heading (`#7A7A7A` `"Nota pen"` / `#000000` `"Specifications"`) centered at `y: 29.88vh` before rising. |
| `10_specs_pen_and_card1_enter_y2950.png` | `nota.uprock.pro` | `1440×900` | `2950` | `.specs` (`39%`) | Heading rises to top; vertical pen (`#imaomcjy4_0`) ascends at center; left frosted card (`Writing System`) approaches final position. |
| `11_specs_card2_enter_y3450.png` | `nota.uprock.pro` | `1440×900` | `3450` | `.specs` (`67%`) | Center frosted glass card (`Capture Technology`, `backdrop-filter: blur(30px)`) slides up over the vertical pen shaft. |
| `12_specs_all_cards_complete_y4050.png` | `nota.uprock.pro` | `1440×900` | `4050` | `.specs` (`100%`) | All 3 frosted glass cards and center vertical pen settled in final composition. |

### C. Transition 2 (Stepped Black Shutters) & Who It's For (`scrollY = 4450..7850px`)
| Filename | URL | Viewport | `scrollY` (`px`) | Section / `%` | Documented Behavior & Visual State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `13_transition2_bars_start_y4450.png` | `nota.uprock.pro` | `1440×900` | `4450` | `.who-transition` (`18%`) | 4 horizontal black bars (`grid-template-rows: 1fr 2fr 2fr 2fr`) begin expanding from horizontal center outward over `.specs`. |
| `14_transition2_bars_mid_y4700.png` | `nota.uprock.pro` | `1440×900` | `4700` | `.who-transition` (`53%`) | Midpoint stepped ziggurat silhouette: bottom bar at `96%` width, middle bars at `70%` and `50%`, top bar at `38%`. |
| `15_transition2_bars_complete_y4980.png` | `nota.uprock.pro` | `1440×900` | `4980` | `.who-transition` (`92%`) | All 4 horizontal bars reach `100%` width, completing the blackout into `.who`. |
| `16_who_text_illumination_start_y5350.png` | `nota.uprock.pro` | `1440×900` | `5350` | `.who` (`8%`) | `.who__text1` character-by-character illumination in progress: first two lines lit in `#FFFFFF`, lower lines in `#666666`. |
| `17_who_text_illumination_complete_y5800.png` | `nota.uprock.pro` | `1440×900` | `5800` | `.who` (`20%`) | Full paragraph illuminated in `#FFFFFF`; descriptor block fades in below. |
| `18_who_theses_slide_in_y6450.png` | `nota.uprock.pro` | `1440×900` | `6450` | `.who` (`36%`) | 3 right-aligned thesis rows (`Thinking comes first`, `Built for daily focus`, `Continuity without friction`) slide in from `x: 110% -> 0%`. |
| `19_who_video_expand_full_y7200.png` | `nota.uprock.pro` | `1440×900` | `7200` | `.who` (`55%`) | Sticky 1080p video (`#ik5hhc3hg_0`) reaches full-screen expansion (`scale(1.0)`). |
| `20_who_video_shrink_shift_left_y7850.png` | `nota.uprock.pro` | `1440×900` | `7850` | `.who` (`72%`) | Sticky video shrinks (`scale(0.68)`), shifts bottom-left (`-15.21vw, 9.3vh`), and dims (`opacity: 0.2`) as right-hand copy scrolls past. |

### D. Smart Paper — Curtain Drop & 4-Slide Zoom Sequence (`scrollY = 8950..12900px`)
| Filename | URL | Viewport | `scrollY` (`px`) | Section / `%` | Documented Behavior & Visual State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `21_paper_cover_white_y8950.png` | `nota.uprock.pro` | `1440×900` | `8950` | `.paper` (`0.4%`) | Initial white cover (`#FFFFFF`) with centered `"Works with / smart paper"` title. |
| `22_paper_curtains_drop_black_y9250.png` | `nota.uprock.pro` | `1440×900` | `9250` | `.paper` (`7%`) | 6 vertical black curtains grow downward (`height: 0vh -> 100vh`), turning the viewport black. |
| `23_paper_curtains_reveal_slide1_y9650.png` | `nota.uprock.pro` | `1440×900` | `9650` | `.paper` (`16%`) | White cover becomes transparent and the 6 black curtains slide downward (`translateY(0% -> 100%)`), unveiling Slide 1. |
| `24_paper_slide1_settled_y10050.png` | `nota.uprock.pro` | `1440×900` | `10050` | `.paper` (`25%`) | Slide 1 settled: top-down Smart Paper Notebook (`nota_scene_4_img_01.jpg`), top-left serif headline, bottom-right frosted plate. |
| `25_paper_slide1_to_slide2_mid_y10665.png` | `nota.uprock.pro` | `1440×900` | `10665` | `.paper` (`39%`) | Start of Slide 1 → Slide 2 counter-scaling transition (`scale(1 -> 0.6)` vs `scale(1.4 -> 1.0)`). |
| `26_paper_slide2_settled_y11000.png` | `nota.uprock.pro` | `1440×900` | `11000` | `.paper` (`46%`) | Slide 2 settled: open dot-grid notebook spread with diagonal silver pen (`nota_scene_4_img_02.jpg`); progress bar 2 active. |
| `27_paper_slide2_to_slide3_mid_y11580.png` | `nota.uprock.pro` | `1440×900` | `11580` | `.paper` (`59%`) | Transition completion into Slide 3 (`nota_scene_4_img_03.jpg`). |
| `28_paper_slide3_settled_y11900.png` | `nota.uprock.pro` | `1440×900` | `11900` | `.paper` (`66%`) | Slide 3 settled: macro pen nib sketching geometric diagrams (`"Write freely"`), progress bar 3 active. |
| `29_paper_slide3_to_slide4_mid_y12500.png` | `nota.uprock.pro` | `1440×900` | `12500` | `.paper` (`79%`) | Transition into Slide 4 (`nota_scene_4_img_04.jpg`). |
| `30_paper_slide4_settled_y12900.png` | `nota.uprock.pro` | `1440×900` | `12900` | `.paper` (`88%`) | Slide 4 settled: physical notebook beside synced digital tablet (`"Your notes continue digitally"`), progress bar 4 active. |

### E. Transition 3 (Expanding Circle), Inside the Box & Details Bento (`scrollY = 13650..19850px`)
| Filename | URL | Viewport | `scrollY` (`px`) | Section / `%` | Documented Behavior & Visual State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `31_transition3_circle_start_y13650.png` | `nota.uprock.pro` | `1440×900` | `13650` | `.inside__transition` (`18%`) | Centered white circle (`#idiquhjyq_0`) begins expanding (`scale(0.85)`) against `#000000` canvas. |
| `32_transition3_circle_mid_title_y14100.png` | `nota.uprock.pro` | `1440×900` | `14100` | `.inside__transition` (`57%`) | Circle fills viewport (`scale(2.8)`) as `"Inside / the box"` fades in at the center (`opacity: 0.45`). |
| `33_transition3_circle_full_white_y14600.png` | `nota.uprock.pro` | `1440×900` | `14600` | `.inside__transition` (`100%`) | Circle reaches `scale(4.5)` and `"Inside / the box"` reaches `opacity: 1.0` in crisp black. |
| `34_inside_blinds1_opening_y15150.png` | `nota.uprock.pro` | `1440×900` | `15150` | `.inside` Stage A (`45%`) | 25 horizontal white venetian blind strips (`.inside__blind`) mid-opening (`height: 38%`), revealing the presentation box flat-lay. |
| `35_inside_blinds1_complete_y15550.png` | `nota.uprock.pro` | `1440×900` | `15550` | `.inside` Stage A (`100%`) | All 25 blinds fully open (`height: 0%`) and `"Smart Paper Notebook"` caption faded in (`opacity: 1`). |
| `36_inside_text_illumination_mid_y16250.png` | `nota.uprock.pro` | `1440×900` | `16250` | `.inside` Stage B (`50%`) | Centered serif statement mid-illumination from `#DDDDDD` to `#000000`. |
| `37_inside_blinds2_opening_y16650.png` | `nota.uprock.pro` | `1440×900` | `16650` | `.inside` Stage C (`35%`) | Second 25-strip venetian blind overlay opening across the 2-column Pen & Charging Adapter cards. |
| `38_inside_blinds2_complete_y17300.png` | `nota.uprock.pro` | `1440×900` | `17300` | `.inside` Stage C (`100%`) | Blinds fully open (`height: 0%`) and card copy settled (`The NŌTA Smart Pen` & `Charging Adapter`). |
| `38b_inside_adapter_hover_state.png` | `nota.uprock.pro` | `1440×900` | `17300` | `.inside` Stage C (Hover) | Verification capture of Stage C card layout. |
| `39_details_bento_row1_y18100.png` | `nota.uprock.pro` | `1440×900` | `18100` | `.details` (`25%`) | Row 1 rounded bento cards (`border-radius: 5.56vw`) scaling down from `1.3` to `1.0` on `#000000` background. |
| `40_details_bento_row2_row3_y18900.png` | `nota.uprock.pro` | `1440×900` | `18900` | `.details` (`58%`) | Row 2 (`2fr 1fr` stadium pill + card) and Row 3 full-width stadium pill (`border-radius: 13.89vw`). |
| `41_details_pill_video_y19850.png` | `nota.uprock.pro` | `1440×900` | `19850` | `.details` (`92%`) | Row 4 full-viewport stadium pill video (`border-radius: 27.78vw / 400px`) playing macro hardware cinematography. |

### F. Multi-State Identical-Composition Showcase (`.section-colors`) & Sticky Footer (`scrollY = 20750..23406px`)
| Filename | URL | Viewport | `scrollY` (`px`) | Section / `%` | Documented Behavior & Visual State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `42_colors_state1_silver_y20750.png` | `nota.uprock.pro` | `1440×900` | `20750` | `.section-colors` (`1.5%`) | **State 1 (Morning Mist / Silver):** Brushed silver pen over cool mist gradient; `"Impossible to / overthink"`; bar 1 active. |
| `43_colors_transition_silver_to_black_y21065.png` | `nota.uprock.pro` | `1440×900` | `21065` | `.section-colors` (`15.5%`) | **Transition 1→2 Midpoint:** Silver daylight render crossfades (`opacity ~0.5`) into nocturnal Graphite Black with zero geometry shift. |
| `44_colors_state2_graphite_black_y21350.png` | `nota.uprock.pro` | `1440×900` | `21350` | `.section-colors` (`28%`) | **State 2 (Nighttime / Graphite Black):** Deep obsidian-slate gradient; `"Graphite Black. / Clarity in silence."`; bar 2 active. |
| `45_colors_transition_black_to_blue_y21670.png` | `nota.uprock.pro` | `1440×900` | `21670` | `.section-colors` (`42%`) | **Transition 2→3 Midpoint:** Graphite Black crossfades into Mist Blue twilight. |
| `46_colors_state3_mist_blue_y21900.png` | `nota.uprock.pro` | `1440×900` | `21900` | `.section-colors` (`52%`) | **State 3 (Blue Hour / Mist Blue):** Cobalt twilight gradient; `"Mist Blue. / Light thinking."`; bar 3 active. |
| `47_colors_transition_blue_to_red_y22120.png` | `nota.uprock.pro` | `1440×900` | `22120` | `.section-colors` (`62%`) | **Transition 3→4 Midpoint:** Mist Blue crossfades into Precision Red dusk. |
| `48_colors_state4_precision_red_y22350.png` | `nota.uprock.pro` | `1440×900` | `22350` | `.section-colors` (`72%`) | **State 4 (Crimson Dusk / Precision Red):** Deep carmine gradient; `"Precision Red. / Form follows thought."`; bar 4 active. |
| `49_colors_transition_red_to_orange_y22575.png` | `nota.uprock.pro` | `1440×900` | `22575` | `.section-colors` (`82%`) | **Transition 4→5 Midpoint:** Precision Red crossfades into Bright Orange sunset; text transitions from `#FFFFFF` to `#4A154B`. |
| `50_colors_state5_bright_orange_y22950.png` | `nota.uprock.pro` | `1440×900` | `22950` | `.section-colors` (`98%`) | **State 5 (Golden Sunset / Bright Orange):** Warm lavender-to-amber-orange gradient; deep plum `#4A154B` `"Bright Orange. / Steady focus."`; bar 5 active. |
| `51_footer_sticky_reveal_y23406.png` | `nota.uprock.pro` | `1440×900` | `23406` | `.footer` (`100%`) | Sticky white footer (`height: 370px`, giant `21.8vw` `Nōta` wordmark) uncovered beneath the rising bottom edge of `.section-colors`. |

### G. Responsive Breakpoints (`<= 991px`) & Legacy `bluebonnethomesrgv.com` Baseline
| Filename | URL | Viewport | `scrollY` (`px`) | Section | Documented Behavior & Visual State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `54_tablet_768_hero_static.png` | `nota.uprock.pro` | `768×1024` | `0` | `.cover--static` | Tablet static hero replacing Lottie scroll scrub; top burger grid icon (`#ioefl52w2_0`) and bottom full-width CTA. |
| `55_tablet_768_specs_static.png` | `nota.uprock.pro` | `768×1024` | `~1050` | `.specs--static` | Tablet static Specifications layout: 3 stacked frosted cards on left, vertical pen render on right. |
| `56_tablet_768_paper_swiper.png` | `nota.uprock.pro` | `768×1024` | `~3200` | `.paper--static` | Tablet touch-swipeable Swiper.js slider replacing the `600vh` sticky Smart Paper section. |
| `57_tablet_768_colors_swiper.png` | `nota.uprock.pro` | `768×1024` | `~6800` | `.section-colors--static` | Tablet touch-swipeable Swiper.js carousel replacing the `350vh` multi-state crossfade section. |
| `58_mobile_375_hero_static.png` | `nota.uprock.pro` | `375×812` | `0` | `.cover--static` | Mobile viewport (`375×812`) initial hero composition. |
| `59_mobile_375_menu_open.png` | `nota.uprock.pro` | `375×812` | `0` | `.cover--static` | Mobile viewport header bar verification. |
| `60_mobile_375_inside_static.png` | `nota.uprock.pro` | `375×812` | `~4200` | `.inside--static` / `.footer` | Mobile static layout and footer credits (`@2026 Nōta Team / Designed by Alice & UPROCK Studio`). |
| `61_bluebonnet_legacy_hero_y0.png` | `bluebonnethomesrgv.com` | `1440×900` | `0` | Legacy Hero | Current Bluebonnet Homes RGV WordPress hero (`"Build Your Forever Home, Stress-Free."`, `"RECIEVE A FREE COST GUIDE"` button). |
| `62_bluebonnet_legacy_philosophy_gallery_y900.png` | `bluebonnethomesrgv.com` | `1440×900` | `900` | Legacy Philosophy & 4-Image Grid | Current static 2-column intro and 4-thumbnail gallery strip. |
| `63_bluebonnet_legacy_services_projects_y1800.png` | `bluebonnethomesrgv.com` | `1440×900` | `1800` | Legacy Services & Featured Projects | Current 3-column static service cards and 2-column featured home cards (`The Mesquite Harmony`, `The Heritage Oak`). |
| `64_bluebonnet_legacy_testimonials_contact_y2800.png` | `bluebonnethomesrgv.com` | `1440×900` | `2800` | Legacy Testimonials & Contact | Current static 3-column testimonials, 4-step process row, and bottom contact form. |
