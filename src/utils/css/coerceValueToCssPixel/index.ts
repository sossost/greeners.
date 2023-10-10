export const coerceValueToCssPixel = (value: string | number): string => {
  return typeof value === "string" ? value : `${value}px`;
};
