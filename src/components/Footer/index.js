import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../context';

export default function Footer() {
  const { selectedTheme, onToggleTheme } = useContext(ThemeContext)

  return (
    <Container>
      <span>My Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}