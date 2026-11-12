import Image from "next/image"
import Link from "next/link"

import { MagneticButton } from "@/components/magnetic-button"
import { MobileMenu } from "@/components/producto/mobile-menu"
import { NAV } from "@/content/producto"
import { buildWhatsappUrl } from "@/lib/whatsapp"

export function ProductoNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-foreground/8 bg-brand-navy/70 px-4 py-3 backdrop-blur-xl md:px-12 md:py-4">
      <Link href="/" className="flex items-center transition-transform hover:scale-105">
        <Image
          src="/lidia-logo-white.png"
          alt="LidiA Legaltech"
          width={108}
          height={40}
          priority
          className="h-8 w-auto md:h-10"
        />
      </Link>

      <div className="hidden items-center gap-8 lg:flex">
        {NAV.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group relative font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <MagneticButton
        href={buildWhatsappUrl(NAV.cta.whatsappText)}
        target="_blank"
        rel="noreferrer"
        variant="secondary"
        className="hidden lg:inline-flex"
      >
        {NAV.cta.label}
      </MagneticButton>

      <MobileMenu />
    </nav>
  )
}
