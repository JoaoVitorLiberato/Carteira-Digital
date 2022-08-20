import styled from "styled-components";
import { ILegendProps } from "../../types";

export const Container = styled.div`
    width: 100%;
    height:330px;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;
`;

export const ChartContainer = styled.div`
    flex: 1;
    height: 260px;

`;

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > h2{
        margin-bottom: 10px;
        padding-left: 16px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 16px;
`;

export const LegendText = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin-left: 7px;

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