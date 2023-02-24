import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

export const Caption = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.header.caption};
  transition: ${({ theme }) => theme.transition.time};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 8px;
  }
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.header.name};
  margin-top: 12px;
  margin-bottom: 35px;
  transition: ${({ theme }) => theme.transition.time};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 28px;
    margin-top: 8px;
    margin-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 22px;
    margin-top: 6px;
    margin-bottom: 18px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.header.text};
  margin-top: 0;
  margin-bottom: 32px;
  transition: ${({ theme }) => theme.transition.time};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 16px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;
