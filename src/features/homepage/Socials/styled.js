import styled from "styled-components";


export const LinkBox = styled.div`
    max-width: 1186px;
    display: flex;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        gap: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 16px;
    }
`;

export const SocialLink = styled.a`
    color: ${({ theme }) => theme.colors.socials.link};
    transition: ${({ theme }) => theme.transition.time};

    &:hover {
        color: ${({ theme }) => theme.colors.socials.hover};
    }
`;

export const styledIcon = (Icon) => styled(Icon)`
    width: 48px;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 32px;
    }
`;