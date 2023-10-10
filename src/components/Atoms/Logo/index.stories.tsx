import { StoryFn, Meta } from "@storybook/react";
import { Logo } from ".";

export default {
  title: "Atoms/Logo",
  component: Logo,
} as Meta<typeof Image>;

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  link: "/",
};
