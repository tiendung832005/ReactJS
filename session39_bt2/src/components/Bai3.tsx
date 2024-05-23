import React, { useCallback, useState } from 'react'

export default function Bai3() {
    const [color, setColor] = useState('#fffff');

    const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=> {
        setColor(e.target.value)
    }, []);
  return (
    <div>
        <input type="color" value={color} onChange={handleChange} />
        <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            marginTop: "10px"
        }}>

        </div>
    </div>
  )
}
