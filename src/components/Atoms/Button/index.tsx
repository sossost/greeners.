import { colors } from "@/constants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "textOnly";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "inherit",
        outline: "none",
        borderRadius: "10px",
        transition: "all .3s ease",
        cursor: disabled ? "not-allowed" : "pointer",
        filter: disabled ? "opacity(0.5)" : "none",
        ...TYPE_VARIANTS[variant],
        ...TYPE_SIZES[size],
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const TYPE_VARIANTS = {
  primary: {
    border: `1px solid ${colors.primary}`,
    backgroundColor: colors.primary,
    color: "white",
    " &:hover": {
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
    },
  },
  secondary: {
    border: `1px solid ${colors.primary}`,
    backgroundColor: "transparent",
    color: colors.primary,
    "&:hover": {
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
  textOnly: {
    border: "1px solid transparent",
    backgroundColor: "transparent",
    color: colors.primary,
    "&:hover": {
      border: `1px solid ${colors.primary}`,
    },
  },
};

const TYPE_SIZES = {
  small: {
    fontSize: "12px",
    padding: "6px 12px",
    fontWeight: "500",
    lineHeight: "18px",
  },
  medium: {
    fontSize: "16px",
    padding: "8px 16px",
    fontWeight: "500",
    lineHeight: "20px",
  },
  large: {
    fontSize: "20px",
    padding: "10px 20px",
    fontWeight: "500",
    lineHeight: "24px",
  },
};
