import React from "react";
import { FileText, Download, Clock, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG, RESOURCE_ARTICLES } from "@/config/site";
import { EnquiryForm } from "@/components/EnquiryForm";

export default function ResourcesPage() {
  return (
    <div className="pt-20 bg-ivory text-espresso">
      {/* Resources Hero Banner */}
      <section className="py-16 sm:py-24 border-b border-espresso/12 bg-limestone/45 bg-architectural-grid">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
                <span className="w-8 h-[1px] bg-brass-dark" />
                <span>Homeowner Resource Library &amp; 2026 Cost Guide</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl text-espresso leading-[1.04] tracking-tight">
                South Texas Custom Home Building Intelligence.
              </h1>
              <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-2xl">
                Explore our official Custom Home Cost Guide PDF and six in-depth editorial guides
                written specifically for families planning a build in the Rio Grande Valley.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={SITE_CONFIG.brand.costGuidePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.16em] hover:bg-brass hover:text-espresso-obsidian transition-colors"
              >
                <Download className="w-4 h-4 text-brass-light" />
                <span>Download Cost Guide (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cost Guide Dossier Block */}
      <section className="py-14 sm:py-20 border-b border-espresso/12 bg-ivory-warm">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="border border-espresso/20 bg-ivory p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 bg-brass/20 border border-brass/40 font-mono text-xs uppercase tracking-[0.18em] text-espresso inline-block">
                Featured Dossier · Direct PDF Download
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-espresso">
                Bluebonnet Homes Custom Home Cost Guide
              </h2>
              <p className="text-sm sm:text-base text-espresso/80 leading-relaxed">
                Understand how lot grading, foundation engineering, square footage, energy-efficient
                envelopes, and curated finish selections come together in a transparent custom build
                budget.
              </p>
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.brand.costGuidePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.16em] hover:bg-brass hover:text-espresso-obsidian transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Bluebonnet-Homes-Cost-Guide.pdf</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 border border-espresso/15 overflow-hidden aspect-[16/10]">
              <img
                src="/images/day-night/01-daylight.jpg"
                alt="Bluebonnet Homes Cost Guide Residence"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Complete 6 Full-Length Editorial Guides */}
      <section className="py-16 sm:py-24 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
        {RESOURCE_ARTICLES.map((article, idx) => (
          <article
            key={article.slug}
            id={article.slug}
            className="scroll-mt-28 border border-espresso/15 bg-ivory-light overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-espresso/15 bg-espresso-deep flex flex-col justify-between">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 text-ivory space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-brass-light">
                    Key Builder Takeaways
                  </div>
                  <ul className="space-y-2.5">
                    {article.keyTakeaways.map((takeaway) => (
                      <li
                        key={takeaway}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory/85 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-espresso/12 pb-4 font-mono text-xs">
                  <span className="text-brass-dark uppercase tracking-[0.18em] font-semibold">
                    Guide 0{idx + 1} · {article.category}
                  </span>
                  <span className="text-taupe-dark inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.publishDate} · {article.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-espresso leading-tight">
                  {article.title}
                </h2>

                <div className="space-y-5">
                  {article.sections.map((sec) => (
                    <div key={sec.heading} className="space-y-2">
                      <h3 className="font-serif text-xl sm:text-2xl text-espresso font-semibold">
                        {sec.heading}
                      </h3>
                      <p className="text-sm sm:text-base text-espresso/80 leading-relaxed">
                        {sec.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-espresso/12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-espresso font-semibold hover:text-brass-dark"
                  >
                    <span>Schedule a Lot Walk or Consultation With Michael &amp; Ana</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <EnquiryForm />
    </div>
  );
}
