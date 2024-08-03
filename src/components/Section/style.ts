import styled from "styled-components";

export const WrapperSection = styled.section<{ $color?: string }>`
    width: 100%;
    height: auto;
    background: ${props => props.$color || "none"};
`;

export const ContainerSection = styled.div`
    width: 100%;
    max-width: ${props => props.theme.size.sm};
    padding: ${props => props.theme.padding.sm};
    height: auto;
    margin: 0 auto;

    @media (min-width: ${props => props.theme.breakpoint.md}){
        max-width: ${props => props.theme.size.md};
        padding: ${props => props.theme.padding.md}
    }

    @media (min-width: ${props => props.theme.breakpoint.lg}){
        max-width: ${props => props.theme.size.lg};
        padding: ${props => props.theme.padding.lg}
    }

    @media (min-width: ${props => props.theme.breakpoint.xl}){
        max-width: ${props => props.theme.size.xl};
        padding: ${props => props.theme.padding.xl}
    }

    @media (min-width: ${props => props.theme.breakpoint.xxl}){
        max-width: ${props => props.theme.size.xxl};
        padding: ${props => props.theme.padding.xxl}
    }
`;