import { Container, Logo, FormTitle } from './styled'

import LogoImg from '../../assets/logo.svg'


export default function Signin() {
    return(
        <Container>
            <Logo>
                <img src={LogoImg} alt="Logo Minha Carteira" />
                <h3>Minha Carteira</h3>
            </Logo>
            <form>
                <FormTitle>Entrar</FormTitle>
                <input type="text" />
                <input type="text" />
                <button type="submit">Acessar</button>
            </form>
        </Container>
    );
}