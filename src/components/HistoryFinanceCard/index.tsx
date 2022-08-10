import { IHistoryFinanceCard } from '../../types';
import {Container, Tag} from './styled'

export default function HistoryFinanceCard(props: IHistoryFinanceCard){
    return(
        <Container>
            <Tag color={props.tagColor} />
            <div>
                <span>{props.title}</span>
                <small>{props.subTitle}</small>
            </div>
            <h3>{props.amount}</h3>
        </Container>
    );
}