import React, { useState } from 'react'

export default function Bai3() {
    const[color, setColor] = useState<string>("black");

    const handleClick = () => {
        setColor(color === "black"? "red" : "black");
    }
  return (
    <div>
        <h3 style={{color}}>Tiêu đề băn bản</h3>
        <button onClick={handleClick}>Thay đổi màu</button>
    </div>
  )
}
