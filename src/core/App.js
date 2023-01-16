import Header from "../common/Header";
import Section from "../common/Section";
import Wrapper from "../common/Wrapper";
import Portfolio from "../features/Portfolio";
import { mySkills } from "../features/sklills/mySkills";
import { skillsToLearn } from "../features/sklills/skillToLearn";

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
