import { Link } from "react-router-dom";
import { AsideStyled, Header, LogoImg, MenuContainer, Title, MenuItemLink } from "./style";
import Logo from '../../assets/logo.svg'
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

export default function Aside() {
    return (
        <AsideStyled>
            <Header>
                <LogoImg src={Logo} alt='Logo Carteira digital' />
                <Title> Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href='/dashboard'>
                    <MdDashboard />
                    Dasboard
                </MenuItemLink>
                <MenuItemLink href='/list/entry-balance'>
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href='/list/exit-balance'>
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                <MenuItemLink href='/exit'>
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </AsideStyled>
    );
}