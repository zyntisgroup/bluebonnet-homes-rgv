import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, Layers, Shield, Sun } from "lucide-react";

const POSITIONING_PILLARS = [
  {
    number: "01",
    icon: Compass,
    title: "Build-on-Your-Lot Mastery",
    body: "Whether you own an estate parcel in Sharyland, a gated lot in Edinburg, or are still evaluating land in Mission or McAllen, we manage site grading, soil engineering, utilities, and municipal permitting from day one."
  },
  {
    number: "02",
    icon: Layers,
    title: "Curated Choices, Zero Overwhelm",
    body: "Custom building should never feel like a second full-time job. We pre-curate harmonious stone, hardwood, tile, cabinetry, and lighting collections tailored to your architectural style and target investment."
  },
  {
    number: "03",
    icon: Shield,
    title: "Transparent Milestone Management",
    body: "Backed by our Custom Home Cost Guide and scheduled walkthroughs with Michael & Ana, you always know what phase is underway, what decisions are upcoming, and where your budget stands."
  },
  {
    number: "04",
    icon: Sun,
    title: "Engineered for South Texas Climate",
    body: "From solar-oriented overhangs and Low-E glazing to reinforced foundations, windstorm roof ties, and high-SEER2 humidity-balanced HVAC systems, every residence is built for the Rio Grande Valley."
  }
];

export const ArchitecturalCurtainTransition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [revealProgress, setRevealProgress] = useState(0.35);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      // Progress 0 when top enters bottom of viewport, 1 when top reaches 15% of viewport
      const raw = (vh - rect.top) / (vh * 0.85);
      const clamped = Math.max(0, Math.min(1, raw));
      setRevealProgress(clamped);
    };
    onScroll();
    const handle = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onScroll);
    };
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Curtain open percentage: opens from 18% to 0% inset as user scrolls in
  const curtainInsetPct = Math.max(0, (1 - revealProgress) * 18);

  return (
    <section
      ref={containerRef}
      className="relative bg-ivory text-espresso py-20 sm:py-28 lg:py-32 border-b border-espresso/10 overflow-hidden bg-architectural-grid"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Kicker & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 sm:mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
              <span className="w-8 h-[1px] bg-brass-dark" />
              <span>01 · The Bluebonnet Standard</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-espresso leading-[1.06] tracking-tight">
              Understated luxury. Architectural permanence. A building experience that feels calm and considered.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 text-espresso/80 text-base sm:text-lg leading-relaxed">
            <p>
              Too many families approach custom home building bracing for stress, fragmented
              communication, and runaway allowances. At{" "}
              <strong className="text-espresso font-semibold">Bluebonnet Homes</strong>, we built
              our practice in Mission, Texas to prove the opposite.
            </p>
            <p className="text-sm sm:text-base text-espresso/70">
              When architectural planning, site engineering, and finish curation are managed under
              one roof with personal accountability, building your forever home becomes one of life’s
              most rewarding chapters.
            </p>
          </div>
        </div>

        {/* Nota-Inspired Split-Curtain Architectural Aperture */}
        <div className="relative rounded-none border border-espresso/15 bg-espresso-deep overflow-hidden shadow-[0_24px_60px_rgba(48,40,32,0.12)]">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src="/images/optimized/onyx-ivory/two-story-living-room-modern-staircase.webp"
              alt="Double-height living room with black marble fireplace and floating wood staircase in The Onyx & Ivory by Bluebonnet Homes"
              className="w-full h-full object-cover transition-transform duration-700"
              style={{
                transform: `scale(${1.08 - revealProgress * 0.08})`
              }}
            />

            {/* Subtle warm vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(24,20,16,0.72) 0%, rgba(24,20,16,0.18) 50%, rgba(24,20,16,0.65) 100%)"
              }}
            />

            {/* Left & Right Split Curtain Panels (part horizontally on scroll) */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-0 bottom-0 left-0 bg-limestone border-r border-espresso/20 z-10 pointer-events-none transition-transform duration-150"
              style={{
                width: "22%",
                transform: `translateX(-${100 - curtainInsetPct * 5}%)`
              }}
            />
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-0 bottom-0 right-0 bg-limestone border-l border-espresso/20 z-10 pointer-events-none transition-transform duration-150"
              style={{
                width: "22%",
                transform: `translateX(${100 - curtainInsetPct * 5}%)`
              }}
            />

            {/* Interior Caption Overlay */}
            <div className="absolute inset-0 p-6 sm:p-10 lg:p-12 flex flex-col justify-between text-ivory">
              <div className="flex items-center justify-between gap-4">
                <span className="px-3 py-1 bg-espresso-obsidian/70 backdrop-blur-md border border-ivory/20 font-mono text-[11px] uppercase tracking-[0.18em] text-brass-light">
                  Interior Volume · The Onyx &amp; Ivory (Edinburg, TX)
                </span>
                <span className="hidden sm:inline-block font-mono text-xs text-ivory/80 bg-espresso-obsidian/60 px-3 py-1 border border-ivory/15">
                  Double-Height Salon · Nero Marquina Fireplace · Floating Stair
                </span>
              </div>

              <div className="max-w-xl space-y-2 bg-espresso-obsidian/70 backdrop-blur-md p-5 sm:p-6 border border-ivory/15">
                <p className="font-serif text-xl sm:text-2xl text-ivory leading-snug">
                  “We design homes from the inside out—calibrating ceiling heights, natural light,
                  and sightlines before a single footing is poured.”
                </p>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-brass-light">
                    Michael &amp; Ana · Founders, Bluebonnet Homes
                  </span>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-ivory hover:text-brass-light transition-colors"
                  >
                    <span>Our Story</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Positioning Pillars Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-espresso/15 bg-ivory-light">
          {POSITIONING_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="p-6 sm:p-8 border-r border-b border-espresso/15 flex flex-col justify-between group hover:bg-limestone/45 transition-colors duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass-dark font-semibold">
                      Pillar {pillar.number}
                    </span>
                    <div className="w-9 h-9 flex items-center justify-center border border-espresso/15 bg-ivory text-espresso group-hover:border-brass group-hover:bg-brass group-hover:text-espresso-obsidian transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl text-espresso leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-espresso/75 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-espresso/10 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.16em] text-taupe-dark">
                  <span>Rio Grande Valley</span>
                  <span className="text-brass-dark">Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
