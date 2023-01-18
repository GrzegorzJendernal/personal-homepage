import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Wrapper from "../../common/Wrapper";
import AboutMe from "../../features/homepage/AboutMe";
import Contact from "../../features/homepage/Contact";
import Portfolio from "../../features/homepage/Portfolio";
import { mySkills } from "../../features/homepage/sklills/mySkills";
import { skillsToLearn } from "../../features/homepage/sklills/skillToLearn";
import Socials from "../../features/homepage/Socials";

const App = () => {
  return (
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
  );
}

export default App;
