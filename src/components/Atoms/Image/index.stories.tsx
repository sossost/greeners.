import { StoryFn, Meta } from "@storybook/react";
import { Image } from ".";

export default {
  title: "Atoms/Image",
  component: Image,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    size: { control: "number" },
    aspectRatio: { control: "number" },
    css: { control: "object" },
  },
} as Meta<typeof Image>;

const Template: StoryFn<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://source.unsplash.com/random",
  alt: "image",
  size: 200,
};
