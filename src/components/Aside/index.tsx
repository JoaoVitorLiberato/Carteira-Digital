import { AsideStyled, Header, LogoImg, MenuContainer, MenuItemLink, Title } from "./style";
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
                <MenuItemLink href='#'>
                    <MdDashboard/>
                    Dasboard
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </AsideStyled>
    );
}