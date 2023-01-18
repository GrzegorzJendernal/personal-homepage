import styled from "styled-components";

export const Container = styled.section`
    margin-top: 24px;
    display: grid;
    gap: 32px;
    grid-template-columns: auto auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 16px;
        grid-template-columns: auto;
    }
`;

export const Tile = styled.article`
    padding: 56px;
    margin: 0;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.portfolio.tileBackground};
    box-shadow: ${({ theme }) => theme.boxShadow.boxShadow};
    border: 6px solid ${({ theme }) => theme.colors.portfolio.border};
    border-radius: 4px;

    &:hover {
        border: 6px solid ${({ theme }) => theme.colors.portfolio.borderHover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding: 24px;
    }
`;

export const Header = styled.h3`
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.portfolio.repoName};
    margin: 0;
`;

export const Paragraph = styled.p`
    margin: 0;
    margin-top: ${({ link }) => link ? "8px" : "24px"};
    font-weight: 400;
    font-size: 18px;
    align-items: center;
    text-align: justify;
    color: ${({ theme }) => theme.colors.portfolio.text};

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 14px;
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.portfolio.link};
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.portfolio};
        border-bottom: 1px solid ${({ theme }) => theme.colors.portfolio.linkHover};
    }
`;