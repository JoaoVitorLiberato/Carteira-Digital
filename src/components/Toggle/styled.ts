import styled from "styled-components";
import ToggleTheme, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
`;

export const ToggleLabel = styled.span`
    color:  ${props => props.theme.colors.white};
`;

export const ToggleSelector = styled(ToggleTheme).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning,
    })

)<ReactSwitchProps>`
    margin: 0 7px;
`;