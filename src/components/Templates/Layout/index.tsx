import { vars } from "@/token";
import { mediaQueryScreenAndMinWidth } from "@/utils";
import { links } from "@/constants";

import { GoHomeFill } from "react-icons/go";
import { LuGoal } from "react-icons/lu";
import { BsFillCameraFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { BottomNavBar, Header } from "@components/Organisms";
import { Flex } from "@components/Atoms";

interface LayoutProps {
  children: React.ReactNode;
}

const MENUS = [
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

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex.Column
      css={{
        paddingBottom: "60px",
        [mediaQueryScreenAndMinWidth(vars.breakpoints.desktop)]: {
          paddingBottom: "0px",
          paddingTop: "70px",
        },
      }}
    >
      <Header />
      <main>{children}</main>
      <BottomNavBar menus={MENUS} />
    </Flex.Column>
  );
};
