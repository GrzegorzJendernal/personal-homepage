import { Button, Circle, Container, Sunny, Text } from "./styled";

const ThemeButton = () => {
    return (
        <Container>
            <Text>DARK MODE OFF</Text>
            <Button>
                <Circle>
                    <Sunny />
                </Circle>
            </Button>
        </Container>
    )
}

export default ThemeButton;