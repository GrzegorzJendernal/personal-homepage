import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    gap: 56px;
    max-width: 1186px;
    margin: 0 auto;
    margin-bottom: 110px;
    color: ${({ theme }) => theme.colors.blackText};

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        gap: 50px;
        margin-bottom: 70px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 40px;
        margin-bottom: 30px;
    }
`;