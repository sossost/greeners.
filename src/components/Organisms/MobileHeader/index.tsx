import {
  CenterSlotWrapper,
  DefaultLeftSlotWrapper,
  MobileHeaderContainer,
} from "./index.styles";

import { BackButton } from "@/components/Atoms";

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
    <MobileHeaderContainer>
      {leftSlot || <DefaultLeftSlot title={title} />}
      {centerSlot && <CenterSlot>{centerSlot}</CenterSlot>}
      {rightSlot}
    </MobileHeaderContainer>
  );
};

interface DefaultLeftSlotProps {
  title: string;
}

const DefaultLeftSlot = ({ title }: DefaultLeftSlotProps) => {
  return (
    <DefaultLeftSlotWrapper>
      <BackButton />
      {title}
    </DefaultLeftSlotWrapper>
  );
};

interface CenterSlotProps {
  children: React.ReactNode;
}

const CenterSlot = ({ children }: CenterSlotProps) => {
  return <CenterSlotWrapper>{children}</CenterSlotWrapper>;
};
