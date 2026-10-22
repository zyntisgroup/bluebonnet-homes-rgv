import React from "react";
import Link from "next/link";
import { ArrowUpRight, FileText, ShieldCheck, Compass } from "lucide-react";
import { SITE_CONFIG, CONSTRUCTION_STAGES } from "@/config/site";
import { BluebonnetMethodPinned } from "@/components/BluebonnetMethodPinned";
import { FaqAndCorridors } from "@/components/FaqAndCorridors";
import { EnquiryForm } from "@/components/EnquiryForm";

export default function ProcessPage() {
  return (
    <div className="pt-20 bg-ivory text-espresso">
      {/* Process Hero Banner */}
      <section className="py-16 sm:py-24 border-b border-espresso/12 bg-limestone/45 bg-architectural-grid">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
                <span className="w-8 h-[1px] bg-brass-dark" />
                <span>The Bluebonnet Method · 5-Phase Turnkey Architecture</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl text-espresso leading-[1.04] tracking-tight">
                How We Make Building on Your Lot Calm, Transparent, and Predictable.
              </h1>
              <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-2xl">
                From initial feasibility and optical site grading to curated finish selections and
                final commissioning, Michael &amp; Ana guide every step of your South Texas build.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-3">
              <a
                href={SITE_CONFIG.brand.costGuidePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.16em]"
              >
                <FileText className="w-4 h-4 text-brass-light" />
                <span>Download Cost Guide PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pinned 5-Phase Walkthrough */}
      <BluebonnetMethodPinned />

      {/* Pixel-Locked 4-Stage Structural Progression Grid */}
      <section className="py-20 sm:py-28 bg-espresso-deep text-ivory border-b border-ivory/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-3 mb-14">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-light">
              <span className="w-8 h-[1px] bg-brass" />
              <span>Visual Milestone Verification · Residence 1620</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory leading-[1.06] tracking-tight">
              Watching Your Residence Rise From CMU Block to Twilight Sanctuary.
            </h2>
            <p className="text-sm sm:text-base text-ivory/75 leading-relaxed">
              Every structural milestone is inspected on site with you before the next phase
              proceeds. Here are four pixel-locked stages of our flagship contemporary residence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONSTRUCTION_STAGES.map((stage) => (
              <div
                key={stage.stage}
                className="border border-ivory/15 bg-espresso-obsidian overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-espresso-obsidian/80 backdrop-blur-md border border-brass/50 font-mono text-xs uppercase tracking-[0.16em] text-brass-light">
                    Stage {stage.stage} / 04
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-2xl text-ivory">{stage.title}</h3>
                  <p className="text-sm text-ivory/75 leading-relaxed">{stage.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candid FAQ Accordion */}
      <FaqAndCorridors />

      {/* Consultation Form */}
      <EnquiryForm />
    </div>
  );
}
