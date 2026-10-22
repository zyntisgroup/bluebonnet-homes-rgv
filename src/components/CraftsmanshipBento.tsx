import React, { useState } from "react";
import { ShieldCheck, Sun, ThermometerSnowflake, Sparkles, Compass } from "lucide-react";

const CRAFTSMANSHIP_SPECS = [
  {
    id: "culinary",
    tag: "01 · Bespoke Millwork & Stone",
    title: "Natural White Oak, Book-Matched Quartzite & Commercial Culinary Suites",
    description:
      "Every kitchen is custom-fabricated around how your family cooks and gathers—featuring fluted hardwood range hoods, wall-mounted pot fillers, illuminated stone niches, and dual waterfall islands.",
    stats: "Custom Cabinet Shop · Full-Height Slab Backsplashes",
    image: "/images/optimized/onyx-ivory/custom-kitchen-gas-stove-pot-filler.webp",
    colSpan: "lg:col-span-7",
    icon: Sparkles
  },
  {
    id: "sanctuary",
    tag: "02 · Primary Bath Sanctuaries",
    title: "Floor-to-Ceiling Veined Stone & Sculptural Soaking Tubs",
    description:
      "Spa-grade primary suites featuring zero-threshold frameless glass rain showers, freestanding vessels, and floating white-oak double vanities.",
    stats: "Waterproof Membrane Systems · Custom LED Mirrors",
    image: "/images/optimized/onyx-ivory/luxury-bathroom-freestanding-soaking-tub.webp",
    colSpan: "lg:col-span-5",
    icon: ShieldCheck
  },
  {
    id: "climate",
    tag: "03 · South Texas Thermal Engineering",
    title: "High-SEER2 Zoned Climate & Low-E Solar Envelope",
    description:
      "Built for 100°F+ Rio Grande Valley summers with spectrally selective Low-E glass, sealed thermal attics, and multi-zone humidity control.",
    stats: "SHGC 0.22 Glazing · Zoned Smart Climate Control",
    image: "/images/generated/detail-energy-efficiency.jpg",
    colSpan: "lg:col-span-4",
    icon: ThermometerSnowflake
  },
  {
    id: "structure",
    tag: "04 · Structural Permanence",
    title: "Engineered Concrete Foundations, CMU Block & Windstorm Trusses",
    description:
      "Every residence starts with geotechnical soil awareness, reinforced foundations, and hurricane-rated structural framing inspected at every milestone.",
    stats: "RGV Soil & Windstorm Engineered",
    image: "/images/generated/detail-structural-framing.jpg",
    colSpan: "lg:col-span-4",
    icon: Compass
  },
  {
    id: "wine-stair",
    tag: "05 · Architectural Focal Volumes",
    title: "Floating Hardwood Stairs & Glass-Enclosed Wine Cellars",
    description:
      "Custom steel-and-oak staircases, hand-forged wrought iron balustrades, and climate-ready under-stair wine display rooms.",
    stats: "Bespoke Steel, Glass & Stone Fabrication",
    image: "/images/optimized/onyx-ivory/custom-wine-cellar-display-rack-black-metal.webp",
    colSpan: "lg:col-span-4",
    icon: Sun
  }
];

export const CraftsmanshipBento: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="craftsmanship"
      aria-label="Architectural Craftsmanship and South Texas Climate Engineering"
      className="relative bg-limestone/55 text-espresso py-20 sm:py-28 lg:py-32 border-b border-espresso/12"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
              <span className="w-8 h-[1px] bg-brass-dark" />
              <span>05 · Materiality &amp; Climate Intelligence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-espresso leading-[1.06] tracking-tight">
              What Lies Behind the Walls Matters as Much as the Stone You Touch.
            </h2>
          </div>

          <div className="lg:col-span-4 text-espresso/80 text-sm sm:text-base leading-relaxed">
            Every Bluebonnet residence pairs tactile natural surfaces—travertine, white oak,
            cantera stone, and hand-troweled stucco—with high-efficiency structural and mechanical
            engineering calibrated for South Texas.
          </div>
        </div>

        {/* Asymmetrical 12-Column Architectural Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {CRAFTSMANSHIP_SPECS.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredId === item.id;
            return (
              <article
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`${item.colSpan} group border border-espresso/15 bg-ivory flex flex-col justify-between overflow-hidden shadow-[0_12px_35px_rgba(48,40,32,0.05)] transition-all duration-500 hover:border-espresso/40`}
              >
                {/* Image Aperture */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-espresso-deep">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-obsidian/70 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 px-3 py-1 bg-espresso-obsidian/75 backdrop-blur-md border border-ivory/20 font-mono text-[10px] uppercase tracking-[0.18em] text-brass-light">
                    {item.tag}
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 bg-ivory/90 text-espresso flex items-center justify-center">
                    <Icon className="w-4 h-4 text-brass-dark" />
                  </div>
                </div>

                {/* Editorial Copy */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-2xl sm:text-[26px] text-espresso leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-espresso/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-espresso/10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-brass-dark">
                    <span>{item.stats}</span>
                    <span>Verified Spec</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
