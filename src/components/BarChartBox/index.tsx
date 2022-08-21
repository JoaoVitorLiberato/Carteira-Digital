import { Container, Legend, LegendContainer, SideLeft, SideRight } from './styled'
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip,
} from "recharts";

import { IbarChatProps } from '../../types';
import formartCurrency from '../../utils/formatCurrency';


export default function BarChartBox(props: IbarChatProps) {
    return (
        <Container>
            <SideLeft>
                <h2>{props.title}</h2>
                <LegendContainer>
                    {
                        props.data.map(indicator => (
                            <>
                                <Legend key={indicator.name} color={indicator.color}>
                                    <div>{indicator.percent}%</div>
                                    <span>{indicator.name}</span>
                                </Legend>

                            </>
                        ))
                    }
                </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={props.data}>
                        <Tooltip formatter={(value: number) => formartCurrency(value)} />
                        <Bar dataKey={'amount'} name='Valor'>
                            {
                                props.data.map((indicator) => (
                                    <Cell
                                        key={indicator.name}
                                        cursor="pointer"
                                        fill={indicator.color}
                                    />
                                ))
                            }
                        </Bar>
                        <Tooltip
                            cursor={{ fill: 'none' }}
                            formatter={(value: number) => formartCurrency(value)}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );
}