import styled from "@emotion/styled";
import { vars } from "@/token";
import { mediaQueryScreenAndMinWidth } from "@/utils";

export const HeaderContainer = styled.div<{ isMobileShown: boolean }>`
  display: ${({ isMobileShown }) => (isMobileShown ? "flex" : "none")};
  position: fixed;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  gap: 10px;
  background-color: ${vars.colors.white};
  padding: 0 20px;
  border-bottom: 1px solid ${vars.colors.lightGray};
  ${mediaQueryScreenAndMinWidth(vars.breakpoints.desktop)} {
    display: flex;
    padding: 0 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
