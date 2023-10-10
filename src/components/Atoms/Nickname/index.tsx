import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { links } from "@/constants";

interface NicknameProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  size?: "small" | "medium" | "large";
}

export const Nickname = ({
  children,
  size = "medium",
  ...props
}: NicknameProps) => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate(`${links.user}/${children}`)}
      css={{
        cursor: "pointer",
        fontWeight: "500",
        "&:hover": {
          textDecoration: "underline",
        },
        ...TYPE_SIZES[size],
      }}
      {...props}
    >
      {children}
    </span>
  );
};

const TYPE_SIZES = {
  small: {
    fontSize: "12px",
    lineHeight: "15px",
  },
  medium: {
    fontSize: "16px",
    lineHeight: "20px",
  },
  large: {
    fontSize: "20px",
    lineHeight: "25px",
  },
};
