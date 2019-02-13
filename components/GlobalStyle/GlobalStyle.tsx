import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html, body {
    background: white;
    font-family: 'Poppins', 'Proxima Nova Soft', 'Helvetica', sans-serif;
    font-size: 16px;
    margin: 0;
    font-weight: 400;
    padding: 0;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
