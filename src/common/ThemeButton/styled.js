import styled from "styled-components";
import { ReactComponent as Sun } from "./sun.svg";

export const Sunny = styled(Sun)`
    width: 14px;
    height: 14px;
`;

export const Circle = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 3px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.slateGray};
`;

export const Button = styled.button`
    display: grid;
    align-content: center;
    width: 48px;
    height: 26px;
    border: solid 1px ${({ theme }) => theme.color.slateGray};
    border-radius: 13px;
    padding: 3px;
`;

export const Container = styled.div`
    width: 154px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Text = styled.span`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.color.slateGray};
`;