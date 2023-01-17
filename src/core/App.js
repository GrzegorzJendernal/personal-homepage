import Header from "../common/Header";
import Section from "../common/Section";
import Wrapper from "../common/Wrapper";
import Portfolio from "../features/homepage/Portfolio";
import { mySkills } from "../features/homepage/sklills/mySkills";
import { skillsToLearn } from "../features/homepage/sklills/skillToLearn";

function App() {
  return (
    <Wrapper>
      <Header />
      <Section
        title={"My skillset includes 🛠️"}
        array={mySkills} />
      <Section
        title={"What I want to learn next 🚀"}
        array={skillsToLearn} />
      <Portfolio />
    </Wrapper>
  );
}

export default App;
