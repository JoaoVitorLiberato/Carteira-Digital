import { Container } from "./styled";
import { ISelectProps } from './../../types/index';

export default function SelectInput(props: ISelectProps) {
    return (
        <Container>
            <select>
                {props.options.map(option => (
                    <option value={option.value} >{option.label}</option>
                ))}
            </select>
        </Container>
    );
}