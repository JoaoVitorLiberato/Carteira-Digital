import { useState, createContext, useContext } from 'react';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

import {IThemeContext, IChildren, ITheme} from '../../types'


const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider = (props: IChildren) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@theme');
        if (themeSaved) {
            return JSON.parse(themeSaved);
        } else {
            return dark;
        }
    });
    const toggleTheme = () => {
        if(theme.title === 'dark'){
            setTheme(light);
            localStorage.setItem('@theme', JSON.stringify(light));
        } else {
            setTheme(dark);
            localStorage.setItem('@theme', JSON.stringify(dark));
        }

    };
    
    return (
        <ThemeContext.Provider value={ { toggleTheme, theme } }>
            { props.children }
        </ThemeContext.Provider>
    );
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext)
    return context;
} 

export { ThemeProvider, useTheme };