import { colors } from "@/constants/colors";
import { coerceValueToCssPixel } from "@/utils";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  isError?: boolean;
  fontSize?: number;
}

export const TextField = forwardRef(
  (
    { isError, fontSize = 14, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        css={{
          width: "100%",
          padding: "8px 12px",
          fontSize: coerceValueToCssPixel(fontSize),
          fontWeight: 500,
          lineHeight: "1.4",
          border: `1px solid ${isError ? colors.warn : colors.pastel}`,
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
        }}
        {...props}
        ref={ref}
      />
    );
  }
);
