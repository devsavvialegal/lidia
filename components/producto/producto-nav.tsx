import Image from "next/image"
import Link from "next/link"

import { MagneticButton } from "@/components/magnetic-button"
import { MobileMenu } from "@/components/mobile-menu"
import { ProductoNavLinks } from "@/components/producto/producto-nav-links"
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

      <ProductoNavLinks links={NAV.links} />

      <MagneticButton
        href={buildWhatsappUrl(NAV.cta.whatsappText)}
        target="_blank"
        rel="noreferrer"
        variant="secondary"
        className="hidden lg:inline-flex"
      >
        {NAV.cta.label}
      </MagneticButton>

      <MobileMenu
        items={NAV.links}
        cta={{ label: NAV.cta.label, href: buildWhatsappUrl(NAV.cta.whatsappText) }}
        openLabel={NAV.mobileMenu.openLabel}
        title={NAV.mobileMenu.title}
        className="lg:hidden"
      />
    </nav>
  )
}
