"use client"

import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-[100dvh] w-screen shrink-0 snap-start items-start overflow-y-auto overscroll-y-contain px-5 pb-6 pt-20 md:h-screen md:items-center md:overflow-visible md:px-12 md:pb-0 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-3xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Soluciones disponibles hoy
          </h2>
          <p className="text-sm text-foreground/70 md:text-base">Elige el servicio que necesitas y empieza a hablar con lidIA</p>
        </div>

        <div className="space-y-4 md:space-y-8">
          {[
            {
              number: "01",
               title: "Derechos de petición",
                category: "Salud, solicitud de información y solicitud de copias",
               year: "Activo",
              direction: "left",
            },
            {
              number: "02",
               title: "Contrato por prestación de servicios",
                category: "Diligenciamiento automatizado de minuta de servicios",
               year: "Activo",
              direction: "right",
            },
            {
              number: "03",
               title: "Contratos laborales",
               category: "Contratos a término definido e indefinido",
               year: "Activo",
              direction: "left",
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between rounded-2xl border border-foreground/12 bg-foreground/5 px-4 py-4 transition-all duration-700 hover:border-brand-lavanda/45 hover:bg-foreground/10 md:px-8 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "100%" : "100%",
      }}
    >
      <div className="flex items-baseline gap-3 md:gap-8">
        <span className="text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-lg font-semibold text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="text-xs text-foreground/60 md:text-sm">{project.category}</p>
        </div>
      </div>
      <span className="text-xs text-foreground/30 md:text-sm">{project.year}</span>
    </div>
  )
}
