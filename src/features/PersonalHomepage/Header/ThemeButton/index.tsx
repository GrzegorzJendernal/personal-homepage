import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, switchTheme } from "../../themeSlice";
import { Button, Circle, Container, Sunny, Text } from "./styled";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectTheme);

  const changeTheme = () => dispatch(switchTheme());

  return (
    <Container>
      <Text>DARK MODE {!darkTheme ? "OFF" : "ON"}</Text>
      <Button onClick={changeTheme}>
        <Circle dark={darkTheme}>
          <Sunny />
        </Circle>
      </Button>
    </Container>
  );
};

export default ThemeButton;
