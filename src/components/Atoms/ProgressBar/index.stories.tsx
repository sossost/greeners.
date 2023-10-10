import { StoryFn, Meta } from "@storybook/react";
import { ProgressBar } from ".";

export default {
  title: "Atoms/ProgressBar",
  component: ProgressBar,
  argTypes: {
    percent: { control: "number" },
  },
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  percent: 66,
};
