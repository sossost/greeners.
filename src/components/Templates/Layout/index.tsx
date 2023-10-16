import { Flex } from "@/components/Atoms";
import { BottomNavBar, Header } from "@/components/Organisms";
import { breakpoints } from "@/constants";
import { mediaQueryScreenAndMinWidth } from "@/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex.Column
      css={{
        paddingBottom: "60px",
        [mediaQueryScreenAndMinWidth(breakpoints.desktop)]: {
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
