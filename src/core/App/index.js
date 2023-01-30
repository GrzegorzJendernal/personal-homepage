import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { selectTheme } from "../../features/PersonalHomepage/homepageSlice";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "../theme";
import PersonalHomepage from "../../features/PersonalHomepage";

const App = () => {
  const themeName = useSelector(selectTheme);
  const theme = () => {
    if (themeName === "dark") return themeDark;
    return themeLight;
  };

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
