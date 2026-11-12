import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ } from "@/content/producto"

type FaqItem = (typeof FAQ.items)[number]

export function FaqSection() {
  const middle = Math.ceil(FAQ.items.length / 2)
  const columns = [FAQ.items.slice(0, middle), FAQ.items.slice(middle)]

  return (
    <section id="preguntas" className="scroll-mt-24 px-5 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-10 text-center font-sans text-3xl font-semibold tracking-tight text-foreground md:mb-14 md:text-5xl">
          {FAQ.title.before}
          <span className="text-brand-lavanda">{FAQ.title.highlight}</span>
        </h2>

        <div className="grid items-start gap-3 md:grid-cols-2 md:gap-5">
          {columns.map((items, columnIndex) => (
            <Accordion key={columnIndex} type="single" collapsible className="space-y-3">
              {items.map((item) => (
                <FaqEntry key={item.question} item={item} />
              ))}
            </Accordion>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        // Static, developer-authored content; no user input reaches this string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />
    </section>
  )
}

function FaqEntry({ item }: { item: FaqItem }) {
  return (
    <AccordionItem
      value={item.question}
      className="rounded-2xl border-0 bg-foreground/5 px-5 transition-colors data-[state=open]:bg-foreground/10"
    >
      <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline md:text-base [&>svg]:text-brand-lavanda">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="text-sm leading-relaxed text-foreground/70">{item.answer}</AccordionContent>
    </AccordionItem>
  )
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}
