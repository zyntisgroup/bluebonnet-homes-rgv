import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  X,
  Clock
} from "lucide-react";
import { SITE_CONFIG, RESOURCE_ARTICLES, ResourceArticle } from "@/config/site";

const COST_GUIDE_HIGHLIGHTS = [
  "Realistic per-square-foot investment tiers for custom homes in the Rio Grande Valley",
  "How lot preparation, pad grading, utilities, and soil conditions affect site budgets",
  "Structural envelope & high-SEER2 South Texas climate system allowances explained",
  "Curated finish tiers (cabinetry, stone slabs, tile, glazing & architectural lighting)",
  "Step-by-step milestone payment structure & contingency planning without hidden fees"
];

export const CostGuideAndResources: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);

  return (
    <>
      {/* SECTION 9: VERIFIED CUSTOM HOME COST GUIDE */}
      <section
        id="cost-guide"
        aria-label="Custom Home Cost Guide Download"
        className="relative bg-limestone text-espresso py-20 sm:py-28 border-b border-espresso/15"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="border border-espresso/20 bg-ivory p-8 sm:p-12 lg:p-16 shadow-[0_24px_60px_rgba(48,40,32,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left 7 Cols: Editorial Pitch & Checklist */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-brass/20 border border-brass/40 font-mono text-xs uppercase tracking-[0.2em] text-espresso">
                  <FileText className="w-3.5 h-3.5 text-brass-dark" />
                  <span>08 · Complimentary Planning Resource (6.8 MB PDF)</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl text-espresso leading-[1.06] tracking-tight">
                  The South Texas Custom Home Cost Guide.
                </h2>

                <p className="text-base sm:text-lg text-espresso/80 leading-relaxed">
                  Before you commission architectural drawings or close on a homesite, you deserve a
                  candid, line-item understanding of what drives custom construction costs in the
                  Rio Grande Valley.
                </p>

                <div className="space-y-2.5 pt-1">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-brass-dark font-semibold">
                    Inside the Official Guide:
                  </div>
                  <ul className="space-y-2.5">
                    {COST_GUIDE_HIGHLIGHTS.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-espresso/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={SITE_CONFIG.brand.costGuidePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.16em] hover:bg-brass hover:text-espresso-obsidian transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official Cost Guide (PDF)</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-espresso/25 text-espresso font-mono text-xs uppercase tracking-[0.16em] hover:bg-limestone/60 transition-colors"
                  >
                    <span>Request Custom Budget Review</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right 5 Cols: Visual Dossier Preview Card */}
              <div className="lg:col-span-5">
                <div className="border border-espresso/20 bg-espresso-deep text-ivory p-6 sm:p-8 relative overflow-hidden">
                  <div className="relative aspect-[4/3] mb-6 border border-ivory/15 overflow-hidden">
                    <img
                      src="/images/day-night/02-golden-hour.jpg"
                      alt="Bluebonnet Homes Custom Home Cost Guide Cover Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-obsidian/90 via-espresso-obsidian/30 to-transparent p-5 flex flex-col justify-between">
                      <span className="self-start px-2.5 py-1 bg-brass text-espresso-obsidian font-mono text-[10px] uppercase tracking-[0.18em] font-bold">
                        2026 Edition · RGV
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass-light">
                          Bluebonnet Homes RGV
                        </p>
                        <h3 className="font-serif text-2xl text-ivory leading-tight">
                          Custom Home Investment &amp; Site Planning Dossier
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono border-t border-ivory/15 pt-4">
                    <div>
                      <span className="text-taupe block text-[10px] uppercase">Format</span>
                      <span className="text-ivory">Direct PDF (No Spam Gate)</span>
                    </div>
                    <div>
                      <span className="text-taupe block text-[10px] uppercase">Coverage</span>
                      <span className="text-brass-light">Mission · McAllen · Edinburg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: EDITORIAL HOMEBUILDING RESOURCES & GUIDES */}
      <section
        id="resources-preview"
        aria-label="South Texas Custom Home Building Guides"
        className="relative bg-ivory text-espresso py-20 sm:py-28 lg:py-32 border-b border-espresso/12"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
                <span className="w-8 h-[1px] bg-brass-dark" />
                <span>09 · Editorial Library &amp; Lot Intelligence</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-espresso leading-[1.06] tracking-tight">
                Practical Guides for Building in the Rio Grande Valley.
              </h2>
            </div>

            <Link
              href="/resources"
              className="self-start lg:self-end inline-flex items-center gap-2 px-5 py-3.5 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.16em] hover:bg-brass hover:text-espresso-obsidian transition-colors"
            >
              <span>View All 6 Guides</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESOURCE_ARTICLES.slice(0, 3).map((article, idx) => (
              <article
                key={article.slug}
                className="group border border-espresso/15 bg-ivory-light flex flex-col justify-between overflow-hidden hover:border-espresso/40 transition-all shadow-[0_12px_30px_rgba(48,40,32,0.04)]"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-espresso-deep overflow-hidden">
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-espresso-obsidian/80 backdrop-blur-md border border-ivory/20 font-mono text-[10px] uppercase tracking-[0.16em] text-brass-light">
                      0{idx + 1} · {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 font-mono text-[11px] text-taupe-dark">
                      <span>{article.publishDate}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-espresso leading-snug group-hover:text-brass-dark transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-espresso/75 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-espresso/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-espresso font-semibold hover:text-brass-dark transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-brass-dark" />
                    <span>Read Guide</span>
                  </button>
                  <Link
                    href={`/resources#${article.slug}`}
                    className="font-mono text-xs text-taupe-dark hover:text-espresso"
                  >
                    Full Page →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 bg-espresso-obsidian/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={selectedArticle.title}
          >
            <div className="bg-ivory text-espresso border border-espresso/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-espresso/15 pb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-brass-dark">
                    {selectedArticle.category} · {selectedArticle.readTime}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-espresso mt-1">
                    {selectedArticle.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article reader"
                  className="p-2 border border-espresso/20 hover:bg-espresso hover:text-ivory transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden border border-espresso/15">
                <img
                  src={selectedArticle.heroImage}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 bg-limestone/50 border border-espresso/15 space-y-2">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-brass-dark font-semibold">
                  Key Builder Takeaways
                </div>
                <ul className="space-y-1.5">
                  {selectedArticle.keyTakeaways.map((k) => (
                    <li key={k} className="text-xs sm:text-sm text-espresso/85 flex items-start gap-2">
                      <span className="text-brass-dark font-bold">•</span>
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                {selectedArticle.sections.map((sec) => (
                  <div key={sec.heading} className="space-y-2">
                    <h4 className="font-serif text-xl sm:text-2xl text-espresso">
                      {sec.heading}
                    </h4>
                    <p className="text-sm sm:text-base text-espresso/80 leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-espresso/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <Link
                  href="/contact"
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.16em]"
                >
                  <span>Discuss Your Lot With Michael &amp; Ana</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto px-5 py-3.5 border border-espresso/20 font-mono text-xs uppercase tracking-[0.16em]"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
