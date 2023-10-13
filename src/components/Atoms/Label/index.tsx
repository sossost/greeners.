import { HTMLAttributes, ReactNode } from "react";
import { colors } from "@/constants";
import { coerceValueToCssPixel } from "@/utils";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor: string;
  fontSize?: number;
}

export const Label = ({
  children,
  htmlFor,
  fontSize = 14,
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      css={{
        fontSize: coerceValueToCssPixel(fontSize),
        lineHeight: coerceValueToCssPixel(fontSize + 4),
        fontWeight: "500",
        marginBottom: "5px",
        color: colors.mainFont,
      }}
      {...props}
    >
      {children}
    </label>
  );
};
