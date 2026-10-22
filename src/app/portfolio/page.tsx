import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  ArrowUpRight,
  Expand,
  CheckCircle2,
  X
} from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/config/site";
import { DayToNightShowcase } from "@/components/DayToNightShowcase";
import { EnquiryForm } from "@/components/EnquiryForm";

export default function PortfolioPage() {
  const [selectedStyle, setSelectedStyle] = useState<string>("All");
  const [activeLightbox, setActiveLightbox] = useState<{
    project: PortfolioProject;
    idx: number;
  } | null>(null);

  const styles = ["All", "Bold Contemporary", "Modern Mediterranean", "Spanish / Classic Mediterranean"];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (selectedStyle === "All") return true;
    if (selectedStyle === "Bold Contemporary") return p.style.includes("Contemporary");
    if (selectedStyle === "Modern Mediterranean") return p.style.includes("Modern Mediterranean");
    return p.style.includes("Spanish") || p.style.includes("Classic Mediterranean");
  });

  return (
    <div className="pt-20 bg-ivory text-espresso">
      {/* Portfolio Hero Header */}
      <section className="py-16 sm:py-24 border-b border-espresso/12 bg-limestone/45 bg-architectural-grid">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
              <span className="w-8 h-[1px] bg-brass-dark" />
              <span>Architectural Archive · Edinburg &amp; McAllen, TX</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-espresso leading-[1.04] tracking-tight">
              Completed Custom Residences Across the Rio Grande Valley.
            </h1>
            <p className="text-base sm:text-lg text-espresso/80 leading-relaxed">
              Every residence in our portfolio was custom-designed and constructed for a specific
              family and homesite in South Texas—spanning bold contemporary massing to timeless
              Mediterranean estates.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {styles.map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setSelectedStyle(st)}
                className={`px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] border transition-colors ${
                  selectedStyle === st
                    ? "bg-espresso text-ivory border-espresso"
                    : "bg-ivory text-espresso/80 border-espresso/20 hover:border-espresso"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Full Case Studies Stack */}
      <section className="py-16 sm:py-24 space-y-20 sm:space-y-28 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            id={project.slug}
            className="scroll-mt-28 border border-espresso/15 bg-ivory-light shadow-[0_20px_50px_rgba(48,40,32,0.06)]"
          >
            {/* Top Metadata Bar */}
            <div className="p-6 sm:p-8 border-b border-espresso/12 bg-limestone/40 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-brass-dark">
                  <span>Case Study {project.idNumber}</span>
                  <span>·</span>
                  <span>Completed {project.year}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-espresso mt-1">
                  {project.name}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
                <div className="px-4 py-2.5 bg-ivory border border-espresso/15">
                  <span className="text-taupe-dark block text-[10px] uppercase">Style</span>
                  <span className="font-semibold text-espresso">{project.style}</span>
                </div>
                <div className="px-4 py-2.5 bg-ivory border border-espresso/15">
                  <span className="text-taupe-dark block text-[10px] uppercase">Footprint</span>
                  <span className="font-semibold text-espresso">
                    {project.sqft} · {project.beds} Bed · {project.baths} Bath
                  </span>
                </div>
              </div>
            </div>

            {/* Main Exterior & Narrative Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-espresso/15">
                <div className="relative aspect-[16/10] bg-espresso-deep overflow-hidden group">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={() => setActiveLightbox({ project, idx: 0 })}
                    className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2.5 bg-ivory/95 text-espresso font-mono text-xs uppercase tracking-[0.14em] hover:bg-brass"
                  >
                    <Expand className="w-3.5 h-3.5" />
                    <span>Enlarge Full Plate</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-brass-dark font-semibold">
                    Architectural Narrative
                  </div>
                  <p className="text-base text-espresso/85 leading-relaxed">
                    {project.architecturalNarrative}
                  </p>

                  <div className="pt-3 space-y-2.5">
                    <div className="font-mono text-xs uppercase tracking-[0.16em] text-espresso/70">
                      Key Specifications &amp; Craftsmanship
                    </div>
                    {project.signatureFeatures.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-espresso/85">
                        <CheckCircle2 className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-espresso/12 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.16em] hover:bg-brass hover:text-espresso-obsidian transition-colors"
                  >
                    <span>Discuss a Similar Custom Build</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Room-by-Room Photographic Contact Sheet */}
            <div className="p-6 sm:p-8 border-t border-espresso/15 bg-ivory">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-espresso/70 mb-4">
                <span>Room-by-Room Photographic Plates ({project.gallery.length} Views)</span>
                <span>Click any image to inspect full resolution</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {project.gallery.map((gItem, idx) => (
                  <button
                    key={gItem.src}
                    type="button"
                    onClick={() => setActiveLightbox({ project, idx })}
                    className="group text-left border border-espresso/15 bg-ivory-light overflow-hidden hover:border-brass transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-espresso-deep">
                      <img
                        src={gItem.src}
                        alt={gItem.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brass-dark block">
                        {gItem.category}
                      </span>
                      <span className="text-xs text-espresso font-medium line-clamp-1 mt-0.5">
                        {gItem.caption}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Interactive Day-to-Night Study Included on Portfolio Route */}
      <DayToNightShowcase />

      {/* Private Consultation Form */}
      <EnquiryForm />

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-espresso-obsidian/95 backdrop-blur-xl text-ivory flex flex-col justify-between p-4 sm:p-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-5xl w-full mx-auto flex items-center justify-between border-b border-ivory/15 pb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-brass-light block">
                {activeLightbox.project.name} · {activeLightbox.project.location}
              </span>
              <h3 className="font-serif text-2xl text-ivory">
                {activeLightbox.project.gallery[activeLightbox.idx].caption}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setActiveLightbox(null)}
              className="p-2.5 border border-ivory/25 hover:bg-brass hover:text-espresso-obsidian"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-5xl w-full mx-auto my-6 aspect-[16/10] bg-espresso-deep border border-ivory/15 overflow-hidden">
            <img
              src={activeLightbox.project.gallery[activeLightbox.idx].src}
              alt={activeLightbox.project.gallery[activeLightbox.idx].alt}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="max-w-5xl w-full mx-auto flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveLightbox((prev) =>
                  prev
                    ? {
                        ...prev,
                        idx:
                          prev.idx === 0
                            ? prev.project.gallery.length - 1
                            : prev.idx - 1
                      }
                    : null
                )
              }
              className="px-5 py-3 border border-ivory/25 font-mono text-xs uppercase tracking-[0.16em]"
            >
              ← Previous Plate
            </button>
            <span className="font-mono text-xs text-ivory/70">
              Plate 0{activeLightbox.idx + 1} of 0{activeLightbox.project.gallery.length}
            </span>
            <button
              type="button"
              onClick={() =>
                setActiveLightbox((prev) =>
                  prev
                    ? {
                        ...prev,
                        idx:
                          prev.idx === prev.project.gallery.length - 1
                            ? 0
                            : prev.idx + 1
                      }
                    : null
                )
              }
              className="px-5 py-3 bg-brass text-espresso-obsidian font-mono text-xs uppercase tracking-[0.16em] font-semibold"
            >
              Next Plate →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
