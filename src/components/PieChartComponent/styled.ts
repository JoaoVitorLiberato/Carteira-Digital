import styled, { keyframes } from "styled-components";
import { ILegendProps } from "../../types";

const animate = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.aside`
    width: 48%;
    height: 260px;
    margin: 10px;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;

    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 770px){
        width: 100%;
        display: flex;
        flex: 1;

        animation: ${animate} .5s;

    }

    animation: ${animate} .5s;
`;

export const SideLeft = styled.div`
    padding: 30px 20px;

    > h2{
        margin-bottom: 20px;
    }

    @media(max-width: 1345px){
        padding: 0 15px 5px;
        margin-bottom: 7px;

        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    
`;

export const LegendContainer = styled.ul`
    list-style: none;
    max-height: 175px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    > div {
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 800;
        line-height: 40px;
        text-align: center;
    }
    > span{
        margin-left: 5px;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

`;