import { Flex } from "../../Atoms/Flex";
import BottomNavBar from "@components/Organisms/BottomNavBar";
import Header from "@/components/Organisms/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex.Column css={{ marginBottom: 60 }}>
      <Header />
      <main>{children}</main>
      <BottomNavBar />
    </Flex.Column>
  );
};

export default Layout;
