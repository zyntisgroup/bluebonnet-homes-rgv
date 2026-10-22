import React from "react";
import Link from "next/link";
import { ArrowUpRight, FileText, MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import { SITE_CONFIG, PORTFOLIO_PROJECTS } from "@/config/site";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso-deep text-ivory border-t border-ivory/10 relative overflow-hidden">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-architectural-grid-dark pointer-events-none opacity-60" />

      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12">
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-ivory/12 items-end">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-brass-light">
              <span className="w-2 h-2 rounded-full bg-brass" />
              <span>Rio Grande Valley Custom Home Builders</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory leading-[1.08] tracking-tight">
              Begin with a calm, transparent conversation about your lot and vision.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-brass text-espresso-obsidian font-mono text-xs uppercase tracking-[0.16em] font-semibold hover:bg-brass-light transition-colors"
            >
              <span>Book Private Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={SITE_CONFIG.brand.costGuidePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 border border-ivory/20 text-ivory font-mono text-xs uppercase tracking-[0.15em] hover:border-brass-light hover:text-brass-light transition-colors"
            >
              <FileText className="w-4 h-4 text-brass-light" />
              <span>2026 Cost Guide PDF</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Architectural Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-14 border-b border-ivory/10">
          {/* Col 1: Brand & Founders */}
          <div className="lg:col-span-4 space-y-5 pr-4">
            <Link href="/" className="inline-block">
              <img
                src={SITE_CONFIG.brand.logoLight}
                alt="Bluebonnet Homes"
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-ivory/75 leading-relaxed max-w-sm">
              Led by founders <strong className="text-ivory font-medium">Michael &amp; Ana</strong>,
              Bluebonnet Homes crafts bespoke, energy-efficient residences on client lots and
              premier estates across South Texas—combining architectural rigor with milestone
              clarity.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-brass-light">
              <ShieldCheck className="w-4 h-4 text-brass" />
              <span>{SITE_CONFIG.brand.tagline}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-taupe">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivory/75 hover:text-brass-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Verified Portfolio Residences */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-taupe">
              Signature Residences
            </h3>
            <ul className="space-y-3 text-sm">
              {PORTFOLIO_PROJECTS.map((proj) => (
                <li key={proj.slug}>
                  <Link
                    href={`/portfolio#${proj.slug}`}
                    className="group block text-ivory/80 hover:text-brass-light transition-colors"
                  >
                    <span className="font-medium text-ivory group-hover:text-brass-light">
                      {proj.name}
                    </span>
                    <span className="block text-xs text-ivory/55 font-mono">
                      {proj.location} · {proj.sqft}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio & Service Corridor */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-taupe">
              Mission Studio &amp; Service Area
            </h3>
            <div className="space-y-3 text-sm text-ivory/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brass shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-ivory">{SITE_CONFIG.contact.addressLine1}</p>
                  <p className="text-ivory/70">{SITE_CONFIG.contact.cityStateZip}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brass shrink-0 mt-1" />
                <div>
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="font-mono text-ivory hover:text-brass-light transition-colors"
                  >
                    {SITE_CONFIG.contact.phoneDisplay}
                  </a>
                  {SITE_CONFIG.contact.isPendingClientVerification && (
                    <span className="block text-[11px] text-ivory/50 leading-snug mt-0.5">
                      Configurable studio line · Direct online scheduling available 24/7
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brass shrink-0 mt-1" />
                <p className="text-xs text-ivory/70 leading-relaxed">
                  {SITE_CONFIG.contact.hours}
                </p>
              </div>

              <div className="pt-2 border-t border-ivory/10">
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-taupe mb-1.5">
                  Serving the Rio Grande Valley
                </span>
                <p className="text-xs text-ivory/65 leading-relaxed">
                  {SITE_CONFIG.contact.serviceAreas.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Architectural Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ivory/55 font-mono">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brand.legalName}. All rights reserved. Mission,
            Texas.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/process" className="hover:text-ivory transition-colors">
              The 5-Step Method
            </Link>
            <Link href="/resources" className="hover:text-ivory transition-colors">
              South Texas Building Guides
            </Link>
            <a
              href={SITE_CONFIG.brand.costGuidePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brass-light transition-colors"
            >
              Cost Guide PDF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
