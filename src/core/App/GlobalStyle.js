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
    background-color: ${({ theme }) => theme.colors.background};
    word-break: break-word;
    transition: ${({ theme }) => theme.transition.time};
    max-width: 1920px;
    padding-top: 115px;
    margin: 0px 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding-top: 65px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-top: 22px;
    }
  }
`;