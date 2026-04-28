"use client";

import { MagneticButton } from "@/components/magnetic-button";
import { useReveal } from "@/hooks/use-reveal";

export function AboutSection({
  scrollToSection,
}: {
  scrollToSection?: (index: number) => void;
}) {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section
      ref={ref}
      className="flex h-dvh w-screen shrink-0 snap-start items-start overflow-y-auto overscroll-y-contain px-4 pb-6 pt-20 md:h-screen md:items-center md:overflow-visible md:px-12 md:pb-0 md:pt-0 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 md:gap-16 lg:gap-22">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-2xl font-semibold leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Lo que hace
                <br />
                LidIA y
                <br />
                <span className="text-foreground/65">sus límites</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
                LidIA es un agente que agiliza el diligenciamiento documental por WhatsApp. No
                presta asesoría jurídica, no reemplaza a un abogado y no
                garantiza la validez o idoneidad legal del resultado.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
                El usuario es responsable de la información ingresada, la
                revisión integral del documento y su uso. Si hay datos
                personales, su tratamiento debe cumplir la Ley 1581 de 2012 y
                normas aplicables.
              </p>
            </div>
          </div>

          {/* Right side - Stats with creative layout */}
          <div className="flex flex-col justify-center space-y-3 md:space-y-12">
            {[
              {
                value: "3",
                label: "Servicios activos",
                sublabel: "Peticiones, prestación de servicios y laborales",
                direction: "right",
              },
              {
                value: "1",
                label: "Canal principal",
                sublabel: "WhatsApp para atención y captura de datos",
                direction: "left",
              },
              {
                value: "?",
                label: "Asesoría jurídica",
                sublabel: "No sustituye revisión profesional, podemos asignarte uno de nuestros abogados en caso de asesoría especializada",
                direction: "right",
              },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left"
                    ? "-translate-x-16 opacity-0"
                    : "translate-x-16 opacity-0";
                }
                return "translate-x-0 opacity-100";
              };

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-3 border-l border-brand-lavanda/45 pl-3 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                    <div className="text-2xl font-semibold text-foreground md:text-6xl lg:text-7xl">
                    {stat.value}
                  </div>
                  <div>
                     <div className="font-sans text-sm font-medium text-foreground md:text-xl">
                      {stat.label}
                    </div>
                     <div className="text-[11px] text-foreground/70 md:text-xs">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`mt-6 flex flex-wrap gap-2 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton
            size="lg"
            variant="primary"
            onClick={() => scrollToSection?.(4)}
          >
            Empezar por WhatsApp
          </MagneticButton>
          <MagneticButton
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection?.(1)}
          >
            Ver servicios
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
