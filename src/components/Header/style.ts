import { styled } from 'styled-components'
import { breakpoint } from '@utils/breakpoints';

export const WrapperHeader = styled.header<{ $src?: string, $opacity?: number }>`
    width: 100%;
    height: 52rem;
    background: 
        linear-gradient(rgba(0,0,0, ${props => `.${props.$opacity}`}), rgba(0,0,0, ${props => `.${props.$opacity}`})), 
        url(${props => props.$src})
    ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: ${breakpoint.md}){
        height: 100vh;
    }
`;

export const ContainerHeader = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 4rem;
`;