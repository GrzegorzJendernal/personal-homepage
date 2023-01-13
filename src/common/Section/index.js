import { Container, Header, List, ListItem, Point } from "./styled";

const Section = ({ title, content }) => (
    <Container>
        <Header>{title}</Header>
        <List>
            <ListItem><Point />{content}</ListItem>
        </List>
    </Container>
);

export default Section;