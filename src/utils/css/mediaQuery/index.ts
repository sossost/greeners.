import { css } from "@emotion/react";
import { coerceValueToCssPixel } from "..";

export const mediaQuery = (query: string) => (template: TemplateStringsArray) =>
  css`
    @media ${query} {
      ${template.raw.join("")}
    }
  `;

export const mediaQueryScreenAndMaxWidth = (maxWidth: string | number) =>
  mediaQuery(`screen and (max-width: ${coerceValueToCssPixel(maxWidth)})`);

export const mediaQueryScreenAndMinWidth = (minWidth: string | number) =>
  mediaQuery(`screen and (min-width: ${coerceValueToCssPixel(minWidth)})`);
