import { useLocation, useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
import { colors, links } from "@/constants";
import * as S from "./index.styles";

import { GoHomeFill } from "react-icons/go";
import { LuGoal } from "react-icons/lu";
import { BsFillCameraFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

interface Menu {
  title: string;
  icon: IconType;
  link: string;
}

const MENUES = [
  {
    title: "홈",
    icon: GoHomeFill,
    link: links.home,
  },
  {
    title: "챌린지",
    icon: LuGoal,
    link: links.challenge,
  },
  {
    title: "인증",
    icon: BsFillCameraFill,
    link: links.certification,
  },
  {
    title: "오늘의기록",
    icon: BsBarChartFill,
    link: links.todayReocords,
  },
  {
    title: "마이페이지",
    icon: FaUser,
    link: links.myPage,
  },
];

export const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleMenuClick = (menu: Menu) => {
    navigate(menu.link);
  };

  return (
    <S.BottomNavBarContainer>
      {MENUES.map((menu) => {
        const Icon = menu.icon;
        const isActive: boolean = pathname === menu.link;

        return (
          <S.ButtonWrapper
            key={menu.title}
            onClick={() => handleMenuClick(menu)}
          >
            <Icon
              size={25}
              color={isActive ? colors.primary : colors.secondary}
            />
            <S.ButtonText isActive={isActive}>{menu.title}</S.ButtonText>
          </S.ButtonWrapper>
        );
      })}
    </S.BottomNavBarContainer>
  );
};
