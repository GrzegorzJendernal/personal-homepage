import styled from "styled-components";

export const DescriptionText = styled.p`
  font-size: 20px;
  margin: 0;
  white-space: pre-wrap;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.descriptionText};
  transition: ${({ theme }) => theme.transition.time};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 17px;
  }
`;
