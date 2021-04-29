import { themes } from '@strikelabs/luna';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: typeof themes.base }>`
  * {
    box-sizing: border-box;
  }

  html {
    background-image: url("/pog3.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
  
  body {
    margin: 0;
    font-size: ${({ theme }) => theme.defaults.fontSize};
    font-family: ${({ theme }) => theme.defaults.fontFamily};
  }

  h1, h2, h3, h4, h5, h6, span, a, p {
    margin: 0;
    line-height: 1;
  }
`;

export default GlobalStyle;
