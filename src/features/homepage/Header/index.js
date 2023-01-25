import { Container } from './styled';
import ThemeButton from '../../../common/ThemeButton';

const Header = ({ content }) => {
    return (
        <Container>
            {content}
            <ThemeButton />
        </Container>
    )
};

export default Header;