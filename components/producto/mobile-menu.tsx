"use client"

import { useState, type MouseEvent } from "react"
import { Menu } from "lucide-react"

import { MagneticButton } from "@/components/magnetic-button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { NAV } from "@/content/producto"
import { buildWhatsappUrl } from "@/lib/whatsapp"

// Matches the Sheet close animation so the scroll lock is released before scrolling.
const SHEET_CLOSE_MS = 300

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setOpen(false)
    window.setTimeout(() => {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
      window.history.replaceState(null, "", href)
    }, SHEET_CLOSE_MS)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={NAV.mobileMenu.openLabel}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-lavanda/30 bg-foreground/5 text-foreground backdrop-blur-xl transition-colors hover:border-brand-lavanda/55 hover:bg-foreground/10 lg:hidden"
      >
        <Menu aria-hidden="true" className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-xs gap-0 border-foreground/12 bg-brand-navy p-6 pt-16 text-foreground"
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <SheetTitle className="sr-only">{NAV.mobileMenu.title}</SheetTitle>

        <nav className="flex flex-col">
          {NAV.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleLinkClick(event, link.href)}
              className="border-b border-foreground/10 py-4 font-sans text-lg font-medium text-foreground/85 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MagneticButton
          href={buildWhatsappUrl(NAV.cta.whatsappText)}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          className="mt-auto w-full"
          onClick={() => setOpen(false)}
        >
          {NAV.cta.label}
        </MagneticButton>
      </SheetContent>
    </Sheet>
  )
}
