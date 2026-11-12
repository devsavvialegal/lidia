import type { Metadata } from "next"

/** Canonical public origin of the site. Used by metadata, sitemap and robots. */
export const SITE_URL = "https://lidialegal.co"

export const SITE_NAME = "LidIA Legal co"

/** Default social share image. Pages without a dedicated one reuse it. */
export const DEFAULT_OG_IMAGE = {
  url: "/SEO.jpg",
  width: 1916,
  height: 943,
  alt: "LidIA Legal co, Agente de generación de documentos legales vía WhatsApp con diligenciamiento guiado.",
}

/**
 * Next.js replaces (not merges) a parent's openGraph/twitter object when a page defines its own,
 * so pages spread these defaults and only override title, description and url.
 */
export const BASE_OPEN_GRAPH = {
  type: "website",
  locale: "es_CO",
  siteName: SITE_NAME,
  images: [DEFAULT_OG_IMAGE],
} satisfies NonNullable<Metadata["openGraph"]>

export const BASE_TWITTER = {
  card: "summary_large_image",
  images: [DEFAULT_OG_IMAGE.url],
} satisfies NonNullable<Metadata["twitter"]>
