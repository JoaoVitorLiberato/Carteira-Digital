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