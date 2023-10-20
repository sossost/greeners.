import { useNavigate } from "react-router-dom";
import { links } from "@/constants";
import { vars } from "@/token";

interface LogoProps {
  link?: string;
}

export const Logo = ({ link }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <div
      css={{
        color: vars.colors.primary,
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
        textAlign: "center",
      }}
      onClick={() => navigate(link || links.home)}
    >
      그리너스
    </div>
  );
};
