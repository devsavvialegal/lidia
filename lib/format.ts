/** ISO currency code shown next to every price. */
export const CURRENCY_CODE = "COP"

/** Formats an integer COP amount as "$81.900" (es-CO thousands separator, no decimals). */
export function formatCop(amount: number): string {
  return `$${amount.toLocaleString("es-CO", { maximumFractionDigits: 0 })}`
}
