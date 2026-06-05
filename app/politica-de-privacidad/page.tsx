import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ShieldCheck } from "lucide-react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"

const policySections = [
  {
    title: "1. Responsable del tratamiento de datos",
    content: [
      "El responsable del tratamiento de tus datos personales es LidIA legal co",
    ],
  },
  {
    title: "2. Datos que recolectamos",
    items: [
      "Datos de identificacion: nombre completo, tipo y numero de documento de identidad.",
      "Datos de contacto: correo electronico, numero de telefono o celular y direccion de correspondencia fisica o digital.",
      "Datos del caso: descripcion de la situacion, entidades o terceros involucrados y documentos de soporte que decidas cargar.",
      "Datos sensibles: en casos como salud o informacion de menores, LidIA solo tratara estos datos con tu consentimiento explicito para la formulacion del documento.",
    ],
  },
  {
    title: "3. Finalidad del tratamiento",
    items: [
      "Estructurar, redactar y personalizar el documento legal solicitado.",
      "Enviar recordatorios sobre vencimientos o actuaciones asociadas a tus tramites, cuando aplique.",
      "Brindar soporte tecnico y mejorar la experiencia de uso de LidIA.",
    ],
    note: "LidIA no vende, no alquila y no comparte tus datos personales ni la informacion de tus casos con terceras empresas con fines comerciales o publicitarios.",
  },
  {
    title: "4. Derechos del titular",
    items: [
      "Conocer, actualizar y rectificar tus datos personales cuando sean inexactos o incompletos.",
      "Solicitar la supresion de tus datos o revocar la autorizacion cuando proceda legalmente.",
      "Ser informado sobre el uso que se ha dado a tu informacion.",
    ],
  },
  {
    title: "5. Como protegemos tu informacion",
    content: [
      "Implementamos medidas de seguridad tecnicas, humanas y administrativas para evitar acceso no autorizado, perdida, adulteracion o consulta indebida de tu informacion.",
      "Los datos de navegacion y los textos generados se transmiten y almacenan bajo estandares razonables de seguridad.",
    ],
  },
  {
    title: "6. Canales de atencion para habeas data",
    content: [
      "Si deseas consultar, actualizar, rectificar o eliminar tus datos de los sistemas de LidIA, puedes enviar una solicitud escrita a nuestro Oficial de Proteccion de Datos a traves de:",
    ],
    items: [
      "Correo electronico: [correo@tuempresa.com]",
      "Asunto sugerido: Ejercicio de Derecho Habeas Data - LidIA",
      "Las solicitudes seran resueltas dentro de los terminos legales aplicables.",
    ],
  },
]

export const metadata: Metadata = {
  title: "Politica de privacidad",
  description:
    "Conoce como LidIA recolecta, usa y protege los datos personales tratados dentro de su experiencia de diligenciamiento automatizado.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CustomCursor />
      <GrainOverlay />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(191,111,204,0.28),rgba(12,43,62,0)_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-linear-to-b from-brand-purple/10 via-brand-lavanda/8 to-transparent" />

      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-6">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex items-center gap-3 rounded-2xl border border-foreground/15 bg-foreground/8 py-1 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/12">
            <Image
              src="/lidia-logo-white.png"
              alt="LidiA Legaltech"
              width={108}
              height={40}
              priority
              className="h-7 w-auto md:h-9"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="group relative font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Inicio
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
          </Link>
          <span className="group relative font-sans text-sm font-medium text-foreground">
            Politica de privacidad
            <span className="absolute -bottom-1 left-0 h-px w-full bg-foreground transition-all duration-300" />
          </span>
        </div>

        <Link
          href="/"
          className="hidden rounded-full border border-brand-lavanda/30 bg-foreground/5 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur-xl transition-all hover:border-brand-lavanda/55 hover:bg-foreground/10 md:inline-flex"
        >
          Volver al sitio
        </Link>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-12 pt-24 md:px-8 md:pb-20 md:pt-32">

        <section className="mb-8 grid gap-6 md:mb-12 md:grid-cols-[minmax(0,1.2fr)_320px] md:gap-8">
          <div className="rounded-4xl border border-foreground/12 bg-foreground/6 p-6 backdrop-blur-xl md:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-lavanda/40 bg-brand-purple/10 px-4 py-1.5 text-xs font-medium text-foreground/90">
              <ShieldCheck className="h-3.5 w-3.5" />
              Tratamiento de datos personales
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-foreground/55">
              Politica de privacidad
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-foreground md:text-6xl">
              Una explicacion clara sobre como LidIA usa y protege tu informacion.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/72 md:text-base">
              En LidIA tratamos los datos personales exclusivamente para el diligenciamiento automatizado de documentos y la gestion asociada a ese servicio. Esta pagina resume el alcance del tratamiento y los derechos del titular conforme a la Ley 1581 de 2012 en Colombia.
            </p>
            <p className="mt-4 text-sm text-foreground/55">Ultima actualizacion: 06 de Junio 2026</p>
          </div>

          <aside className="rounded-4xl border border-foreground/12 bg-foreground/5 p-6 backdrop-blur-xl md:p-7">
            <p className="text-sm font-medium text-foreground/90">Resumen rapido</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-foreground/72">
              <li className="border-b border-foreground/10 pb-4">Solo pedimos la informacion necesaria para diligenciar tu documento.</li>
              <li className="border-b border-foreground/10 pb-4">No compartimos casos ni datos con fines comerciales o publicitarios.</li>
              <li>Siempre puedes ejercer tus derechos de consulta, actualizacion, rectificacion y supresion.</li>
            </ul>
          </aside>
        </section>

        <section className="grid gap-5 md:gap-6">
          {policySections.map((section) => (
            <article
              key={section.title}
              className="rounded-4xl border border-foreground/12 bg-foreground/5 p-6 backdrop-blur-xl md:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{section.title}</h2>

              {section.content?.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-4xl text-sm leading-7 text-foreground/72 md:text-[15px]">
                  {paragraph}
                </p>
              ))}

              {section.items ? (
                <ul className="mt-5 space-y-3 text-sm leading-7 text-foreground/72 md:text-[15px]">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-brand-lavanda" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.note ? (
                <div className="mt-5 rounded-2xl border border-brand-lavanda/25 bg-brand-purple/10 p-4 text-sm leading-7 text-foreground/82">
                  {section.note}
                </div>
              ) : null}
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-4xl border border-foreground/12 bg-foreground/6 p-6 backdrop-blur-xl md:mt-10 md:p-8">
          <p className="text-sm leading-7 text-foreground/72 md:text-[15px]">
            Para interactuar con LidIA, la interfaz debe incluir una autorizacion previa, expresa e informada para el tratamiento de datos personales conforme a esta politica de privacidad.
          </p>
          <div className="mt-5 inline-flex max-w-3xl rounded-2xl border border-foreground/14 bg-background/35 px-4 py-4 text-sm leading-7 text-foreground/82">
            Autorizo de manera previa, expresa e informada a LidIA para el tratamiento de mis datos personales de acuerdo con su Politica de Privacidad. Entiendo que mis datos se usaran exclusivamente para la generacion de mis documentos legales y el seguimiento de mis tramites, cuando aplique.
          </div>
        </section>
      </div>
    </main>
  )
}
