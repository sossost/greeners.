import { Flex, Title } from "@/components/Atoms";

interface SectionProps extends React.ComponentProps<typeof Flex.Column> {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <Flex.Column {...props}>
      <Title>{title}</Title>
      {children}
    </Flex.Column>
  );
};
