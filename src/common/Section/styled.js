import styled from "styled-components";
import { ReactComponent as Ellipse } from "./ellipse.svg"

export const Container = styled.section`
    max-width: 1216px;
    display: grid;
    grid-template-rows: 1fr auto;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.white};
    margin-top: 60px;
`;

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    padding: 0px 16px 16px 32px;
    border-bottom: solid 1px ${({ theme }) => theme.colors.mercury};
    margin-top: 32px;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 115px;
    list-style: none;
`;

export const ListItem = styled.li`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.slateGray};
`;

export const Point = styled(Ellipse)`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    margin-left: 32px;
    margin-right: 16px;
`;