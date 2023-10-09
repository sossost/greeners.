import { colors } from "@constants/colors";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { mediaQueryScreenAndMinWidth } from "@/utils/mediaQuery";
import { links } from "@/constants/links";

import { Flex } from "@components/Atoms/Flex";
import Logo from "@components/Atoms/Logo";
import Button from "@/components/Atoms/Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Flex.Row
      justify="space-between"
      css={{
        backgroundColor: colors.white,
        padding: "0 20px",
        height: "60px",
        borderBottom: `1px solid ${colors.lightGray}`,
      }}
    >
      <Logo />
      <div
        css={css`
          display: none;
          gap: 10px;
          ${mediaQueryScreenAndMinWidth(1024)`
            display: flex;
          `}
        `}
      >
        <Button variant="secondary" onClick={() => navigate(links.login)}>
          로그인
        </Button>
        <Button variant="primary" onClick={() => navigate(links.signUp)}>
          회원가입
        </Button>
      </div>
    </Flex.Row>
  );
};

export default Header;
