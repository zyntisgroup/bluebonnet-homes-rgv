import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Expand,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  X
} from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/config/site";

export const PortfolioHorizontalGallery: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxProject, setLightboxProject] = useState<PortfolioProject | null>(null);
  const [lightboxImageIdx, setLightboxImageIdx] = useState(0);

  const activeProject = PORTFOLIO_PROJECTS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? PORTFOLIO_PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === PORTFOLIO_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (project: PortfolioProject, imgIdx = 0) => {
    setLightboxProject(project);
    setLightboxImageIdx(imgIdx);
  };

  return (
    <section
      id="portfolio-showcase"
      aria-label="Signature Custom Home Portfolio"
      className="relative bg-limestone/45 text-espresso py-20 sm:py-28 lg:py-32 border-b border-espresso/12 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Section Header & Counter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
              <span className="w-8 h-[1px] bg-brass-dark" />
              <span>03 · Verified Architectural Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-espresso leading-[1.05] tracking-tight">
              Four Signature Residences Across the Rio Grande Valley.
            </h2>
          </div>

          {/* Fraction Counter & Prev/Next Controls */}
          <div className="flex items-center gap-4 self-start lg:self-end">
            <div className="font-mono text-sm tracking-[0.2em] text-espresso/80 pr-2">
              <span className="text-espresso font-bold text-base">
                0{activeIdx + 1}
              </span>{" "}
              / 0{PORTFOLIO_PROJECTS.length}
            </div>

            <div className="flex items-center border border-espresso/20 bg-ivory">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous residence"
                className="p-3.5 text-espresso hover:bg-espresso hover:text-ivory transition-colors border-r border-espresso/15"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next residence"
                className="p-3.5 text-espresso hover:bg-espresso hover:text-ivory transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3.5 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.16em] hover:bg-brass hover:text-espresso-obsidian transition-colors"
            >
              <span>Full Archive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Residence Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-espresso/15 mb-10 bg-ivory">
          {PORTFOLIO_PROJECTS.map((proj, idx) => {
            const isCurrent = idx === activeIdx;
            return (
              <button
                key={proj.slug}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`p-4 sm:p-5 text-left border-r border-b border-espresso/15 transition-all relative ${
                  isCurrent
                    ? "bg-espresso text-ivory"
                    : "bg-ivory text-espresso hover:bg-limestone/60"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] mb-1">
                  <span className={isCurrent ? "text-brass-light" : "text-brass-dark"}>
                    Residence {proj.idNumber} · {proj.year}
                  </span>
                  <span className={isCurrent ? "text-ivory/70" : "text-espresso/55"}>
                    {proj.location}
                  </span>
                </div>
                <div className="font-serif text-xl sm:text-2xl tracking-tight truncate">
                  {proj.name}
                </div>
                <div
                  className={`text-xs font-mono mt-1 truncate ${
                    isCurrent ? "text-ivory/75" : "text-espresso/65"
                  }`}
                >
                  {proj.style} · {proj.sqft}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Residence Editorial Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-espresso/15 bg-ivory shadow-[0_20px_50px_rgba(48,40,32,0.07)]">
          {/* Left 7 Columns: Primary Architectural Photograph + Room Thumbnail Strip */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-espresso/15 flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full bg-espresso-deep overflow-hidden group">
              <img
                src={activeProject.heroImage}
                alt={activeProject.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-obsidian/70 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-espresso-obsidian/75 backdrop-blur-md border border-ivory/20 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory">
                  {activeProject.style}
                </span>
                <span className="px-3 py-1 bg-brass/90 text-espresso-obsidian font-mono text-[11px] uppercase tracking-[0.16em] font-semibold">
                  {activeProject.location} · {activeProject.year}
                </span>
              </div>

              <button
                type="button"
                onClick={() => openLightbox(activeProject, 0)}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2.5 bg-ivory/95 text-espresso font-mono text-xs uppercase tracking-[0.14em] hover:bg-brass hover:text-espresso-obsidian transition-colors shadow-md"
              >
                <Expand className="w-3.5 h-3.5" />
                <span>Inspect {activeProject.gallery.length} Photographs</span>
              </button>
            </div>

            {/* Interactive Room-by-Room Filmstrip */}
            <div className="p-4 sm:p-5 bg-ivory-warm border-t border-espresso/12">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-espresso/70 mb-3">
                <span>Room-by-Room Architectural Filmstrip</span>
                <span>Click any plate to enlarge</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {activeProject.gallery.slice(0, 6).map((item, idx) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => openLightbox(activeProject, idx)}
                    className="group relative aspect-[4/3] overflow-hidden border border-espresso/20 bg-espresso-deep focus:outline-none focus:ring-2 focus:ring-brass"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-espresso-obsidian/0 group-hover:bg-espresso-obsidian/45 transition-colors flex items-center justify-center">
                      <Expand className="w-4 h-4 text-ivory opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Architectural Dossier, Specs & Signature Features */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-espresso/12 pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass-dark font-semibold">
                  Dossier {activeProject.idNumber} / 04
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-espresso/75">
                  <MapPin className="w-3.5 h-3.5 text-brass-dark" />
                  {activeProject.lotContext}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-espresso tracking-tight">
                  {activeProject.name}
                </h3>
                <p className="text-sm font-medium text-brass-dark mt-1">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Verified Architectural Metrics Bar */}
              <div className="grid grid-cols-3 border border-espresso/15 bg-limestone/40 divide-x divide-espresso/15">
                <div className="p-3 text-center">
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.14em] text-espresso/65">
                    <Maximize2 className="w-3 h-3 text-brass-dark" />
                    <span>Living Area</span>
                  </div>
                  <div className="font-mono text-sm font-semibold text-espresso mt-0.5">
                    {activeProject.sqft}
                  </div>
                </div>
                <div className="p-3 text-center">
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.14em] text-espresso/65">
                    <BedDouble className="w-3 h-3 text-brass-dark" />
                    <span>Bedrooms</span>
                  </div>
                  <div className="font-mono text-sm font-semibold text-espresso mt-0.5">
                    {activeProject.beds} Suites
                  </div>
                </div>
                <div className="p-3 text-center">
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.14em] text-espresso/65">
                    <Bath className="w-3 h-3 text-brass-dark" />
                    <span>Bathrooms</span>
                  </div>
                  <div className="font-mono text-sm font-semibold text-espresso mt-0.5">
                    {activeProject.baths} Baths
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-espresso/80 leading-relaxed">
                {activeProject.architecturalNarrative}
              </p>

              {/* Signature Craftsmanship Highlights */}
              <div className="space-y-2.5 pt-2">
                <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-espresso/70">
                  Signature Architectural Details
                </h4>
                <ul className="space-y-2">
                  {activeProject.signatureFeatures.slice(0, 4).map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-espresso/85 leading-snug"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brass-dark mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-espresso/12 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => openLightbox(activeProject, 0)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.15em] hover:bg-brass hover:text-espresso-obsidian transition-colors"
              >
                <Expand className="w-3.5 h-3.5" />
                <span>Open Residence Gallery</span>
              </button>
              <Link
                href={`/portfolio#${activeProject.slug}`}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 border border-espresso/25 text-espresso font-mono text-xs uppercase tracking-[0.15em] hover:bg-limestone transition-colors"
              >
                <span>Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Architectural Lightbox Modal */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-espresso-obsidian/95 backdrop-blur-xl text-ivory flex flex-col justify-between p-4 sm:p-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxProject.name} Gallery Lightbox`}
        >
          <div className="max-w-[1360px] w-full mx-auto flex items-center justify-between gap-4 border-b border-ivory/15 pb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass-light block">
                {lightboxProject.location} · {lightboxProject.sqft} · {lightboxProject.style}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
                {lightboxProject.name} — Plate 0{lightboxImageIdx + 1} / 0
                {lightboxProject.gallery.length}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setLightboxProject(null)}
              aria-label="Close gallery lightbox"
              className="p-3 border border-ivory/25 text-ivory hover:bg-brass hover:text-espresso-obsidian transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-[1360px] w-full mx-auto my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-9 relative aspect-[16/10] bg-espresso-deep border border-ivory/15 overflow-hidden">
              <img
                src={lightboxProject.gallery[lightboxImageIdx].src}
                alt={lightboxProject.gallery[lightboxImageIdx].alt}
                className="w-full h-full object-contain bg-espresso-obsidian"
              />
            </div>

            <div className="lg:col-span-3 space-y-5">
              <div className="px-3 py-1 inline-block bg-brass/20 border border-brass/50 font-mono text-xs uppercase tracking-[0.16em] text-brass-light">
                {lightboxProject.gallery[lightboxImageIdx].category}
              </div>
              <p className="font-serif text-2xl text-ivory leading-snug">
                {lightboxProject.gallery[lightboxImageIdx].caption}
              </p>
              <p className="text-xs text-ivory/70 leading-relaxed">
                {lightboxProject.summary}
              </p>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImageIdx((i) =>
                      i === 0 ? lightboxProject.gallery.length - 1 : i - 1
                    )
                  }
                  className="flex-1 py-3 border border-ivory/25 font-mono text-xs uppercase tracking-[0.15em] hover:border-brass-light"
                >
                  ← Prev Plate
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImageIdx((i) =>
                      i === lightboxProject.gallery.length - 1 ? 0 : i + 1
                    )
                  }
                  className="flex-1 py-3 bg-brass text-espresso-obsidian font-mono text-xs uppercase tracking-[0.15em] font-semibold hover:bg-brass-light"
                >
                  Next Plate →
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[1360px] w-full mx-auto pt-4 border-t border-ivory/15 flex items-center gap-2 overflow-x-auto pb-2">
            {lightboxProject.gallery.map((gItem, idx) => (
              <button
                key={gItem.src}
                type="button"
                onClick={() => setLightboxImageIdx(idx)}
                className={`relative w-24 aspect-[4/3] shrink-0 overflow-hidden border-2 transition-all ${
                  lightboxImageIdx === idx
                    ? "border-brass scale-105"
                    : "border-transparent opacity-55 hover:opacity-90"
                }`}
              >
                <img src={gItem.src} alt={gItem.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
