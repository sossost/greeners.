import { colors } from "@constants/colors";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "textOnly";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Button = ({
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

export default Button;

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
    fontSize: "1.2rem",
    padding: "0.6rem 1.2rem",
    fontWeight: "500",
    lineHeight: "1.8rem",
  },
  medium: {
    fontSize: "1.6rem",
    padding: "0.8rem 1.6rem",
    fontWeight: "600",
    lineHeight: "2rem",
  },
  large: {
    fontSize: "2rem",
    padding: "1rem 2rem",
    fontWeight: "700",
    lineHeight: "2.4rem",
  },
};