import { StoryFn, Meta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "textOnly"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  variant: "primary",
  size: "medium",
};
