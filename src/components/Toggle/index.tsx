import { IToogleProps } from "../../types";
import { Container, ToggleLabel, ToggleSelector } from "./styled";



export default function Toggle(props: IToogleProps){
    return(
        <Container>
            <ToggleLabel>{props.labelLeft}</ToggleLabel>
            <ToggleSelector
                checked={props.checked}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={props.onChange }
            />
            <ToggleLabel>{props.labelRight}</ToggleLabel>
        </Container>
    
    );
}