import { colors } from "@/constants/colors";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  html,
  body,
  #root {
    margin: 0;
    font-family: "Pretendard", sans-serif;
    color: ${colors.mainFont};
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  main {
    margin: 0 auto;
    maxwidth: 1024px;
    width: 100%;
    height: 100%;
    padding: 20px;
    minheight: 100vh;

    @media screen and (min-width: 1024px) {
      padding: 30px;
    }
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyle;
