export interface IChildren{
    children: JSX.Element;
}

export interface ISelectProps{
    options: {
        value: string | number,
        label: string | number
    }[],
    
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
