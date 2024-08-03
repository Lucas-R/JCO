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

export const Selection = styled.div`
    .swiper-pagination{
        bottom: 0;

        .swiper-pagination-bullet{
            width: .4rem;
            height: .4rem;
            background: black;
            opacity: 1;

            &-active{
                background: black;
                transform: scale(1.5);
            }
        }
    }
`;

export const SelectionCard = styled.button`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 3rem;

    .card-img{
        width: 100%;
        height: 32.5rem;
        border-radius: ${props => props.theme.radius.md};
        overflow: hidden;
        margin-bottom: 2.4rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-title{
        font-size: 1.8rem;
        line-height: 2.6rem;
        text-decoration: underline;
        text-align: left;
        margin-bottom: .2rem;
    }

    .card-code{
        font-size: 1.4rem;
        line-height: 2rem;
        text-align: left;
        margin-bottom: .9rem;
    }

    .card-description{
        display: none;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-align: left;
        margin-bottom: 2.7rem;
    }

    .card-details{
        width: 100%;
        height: auto;
        margin-bottom: 2rem;

        div{
            display: flex;

            &:not(:last-child){
                margin-bottom: 1rem;
            }

            .card-info{
                font-size: 1.6rem;
                line-height: 1.2rem;
                letter-spacing: -.08rem;

                &:not(:first-child){
                    padding-left: 1rem;
                }

                &:not(:last-child){
                    padding-right: 1rem;
                    border-right: .1rem solid black;
                }
            }
        }
    }

    .card-price{
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.2rem;
        text-align: left;

        span{
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: -.1rem;
        }
    }
`;