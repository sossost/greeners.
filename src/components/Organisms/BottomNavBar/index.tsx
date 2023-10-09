import { useLocation, useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
import { GoHomeFill } from "react-icons/go";
import { LuGoal } from "react-icons/lu";
import { BsFillCameraFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { colors } from "@constants/colors";
import { links } from "@constants/links";
import { mediaQueryScreenAndMinWidth } from "@utils/mediaQuery";
import { css } from "@emotion/react";

import { Flex } from "../../Atoms/Flex";

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

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleMenuClick = (menu: Menu) => {
    navigate(menu.link);
  };

  return (
    <Flex.Row
      css={css`
        height: 60px;
        position: fixed;
        bottom: 0;    
        width: 100%;
        background-color: ${colors.white};
        border-top: 1px solid ${colors.lightGray};
        ${mediaQueryScreenAndMinWidth(1024)`
          display: none;
        `}
        )}
    `}
    >
      {MENUES.map((menu) => {
        const Icon = menu.icon;
        return (
          <Flex.ColumnCenter
            key={menu.title}
            onClick={() => handleMenuClick(menu)}
            css={{
              gap: 5,
              padding: 5,
              flex: 1,
            }}
          >
            <Icon
              size={25}
              color={pathname === menu.link ? colors.primary : colors.secondary}
            />
            <span
              css={{
                fontSize: "12px",
                color:
                  pathname === menu.link ? colors.primary : colors.secondary,
              }}
            >
              {menu.title}
            </span>
          </Flex.ColumnCenter>
        );
      })}
    </Flex.Row>
  );
};

export default BottomNavBar;
