import { StoryFn, Meta } from "@storybook/react";
import { Loading } from ".";

export default {
  title: "Molecules/Loading",
  component: Loading,
} as Meta<typeof Loading>;

const Template: StoryFn<typeof Loading> = () => <Loading />;

export const Default = Template.bind({});
