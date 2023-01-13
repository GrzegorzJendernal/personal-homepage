import styled from "styled-components";

export const Box = styled.article`
    width: 1032px;
    height: 384px;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: center;
    align-items: center;
    grid-gap: 40px;
`;

export const Photo = styled.img`
    width: 25vw;
    max-width: 398px;
    height: auto;
    object-fit: contain;
    border-radius: 50%;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.1), 0px 16px 58px rgba(9, 10, 51, 0.1);
    `;