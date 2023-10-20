import { vars } from "@/token";
import { coerceValueToCssPixel, mediaQueryScreenAndMinWidth } from "@/utils";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  isError?: boolean;
  fontSize?: number;
}

export const TextField = forwardRef(
  (
    { isError, fontSize = 15, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        css={{
          width: "100%",
          padding: "0px 12px",
          fontSize: coerceValueToCssPixel(fontSize),
          fontWeight: vars.fontWeight.medium,
          lineHeight: 3,
          border: `1px solid ${
            isError ? vars.colors.warn : vars.colors.lightGray
          }`,
          boxShadow: isError ? `0 0 0 2px ${vars.colors.warn}20` : "none",
          borderRadius: vars.borderRadius.default,
          outline: "none",
          "&:hover": {
            border: `1px solid ${vars.colors.primary}`,
          },
          "&:focus": {
            border: `1px solid ${vars.colors.primary}`,
            boxShadow: `0 0 0 2px ${vars.colors.primary}20`,
          },
          transition: "all 0.2s ease-in-out",
          [mediaQueryScreenAndMinWidth(vars.breakpoints.desktop)]: {
            lineHeight: vars.lineHeight.input,
          },
        }}
        {...props}
        ref={ref}
      />
    );
  }
);
