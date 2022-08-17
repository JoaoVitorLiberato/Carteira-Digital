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
import { listOfMonths } from "../../utils/months";
import { IData } from "../../types";


export default function List() {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual'])

    const params = useParams();

    const pageData = useMemo(() => {
        return params.type === 'entry-balance' ?
            {
                title: 'Entradas',
                lineColor: '#F7931B',
                data: gains,
            }
            :
            {
                title: 'Saídas',
                lineColor: '#E44C4E',
                data: expenses,
            }

    }, [params.type])

    const months = useMemo(() => {

        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });

    }, []);

    const years = useMemo(() => {
        let uniqueyears: number[] = [];
        const { data } = pageData

        data.forEach(item => {
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
    }, [pageData]);

    function handleFrequencyClick(frequency: string) {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);
        if (alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(item => item !== frequency);
            setSelectedFrequency(filtered)

        } else {
            setSelectedFrequency((prev) => [...prev, frequency])
        }
    }

    function handleMonthSelected(month: string) {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
            throw new Error('Invalid month value. Is accept 0- 24.');
        }
    }

    function handleYearSelected(year: string) {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch {
            throw new Error('Invalid month value. Is accept integer numbers.');
        }
    }

    useEffect(() => {
        const { data } = pageData
        const filteredDate = data.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });

        const formattedData = filteredDate.map(item => {
            return {
                id: item.description.length * 10000,
                description: item.description,
                amountFormatted: formartCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });

        setData(formattedData)

    }, [pageData, monthSelected, yearSelected, data.length, selectedFrequency]);

    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>

                <SelectInput options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected} />

                <SelectInput options={years}
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected} />

            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent
                       ${selectedFrequency.includes('recorrente') && 'tag-actived'} `}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual
                       ${selectedFrequency.includes('eventual') && 'tag-actived'} `}
                    onClick={() => handleFrequencyClick('eventual')}
                >
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