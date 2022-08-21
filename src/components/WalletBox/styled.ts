import styled from "styled-components";
import { IcontainerPropsStyledWallet } from "../../types";

export const Container = styled.div< IcontainerPropsStyledWallet>`
    width: 32%;
    height: 150px;
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    border-radius: 7px;
    padding: 10px;

    position: relative;
    overflow: hidden;

    > img{
        position: absolute;
        height: 110%;
        top: -5px;
        right: -30px;
        opacity: .3;
    }

    > span{
        font-size: 18px;
        font-weight: 500;
    }

    > small{
        font-size: 12px;

        position: absolute;
        bottom: 10px;
    }

     @media(max-width: 420px){
        width: 100%;

    }

    @media(max-width: 770px) {
        > span{
            font-size: 14px;
        }

        > h1{
            word-wrap: break-word;
            font-size: 22px;

            > strong{

                width: 100%;
                font-size: 14px;
            }
        }
    } 


`;