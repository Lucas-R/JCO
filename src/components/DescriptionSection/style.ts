import styled from "styled-components"

export const DescriptionSection = styled.p`
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: .028rem;
    margin-bottom: 3.4rem;

    @media (min-width: ${props => props.theme.breakpoint.md}){
        font-size: 1.6rem;
        line-height: 2.4rem;
        letter-spacing: 0;
        margin-bottom: 5.3rem;
    }
`;