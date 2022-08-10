import { Container, TitleContainer , Controllers } from './styled'
import { IcontentHeader } from '../../types';

export default function ContentHeader(props: IcontentHeader) {

    return (
        <Container>
            <TitleContainer lineColor={props.lineColor}>
                <h1>{props.title}</h1>
            </TitleContainer>
            <Controllers>
                {props.children}
            </Controllers>
        </Container>
    );
}