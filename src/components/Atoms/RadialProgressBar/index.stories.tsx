import { StoryFn, Meta } from "@storybook/react";
import { RadialProgressBar } from ".";

export default {
  title: "Atoms/RadialProgressBar",
  component: RadialProgressBar,
  argTypes: {
    percent: { control: "number" },
    radius: { control: "number" },
  },
} as Meta<typeof RadialProgressBar>;

const Template: StoryFn<typeof RadialProgressBar> = (args) => (
  <RadialProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  percent: 66,
  radius: 60,
};
