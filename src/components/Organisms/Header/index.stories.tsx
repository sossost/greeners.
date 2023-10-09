import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from ".";

export default {
  title: "Molecules/Header",
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => (
  <Router>
    <Header />
  </Router>
);

export const Default = Template.bind({});
