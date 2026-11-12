import Image from "next/image"
import { Bot, Check, X } from "lucide-react"

import { ImageSlot } from "@/components/producto/image-slot"
import { COMPARISON } from "@/content/producto"

export function ComparisonSection() {
  return (
    <section id="por-que-lidia" className="scroll-mt-24 px-5 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-12">
        <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
          <span className="text-balance">
            {COMPARISON.title.before}
            <span className="text-brand-lavanda">{COMPARISON.title.highlight}</span>
            {COMPARISON.title.middle}
            <span className="text-brand-lavanda">{COMPARISON.title.highlightEnd}</span>
          </span>
        </h2>

        <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <article className="rounded-3xl bg-foreground/5 p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10">
                <Bot aria-hidden="true" className="h-5 w-5 text-foreground/70" />
              </span>
              <h3 className="font-sans text-lg font-semibold text-foreground/85">{COMPARISON.generic.label}</h3>
            </div>
            <ul className="space-y-3">
              {COMPARISON.generic.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/65">
                  <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-foreground/45" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple font-sans text-sm font-semibold text-white">
              {COMPARISON.versusLabel}
            </span>
          </div>

          <article className="overflow-hidden rounded-3xl bg-brand-purple/15">
            {/* Navy keeps the purple "lid" of the logo legible; a purple strip would swallow it. */}
            <div className="bg-brand-navy/70 px-6 py-4">
              <Image
                src="/lidia-logo-white.png"
                alt={COMPARISON.lidia.logoAlt}
                width={108}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="relative">
              {/*
                The photo sits inside the card and fades into it from the left, so image and copy read as one block.
                Hidden where the card is too narrow to fit both (md–lg, three-column layout).
              */}
              <div
                className="absolute inset-y-0 right-0 hidden w-2/5 sm:block md:hidden xl:block"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 60%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 60%)",
                }}
              >
                <ImageSlot
                  src={COMPARISON.image.src}
                  alt={COMPARISON.image.alt}
                  label={COMPARISON.image.brief}
                  className="h-full w-full rounded-none"
                  sizes="(min-width: 1280px) 200px, 40vw"
                  objectPosition={COMPARISON.image.objectPosition}
                />
              </div>

              <ul className="relative space-y-3 p-6 sm:pr-[42%] md:pr-6 xl:pr-[42%]">
                {COMPARISON.lidia.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-lavanda" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
