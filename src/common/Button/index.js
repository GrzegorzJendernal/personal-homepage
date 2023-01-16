import { StyledButton, ButtonText, Letter } from "./styled";

const Button = ({ gitHub, text }) => (
    <StyledButton>
        {!gitHub ? (<Letter />) : null
        }
        <ButtonText>
            {text}
        </ButtonText>
    </StyledButton>
);

export default Button;