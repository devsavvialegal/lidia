"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Script from "next/script"

import { SUPPORT_NUMBER } from "@/lib/whatsapp"

// The pixel ID is public by design; only the Conversions API token (META_CAPI_ACCESS_TOKEN) is secret.
const META_PIXEL_ID = "1614713637075454"

type Fbq = (command: "init" | "track" | "trackCustom", ...args: unknown[]) => void

declare global {
  interface Window {
    fbq?: Fbq
  }
}

const WHATSAPP_HOST = "wa.me"

function track(event: string, params?: Record<string, string>) {
  window.fbq?.("track", event, params)
}

// Conversions happen inside WhatsApp, so the click to wa.me is the last step the site can see.
function handleWhatsappClick(event: MouseEvent) {
  const anchor = (event.target as Element | null)?.closest?.("a[href]")
  if (!(anchor instanceof HTMLAnchorElement)) return

  let url: URL
  try {
    url = new URL(anchor.href)
  } catch {
    return
  }
  if (url.hostname !== WHATSAPP_HOST) return

  const isSupport = url.pathname.replace("/", "") === SUPPORT_NUMBER
  track("Contact", {
    content_category: isSupport ? "support" : "bot",
    content_name: url.searchParams.get("text") ?? "",
  })
}

export function MetaPixel() {
  const pathname = usePathname()
  const isFirstPageView = useRef(true)

  // The init snippet already sends the first PageView; later ones come from client-side navigations.
  useEffect(() => {
    if (isFirstPageView.current) {
      isFirstPageView.current = false
      return
    }
    track("PageView")
  }, [pathname])

  useEffect(() => {
    document.addEventListener("click", handleWhatsappClick, { capture: true })
    return () => document.removeEventListener("click", handleWhatsappClick, { capture: true })
  }, [])

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
