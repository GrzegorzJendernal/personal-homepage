import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 115px;
  margin: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-top: 65px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 22px;
  }
`;
