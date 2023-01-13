import { Container } from './styled';
import ThemeButton from '../ThemeButton';
import AboutMe from '../../features/AboutMe';

const Header = () => {
    return (
        <Container>
            <AboutMe />
            <ThemeButton />
        </Container>
    )
};

export default Header;