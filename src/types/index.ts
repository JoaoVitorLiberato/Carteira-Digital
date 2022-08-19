export interface IChildren{
    children: JSX.Element;
}

export interface ISelectProps{
    options: {
        value: string | number,
        label: string | number
    }[];
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number;
}

export interface IcontentHeader{
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

export interface ITitleContainer{
  lineColor: string;  
}

export interface IHistoryFinanceCard{
    tagColor: string
    title: string;
    subTitle: string;
    amount: string; 
}

export interface ITagProps{
    color: string;
}

export interface IData{
    id: string | number;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

export interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'Dolar' | 'ArrowUp' | 'ArrowDown' ;
    color: string;
}

export interface IcontainerPropsStyledWallet{
    color: string;
}

export interface IMessageBox{
    title: string;
    descripion: string;
    footerText: string;
    icon: string;
}