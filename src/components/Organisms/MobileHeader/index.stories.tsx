import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import { MobileHeader } from ".";

export default {
  title: "Organisms/MobileHeader",
  component: MobileHeader,
  argTypes: {
    title: {
      control: { type: "text" },
    },
  },
} as Meta<typeof MobileHeader>;

const Template: StoryFn<typeof MobileHeader> = (args) => (
  <Router>
    <MobileHeader {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  title: "페이지 타이틀",
};
