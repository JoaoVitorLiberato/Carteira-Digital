import { Container } from "./styled";
import { ISelectProps } from './../../types/index';

export default function SelectInput(props: ISelectProps) {
    return (
        <Container>
            <select onChange={props.onChange} defaultValue={props.defaultValue}>
                {props.options.map(option => (
                    <option key={option.value} value={option.value} >{option.label}</option>
                ))}
            </select>
        </Container>
    );
}