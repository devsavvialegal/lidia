import type { Metadata } from "next"

import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { AdvisorySection } from "@/components/producto/advisory-section"
import { ComparisonSection } from "@/components/producto/comparison-section"
import { DocumentsSection } from "@/components/producto/documents-section"
import { FaqSection } from "@/components/producto/faq-section"
import { FinalCtaSection } from "@/components/producto/final-cta-section"
import { HeroSection } from "@/components/producto/hero-section"
import { HowItWorksSection } from "@/components/producto/how-it-works-section"
import { ProductoNav } from "@/components/producto/producto-nav"
import { PAGE_META } from "@/content/producto"

export const metadata: Metadata = {
  title: PAGE_META.title,
  description: PAGE_META.description,
  alternates: {
    canonical: "/documentos-legales",
  },
}

export default function ProductoPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CustomCursor />
      <GrainOverlay />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(191,111,204,0.28),rgba(12,43,62,0)_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-linear-to-b from-brand-purple/10 via-brand-lavanda/8 to-transparent" />

      <ProductoNav />

      <div className="relative z-10">
        <HeroSection />
        <DocumentsSection />
        <ComparisonSection />
        <HowItWorksSection />
        <AdvisorySection />
        <FaqSection />
        <FinalCtaSection />
      </div>
    </main>
  )
}
