import styled from "@emotion/styled";
import { vars } from "@/token";
import { mediaQueryScreenAndMinWidth } from "@/utils";

import { Flex } from "@components/Atoms";

export const BottomNavBarContainer = styled(Flex.Row)`
  height: 60px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${vars.colors.white};
  border-top: 1px solid ${vars.colors.lightGray};
  ${mediaQueryScreenAndMinWidth(vars.breakpoints.desktop)} {
    display: none;
  }
`;

export const ButtonWrapper = styled(Flex.ColumnCenter)`
  gap: 5px;
  padding: 5px;
  flex: 1;
`;

export const ButtonText = styled.span<{ isActive: boolean }>`
  font-size: 12px;
  color: ${({ isActive }) =>
    isActive ? vars.colors.primary : vars.colors.secondary};
`;
