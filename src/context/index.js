import React, { useMemo, useState } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
const { createContext } = require("react");
import themes from '../styles/themes'


export const ThemeContext = createContext('dark')

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    const selectedTheme = useMemo(() => {
        return themes[theme] || themes.dark;
    }, [theme])

    function handleToggleTheme() {
        setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider
            value={{
                selectedTheme: selectedTheme,
                onToggleTheme: handleToggleTheme
            }}
        >
            <StyledProvider theme={selectedTheme}>
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    )
}

