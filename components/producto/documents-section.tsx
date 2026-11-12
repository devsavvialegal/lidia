import { Briefcase, ChevronRight, FileSignature, FileText, House, Users, type LucideIcon } from "lucide-react"

import { ImageSlot } from "@/components/producto/image-slot"
import { DOCUMENTS, type DocumentIconKey, type LegalDocument } from "@/content/documents"
import { DOCUMENTS_SECTION } from "@/content/producto"
import { CURRENCY_CODE, formatCop } from "@/lib/format"
import { buildWhatsappUrl } from "@/lib/whatsapp"

const documentIcons: Record<DocumentIconKey, LucideIcon> = {
  house: House,
  briefcase: Briefcase,
  "file-signature": FileSignature,
  "file-text": FileText,
  users: Users,
}

export function DocumentsSection() {
  return (
    <section id="documentos" className="scroll-mt-24 px-5 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-10 text-center font-sans text-3xl font-semibold tracking-tight text-foreground md:mb-14 md:text-5xl">
          {DOCUMENTS_SECTION.title.before}
          <span className="text-brand-lavanda">{DOCUMENTS_SECTION.title.highlight}</span>
        </h2>

        {/*
          Cards share the parent row tracks via subgrid so title, price and CTA rows align across columns.
          On lg a 6-track grid with 2-track cards fits 3 per row and centers the 2 cards of the last row.
        */}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {DOCUMENTS.map((doc) => (
            <li
              key={doc.id}
              className="row-span-5 grid grid-rows-subgrid gap-0 lg:col-span-2 lg:nth-last-2:nth-[3n+1]:col-start-2"
            >
              <DocumentCard doc={doc} />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-foreground/55">{DOCUMENTS_SECTION.footnote}</p>
      </div>
    </section>
  )
}

function DocumentCard({ doc }: { doc: LegalDocument }) {
  const Icon = documentIcons[doc.icon]

  return (
    <article className="group row-span-5 grid grid-rows-subgrid gap-0 overflow-hidden rounded-3xl bg-foreground/5 transition-colors duration-300 hover:bg-foreground/10">
      <ImageSlot
        src={doc.image.src}
        alt={doc.image.alt}
        label={doc.image.brief}
        className="aspect-16/10 w-full rounded-none"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />

      <div className="flex items-center gap-3 px-5 pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-purple/15">
          <Icon aria-hidden="true" className="h-4 w-4 text-brand-lavanda" />
        </span>
        <h3 className="font-sans text-lg font-semibold leading-tight text-foreground">{doc.title}</h3>
      </div>

      <p className="px-5 pt-3 text-sm leading-relaxed text-foreground/70">{doc.description}</p>

      <p className="self-end px-5 pt-6 text-center">
        <span className="inline-block rounded-full bg-brand-purple/20 px-6 py-2 font-sans text-2xl font-semibold text-foreground">
          {formatCop(doc.priceCop)}
          <span className="ml-1.5 text-sm font-medium text-foreground/70">{CURRENCY_CODE}</span>
        </span>
      </p>

      <div className="px-5 pb-5 pt-4">
        <a
          href={buildWhatsappUrl(doc.whatsappText)}
          target="_blank"
          rel="noreferrer"
          className="flex h-full w-full items-center justify-center gap-1 rounded-full border border-brand-lavanda/30 bg-foreground/5 px-6 py-2.5 text-center text-sm font-medium text-foreground backdrop-blur-xl transition-all hover:border-brand-lavanda/55 hover:bg-foreground/10"
        >
          {doc.ctaLabel}
          <ChevronRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  )
}
