export function coerceValueToCssPixel(value: string | number): string {
  return typeof value === "string" ? value : `${value}px`;
}
