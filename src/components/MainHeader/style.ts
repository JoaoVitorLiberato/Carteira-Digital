import styled from "styled-components";
import ToggleComponent from "../Toggle";

export const HeaderStyled = styled.div`
    grid-area: MH;
    /* color: ${props => props.theme.colors.white}; */
    background-color: ${props => props.theme.colors.secondary};
   
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.gray} ;
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
    padding-right: 10px;
   
`;

export const Welcome = styled.h3`
margin:0;`;

export const Username = styled.span``;



