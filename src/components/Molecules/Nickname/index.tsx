import { links } from "@/constants";
import { Link } from "@/components/Atoms";

interface NicknameProps {
  children: string;
  size?: "small" | "medium" | "large";
}

export const Nickname = ({ children, size = "medium" }: NicknameProps) => {
  return (
    <Link
      to={`${links.user}/${children}`}
      css={{
        fontWeight: "500",
        ...TYPE_SIZES[size],
      }}
    >
      {children}
    </Link>
  );
};

const TYPE_SIZES = {
  small: {
    fontSize: "12px",
    lineHeight: "16px",
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
