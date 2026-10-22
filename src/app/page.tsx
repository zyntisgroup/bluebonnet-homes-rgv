import React from "react";
import { HeroScrollVideo } from "@/components/HeroScrollVideo";
import { ArchitecturalCurtainTransition } from "@/components/ArchitecturalCurtainTransition";
import { DayToNightShowcase } from "@/components/DayToNightShowcase";
import { PortfolioHorizontalGallery } from "@/components/PortfolioHorizontalGallery";
import { BluebonnetMethodPinned } from "@/components/BluebonnetMethodPinned";
import { CraftsmanshipBento } from "@/components/CraftsmanshipBento";
import { FoundersAndTestimonials } from "@/components/FoundersAndTestimonials";
import { CostGuideAndResources } from "@/components/CostGuideAndResources";
import { FaqAndCorridors } from "@/components/FaqAndCorridors";
import { EnquiryForm } from "@/components/EnquiryForm";

export default function HomePage() {
  return (
    <>
      {/* 1. Pinned 4K Video & Scroll-Scrubbed Architectural Hero */}
      <HeroScrollVideo />

      {/* 2. Nota-Inspired Split-Curtain Aperture & 4 Brand Positioning Pillars */}
      <ArchitecturalCurtainTransition />

      {/* 3. Pixel-Locked 4-State Day-to-Night & Framing-to-Finish Lighting Showcase */}
      <DayToNightShowcase />

      {/* 4. Interactive Architectural Portfolio Showcase (4 Verified Estates) */}
      <PortfolioHorizontalGallery />

      {/* 5. The 5-Phase Bluebonnet Method Pinned Walkthrough */}
      <BluebonnetMethodPinned />

      {/* 6. Materiality, Craftsmanship & South Texas Climate Engineering Bento */}
      <CraftsmanshipBento />

      {/* 7 & 8. Founders Michael & Ana + Verified RGV Homeowner Testimonials */}
      <FoundersAndTestimonials />

      {/* 9 & 10. Official Custom Home Cost Guide PDF + Editorial Guides */}
      <CostGuideAndResources />

      {/* 11. Candid Homeowner FAQ Accordion */}
      <FaqAndCorridors />

      {/* 12. Private Consultation & Lot Walk Booking Experience */}
      <EnquiryForm />
    </>
  );
}
