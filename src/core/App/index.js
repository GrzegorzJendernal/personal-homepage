import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Section from "../../common/Section";
import { selectTheme } from "../../features/homepage/homepageSlice";
import Portfolio from "../../features/homepage/Portfolio";
import { mySkills } from "../../features/homepage/sklills/mySkills";
import { skillsToLearn } from "../../features/homepage/sklills/skillToLearn";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "../theme";
import Header from "../../features/homepage/Header";
import Footer from "../../features/homepage/Footer";
import AboutMe from "../../features/homepage/Header/AboutMe";
import Contact from "../../features/homepage/Footer/Contact";
import Socials from "../../features/homepage/Footer/Socials";

const App = () => {
  const themeName = useSelector(selectTheme);
  const theme = () => {
    if (themeName === "dark") return (
      themeDark
    ); return (themeLight)
  };

  return (
    <ThemeProvider
      theme={theme()}
    >
      <GlobalStyle />
      <Header
        content={<AboutMe />}
      />
      <Section
        title={"My skillset includes 🛠️"}
        array={mySkills}
      />
      <Section
        title={"What I want to learn next 🚀"}
        array={skillsToLearn} />
      <Portfolio />
      <Footer
        content={<Contact />}
        extraContent={<Socials />}
      />
    </ThemeProvider>
  );
}

export default App;
