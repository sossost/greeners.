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

    ::-webkit-scrollbar {
      display: none;
    }
  }

  main {
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyle;
