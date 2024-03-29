import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 24px;
`;

export const Invitation = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.contact.invitation};
  transition: ${({ theme }) => theme.transition.time};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 8px;
  }
`;

export const Mail = styled.a`
  font-weight: 900;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.contact.email};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.time};

  &:hover {
    color: ${({ theme }) => theme.colors.contact.emailHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;

  margin: 0;
  max-width: 55%;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    max-width: 100%;
  }
`;
