import styled from "styled-components";
import { ReactComponent as Ellipse } from "./ellipse.svg"

export const Container = styled.section`
    max-width: 1216px;
    display: grid;
    grid-template-rows: 1fr auto;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.white};
    margin-bottom: 60px;
    box-shadow: ${({ theme }) => theme.boxShadow.boxShadow};
    border-radius: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 50px;
    }
`;

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    padding: 0px 16px 16px 32px;
    border-bottom: solid 1px ${({ theme }) => theme.colors.mercury};
    margin-top: 32px;
    margin-bottom: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        font-size: 26px;
        padding: 0px 14px 14px 30px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 22px;
        padding: 0px 12px 12px 26px;
        margin-top: 26px;
        margin-bottom: 26px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 18px;
        padding: 0px 8px 8px 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0px;
    list-style: none;
    margin: 0;
    margin-bottom: 32px;
`;

export const ListItem = styled.li`
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.slateGray};
    flex-basis: 33.33%;
    padding-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        font-size: 16px;
        padding-bottom: 7px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 14px;
        padding-bottom: 6px;
        flex-basis: 50%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-basis: 100%;
    }
`;

export const Point = styled(Ellipse)`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    margin-left: 32px;
    margin-right: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 6px;
        height: 6px;
        margin-left: 30px;
        margin-right: 8px;
    }
`;