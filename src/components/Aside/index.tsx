import { Link } from "react-router-dom";
import { AsideStyled, Header, LogoImg, MenuContainer, Title } from "./style";
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
                <Link to='/dashboard' className="MenuItemLink">
                    <MdDashboard/>
                    Dasboard
                </Link>
                <Link to='/list/entry-balance' className="MenuItemLink">
                    <MdArrowUpward/>
                    Entradas
                </Link>
                <Link to='/list/exit-balance' className="MenuItemLink">
                    <MdArrowDownward/>
                    Saídas
                </Link>
                <Link to='/exit' className="MenuItemLink">
                    <MdExitToApp/>
                    Sair
                </Link>
            </MenuContainer>
        </AsideStyled>
    );
}