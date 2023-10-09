import { colors } from "@/constants/colors";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  html,
  body {
    margin: 0;
    font-family: "Pretendard", sans-serif;
    font-size: 62.5%;
    color: ${colors.darkGray};
  }

  * {
    box-sizing: border-box;
  }

  main {
    margin: 0 auto;
    maxwidth: 1024px;
    width: 100%;
    padding: 0 20px;
    minheight: 100vh;
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyle;
