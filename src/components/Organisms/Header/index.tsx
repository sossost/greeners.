import { colors } from "@constants/colors";
import { useNavigate } from "react-router-dom";

import Logo from "@components/Atoms/Logo";
import { Flex } from "@components/Atoms/Flex";
import Button from "@/components/Atoms/Button";
import { links } from "@/constants/links";

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
      <Flex.Row css={{ gap: 10 }}>
        <Button variant="secondary" onClick={() => navigate(links.login)}>
          로그인
        </Button>
        <Button variant="primary" onClick={() => navigate(links.signUp)}>
          회원가입
        </Button>
      </Flex.Row>
    </Flex.Row>
  );
};

export default Header;
