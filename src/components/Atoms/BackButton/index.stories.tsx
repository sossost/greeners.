import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import { BackButton } from ".";

export default {
  title: "Atoms/BackButton",
  component: BackButton,
  argTypes: {
    size: {
      control: { type: "number" },
    },
  },
} as Meta<typeof BackButton>;

const Template: StoryFn<typeof BackButton> = (args) => (
  <Router>
    <BackButton {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  size: 30,
};
