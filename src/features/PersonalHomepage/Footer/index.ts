import styled from "styled-components";

const Footer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 56px;
  max-width: 1186px;
  margin: 0 auto 110px;
  color: ${({ theme }) => theme.colors.footerText};
  transition: ${({ theme }) => theme.transition.time};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 50px;
    margin-bottom: 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 40px;
    margin-bottom: 30px;
  }
`;

export default Footer;
