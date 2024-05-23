import React, { useContext } from 'react';
import ThemeContext from './Bai1';

function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>{theme}</p>
    </div>
  );
}

export default ThemeDisplay;
