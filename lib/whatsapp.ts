const BOT_NUMBER = '573115777094'
const DEFAULT_TEXT = 'Hola lidIA, quiero generar un documento'

/**
 * Human support line, separate from the bot. Must match SUPPORT_PHONE in the
 * n8n "lidIA - Main Router (WhatsApp)" workflow, which sends users here when
 * they type "soporte" | "ayuda" | "asesor".
 */
const SUPPORT_NUMBER = '573134495118'

function toWhatsappUrl(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}

export function buildWhatsappUrl(text: string = DEFAULT_TEXT): string {
  return toWhatsappUrl(BOT_NUMBER, text)
}

export function buildSupportWhatsappUrl(text: string): string {
  return toWhatsappUrl(SUPPORT_NUMBER, text)
}

export const WHATSAPP_BOT_URL = buildWhatsappUrl()
