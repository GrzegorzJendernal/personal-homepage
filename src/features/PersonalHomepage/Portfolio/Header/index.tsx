import { DescriptionText } from "../../../../common/DescriptionText";
import { Container, Logo, Title } from "./styled";

const Header = () => (
  <Container>
    <Logo />
    <Title>Portfolio</Title>
    <DescriptionText>My recent projects</DescriptionText>
  </Container>
);

export default Header;
