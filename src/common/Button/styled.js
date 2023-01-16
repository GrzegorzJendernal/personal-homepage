import styled from "styled-components";
import { ReactComponent as Message } from "./Message.svg"

export const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
    background: ${({ theme }) => theme.colors.scienceBlue};
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    max-width: 160px;
    height: 49px;
`;

export const ButtonText = styled.span`
    height: 25px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    gap: 18px;
`;

export const Letter = styled(Message)`
    width: 24px;
    height: 24px;
`;