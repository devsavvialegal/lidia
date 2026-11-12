/**
 * Single source of truth for the document catalog (names, prices, WhatsApp intents).
 * Any page or section that mentions a document or its price must read it from here.
 */

export type DocumentId = "arrendamiento" | "laboral" | "prestacion-servicios" | "derecho-peticion"

export type DocumentIconKey = "house" | "briefcase" | "file-signature" | "file-text"

export type LegalDocument = {
  id: DocumentId
  title: string
  description: string
  /** Price in Colombian pesos (COP), integer. */
  priceCop: number
  ctaLabel: string
  whatsappText: string
  icon: DocumentIconKey
  image: {
    src?: string
    alt: string
    /** Brief for the final photo while the asset is pending. */
    brief: string
  }
}

export const DOCUMENTS: readonly LegalDocument[] = [
  {
    id: "arrendamiento",
    title: "Contrato de arrendamiento",
    description: "Formaliza el arriendo de tu casa, apartamento o local.",
    priceCop: 81900,
    ctaLabel: "Crear contrato",
    whatsappText: "Hola lidIA, quiero crear un contrato de arrendamiento",
    icon: "house",
    image: {
      alt: "Entrega de llaves de una vivienda en arriendo",
      brief: "Foto: entrega de llaves de una vivienda (horizontal, 16:10)",
    },
  },
  {
    id: "laboral",
    title: "Contrato laboral",
    description: "Término fijo o indefinido para tus trabajadores.",
    priceCop: 81900,
    ctaLabel: "Crear contrato",
    whatsappText: "Hola lidIA, quiero crear un contrato laboral",
    icon: "briefcase",
    image: {
      alt: "Apretón de manos al cerrar un acuerdo laboral",
      brief: "Foto: apretón de manos entre empleador y trabajador (horizontal, 16:10)",
    },
  },
  {
    id: "prestacion-servicios",
    title: "Contrato de prestación de servicios",
    description: "Acuerdos claros con independientes o proveedores.",
    priceCop: 70900,
    ctaLabel: "Crear contrato",
    whatsappText: "Hola lidIA, quiero crear un contrato de prestación de servicios",
    icon: "file-signature",
    image: {
      alt: "Profesional independiente trabajando en su portátil",
      brief: "Foto: profesional independiente trabajando en su portátil (horizontal, 16:10)",
    },
  },
  {
    id: "derecho-peticion",
    title: "Derecho de petición",
    description: "Solicita, reclama o pide información a EPS, entidades públicas o privadas.",
    priceCop: 35900,
    ctaLabel: "Crear documento",
    whatsappText: "Hola lidIA, quiero crear un derecho de petición",
    icon: "file-text",
    image: {
      alt: "Documento de salud sobre un escritorio con estetoscopio",
      brief: "Foto: documento de salud con estetoscopio (horizontal, 16:10)",
    },
  },
]
