import { breakpoint } from "@utils/breakpoints";
import { styled } from "styled-components"

export const HomeHeader = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 3.7rem;

    .btn-more{
        display: none;
    }

    .arrow{
        display: none;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 3rem;
        fill: white;
    }

    @media (min-width: ${breakpoint.md}){
        .btn-more{
            display: block;
        }
        
        .arrow{
            display: block;
        }
    }
`;

export const TitleHeader = styled.h1`
    font-size: 5.3rem;
    font-weight: 400;
    line-height: 5rem;
    letter-spacing: -.25rem;
    text-align: center;
    color: white;

    @media (min-width: ${breakpoint.md}){
        font-size: 9rem;
        line-height: 8rem;
        letter-spacing: -.5rem;
        max-width: 59.3rem;
    }
`;

export const SearchHeader = styled.button`
    width: 100%;
    max-width: 40rem;
    height: 4.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border-radius: ${props => props.theme.radius.full};
    padding: .5rem .5rem .5rem 2rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1%.6;
    letter-spacing: -.05rem;

    .wrapper-icon{
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${props => props.theme.radius.full};
        background: ${props => props.theme.color.primary};

        .icon{
            fill: white;
            font-size: 1.3rem;
        }
    }

    @media (min-width: ${breakpoint.md}){
        display: none;
    }
`;