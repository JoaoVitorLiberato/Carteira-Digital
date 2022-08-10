import { useMemo } from "react";

import { HeaderStyled, Profile, Welcome, Username } from "./style";
import emojis from "../../utils/emojis";
import Toggle from "../Toggle";

export default function Header() {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, [])

    return (
        <HeaderStyled>
            <Toggle/>
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Username>João Vitor</Username>
            </Profile>
        </HeaderStyled>
    );
}