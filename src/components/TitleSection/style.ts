import styled from 'styled-components'

export const Title = styled.h2`
    font-size: 2.8rem;
    line-height: 2rem;
    letter-spacing: .028rem;
    margin-bottom: 1.3rem;

    @media (min-width: ${props => props.theme.breakpoint.md}){
        font-size: 3.6rem;
        line-height: 4rem;
        letter-spacing: .036rem;
        margin-bottom: 1rem;
    }
`;