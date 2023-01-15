import { Container, Header, List, ListItem, Point } from "./styled";

const Section = ({ title, array }) => (
    <Container>
        <Header>{title}</Header>
        <List>
            {array.map((element) => (
                <ListItem key={element}>
                    <Point />
                    {element}
                </ListItem>
            ))}
        </List>
    </Container>
);

export default Section;