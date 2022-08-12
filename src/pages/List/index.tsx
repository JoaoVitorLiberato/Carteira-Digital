import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { Container, Content, Filters } from "./styled";

import gains from "../../data/gains";
import expenses from "../../data/expenses";
import formartCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import {listOfMonths} from "../../utils/months";
import { IData } from "../../types";


export default function List() {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

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
        return params.type === 'entry-balance' ? gains : expenses;
    }, [params.type]);

    const months = useMemo(() => {
        
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        })
    
    }, [])

    const years = useMemo(() => {
        let uniqueyears: number[] = []

        dataList.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueyears.includes(year)) {
                uniqueyears.push(year)
            }
        });

        return uniqueyears.map(year => {
            return {
                value: year,
                label: year,
            }
        })
            ;
    }, [dataList])

    useEffect(() => {

        const filteredDate = dataList.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        });

        const formattedData = filteredDate.map(item => {
            return {
                id: String(new Date().getTime()) + item.amount,
                description: item.description,
                amountFormatted: formartCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        })

        setData(formattedData)

    }, [dataList, monthSelected, yearSelected, data.length]);

    return (
        <Container>
            <ContentHeader title={content.title} lineColor={content.lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
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
                            subTitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))}
            </Content>

        </Container>
    );
}