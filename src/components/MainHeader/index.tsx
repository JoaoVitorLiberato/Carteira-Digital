import { useMemo, useState } from "react";

import { useTheme } from '../../context/Theme'

import { HeaderStyled, Profile, Welcome, Username } from "./style";
import Toggle from "../Toggle";

import emojis from "../../utils/emojis";

 

export default function Header() {

    const {toggleTheme, theme} = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark'  ? true : false);

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <HeaderStyled>
            <Toggle
                checked={darkTheme}
               labelLeft="Light"
               labelRight="Dark"
               onChange={handleChangeTheme} 
            />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Username>João Vitor</Username>
            </Profile>
        </HeaderStyled>
    );
}