import Header from "./Header";
import AboutMe from "./Header/AboutMe";
import Section from "../../common/Section";
import { mySkills } from "./sklills/mySkills";
import { skillsToLearn } from "./sklills/skillToLearn";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "./Footer/Contact";
import Socials from "./Footer/Socials";
import { Wrapper } from "./Wrapper";

const PersonalHomepage = () => (
  <Wrapper>
    <Header content={<AboutMe />} />
    <Section title={"My skillset includes 🛠️"} array={mySkills} />
    <Section title={"What I want to learn next 🚀"} array={skillsToLearn} />
    <Portfolio />
    <Footer content={<Contact />} extraContent={<Socials />} />
  </Wrapper>
);

export default PersonalHomepage;
