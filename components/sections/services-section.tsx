"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Capacidades LidiA
          </h2>
          <p className="text-sm text-foreground/70 md:text-base">Automatización útil, lenguaje humano y criterio legal</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
               title: "Análisis documental asistido",
               description: "Extrae puntos críticos de contratos, escritos y políticas en minutos",
               direction: "top",
             },
             {
               title: "Respuestas en lenguaje claro",
               description: "Convierte complejidad jurídica en orientación entendible para cualquier área",
               direction: "right",
             },
             {
               title: "Criterio trazable",
               description: "Cada respuesta mantiene contexto y referencias para decidir con confianza",
               direction: "left",
             },
             {
               title: "Integración con operación",
               description: "Se adapta a procesos de estudio, in-house y equipos de compliance",
               direction: "bottom",
             },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group rounded-2xl border border-foreground/12 bg-foreground/5 p-5 transition-all duration-700 hover:border-brand-lavanda/45 hover:bg-foreground/10 md:p-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-semibold text-foreground md:text-3xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
    </div>
  )
}
