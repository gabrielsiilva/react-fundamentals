import React, { useContext } from "react";

import { Container } from './styles';
import { ThemeContext } from "../../context";

export default function Header() {
    const { selectedTheme, onToggleTheme } = useContext(ThemeContext)

    return (
        <Container>
            <h1>My Blog</h1>
            <button
                type="button"
                onClick={onToggleTheme}>
                { selectedTheme === 'dark' ? '🌞' : '🌚'}
            </button>
        </Container>
    )
}