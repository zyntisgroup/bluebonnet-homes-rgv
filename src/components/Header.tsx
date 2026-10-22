import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileText, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Over the homepage hero before scrolling, use translucent dark glass so 4K video shines through
  const isHeroOverlay = pathname === "/" && !scrolled && !mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHeroOverlay
            ? "bg-espresso-obsidian/45 backdrop-blur-md border-b border-ivory/15 text-ivory py-4"
            : "bg-ivory/95 backdrop-blur-xl border-b border-espresso/10 text-espresso py-3.5 shadow-[0_8px_30px_rgba(48,40,32,0.05)]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 shrink-0 focus:outline-none"
            aria-label="Bluebonnet Homes — Home"
          >
            <img
              src={isHeroOverlay ? SITE_CONFIG.brand.logoLight : SITE_CONFIG.brand.logoDark}
              alt="Bluebonnet Homes RGV"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="hidden 2xl:flex flex-col border-l border-current/20 pl-3 whitespace-nowrap">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-75">
                Rio Grande Valley · TX
              </span>
              <span className="text-[11px] font-medium tracking-wide opacity-90">
                Custom Residential Architecture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Primary Navigation"
          >
            {SITE_CONFIG.navigation.slice(0, 5).map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative whitespace-nowrap px-3 py-2 text-[13px] font-medium tracking-[0.02em] transition-colors duration-300 ${
                    isActive
                      ? isHeroOverlay
                        ? "text-brass-light font-semibold"
                        : "text-espresso font-semibold"
                      : isHeroOverlay
                      ? "text-ivory/80 hover:text-ivory"
                      : "text-espresso/75 hover:text-espresso"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0.5 left-3 right-3 h-[1.5px] ${
                        isHeroOverlay ? "bg-brass-light" : "bg-brass"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Cluster */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href={SITE_CONFIG.brand.costGuidePdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-2.5 text-[11px] font-mono uppercase tracking-[0.14em] border transition-all duration-300 ${
                isHeroOverlay
                  ? "border-ivory/25 text-ivory/90 hover:border-brass-light hover:text-brass-light"
                  : "border-espresso/15 text-espresso/80 hover:border-espresso hover:text-espresso bg-limestone/40"
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-brass shrink-0" />
              <span>Cost Guide PDF</span>
            </a>

            <Link
              href="/contact"
              className={`whitespace-nowrap group inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.15em] transition-all duration-300 ${
                isHeroOverlay
                  ? "bg-ivory text-espresso hover:bg-brass hover:text-ivory"
                  : "bg-espresso text-ivory hover:bg-brass hover:text-espresso-obsidian"
              }`}
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`lg:hidden inline-flex items-center justify-center p-2.5 border transition-colors ${
              isHeroOverlay
                ? "border-ivory/25 text-ivory hover:bg-ivory/10"
                : "border-espresso/15 text-espresso hover:bg-espresso/5"
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Full-Screen Architectural Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-ivory text-espresso pt-20 pb-10 px-6 overflow-y-auto flex flex-col justify-between border-b border-espresso/15"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6 mt-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-taupe-dark border-b border-espresso/10 pb-3">
              Navigation · Bluebonnet Homes RGV
            </div>

            <nav className="flex flex-col divide-y divide-espresso/10">
              {SITE_CONFIG.navigation.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-4 flex items-center justify-between group"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-brass">
                        0{idx + 1}
                      </span>
                      <span
                        className={`font-serif text-2xl sm:text-3xl tracking-tight ${
                          isActive ? "text-brass-dark font-semibold" : "text-espresso"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-taupe group-hover:text-espresso transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-espresso/15 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={SITE_CONFIG.brand.costGuidePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 border border-espresso/20 bg-limestone/60 text-espresso font-mono text-xs uppercase tracking-[0.15em]"
              >
                <FileText className="w-4 h-4 text-brass-dark" />
                <span>Download Cost Guide (PDF)</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 px-4 bg-espresso text-ivory font-mono text-xs uppercase tracking-[0.15em]"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-espresso/75 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brass-dark shrink-0" />
                <span>{SITE_CONFIG.contact.fullAddress}</span>
              </div>
              <a
                href={SITE_CONFIG.contact.phoneHref}
                className="inline-flex items-center gap-2 font-mono text-espresso font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-brass-dark shrink-0" />
                <span>{SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
