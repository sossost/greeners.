import { StoryFn, Meta } from "@storybook/react";
import Spacing from ".";

export default {
  title: "Atoms/Spacing",
  component: Spacing,
  argTypes: {
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
    size: {
      control: { type: "number" },
    },
  },
} as Meta<typeof Spacing>;

const Template: StoryFn<typeof Spacing> = (args) => (
  <div
    css={{
      display: "flex",
      fontSize: "1.6rem",
      flexDirection: args.direction === "vertical" ? "column" : "row",
    }}
  >
    <>item1</>
    <Spacing {...args} />
    <>item2</>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: 10,
  direction: "vertical",
};
