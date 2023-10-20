import { vars } from "@/token";
import { mediaQueryScreenAndMinWidth } from "@/utils";

import { BottomNavBar, Header } from "@components/Organisms";
import { Flex } from "@components/Atoms";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex.Column
      css={{
        paddingBottom: "60px",
        [mediaQueryScreenAndMinWidth(vars.breakpoints.desktop)]: {
          paddingBottom: "0px",
          paddingTop: "70px",
        },
      }}
    >
      <Header />
      <main>{children}</main>
      <BottomNavBar />
    </Flex.Column>
  );
};
