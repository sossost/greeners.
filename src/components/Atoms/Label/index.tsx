import { colors } from "@/constants/colors";
import { HTMLAttributes, ReactNode } from "react";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  id: string;
  fontSize?: number;
}

const Label = ({ children, id, fontSize = 16, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={id}
      css={{
        fontSize: fontSize + 4,
        lineHeight: "24px",
        fontWeight: 500,
        marginBottom: 5,
        color: colors.primary,
      }}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
