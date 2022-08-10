import { Container, ToggleLabel, ToggleSelector } from "./styled";



export default function Toggle(){
    return(
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={() => console.log('Mudou novamente.') }
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    
    );
}