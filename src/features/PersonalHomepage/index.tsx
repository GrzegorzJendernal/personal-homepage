import Header from "./Header";
import Section from "../../common/Section";
import { mySkills } from "./sklills/mySkills";
import { skillsToLearn } from "./sklills/skillToLearn";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "./Footer/Contact";
import Socials from "./Footer/Socials";
import { Wrapper } from "./Wrapper";
import React from "react";

const PersonalHomepage = () => (
  <Wrapper>
    <Header />
    <Section title={"My skillset includes 🛠️"} array={mySkills} />
    <Section title={"What I want to learn next 🚀"} array={skillsToLearn} />
    <Portfolio />
    <Footer>
      <Contact />
      <Socials />
    </Footer>
  </Wrapper>
);

export default PersonalHomepage;
