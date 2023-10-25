import { vars } from "@/token";

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
        fontWeight: vars.fontWeight.medium,
        lineHeight: vars.lineHeight.button,
        outline: "none",
        borderRadius: vars.borderRadius.default,
        transition: "all .3s ease",
        cursor: disabled ? "not-allowed" : "pointer",
        filter: disabled ? "opacity(0.5)" : "none",
        ":focus": {
          border: `1px solid ${vars.colors.white}`,
          boxShadow: `0 0 0 2px ${vars.colors.accent}`,
        },
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
    border: `1px solid ${vars.colors.primary}`,
    backgroundColor: vars.colors.primary,
    color: "white",
    "&:hover": {
      backgroundColor: vars.colors.secondary,
      borderColor: vars.colors.secondary,
      boxShadow: "none",
    },
  },
  secondary: {
    border: `1px solid ${vars.colors.primary}`,
    backgroundColor: "transparent",
    color: vars.colors.primary,
    "&:hover": {
      backgroundColor: vars.colors.primary,
      color: vars.colors.white,
      boxShadow: "none",
    },
  },
  textOnly: {
    border: "1px solid transparent",
    backgroundColor: "transparent",
    color: vars.colors.primary,
    "&:hover": {
      border: `1px solid ${vars.colors.primary}`,
      boxShadow: "none",
    },
  },
};

const TYPE_SIZES = {
  small: {
    fontSize: "12px",
    padding: "0 12px",
  },
  medium: {
    fontSize: "15px",
    padding: "0 15px",
  },
  large: {
    fontSize: "18px",
    padding: "0 18px",
  },
};
