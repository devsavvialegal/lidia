import { ChevronRight, CreditCard, FileCheck2, MessageCircleMore, MousePointer2, type LucideIcon } from "lucide-react"

import { ImageSlot } from "@/components/producto/image-slot"
import { HOW_IT_WORKS } from "@/content/producto"

const stepIcons: Record<(typeof HOW_IT_WORKS.steps)[number]["icon"], LucideIcon> = {
  pointer: MousePointer2,
  chat: MessageCircleMore,
  card: CreditCard,
  "file-check": FileCheck2,
}

export function HowItWorksSection() {
  const lastIndex = HOW_IT_WORKS.steps.length - 1

  return (
    <section id="como-funciona" className="scroll-mt-24 px-5 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.6fr)] lg:gap-16">
        <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-brand-purple/20 blur-3xl" />
          <ImageSlot
            src={HOW_IT_WORKS.image.src}
            alt={HOW_IT_WORKS.image.alt}
            label={HOW_IT_WORKS.image.brief}
            className="relative aspect-3/4 w-full"
            sizes="(min-width: 1024px) 30vw, 320px"
          />
        </div>

        <div>
          <h2 className="mb-10 font-sans text-3xl font-semibold tracking-tight text-foreground md:mb-12 md:text-5xl">
            {HOW_IT_WORKS.title.before}
            <span className="text-brand-lavanda">{HOW_IT_WORKS.title.highlight}</span>
            {HOW_IT_WORKS.title.after}
          </h2>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {HOW_IT_WORKS.steps.map((step, index) => {
              const Icon = stepIcons[step.icon]
              return (
                <li key={step.title} className="relative flex gap-4 lg:flex-col lg:gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-lavanda/30 bg-brand-purple/15">
                    <Icon aria-hidden="true" className="h-6 w-6 text-brand-lavanda" />
                  </span>

                  <div>
                    <div className="mb-1 flex items-start gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-purple text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <h3 className="font-sans text-base font-semibold leading-snug text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/65">{step.description}</p>
                  </div>

                  {index < lastIndex ? (
                    <ChevronRight
                      aria-hidden="true"
                      className="absolute -right-3 top-4 hidden h-5 w-5 text-brand-lavanda/60 lg:block"
                    />
                  ) : null}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
