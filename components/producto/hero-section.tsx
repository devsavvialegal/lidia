import { CircleCheck, MessageCircle, ShieldCheck, Smartphone, Zap, type LucideIcon } from "lucide-react"

import { MagneticButton } from "@/components/magnetic-button"
import { ImageSlot } from "@/components/producto/image-slot"
import { HERO } from "@/content/producto"
import { buildWhatsappUrl } from "@/lib/whatsapp"

const highlightIcons: Record<(typeof HERO.highlights)[number]["icon"], LucideIcon> = {
  zap: Zap,
  "shield-check": ShieldCheck,
  smartphone: Smartphone,
}

export function HeroSection() {
  return (
    <section className="relative px-5 pb-16 pt-28 md:px-12 md:pb-24 md:pt-36 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-lavanda/45 bg-foreground/10 px-4 py-1.5 backdrop-blur-md">
            <MessageCircle aria-hidden="true" className="h-3.5 w-3.5 text-brand-lavanda" />
            <p className="text-xs font-medium text-foreground/90">{HERO.badge}</p>
          </div>

          <h1 className="mb-5 font-sans text-[2.15rem] font-semibold leading-[1.06] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">
              {HERO.title.before}
              <span className="text-brand-lavanda">{HERO.title.highlight}</span>
              {HERO.title.after}
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-foreground/85 md:text-xl">
            <span className="text-pretty">{HERO.subtitle}</span>
          </p>

          <MagneticButton
            href={buildWhatsappUrl(HERO.cta.whatsappText)}
            target="_blank"
            rel="noreferrer"
            size="lg"
            variant="primary"
          >
            {HERO.cta.label}
          </MagneticButton>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
            {HERO.highlights.map(({ icon, label }) => {
              const Icon = highlightIcons[icon]
              return (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-lavanda/30 bg-brand-purple/15">
                    <Icon aria-hidden="true" className="h-4 w-4 text-brand-lavanda" />
                  </span>
                  <span className="text-sm font-medium text-foreground/85">{label}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="relative animate-in fade-in duration-1000 delay-200">
          <ImageSlot
            src={HERO.image.src}
            alt={HERO.image.alt}
            label={HERO.image.brief}
            className="aspect-4/5 w-full"
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
          />

          <div className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl border border-brand-lavanda/30 bg-brand-navy/80 px-4 py-3 backdrop-blur-xl md:-left-8 md:right-auto">
            <CircleCheck aria-hidden="true" className="h-8 w-8 shrink-0 text-brand-purple" />
            <p className="text-sm font-medium leading-snug text-foreground">{HERO.floatingBadge}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
