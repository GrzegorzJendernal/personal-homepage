import { Container } from "./styled";
import ThemeButton from "./ThemeButton";
import AboutMe from "./AboutMe";
import React from "react";

const Header = () => (
  <Container>
    <AboutMe />
    <ThemeButton />
  </Container>
);

export default Header;
