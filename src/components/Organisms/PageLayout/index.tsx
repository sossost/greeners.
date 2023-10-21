import { mediaQueryScreenAndMinWidth } from "@/utils";
import { HTMLAttributes } from "react";
import { vars } from "@/token";

import { MobileHeader } from "..";
import { Flex } from "@components/Atoms";

interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  customHeader?: React.ReactElement;
  mobileTitle?: string;
}

export const PageLayout = ({
  children,
  customHeader,
  mobileTitle,
  ...props
}: PageLayoutProps) => {
  return (
    <>
      {customHeader ? customHeader : <MobileHeader title={mobileTitle} />}
      <Flex.Column
        css={{
          height: "100%",
          width: "100%",
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "0 20px",
          gap: "20px",
          overflow: "auto",
          [mediaQueryScreenAndMinWidth(vars.breakpoints.desktop)]: {
            flexDirection: "row",
            padding: "30px",
          },
        }}
        {...props}
      >
        {children}
      </Flex.Column>
    </>
  );
};
