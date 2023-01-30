import { useSelector } from "react-redux";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { selectTheme } from "../../features/PersonalHomepage/homepageSlice";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";
import PersonalHomepage from "../../features/PersonalHomepage";

const App = () => {
  const themeName = useSelector(selectTheme);

  return (
    <ThemeProvider theme={themeName === "dark" ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
