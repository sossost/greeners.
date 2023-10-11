import { BrowserRouter as Router } from "react-router-dom";
import { StoryFn, Meta } from "@storybook/react";
import { Link } from ".";

export default {
  title: "Atoms/Link",
  component: Link,
} as Meta<typeof Image>;

const Template: StoryFn<typeof Link> = (args) => (
  <Router>
    <Link {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Link",
  openInNewTab: false,
  to: "/",
};
