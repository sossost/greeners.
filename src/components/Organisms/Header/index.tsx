import { useLocation, useNavigate } from "react-router-dom";
import { links } from "@/constants";
import * as S from "./index.styles";

import { Button, Logo } from "@/components/Atoms";

const MOBILE_SHOWN_PATHS = [links.home];

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobileShown = MOBILE_SHOWN_PATHS.includes(location.pathname);

  return (
    <S.HeaderContainer isMobileShown={isMobileShown}>
      <Logo />
      <S.ButtonWrapper>
        <Button variant="textOnly" onClick={() => navigate(links.login)}>
          로그인
        </Button>
        <Button variant="primary" onClick={() => navigate(links.signUp)}>
          회원가입
        </Button>
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
};
