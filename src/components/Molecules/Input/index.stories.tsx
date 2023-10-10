import { StoryFn, Meta } from "@storybook/react";
import { Input } from ".";

type StoryType = typeof Input & {
  isError: boolean;
};

export default {
  title: "Molecules/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    isError: { options: [true, false], control: "boolean" },
    bottomText: { control: "text" },
  },
} as Meta<typeof Input>;

const Template: StoryFn<StoryType> = (args) => (
  <Input {...args}>
    <Input.TextField />
  </Input>
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  bottomText: "Bottom Text",
};
