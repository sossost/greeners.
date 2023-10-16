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
  fontSize = 16,
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      css={{
        fontSize: coerceValueToCssPixel(fontSize),
        lineHeight: 2.5,
        fontWeight: "600",
        color: colors.mainFont,
      }}
      {...props}
    >
      {children}
    </label>
  );
};
