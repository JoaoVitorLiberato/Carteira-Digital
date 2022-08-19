import { useMemo, useState } from "react";


import gains from "../../data/gains";
import expenses from "../../data/expenses";
import { listOfMonths } from "../../utils/months";

import { Container, Content, ContentWalletBox, ContentMessageBox } from "./style";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";

import HappyEmoji from '../../assets/happy.svg'
import SadEmoji from '../../assets/sad.svg'


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
                        amount={150.00}
                        footerLabel="Atualizado com base nas entradas e saídas."
                        icon="Dolar"
                        color="#4E41F0"
                    />
                    <WalletBox
                        title="Entradas"
                        amount={5000.00}
                        footerLabel="Atualizado com base nas entradas e saídas."
                        icon="ArrowUp"
                        color="#F7931B"
                    />
                    <WalletBox
                        title="Saídas"
                        amount={4850.00}
                        footerLabel="Atualizado com base nas entradas e saídas."
                        icon="ArrowDown"
                        color="#E44C4E"
                    />
                </ContentWalletBox>
                <ContentMessageBox>
                    <MessageBox
                        title="Muito bem!"
                        icon={HappyEmoji}
                        descripion="Sua carteira está positiva!"
                        footerText="Continue assim. Considere investi seu saldo."
                    />
                    <MessageBox
                        title="Muito bem!"
                        icon={HappyEmoji}
                        descripion="Sua carteira está positiva!"
                        footerText="Continue assim. Considere investi seu saldo."
                    />
                </ContentMessageBox>
            </Content>
        </Container>
    );
}