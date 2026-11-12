import { ChevronRight, Headset, LifeBuoy } from "lucide-react"

import { MagneticButton } from "@/components/magnetic-button"
import { ImageSlot } from "@/components/producto/image-slot"
import { ADVISORY } from "@/content/producto"
import { LAWYER_CONSULTATION } from "@/content/services"
import { formatCop } from "@/lib/format"
import { buildSupportWhatsappUrl, buildWhatsappUrl } from "@/lib/whatsapp"

export function AdvisorySection() {
  return (
    <section id="asesoria" className="scroll-mt-24 px-5 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid overflow-hidden rounded-3xl bg-brand-purple/10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
          <ImageSlot
            src={ADVISORY.image.src}
            alt={ADVISORY.image.alt}
            label={ADVISORY.image.brief}
            className="aspect-4/3 w-full rounded-none md:aspect-auto md:h-full md:min-h-64"
            sizes="(min-width: 768px) 33vw, 100vw"
          />

          <div className="grid items-center gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
            <div className="flex items-center gap-4">
              <Headset aria-hidden="true" className="h-12 w-12 shrink-0 text-brand-lavanda" />
              <h2 className="font-sans text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
                {ADVISORY.title.before}
                <span className="text-brand-lavanda">{ADVISORY.title.highlight}</span>
                {ADVISORY.title.after}
              </h2>
            </div>

            <div>
              <p className="mb-4 text-sm leading-relaxed text-foreground/80 md:text-base">{ADVISORY.description}</p>
              <p className="mb-1 flex flex-wrap items-baseline gap-x-2">
                <span className="text-xs font-medium uppercase tracking-wider text-foreground/60">
                  {ADVISORY.priceLabel}
                </span>
                <span className="font-sans text-2xl font-semibold text-foreground">
                  {formatCop(LAWYER_CONSULTATION.priceCop)}
                </span>
              </p>
              <p className="mb-6 text-xs text-foreground/55">{ADVISORY.note}</p>
              <MagneticButton
                href={buildWhatsappUrl(ADVISORY.cta.whatsappText)}
                target="_blank"
                rel="noreferrer"
                variant="primary"
              >
                {ADVISORY.cta.label}
              </MagneticButton>
            </div>
          </div>
        </div>

        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-foreground/65">
          <LifeBuoy aria-hidden="true" className="h-4 w-4 text-brand-lavanda" />
          <span>{ADVISORY.support.text}</span>
          <a
            href={buildSupportWhatsappUrl(ADVISORY.support.whatsappText)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 font-medium text-foreground underline-offset-4 hover:underline"
          >
            {ADVISORY.support.linkLabel}
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </p>
      </div>
    </section>
  )
}
