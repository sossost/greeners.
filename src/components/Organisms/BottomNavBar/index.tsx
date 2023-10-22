import { useLocation, useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
import { vars } from "@/token";
import * as S from "./index.styles";

interface Menu {
  title: string;
  icon: IconType;
  link: string;
}

interface BottomNavBarProps {
  menus: Menu[];
}

export const BottomNavBar = ({ menus }: BottomNavBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleMenuClick = (menu: Menu) => {
    navigate(menu.link);
  };

  return (
    <S.BottomNavBarContainer>
      {menus.map((menu: Menu) => {
        const Icon = menu.icon;
        const isActive: boolean = pathname === menu.link;

        return (
          <S.ButtonWrapper
            key={menu.title}
            onClick={() => handleMenuClick(menu)}
          >
            <Icon
              size={25}
              color={isActive ? vars.colors.primary : vars.colors.secondary}
            />
            <S.ButtonText isActive={isActive}>{menu.title}</S.ButtonText>
          </S.ButtonWrapper>
        );
      })}
    </S.BottomNavBarContainer>
  );
};
