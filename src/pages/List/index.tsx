import { useMemo } from "react";
import { useParams } from "react-router-dom";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { Container, Content, Filters } from "./styled";




export default function List() {
   
    const params = useParams();
    const content = useMemo(() => {
        return params.type === 'entry-balance' ? {

            title: 'Entradas',
            lineColor: '#F7931B',

        } : {

            title: 'Saídas',
            lineColor:'#E44C4E',

        };

    }, [params.type]);


    const months = [
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' },
    ];

    const years = [
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
        { value: 2018, label: 2018 },
    ];

    return (
        <Container>
            <ContentHeader title={content.title} lineColor={content.lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4e"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 130,00"

                />
            </Content>

        </Container>
    );
}