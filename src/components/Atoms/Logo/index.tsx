import { useNavigate } from "react-router-dom";
import { colors, links } from "@/constants";

interface LogoProps {
  link?: string;
}

export const Logo = ({ link }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <div
      css={{
        color: colors.primary,
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
      onClick={() => navigate(link || links.home)}
    >
      그리너스
    </div>
  );
};
