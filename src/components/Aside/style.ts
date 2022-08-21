import styled, { css } from "styled-components";
import { IThemeToogleFooter, IToogleMediaProps } from "../../types";


export const Container = styled.div<IToogleMediaProps>`
    grid-area: AS;
    background-color: ${ props => props.theme.colors.secondary };
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray} ;
    position: relative;

    @media(max-width: 600px) {
        width: 200px;
        padding-left: 20px;
        position: fixed;
        z-index: 2;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${ props => props.theme.colors.gray};
        `};

    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;


`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px){
      display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px){
       display: none;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
   color: ${props => props.theme.colors.info};
   display: flex;
   align-items: center;
   text-decoration: none;
   transition: opacity .3s;
   margin: 7px 0;

   &:hover{
       opacity: .7;
   }
   
   > svg{
       font-size: 18px;
       margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};
    transition: opacity 0.3;

    &:hover{
        opacity: 0.7;
    }

    display: none;
    
    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToogleFooter = styled.footer<IThemeToogleFooter>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 480px){
      display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }

`;