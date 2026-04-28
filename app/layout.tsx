import type React from "react"
import type { Metadata } from "next"
import { Epilogue, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-epilogue",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lidialegal.co"),
  title: {
    default: "LidIA Legal co | Agente de generación de documentos legales de forma automatizada.",
    template: "%s | LidIA Legal co",
  },
  description:
    "Genera derechos de petición y contratos por WhatsApp con flujos automatizados, minutas predefinidas y diligenciamiento guiado.",
  applicationName: "lidIA",
  keywords: [
    "LidIA",
    "LidIA Legal co",
    "documentos legales por WhatsApp",
    "derecho de petición",
    "contrato de prestación de servicios",
    "contrato laboral",
    "automatización legal Colombia",
    "documentos jurídicos Colombia",
  ],
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    title: "lidIA",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://lidialegal.co",
    siteName: "LidIA Legal co",
    title: "LidIA Legal co | Agente de generación de documentos legales de forma automatizada.",
    description:
      "Genera derechos de petición y contratos por WhatsApp con flujos automatizados, minutas predefinidas y diligenciamiento guiado.",
    images: [
      {
        url: "/SEO.jpg",
        width: 1916,
        height: 943,
        alt: "LidIA Legal co, Agente de generación de documentos legales vía WhatsApp con diligenciamiento guiado.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LidIA Legal co | Agente de generación de documentos legales de forma automatizada.",
    description:
      "Genera derechos de petición y contratos por WhatsApp con flujos automatizados, minutas predefinidas y diligenciamiento guiado.",
    images: ["/SEO.jpg"],
  },
  category: "legal technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${epilogue.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
