import React, {useContext, useState} from 'react'
import ThemeContext from './Bai1'
 
export default function Bai4() {
    const theme= useContext(ThemeContext);
    const [color, setColor] = useState(theme);
    const toggleColor = () => {
    setColor(prevColor => (prevColor === 'blue' ? 'red' : 'blue'));
  };
  return (
    <div>
        <button style={{ backgroundColor: theme || 'transparent'}} onClick={toggleColor}>
        Click me
        </button>
      <p>Màu đâng hiện: {color}</p>
    </div>
  )
}
