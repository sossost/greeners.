import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import BottomNavBar from ".";

export default {
  title: "Organisms/BottomNavBar",
  component: BottomNavBar,
} as Meta<typeof BottomNavBar>;

const Template: StoryFn<typeof BottomNavBar> = () => (
  <Router>
    <div css={{ marginLeft: "-15px" }}>
      <BottomNavBar />
    </div>
  </Router>
);

export const Default = Template.bind({});
