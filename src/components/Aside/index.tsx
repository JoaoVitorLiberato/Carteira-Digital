import { useState } from "react";

import {
    Container,
    Header,
    LogoImg,
    MenuContainer,
    Title,
    MenuItemLink,
    ToggleMenu,
    ThemeToogleFooter
} from "./style";

import Logo from '../../assets/logo.svg'

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md'

import { useTheme } from '../../context/Theme'
import Toggle from "../Toggle";



export default function Aside() {
    const [toggleisOpen, setToggleisOpen] = useState(false);
    const { toggleTheme, theme } = useTheme()
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);


    function handleChangeTheme() {
        setDarkTheme(!darkTheme)
        toggleTheme()
    }

    function handleToggleMenu() {
        setToggleisOpen(!toggleisOpen);
    }

    return (
        <Container menuIsOpen={toggleisOpen}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleisOpen ? <MdClose /> : <MdMenu />}
                </ToggleMenu>

                <LogoImg src={Logo} alt='Logo Carteira digital' />
                <Title> Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href='/'>
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
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>

            <ThemeToogleFooter menuIsOpen={toggleisOpen}>
                <Toggle
                    checked={darkTheme}
                    labelLeft="Light"
                    labelRight="Dark"
                    onChange={handleChangeTheme}
                />
            </ThemeToogleFooter>
        </Container>
    );
}