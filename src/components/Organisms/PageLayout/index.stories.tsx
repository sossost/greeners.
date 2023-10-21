import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import { PageLayout } from ".";

export default {
  title: "Organisms/PageLayout",
  component: PageLayout,
  argTypes: {
    mobileTitle: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof PageLayout>;

const Template: StoryFn<typeof PageLayout> = (args) => (
  <Router>
    <PageLayout {...args}>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgray",
          height: "100vh",
          width: "100%",
        }}
      >
        body
      </div>
    </PageLayout>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  mobileTitle: "페이지 타이틀",
};
