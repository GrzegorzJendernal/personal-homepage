import { useSelector } from "react-redux";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { selectTheme } from "../../features/PersonalHomepage/themeSlice";
import { GlobalStyle } from "./GlobalStyle";
import { theme, themeDark } from "../theme";
import PersonalHomepage from "../../features/PersonalHomepage";
import React from "react";

const App = () => {
  const darkTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={!darkTheme ? theme : themeDark}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
