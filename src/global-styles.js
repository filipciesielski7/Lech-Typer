import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #022855;
    // background-color: black;
    color: white;
    font-size: 16px;
}

.twitterLogo{
  color: grey;
  @media (max-width: 950px) {
    display: none;
  }
}

.arrow{
  @media (max-width: 950px) {
    display: none;
  }
}`;
