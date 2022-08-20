import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { IHistoryProps } from '../../types';
import {
    Container,
    ChartContainer,
    LegendContainer,
    LegendText,
    HeaderContainer
} from './styled'

import formartCurrency from '../../utils/formatCurrency';


export default function HistoryBox(props: IHistoryProps) {
    return (
        <Container>
            <HeaderContainer>

                <h2>Histórico de saldo</h2>

                <LegendContainer>
                    <LegendText color={props.lineColorAmountEntry}>
                        <div></div>
                        <span>Entradas</span>
                    </LegendText>
                    <LegendText color={props.lineColorAmountOutput}>
                        <div></div>
                        <span>Saídas</span>
                    </LegendText>
                </LegendContainer>
            </HeaderContainer>
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={props.data} margin={{ top: 5, bottom: 5, right: 20, left: 20 }}>
                        <CartesianGrid strokeDasharray='3 3' stroke="#cecece" />
                        <XAxis dataKey='month' stroke='#cecece' />
                        <Tooltip formatter={(value: number) => formartCurrency(value)}/>
                        <Line
                            type='monotone'
                            dataKey='amountEntry'
                            name='Entradas'
                            stroke={props.lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type='monotone'
                            dataKey='amountOutput'
                            name='Saídas'
                            stroke={props.lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    );
}