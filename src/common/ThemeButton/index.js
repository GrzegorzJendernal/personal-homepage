import { useDispatch, useSelector } from "react-redux";
import { selectTheme, switchThemeToDark, switchThemeToLight } from "../../features/homepage/homepageSlice";
import { Button, Circle, Container, Sunny, Text } from "./styled";

const ThemeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    const changeTheme = () => {
        theme === "light" ? dispatch(switchThemeToDark()) : dispatch(switchThemeToLight())
    };

    return (
        <Container>
            <Text>DARK MODE OFF</Text>
            <Button
                onClick={changeTheme}
            >
                <Circle
                    dark={theme === "light" ? false : true}
                >
                    <Sunny />
                </Circle>
            </Button>
        </Container>
    )
}

export default ThemeButton;