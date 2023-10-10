import { BrowserRouter as Router } from "react-router-dom";
import { StoryFn, Meta } from "@storybook/react";
import { Nickname } from ".";

export default {
  title: "Atoms/Nickname",
  component: Nickname,
  argTypes: {
    children: { control: "text" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof Image>;

const Template: StoryFn<typeof Nickname> = (args) => (
  <Router>
    <Nickname {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Nickname",
  size: "medium",
};
