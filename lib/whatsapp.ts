const BOT_NUMBER = '573115777094'
const DEFAULT_TEXT = 'Hola lidIA, quiero generar un documento'

export function buildWhatsappUrl(text: string = DEFAULT_TEXT): string {
  return `https://wa.me/${BOT_NUMBER}?text=${encodeURIComponent(text)}`
}

export const WHATSAPP_BOT_URL = buildWhatsappUrl()
