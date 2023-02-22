import React from "react";
import { ButtonText, Letter, StyledButton } from "./styled";

interface ButtonProps {
  gitHub?: boolean;
  text: string;
}

const Button = ({ gitHub, text }: ButtonProps) => (
  <StyledButton>
    {!gitHub ? <Letter /> : null}
    <ButtonText>{text}</ButtonText>
  </StyledButton>
);

export default Button;
