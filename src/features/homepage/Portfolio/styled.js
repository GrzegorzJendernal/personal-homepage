import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto 120px;

  @media (max-width: ${({theme}) => theme.breakpoints.medium}) {
    margin-bottom: 80px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.medium}) {
    margin-bottom: 48px;
  }
`;