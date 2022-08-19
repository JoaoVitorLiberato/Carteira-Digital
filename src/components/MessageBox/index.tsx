import { Container } from './styled'
import { IMessageBox } from '../../types';

export default function MessageBox(props: IMessageBox) {
    return (
        <Container>
            <header>
                <h1>
                    {props.title}
                    <img src={props.icon} alt={props.title} />
                </h1>
                <p>
                    {props.descripion}
                </p>
            </header>
            <footer>
                <span>
                    {props.footerText}
                </span>
            </footer>
        </Container>
    );
}