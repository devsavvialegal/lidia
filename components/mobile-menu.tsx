"use client"

import Link from "next/link"
import { useState, type MouseEvent } from "react"
import { Menu } from "lucide-react"

import { MagneticButton } from "@/components/magnetic-button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// Matches the Sheet close animation so the scroll lock is released before scrolling.
const SHEET_CLOSE_MS = 300

export type MobileMenuItem = {
  label: string
  /** "#section" scrolls in-page, "/route" navigates. Ignored when onSelect is provided. */
  href?: string
  /** Custom in-page action (e.g. horizontal section scroll on the home page). */
  onSelect?: () => void
}

type MobileMenuProps = {
  items: readonly MobileMenuItem[]
  cta: { label: string; href: string }
  openLabel: string
  title: string
  /** Visibility classes for the trigger, e.g. "md:hidden". */
  className?: string
}

export function MobileMenu({ items, cta, openLabel, title, className }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  const runAfterClose = (action: () => void) => {
    setOpen(false)
    window.setTimeout(action, SHEET_CLOSE_MS)
  }

  const handleInPageClick = (event: MouseEvent<HTMLAnchorElement>, item: MobileMenuItem) => {
    event.preventDefault()
    runAfterClose(() => {
      if (item.onSelect) {
        item.onSelect()
        return
      }
      if (item.href) {
        document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
        window.history.replaceState(null, "", item.href)
      }
    })
  }

  const itemClassName =
    "border-b border-foreground/10 py-4 font-sans text-lg font-medium text-foreground/85 transition-colors hover:text-foreground"

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={openLabel}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border border-brand-lavanda/30 bg-foreground/5 text-foreground backdrop-blur-xl transition-colors hover:border-brand-lavanda/55 hover:bg-foreground/10",
          className,
        )}
      >
        <Menu aria-hidden="true" className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-xs gap-0 border-foreground/12 bg-brand-navy p-6 pt-16 text-foreground"
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <SheetTitle className="sr-only">{title}</SheetTitle>

        <nav className="flex flex-col">
          {items.map((item) => {
            const isRoute = !item.onSelect && item.href?.startsWith("/")
            return isRoute ? (
              <Link key={item.label} href={item.href!} onClick={() => setOpen(false)} className={itemClassName}>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href ?? "#"}
                onClick={(event) => handleInPageClick(event, item)}
                className={itemClassName}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <MagneticButton
          href={cta.href}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          className="mt-auto w-full"
          onClick={() => setOpen(false)}
        >
          {cta.label}
        </MagneticButton>
      </SheetContent>
    </Sheet>
  )
}
