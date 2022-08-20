import { useMemo, useState } from "react";


import gains from "../../data/gains";
import expenses from "../../data/expenses";
import { listOfMonths } from "../../utils/months";

import { Container, Content, ContentWalletBox, ContentMessageBox, ContentHistoryBox } from "./style";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChartComponent from "../../components/PieChartComponent";
import HistoryBox from "../../components/HistoryBox";

import HappyEmoji from '../../assets/happy.svg';
import SadEmoji from '../../assets/sad.svg';
import GrinningEmoji from '../../assets/grinning.svg';



export default function Dashboard() {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

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

        [...gains, ...expenses].forEach(item => {
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
    }, []);

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch (error) {
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch (error) {
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;

    }, [totalGains, totalExpenses]);

    const message = useMemo(() => {
        if (totalBalance > 0) {
            return {
                title: "Muito bem!",
                icon: HappyEmoji,
                descripion: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investi seu saldo."
            }
        } else if (totalBalance === 0) {
            return {
                title: "Ufaa!",
                icon: GrinningEmoji,
                descripion: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tome cuidado. No próximo tente poupar seu dinheiro."
            }

        } else {
            return {
                title: "Que triste!",
                icon: SadEmoji,
                descripion: "Neste mês você gastou mais que deveira.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias."
            }
        }

    }, [totalBalance]);

    const relationExpensesVsGains = useMemo(() => {
        const total = totalGains + totalExpenses;
        const gainsPercent = (totalGains / total) * 100;
        const expensesPercent = (totalExpenses / total) * 100;

        const data = [
            {
                name: 'Entradas',
                value: total,
                percent: Number(gainsPercent.toFixed(1)),
                color: '#F7931B'
            },
            {
                name: 'Saídas',
                value: total,
                percent: Number(expensesPercent.toFixed(1)),
                color: '#E44C4E'
            },
        ]

        return data;

    }, [totalGains, totalExpenses]);

    const historyData = useMemo(() => {
        return listOfMonths.map((_, index) => {
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if (gainMonth === index && gainYear === yearSelected) {
                    try {
                        amountEntry += Number(gain.amount);
                    } catch (error) {
                        throw new Error('AmountEntry is invalid. AmountEntry must be number.')
                    }
                }
            });

            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if (expenseMonth === index && expenseYear === yearSelected) {
                    try {
                        amountOutput += Number(expense.amount);
                    } catch (error) {
                        throw new Error('AmountOutput is invalid. AmountOutput must be number.')
                    }
                }
            });
            return {
                monthNumber: index,
                month: listOfMonths[index].substring(0, 3),
                amountEntry,
                amountOutput,
            }
        })
            // .filter(item => {
            //     const currentMonth = new Date().getMonth();
            //     const currentYear = new Date().getFullYear();

            //     return (yearSelected === currentYear && Number(item.month) <= currentMonth ) || (yearSelected < currentMonth);
            // })
    }, [yearSelected]);

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

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected} />

                <SelectInput options={years}
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected} />
            </ContentHeader>
            <Content>
                <ContentWalletBox>
                    <WalletBox
                        title="Saldo"
                        amount={totalBalance}
                        footerLabel="Atualizado com base nas entradas e saídas."
                        icon="Dolar"
                        color="#4E41F0"
                    />
                    <WalletBox
                        title="Entradas"
                        amount={totalGains}
                        footerLabel="Atualizado com base nas entradas e saídas."
                        icon="ArrowUp"
                        color="#F7931B"
                    />
                    <WalletBox
                        title="Saídas"
                        amount={totalExpenses}
                        footerLabel="Atualizado com base nas entradas e saídas."
                        icon="ArrowDown"
                        color="#E44C4E"
                    />
                </ContentWalletBox>
                <ContentMessageBox>
                    <MessageBox
                        title={message.title}
                        icon={message.icon}
                        descripion={message.descripion}
                        footerText={message.footerText}
                    />
                    <PieChartComponent data={relationExpensesVsGains} />
                </ContentMessageBox>
                <ContentHistoryBox>
                    <HistoryBox
                        data={historyData}
                        lineColorAmountEntry="#F7931B"
                        lineColorAmountOutput="#E44C4E"

                    />
                </ContentHistoryBox>
            </Content>
        </Container>
    );
}