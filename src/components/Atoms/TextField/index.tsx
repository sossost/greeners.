import { breakpoints } from "@/constants";
import { colors } from "@/constants/colors";
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
          fontWeight: 500,
          lineHeight: 3,
          border: `1px solid ${isError ? colors.warn : colors.lightGray}`,
          boxShadow: isError ? `0 0 0 2px ${colors.warn}20` : "none",
          borderRadius: "5px",
          outline: "none",
          "&:hover": {
            border: `1px solid ${colors.primary}`,
          },
          "&:focus": {
            border: `1px solid ${colors.primary}`,
            boxShadow: `0 0 0 2px ${colors.primary}20`,
          },
          transition: "all 0.2s ease-in-out",
          [mediaQueryScreenAndMinWidth(breakpoints.desktop)]: {
            lineHeight: 2.5,
          },
        }}
        {...props}
        ref={ref}
      />
    );
  }
);
