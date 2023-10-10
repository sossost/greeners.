import { StoryFn, Meta } from "@storybook/react";
import { Section } from ".";

export default {
  title: "Molecules/Section",
  component: Section,
  argTypes: {
    title: { control: "text" },
  },
} as Meta<typeof Section>;

const Template: StoryFn<typeof Section> = (args) => (
  <Section {...args}>
    {" "}
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
      accusantium dicta quis excepturi alias ullam nostrum, nisi cupiditate
      quaerat eligendi odit autem itaque! Labore, hic laborum? Voluptate
      architecto totam libero!
    </div>
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  title: "Section",
};
