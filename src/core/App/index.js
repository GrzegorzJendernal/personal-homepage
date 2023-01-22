import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Wrapper from "../../common/Wrapper";
import AboutMe from "../../features/homepage/AboutMe";
import Contact from "../../features/homepage/Contact";
import { selectTheme } from '../../features/homepage/homepageSlice';
import Portfolio from "../../features/homepage/Portfolio";
import { mySkills } from "../../features/homepage/sklills/mySkills";
import { skillsToLearn } from "../../features/homepage/sklills/skillToLearn";
import Socials from "../../features/homepage/Socials";
import { GlobalStyle } from './GlobalStyle';
import { themeLight, themeDark } from "../theme";


const App = () => {
  const themeName = useSelector(selectTheme);
  const theme = () => {
    if (themeName === "light") return (
      themeLight
    ); else return (themeDark)

  };

  return (
    <ThemeProvider
      theme={theme()}
    >
      <GlobalStyle />
      <Wrapper>
        <Header
          content={<AboutMe />}
        />
        <Section
          title={"My skillset includes 🛠️"}
          array={mySkills} />
        <Section
          title={"What I want to learn next 🚀"}
          array={skillsToLearn} />
        <Portfolio />
        <Footer
          content={<Contact />}
          extraContent={<Socials />}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
