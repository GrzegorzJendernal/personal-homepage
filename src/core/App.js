import Header from "../common/Header";
import Section from "../common/Section";
import Wrapper from "../common/Wrapper";

function App() {
  return (
    <Wrapper>
      <Header />
      <Section
        title={"Tytuł"}
        content={"cokowliek"} />
      <Section
        title={"Tytuł drugiej sekcji"}
        content={"cokolwiek, ale trochę dłużej"} />
    </Wrapper>
  );
}

export default App;
