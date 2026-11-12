/**
 * Marketing copy for the /documentos-legales landing, one export per section.
 * UI components render these objects; they must not hardcode copy.
 */

import { LAWYER_CONSULTATION } from "@/content/services"
import { formatCop } from "@/lib/format"

export const PAGE_META = {
  title: "Documentos legales por WhatsApp",
  description:
    "Crea contratos de arrendamiento, laborales, de prestación de servicios, derechos de petición y denuncias por inasistencia alimentaria desde tu celular, con minutas curadas por abogados colombianos.",
} as const

export const HERO = {
  title: {
    before: "Tus documentos legales, ",
    highlight: "rápidos, seguros",
    after: " y desde tu celular",
  },
  subtitle: "Minutas curadas por abogados colombianos y diligenciadas fácilmente por WhatsApp.",
  cta: {
    label: "Generar mi documento por WhatsApp",
    whatsappText: "Hola lidIA, necesito generar un documento legal",
  },
  highlights: [
    { icon: "zap", label: "Rápido" },
    { icon: "shield-check", label: "Con respaldo profesional" },
    { icon: "smartphone", label: "100% digital" },
  ],
  image: {
    alt: "Persona creando un documento legal desde su celular",
    brief: "Foto hero: persona sonriendo mientras usa su celular (vertical, 4:5)",
  } as { src?: string; alt: string; brief: string },
  floatingBadge: "Minutas curadas por abogados colombianos",
} as const

export const DOCUMENTS_SECTION = {
  title: { before: "¿Qué documento ", highlight: "necesitas?" },
  footnote: "Precios en pesos colombianos (COP). Conocerás el valor final antes de pagar.",
} as const

export const COMPARISON = {
  title: {
    before: "¿Por qué elegir ",
    highlight: "LidIA",
    middle: " y no pedirle tu documento a ",
    highlightEnd: "cualquier IA?",
  },
  generic: {
    label: "IA genérica",
    points: [
      "Genera textos sin contexto legal.",
      "Puede omitir cláusulas importantes.",
      "No está validada por profesionales.",
    ],
  },
  lidia: {
    logoAlt: "LidIA",
    points: [
      "Usa minutas curadas por abogados colombianos.",
      "Te guía con preguntas simples.",
      "Documentos claros y completos, listos para revisar y usar.",
    ],
  },
  versusLabel: "VS",
  image: {
    alt: "Mazo de juez y balanza de la justicia",
    brief: "Foto decorativa: mazo de juez y balanza (vertical, 3:4)",
  } as { src?: string; alt: string; brief: string },
} as const

export const HOW_IT_WORKS = {
  title: { before: "Así de ", highlight: "fácil", after: " funciona" },
  steps: [
    {
      icon: "pointer",
      title: "Elige tu documento",
      description: "Escríbele a LidIA y selecciona el documento que necesitas.",
    },
    {
      icon: "chat",
      title: "Responde las preguntas por WhatsApp",
      description: "LidIA te pide solo los datos necesarios, paso a paso.",
    },
    {
      icon: "card",
      title: "Confirma y realiza el pago",
      description: "Revisa tus datos y conoce el precio antes de pagar.",
    },
    {
      icon: "file-check",
      title: "Recibe tu documento listo",
      description: "Tu documento se genera con la información que confirmaste.",
    },
  ],
  image: {
    alt: "Chat de LidIA en WhatsApp mostrando el menú de documentos",
    brief: "Captura real del chat de LidIA en WhatsApp con el menú de documentos, dentro de un celular (vertical, 3:4)",
  } as { src?: string; alt: string; brief: string },
} as const

export const ADVISORY = {
  title: { before: "¿Necesitas ", highlight: "asesoría legal", after: " personalizada?" },
  description:
    "Al finalizar tu documento, LidIA te ofrece revisarlo junto a uno de nuestros abogados, personalizarlo si tu caso lo requiere o recibir asesoría sobre tu proceso.",
  priceLabel: "Servicio adicional",
  note: "Disponible al terminar la generación de tu documento. Precio en COP.",
  cta: {
    label: "Generar mi documento",
    // Advisory is only offered at the end of a generation flow, so the CTA starts one.
    whatsappText: "Hola lidIA, necesito generar un documento legal",
  },
  support: {
    text: "¿Tienes una duda o algo no funcionó durante el flujo?",
    linkLabel: "Contactar soporte",
    // Sent to the human support line (not the bot), mirroring the bot's own support message.
    whatsappText: "Hola, tengo una duda o un problema con LidIA. Necesito soporte.",
  },
  image: {
    alt: "Abogada de LidIA lista para atender una asesoría",
    brief: "Foto: abogada o asesora sonriendo con audífonos (horizontal, 4:3)",
  } as { src?: string; alt: string; brief: string },
} as const

/**
 * Answers are grounded in docs/terms-conditions.md and the bot behavior documented in
 * lidIA-dashboard/docs/N8N_IMPL.md. Plain text only: also used for FAQPage structured data.
 */
export const FAQ = {
  title: { before: "Preguntas ", highlight: "frecuentes" },
  items: [
    {
      question: "¿Tengo que saber de leyes para crear mi documento?",
      answer:
        "No. LidIA te hace preguntas sencillas por WhatsApp, una a la vez, y ubica tus respuestas en la minuta correcta. En los textos que redactas con tus palabras, como los hechos de un derecho de petición o el objeto de un contrato, te propone una redacción más clara para que la apruebes.",
    },
    {
      question: "¿Quién crea las minutas?",
      answer:
        "Las minutas son curadas por abogados colombianos. LidIA no improvisa el documento: completa los espacios de esas minutas con la información que tú le das.",
    },
    {
      question: "¿Debo pagar antes de empezar?",
      answer:
        "No. Primero respondes las preguntas y revisas un resumen de tus datos. Solo al final recibes el link de pago seguro, y siempre conoces el precio antes de pagar.",
    },
    {
      question: "¿Puedo revisar la información antes de recibirlo?",
      answer:
        "Sí. Antes de pagar, LidIA te muestra un resumen con todos tus datos para que los confirmes o corrijas. Mientras respondes, también puedes escribir \"volver\" para regresar a la pregunta anterior.",
    },
    {
      question: "¿LidIA me brinda asesoría jurídica?",
      answer: `No. Pero al entregarte tu documento legal puedes contratar una asesoría de 45 minutos con uno de nuestros abogados por ${formatCop(LAWYER_CONSULTATION.priceCop)}, para revisarlo y resolver las dudas sobre él.`,
    },
    {
      question: "¿Cuánto tarda la entrega del documento?",
      answer:
        "Apenas se confirma tu pago, LidIA genera tu documento y te lo envía en PDF por el mismo chat de WhatsApp, en cuestión de minutos.",
    },
  ],
} as const

export const NAV = {
  links: [
    { href: "#documentos", label: "Documentos" },
    { href: "#por-que-lidia", label: "¿Por qué LidIA?" },
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#asesoria", label: "Asesoría" },
    { href: "#preguntas", label: "Preguntas" },
  ],
  cta: {
    label: "Generar mi documento",
    whatsappText: "Hola lidIA, necesito generar un documento legal",
  },
  mobileMenu: {
    openLabel: "Abrir menú",
    title: "Menú",
  },
} as const

export const FINAL_CTA = {
  title: { before: "Tu próximo documento legal comienza ", highlight: "con un mensaje." },
  cta: {
    label: "Generar mi documento por WhatsApp",
    whatsappText: "Hola lidIA, necesito generar un documento legal",
  },
  footer: {
    company: "LidIA Legaltech · BUSINESS & LAWYERS S.A.S.",
    legalLink: { href: "/politica-de-privacidad", label: "Términos y política de privacidad" },
  },
} as const
