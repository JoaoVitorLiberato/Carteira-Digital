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
    pageData?: string | number | Date;
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


export interface ILegendProps{
   color: string;
}

export interface IPieChartProps{
    data: {
        name: string,
        value: number,
        percent: number
        color: string,
    }[];
}

export interface IHistoryProps{
    data: {
        month: string,
        amountEntry: number,
        amountOutput: number
    }[],
    lineColorAmountEntry: string,
    lineColorAmountOutput: string
}

export interface IbarChatProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[];
}

export interface ITheme{
    title: string;
    
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    },
}

export interface IThemeContext {
    toggleTheme: () => void;
    theme: ITheme;
}

export interface IToogleProps{
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange: () => void; 
} 

export interface IToogleMediaProps{
    menuIsOpen: boolean;
}

export interface IThemeToogleFooter{
    menuIsOpen: boolean;
}