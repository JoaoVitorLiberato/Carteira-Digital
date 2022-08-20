import { Container, SideLeft, LegendContainer, Legend, SideRight } from "./styled";
import {
    Pie,
    PieChart,
    Cell,
    ResponsiveContainer

} from 'recharts'
import { IPieChartProps } from "../../types";



export default function PieChartComponent(props: IPieChartProps) {
    return (
        <Container>
            <SideLeft>
                <h2>Relação</h2>
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
                    <PieChart>
                        <Pie
                            data={props.data}
                            labelLine={false}
                            dataKey='percent'
                        >
                            {
                                props.data.map((indicator) => (

                                    <Cell key={indicator.name} fill={indicator.color} />

                                ))
                            }

                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>

        </Container >
    );
}