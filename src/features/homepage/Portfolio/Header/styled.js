import styled from "styled-components";
import { ReactComponent as Cat } from "../../images/github.svg";

export const Container = styled.div`
    text-align: center;
`;

export const Logo = styled(Cat)`
    width: 40px;
    height: auto;
    color: ${({ theme }) => theme.colors.portfolio.logo};
    transition: 0.4s;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 32px;
    }
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.portfolio.title};
    margin-top: 13px;
    margin-bottom: 8px;
    transition: 0.4s;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        font-size: 26px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 22px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
        margin-bottom: 16px;
    }
`;