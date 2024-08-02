import styled from "styled-components";
import BrandSmall from '/brand/small-black.svg'
import BrandFull from '/brand/full-white.svg'
import { breakpoint } from "../../utils/breakpoints"

export const WrapperMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;

    &.primary{
        background: white;
        border-bottom: .1rem solid ${props => props.theme.color.gray};
    }
`;

export const Brand = styled.div`
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    &.unique{
        background-image: url(${BrandFull});
        width: 20rem;
        height: 2.75rem;
    }

    &.primary{
        background-image: url(${BrandSmall});
        width: 9rem;
        height: 1.678rem;
    }

    @media (min-width: ${breakpoint.md}){
        width: 28.5rem;
        height: 3.945rem;
    }
`;

export const Actions = styled.div`
    .menu{
        width: 2.2rem;
        height: 1.467px;

        .icon{
            font-size: 2.2rem;
        }
    }

    &.unique{
        .menu{
            .icon{
                fill: white;
            }

            @media (min-width: ${breakpoint.md}){
                display: none;
            }
        }
    }

    &.primary{
        @media (min-width: ${breakpoint.md}){
            .menu{
                .icon{
                    font-size: 2.7rem;
                }
            }
        }
    }
`;

export const Nav = styled.nav<{$open: boolean}>`
    position: fixed;
    top: 0;
    right: ${props => props.$open ? "0%" : "100%"};
    width: 100%;
    height: 100vh;
    background: white;
    transition: all .5s;

    .nav-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: auto;
        padding: 2.5rem 3rem;
        border-bottom: .1rem solid ${props => props.theme.color.gray};

        .nav-brand{
            width: 9rem;
            height: 1.678rem;
            background-image: url(${BrandSmall});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }

        .nav-actions{
            display: flex;
            align-items: center;
            column-gap: 1rem;

            .nav-search{
                font-size: 2.6rem;
            }

            .nav-close{
                font-size: 2.6rem;
            }
        }
    }

    .nav-content{
       padding: 0 3.5rem;

        .content-section{
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 2.5rem 0;
            row-gap: 1.5rem;

            &:not(:last-child){
                border-bottom: .1rem solid ${props => props.theme.color.gray};
            }

            .dropdown{
                display: flex;
                flex-direction: column;
                row-gap: 1.5rem;
            }

            .content-link{
                display: flex;
                align-items: center;
                justify-content: space-between;
                text-align: left;
                font-size: 1.9rem;
                font-weight: 500;
                line-height: 3.1rem;
                letter-spacing: -.1rem;
                cursor: pointer;

                &.secondary{
                    font-weight: 400;
                }
            }

            .wrapper-areas{
                display: grid;
                grid-template-columns: repeat(2, 1fr);

                .areas-link{
                    font-size: 1.4rem;
                    line-height: 2.5rem;
                    letter-spacing: -.1rem;
                }
            }
        }
    }

    @media (min-width: ${breakpoint.md}){
        &.unique{
            position: relative;
            right: 0;
            width: auto;
            height: auto;
            background: none;

            .nav-header{
                display: none;
            }

            .nav-content{
                display: flex;
                column-gap: 3.4rem;
                padding: 0;

                .content-section{
                    border-bottom: none !important;
                    flex-direction: row;
                    column-gap: 3.4rem;
                    padding: 0;
                    
                    .content-link{
                        color: white;
                        font-size: 1.3rem;
                        font-weight: 300;
                        line-height: 1.6rem;
                        letter-spacing: 0;
                        text-transform: uppercase;

                        .icon{
                            display: none;
                        }

                        &:hover{
                            text-decoration: underline;
                        }
                    }

                    .content-link:hover+.dropdown{
                        display: flex;
                    }

                    .dropdown{
                        position: absolute;
                        top: 0rem;
                        left: 0;
                        width: 20rem;
                        padding-top: 3.2rem;
                        display: none;
                        cursor: pointer;

                        &:hover{
                            display: flex;
                        }
                    }

                    &.areas{
                        display: none;
                    }
                }
            }
        }

        &.primary{
            top: 6.9rem;
            right: 3rem;
            width: 24.2rem;
            height: auto;
            border-radius: ${props => props.theme.radius.md};
            display: ${props => props.$open ? "block" : "none"};
            border: .1rem solid ${props => props.theme.color.gray};

            .nav-header{
                display: none;
            }

            .nav-content{
                padding: 0 2.5rem;

                .content-section{
                    row-gap: 3rem;

                    &:not(:last-child){
                        border-bottom: none;
                    }

                    &:first-child{
                        border-bottom: .1rem solid ${props => props.theme.color.gray}; 
                    }

                    &.areas{
                        display: none;
                    }

                    .content-link{
                        font-size: 1.5rem;
                        font-weight: 500;
                        line-height: 1.6rem;
                        letter-spacing: -.07rem;

                        &.secondary{
                            font-weight: 400;
                        }
                    }

                    .dropdown{
                        row-gap: 3rem;
                    }
                }
            }
        }
    }
`;