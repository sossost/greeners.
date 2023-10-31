import { HTMLAttributes, ReactNode } from "react";
import { vars } from "@/token";
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
        width: "fit-content",
        fontSize: coerceValueToCssPixel(fontSize),
        lineHeight: 2.5,
        fontWeight: "600",
        color: vars.colors.mainFont,
      }}
      {...props}
    >
      {children}
    </label>
  );
};
