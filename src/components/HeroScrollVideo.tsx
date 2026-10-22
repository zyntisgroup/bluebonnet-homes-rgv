import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Sparkles,
  ShieldCheck,
  MapPin,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const TOTAL_HERO_FRAMES = 80;
const HERO_VIDEO_DURATION = 19.48;

export interface HeroChapter {
  id: string;
  index: number;
  range: [number, number];
  badge: string;
  stageTitle: string;
  timeRangeLabel: string;
  kicker: string;
  headline: string;
  subhead: string;
  specTag: string;
  fallbackImage: string;
}

const HERO_SCROLL_CHAPTERS: HeroChapter[] = [
  {
    id: "vision",
    index: 0,
    range: [0, 0.25],
    badge: "01 / 04 · Architectural Vision",
    stageTitle: "Architectural Vision",
    timeRangeLabel: "00.0s – 04.9s · Blueprint & 3D Massing",
    kicker: "Custom Home Builders · Rio Grande Valley, South Texas",
    headline: "Architecture Shaped Around Your Land, Light, and Family.",
    subhead:
      "From hand-drafted architectural blueprints and 3D spatial modeling to a commissioned custom estate—Michael & Ana guide every engineering, permitting, and design milestone.",
    specTag: "Stage 01 · Architectural Blueprint to 3D Scale Model",
    fallbackImage: "/images/hero-frames/frame-000.jpg"
  },
  {
    id: "structure",
    index: 1,
    range: [0.25, 0.52],
    badge: "02 / 04 · Structural Integrity",
    stageTitle: "Structural Integrity",
    timeRangeLabel: "04.9s – 10.1s · CMU Block & Trusses",
    kicker: "Engineered for South Texas Climate & Soils",
    headline: "Built From the Ground Up for Generations of Permanence.",
    subhead:
      "Watch reinforced foundations, CMU block masonry, dimensional framing, and windstorm-rated roof trusses rise directly from the blueprint onto your South Texas homesite.",
    specTag: "Stage 02 · Structural CMU Block, Framing & Roof Trusses",
    fallbackImage: "/images/hero-frames/frame-028.jpg"
  },
  {
    id: "daylight",
    index: 2,
    range: [0.52, 0.76],
    badge: "03 / 04 · Curated Craftsmanship",
    stageTitle: "Curated Craftsmanship",
    timeRangeLabel: "10.1s – 14.8s · Stucco, Stone & Glazing",
    kicker: "Zero Decision Fatigue · Transparent Milestone Budgets",
    headline: "Timeless Proportions in Warm Ivory, Stone, and White Oak.",
    subhead:
      "Hand-troweled warm ivory stucco, charcoal slate columns, Low-E architectural glazing, and custom millwork enclose the residence in crisp South Texas daylight.",
    specTag: "Stage 03 · Daylight Envelope, Cladding & Custom Finishes",
    fallbackImage: "/images/hero-frames/frame-052.jpg"
  },
  {
    id: "twilight",
    index: 3,
    range: [0.76, 1.001],
    badge: "04 / 04 · Evening Sanctuary",
    stageTitle: "Evening Sanctuary",
    timeRangeLabel: "14.8s – 19.5s · 2700K Twilight Glow",
    kicker: "Mission · McAllen · Edinburg · Sharyland · Weslaco · Harlingen",
    headline: "A Home That Welcomes You Back Every Single Evening.",
    subhead:
      "As dusk settles over the Rio Grande Valley, warm 2700K soffit downlights, vertical column sconces, and hand-set stone pavers transform the residence into a private sanctuary.",
    specTag: "Stage 04 · 2700K Nocturnal Architectural Illumination",
    fallbackImage: "/images/hero-frames/frame-076.jpg"
  }
];

function drawCoverImage(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement | HTMLVideoElement,
  canvasWidth: number,
  canvasHeight: number
) {
  const imgW =
    img instanceof HTMLVideoElement ? img.videoWidth || 1920 : img.naturalWidth || 1440;
  const imgH =
    img instanceof HTMLVideoElement ? img.videoHeight || 1080 : img.naturalHeight || 810;
  if (!imgW || !imgH) return;

  const canvasRatio = canvasWidth / canvasHeight;
  const imgRatio = imgW / imgH;

  let drawW = canvasWidth;
  let drawH = canvasHeight;
  let offsetX = 0;
  let offsetY = 0;

  if (canvasRatio > imgRatio) {
    drawW = canvasWidth;
    drawH = canvasWidth / imgRatio;
    offsetY = (canvasHeight - drawH) * 0.5;
  } else {
    drawH = canvasHeight;
    drawW = canvasHeight * imgRatio;
    offsetX = (canvasWidth - drawW) * 0.5;
  }

  ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
}

export const HeroScrollVideo: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(TOTAL_HERO_FRAMES).fill(null)
  );
  const lastDrawnFrameRef = useRef<number>(-1);
  const isSeekingVideoRef = useRef<boolean>(false);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"idle" | "down" | "up">("idle");
  const [framesLoadedCount, setFramesLoadedCount] = useState(0);

  // Determine active chapter from scrollProgress
  const rawActiveIndex = HERO_SCROLL_CHAPTERS.findIndex(
    (c) => scrollProgress >= c.range[0] && scrollProgress < c.range[1]
  );
  const activeChapterIndex = rawActiveIndex === -1 ? HERO_SCROLL_CHAPTERS.length - 1 : rawActiveIndex;
  const currentChapter = HERO_SCROLL_CHAPTERS[activeChapterIndex];

  // Calculate normalized progress within the active chapter (0..1)
  const chapterSpan = Math.max(0.01, currentChapter.range[1] - currentChapter.range[0]);
  const chapterLocalProgress = Math.max(
    0,
    Math.min(1, (scrollProgress - currentChapter.range[0]) / chapterSpan)
  );

  // Render exact interpolated frame to canvas with smooth sub-frame temporal cross-dissolve
  const renderFrameAtProgress = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const targetW = Math.round(canvas.clientWidth * dpr);
    const targetH = Math.round(canvas.clientHeight * dpr);
    if (targetW > 0 && targetH > 0 && (canvas.width !== targetW || canvas.height !== targetH)) {
      canvas.width = targetW;
      canvas.height = targetH;
      lastDrawnFrameRef.current = -1;
    }

    const exactIdx = Math.max(
      0,
      Math.min(TOTAL_HERO_FRAMES - 1, progress * (TOTAL_HERO_FRAMES - 1))
    );
    const baseIdx = Math.floor(exactIdx);
    const nextIdx = Math.min(TOTAL_HERO_FRAMES - 1, baseIdx + 1);
    const blendFrac = exactIdx - baseIdx;

    // Cache key at 1/16th frame resolution for sub-frame smooth rendering without wasted paints
    const cacheKey = Math.round(exactIdx * 16);
    if (cacheKey === lastDrawnFrameRef.current) return;

    const frames = framesRef.current;
    let baseImg = frames[baseIdx];
    let nextImg = frames[nextIdx];

    // Find nearest loaded fallback frame if target frame is still streaming
    if (!baseImg) {
      for (let offset = 1; offset < TOTAL_HERO_FRAMES; offset++) {
        if (baseIdx - offset >= 0 && frames[baseIdx - offset]) {
          baseImg = frames[baseIdx - offset];
          break;
        }
        if (baseIdx + offset < TOTAL_HERO_FRAMES && frames[baseIdx + offset]) {
          baseImg = frames[baseIdx + offset];
          break;
        }
      }
    }
    if (!nextImg) nextImg = baseImg;

    if (baseImg && baseImg.complete && baseImg.naturalWidth > 0) {
      ctx.globalAlpha = 1;
      drawCoverImage(ctx, baseImg, canvas.width, canvas.height);

      // Subtle sub-frame cross-dissolve eliminates flipbook stepping and yields fluid filmic motion
      if (
        blendFrac > 0.02 &&
        nextImg &&
        nextImg !== baseImg &&
        nextImg.complete &&
        nextImg.naturalWidth > 0
      ) {
        ctx.globalAlpha = blendFrac;
        drawCoverImage(ctx, nextImg, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      }
      lastDrawnFrameRef.current = cacheKey;
    } else if (videoRef.current && videoRef.current.readyState >= 2) {
      ctx.globalAlpha = 1;
      drawCoverImage(ctx, videoRef.current, canvas.width, canvas.height);
    }
  }, []);

  // Preload the 80 extracted frames in a prioritized two-pass order
  // Pass 1: Keyframes every 4 frames for immediate scrubbing across the entire timeline
  // Pass 2: Remaining intermediate frames for 60fps frame-accurate scrubbing
  useEffect(() => {
    let isMounted = true;
    const order: number[] = [];
    for (let i = 0; i < TOTAL_HERO_FRAMES; i += 4) order.push(i);
    if (!order.includes(TOTAL_HERO_FRAMES - 1)) order.push(TOTAL_HERO_FRAMES - 1);
    for (let i = 0; i < TOTAL_HERO_FRAMES; i++) {
      if (!order.includes(i)) order.push(i);
    }

    let loaded = 0;
    order.forEach((frameIdx) => {
      const img = new Image();
      img.decoding = "async";
      img.src = `/images/hero-frames/frame-${String(frameIdx).padStart(3, "0")}.jpg`;
      img.onload = () => {
        if (!isMounted) return;
        framesRef.current[frameIdx] = img;
        loaded += 1;
        setFramesLoadedCount(loaded);
        if (frameIdx === 0 || loaded % 8 === 0 || loaded === TOTAL_HERO_FRAMES) {
          lastDrawnFrameRef.current = -1;
        }
      };
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Ensure underlying <video> is strictly paused (never auto-playing or looping on its own)
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.pause();

    const onSeeked = () => {
      isSeekingVideoRef.current = false;
    };
    const onPlayAttempt = () => {
      // Prevent any independent playback; scroll position is the sole controller
      vid.pause();
    };

    vid.addEventListener("seeked", onSeeked);
    vid.addEventListener("play", onPlayAttempt);
    return () => {
      vid.removeEventListener("seeked", onSeeked);
      vid.removeEventListener("play", onPlayAttempt);
    };
  }, []);

  // Main 60fps Scroll-Synchronized Playback Loop
  useEffect(() => {
    let rafId = 0;
    let smoothP = 0;
    let prevTargetP = 0;
    let idleFrames = 0;

    // Initialize from current scroll position immediately
    if (sectionRef.current) {
      const initRect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const maxScroll = Math.max(1, initRect.height - vh);
      smoothP = Math.max(0, Math.min(1, -initRect.top / maxScroll));
      prevTargetP = smoothP;
    }

    const tick = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const vh = window.innerHeight || 900;
        const maxScroll = Math.max(1, rect.height - vh);
        const targetP = Math.max(0, Math.min(1, -rect.top / maxScroll));

        const rawDelta = targetP - prevTargetP;
        prevTargetP = targetP;

        // Smooth physical settling deceleration:
        // Follows user scroll input responsively while providing an organic, gentle deceleration
        // when the user stops or releases the wheel, settling stably into the resting frame.
        const diff = targetP - smoothP;
        const absDiff = Math.abs(diff);

        if (absDiff > 0.00015) {
          smoothP += diff * 0.082;
          idleFrames = 0;
          if (Math.abs(rawDelta) > 0.0003) {
            setScrollDirection(rawDelta > 0 ? "down" : "up");
          }
        } else {
          smoothP = targetP;
          idleFrames += 1;
          if (idleFrames >= 8) {
            setScrollDirection("idle");
          }
        }

        setScrollProgress((prev) => (Math.abs(prev - smoothP) > 0.0002 ? smoothP : prev));

        // 1. Render exact frame to <canvas> (instantaneous forward & reverse)
        renderFrameAtProgress(smoothP);

        // 2. Synchronize <video> currentTime with scroll progress while keeping it paused
        const vid = videoRef.current;
        if (vid && vid.readyState >= 1) {
          if (!vid.paused) vid.pause();
          const dur =
            vid.duration && !Number.isNaN(vid.duration) ? vid.duration : HERO_VIDEO_DURATION;
          const desiredTime = Math.max(0, Math.min(dur - 0.04, smoothP * dur));
          if (!isSeekingVideoRef.current && Math.abs(vid.currentTime - desiredTime) > 0.04) {
            isSeekingVideoRef.current = true;
            try {
              vid.currentTime = desiredTime;
            } catch {
              isSeekingVideoRef.current = false;
            }
          }
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [renderFrameAtProgress]);

  // Redraw when new frames finish loading
  useEffect(() => {
    renderFrameAtProgress(scrollProgress);
  }, [framesLoadedCount, scrollProgress, renderFrameAtProgress]);

  // Scroll smoothly to a normalized progress value (0..1) when user interacts with chapter bar or scrubber
  const scrollToNormalizedProgress = (normP: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const vh = window.innerHeight || 900;
    const maxScroll = Math.max(1, rect.height - vh);
    const clamped = Math.max(0, Math.min(1, normP));
    window.scrollTo({
      top: sectionTop + clamped * maxScroll,
      behavior: "smooth"
    });
  };

  const jumpToChapter = (idx: number) => {
    const targetChapter = HERO_SCROLL_CHAPTERS[idx];
    if (!targetChapter) return;
    // Scroll to the sweet spot (35% into that chapter's range) so its visual milestone is front-and-center
    const targetP =
      targetChapter.range[0] + (targetChapter.range[1] - targetChapter.range[0]) * 0.35;
    scrollToNormalizedProgress(targetP);
  };

  const currentSeconds = (scrollProgress * HERO_VIDEO_DURATION).toFixed(1);
  const totalSeconds = HERO_VIDEO_DURATION.toFixed(1);
  const currentFrameNumber = Math.min(
    TOTAL_HERO_FRAMES,
    Math.max(1, Math.round(scrollProgress * (TOTAL_HERO_FRAMES - 1)) + 1)
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Hero Architectural Showcase"
      className="relative h-[580vh] bg-espresso-obsidian text-ivory select-none"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Layer 1: Underlying Paused 4K Master Video (synchronized with scroll currentTime, never auto-looping) */}
        <video
          ref={videoRef}
          src={SITE_CONFIG.heroVideo.mp4Url}
          poster="/images/hero-frames/frame-000.jpg"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            transform: `scale(${1.0 + scrollProgress * 0.03})`
          }}
        />

        {/* Layer 2: High-Frequency 60fps Frame-Scrubbing Canvas (guarantees zero-latency forward & reverse scrubbing) */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full block pointer-events-none"
          style={{
            transform: `scale(${1.0 + scrollProgress * 0.03})`
          }}
        />

        {/* Layer 3: Calibrated Editorial Gradient Scrims — protects left-side text legibility while keeping right-side architecture vivid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,17,14,0.70) 0%, rgba(20,17,14,0.28) 40%, rgba(20,17,14,0.48) 76%, rgba(20,17,14,0.88) 100%)"
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,17,14,0.76) 0%, rgba(20,17,14,0.45) 48%, rgba(20,17,14,0.12) 100%)"
          }}
        />

        {/* Top Bar: Active Stage Badge + Live Scroll-Synchronized Video Telemetry */}
        <div className="relative z-10 pt-24 sm:pt-28 px-5 sm:px-8 lg:px-12 max-w-[1440px] w-full mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-espresso-obsidian/75 backdrop-blur-md border border-ivory/20 text-[11px] font-mono uppercase tracking-[0.2em] text-brass-light">
            <Sparkles className="w-3.5 h-3.5 text-brass shrink-0" />
            <span>{currentChapter.badge}</span>
          </div>

          {/* Scroll-Controlled Telemetry & Chapter Stepper */}
          <div className="flex items-center gap-2 bg-espresso-obsidian/75 backdrop-blur-md border border-ivory/20 px-3 py-1.5">
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                scrollDirection === "idle"
                  ? "bg-brass/70"
                  : "bg-brass animate-ping"
              }`}
            />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-ivory/90">
              {scrollDirection === "down"
                ? "Advancing"
                : scrollDirection === "up"
                ? "Reversing"
                : "Scroll-Synced"}
            </span>
            <span className="hidden md:inline font-mono text-[11px] text-brass-light border-l border-ivory/15 pl-2.5">
              {currentSeconds}s / {totalSeconds}s · Frame {String(currentFrameNumber).padStart(2, "0")}/{TOTAL_HERO_FRAMES}
            </span>

            <div className="flex items-center gap-1 border-l border-ivory/15 pl-2 ml-1">
              <button
                type="button"
                onClick={() => jumpToChapter(Math.max(0, activeChapterIndex - 1))}
                disabled={activeChapterIndex === 0}
                aria-label="Previous architectural stage"
                className="p-1 text-ivory/75 hover:text-brass-light disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  jumpToChapter(Math.min(HERO_SCROLL_CHAPTERS.length - 1, activeChapterIndex + 1))
                }
                disabled={activeChapterIndex === HERO_SCROLL_CHAPTERS.length - 1}
                aria-label="Next architectural stage"
                className="p-1 text-ivory/75 hover:text-brass-light disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Center Editorial Narrative — Smoothly Synchronized Multi-Slide Stage Stack */}
        <div className="relative z-10 px-5 sm:px-8 lg:px-12 max-w-[1440px] w-full mx-auto my-auto py-4">
          <div className="max-w-2xl lg:max-w-[660px]">
            {/* Interactive Synchronized Text Slider Viewport */}
            <div className="relative min-h-[250px] sm:min-h-[290px] lg:min-h-[310px] flex items-center">
              {HERO_SCROLL_CHAPTERS.map((chap, idx) => {
                const isActive = idx === activeChapterIndex;
                const isPast = idx < activeChapterIndex;
                return (
                  <div
                    key={chap.id}
                    aria-hidden={!isActive}
                    className={`w-full transition-all duration-300 ease-out ${
                      isActive
                        ? "relative opacity-100 translate-y-0 pointer-events-auto visible"
                        : isPast
                        ? "absolute inset-0 opacity-0 -translate-y-4 pointer-events-none invisible"
                        : "absolute inset-0 opacity-0 translate-y-4 pointer-events-none invisible"
                    }`}
                  >
                    <div className="space-y-4 sm:space-y-5">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-brass-light">
                        <span className="w-8 h-[1px] bg-brass" />
                        <span>{chap.kicker}</span>
                      </div>

                      <h1 className="font-serif text-3xl sm:text-5xl lg:text-[62px] text-ivory leading-[1.04] tracking-tight drop-shadow-sm">
                        {chap.headline}
                      </h1>

                      <p className="text-sm sm:text-base lg:text-lg text-ivory/90 leading-relaxed max-w-xl font-normal">
                        {chap.subhead}
                      </p>

                      {/* Active Chapter Visual Milestone Pill */}
                      <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-espresso-obsidian/65 backdrop-blur-sm border border-brass/35 font-mono text-[11px] text-brass-light">
                        <span>{chap.timeRangeLabel}</span>
                        <span className="w-16 h-1 bg-ivory/15 overflow-hidden hidden sm:inline-block">
                          <span
                            className="block h-full bg-brass transition-all duration-100"
                            style={{
                              width: `${isActive ? Math.round(chapterLocalProgress * 100) : 0}%`
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-brass text-espresso-obsidian font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-ivory transition-all duration-300"
              >
                <span>Schedule Private Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href={SITE_CONFIG.brand.costGuidePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-espresso-obsidian/65 backdrop-blur-md border border-ivory/30 text-ivory font-mono text-xs uppercase tracking-[0.16em] hover:border-brass-light hover:text-brass-light transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-brass-light" />
                <span>Download Custom Home Cost Guide</span>
              </a>
            </div>

            {/* Trust Micro-Bar */}
            <div className="pt-3.5 flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs text-ivory/80 font-mono">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brass-light" />
                Build on Your Lot or Ours
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brass-light" />
                Mission · McAllen · Edinburg · RGV
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Scroll Scrubber & Synchronized 4-Stage Chapter Bar */}
        <div className="relative z-10 border-t border-ivory/15 bg-espresso-obsidian/80 backdrop-blur-md">
          {/* Interactive Range Scrubber + Progress Hairline */}
          <div className="relative h-2 w-full bg-ivory/10 group cursor-ew-resize">
            <div
              className="h-full bg-brass transition-all duration-75"
              style={{ width: `${Math.max(2, scrollProgress * 100)}%` }}
            />
            <input
              type="range"
              min={0}
              max={1000}
              value={Math.round(scrollProgress * 1000)}
              onChange={(e) => scrollToNormalizedProgress(Number(e.target.value) / 1000)}
              aria-label="Scrub hero architectural video timeline"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />
          </div>

          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-3 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {HERO_SCROLL_CHAPTERS.map((chap, idx) => {
              const isCurrent = idx === activeChapterIndex;
              const isCompleted = scrollProgress >= chap.range[1];
              const fillPct = isCompleted
                ? 100
                : isCurrent
                ? Math.round(chapterLocalProgress * 100)
                : 0;

              return (
                <button
                  key={chap.id}
                  type="button"
                  onClick={() => jumpToChapter(idx)}
                  className={`text-left px-3 py-2 border transition-all relative overflow-hidden ${
                    isCurrent
                      ? "border-brass bg-ivory/10 text-ivory"
                      : "border-ivory/10 hover:border-ivory/25 text-ivory/60 hover:text-ivory/90"
                  }`}
                >
                  {/* Individual Stage Progress Fill Bar */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] bg-brass transition-all duration-100"
                    style={{ width: `${fillPct}%` }}
                  />
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
                    <span className={isCurrent ? "text-brass-light font-semibold" : ""}>
                      Stage 0{idx + 1}
                    </span>
                    <span className="text-[10px] text-ivory/50">
                      {isCurrent ? `${fillPct}%` : isCompleted ? "100%" : ""}
                    </span>
                  </div>
                  <div className="text-xs font-medium mt-0.5 leading-snug">
                    {chap.stageTitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
