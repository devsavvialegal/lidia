import type { MetadataRoute } from "next"

// Keep in sync with metadataBase in app/layout.tsx.
const SITE_URL = "https://lidialegal.co"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/documentos-legales`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/politica-de-privacidad`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]
}
