import { vars } from "@/token";
import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

interface BackButtonProps extends React.SVGProps<SVGElement> {
  onClick?: () => void;
  size?: number;
}

export const BackButton = ({
  onClick,
  size = 30,
  ...props
}: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <IoIosArrowBack
      onClick={onClick ? onClick : () => navigate(-1)}
      size={size}
      color={vars.colors.primary}
      {...props}
    />
  );
};
