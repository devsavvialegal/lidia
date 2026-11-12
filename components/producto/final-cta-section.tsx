import Image from "next/image"
import Link from "next/link"

import { MagneticButton } from "@/components/magnetic-button"
import { FINAL_CTA } from "@/content/producto"
import { buildWhatsappUrl } from "@/lib/whatsapp"

export function FinalCtaSection() {
  return (
    <footer className="px-5 pb-10 pt-16 md:px-12 md:pt-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-brand-lavanda/30 bg-linear-to-br from-brand-purple/30 via-brand-purple/15 to-brand-navy p-8 text-center md:flex-row md:justify-between md:p-12 md:text-left">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
            <Image
              src="/lidia-logo-white.png"
              alt="LidiA Legaltech"
              width={108}
              height={40}
              className="h-12 w-auto md:h-14"
            />
            <span aria-hidden="true" className="hidden h-14 w-px bg-foreground/25 md:block" />
            <h2 className="max-w-md font-sans text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
              <span className="text-balance">
                {FINAL_CTA.title.before}
                <span className="text-brand-lavanda">{FINAL_CTA.title.highlight}</span>
              </span>
            </h2>
          </div>

          <MagneticButton
            href={buildWhatsappUrl(FINAL_CTA.cta.whatsappText)}
            target="_blank"
            rel="noreferrer"
            size="lg"
            variant="primary"
            className="shrink-0"
          >
            {FINAL_CTA.cta.label}
          </MagneticButton>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-foreground/55 md:flex-row">
          <p>
            © {new Date().getFullYear()} {FINAL_CTA.footer.company}
          </p>
          <Link
            href={FINAL_CTA.footer.legalLink.href}
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {FINAL_CTA.footer.legalLink.label}
          </Link>
        </div>
      </div>
    </footer>
  )
}
