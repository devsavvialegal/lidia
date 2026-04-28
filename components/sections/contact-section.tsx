"use client";

import { MapPin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useState, type FormEvent } from "react";
import { MagneticButton } from "@/components/magnetic-button";

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section
      ref={ref}
      className="flex h-dvh w-screen shrink-0 snap-start items-start overflow-y-auto overscroll-y-contain px-4 pb-6 pt-20 md:h-screen md:items-center md:overflow-visible md:px-12 md:pb-0 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
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

              <div className="rounded-2xl border border-foreground/12 bg-foreground/5 p-3 mt-6 backdrop-blur-sm md:hidden">
                <p className="mb-3 text-xs text-foreground/75">
                  Para iniciar, escribinos por WhatsApp y te guiamos paso a
                  paso.
                </p>
                <MagneticButton variant="primary" size="lg" className="w-full">
                  Hablar con lidIA
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
                {["WhatsApp"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="border-b border-transparent text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Minimal form */}
          <div className="hidden flex-col justify-center md:flex">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-foreground/12 bg-foreground/5 p-5 backdrop-blur-sm md:space-y-6 md:p-7"
            >
              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-1 block text-xs text-foreground/70 md:mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Nombre completo"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <label className="mb-1 block text-xs text-foreground/70 md:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-1 block text-xs text-foreground/70 md:mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Indica qué documento necesitas y te contactamos para iniciar..."
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full disabled:opacity-50"
                  onClick={isSubmitting ? undefined : undefined}
                >
                  {isSubmitting ? "Enviando..." : "Quiero más información"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-3 text-center text-sm text-foreground/80">
                    Mensaje enviado. Te contactamos para continuar por WhatsApp.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
