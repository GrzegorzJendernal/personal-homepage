import styled from "styled-components";
import { ReactComponent as Sun } from "./sun.svg";

export const Sunny = styled(Sun)`
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.themeButton.sun};
`;

export const Circle = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 3px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.themeButton.circleBackground};
    transform: translateX(${({ dark }) => dark ? "20px" : "0px"});
    transition: 0.4s;
`;

export const Button = styled.button`
    display: grid;
    align-content: center;
    width: 48px;
    height: 26px;
    border: solid 1px ${({ theme }) => theme.colors.themeButton.border};
    border-radius: 13px;
    padding: 3px;
    background-color: ${({ theme }) => theme.colors.themeButton.background};
    box-shadow: ${({ theme }) => theme.boxShadow.boxShadow};
    cursor: pointer;
    transition: 0.4s;
`;

export const Container = styled.div`
    max-width: 159px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        justify-content: flex-end;
    }
`;

export const Text = styled.span`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.themeButton.text};
    margin-right: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;