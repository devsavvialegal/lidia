"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { WHATSAPP_BOT_URL } from "@/lib/whatsapp";

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section
      ref={ref}
      id="contacto"
      className="flex h-dvh w-screen shrink-0 snap-start items-start overflow-y-auto overscroll-y-contain px-4 pb-6 pt-20 md:h-screen md:items-center md:overflow-visible md:px-12 md:pb-0 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Empieza tu
                <br />
                proceso con
                <br />
                LidIA
              </h2>
              <p className="text-xs text-foreground/70 md:text-base">
                Te explicamos el servicio y te ayudamos a iniciar por WhatsApp
              </p>
              <p className="mt-2 max-w-md text-xs text-foreground/60 md:text-sm">
                La generación y entrega del documento se realiza dentro del
                proceso comercial, posterior a confirmación de pago.
              </p>
            </div>

            <div className="space-y-3 md:space-y-8">
              {/* <a
                href="mailto:hola@lidia.legal"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Mail className="h-3 w-3 text-foreground/60" />
                  <span className="text-xs text-foreground/60">Email</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  hola@lidia.legal
                </p>
              </a> */}

              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-foreground/80 md:h-5 md:w-5" />
                  <p className="text-xs text-foreground/80 md:text-sm">
                    Operamos en toda Colombia, <br /> con atención 24/7 para
                    cada cliente simultáneo
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "425ms" }}
              >
                <MagneticButton
                  href={WHATSAPP_BOT_URL}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  size="lg"
                  className="flex w-full items-center justify-center text-center md:inline-flex md:w-auto"
                >
                  Hablar con lidIA por WhatsApp
                </MagneticButton>
              </div>

              <div
                className={`hidden gap-2 pt-2 transition-all duration-700 md:pt-4 sm:flex ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <Link
                  href="/politica-de-privacidad"
                  className="border-b border-transparent text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                >
                  Términos y privacidad
                </Link>
              </div>

              <Link
                href="/politica-de-privacidad"
                className="mt-4 inline-flex text-xs text-foreground/65 underline decoration-foreground/25 underline-offset-4 transition-colors hover:text-foreground/90 md:hidden"
              >
                Ver politica de privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
