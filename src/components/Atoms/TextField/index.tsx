import { colors } from "@/constants/colors";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  isError?: boolean;
  fontSize?: number;
}

export const TextField = forwardRef(
  (
    { isError, fontSize = 16, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        css={{
          width: "100%",
          padding: `${fontSize / 2}px ${fontSize - 4}px`,
          fontSize: fontSize,
          lineHeight: `${fontSize + 4}px`,
          fontWeight: 500,
          border: `1px solid ${isError ? colors.warn : colors.pastel}`,
          boxShadow: isError ? `0 0 0 2px ${colors.warn}20` : "none",
          borderRadius: "0.5rem",
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
