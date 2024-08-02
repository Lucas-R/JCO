import { ArrowDown, MagnifyingGlass } from "@phosphor-icons/react";
import { Header } from "@components/Header";
import { Menu } from "@components/menu";
import { Button } from "@components/Button";
import * as S from './style'

import BannerHeader from "/home/header.svg"

export function Home() {
    function handleFilter() {
        console.log("filter");
    }

    function handleMore() {
        console.log("More");
    }

    return (
        <>
            <Menu type="unique"/>
            <Header src={BannerHeader} opacity={5}>
                <S.HomeHeader>
                    <S.TitleHeader> Prazer de morar nos Jardins </S.TitleHeader>

                    <S.SearchHeader onClick={handleFilter}>
                            Encontre o seu imóvel
                            <span className="wrapper-icon">
                                <MagnifyingGlass className="icon" />
                            </span>
                    </S.SearchHeader>

                    <Button 
                        type="outline" 
                        color="white"
                        className="btn-more" 
                        fn={handleMore}
                    >
                        Saiba Mais
                    </Button>

                    <ArrowDown className="arrow" />
                </S.HomeHeader>
            </Header>
        </>
    )
}