import { ButtonText, Letter, StyledButton } from "./styled";

const Button = ({ gitHub, text }) => (
  <StyledButton>
    {!gitHub ? <Letter /> : null}
    <ButtonText>{text}</ButtonText>
  </StyledButton>
);

export default Button;
