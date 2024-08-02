import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List, X, MagnifyingGlass, CaretDown } from '@phosphor-icons/react'
import * as S from "./style"

export function Menu() {
    const [open, setOpen] = useState(false);

    function handleMenu(){
        setOpen(!open);
    }

    return (
        <S.WrapperMenu>
            <S.Brand />

            <S.Actions>
                <button className='menu' onClick={handleMenu}><List className='icon' /></button>
            </S.Actions>

            <S.Nav $open={open}>
                <div className="nav-header">
                    <Link className='nav-brand' to="/"></Link>
                    <div className='nav-actions'>
                        <button className='nav-search'><MagnifyingGlass /></button>
                        <button className='nav-close' onClick={handleMenu}><X /></button>
                    </div>
                </div>

                <div className="nav-content">
                    <div className="content-section">
                        <button className='content-link'>Para proprietários <CaretDown className='icon'/></button>
                        <div className="dropdown">
                            <Link className='content-link secondary' to="/gestao-exclusiva">Gestão Exclusiva J&Co</Link>
                            <Link className='content-link secondary' to="/homepricing">Precifique seu imóvel</Link>
                            <Link className='content-link secondary' to="/anuncie">Anuncie com a Jardins & Co</Link>
                        </div>
                    </div>
                    <div className="content-section">
                        <Link className='content-link' to="/sobre">A Jardins & Co</Link>
                        <Link className='content-link' to="/blog">Prazer de Morar</Link>
                        <Link className='content-link' to="/contato">Contato</Link>
                    </div>
                    <div className="content-section areas">
                        <p className="content-link">Áreas de atuação</p>
                        <div className="wrapper-areas">
                            <Link className='areas-link' to="/busca">São Paulo</Link>
                            <Link className='areas-link' to="/busca">Campo</Link>
                            <Link className='areas-link' to="/busca">Rio de Janeiro</Link>
                            <Link className='areas-link' to="/busca">Praia</Link>
                            <Link className='areas-link' to="/busca">Internacional</Link>
                        </div>
                    </div>
                </div>
            </S.Nav>
        </S.WrapperMenu>
    )
}