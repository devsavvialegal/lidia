import Image from "next/image"
import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type ImageSlotProps = {
  /** Final asset path under /public. When omitted, a labeled placeholder frame is rendered. */
  src?: string
  alt: string
  /** Describes the intended photo so the placeholder documents what asset goes here. */
  label: string
  className?: string
  priority?: boolean
  sizes?: string
}

export function ImageSlot({ src, alt, label, className, priority, sizes = "100vw" }: ImageSlotProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-foreground/5",
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,rgba(191,111,204,0.22),rgba(12,43,62,0)_60%)] p-6 text-center"
        >
          <ImageIcon aria-hidden="true" className="h-8 w-8 text-brand-lavanda/70" />
          <p className="max-w-xs text-xs leading-relaxed text-foreground/55">{label}</p>
        </div>
      )}
    </div>
  )
}
