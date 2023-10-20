import { StoryFn, Meta } from "@storybook/react";
import { vars } from "@/token";

import { Line } from ".";

export default {
  title: "Atoms/Line",
  component: Line,
  argTypes: {
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
    spacing: {
      control: { type: "text" },
    },
    length: {
      contro: { type: "text" },
    },
    lineColor: {
      control: { type: "color" },
    },
  },
} as Meta<typeof Line>;

const Template: StoryFn<typeof Line> = (args) => <Line {...args} />;

export const Default = Template.bind({});
Default.args = {
  direction: "horizontal",
  spacing: "20px",
  length: "100%",
  lineColor: vars.colors.lightGray,
};
