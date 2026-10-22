import React from "react";
import { MapPin, Phone, Clock, ShieldCheck, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaqAndCorridors } from "@/components/FaqAndCorridors";

export default function ContactPage() {
  return (
    <div className="pt-20 bg-ivory text-espresso">
      {/* Contact Hero Header */}
      <section className="py-14 sm:py-20 border-b border-espresso/12 bg-limestone/45 bg-architectural-grid">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-brass-dark">
              <span className="w-8 h-[1px] bg-brass-dark" />
              <span>Private Consultation · Mission, TX &amp; Valley-Wide</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-espresso leading-[1.04] tracking-tight">
              Begin the Conversation About Your Custom Home.
            </h1>
            <p className="text-base sm:text-lg text-espresso/80 leading-relaxed">
              Meet with founders <strong className="text-espresso">Michael &amp; Ana</strong> at our
              Mission studio or directly on your prospective homesite anywhere in the Rio Grande
              Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Main Consultation & Lot Evaluation Form */}
      <EnquiryForm />

      {/* FAQ Accordion */}
      <FaqAndCorridors />
    </div>
  );
}
