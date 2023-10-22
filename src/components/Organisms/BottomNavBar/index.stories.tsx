import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import { GoHomeFill } from "react-icons/go";
import { LuGoal } from "react-icons/lu";
import { BsFillCameraFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { BottomNavBar } from ".";

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

export default {
  title: "Organisms/BottomNavBar",
  component: BottomNavBar,
} as Meta<typeof BottomNavBar>;

const Template: StoryFn<typeof BottomNavBar> = (...args) => (
  <Router>
    <div css={{ marginLeft: "-15px" }}>
      <BottomNavBar {...args} menus={MENUS} />
    </div>
  </Router>
);

export const Default = Template.bind({});
