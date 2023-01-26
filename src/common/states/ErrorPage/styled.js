import styled from "styled-components";
import { ReactComponent as Danger } from "./danger.svg";

export const ErrorBox = styled.div`
  text-align: center;
  margin-top: 95px;
  color: ${({ theme }) => theme.colors.errorPage};
  transition: ${({ theme }) => theme.transition.time};
`;

export const Sign = styled(Danger)`
  width: 37px;
  height: 33.34px;
  margin-bottom: 23px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 0 0 32px;

  @media (max-width: ${({theme}) => theme.breakpoints.large}) {
    font-size: 22px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.medium}) {
    font-size: 20px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 32px auto 0;
`;