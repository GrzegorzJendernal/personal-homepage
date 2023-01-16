import styled, { keyframes } from "styled-components";
import { ReactComponent as spinner } from "./icon-spinner.svg";

export const SpinnerBox = styled.div`
  text-align: center;
  margin-top: 88px;
`;

const rotation = keyframes` 
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(spinner)`
  width: 160px;
  height: auto;
  margin-top: 48px;
  color: ${({ theme }) => theme.colors.scienceBlue};
  animation: ${rotation} 1.5s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 140px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 110px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 80px;
  }
`;