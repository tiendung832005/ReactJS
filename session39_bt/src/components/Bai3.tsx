import React, { useContext } from 'react';
import ThemeContext from './Bai1';

function Bai3() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ backgroundColor: theme || 'transparent' }}>
      Click me
    </button>
  );
}

export default Bai3;