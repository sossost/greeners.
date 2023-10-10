import { HTMLAttributes, ReactNode } from "react";
import { colors } from "@/constants";
import { coerceValueToCssPixel } from "@/utils";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  id: string;
  fontSize?: number;
}

export const Label = ({
  children,
  id,
  fontSize = 20,
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={id}
      css={{
        fontSize: coerceValueToCssPixel(fontSize),
        lineHeight: coerceValueToCssPixel(fontSize + 4),
        fontWeight: "500",
        marginBottom: "5px",
        color: colors.primary,
      }}
      {...props}
    >
      {children}
    </label>
  );
};
