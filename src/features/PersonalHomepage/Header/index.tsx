import { Container } from "./styled";
import ThemeButton from "../ThemeButton";

const Header = ({ content }) => (
  <Container>
    {content}
    <ThemeButton />
  </Container>
);

export default Header;
