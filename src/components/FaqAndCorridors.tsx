import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/config/site";

export const FaqAndCorridors: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions About Building a Custom Home in South Texas"
      className="relative bg-limestone/45 text-espresso py-20 sm:py-24 border-b border-espresso/12"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
              <span className="w-8 h-[1px] bg-brass-dark" />
              <span>11 · Candid Answers</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso leading-[1.06] tracking-tight">
              Questions Homeowners Ask Before Building on Their Lot.
            </h2>
            <p className="text-sm sm:text-base text-espresso/75 leading-relaxed">
              Clarity begins before you sign an agreement. Here is how we approach land evaluation,
              curated finish selections, budgets, and South Texas construction.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-espresso/15 divide-y divide-espresso/15 bg-ivory px-6 sm:px-8 border-x border-b">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={item.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-brass-dark font-semibold">
                        0{idx + 1}
                      </span>
                      <span className="font-serif text-xl sm:text-2xl text-espresso group-hover:text-brass-dark transition-colors">
                        {item.question}
                      </span>
                    </div>
                    <span className="mt-1 p-1.5 border border-espresso/20 text-espresso shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pl-7 pr-4 pt-3 pb-1 text-sm sm:text-base text-espresso/80 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
