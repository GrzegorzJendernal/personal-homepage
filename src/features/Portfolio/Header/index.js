import DescriptionText from "../../../common/DescriptionText";
import { Container, Logo, Title } from "./styled";

const Header = () => (
    <Container>
        <Logo />
        <Title>Portfolio</Title>
        <DescriptionText
            content="My recent projects"
        />
    </Container>
);

export default Header;