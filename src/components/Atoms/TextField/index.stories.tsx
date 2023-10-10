import { StoryFn, Meta } from "@storybook/react";
import { TextField } from ".";

export default {
  title: "Atoms/TextField",
  component: TextField,
  argTypes: {
    isError: {
      control: { type: "boolean" },
    },
    fontSize: {
      control: { type: "number" },
    },
  },
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  isError: false,
  fontSize: 16,
};
