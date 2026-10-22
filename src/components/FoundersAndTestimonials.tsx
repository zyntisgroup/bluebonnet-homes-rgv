import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Quote, ShieldCheck, MapPin, HeartHandshake } from "lucide-react";
import { VERIFIED_TESTIMONIALS } from "@/config/site";

export const FoundersAndTestimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      {/* SECTION 7 (06): FOUNDERS PHILOSOPHY — ANA & MICHAEL LEADERSHIP */}
      <section
        id="founders"
        aria-label="About Founders Michael and Ana"
        className="relative bg-ivory text-espresso py-20 sm:py-28 lg:py-32 border-b border-espresso/12"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left 5 Columns: Framed Portrait of Co-Founder Ana + Architectural Stewardship Pedigree */}
            <div className="lg:col-span-5">
              <div className="border border-espresso/15 bg-espresso-deep p-3 sm:p-4 shadow-[0_24px_60px_rgba(48,40,32,0.14)]">
                {/* 1:1 Portrait Frame Matching Ana's 1024x1024 Studio Portrait */}
                <div className="relative aspect-square w-full overflow-hidden border border-ivory/15 bg-[#bdbec2]">
                  <img
                    src="/images/founders/ana-founder-portrait.jpg"
                    alt="Ana — Co-Founder and Principal of Bluebonnet Homes RGV"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle bottom gradient only at the very base for caption legibility */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 0%, rgba(20,17,14,0.78) 100%)"
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-ivory">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass-light block">
                        Leadership &amp; Client Stewardship · Mission, TX
                      </span>
                      <span className="font-serif text-xl sm:text-2xl leading-snug block">
                        Ana · Co-Founder, Bluebonnet Homes
                      </span>
                    </div>
                  </div>
                </div>

                {/* Docked Stewardship Pedigree Footer (Never Obscures Portrait) */}
                <div className="mt-3 pt-3 border-t border-ivory/15 bg-espresso-obsidian/80 p-4 text-ivory">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <HeartHandshake className="w-4 h-4 text-brass-light shrink-0" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass-light">
                      Personal Stewardship
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-ivory/85 leading-relaxed">
                    Every homeowner works directly with{" "}
                    <strong className="text-ivory">Michael &amp; Ana</strong>—from the first lot
                    walk and curated finish selections to the day we hand over your keys.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
                <span className="w-8 h-[1px] bg-brass-dark" />
                <span>06 · Leadership &amp; Accountability</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-espresso leading-[1.06] tracking-tight">
                Guided Personally by Michael &amp; Ana—Never Handed Off to a Call Center.
              </h2>

              <p className="text-base sm:text-lg text-espresso/85 leading-relaxed">
                When you build a custom home in the Rio Grande Valley, the difference between a
                stressful year and a joyful experience comes down to who is stewarding your project
                day to day.
              </p>

              <p className="text-sm sm:text-base text-espresso/75 leading-relaxed">
                Founders <strong className="text-espresso font-semibold">Michael and Ana</strong>{" "}
                established Bluebonnet Homes in Mission, Texas around a simple conviction: families
                building on their own land deserve both architectural excellence and calm,
                transparent management. By limiting the number of custom commissions we undertake at
                one time, we remain personally present on your homesite and in every design milestone.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 border border-espresso/15 bg-limestone/40">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-brass-dark font-semibold mb-1">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Curated Design Studio</span>
                  </div>
                  <p className="text-xs text-espresso/75 leading-relaxed">
                    Cohesive material boards prepared for your architectural style so decisions feel
                    inspiring rather than exhausting.
                  </p>
                </div>

                <div className="p-4 border border-espresso/15 bg-limestone/40">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-brass-dark font-semibold mb-1">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>Valley-Wide Site Mastery</span>
                  </div>
                  <p className="text-xs text-espresso/75 leading-relaxed">
                    Permitting, grading, and construction across Mission, McAllen, Edinburg, Pharr,
                    Weslaco, and Harlingen.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.16em] hover:bg-brass hover:text-espresso-obsidian transition-colors"
                >
                  <span>Read Michael &amp; Ana’s Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-espresso/25 text-espresso font-mono text-xs uppercase tracking-[0.16em] hover:bg-limestone transition-colors"
                >
                  <span>Meet at Our Mission Studio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 (07): VERIFIED HOMEOWNER TESTIMONIALS */}
      <section
        id="testimonials"
        aria-label="Verified Homeowner Testimonials"
        className="relative bg-espresso-deep text-ivory py-20 sm:py-28 lg:py-32 border-b border-ivory/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-architectural-grid-dark opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-light">
                <span className="w-8 h-[1px] bg-brass" />
                <span>07 · Homeowner Voices</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-ivory leading-[1.06] tracking-tight">
                What Families Say After Moving Into a Bluebonnet Home.
              </h2>
            </div>

            <div className="font-mono text-xs uppercase tracking-[0.18em] text-ivory/65">
              Verified Rio Grande Valley Custom Homeowners
            </div>
          </div>

          {/* Featured Large Editorial Quote + 4-Card Selector Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 border border-brass/35 bg-espresso-obsidian/80 p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Quote className="w-10 h-10 text-brass opacity-80" />
                  <span className="px-3 py-1 border border-ivory/15 font-mono text-[11px] uppercase tracking-[0.16em] text-brass-light">
                    {VERIFIED_TESTIMONIALS[activeTestimonial].projectTag}
                  </span>
                </div>

                <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-ivory leading-[1.28] tracking-tight">
                  “{VERIFIED_TESTIMONIALS[activeTestimonial].quote}”
                </blockquote>
              </div>

              <div className="pt-8 mt-8 border-t border-ivory/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-serif text-2xl text-brass-light">
                    {VERIFIED_TESTIMONIALS[activeTestimonial].author}
                  </div>
                  <div className="font-mono text-xs text-ivory/65">
                    {VERIFIED_TESTIMONIALS[activeTestimonial].location}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {VERIFIED_TESTIMONIALS.map((t, idx) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTestimonial(idx)}
                      aria-label={`Read testimonial from ${t.author}`}
                      className={`h-2 transition-all ${
                        activeTestimonial === idx
                          ? "w-8 bg-brass"
                          : "w-2 bg-ivory/25 hover:bg-ivory/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {VERIFIED_TESTIMONIALS.map((item, idx) => {
                const isSelected = activeTestimonial === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    className={`p-5 text-left border transition-all ${
                      isSelected
                        ? "border-brass bg-brass/15 text-ivory"
                        : "border-ivory/12 bg-ivory/5 text-ivory/70 hover:text-ivory hover:border-ivory/25"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-brass-light mb-1.5">
                      <span>0{idx + 1} · {item.projectTag}</span>
                      <span>{isSelected ? "Active" : "Read →"}</span>
                    </div>
                    <div className="font-serif text-xl text-ivory">{item.author}</div>
                    <p className="text-xs text-ivory/65 line-clamp-2 mt-1">
                      “{item.quote}”
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
