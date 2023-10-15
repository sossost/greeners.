import { breakpoints, colors } from "@/constants";
import { mediaQueryScreenAndMinWidth } from "@/utils";

import { BackButton, Flex } from "@/components/Atoms";

interface MobileHeaderProps {
  title?: string;
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export const MobileHeader = ({
  title,
  leftSlot,
  centerSlot,
  rightSlot,
}: MobileHeaderProps) => {
  if (!title) return null;

  return (
    <Flex.Row
      justify="space-between"
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "60px",
        padding: "0 20px",
        backgroundColor: colors.white,
        [mediaQueryScreenAndMinWidth(breakpoints.desktop)]: {
          display: "none",
        },
      }}
    >
      {leftSlot || (
        <Flex.Row
          css={{
            gap: "10px",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          <BackButton />
          {title}
        </Flex.Row>
      )}
      {centerSlot}
      {rightSlot}
    </Flex.Row>
  );
};
