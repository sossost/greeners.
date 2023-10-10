import { colors } from "@/constants/colors";
import { coerceValueToCssPixel } from "@/utils/coerceValueToCssPixel";
import { HTMLAttributes, ReactNode } from "react";

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
