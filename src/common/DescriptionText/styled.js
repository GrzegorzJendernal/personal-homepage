import styled from "styled-components";

export const Description = styled.p`
    font-weight: 400;
    font-size: 20px;
    margin: 0;
    white-space: pre-wrap;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.descriptionText};


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