import { BrowserRouter as Router } from "react-router-dom";
import { StoryFn, Meta } from "@storybook/react";
import { Nickname } from ".";

export default {
  title: "Molecules/Nickname",
  component: Nickname,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
} as Meta<typeof Nickname>;

const Template: StoryFn<typeof Nickname> = (args) => (
  <Router>
    <Nickname {...args}>{args.children}</Nickname>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Nickname",
  size: "medium",
};
