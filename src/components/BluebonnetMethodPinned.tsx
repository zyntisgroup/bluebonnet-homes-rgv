import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { BLUEBONNET_METHOD_PHASES } from "@/config/site";

export const BluebonnetMethodPinned: React.FC = () => {
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const onScroll = () => {
      const vhCenter = (window.innerHeight || 900) * 0.45;
      let closestIdx = 0;
      let closestDist = Infinity;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height * 0.35;
        const dist = Math.abs(cardCenter - vhCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = idx;
        }
      });

      setActivePhaseIdx(closestIdx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentPhase = BLUEBONNET_METHOD_PHASES[activePhaseIdx];

  return (
    <section
      id="the-bluebonnet-method"
      aria-label="The 5-Phase Bluebonnet Method"
      className="relative bg-ivory text-espresso py-20 sm:py-28 lg:py-32 border-b border-espresso/12 bg-architectural-grid"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Editorial Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-20">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
              <span className="w-8 h-[1px] bg-brass-dark" />
              <span>04 · The Bluebonnet Method</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-espresso leading-[1.06] tracking-tight">
              Five Disciplined Phases From Raw Land to Commissioned Residence.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg text-espresso/80 leading-relaxed">
              Building a custom home on your lot should never feel chaotic. Our milestone-driven
              framework pairs architectural rigor with proactive weekly communication.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 px-5 py-3 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.16em] hover:bg-brass hover:text-espresso-obsidian transition-colors"
              >
                <span>Explore Full Process Guide</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Pinned Split Layout: Left Sticky Architectural Plate (5 Cols), Right Scrolling Phase Cards (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Sticky Visual Plate */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
            <div className="border border-espresso/15 bg-espresso-deep text-ivory overflow-hidden shadow-[0_20px_50px_rgba(48,40,32,0.1)]">
              {/* Primary Image Stack */}
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                {BLUEBONNET_METHOD_PHASES.map((phase, idx) => (
                  <img
                    key={phase.step}
                    src={phase.image}
                    alt={phase.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      activePhaseIdx === idx
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-obsidian/85 via-espresso-obsidian/20 to-transparent" />

                <div className="absolute top-4 left-4 px-3 py-1 bg-espresso-obsidian/80 backdrop-blur-md border border-ivory/20 font-mono text-[11px] uppercase tracking-[0.18em] text-brass-light">
                  {currentPhase.phaseLabel}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-brass-light block">
                      Milestone {currentPhase.step} / 05
                    </span>
                    <h3 className="font-serif text-2xl text-ivory leading-tight">
                      {currentPhase.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Client Experience Promise Box */}
              <div className="p-6 space-y-4 bg-espresso-deep border-t border-ivory/12">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brass-light">
                  <Sparkles className="w-3.5 h-3.5 text-brass" />
                  <span>What This Feels Like For You</span>
                </div>
                <p className="text-sm text-ivory/85 leading-relaxed">
                  “{currentPhase.clientExperience}”
                </p>

                {/* 5-Step Quick Jump Dots */}
                <div className="pt-3 border-t border-ivory/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {BLUEBONNET_METHOD_PHASES.map((p, idx) => (
                      <button
                        key={p.step}
                        type="button"
                        onClick={() => {
                          setActivePhaseIdx(idx);
                          cardRefs.current[idx]?.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                          });
                        }}
                        className={`h-2 transition-all ${
                          activePhaseIdx === idx
                            ? "w-8 bg-brass"
                            : "w-2 bg-ivory/30 hover:bg-ivory/60"
                        }`}
                        aria-label={`Jump to Phase ${p.step}`}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-ivory/60">
                    Step {currentPhase.step} of 05
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Scrolling 5-Step Architectural Cards */}
          <div className="lg:col-span-7 space-y-6">
            {BLUEBONNET_METHOD_PHASES.map((phase, idx) => {
              const isCurrent = activePhaseIdx === idx;
              return (
                <div
                  key={phase.step}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  onClick={() => setActivePhaseIdx(idx)}
                  className={`p-6 sm:p-9 border transition-all duration-500 cursor-pointer ${
                    isCurrent
                      ? "border-espresso bg-ivory-light shadow-[0_16px_40px_rgba(48,40,32,0.08)]"
                      : "border-espresso/15 bg-limestone/30 hover:bg-ivory-light/80"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-espresso/12">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass-dark font-semibold">
                      {phase.phaseLabel}
                    </span>
                    <span className="font-mono text-xs text-espresso/60">
                      Milestone {phase.step} / 05
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-espresso leading-snug">
                      {phase.title}
                    </h3>
                    <p className="text-sm font-medium text-brass-dark">
                      {phase.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-espresso/80 leading-relaxed pt-1">
                      {phase.description}
                    </p>
                  </div>

                  {/* Verified Deliverables Grid */}
                  <div className="mt-6 pt-5 border-t border-espresso/10">
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-espresso/65 mb-3">
                      Key Phase Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {phase.deliverables.map((deliv) => (
                        <div
                          key={deliv}
                          className="flex items-start gap-2 text-xs sm:text-sm text-espresso/85"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
