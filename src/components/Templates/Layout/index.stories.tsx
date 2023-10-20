import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import { vars } from "@/token";

import { Layout } from ".";

export default {
  title: "Templates/Layout",
  component: Layout,
} as Meta<typeof Layout>;

const Template: StoryFn<typeof Layout> = (args) => (
  <Router>
    <Layout {...args}>{args.children}</Layout>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: vars.colors.pastel,
        height: "100vh",
      }}
    >
      body
    </div>
  ),
};
