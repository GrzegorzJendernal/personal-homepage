import styled from "styled-components";

export const Box = styled.div`
    display: grid;
    grid-template-rows: auto auto 1fr;
`;

export const Caption = styled.span`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme.color.slateGray};
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    color: ${({ theme }) => theme.color.blackText};
`;

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: ${({ theme }) => theme.color.slateGray};
`;