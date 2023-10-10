import { Flex } from "@/components/Atoms";
import { BottomNavBar, Header } from "@/components/Organisms";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex.Column css={{ marginBottom: 60 }}>
      <Header />
      <main>{children}</main>
      <BottomNavBar />
    </Flex.Column>
  );
};
