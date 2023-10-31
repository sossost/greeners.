import { StoryFn, Meta } from "@storybook/react";
import { Select } from ".";

export default {
  title: "Molecules/Select",
  component: Select,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    fontSize: {
      control: {
        type: "number",
      },
    },
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <Select {...args}>
    <Select.Trigger>옵션을 선택하세요.</Select.Trigger>
    <Select.OptionList>
      <Select.Option value="option 1">option 1</Select.Option>
      <Select.Option value="option 2">option 2</Select.Option>
      <Select.Option value="option 3">option 3</Select.Option>
    </Select.OptionList>
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  label: "셀렉트 박스",
  placeholder: "선택해주세요",
  fontSize: 14,
};
