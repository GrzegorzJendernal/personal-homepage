import AboutMe from './AboutMe';
import { Container } from './styled';
import ThemeButton from './ThemeButton';

const Header = () => {
    return (
        <Container>
            <AboutMe />
            <ThemeButton />
        </Container>
    )
};

export default Header;