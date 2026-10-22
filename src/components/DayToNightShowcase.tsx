import React, { useState } from "react";
import { Sun, Sunset, Moon, Sparkles, SlidersHorizontal, Layers, Hammer } from "lucide-react";
import { DAY_NIGHT_STATES, CONSTRUCTION_STAGES } from "@/config/site";

export const DayToNightShowcase: React.FC = () => {
  const [lightingIndex, setLightingIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"lighting" | "split" | "construction">("lighting");
  const [splitPercent, setSplitPercent] = useState(52);
  const [constructionIdx, setConstructionIdx] = useState(0);

  // Active state based on the interactive lighting index (0..3)
  const activeStateIdx = Math.min(
    DAY_NIGHT_STATES.length - 1,
    Math.max(0, Math.round(lightingIndex))
  );
  const activeState = DAY_NIGHT_STATES[activeStateIdx];

  const getLayerOpacity = (idx: number) => {
    if (idx === 0) return 1;
    const dist = lightingIndex - (idx - 1);
    return Math.max(0, Math.min(1, dist));
  };

  const getIcon = (idx: number) => {
    if (idx === 0) return Sun;
    if (idx === 1) return Sunset;
    if (idx === 2) return Sparkles;
    return Moon;
  };

  return (
    <section
      id="lighting-transformation"
      aria-label="Day-to-Night Architectural Lighting Transformation"
      className="relative bg-espresso-obsidian text-ivory py-16 sm:py-24 lg:py-28 border-b border-ivory/10 overflow-hidden"
    >
      {/* Background Ambient Radial Glow that shifts with time of day */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background:
            activeStateIdx === 0
              ? "radial-gradient(circle at 65% 35%, rgba(180,154,104,0.18), transparent 65%)"
              : activeStateIdx === 1
              ? "radial-gradient(circle at 65% 45%, rgba(212,140,70,0.22), transparent 65%)"
              : activeStateIdx === 2
              ? "radial-gradient(circle at 65% 45%, rgba(56,88,160,0.24), transparent 65%)"
              : "radial-gradient(circle at 65% 55%, rgba(180,154,104,0.14), transparent 60%)"
        }}
      />

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Header & Interactive Mode Switcher */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5 mb-8 lg:mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-brass-light">
              <span className="w-7 h-[1px] bg-brass shrink-0" />
              <span>02 · Solar Orientation &amp; Nocturnal Commissioning</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-ivory leading-[1.08] tracking-tight">
              Engineered for Every Hour of the South Texas Sky.
            </h2>
          </div>

          {/* 3 Interactive Inspection Modes */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 bg-ivory/5 border border-ivory/15 p-1.5 self-start xl:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("lighting")}
              className={`inline-flex items-center gap-1.5 px-3 py-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] whitespace-nowrap transition-colors ${
                viewMode === "lighting"
                  ? "bg-brass text-espresso-obsidian font-semibold"
                  : "text-ivory/80 hover:text-ivory"
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>4-State Lighting Scrub</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("split")}
              className={`inline-flex items-center gap-1.5 px-3 py-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] whitespace-nowrap transition-colors ${
                viewMode === "split"
                  ? "bg-brass text-espresso-obsidian font-semibold"
                  : "text-ivory/80 hover:text-ivory"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" />
              <span>Day / Night Split Wipe</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("construction")}
              className={`inline-flex items-center gap-1.5 px-3 py-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] whitespace-nowrap transition-colors ${
                viewMode === "construction"
                  ? "bg-brass text-espresso-obsidian font-semibold"
                  : "text-ivory/80 hover:text-ivory"
              }`}
            >
              <Hammer className="w-3.5 h-3.5 shrink-0" />
              <span>Framing-to-Finish Stages</span>
            </button>
          </div>
        </div>

        {/* Main 12-Column Split Stage: Left Architectural Viewport (7 cols), Right Telemetry & Controls (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          {/* Pixel-Locked Architectural Viewport + Dedicated Unclipped Metadata Footer (7 Cols) */}
          <div className="lg:col-span-7 border border-ivory/20 bg-espresso-deep flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Architectural Viewport Frame — fills height seamlessly with zero dead space underneath */}
            <div className="relative flex-1 min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] w-full overflow-hidden bg-espresso-obsidian">
              {viewMode === "lighting" && (
                <>
                  {DAY_NIGHT_STATES.map((st, idx) => (
                    <img
                      key={st.id}
                      src={st.image}
                      alt={`${st.label} — The Onyx & Ivory Residence 1620`}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-200"
                      style={{ opacity: getLayerOpacity(idx) }}
                    />
                  ))}
                </>
              )}

              {viewMode === "split" && (
                <div className="relative w-full h-full select-none">
                  {/* Underlying Night Layer */}
                  <img
                    src={DAY_NIGHT_STATES[3].image}
                    alt="Nocturnal Architectural Lighting State"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {/* Clipped Daylight Layer */}
                  <img
                    src={DAY_NIGHT_STATES[0].image}
                    alt="South Texas Daylight State"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                      clipPath: `inset(0 ${100 - splitPercent}% 0 0)`
                    }}
                  />
                  {/* Vertical Brass Split Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-brass shadow-[0_0_20px_rgba(180,154,104,0.9)] z-20 pointer-events-none"
                    style={{ left: `${splitPercent}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-brass text-espresso-obsidian flex items-center justify-center font-mono text-[10px] font-bold shadow-lg">
                      ↔
                    </div>
                  </div>

                  {/* Interactive Range Input Covering Canvas */}
                  <input
                    type="range"
                    min={5}
                    max={95}
                    value={splitPercent}
                    onChange={(e) => setSplitPercent(Number(e.target.value))}
                    aria-label="Slide to compare South Texas Daylight and Starlit Night illumination"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />

                  <div className="absolute top-3.5 left-3.5 z-20 px-3 py-1 bg-espresso-obsidian/80 backdrop-blur-md border border-ivory/20 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-ivory pointer-events-none">
                    11:00 AM · 5500K Daylight
                  </div>
                  <div className="absolute top-3.5 right-3.5 z-20 px-3 py-1 bg-espresso-obsidian/80 backdrop-blur-md border border-brass/50 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-brass-light pointer-events-none">
                    9:15 PM · 2700K Nocturnal
                  </div>
                </div>
              )}

              {viewMode === "construction" && (
                <>
                  {CONSTRUCTION_STAGES.map((cStage, idx) => (
                    <img
                      key={cStage.stage}
                      src={cStage.image}
                      alt={cStage.title}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
                        constructionIdx === idx ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </>
              )}

              {/* Top-Left Camera Lock Telemetry Badge */}
              {viewMode !== "split" && (
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 px-3 py-1.5 bg-espresso-obsidian/80 backdrop-blur-md border border-ivory/20 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-ivory">
                  <span className="w-2 h-2 rounded-full bg-brass animate-pulse shrink-0" />
                  <span>
                    {viewMode === "lighting"
                      ? `${activeState.time} · ${activeState.kelvin}`
                      : `Build Stage ${CONSTRUCTION_STAGES[constructionIdx].stage} / 04`}
                  </span>
                </div>
              )}
            </div>

            {/* Dedicated Unclipped Architectural Metadata & Scrubber Footer Bar */}
            <div className="p-4 sm:px-6 sm:py-5 bg-espresso-obsidian/90 border-t border-ivory/15 flex flex-col gap-3 justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] text-brass-light font-semibold">
                    Residence 1620 · The Onyx &amp; Ivory
                  </div>
                  <div className="font-mono text-xs text-ivory/80 leading-relaxed">
                    Edinburg, TX · Pixel-Locked 1672×941 Architectural Study
                  </div>
                </div>

                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ivory/70 sm:text-right shrink-0">
                  {viewMode === "lighting" && (
                    <span>
                      Active State: <strong className="text-ivory">{activeState.label}</strong>
                    </span>
                  )}
                  {viewMode === "split" && (
                    <span>
                      Split Ratio: <strong className="text-brass-light">{splitPercent}%</strong>
                    </span>
                  )}
                  {viewMode === "construction" && (
                    <span>
                      Stage:{" "}
                      <strong className="text-brass-light">
                        {CONSTRUCTION_STAGES[constructionIdx].stage} / 04
                      </strong>
                    </span>
                  )}
                </div>
              </div>

              {viewMode === "lighting" && (
                <div className="pt-2 border-t border-ivory/10 flex flex-col sm:flex-row sm:items-center gap-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-taupe shrink-0">
                    11:00 AM Daylight
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={3}
                    step={0.02}
                    value={lightingIndex}
                    onChange={(e) => setLightingIndex(parseFloat(e.target.value))}
                    aria-label="Scrub time of day lighting from Daylight to Night"
                    className="w-full accent-[#B49A68] cursor-pointer h-1.5"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brass-light shrink-0 sm:text-right">
                    9:15 PM Nocturnal
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Architectural Controls & Narrative Panel (5 Cols — Zero Truncation) */}
          <div className="lg:col-span-5 border border-ivory/15 bg-espresso-deep/95 p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-5">
            {viewMode !== "construction" ? (
              <>
                {/* 4 Time-of-Day Selector Buttons */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-taupe">
                    <span>Select Time of Day</span>
                    <span className="text-brass-light">Interactive Studio</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {DAY_NIGHT_STATES.map((st, idx) => {
                      const Icon = getIcon(idx);
                      const isSelected = activeStateIdx === idx && viewMode === "lighting";
                      return (
                        <button
                          key={st.id}
                          type="button"
                          onClick={() => {
                            setViewMode("lighting");
                            setLightingIndex(idx);
                          }}
                          className={`p-3.5 text-left border transition-all flex flex-col justify-between ${
                            isSelected
                              ? "border-brass bg-brass/15 text-ivory"
                              : "border-ivory/15 bg-ivory/5 text-ivory/75 hover:text-ivory hover:border-ivory/35"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brass-light">
                              {st.time}
                            </span>
                            <Icon className="w-3.5 h-3.5 text-brass-light shrink-0" />
                          </div>
                          <div className="text-xs sm:text-[13px] font-medium leading-snug text-ivory">
                            {st.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Lighting State Editorial Description */}
                <div className="space-y-2.5 border-t border-ivory/15 pt-4">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-brass-light">
                    State {activeState.index} · {activeState.kelvin}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-[28px] text-ivory leading-[1.15]">
                    {activeState.headline}
                  </h3>
                  <p className="text-sm text-ivory/85 leading-relaxed">
                    {activeState.description}
                  </p>
                </div>

                {/* 3 Engineering Specs for Current Lighting State */}
                <div className="space-y-2 pt-4 border-t border-ivory/15">
                  {activeState.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-ivory/5 px-3.5 py-2.5 border border-ivory/12 flex flex-wrap items-center justify-between gap-x-4 gap-y-1"
                    >
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-taupe">
                        {m.label}
                      </span>
                      <span className="font-mono text-xs text-ivory font-medium sm:text-right">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* 4 Construction-to-Completion Stage Selector Buttons */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brass-light">
                    <span>Same Camera · 4 Build Milestones</span>
                    <span>1672×941</span>
                  </div>

                  <div className="space-y-2">
                    {CONSTRUCTION_STAGES.map((cStage, idx) => (
                      <button
                        key={cStage.stage}
                        type="button"
                        onClick={() => setConstructionIdx(idx)}
                        className={`w-full p-3.5 text-left border transition-all flex items-center justify-between gap-3 ${
                          constructionIdx === idx
                            ? "border-brass bg-brass/15 text-ivory"
                            : "border-ivory/15 bg-ivory/5 text-ivory/75 hover:text-ivory"
                        }`}
                      >
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brass-light block">
                            Milestone {cStage.stage}
                          </span>
                          <span className="text-xs sm:text-sm font-medium leading-snug block mt-0.5">
                            {cStage.title}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-brass shrink-0">→</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 border-t border-ivory/15 pt-4">
                  <h3 className="font-serif text-2xl text-ivory leading-snug">
                    {CONSTRUCTION_STAGES[constructionIdx].title}
                  </h3>
                  <p className="text-sm text-ivory/85 leading-relaxed">
                    {CONSTRUCTION_STAGES[constructionIdx].caption}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
