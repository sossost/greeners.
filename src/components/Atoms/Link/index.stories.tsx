import { BrowserRouter as Router } from "react-router-dom";
import { StoryFn, Meta } from "@storybook/react";
import { Link } from ".";

export default {
  title: "Atoms/Link",
  component: Link,
  argTypes: {
    children: { control: "text" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof Image>;

const Template: StoryFn<typeof Link> = (args) => (
  <Router>
    <Link {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Link",
  size: "medium",
};
