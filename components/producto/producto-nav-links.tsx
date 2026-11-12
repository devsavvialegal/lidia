"use client"

import { useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

type NavLink = { href: string; label: string }

// A section is active while it crosses a thin band slightly above the viewport center.
const ACTIVE_BAND = "-40% 0px -55% 0px"

function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: ACTIVE_BAND },
    )
    sections.forEach((section) => observer.observe(section))

    // Clear the highlight above the first section (hero), which has no nav link.
    const handleScroll = () => {
      const first = sections[0]
      if (first && first.getBoundingClientRect().top > window.innerHeight * 0.4) setActiveId(null)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [ids])

  return activeId
}

export function ProductoNavLinks({ links }: { links: readonly NavLink[] }) {
  // Stable ids keep the observer from being recreated on every highlight change.
  const idsKey = links.map((link) => link.href.slice(1)).join(",")
  const ids = useMemo(() => idsKey.split(",").filter(Boolean), [idsKey])
  const activeId = useActiveSection(ids)

  return (
    <div className="hidden items-center gap-8 lg:flex">
      {links.map((link) => {
        const isActive = activeId === link.href.slice(1)
        return (
          <a
            key={link.href}
            href={link.href}
            aria-current={isActive ? "location" : undefined}
            className={cn(
              "group relative font-sans text-sm font-medium transition-colors",
              isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground",
            )}
          >
            {link.label}
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300",
                isActive ? "w-full" : "w-0 group-hover:w-full",
              )}
            />
          </a>
        )
      })}
    </div>
  )
}
