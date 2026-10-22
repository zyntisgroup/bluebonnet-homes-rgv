import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Compass, HeartHandshake, Sun } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { FoundersAndTestimonials } from "@/components/FoundersAndTestimonials";
import { CraftsmanshipBento } from "@/components/CraftsmanshipBento";
import { EnquiryForm } from "@/components/EnquiryForm";

export default function AboutPage() {
  return (
    <div className="pt-20 bg-ivory text-espresso">
      {/* About Hero Banner */}
      <section className="py-16 sm:py-24 border-b border-espresso/12 bg-limestone/45 bg-architectural-grid">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
                <span className="w-8 h-[1px] bg-brass-dark" />
                <span>About Bluebonnet Homes RGV · Mission, Texas</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl text-espresso leading-[1.04] tracking-tight">
                A Personal Commitment to Architectural Excellence in South Texas.
              </h1>
              <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-2xl">
                Founded and led by <strong className="text-espresso">Michael &amp; Ana</strong>,
                Bluebonnet Homes exists to give Rio Grande Valley families a custom home-building
                experience defined by honesty, curated design, and enduring structural quality.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-espresso/20 bg-espresso-deep p-6 text-ivory shadow-xl">
                <img
                  src={SITE_CONFIG.brand.crestImage}
                  alt="Bluebonnet Homes Brand Crest — Quality, Craftsmanship, Texas Tradition"
                  className="w-full aspect-square max-h-72 object-cover border border-ivory/15 mb-5"
                />
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-brass-light">
                  {SITE_CONFIG.brand.tagline}
                </div>
                <p className="text-xs text-ivory/75 mt-1">
                  Headquartered at {SITE_CONFIG.contact.fullAddress}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Story & Verified Testimonials */}
      <FoundersAndTestimonials />

      {/* Craftsmanship & Climate Engineering Standards */}
      <CraftsmanshipBento />

      {/* Consultation Form */}
      <EnquiryForm />
    </div>
  );
}
