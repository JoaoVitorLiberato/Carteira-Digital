import { useMemo } from 'react';
import CountUp from 'react-countup';

import { Container } from "./styled";

import DolarImg from '../../assets/dolar.svg'
import ArrowUpImg from '../../assets/arrow-up.svg'
import ArrowDownImg from '../../assets/arrow-down.svg'

import { IWalletBoxProps } from "../../types";

export default function WalletBox(props: IWalletBoxProps) {

    const iconSelected = useMemo(() => {
        if (props.icon === 'Dolar') return DolarImg;
        else if (props.icon === 'ArrowUp') return ArrowUpImg;
        else if (props.icon === 'ArrowDown') return ArrowDownImg;
        else return undefined;
    }, [props.icon])

    return (
        <Container color={props.color}>
            <span>{props.title}</span>
            <h1>
              
                <CountUp
                    end={ props.amount }
                    separator="."
                    decimal=","
                    decimals={2}
                    prefix="R$ "
                    preserveValue={true} 
                />
            </h1>
            <small>{props.footerLabel}</small>
            <img src={iconSelected} alt={props.title} />
        </Container>
    );
}