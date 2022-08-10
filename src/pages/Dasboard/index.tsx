import { Container } from "./style";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

export default function Dashboard() {

    const options = [
        { value: 'joão', label: 'joão' },
        { value: 'maria', label: 'maria' },
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={ options } />
            </ContentHeader>
        </Container>
    );
}