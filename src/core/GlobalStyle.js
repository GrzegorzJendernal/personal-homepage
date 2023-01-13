import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.mercury};
    word-break: break-word;
  }
`;