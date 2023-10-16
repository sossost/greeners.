import styled from "@emotion/styled";
import { colors } from "@/constants";

export const HeaderContainer = styled.div<{ isMobileShown: boolean }>`
  display: ${({ isMobileShown }) => (isMobileShown ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: ${colors.white};
  padding: 0 20px;
  height: 70px;
  border-bottom: 1px solid ${colors.lightGray};
  @media screen and (min-width: 1024px) {
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
