import { ArrowDown, MagnifyingGlass } from "@phosphor-icons/react"

import { DescriptionSection } from "@components/DescriptionSection"
import { TitleSection } from "@components/TitleSection"
import { Section } from "@components/Section"
import { Header } from "@components/Header"
import { Button } from "@components/Button"
import { Slide } from "@components/Slide"
import { Menu } from "@components/menu"

import { replacePrice } from "@utils/replacePrice"
import { DataProps } from "@utils/@types"
import { theme } from "@utils/theme"

import { useApi } from "@hooks/useApi"

import * as S from './style'
import { Pagination } from 'swiper/modules'

import BannerHeader from "/home/header.svg"

function Selection() {
    const { data } = useApi({
        url: "mock",
        selection: true
    });

    function handleLink(id: number) {
        console.log(id);
    }

    return (
        <Section>
            <S.Selection>
                <TitleSection> Seleção J&Co </TitleSection>
                <DescriptionSection> Curadoria de imóveis com o olhar J&Co </DescriptionSection>
                <Slide 
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={true}
                    modules={[Pagination]}
                    breakpoints={{
                        768 : {
                            slidesPerView: 2,
                        },
                        992 : {
                          slidesPerView: 1,
                        },
                      }}
                >
                    {
                        data.map((item: DataProps) => {
                            return (
                                <S.SelectionCard key={item.Id} onClick={() => handleLink(item.Id)}>
                                    <div className="card-img">
                                        <img src={item.UrlFoto} alt={item.Titulo} />
                                    </div>
                                    <h5 className="card-title">{item.Titulo}</h5>
                                    <p className="card-code">cod {item.Id}</p>
                                    <p className="card-description">{item.Descricao}</p>
                                    <div className="card-details">
                                        <div>
                                            <p className="card-info">{item.AreaUtil} m² úteis</p>
                                            <p className="card-info">{item.AreaTotal} m² totais</p>
                                        </div>
                                        <div>
                                            <p className="card-info">{item.Dormitorio} dorms</p>
                                            <p className="card-info">{item.Suite} suítes</p>
                                            <p className="card-info">{item.Vaga} vagas</p>
                                        </div>
                                    </div>
                                    <p className="card-price"><span>Venda: </span>{replacePrice(item.ValorVenda)}</p>
                                </S.SelectionCard>
                            )
                        })
                    }
                    
                </Slide>
            </S.Selection>
        </Section>
    )
}

function NewComming() {
    const { data } = useApi({
        url: "mock",
        newComming: true
    });

    return (
        <Section  color={theme.color.grayF6}>
            <TitleSection> Recém-chegados </TitleSection>
            <DescriptionSection> Os imóveis que acabaram de chegar </DescriptionSection>
            {
                data.splice(0, 3).map((item: DataProps) => {
                    return <h1 key={item.Id}>{item.Titulo}</h1>
                })
            }
        </Section>
    )
}

function Releases() {
    const { data } = useApi({url: "mock"});

    return (
        <Section>
            <TitleSection> Lançamentos </TitleSection>
            <DescriptionSection> Os projetos mais exclusivos do mercado </DescriptionSection>
                {
                    data.splice(0, 2).map((item: DataProps) => {
                        return <h1 key={item.Id}>{item.Titulo}</h1>
                    })
                }
        </Section>
    )
}


function Districts() {
    return (
        <Section>
            <TitleSection> Bairros </TitleSection>
        </Section>
    )
}

function Destinations() {
    return (
        <Section color={theme.color.grayF6}>
            <TitleSection> Destinos J&Co. </TitleSection>
            <DescriptionSection> O compromisso com a excelência agora no destino internacional, campo e praia </DescriptionSection>
        </Section>
    )
}

function Blog() {
    return (
        <Section>
            <TitleSection> Prazer de Morar </TitleSection>
            <DescriptionSection> A nossa publicação com conteúdos voltados para a arte, cultura, gastronomia e o bem-viver </DescriptionSection>
        </Section>
    )
}

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

            <Selection />

            <NewComming />

            <Releases />

            <Districts />

            <Destinations />

            <Blog />
        </>
    )
}