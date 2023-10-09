import { StoryFn, Meta } from "@storybook/react";
import { Flex } from ".";

export default {
  title: "Atoms/Flex",
  component: Flex,
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: { type: "radio" },
    },
    justify: {
      options: ["stretch", "flex-start", "center", "flex-end", "space-between"],
      control: { type: "radio" },
    },
    align: {
      options: ["stretch", "flex-start", "center", "flex-end", "space-between"],
      control: { type: "radio" },
    },
    as: {
      options: ["div", "span", "section", "article", "main"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof Flex>;

const Template: StoryFn<typeof Flex> = (args) => (
  <Flex {...args} css={{ fontSize: 16 }}>
    <span>Flex1</span>
    <span>Flex2</span>
    <span>Flex3</span>
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  direction: "row",
  justify: "flex-start",
  align: "flex-start",
};
