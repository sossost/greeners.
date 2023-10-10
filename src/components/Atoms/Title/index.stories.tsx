import { StoryFn, Meta } from "@storybook/react";
import { Title } from ".";

export default {
  title: "Atoms/Title",
  component: Title,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof Title>;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Title",
  size: "medium",
};
