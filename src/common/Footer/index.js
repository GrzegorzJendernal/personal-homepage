import { Container } from "./styled";

const Footer = ({ content, extraContent }) => (
    <Container>
        {content}
        {extraContent}
    </Container>
);

export default Footer;