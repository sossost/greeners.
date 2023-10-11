import styled from "@emotion/styled";

import { Flex, Image } from "@/components/Atoms";
import { colors } from "@/constants";

export const ProfileContainer = styled(Flex.Row)`
  gap: 10px;
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    width: 250px;
    height: 100%;
    align-items: center;
    padding: 30px;
    border-radius: 10px;
    background-color: ${colors.pale};
  }
`;

export const ProfileImageWrapper = styled.div`
  padding: 10px;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
  aspect-ratio: 1/1;
  @media screen and (min-width: 1024px) {
    width: 100px;
  }
`;

export const TextCotainer = styled(Flex.Column)`
  flex-grow: 1;
  width: 100%;
  gap: 5px;
  @media screen and (min-width: 1024px) {
    align-items: center;
  }
`;

export const NicknameWrapper = styled(Flex.Row)`
  gap: 5px;
`;
