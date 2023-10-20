import { SyntheticEvent } from "react";
import { IconType } from "react-icons";
import { vars } from "@/token";

import { Flex, FlexProps, Image } from "@components/Atoms";

interface SocialLoginButtonProps extends FlexProps {
  providers: { name: string; displayName: string; icon: IconType | string }[];
  onClick: (e: SyntheticEvent) => void;
  type: "login" | "signup";
  buttonSize?: "small" | "medium" | "large";
}

export const SocialLoginButtons = ({
  providers,
  onClick,
  type,
  buttonSize = "medium",
  ...props
}: SocialLoginButtonProps) => {
  return (
    <Flex.ColumnCenter {...props}>
      {providers.map((provider) => {
        const Icon = provider.icon;

        return (
          <button
            key={provider.name}
            name={provider.name}
            onClick={onClick}
            type="button"
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: vars.lineHeight.button,
              gap: "10px",
              padding: 0,
              backgroundColor: vars.colors.white,
              border: `1px solid ${vars.colors.primary}`,
              cursor: "pointer",
              borderRadius: vars.borderRadius.default,
              width: "100%",
              ...TYPE_SIZES[buttonSize],
            }}
          >
            {typeof provider.icon === "string" ? (
              <Image
                src={provider.icon}
                alt={provider.displayName}
                size={25}
                style={{ pointerEvents: "none" }}
              />
            ) : (
              <Icon size={25} style={{ pointerEvents: "none" }} />
            )}
            {provider.displayName}로 간편하게
            {type === "login" ? "로그인" : "회원가입"}
          </button>
        );
      })}
    </Flex.ColumnCenter>
  );
};

const TYPE_SIZES = {
  small: {
    fontSize: "12px",
  },
  medium: {
    fontSize: "15px",
  },
  large: {
    fontSize: "18px",
  },
};
