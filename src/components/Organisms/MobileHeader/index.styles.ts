import styled from "@emotion/styled";
import { vars } from "@/token";
import { mediaQueryScreenAndMinWidth } from "@/utils";

import { Flex } from "@components/Atoms";

export const MobileHeaderContainer = styled(Flex.Row)`
  position: sticky;
  top: 0;
  height: 60px;
  padding: 0 20px;
  background-color: ${vars.colors.white};
  ${mediaQueryScreenAndMinWidth(vars.breakpoints.desktop)}{
    display: none;
  }};
`;

export const DefaultLeftSlotWrapper = styled(Flex.Row)`
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const CenterSlotWrapper = styled(Flex.RowCenter)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
