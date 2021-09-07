import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    
    --text-menu: #3b3c3d;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-size: 100%;
    font-family: 'Noto Sans HK', sans-serif;
    /* ; */
  }
  
  @media (min-width: 600px) {
    html, body {
    font-size: 100%;
    }
  }
  
  a {
    text-decoration: unset;
    color: var(--text-menu);
  }
  ul {
    list-style: none;
  }
`;
