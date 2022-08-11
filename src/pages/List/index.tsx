import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { Container, Content, Filters } from "./styled";

import gains from "../../data/gains";
import expenses from "../../data/expenses";
import { IData } from "../../types";


export default function List() {
    const [data, setData] = useState<IData[]>([]);

    const params = useParams();
    const content = useMemo(() => {
        return params.type === 'entry-balance' ? {

            title: 'Entradas',
            lineColor: '#F7931B',

        } : {

            title: 'Saídas',
            lineColor: '#E44C4E',

        };

    }, [params.type]);

    const dataList = useMemo(() => {
        return params.type === 'entry-balance' ? gains : expenses
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

    useEffect(() => {
        const response = dataList.map(item => {
            return {
                id: Math.random() * data.length,
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dateFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4E41F0': '#E44C4E',
            }
        })
        setData(response)
    }, []);

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
                {
                    data.map(item => (
                        <HistoryFinanceCard
                        key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subTitle= {item.dateFormatted}
                            amount= {item.amountFormatted}
                        />
                    ))}
            </Content>

        </Container>
    );
}